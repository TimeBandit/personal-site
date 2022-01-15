---
title: How To Flex Your Pseudo Elements
description: A post describing how pseudo elements can be aligned using the flex
  display property.
date: 2022-01-15T15:38:17.053Z
imageSrc: /assets/images/edgar-chaparro-shfo3woggtu-unsplash.jpg
imageAlt: image
imageAttr: 'Photo by <a
  href="https://unsplash.com/@echaparro?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar
  Chaparro</a> on <a href="https://unsplash.com/s/photos/flex">Unsplash</a>   '
tags:
  - post
---
Even if you've been creating layouts in CSS for a short time you would have come across the \`display\` property known as Flexbox. The introduction of it made it easier to space out and size your elements in one dimension. Be that horizontal or vertical. Previous to this, developers used the \`float\` property to pop ytheir elements out of the normal flow of the page. This made them behave like a bouant object floating to the top of a body of water and then moving to the left or the right. It worked but elements on the next row would sometimes get stuck on the end of a tall item above it if it was supposed to float to the same direction. Hacks had to be used to get around this.

This display property along with it's cousin `grid` is uaually used by devs with block level elements such as `div` and `p`. However did you know that they could be applied to pseudo elements too. Psuedo elements are a neat way to decorate your content without really alteraring the actual readable html content itself. This means that no DOM element is rendered. For a useful discussion on their pros and cons see [this](https://stackoverflow.com/questions/15574608/benefits-drawbacks-of-using-pseudo-elements-after-before-vs-padding-backgr).

DOM elements can have a maximum of two pseudo elements known as \`before\` and \`after\`. Howver they behave as though they are children of the element to which they are attached. This means the the display property \`flex\` must be applies to that. After this you can use Flexbox properties to adjust the layout of the DOM content and the psedo elements.

The example below is a practical example of what i've described above.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="yLzZPrg" data-user="timeband-it" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/timeband-it/pen/yLzZPrg">
  Untitled</a> by Imran Nazir (<a href="https://codepen.io/timeband-it">@timeband-it</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>