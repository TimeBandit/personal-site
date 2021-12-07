---
title: How i get things done
description: a code snipper
date: 2021-12-07T08:56:36.812Z
featuredImage: https://loremflickr.com/320/240
tags: post
---
sdf



```typescript
import { expecter } from "ts-snippet";

const expectSnippet = expecter();

describe("observables", () => {
  it("should infer the source's type", () => {
    expectSnippet(`
      import * as Rx from "rxjs";
      const source = Rx.Observable.of(1);
    `).toInfer("source", "Observable<number>");
  });
});

```