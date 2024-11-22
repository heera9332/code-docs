---
title: "ReactJS Hooks"
keywords: ["react hooks", "hooks in reactjs"]
date: 22-11-2024
---

# ReactJS Hooks

React Hooks are functions that allow you to use state and lifecycle features in functional components

- Only Call Hooks at the Top Level
- Call Hooks in the Same Order
- Only Call Hooks from React Component
- Create Custom Hooks with the "use" Prefix

Here are some commonly used React Hooks:

`useState:`

Allows functional components to have state.
Example:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

`useEffect:`

Performs side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
Example:

```jsx
import React, { useState, useEffect } from "react";

function ExampleComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    fetchData()
      .then((response) => setData(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // The empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
```

### useRef

useRef hook - Provide direct access of DOM element, it allows you to persist values between renders

```jsx
const MyCom = () => {
  const divRef = useRef(null); // default is null

  const handleClick = () => {
    if(divRef.current) {
        console.log(document.getElementById(divRef.current.getAttribute("id"));
    }
  }
  return (
    <div ref={divRef} id="div-id">
      <button onClick={handleClick}>click me</button>
    </div>
  )
}
```
