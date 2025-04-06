---
sidebar_position: 6
date: 19-02-2025
author: Heera Singh Lodhi
---

# Table of contents

## 1. Core Node.js Concepts

- Start here to understand how Node.js works behind the scenes:
- What is Node.js?
- Node.js Architecture (event loop, single-threaded, non-blocking I/O)
- Node.js vs traditional backend tech (PHP, Java, etc.)
> [Read](./introduction-to-nodejs.md)

## 2. Node.js Fundamentals

- Learn the basics:
- require vs import, CommonJS vs ES Modules
- File System (fs module)
- http module – creating basic server
- Events & EventEmitter
- Buffers and Streams
- Global objects (**dirname, **filename, process, console)
> > [Read](./introduction-to-nodejs.md)

## 3. NPM (Node Package Manager)

- Understanding package.json
- Installing & managing packages
- Dev dependencies vs dependencies
- Creating your own packages

## 4. Building APIs with Node.js

- This is your bread and butter:
- Creating REST APIs
- Handling routes manually
- Parsing incoming data (query, body, params)
- Using Express.js for routing and middlewares

## 5. Express.js (a must-learn framework)

- Routing (GET, POST, PUT, DELETE)
- Middleware (built-in, custom, third-party like morgan, cors)
- Error handling
- Request/response lifecycle
- Serving static files
- Express Router for modular code

## 6. Working with Databases

- Start with MongoDB since you use MERN:
- MongoDB CRUD operations
- Mongoose ORM (schema, model, validation)
- Connecting MongoDB with Node.js
- Using async/await and handling promises
- You can also explore:
- PostgreSQL + Sequelize or Prisma
- MySQL + mysql2 package

## 7. Authentication & Authorization

- JWT (JSON Web Token)
- Session-based auth
- Role-based access control
- Storing passwords securely (bcrypt)

## 8. Error Handling & Validation

Global error handlers
- Input validation with libraries like Joi, express-validator
- Custom error classes

## 9. Advanced Concepts

- Async programming: Promises, async/await, try/catch
- File uploads (multer)
- Sending emails (nodemailer)
- Environment variables with .env and dotenv
- Rate limiting, request logging, CORS

## 10. Build Tools & Production

- Using nodemon for development
- pm2 for process management
- Connecting frontend with backend (CORS, API calls)
- Folder structure for scalable apps
- Deploy Node.js apps (Heroku, Render, VPS with Nginx)
- Handling SSL, reverse proxy with Nginx

## Optional (But Useful) Topics

- WebSockets (socket.io) for real-time apps
- GraphQL (alternative to REST)
- Queues with bull and Redis
- Caching with Redis
