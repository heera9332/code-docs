---
title: "Key Features of Typescript"
---

# Key Features of TypeScript

There are many features and functionality available in typescript.

- Type Annotations
- Interfaces and Type aliases
- Enums
- Generics
- Advanced Type System

## Type Annotations

We can specify types for variables, function parameters, and return values.

```ts title="types.ts"
function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("Alice"));
```

## Interfaces and Type aliases

TypeScript supports interfaces and type aliases for defining the structure of objects.

```ts title="interface-and-type-alias.ts"
interface User {
  name: string;
  age: number;
}

const user: User = { name: "John", age: 25 };
console.log(user);
```

## Enums

Enums allow us to define a set of named constants.

```ts title="enums.ts"
interface User {
  name: string;
  age: number;
}

const user: User = { name: "John", age: 25 };
console.log(user);
```

## Generics

Generics enable type-safe and reusable components.

```ts

```

## Advanced Type System

TypeScript supports advanced types like union types, intersection types, and mapped types.

typescript
Copy code

```ts title="type-system.ts"
type Result = string | number; // Union Type
const score: Result = 85;
```

## How to Get Started with TypeScript

Before using a programming language we need a complete setup of that language, If we have already installed a NodeJS, then we able to use typesript, else first install NodeJS then install typescript via `npm` or `yarn`

### Install TypeScript

```sh title="shell-script.sh"
npm install -g typescript
```

### Compile TypeScript

Compile TypeScript
Save your TypeScript code in a file with the `.ts` extension. Compile it to JavaScript using the `tsc` command:

```sh title="bash-script.sh"
tsc filename.ts
```

## Summary

TypeScript is a powerful extension of JavaScript that brings structure, type safety, and modern development features to the table.

## Referances

- [TypeScript](https://www.typescriptlang.org/)
- [NPM](https://www.npmjs.com/package/typescript)
