No matter how you look at it, software development is a delicate process. Success has never been easier to achieve, yet still obstacles  lay on the path to victory. The worst thing about them is that they are small mistakes. They're easy to miss and without obvious immediate consequences. If leave them unchecked, they have the potential to spell disaster in the long run. This post describes how we recognize and manage those obstacles, emphasizing ones that impede the progress and speed of delivery. Time can be wasted on each stage of the project, so part of our job is to mitigate slowdowns starting right at the sales phase, all the way to release and maintenance.

The draft of this has grown a lot, so we’ll split it in two. Today, we will focus on the work ethic and team management practices we use to keep things moving fast. Next time, we’ll set our sights more on concrete coding decisions. 

## Sales & initial discussions

A lot of time can go to waste here. It’s usually a result of good willed dishonesty - overstepping yourself trying to help or to close a deal without a good enough fit. We’ve suffered from it ourselves, overwhelmed by a will to help above our means. If your business strategy is sound, no case should stretch it sideways. Of course the best projects put us through our paces. They demand more effort, knowledge or resources within our domain. Yet we pay close attention that they do not derail our mission.

Over the years we gravitated towards two simple techniques to treat our Customers with due respect by saving their and our own time.

### Underpromise and overdeliver

What we offer is a part of what our Team can actually do. Through our experience, we usually end up managing, teaching, coaching and doing DevOps as part of the job. All those things compound the value we add and also help us evolve. But we stay true to the mission and at an early stage of the relationship fix our sights on core competencies. Trying to explain the full scope of our capabilities during early calls and meetings would only cause confusion and distrust. Plus, you never have the full context at the start. Making moves outside of your core too soon leads to unnecessary mistakes. Thus, we go in prepared to do what we’re tasked with, but look for familiar patterns we know how to assist with.

### Eat the frog first

Fit is everything at this stage, so we handle difficult topics as soon as possible. Instead of trying to go above and beyond, only talking about potential success, we look for issues too. Note that frogs can linger on both sides, some come from the Customer, some are our own. Examples:

- Are we in the same price ballpark with the Customer? 
- Are we in agreement about remote work?
- Do the established communication methods allow for efficiency?
- Is the scope clear?
- Are any best practices amiss? (Especially with infrastructure and ops. We may need extra precautions to avoid damaging the product)
- Do we need to and can we manage time zone differences?
- Can we offer the correct personality type for the case?

Once we see a critical obstacle, we surface it and deal with it ASAP. To respect the time of everyone involved, we see uncovering ill fit as our responsibility.

## Case design

Having confirmed fit, we go into detective mode. The more we know, the more we can help. For us, design is not only about the product or UI/UX. We’re designing the case itself, to choose an approach best suited for tasks at hand. Of course the initial contact happened for a reason. The Customer has a need for support and an idea of how they’d like it to look. This is the baseline on which we build our view of the work. Then we apply some Design Thinking to the case and ask supporting questions to complete the view:

- What’s the problem? (usually covered by Customer’s description)
- Who has the problem?
- How can we simplify the problem to its most basic elements?
- What’s been done already?
- What needs to be redone or improved?
- What are the most pressing concerns?
- What are the constraints?

These questions are our travel guide. We use them throughout the whole project, starting right at the first interview. We make sure to query people of various seniority and from different departments. With enough data, patterns emerge. Leaning on those, we can skip irrelevant details, connect the dots and remove barriers that slow things down.

## Vitamins & Painkillers

**Vitamins** are nice-to-haves, solutions to problems that don’t yet exist or that are not urgent. **Painkillers** are remedies for most urgent issues, which can threaten the  project. People use those terms in business and product context, but they apply as well to execution. 

