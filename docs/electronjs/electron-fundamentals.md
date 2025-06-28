---
author: Heera Singh
date: 06-04-2025
---

# ElectronJS Fundamentals

Electron is a framework that allows us to build cross-platform desktop applications using:

- HTML, CSS, and JavaScript
- Node.js APIs (for backend logic)
- Chromium (for frontend/UI rendering)

`Chromium is a free and open-source web browser project, primarily developed and maintained by Google.`

## How Electron Works (Main Process vs Renderer Process)

Electron apps have two types of processes:

1. **Main Process**

- Runs in Node.js
- Controls the lifecycle of your app
- Responsible for creating and managing BrowserWindow instances (which are like native windows)

2. **Renderer Process**

- Each window runs its own renderer process
- This is where your HTML/CSS/JS frontend runs
- It’s powered by Chromium
- Cannot access Node APIs directly (unless enabled)

`Think of the main process as the manager, and renderer processes as the UI workers.`

## Role of Chromium and Node.js in Electron

- **Chromium** Renders your UI like a browser (without the browser UI)
- **Node.js** Gives us access to OS-level APIs (like fs, path, etc.)

## Electron Lifecycle Events

These events control the app's behavior across different OS platforms.

Key Events in the app module:
`app.on('ready', ...)`
Fired when Electron has finished initialization and is ready to create browser windows.

`app.on('window-all-closed', ...)`
Triggered when all windows are closed. On macOS, apps often stay open until explicitly quit.

`app.on('activate', ...)`
Common on macOS. Fired when the app is reactivated (e.g., clicked on dock icon).

## Let's Create Our First Electron App

```sh
mkdir my-electron-app && cd my-electron-app
npm init -y
npm install electron --save-dev
```

```js title="main.js"
const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // allow Node.js in renderer
      contextIsolation: false,
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
```

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>Hello Electron</title>
  </head>
  <body>
    <h1>Hello from Electron!</h1>
    <p>This is rendered with Chromium.</p>
  </body>
</html>
```

```json title="package.json"
"main": "main.js",
"scripts": {
  "start": "electron ."
}
```

> start app

```sh
npm start
```
