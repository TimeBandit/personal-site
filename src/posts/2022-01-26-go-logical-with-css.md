---
title: Go Logical With CSS
description: What are logical properties in CSS and how are they useful?
date: 2022-01-26T20:48:22.691Z
imageSrc: https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11
imageAlt: image
imageAttr: 'Photo by <a href="https://unsplash.com/@rikonavt">Rikonavt</a> on <a
  href="https://unsplash.com/s/photos/flowers">Unsplash</a>   '
tags:
  - post
---
Imagine you're building a house. What would that look like? Let's say you follow an architectural plan. Where would you begin?

Would you start at the foundations, building up the walls to match the plan? You could construct the roof in one piece and place it on top of the walls when complete. Good; now the interior isn't exposed to the elements from above anymore.

Where you place the windows affects how light enters the house. So, you fit the windows in the north and south-facing projections of the house.

Your house is now taken to a different world. On this world, the sun rises in the north and it rains parallel to the ground from the east. The house you built is no longer fit for purpose!

Imagine a house that reacted to its surroundings. So the roof would slide to the west wall and the windows would move the east walls. We could say that the house is doing what makes logical sense for it to do without any effort from you.

This idea is close to what CSS logical properties are for. Your layout understands its context and reflows the content accordingly.

The suns path across the sky and the incline of the weather trigger changes in the house.

With \[CSS logical properties]\[1] your main triggers are the \`writing-mode\` and \`dir\` (directionality) .

> The \[writing-mode]\[2] [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (HTML element for HTML documents).

In other words with `writing-mode` you control which direction text flows and how blocks of content stack. So `writing-mode: horizontal-tb;` flows text horizontally and stacks blocks of text from top-to-bottom.

> The dir [global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) is an enumerated attribute that indicates the directionality of the element's text.

Directionality really only applies to horizontal text to support differences in languages such as Arabic verses English. Vertical text only ever reads from top to bottom. Know of otherwise then please send me a message :)

Below I've styled the highlighted region with \`border-inline-start\`. This adds a border to where the text starts. Click the checkboxes to change the directionality between \`rtl\` (right-to-left) and \`ltr\` (left-to-right) and see the border follow the start of the text.

{% raw %}
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="xxPwgNp" data-user="timeband-it" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
<span>See the Pen <a href="https://codepen.io/timeband-it/pen/xxPwgNp">
Writing Mode</a> by Imran Nazir (<a href="https://codepen.io/timeband-it">@timeband-it</a>)on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
{% endraw %}

&nbsp  
I hope that you can see from this simple example how logical properties make it easier to layout content in different languages.

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties ""
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode "CSS logical properties"