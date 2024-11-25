---
title: "Routing in NextJS"
author: Heera Singh Lodhi
date: 25-11-2024
keywords: ["routing in nextjs", "nextjs docs", "nextjs tutorial"]
description: "NextJS support file based routing, every route has in the form folder that also had contains a file called page.tsx or page.jsx"
---

# Routing in NextJS

NextJS support file based routing, every route has in the form folder that also had contains a file called page.tsx or page.jsx

- In NextJS docs we use only App Router.

```jsx

// default export component is render as a page

about-us
  page.jsx

```

## Let's create a NextJS Page

```jsx title="page.jsx"
export default function Page() {
  return (
    <div>
      <h1>This is a page</h1>
      <main>Page Content</main>
    </div>
  )
}
```

<p class="text-center">Or</p>

```jsx title="page.jsx"
function Page() {
  return (
    <div>
      <h1>This is a page</h1>
      <main>Page Content</main>
    </div>
  )
}

export default Page;
```


