---
author: Heera Singh
date: 05-04-2025
---

# Introduction to NodeJS

NodeJS is a JavaScript Runtime that run JS without browser. (Run JS on server)

- Built on Google Chrome's V8 JavaScript engine.
- Designed for scalable, non-blocking, and event-driven network apps.

## 2. Node.js Architecture

Here’s the magic behind Node.js — it’s single-threaded but non-blocking, thanks to the Event Loop.

**Event Loop**

The Event Loop is a mechanism that handles:

- Incoming requests
- Timers
- I/O tasks
- Callbacks

**Single Threaded**

Node.js uses a single thread for JavaScript execution but uses libuv (a C++ library under the hood) to manage background tasks on a thread pool.

**Non-blocking I/O**

Node.js doesn’t block the main thread while doing I/O operations like file or database access.

So instead of this (in PHP):

```php
$data = file_get_contents("bigfile.txt"); // blocks the script

```

Nodejs does this

```js
fs.readFile("bigfile.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
```

→ It runs asynchronously, letting Node handle other requests while the file is loading.

## Node.js Strengths:

- Perfect for real-time applications (chat apps, streaming).
- Unified language (JS) for both frontend and backend.
- Easy to scale horizontally.
- Huge package ecosystem (NPM).

## Node.js Weaknesses:

- Not ideal for CPU-heavy tasks (like image processing).
- Callback hell (can be solved with async/await).
