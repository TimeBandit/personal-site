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

11ty is a popular static site generator you can use with a templating language to build a website as a set of static files. The beauty of this is that you can use data from API's and files at build time. This means that you can trigger a fresh build each time your data changes.

[Nunjucks](https://mozilla.github.io/nunjucks/) is one such templating language. Others examples are [Pug](https://pugjs.org/api/getting-started.html) or [Handlebars](https://handlebarsjs.com/). Shortcodes  Nunjucks are