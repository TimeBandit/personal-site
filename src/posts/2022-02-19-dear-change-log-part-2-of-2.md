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

Before I do that, a little note on Semantic Version and Conventional Commits. 

## Semantic Versioning

Have you ever wondered how versioning works? Download a module or an app and it will have a version number. Giving a version number to a piece of software is not mandatory. Done right, it can help you track down dependencies and lock down a release to the specific versions that you know work together.

[SemVer](https://semver.org/) is one common approach to assigning version numbers. [CalVer](https://calver.org/) is one alternative amongst others. With SemVer, versions numbers take the form; MAJOR.MINOR.PATCH, where all three parts are numbers.

Generally, these are `[Breaking changes].[Backward compatible changes].[Bug fixes]`. Thus 2.4.5 could mean 2 breaking changes, 4 features and 5 bug or other fixes.

## Conventional Commits

Conventional commits are a formalized method of constructing commit messages. It dovetails well with SemVer to give you a well-structured commit history. Deriving a structured changelog from your commits becomes easier at this point. Using this method, your commit messages would take the form:

`<type>[optional scope]: <description>`

Where `<type>` could be `feat` or `fix` followed by a colon and then a description. You can read more about them [here](https://www.conventionalcommits.org/en/v1.0.0/#summary). There are also tools for this though. You can use [Commitzen](https://github.com/commitizen/) to guide you through the commit as you make it.

## Example

Now that's done and you (hopefully) understand the prerequisites, let's go through an example. Open a terminal and enter the following

```shell
# Create a folder and switch into it.
mkdir changes && cd change

# Initialise the folder as a git repo and an npm package
# Note the version inside your package.json starts at v1.0.0

git init && npm init -y

# Add a gitinore and tell git to ignore the node_modules folder
echo "node_modules/" > .gitignore

# Install commitizen
npm install -g commitizen

# Install the changelog generator called Standard Version
npm i --save-dev standard-version
```

Add a release script to the package.json file

```json
{
"scripts": {
"release": "standard-version"
  }
}
```

```shell
# Stage your changes
git add --all

# Use Commitizen commit your changes.
# Make a couple more changes and commits.
npx cz
 
# Generate a changelog
npm run release
```

What happens now: 

* A `CHANGELOG.md` will be generated using your commit history
* The version number in package.json will be updated.
* The repo will be tagged with the new version number.

Your output should look something like this.

```markdown
# Changelog

All notable changes to this project will be documented in this file.

## 1.1.0 (2022-02-20)

### Features

* **(init):** made a new repo 5f684a9

### Bug Fixes

* added a gitignore file 2bc9400
```

## Summary

We've walked through the automated generation of a changelog, talked about semantic versioning and conventional commits. We've installed packages that help you with both and made a nicely formatted history of your changes in markdown. Pat yourself on the back.