---
title: Dear Change Log
description: Why you need a change log and how to generate them
date: 2022-02-09T20:37:12.397Z
imageSrc: https://loremflickr.com/320/240
imageAlt: image
imageAttr: ""
tags:
  - post
---
A changelog is like a captains log for your repo. It is a simplified history of all the work that went into your repository. Changelogs derive from your commit messages. Creating good quality commit messages will, in turn, lead to beautiful changelogs. Changelogs are usually in markdown form, making them easier to read and format. They are usually stored at the root level of the project.



There are tools that make commits easy. For example, for VScode there is the [Commitizen](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen) extension. It will guide you through making a well-documented commit.



I'll describe an easy way and a more involved way. They will not work if you do not have a 'commit' history. If not already the case, ensure the repository is ready by running \`git init\` and making a few commits.



The easy way.



Open a terminal at the root of your project. Type

\`\``bash

$ git log --pretty="- %s"

\`\``

This will give you a simplified list of your commit messages.