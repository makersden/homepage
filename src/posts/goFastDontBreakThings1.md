---
title: Go fast and don't break things
layout: Post
date: 2019-04-01 15:00:00
author: Korneliusz Caputa
slug: "go-fast-dont-break-things-1"
path: "/blog/go-fast-dont-break-things-1"
image: "gofastdontbreakthings1.jpg"
tags:
  - software development
  - architecture
  - management
  - agile
  - consulting
  - lean delivery
  - design thinking
---

No matter how you look at it, software development is a delicate process. Success has never been easier to attain, yet still the path to victory is riddled with obstacles. Worst thing about them is that they are small mistakes - easy to miss and without obvious immediate consequences, but with the potential to spell disaster in the long run. This post describes how we recognize and manage those obstacles, emphasizing ones impeding the progress and speed of delivery. Time can be wasted on each stage of the project, so part of our job is to mitigate slowdowns starting right at the sales phase, all the way to release and maintenance.

The draft of this has grown a lot, so we’ll split it in two. Today, we will focus on the work ethic and team management practices we use to keep things moving fast. Next time, we’ll set our sights more on concrete coding decisions. 

## Sales & initial discussions
A lot of time can be wasted here. It’s mostly a result of good willed dishonesty - overstepping yourself trying to help or to close a case without a sufficient fit. We’ve suffered from it ourselves, overwhelmed by a will to help above our means. If your business strategy is sound, no case should stretch it sideways. Of course great projects put us through our paces, requiring more effort, knowledge or resources within our domain, but we pay close attention that they do not derail our mission.

Over the years we gravitate towards two simple techniques to treat our Customers with due respect by saving their and our own time.

### Underpromise and overdeliver
What we offer is just a part of what our Team can actually do. Due to our experience, we usually end up managing, teaching, coaching and doing DevOps as part of the job. All those things compound the value we add and also help us evolve. However we stay true to the mission and at an early stage of the relationship fix our sights on core competencies. We would only cause confusion and distrust by trying to explain everything at length during early calls and meetings. Plus, you never have the full context at the start. Trying to make moves outside of your core too soon is a surefire way to make unnecessary mistakes. Thus, we go in prepared to do what we’re tasked with but stay vigilant, looking around for familiar patterns we know how to assist with.

### Eat the frog first
Fit is everything at this stage, so difficult topics should be handled as soon as possible. Instead of trying to go above and beyond by only talking about potential success, we’re analytical and look for issues. Note that the frogs lie on both sides, some come from the Customer, some are our own. Examples:

- Are we in the same price ballpark with the Customer? 
- Are we in agreement regarding remote work?
- Do the established communication methods allow for efficiency?
- Is the scope clear?
- Are any best practices amiss? (Especially important in terms of infrastructure and ops to gauge precautions needed to avoid damaging the product)
- Do we need to and can we manage time zone differences?
- Can we offer the correct personality type for the case?

Once we see a potentially critical obstacle, we surface it and deal with it ASAP. Respecting the time of everyone involved, we consider uncovering ill fit our responsibility.

## Case design
Having confirmed fit, we go into detective mode. The more we know, the more we can help. For us, design is not only about the product or UI/UX. We’re designing the case itself, to choose an approach best suited for tasks at hand. Of course the initial contact happened for a reason, meaning the Customer has a need for assistance and an idea of how they’d like it to look. This is the baseline on which we build our view of the work. We complete the perspective by applying some Design Thinking to the case, asking supporting questions:

- What’s the problem? (usually covered by Customer’s description)
- Who has the problem?
- How can the problem be simplified to its most basic elements?
- What’s been done already?
- What needs to be redone or improved?
- What are the most pressing concerns?
- What are the constraints?

These questions are our travel guide. We use them throughout the whole project, starting right at the first interview. We make sure to query people of various seniority and from different departments. With enough data, patterns emerge - we lean on them to skip irrelevant details, connect the dots and remove barriers that slow things down.

## Vitamins & Painkillers
Vitamins are nice-to-haves, solutions to problems that don’t yet exist or that are not urgent. Painkillers are remedies for most urgent issues that often threaten the well-being of the project. Those terms were originally used in business and product context, however they apply just as well to software project execution. The product is our brainchild and it’s human nature to feel a parental bond with it. When we develop out-of-house and join a Customer team, this comes at us from all angles. Most everyone usually has a “favorite feature” and a “better idea”, within or sometimes outside the project scope. That’s all very good of course - creative and passionate people are the cornerstone of success! However all those contributions are often left in a vacuum of kitchen talk instead of being properly appreciated and evaluated. What ensues is a drop in productivity - people tend to keep thinking about them, being afraid to forget. Because they’re passionate, their minds wander towards what value can those ideas bring and how they could be implemented, at the same time derailing their thoughts from the main track of making the priority stuff happen. We’re on the lookout for such situations and, having noticed them, we propose to implement a 2-step solution, rooted in the practice of Getting Things Done. 

