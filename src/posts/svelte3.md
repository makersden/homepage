---
title: Svelte 3
layout: Post
date: 2019-08-25 15:00:00
author: Carl-Petter Bertell
slug: "svelte-3"
path: "/blog/svelte-3"
image: "minato_japan.jpg"
tags:
  - svelte
  - frontend
  - javacsript
---

## A new contender for the frontend crown

[Insert tired joke about the JS ecosystem moving fast here.]

### Ok, tell me what the JS flavour of the month is about.
Svelte is basically a compiler which will optimize away its library code during compile time, leaving you with pure optimized javascript and a very small js bundle.

It sticks very close to vanilla web programming, riding on some legacy language quirks to enable some of its own magic, and adding a new templating language.

On the surface it reminds me a lot of Vue:
```javascript
<script>
export let name = “world”;
</script>

<style>
.hi {
  color: pink;
}
</style>

<h1 class="hi">Hi {name}. I'm a svelte template </h1>
```

You’ll notice a Svelte component has 3 sections.
Script for Js, style for css and the rest being its own html templating language.

Like Vue it updates the dom in a similar way with reactive state which will do minimal updates to the dom whenever you update component state. No virtual DOM involved.

### So why would I choose Svelte?

Well, personal preference mostly. Someone who likes Vue over React, is likely to like Svelte as well. It stays close to the traditional way of writing web with html, css and pure js, whilst the React ecosystem is running in the other direction with JS/Typescript replacing both css and html.

### So no reason to use this if I like the React way?

Well, not exactly. The fact that Svelte produces very very small bundles is something you really can’t achieve in React today. If you for whatever reason need to go VanillaJS for bundle size concerns or staying framework agnostic, Svelte is now the go-to choice.
<div class="quote2">
If you for whatever reason need to go VanillaJS for bundle size concerns or staying framework agnostic, Svelte is now the go-to choice.
</div>

A good use-case could for example be adding some nice visualisations for a news article or blog post. Using React your bundle would be a chunky 109 KB extra (react + react-dom) for a single chart. With Svelte you could probably easily go sub-10 KB.

### What about proper big apps?

Svelte is compiler with a standard lib, but it’s not a whole application framework. There’s a Svelte framework called [Sapper](https://sapper.svelte.dev/) which is aiming to be the equivalent of e.g. NextJS (or NuxtJS from Vue land), but it isn’t considered mature yet.

### Demo

To test it out I wrote a small minesweeper clone called Sveltesweeper.

Try it out here:
https://sveltesweeper.netlify.com

Source is here:
https://github.com/kallebertell/sveltesweeper

**Its bundle size ended up being 9.7 KB.**

To compare here is a React based minesweeper, https://github.com/saninmersion/react-minesweeper/.

**I know this isn’t apples to apples, but it produces a 130 KB JS bundle. So my 9.7 KB Svelte version is 7.4% of the size.**

That’s rather neat.
