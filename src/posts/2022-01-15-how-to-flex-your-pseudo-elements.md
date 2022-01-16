---
title: How To Flex Your Pseudo Elements
description: A post describing how pseudo elements can be aligned using the flex
  display property.
date: 2022-01-15T15:38:17.053Z
imageSrc: https://images.unsplash.com/photo-1611664751640-45403155e7de
imageAlt: Beautiful ornamental cherry (pseudo-sakura) in a russian garden
  close-up. Stylish delicate pink blooming flowers
imageAttr: ""
tags:
  - post
---
If you've created layouts in CSS you would have come across the \`display\` property known as Flexbox. Its introduction made it easier to space out and size your elements in one dimension; horizontal or vertical. 

Previous to this, developers used the \`float\` property to pop their elements out of the normal flow of the page. It made them behave like buoyant objects floating to the top of a body of water and then moving to the left or the right. It worked, but elements on the next row would sometimes get stuck on the back of a tall item above it. Hacks had to be used to get around this.

This \`display: flex\` property and its cousin \`display: grid\` changed this. Front-end engineers applied it to block-level elements such as \`div\` and \`p\`, making them behave as flex items. However, did you know that they act on pseudo-elements too? 

Pseudo-elements are a neat way to decorate your content without altering the actual Html content itself. It means that no DOM element renders. For a discussion on the pros and cons of pseudo-elements, you can read [this](https://stackoverflow.com/questions/15574608/benefits-drawbacks-of-using-pseudo-elements-after-before-vs-padding-backgr) article.

DOM elements can have a maximum of two pseudo-elements known as \`before\` and \`after\`. However, they behave as though they are child elements of the element to which they are attached. To make pseudo-element behave as flexbox items you apply the \`display: flex\` property to the DOM element.

The Codepen below is a practical example of what I've described in this post.


{% raw %}
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="yLzZPrg" data-user="timeband-it" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/timeband-it/pen/yLzZPrg">
  Untitled</a> by Imran Nazir (<a href="https://codepen.io/timeband-it">@timeband-it</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
{% endraw %}