# Introduction to ReactJS

![ReactJS logo](/img/reactjs/reactjs.png)

## What is ReactJS?

- The library for web and native user interfaces
- React is a JavaScript library for building user interfaces.
- React is used to build single-page applications.
- React is an open-source JavaScript library for building user interfaces. It's maintained by Facebook and a community of developers.
- React version - 18.2.0

## JSX (Javascript Syntax Extension)

JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe the structure of UI components. It looks similar to HTML but gets transpiled into JavaScript.

> It allows you to write javascript with html.

## Component

### Functional Component

### Styling the component

### CSS Modules .module.css

### State

State is an object that represents the data a component needs to render. Unlike props, state is mutable and is used for managing component-specific data.

> State is a mutable object.

### 3. Props

Props stands for properties, It is an object that is share data between components.

> Props are immutable object.

## 4. React Event

Events are any actions on a page, like click, scroll, mouse move, hover, drag etc.

```jsx
function Input() {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
```

### Getting Values

## 5. React Conditional Rendering

- if Statement

```jsx

```

- && Operator

```jsx

```

- Ternary operator

```jsx
//
const value = 3;
console.log(value == 3 ? true : false);
```

## 6. React Lists

- `map()` allows you to render list of components
- `key` is a unique number assigned to each sibling, But they can be duplicated globally.

## 7. React Forms

```jsx

function Login() {
  const [user, setUser] = useState({username: "", password: ""});
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }
  return (
    <form action="#" onSubmit={(e)=>{handleSubmit(e)}}>
      <h2>Login Form</h2>

      <div>
        <label for="username">Username</label>
        <input type="text" value={user.username} onChange={(e)=>{setUser({...user, username: e.target.value})}}>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" value={user.password} onChange={(e)=>{setUser({...user, password: e.target.value})}}>
      </div>

      <button type="submit">
        Login
      </button>
    </form>
  );
}

```

## 8. Class component

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
