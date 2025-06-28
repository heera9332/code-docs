---
author: Heera Singh
date: 06-04-2025
---

# ElectronJS Windows Management

Electron uses the `BrowserWindow` class to create and manage native application windows.

The basic way to create a window is using:

```js title="main.js"
const { BrowserWindow } = require("electron");

const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
  },
});

win.loadFile("index.html");
```

We can also load a remote URL:

```js
win.loadURL("https://edevhindi.com/");
```

## Customizing Window Options

Electron allows deep customization of windows. Some popular options include:

<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>`frameless : true`</td>
<td>  Removes the OS window frame (good for custom UIs)</td>
</tr>
<tr>
<td>`transparent : true`</td>
<td> Makes the window background transparent</td>
</tr>
<tr>
<td>`alwaysOnTop: true`</td>
<td>Keeps window above all others</td>
</tr>
<tr>
<td>`resizable: false`</td>
<td>Prevents resizing</td>
</tr>
<tr>
<td>`fullscreen: true`</td>
<td>Launches in full screen</td>
</tr>
<tr>
<td>`titleBarStyle: 'hidden'`</td>
<td>macOS-style clean titlebar (useful with frameless)</td>
</tr>
</tbody>

</table>
