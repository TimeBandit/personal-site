---
title: Children Flex Their Owls To Space Elements
description: Examination of three different techniques to spacing elements with CSS
date: 2022-02-27T00:04:03.365Z
imageAlt: image
imageAttr: ""
tags:
  - post
---


You are working on a layout using HTML and CSS. Part of it involved a container with a list of child elements. There must be a gap between each child element. What features should you use to achieve this? What you do not want is to apply a margin to achieve this and the last-child can end up with an unwanted margin.

This first approach applies margin to the child elements themselves.

.child {
   // this can leave us with an unwanted margin on the last element
    margin-bottom: 0.5rem
}

.child:last-child {
    // the last child selector to remove the final margin
    margin-bottom: 0rem
}

.child:not(:last-child) {
    margin-bottom: 0.5rem
}

There is an argument the child should not be responsible for it layout in the parent. The argument goes that the parent container must do this.

A neater way is to use an owl. Take this line or CSS

.container > * + *

The > selector  picks children with a specific parent. The * seletor picks any element and the + selector picks an immediate sibling. To understand this you can read it backwards
There are two way to achieve this the old way and the new way.

The old way is to use the CSS owl selector. It's called that from the way that it looks.