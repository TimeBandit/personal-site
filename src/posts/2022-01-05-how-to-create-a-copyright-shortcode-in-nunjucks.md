---
title: Short and Sweet with Shortcodes, Nunjucks and Eleventy
description: This tutorial explains describes the process of creating a
  copyright notice shortcode.
date: 2022-01-05T20:39:09.833Z
imageSrc: https://images.unsplash.com/photo-1579057465452-81772679d48c
imageAlt: Lil kitty woke up in the dark
imageAttr: ""
tags:
  - post
---
In this brief post I'll describe the process of automating your website copyright notice with Eleventy (11ty).

## Intro

11ty is a popular static site generator you can use with any supported templating language to build a website as a set of static files. The beauty of this is that you can use data from API's and files at build time to create your pages. This also means that you can trigger a fresh build each time your data changes.

[Nunjucks](https://mozilla.github.io/nunjucks/) is one such templating language. Others examples are [Pug](https://pugjs.org/api/getting-started.html) or [Handlebars](https://handlebarsjs.com/). Shortcodes are a feature of 11ty where it extends the templating language to allow you to declare and use functions you define that generate custom HTML. For example:

```javascript
function myCustomSnippet(value){
    return `<h1>Get me ${value} dognuts</h1>`
}
```

## Copyright Notices

What follows is not legal advice, please do your own research. Although not mandatory, a copyright notice can protect your work and deter people from stealing your content. Having one costs nothing so why not? Many websites typically place their notice in the footer of their site so that it is visible on every page. Copyright notices are typically formatted like so: `Copyright © [Year] [Copyright owners name]`

## Building it

Within a file of the same name lets create our copyright notice generator.

```javascript
// copyrightNoticeShortcode.js

/**
 * 
 * @param {string} content the copyright owner 
 * @returns 
 */
function copyrightNoticeShortcode(content) {
  
  // gets the current year so you don't have to make manual edits
  const currentYear = new Date().getFullYear();
  
  return `<small>
        Copyright\&copy; ${currentYear} ${content}. All Rights Reserved
      </small>`;
}

module.exports = copyrightNoticeShortcode;
```

Now lets add this to 11ty's configuration file `.eleventy.js`

```javascript
// .eleventy.js

const copyrightNoticeShortcode = require("./src/shortcodes/copyrightNoticeShortcode");

module.exports = function(eleventyConfig) {
  // we extents Nunjucks here with our shortcode
  eleventyConfig.addNunjucksShortcode(
    "copyrightNotice",
    copyrightNoticeShortcode
  );
}
```

Now we use it. The shortcode (function) we decalred is now globally available in the template as `copyRightNotice` and we can pass its function parameters without parenthesis after the name of the function.

```html
{# footer.njk #}
<footer class="footer">{% copyrightNotice "Bart Simpson" %}</footer>
```

To see this in action see this bottom of this page.