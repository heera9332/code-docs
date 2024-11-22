---
sidebar_position: 3
author: Heera Singh Lodhi
date: 21-11-2024
keywords: ["typescript", "javascript"]
description: ""
slug: "reactjs-components"
id: "reactjs-components"
---

# Introduction to TypeScript

TypeScript is a superset of JavaScript, with having types.

- Typescript introduced by [Microsoft](https://www.microsoft.com/en-in/)
- TypeScript is a strongly typed programming language developed by Microsoft.

## Key Features of TypeScript

1. Static Typing

We need to define the variable type before using the variable or constant, also define the type of function parameter and return values type.

```ts
let age: number = 25; // Declares a variable of type 'number'
```

2. Type Interence

If a type is not explicitly defined, TypeScript can infer the type based on the assigned value.

```ts
let name = "John"; // TypeScript infers 'name' as a string
```

3. Interfaces

These allow you to define custom types and structures, making your code more predictable and readable.

```ts
interface Person {
  name: string;
  age: number;
}
```

4. Classes and Object-Oriented Programming

TypeScript supports modern JavaScript features, including ES6 classes, interfaces, and inheritance.

```ts
class Animal {
  constructor(public name: string) {}
  makeSound() {
    console.log(`${this.name} makes a sound.`);
  }
}
```

## Benefits of TypeScript:

- **Improve code quality** - catch errors in development time
- **Better maintainability** - help us to understand code, because constant/variable has type. so we aspect the input/output of function.
- **Support of modern Javascript** Typescript support the modern javascript that is ES6 and above version of JS.
- **Scalability**

## How TypeScript Works

- Developers write code in TypeScript (.ts files).
- TypeScript is compiled (transpiled) into JavaScript (.js files).
- The resulting JavaScript can be run in any environment that supports JavaScript.

<script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6932757539306050"
        crossOrigin="anonymous"
      ></script>
<ins
  className="adsbygoogle"
  style="block"
  data-ad-client="ca-pub-6932757539306050"
  data-ad-slot="8736906737"
  data-ad-format="auto"
  data-full-width-responsive="true"
></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
