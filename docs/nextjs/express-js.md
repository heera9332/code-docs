# ExpressJS

Express is a minimal and flexible Node.js framework that gives us a tools to build web applications and APIs with ease.

## Middlewares

Middleware functions run before sending a response.

## Built-in Middlewares

```js
app.use(express.static("public"));
app.use(express.json()); // Parses JSON body
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies
```

### Error Handling Middlewares

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});
```

### Third-party Middlewares

```bash
npm install morgan cors
```

```js
app.use(cors());            // Enables CORS
app.use(morgan('dev'));     // Logs requests
```


## Request/Response Lifecycle