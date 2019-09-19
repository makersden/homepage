---
title: Why JAMStack
layout: Post
date: 2019-09-09 22:00:00
author: Carl-Petter Bertell
slug: "jamstack"
path: "/blog/jamstack"
image: "jamstack.jpeg"
tags:
  - jamstack
  - gatsby
  - frontend
  - javacsript
---

## JAMStack?

JAMstack refers to an architectural approach leveraging <span style="font-size: 1.2em">**J**avascript, **A**pis and **M**arkup</span>, that lets you create rich websites and apps without backends. Build markup with a Static Site Generator, deliver with a CDN, and use JS + APIs for dynamic parts.

### So what’s so good with JAMStack?

- **Best possible page load**
- **Best possible SEO**
- **Best possible security**
- **No servers needed**
- **No scaling needed**
- **Zero cost deployments**

### LOFTY CLAIMS! How is this achieved?

A static site is mostly just a bunch of html files and images. You can just copy them up on any CDN and have a new version live.

<div class="quote2">
Build markup with a Static Site Generator, deliver with a CDN, and use JS + APIs for dynamic parts.
</div>

Since no servers are involved, it means no scaling is needed; and with no servers we reduce our attack surface close to zero. The pre-generated html is friendly to all crawler bots and guarantees your content is visible to end users as fast as possible.

### Our content managers don't do html.

There are numerous ways you can let content managers create new content. You can use a headless CMS like Contentful or Prismic, or even Wordpress. In your build process you pull content from your CMS and pre-generate html pages. Most headless Content Management Systems support webhooks, so you can trigger a re-build of your site and have it re-deployed to the CDN when someone publishes new content. For your developer-types you can have a git based workflow with markdown.

### This is so 90s and we need modern UX. Can’t I have my React?

Enter [**GatsbyJS**](https://www.gatsbyjs.org/). You can have your cake and eat it too. It’ll pre-generate html files based on your React components, and re-hydrate your app as a fully fledged React app once the page has loaded.

<div style="max-width: 500px; margin: 0 auto;">

![JAMStack Gatsby end user experience](./jamstack_gatsby_end_user_experience.png)

</div>

### Fine for sites, but what about APPS? We need data and custom apis.

A lot of the backend functionality implemented in every project is re-inventing the wheel over and over again. Consider consuming some pre-existing services instead of adding more backend maintenance and ops work to your plate ad infinitum.

For example:

- Authentication ([Auth0](https://auth0.com/), [Cognito](https://aws.amazon.com/cognito/))
- E-commerce ([Snipcart](https://snipcart.com/))
- Payments ([Stripe](https://stripe.com), [Braintree](https://www.braintreepayments.com/), [Klarna](https://www.klarna.com))
- Search ([Algolia](https://www.algolia.com/))
- Comments ([Disqus](https://disqus.com/))
- Forms ([Typeform](https://www.typeform.com/))

Many of these can be integrated with pure frontend integrations. If you do need something custom, consider a serverless lambda/cloud function and outsource the tedious and costly ops and scaling part of backends.

<div style="max-width: 700px; margin: 0 auto;">

![JAMStack Gatsby and Netlify pipeline](./jamstack_gatsby_netlify.png)

</div>
### That just leaves us a bunch of frontend work.

Yep. If you ask me, Frontend is the new king (with some help from serverless offerings).

If you really want, you can still use your own hosted backends too. Just because part of your app ecosystem is JAMStacked and serverless doesn't exclude custom backends if that's the path of least resistance for you. If static files don't fit for a portion of your frontend app, you can opt not to have that specific part of your app/site pre-generated as static files (Gatsby has you covered).

<div class="quote2">
If you ask me, Frontend is the new king.
</div>

Minimizing your backend footprint with serverless options will go a long way of making your product iteration faster by letting you deliver new features by deploying static frontends. Have a new staging version deployed, ready for clicking, for every commit. It’s basically free, and fast.

Scale to infinity and pay as you go.
