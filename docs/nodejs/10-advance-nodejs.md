---
title: "Advanced NodeJS"
slug: advanced-nodejs
date: 22-03-2025
author: Heear Singh
keyword: "advance nodejs"
---

# Advance NodesJS

In this advanced Node.js guide, we’ll explore how to implement hooks similar to those in WordPress. In WordPress, hooks allow you to customize or extend functionality without modifying the core code directly.

There are two main types of hooks in WordPress:

1. Action Hooks
2. Filter Hooks

## Action hook

Action hooks allow us to execute custom functions at specific points in your code. These hooks do not return any value — they simply execute the registered functions when the action is triggered.

### Implementing Action Hooks in Node.js

We can use the EventEmitter class in Node.js to replicate action hooks.

```js
const dotenv = require("dotenv");
const express = require("express");
const EventEmitter = require("events");

dotenv.config();
const PORT = 3000;
const app = express();
const eventEmitter = new EventEmitter();

// Add middleware to parse JSON bodies
app.use(express.json());

function addAction(hookName, callback) {
  eventEmitter.on(hookName, callback);
}

function doAction(hookName, ...args) {
  eventEmitter.emit(hookName, ...args);
}

app.post("/posts", async (req, res) => {
  const post = req.body;

  res.json({ message: "post created", post });
  doAction("after_post_saved", post);
});

app.get("/", async (req, res) => {
  return res.json({ message: "working" });
});

/** we can fire multiple funx on save event - after_post_saved  */

addAction("after_post_saved", function (data) {
  console.log("Post data received in after_post_saved action1:", data);
});

addAction("after_post_saved", function (data) {
  console.log("Post data received in after_post_saved action2:", data);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Filter hook

Filter hooks allow us to modify data before it is used or displayed. Unlike action hooks, filter hooks must return a value because they allow you to adjust the original data.

1. applyFilters
2. addFilter

### Implementing Filter Hooks in Node.js

We can extend the EventEmitter class to handle and modify data in a similar way to WordPress filters.

```js
const dotenv = require("dotenv");
const express = require("express");
const EventEmitter = require("events");

dotenv.config();
const PORT = 3000;
const app = express();

const eventEmitter = new EventEmitter();

class FilterManager extends EventEmitter {
  applyFilters(hookName, value, ...args) {
    let filteredValue = value;
    this.listeners(hookName).forEach((callback) => {
      filteredValue = callback(filteredValue, ...args) || filteredValue;
    });
    return filteredValue;
  }
}

const filterManager = new FilterManager();

// Function to add a filter
function addFilter(hookName, callback) {
  filterManager.on(hookName, callback);
}

// Function to apply a filter
function applyFilters(hookName, value, ...args) {
  return filterManager.applyFilters(hookName, value, ...args);
}

// Add middleware to parse JSON bodies
app.use(express.json());

app.post("/posts", async (req, res) => {
  const { title, content } = req.body;

  res.json({
    message: "post created",
    post: { content, title: applyFilters("modify_title", title) },
  });
});

addFilter("modify_title", (title) => {
  return "New Title";
});

app.get("/", async (req, res) => {
  return res.json({ message: "working" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

## Complete hooks.js for project

```js
/**
 * @author: Heera Singh
 * @date: 22-03-2025
 * @description: Hooks features like WordPress
 */

const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

class FilterManager extends EventEmitter {
  applyFilters(hookName, value, ...args) {
    let filteredValue = value;
    this.listeners(hookName).forEach((callback) => {
      try {
        filteredValue = callback(filteredValue, ...args) || filteredValue;
      } catch (error) {
        console.error(`Error in filter '${hookName}': ${error.message}`);
      }
    });
    return filteredValue;
  }
}

const filterManager = new FilterManager();

/** Filter Hooks */
const addFilter = (hookName, callback) => filterManager.on(hookName, callback);
const applyFilters = (hookName, value, ...args) =>
  filterManager.applyFilters(hookName, value, ...args);

/** Action Hooks */
const addAction = (hookName, callback) => eventEmitter.on(hookName, callback);
const doAction = (hookName, ...args) => eventEmitter.emit(hookName, ...args);

/** Optional: Add single execution actions/filters */
const addOnceAction = (hookName, callback) =>
  eventEmitter.once(hookName, callback);
const addOnceFilter = (hookName, callback) =>
  filterManager.once(hookName, callback);

module.exports = {
  addAction,
  doAction,
  addFilter,
  applyFilters,
  addOnceAction,
  addOnceFilter,
};

```
