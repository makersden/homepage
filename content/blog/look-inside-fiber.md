---
title: A look inside React Fiber - how work will get done.
layout: Post
date: 2017-07-07 15:00:00
author: Korneliusz Caputa
description: "Describing how React Fiber operates, step by step, starting from calling the `render`
function in client JS and changing state of a component, down to
describing the steps taken by Fiber to do all the work. Best served with Fiber
source code on the side."
tags:
  - react.js
  - javacsript
  - architecture
---

As we all know by now, a big change is coming inside of React. ~~with version 0.16.
It's a significant one, because it will affect the performance of more complex
React applications.~~

*(EDIT: As Dan Abramov pointed out in his comment, even though 0.16 will be
running on Fiber, it will run in synchronous mode, mimicking the "traditional" 
approach to rendering. This will not confer any changes in application behavior or
performance. The async Fiber APIs will be exposed in some ways but will not be
the default mode of operation. Read on nevertheless!)*


The crux of the change is transitioning from processing updates in a synchronous,
recursive way to relying on asynchronous scheduling and prioritization of
interface changes.
The desired result is 60 FPS and a pristine user experience.
It's been a while since the announcement already, and
[many good things](<https://www.youtube.com/watch?v=aV1271hd9ew>)
[have been said](<https://www.youtube.com/watch?v=ZCuYPiUIONs>)
[and written](<https://github.com/acdlite/react-fiber-architecture>).
However, I like to see things for myself and understand how they work from the ground
up. There were also a few topics that lacked "press coverage".

Thus, down the rabbit hole I went!

Fiber is not the most straightforward piece of software, both conceptually and
code-wise, so it should be approached in a structured way.
This post will go outside-in - starting from calling the `render`
function in client JS and changing state of a component, down to
describing the steps taken by Fiber to do all the work.
At a few points along the way you will be given a choice to go further down or
return to the tip and track your way back to the same point from a different
origin.

If you feel like it, you can grab the Fiber codebase from Github and track your
way through the post in the code, starting [here](<https://github.com/facebook/react/blob/master/src/renderers/dom/fiber/ReactDOMFiberEntry.js>).

React source code is sprinkled with a lot of error handling, dev logging and
performance measurement calls. I'm going to skip those and focus on the main
logic for the sake of clarity.

Another point to note is that currently Fiber code is coupled to the DOM
renderer in a few places, because things are still developing, as I understand it.
I'll try to avoid referring to it, but you can assume that "the renderer" means
"the DOM renderer" in this post.


<a id="org882dfad"></a>

## The first render: scratching the surface

So you have your HTML skeleton in place, relevant JS is loaded, and you hit that
first `render` call. Because the page and the fiber tree is empty (there is no `root`), Fiber knows
that it doesn't have to worry about asynchronous processing, since nothing
should be happening outside of React itself.
So it creates a fiber instance that will represent your container as the root of
the fiber tree.
Then it tells the `Scheduler` that what happens next should be considered as `unbatchedUpdates`.
The update in question is telling the `Reconciler` to `updateContainer`, where
the `container` is the root fiber that has just been created.

"Updating the container" at this point means the following:

1. **Set the root fiber `context`. **
Yeah, the thing that the docs tell you to avoid using. 
Overall I haven't found anything relevant to this post there.

2. **Push an update into the update queue of the root fiber.**
   The "bulk" of the update is the `state`. At that moment in the `Scheduler`
   context it is called `nextState`, because this state is what will be
   happening next. In the context of the update queue it is called
   `partialState`, because it will be merged with the `prevState`.
   It is also the state you use in your React components.
    
   React's composability is nicely visible here - if you squint just a little,
   rendering your application is not much more than a glorified `setState` call.
    
   The update has a set priority level - remember that the `Scheduler` has been
   told to do `unbatchedUpdates`? Because of that the priority level is set to
   `SynchronousPriority`. It means that this update must be done ASAP, without
   worrying about blocking the UI thread. The priority is being used to
   determine where in the fiber's update queue this particular update should go.
   In this case the queue is empty, so it will be the head. Even if the queue wasn't
   empty though, it's ordered by descending priority - the update would still go
   to the front (given there are no prior `SynchronousPriority` updates there already).
3. **Tell the `Scheduler` to schedule the update work to be done.**
   This is where the ball gets rolling.
   When the `Scheduler` is told to schedule an update, it looks at the
   nodes in the fiber tree, traversing it using the `return` property of each fiber.
   
   This property is pointing to a node which should be worked on next in case a
   work phase gets interrupted (more on that later). For the sake of simplicity
   you can assume it's the parent fiber.
   
   So the `Scheduler` goes up the tree starting from the node that the update
   should be scheduled for, bumping up priorities where needed along the way,
   until it reaches the root. It can see that it's at the root, because there is
   no `return` node from it.
   In the current case (initial render), the update has been scheduled for the
   root node, so we're already there.
   
   Upon reaching the root, the `Scheduler` puts it in a `scheduledRoot` list
  (more about this later, that's how it later finds new work to do) and finally
   schedules the work according to given priority. In our example it's
   `SynchronousPriority`, so it jumps to the "doing work" phase immediately.
   
   That's all there is to `render`. The "doing work" phase is generic across all
   the flows, so it's described in it's own chapter. You can go there now if you
   feel the flow. Alternatively, you can read how Fiber arrives at this phase
   when you call `setState` if you need a bit more context.

<a id="orgc07b371"></a>

## Changing state: it's not too exotic

Each React component instance has an `updater`.
The `updater` is an injected dependency and mediates the communication between
the components and the React core.

With Fiber, the `updater` has 4 responsibilities:

1. Find a fiber instance in the tree that corresponds to this component.
2. Ask the `Scheduler` about the priority level for this fiber.
3. Push updates to the fiber's update queue.
4. Schedule update work to be done with the determined priority level.

Sounds familiar? It should, because that's almost exactly the same thing that
happens on render.

You probably know that, but I should point out that there are two forms of arguments
it can be called with:

-   `setState({ ... }, [callback])`
-   `setState((prevState, props) => ({ ... }), [callback])`

It's not crucial at this point, but good for you to keep in mind as the
first form will eventually become deprecated. More on that later.

Ok, so you call `setState((prevState, props) => ({ ... }), [callback])`
in your component. It tells its `updater` to enqueue a `setState`.

Let's go through the 4 responsibilities.

### 1. Find a fiber instance in the tree that corresponds to this component.
   It's just getting a thing from the `ReactInstanceMap` - which is just that, a
   map, nothing fancy. One perhaps slightly interesting thing about it is that
   it maps from public facing instances to internal methods. Example:
    
```javascript
get: function(key) {
  return key._reactInternalInstance;
},
```

### 2. Ask the `Scheduler` about the priority level for this fiber.
   There is a `Scheduler` method called `getPriorityContext` that provides a
   suitable priority level for a fiber update. For all intents and purposes,
   the priority level for a `setState` will be `LowPriority`. Refer to the
   glossary to see how that priority level stacks up against the others.
   
   _There are 2 edge cases to this, but you shouldn't concern yourself with
   them too much.
   If you're studying for a test and must know, they are:
   explicitly passing a `useSyncScheduling: true` parameter to the context getting
   function, which will result in `SynchronousPriority`; and having
   `priorityContext` of `SynchronousPriority` during the work phase or a
   `batchedUpdates` callback - which will result in `TaskPriority`._
### 3. Push updates to the fiber's update queue.
   This logic is pretty much the same as in the initial render case. The only
   differences are that:
   
   - `setState` is not a top-level update, so the code doesn't check if the
     update is a top-level unmount.
   - the priority level is lower (`LowPriority`).
    
   The new update is being inserted to the fiber's update queue according to the
   priority level - so most likely it will get added to the end of the queue.

### 4. Schedule update work to be done with the determined priority level.
   As I've mentioned before, this logic is generic across all the flows - so
   nothing changes here in terms of walking the tree. To reiterate, Fiber walks
   the `return` nodes starting from the node for which the update is being
   scheduled until it reaches the root node (whose `return` is `null`). Along
   the way, it bumps up the `pendingWorkPriority` of each node to the currently
   given level if it's lower. In this case the level is `LowPriority` so it's
   not likely for too many changes in the `pendingWorkPriority` values to occur.
   
   After reaching the root, Fiber schedules the update work - due to
   `LowPriority` it's scheduled with `requestIdleCallback`.
   That brings us to the end of the `setState` flow.
   The logic exits and when time comes, the work phase begins.

<a id="org13b502a"></a>

## Doing the work: show me the money

> Ahh, you're here. Good. We've got a problem. A big one.
>
> &#x2013; <cite>The Overseer, Vault 13</cite>

Well, not really. ;) Or not so much anymore at least, having asynchronous work
scheduling on our side!
That said though, you might want to take a breath/coffee/stretch before this one - this is the
meat and potatoes of Fiber and might get a bit dense.

The actual execution of the scheduled work is split up in 2 main phases:
render/reconciliation and commit.

Let's jump in.


<a id="orga27f81c"></a>

### Render / reconciliation.

This phase happens within the fiber tree and thus can be interrupted.
No DOM interaction takes place here yet. This is one of the big wins and differentiating factors from the traditional
renderer.
As the code can rely on the `deadline` value provided by
`requestIdleCallback`, it can split the work in time to avoid busting UI frames.

During this phase, Fiber aggregates the updates building up a second,
`workInProgress` copy of the fiber tree, which is the `alternate` of the
`current` tree. The `current` tree is the one that is flushed to the DOM at
the given moment.

Each of the flows described previously stopped at the phase where the work
was to be executed immediately (for `SynchronousPriority`) or scheduled with
an async callback request function.

The function that is being called or scheduled at that point is `performWork`.
Its purpose is to catch and handle errors happening during the reconciliation of the
updates and building up the tree. It does it by running a `while` loop that
bails out in case of errors. Within this loop, the `workLoop` function
is being called.

We're here. The core of the nuclear reactor.

`workLoop` finds a fiber to work on, which consists of looking through the
`scheduledRoot` list (that's where the top-level updates go, remember?) for
the highest priority root fiber.

Then, it checks whether a `deadline` exists and whether the current priority
of work is lower than `TaskPriority`, meaning that the execution of this work
must obey the time limitations of the current frame.
If there is no `deadline` or the priority is high enough then it runs a normal
`while` loop until it can find no more work to do.

If a `deadline` exists however (or the priority is low), then it runs a `while`
loop until there is work to be done and the `deadline` hasn't yet expired.
As long as that conditions hold, in terms of Fiber **we are in a deferred batch**.
(again, any bells ringing? `batchedUpdates` way back when I was describing `render`?)
<span class="underline">This is where the decision is being made to either carry on with processing the
fibers or to defer the processing to the next frame to avoid causing jank in the UI.</span>

Here, the current unit of work is being *performed*.
Performing the work is a process consisting of two stages: `begin` and `complete`.

#### Stage 1: beginning the work

When the work is "being begun", the code checks whether the priority of
the work-in-progress fiber is high enough to be processed given the priority at
which work is currently supposed to be processed and bails out if it's not.

Beginning the work encompasses a lot of things, which I think are out of scope
since we're deep enough and they would take **a lot** of space to describe.
In short, what happens here depends on the work-in-progress fiber type, and is
handled by a big `switch` statement:

```javascript
switch (workInProgress.tag) {
  case IndeterminateComponent:
    return mountIndeterminateComponent(
      current,
      workInProgress,
      priorityLevel,
    );
  case FunctionalComponent:
    return updateFunctionalComponent(current, workInProgress);
  case ClassComponent:
    return updateClassComponent(current, workInProgress, priorityLevel);
  case HostRoot:
    return updateHostRoot(current, workInProgress, priorityLevel);
  case HostComponent:
    return updateHostComponent(current, workInProgress);
  case HostText:
    return updateHostText(current, workInProgress);
  case CoroutineHandlerPhase:
    // This is a restart. Reset the tag to the initial phase.
    workInProgress.tag = CoroutineComponent;
  // Intentionally fall through since this is now the same.
  case CoroutineComponent:
    return updateCoroutineComponent(current, workInProgress);
  case YieldComponent:
    // A yield component is just a placeholder, we can just run through the
    // next one immediately.
    return null;
  case HostPortal:
    return updatePortalComponent(current, workInProgress);
  case Fragment:
    return updateFragment(current, workInProgress);
  default:
    invariant(
      false,
      'Unknown unit of work tag. This error is likely caused by a bug in ' +
        'React. Please file an issue.',
    );
}
```

The following, however, is crucial:

- Those `update` functions merge component states with the `pendingState` values
  and memoize them, update children's props and perform reconciliation on subtrees.
- Each change performed on the node's subtree causes it to be tagged with a
  specific **effect tag**, meaning that a side-effect shall be executed on it.
  You can refer to the glossary to see all the effect tags - in this phase, the
  only tags that are being used are `ContentReset`, `Err`, `Placement` and `Ref`.
- The `update` functions return return `null` if the element is a leaf of the
  fiber tree, or return the child fiber if it has one. When they return the
  child fiber, we say that the **beginning the work on this fiber has spawned new work**.

If beginning the work on a fiber hasn's spawned any new work, a function is
called that starts *completing the work* (stage 2) on the the work-in-progress fiber.
If new work has been spawned, control is returned to `workLoop`.
It marks this new work as the `nextUnitOfWork` to be processed in the next
turn of the time-constraining `while` loop.
<span class="underline">This is how the decision is being made to either carry on with processing the
fibers or to defer the processing to the next frame to avoid causing jank in the UI.</span>

#### Stage 2: completing the work
When beginning a unit of work hasn't spawned any new work, we are at a leaf of
the fiber tree. In this case the code will complete the work for the current
branch.
Completing the work operates in a `while` loop that stops upon
finding a `sibling` fiber (which gets returned to `workLoop`) or reaching the
root of the tree (which prompts the *commit phase*).
The process consists of 4 steps:

1. **Reset the fiber's priority.**

2. **Set update information.**

    Depending on the type of fiber being completed it may mean:
    -   setting the new `context` on the root fiber,
    -   adding an `Update` tag to the fiber's `effectTag`, calculating the update payload
        (i.e. new props) and adding it to the fiber's `updateQueue`,
    -   adding a `Ref` tag to the fiber's `effectTag` if a `ref` was defined on the
        component.
3. **Build up the effect lists up the fiber branch.**

    If the work-in-progress fiber has a `return` fiber and an `effectTag` value
    different than `NoEffect`, it will first append all the side effects from its
    effect list to the `return` fiber's list and then append itself to it.
    The result is that each fiber's effect list is an ordered collection
    of its child subtree's side effects, ended by its own. It's ordered by the
    completion order of the children.
4. **Traverse the tree further.**

    If the work-in-progress fiber has a `sibling` fiber, it is returned to the
    `workLoop` to make a decision whether to start processing it in this frame or
    to defer it to the next one.
    <span class="underline">A `sibling` fiber is the result of returning an array of elements from a
    `render` function, that's one of the new features in Fiber.</span>

    If there is no `sibling`, but a `return` fiber exists, then it is set to be
    processed in the next turn of the completion stage's `while` loop.

    If the work-in-progress fiber doesn't have a `return` or a `sibling` fiber,
    it means that we have reached the root of the fiber tree.

    If the `nextPriorityLevel` is `SynchronousPriority` or `TaskPriority`, it
    means that the work that has just been completed is related to a scheduled
    root and also that it has not been scheduled with an async callback request.
    In that case, the code immediately begins the commit phase by calling
    `commitAllWork(workInProgress)`.
    Otherwise, when the priority is lower (i.e. work belongs to a
    deferred batch), the work-in-progress is being set as a `pendingCommit`. The
    `workLoop` will decide when to commit the work in the `pendingCommit` based
    on how much time is left in the frame.

That's it for this stage. The result of completing a unit of work (fiber) is
either entering the commit phase immediately or having a non-null `pendingBatch`.

The commit phase will be described in the next chapter.

I'll close off the render/reconciliation phase description by pointing out that the
`workLoop` checks for the existence of a `pendingBatch` and if there is enough
time within the current frame, it calls `commitAllWork(pendingBatch)`, thus
entering the commit phase.


<a id="org2ca3fb6"></a>

### Commit

This is where the contents of the work-in-progress fiber tree get flushed to the
DOM - in other words, this is when all the side effects from the fiber tree get executed.
This phase is not designed to be interruptible, since otherwise it would open up
possibilities for inconsistent "in-between" UI states.
It is being achieved by setting a priority level `TaskPriority` for the whole
time of the phase.
The previous priority level is being stowed away as `previousPriorityContext`.

The entry point for committing the work is the `commitAllWork` function.

Before starting going through the effect list of the fiber tree, it checks if
the root fiber has an `effectTag` on it too.
_(This is because during the completion phase, the `effectTag` was being added to the
`return` fiber's effect list.
There is no `return` fiber for the root of the tree, hence it is done here afterwards.)_

The commit process consists of two passes through the whole effect list of the fiber tree.

The first pass does DOM manipulation (placement, updates, deletions) using the
injected renderer and unmounts `ref` functions.

After the first pass, Fiber swaps the work-in-progress tree with the `current`
one. That's because the work-in-progress one just got flushed to the DOM, so
conceptually it became the `current`.

The second pass calls lifecycle hooks, `setState` callbacks, `ref` callbacks
and component-level error handling methods (new feature in Fiber!).

After the second pass (and some housekeeping), the priority level from before
the commit ie restored from `previousPriorityContext`.


<a id="org3c31b83"></a>

## That's all, folks!

With sufficient squinting and skipping over ancillary details, we have drilled
through the main features of React Fiber, from the first client `render` call, down to
the nitty-gritty of scheduling and splitting the work into phases.

If you didn't have the Fiber codebase handy while reading this, it might be
interesting for you to go grab it and read through this post again - this time
tracking your steps through the code. You'll see that even though there is quite
a few cogs in the machine of Fiber, it is way less complicated than you'd expect.

If you see any mistakes or omissions, feel free to point them out! 
I'll amend the post.

I did my best to skip over aspects that were not key to the main responsibility
of Fiber.
But a few of them are very interesting in themselves, or are used in an
interesting way, for example:

-   Component-level error handling, error boundaries
-   The use of object pooling
-   Dependency injection

There might be another post coming, which will describe those things, so stay tuned!

And lastly, the obligatory wafting paragraph. It's good to *actually know* how
the tools you use every day work. Of course it's not always possible or sensible
to look at everything - but the perspective, sense of confidence and
satisfaction gained from this type of activity is significant.
You have to read a lot to become a great writer. I think programmers are no
different - and JavaScript fatigue, the state of Web development, Angular 4,
React 16 or Webpack 3 should not serve as an excuse to neglect this practice.

As craftspeople, we need to study the tools we use and other people's
craft we see around us to improve our own and perhaps eventually surpass it.


<a id="org7cd8bdd"></a>

## Glossary: types and constants

Here are some important types and constants used in the Fiber codebase.
I'm not putting them at the top to allow you to jump right into the interesting
stuff without having to waddle through a bunch of things that don't make sense
out of context.


<a id="org8c13c72"></a>

### Update

An `Update` looks like this:

```javascript
type Update = {
  priorityLevel: PriorityLevel,
  partialState: PartialState<any, any>,
  callback: Callback | null,
  isReplace: boolean,
  isForced: boolean,
  isTopLevelUnmount: boolean,
  next: Update | null,
};
```

Where `PartialState` is what you pass into `setState`: either an object or a
`(prevState, props) => partialState` function.


<a id="org4c0e3af"></a>

### Update queue

A fiber's update queue looks like this:

```javascript
export type UpdateQueue = {
  first: Update | null,
  last: Update | null,
  hasForceUpdate: boolean,
  callbackList: null | Array<Callback>,
};
```

The `callbackList` holds the `callback` values you passed in to
`setState(stateUpdater, [callback])`, if any.


<a id="orgdd96006"></a>

### Priority levels
```javascript
type PriorityLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

NoWork: 0, // No work is pending.
SynchronousPriority: 1, // For controlled text inputs. Synchronous side-effects.
TaskPriority: 2, // Completes at the end of the current tick.
AnimationPriority: 3, // Needs to complete before the next frame.
HighPriority: 4, // Interaction that needs to complete pretty soon to feel responsive.
LowPriority: 5, // Data fetching, or result from updating stores.
OffscreenPriority: 6, // Won't be visible but do the work in case it becomes visible.
```

When Fiber schedules work, `SynchronousWork` is scheduled immediately on the UI
thread, `AnimationPriority` is scheduled with `requestAnimationFrame` and the
lower priorities with `requestIdleCallback`.

Whenever "higher/highest priority level" is being mentioned, there is always an asterisk: "except
for `NoWork`".
The code always checks for that priority level separately.


<a id="org4ecef3c"></a>

### Side effect tags (types of side effects)

```javascript
type TypeOfSideEffect = number

NoEffect: 0, //           0b0000000
Placement: 1, //          0b0000001
Update: 2, //             0b0000010
PlacementAndUpdate: 3, // 0b0000011
Deletion: 4, //           0b0000100
ContentReset: 8, //       0b0001000
Callback: 16, //          0b0010000
Err: 32, //               0b0100000
Ref: 64, //               0b1000000
```

Having the tags defined like this allows using the binary operations in a handy
way. (I mean adding new tags by `effectTag |= Placement`, removing them
with `effectTag &= ~Placement` etc.)


<a id="orgdd07bda"></a>

### Fiber vs fiber

Whenever I refer to Fiber with a capital F, I mean React Fiber, the new reconciler.
Whenever I refer to a fiber with a lowercase f, I mean the data structure
representing the basic unit of work related to a React component.
The data structure like this (I'm leaving most of Facebook's comments as
they're very good):

```javascript
type Fiber = {
  // These fields conceptually belong to an instance of the component
  // this fiber is related to.

  // Tag identifying the type of fiber.
  tag: TypeOfWork,

  // Unique identifier of this child.
  key: null | string,

  // The function/class/module associated with this fiber.
  type: any,

  // The local state associated with this fiber.
  stateNode: any,

  // Remaining fields belong to Fiber

  // The Fiber to return to after finishing processing this one.
  // This is effectively the parent, but there can be multiple parents (two)
  // so this is only the parent of the thing we're currently processing.
  // It is conceptually the same as the return address of a stack frame.
  return: Fiber | null,

  // Singly Linked List Tree Structure.
  child: Fiber | null,
  sibling: Fiber | null,
  index: number,

  // The ref last used to attach this node.
  // I'll avoid adding an owner field for prod and model that as functions.
  ref: null | (((handle: mixed) => void) & {_stringRef: ?string}),

  // Input is the data coming into process this fiber. Arguments. Props.
  pendingProps: any, // This type will be more specific once we overload the tag.
  memoizedProps: any, // The props used to create the output.

  // A queue of state updates and callbacks.
  updateQueue: UpdateQueue | null,

  // The state used to create the output
  memoizedState: any,

  // Bitfield that describes properties about the fiber and its subtree. E.g.
  // the AsyncUpdates flag indicates whether the subtree should be async-by-
  // default. When a fiber is created, it inherits the internalContextTag of its
  // parent. Additional flags can be set at creation time, but after than the
  // value should remain unchanged throughout the fiber's lifetime, particularly
  // before its child fibers are created.
  internalContextTag: TypeOfInternalContext,

  // Effect
  effectTag: TypeOfSideEffect,

  // Singly linked list fast path to the next fiber with side-effects.
  nextEffect: Fiber | null,

  // The first and last fiber with side-effect within this subtree. This allows
  // us to reuse a slice of the linked list when we reuse the work done within
  // this fiber.
  firstEffect: Fiber | null,
  lastEffect: Fiber | null,

  // This will be used to quickly determine if a subtree has no pending changes.
  pendingWorkPriority: PriorityLevel,

  // This value represents the priority level that was last used to process this
  // component. This indicates whether it is better to continue from the
  // progressed work or if it is better to continue from the current state.
  progressedPriority: PriorityLevel,

  // If work bails out on a Fiber that already had some work started at a lower
  // priority, then we need to store the progressed work somewhere. This holds
  // the started child set until we need to get back to working on it. It may
  // or may not be the same as the "current" child.
  progressedChild: Fiber | null,

  // When we reconcile children onto progressedChild it is possible that we have
  // to delete some child fibers. We need to keep track of this side-effects so
  // that if we continue later on, we have to include those effects. Deletions
  // are added in the reverse order from sibling pointers.
  progressedFirstDeletion: Fiber | null,
  progressedLastDeletion: Fiber | null,

  // This is a pooled version of a Fiber. Every fiber that gets updated will
  // eventually have a pair. There are cases when we can clean up pairs to save
  // memory if we need to.
  alternate: Fiber | null,

  // Conceptual aliases
  // workInProgress : Fiber ->  alternate The alternate used for reuse happens
  // to be the same as work in progress.
};
```


<a id="orgab66cc2"></a>
