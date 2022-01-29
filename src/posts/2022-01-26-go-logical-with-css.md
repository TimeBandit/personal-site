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



Would start at the foundations, building up the walls to match the plan? You could construct the roof in one piece and place it on top of the walls when complete. Good; now the interior isn't exposed to the elements from above anymore.



Where you place the windows affects how light enters the house. You the windows in the north and south face projections of the house. You now have a more consistent level of light in your house during the day.



Your house is now on a different world. On this world, the sun rises in the north and it rains parallel to the ground from the east. The house you build is no longer fit for purpose!



Imagine a house that detects its surroundings. So the roof would slide to where the right wall is and the windows would move the east walls. We could say that the house is doing what makes logical sense for it to do.

This is what CSS logical properties are. Your layout understands its context and reconfigures to what makes logical sense.



The suns path across the sky and the weather incline are the context variables in the above scenario. These variables trigger a change of layout. With CSS logical properties your context variable is the writing mode.



> The \[writing-mode]\[1] [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) property sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (html element for HTML documents).

u

Writing mode matters because the direction of copy varies among cultures. The styling of paragraphs may rely on knowing where the sentences begin and where they end. For example, text runs from right to left in the Arabic language.



An example:



First, some definitions that you need to keep in mind.



> Block dimension: The dimension perpendicular to the flow of text within a line
>
> Inline dimension: The dimension parallel to the flow of text within a line



What these mean depends on the writing mode.







\[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode "writing-mode"