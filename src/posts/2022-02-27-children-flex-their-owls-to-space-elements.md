---
title: Children Flex Their Owls To Space Elements
description: Examination of three different techniques to spacing elements with CSS
date: 2022-02-27T00:04:03.365Z
imageAlt: image
imageAttr: ""
tags:
  - post
---
You are working on a layout using HTML and CSS. Part of it involves a container with a list of child elements. There must be a gap between each child element. I'm going to show you three ways of adding that gap.

## Margins

This first approach applies margin to the child elements themselves.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="oNoaLBz" data-user="timeband-it" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/timeband-it/pen/oNoaLBz">
  Gaps and Margins</a> by Imran Nazir (<a href="https://codepen.io/timeband-it">@timeband-it</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

The problem with this is that you must remember to cancel out that final margin with an extra line of CSS. Otherwise one of the margins will double up with the padding of the container. There is an argument that a child element should not be responsible for its own layout. The argument goes that the parent container should do this.

## Owls

A neater way is to use an owl. Take this line or CSS

`.container >  * + *`

It's named an owl because the last three characters resemble the animal. 

The `>` symbol selects children with a specific parent. The `*` symbol selects any element and the `+` symbol selects an immediate sibling. Reading it from right-to-left it says:

>
> Select any element that is the immediate sibling of any element that is the child of a container.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="MWOPeJd" data-user="timeband-it" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/timeband-it/pen/MWOPeJd">
  Gaps with Owls</a> by Imran Nazir (<a href="https://codepen.io/timeband-it">@timeband-it</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
This method works quite well and adds a gap between sibling elements and not against the border of the container.  

## Flex Gap

The final method is the `gap` property of flex items. This assumes you are not distributing the alignment using the `justify-conten`t property.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="ExbdKLM" data-user="timeband-it" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/timeband-it/pen/ExbdKLM">
  Gaps with Flexbox</a> by Imran Nazir (<a href="https://codepen.io/timeband-it">@timeband-it</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

This method is also the newest.



I've covered three methods of spacing elements. Which one will you choose?