# Table of contents

1. **Electron.js Fundamentals**

- What is Electron and how it works (Main process vs Renderer process)
- Understanding the role of Chromium and Node.js in Electron
- Electron’s lifecycle events (app ready, window-all-closed, etc.)
- Creating your first Electron app

> [Read More](./electron-fundamentals.md)

2. **Window Management**

- Creating and managing browser windows
- Customizing window options (frameless, transparent, always-on-top, etc.)
- Handling multiple windows (multi-window communication)
- Modal windows and child windows

3. **Main Process vs Renderer Process**

- Responsibilities of each process
- Running Node.js code in the main process
- Communicating between processes using:
- ipcMain and ipcRenderer
- contextBridge (for secure preload scripts)

4. **Project Structure and Packaging**

- Organizing code: separating React frontend and main Electron logic
- Webpack or Vite with Electron
- Using electron-builder or electron-forge for packaging and distribution
- Auto-updates and code signing (for production apps)

> [Read More](./project-structure-and-packing.md)

5. **Integrating React with Electron**

- Creating a React app (Vite or CRA)
- Serving React in Electron (dev vs production)
- Routing (React Router inside Electron)
- Preloading scripts securely (contextIsolation, nodeIntegration)

6. **System Integration**

- Accessing native OS features:
- File system (with Node’s fs)
- System dialogs (dialog module)
- Clipboard access
- Notifications
- Tray icons, dock menus, and system tray integration
- Global shortcuts

7. **Security Best Practices**

- Disabling remote module
- Context Isolation and preload scripts
- Avoid using nodeIntegration: true
- CSP (Content Security Policy)
- Secure IPC communication

8. **File & Data Handling**

- Reading and writing local files (JSON, Markdown, etc.)
- Local storage vs SQLite vs full database (e.g. using SQLite or NeDB)
- Handling images and media assets
- Using secure storage for sensitive data (e.g. credentials)

9. **Networking**

- Making HTTP requests from the renderer (using fetch, Axios)
- Handling offline/online modes
- Syncing data to cloud (if required)

10. **Debugging and Testing**

- Debugging Electron apps in development mode
- Using DevTools in Electron
- Logging and crash reporting
- Writing tests for Electron apps (unit and E2E)

11. **Publishing and Distribution**

- Cross-platform builds (Windows, macOS, Linux)
- Auto-updating via electron-updater
- Code signing (for macOS and Windows)
- App icons and metadata

12. **Bonus Tools & Libraries**

If you’re building something like an Obsidian-like Markdown app or a note-taking app, I’d recommend paying special attention to:

- File system handling
- Local DB integration
- Markdown rendering
- Custom keybindings

Plugin architecture (if you're going advanced)