The product is our brainchild and it’s human nature to feel a parental bond with it. This comes at us from all angles when we develop out-of-house and join a Customer team. Most everyone usually has a “favorite feature” and a “better idea”, within or sometimes outside the project scope. That’s all very good of course - creative and passionate people are the cornerstone of success! Yet all those contributions often stay in the vacuum of kitchen talk instead of being appreciated and evaluated. What ensues is a steady drop in productivity - people tend to keep thinking about their concepts, being afraid to forget. Because they’re passionate, their minds wander towards what value can those ideas bring and how they could implement them. This derails their thoughts from the main track of making the priority stuff happen. We watch out for such situations and, having noticed them, propose to put in place a 2-step solution, rooted in the practice of [Getting Things Done](https://gettingthingsdone.com/five-steps/).

The first step is to have an *idea inbox* - a safe place to store all input from the Team. 

The second step involves establishing a *recurring idea review event*. There the Team gathers the ideas from the inbox, reviews, discusses and triages them. It’s key to have people from different domains involved - product, design, development - to have a complete assessment. They can pick out the best ones and prioritize them in the product backlog if suitable. 

We've been on both the idea contributor and manager side of the fence of this. Those back-of-your-mind sparks of inspiration often concern vitamins. Being to keen to act on them often leads to an unnecessary investment of time with the value added being questionable at best. However, the fact that they are vitamins now does not mean they will never become painkillers. The Team may put some ideas back in the inbox to iterate on them through multiple reviews.

So why is this important? 

- We want people to clear their minds without stress, knowing their ideas will not fade away. That gives comfort, allowing to focus their undivided attention back on the roadmap.
- Fair and systematic treatment of all the input from the Team is a great way to appreciate and hear them out. This leads to higher spirits and a sense of “we’re all in this together”.
- It helps to have a respectful way of putting things on the back-burner to not spend time and effort on vitamins. Systematic idea evaluation should also curb “lobbying” them and disrupting the workflow. Us developers have a tendency to prefer implementing  technical solutions over considering how best to solve the actual problem. That is, we like to build bridges instead of thinking about how to cross the river. Letting us wander will lead to misallocating small amounts of time and brainpower all over the place. The net result is a hampering of the roadmap progress.
- Team contributions are a valuable asset. Having a backlog full of them allows finding potential painkillers. With time, some vitamins may also become painkillers themselves - or at least constitute part of a solution. All things considered, it doesn’t hurt to have good suggestions ready.

As with any emotional subject, we recommend utmost care and caution. Maintain a casual, open and non-judgemental attitude towards all kinds of contributions.

## Development

Decisions, decisions, decisions. Part of why software development is so exciting! Yet decisions can also incur one the highest costs. It can happen directly within decision-making - through a long process of reaching agreements, and over time - by suffering the consequences of wrong choices. 

### Greenfield projects

A fresh start always feels good, also because choices made at this stage have the biggest impact on the project down the line. For projects we do for ourselves, there are no holds barred. For customer cases however, we err on the side of well-known and tested solutions, putting special emphasis on them being post `v1.0`. It’s good to *only make big decisions when you have to*, not a moment earlier. Delaying commitment to any given choice doesn’t cost much in the long run - in fact, it’s free if your code is clean. 

At this stage there’s no point in worrying ourselves with a database, a message bus or a notification service. Sure, we will implement an interface that does what’s needed, but the actual backend for it should be decided only when things can’t move forward without it. New requirements affecting those details may come up at any point during this phase - and time not spent is time not wasted. Another benefit of this approach is clean, modular, maintainable and testable code - saving more time down the line. The cost of fixing early mistakes grows exponentially over time.

### Brownfield projects

Same rules apply to brownfield projects (i.e. ones with prior development effort). One major difference in approach here is the initial phase of work.

If you ask a racing driver to name the most important rule to achieve good results, there’s a good chance she’ll answer “slow in, fast out”. It means that entering a corner with less speed and more caution allows to get on the throttle earlier on the exit. That leads to a greater straightaway speed - and a better lap time. Working on brownfields is like that too. We start with as little assumptions as possible and focus on seeing how the puzzle fits together. Moving forward in the exploration, we secure each step with failsafes. Our most tried-and-tested tools for safe exploration are setting up local service + database clusters and writing tests. Through this, we gain deeper insight into how the system communicates, how it should or shouldn’t run and whether there are any blind spots or points of contention. Once we can drive the whole project (or module) on our failsafe framework, we have reached the straightaway. We arrived there with caution, building up a secure foundation. Thanks to that we can now open up the taps and operate much faster than otherwise.

## Summary

I don’t like long summaries, so here's the gist:

- Respect the Customer’s time as well as your own by clearing out unknowns ASAP.
- Don’t make assumptions, learn the environment instead.
- Defer big decisions in greenfield projects. It’s cheaper to endure the lack of a concrete solution than recover from one that hasn’t aged well.
- Tread with care in the fields of brown. Support and secure your steps to never put the project at risk.

That's it for now, thanks for sticking around and see you in part 2!