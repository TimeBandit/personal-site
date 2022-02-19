---
title: "Dear Change Log: Part 2 of 2"
description: How to create a production ready change-log
date: 2022-02-19T07:23:33.864Z
imageSrc: https://loremflickr.com/320/240
imageAlt: Cat in a tube
imageAttr: ""
tags:
  - post
---
In the previous post, I described what a changelog was, why they were important and how to make an albeit simple one.

In this post, I'll talk about one way of generating a production-ready changelog.

Before I do that, a little note on versions. Have you ever wondered how versioning works? Download a module or an app and it will have a version number. Giving a version number to a piece of software is not mandatory. Done right, it can help you track down dependencies and lock down a release to the specific versions. 

[SemVer](https://semver.org/) is one common approach to assisting version numbers. [CalVer](https://calver.org/) is an alternative I found but not used. With the former versions take this form; MAJOR.MINOR.PATCH

Generally, these are \[Breaking changes].\[Backward compatible changes].\[Bug fixes]



Now conventional commits is a formalized method of constructing commit messages. It links well with SemVer to give you a well structured commit history. Good enough for creating well formatted changlogs.