The first step is to have an *idea inbox* - a safe place to store all input from the Team. 
The second step involves establishing a *recurring idea review event* where the Team gathers the ideas from the inbox, reviews, discusses and triages them. It’s key to have people from different domains involved - product, design, development - so that a more complete assessment may be done. The best ones can be picked out and prioritized in the product backlog if suitable. 

From our experience, being on both the idea contributor and manager side of the fence, those back-of-your-mind sparks of inspiration often concern vitamins. Acting on them without taking a good step back first most often leads to an unnecessary investment of time with the value added being questionable at best. However, the fact that they are vitamins now does not mean they will never become painkillers. Some of the ideas may even be kept in the inbox for a longer duration, just to have them discussed more thoroughly and across different stakeholders.

So why is this important? 

- We want people to clear their minds without stress - and have the certainty of knowing their ideas will not be forgotten. That gives comfort, allowing to focus their undivided attention back on the roadmap.
- Treating all the input from the Team fairly and systematically is a way of showing that their voices are heard and appreciated. This leads to a higher spirits and a sense of “we’re all in this together”.
- It’s important to have a respectful way of putting things on the back-burner in order to avoid spending time and effort on vitamins. Having a systematic approach to evaluating ideas should also curb the practice of “lobbying” them to different people and disrupting the workflow. We developers have an innate tendency to fixate on implementing a technical solution, more so than considering what is the best approach to tackle the problem. That is, we like to build bridges instead of thinking about how to cross the river. Letting us wander will lead to small amounts of time and brainpower being allocated all over the place, with a compounding negative effect on the roadmap progress.
- Team contributions are a valuable asset. Having a backlog full of them allows finding potential painkillers. With time, some vitamins may also become painkillers themselves or at least constitute part of a solution. All things considered, it doesn’t hurt to have good suggestions ready.

As with any emotional subject, we advise utmost care and caution. Maintain a casual, open and non-judgemental attitude towards all kinds of contributions.

## Development

Decisions, decisions, decisions. Part of why software development is so exciting! However decisions can also incur one the highest costs. It can happen both directly in decision-making - through a long process of reaching agreements, and over time - by suffering the consequences of wrong choices. 

### Greenfield projects
A fresh start always feels good, also because choices made at this stage have the biggest impact on the project down the line. For projects we do for ourselves, there are no holds barred. For customer cases however, we err on the side of well-known and tested solutions, putting special emphasis on them being post v1.0. It’s good to *only make big decisions when you absolutely have to*, not a moment earlier. Delaying commitment to any given choice doesn’t cost much in the long run - in fact, it’s free if your code is clean. 

At this stage there’s no point in concerning ourselves with a database, a message bus or a notification service. Sure, we will implement an interface that does what’s needed, but the actual backend for it should be decided only when things can’t move forward without it. New requirements affecting those details may come up at any point during this phase, and time not spent is time not wasted. Another benefit of this approach is that the resulting code is clean, modular, maintainable and testable - that saves time down the line. The cost of fixing early mistakes grows exponentially over time.

### Brownfield projects
Same rules can be applied to brownfield projects (i.e. ones with prior development effort), with the major difference in approach being the initial phase of work.

If you ask a racing driver to name the most important rule to achieve good results, there’s a good chance she’ll answer “slow in, fast out”. It means that entering a corner slower and with more caution allows to get on the throttle earlier on the exit, leading to a greater straightaway speed - and a better lap time. Working on brownfields is like that too. We start with making as little assumptions as possible and focus on getting to know how the puzzle fits together. Moving forward in the exploration, we secure each step with failsafes. Our most tried-and-tested tools for safe exploration are setting up local service + database clusters and writing tests. Through this we quickly get insight into how the system communicates, how it should or shouldn’t run and whether there are any blind spots or points of contention. Once we drive the whole project (or module) on our failsafe framework, we have reached the straightaway. We arrived there cautiously and having built up a secure foundation. Thanks to that we can really open the taps up and operate much faster than otherwise.

## Summary
I don’t like long summaries, so here's the gist:

- Respect the Customer’s time as well as your own by clearing out unknowns ASAP.
- Don’t make assumptions, learn the environment instead.
- Tread carefully in the fields of brown. Support and secure your steps to never put the project at risk.
- Defer big decisions in greenfield projects. It’s cheaper to endure lack of a concrete solution than recover from one that hasn’t aged well.

That's it for now, thanks for sticking around and see you in part 2!
