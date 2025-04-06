---
author: Heera Singh
date: 06-04-2025
---

# Project Structure and Packaging

Project structure and packing is very important for every type of software. 

## Electron Project Structure

```sh
my-app/
├── public/              # static files (favicon, icons, etc.)
├── src/
│   ├── main/            # Electron main process (main.js, preload.js)
│   └── renderer/        # React or frontend app (App.jsx, index.html)
├── build/               # Webpack/Vite build output
├── package.json
├── vite.config.js / webpack.config.js

```

## Webpack or Vite with Electron

1. Vite (modern, fast)

- Best for React/Vue + Electron
- Simple config, hot reload works great

## Packaging

## Auto-updates and Code Signing

Using `electron-builder` or `electron-forge`
These tools help package your app into .exe, .dmg, .AppImage, etc.

Tool Description

electron-builder Most popular, supports auto-update, code signing, etc.
electron-forge Simpler to start, good plugins, good dev experience
