---
sidebar_position: 7
title: React API Integration
slug: react-api-integration
keywords: ["react api integration", "api integration docs in react", "api integration in react"]
date: 29-11-2024
author: Heera Singh Lodhi
description: ""
---

# API Integration in ReactJS

API integration is the backbone of the software, every software is based on API's.

API has types, features and requirements. there are many free and paid api available for many of types services the provide.

- API is the based of software, if api not available then software does not work well.

In the reactjs we can integration these api using the JavaScript api (Javascript provide the functions to enable communcation between software)

`XMLHttpRequest`, `Fetch` and also very good libraries avaiable in js to integrate the api's,

Libraries like [axios](https://www.npmjs.com/package/axios) and other

```jsx title="XMLHttpRequest.js"
// Example: Using XMLHttpRequest for API Integration

const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";

xhr.open("GET", url, true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log("Response:", JSON.parse(xhr.responseText));
  }
};

xhr.onerror = function () {
  console.error("Request failed.");
};

xhr.send();
```

```js title="Fetch.js"
// Example: Using Fetch API for API Integration

const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Response:", data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
```

_Axios_

Axios is js library, for api integration, axios is avaible for both NodeJS and JavaScript (for client and server).

```sh title="bash.exe"
// to use this library, we need to install them, follow the command

npm install axios
```

```js title="fetch.js"

// Example: Using Axios for API Integration
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

axios
  .get(url)
  .then((response) => {
    console.log("Response:", response.data);
  })
  .catch((error) => {
    console.error("There was an error making the request:", error);
  });
```

## Comparision

**XMLHttpRequest** is the traditional way but is verbose and requires manual handling of promises.

**Fetch** API simplifies code with promises and is a modern replacement for XMLHttpRequest.

**Axios** provides additional features like automatic JSON parsing, request cancellation, and interceptors.

**Real-world Use Case**: Highlight where each method might be ideal (e.g., older projects might still use XMLHttpRequest, Fetch for browser environments, Axios for robust applications requiring server-side and client-side compatibility).
