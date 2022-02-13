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
A changelog is like a captains log for your repository. It is a simplified history of all the work. Changelogs derive from your commit messages. Creating good quality commit messages will, in turn, lead to beautiful changelogs. They are usually saved as markdown files, making them easier to read and format. It's common to store them at the root level of your project.

There are tools that help you to make commits messages in a consistent way. For example, for VScode there is the [Commitizen](https://marketplace.visualstudio.com/items?itemName=KnisterPeter.vscode-commitizen) extension. It will guide you through making well-documented commits.

I'll describe an easy way and a more involved way. This post will describe the former. In the next post, I'll talk about the latter. It will combine changelog generation with automatic versioning.

Changelog creation will not work if you do not have a 'commit' history. If not already the case, ensure the repository is ready by running `git init` and making a few commits.

The easy way.

Open a terminal at the root of your project. Type

```bash
$ git log --pretty="- %s"
```

This will give you a simplified list of your commit messages.

```md
- Merge pull request #30 from TimeBandit/cms/post/2022-01-15-how-to-flex-your-pseudo-elements
- Update Tech Posts “2022-01-15-how-to-flex-your-pseudo-elements”
- Update Tech Posts “2022-01-15-how-to-flex-your-pseudo-elements”
- Create Tech Posts “2022-01-15-how-to-flex-your-pseudo-elements”
- Merge pull request #29 from TimeBandit/cms/post/2022-01-05-how-to-create-a-copyright-shortcode-in-nunjucks
- Update Tech Posts “2022-01-05-how-to-create-a-copyright-shortcode-in-nunjucks”
- Merge pull request #28 from TimeBandit/cms/post/2022-01-05-how-to-create-a-copyright-shortcode-in-nunjucks
- Update Tech Posts “2022-01-05-how-to-create-a-copyright-shortcode-in-nunjucks”
- Merge pull request #27 from TimeBandit/cms/post/2022-01-05-how-to-create-a-copyright-shortcode-in-nunjucks
- Update Tech Posts “2022-01-05-how-to-create-a-copyright-shortcode-in-nunjucks”
```

To save it run `$ git log --pretty="- %s" > CHANGELOG.md`

I've given you a very brief introduction to the topic of this post. In the follow-up article, I'll describe something more professional and production ready.