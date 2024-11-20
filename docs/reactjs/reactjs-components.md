---
sidebar_position: 3
author: Heera Singh Lodhi
date: 20-11-2024
keywords:
  [
    reactjs components,
    react componets,
    functional components,
    class components,
    functional vs class components,
  ]
description: ""
slug: "reactjs-components"
id: "reactjs-components"
---

# ReactJS - Components

Components are the building blocks of a React application. They are reusable, self-contained pieces of the user interface that can be composed to build complex UIs.

## Component

- Component is a reusable peace of code that is used to build react app.

## Types of Components

There are two type of components are ReactJS. that is

1. Functional
2. Class

### Functional Components

Functional components are simple JavaScript functions that accept props and return JSX. Class components are JavaScript classes that extend React.Component and have a render method.

```jsx
function Comp() {
  return <h1>This is heading</h1>;
}
```

### Counter

```jsx
function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
```

### Functional and Class based components

Class components are a type of component that was prevalent before the introduction of hooks in React 16.8. Class components use ES6 class syntax and extend the React.Component class to create a component with state and lifecycle methods.

- The constructor method is used to initialize the component's state.
- The handleClick method is an event handler that updates the state when a button is clicked.
- The render method is where the component's UI is defined.

```jsx
import React, { Component } from "react";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyClassComponent;
```

- The constructor method is used to initialize the component's state.
- The handleClick method is an event handler that updates the state when a button is clicked.
- The render method is where the component's UI is defined.

Class components also have lifecycle methods, such as componentDidMount, componentDidUpdate, and componentWillUnmount, which can be used for handling side effects, fetching data, or cleaning up resources.

:::tip[Note]
Component name is always starts with a captical letter
:::
