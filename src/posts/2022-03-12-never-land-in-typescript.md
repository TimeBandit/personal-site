---
title: Never land in Typescript
description: This post talk about a type in Typescript called never
date: 2022-03-12T15:23:27.222Z
imageAlt: image
imageAttr: ""
tags:
  - post
  - code
---
Did you know that Typescript(TS) has a data type called `never`? It messed with my head when I read about it. 

Remember, Typescript does its best to narrow something down to its most specific type. You have a lot of control over this through Types and Interfaces. When you can't arrive at a type we can think of it as saying "this will `never` happen". Hence the `never` type. I'll show you two examples.

Firstly, a function can have a return type of `never` because of an exception within it. The function can't run to completion so it can `never` return a value. 

```typescript
// returns never because it fails to complete
function z(): never {
 throw Error()
}
```

Secondly, when you have exhausted the elements of a type all you have left is `never`. For example, this function expects one type as an input. It returns the same type. The switch statement it contains exhausts the legal values. The function parameter is type specific. Hence the default is `never` reached. It will be of type `never`

```typescript
type Country  = 'england' | 'ireland'

function capitalize(x: Country): Country{
 switch(x){
 case 'england':
 case 'ireland':
 return x
 default:
 // x is of type `never`
 throw new Error(x)
  }
}
```

Hope you learnt something useful ❤️