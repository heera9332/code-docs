# HTTP (HyperText Transfer Protocol)

The HyperText Transfer Protocol (HTTP) is the foundation of data communication on the World Wide Web. Whenever you browse a website, play a video on YouTube, or shop online — you're using HTTP behind the scenes.

## What is HTTP?

HTTP is a client-server protocol that allows a client (typically a web browser) to request resources from a server (like a web server hosting a website).

- It is a stateless protocol — meaning each request is independent and doesn’t retain user data across requests.
- It operates over TCP/IP and uses port 80 by default (or 443 for HTTPS — secure version).
- HTTP is defined in RFC 2616 (and later updated by RFC 7230 series).

## How HTTP Works – Step by Step

When you open a website like https://example.com, this is roughly what happens:

### 1. Client (Browser) Sends Request

The browser initiates an HTTP request:

```sh
GET /index.html HTTP/1.1
Host: example.com
User-Agent: Chrome/114.0
```

Here:

- GET is the HTTP method (others include POST, PUT, DELETE, etc.)
- /index.html is the resource path
- HTTP/1.1 is the protocol version

### 2. Server Processes the Request

The server receives the request, locates the file, and generates an HTTP response.

### 3. Server Sends Back Response

```php
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024

<html>
  <body>Hello World!</body>
</html>
```

- `200` OK is the status code (200 means success)
- `Content-Type` tells the browser how to render the content (HTML in this case)

### 4. Browser Renders the Page

The browser receives the HTML and renders it visually for you. If the page has images, CSS, or JS files, it will make additional HTTP requests for each one.

## HTTP Methods (Verbs)

| Method | Purpose                           |
| ------ | --------------------------------- |
| GET    | Retrieve data from the server     |
| POST   | Send data to the server           |
| PUT    | Update existing data              |
| DELETE | Delete data                       |
| HEAD   | Same as GET, but no body returned |
| PATCH  | Partially update data             |

## What About HTTPS?

- HTTPS is the secure version of HTTP.
- It uses SSL/TLS encryption to protect data during transmission.
- Ensures privacy, authentication, and integrity of data.

## Summary

| Feature       | HTTP Description                              |
| ------------- | --------------------------------------------- |
| Protocol Type | Stateless, request-response                   |
| Default Port  | 80 (or 443 for HTTPS)                         |
| Used For      | Communication between browser and web server  |
| Status Codes  | 200 (OK), 404 (Not Found), 500 (Server Error) |
| Methods       | GET, POST, PUT, DELETE, etc.                  |

## Why HTTP is called stateless protocol? Enlist various methods for state management and also give advantages and disadvantages of each method. 

### Why is HTTP Called a Stateless Protocol?

HTTP is called a stateless protocol because each HTTP request is independent — the server does not retain any information about previous requests from the same client.

For example, when you:

1. Visit example.com/home
2. Then click on example.com/profile

The server treats both as separate, unrelated requests, unless some method is used to store and manage state (like cookies or sessions).

This design is simple, scalable, and fast, but it also means that state management is the developer’s responsibility.

### State Management Techniques in HTTP

To overcome HTTP’s statelessness, developers use various methods to store user-specific data (called "state") across multiple requests.

### 1. Cookies1. Cookies

Small text files stored on the client’s browser, sent with each HTTP request to the server.

| Feature   | Details                      |
| --------- | ---------------------------- |
| Stored On | Client-side (browser)        |
| Expiry    | Set by server                |
| Sent With | Every HTTP request to server |

### Advantages:

- Persistent storage across sessions
- Supported by all browsers
- Can store small amounts of user data (login status, preferences)

### Disadvantages:

- Limited size (~4KB)
- Security risk (e.g., session hijacking)
- Increases HTTP request size

### 2. Session (Server-Side Session)

Stores user data on the server; a unique session ID is stored on the client (via a cookie).

| Feature    | Details                          |
| ---------- | -------------------------------- |
| Stored On  | Server-side                      |
| Identifier | Session ID (usually in a cookie) |
| Duration   | Until browser close or timeout   |

### Advantages:

- Secure (data never exposed to client)
- Good for storing sensitive info like user roles or tokens

### Disadvantages:

- Needs server memory or DB storage
- Not scalable for very large traffic (without session store like Redis)

### 3. URL Rewriting

Passing state information (e.g., session ID) as part of the URL query string.

Example:
```sh
example.com/profile?sessionid=xyz123
```

### Advantages:

- No need for cookies
- Works even when cookies are disabled

### Disadvantages:

- Exposes data in URL (less secure)
- Can clutter and lengthen URLs
- Bookmarked/shared URLs leak session info


### 4. Hidden Form Fields

Embedding data inside HTML <form> as hidden input elements, passed on form submission.

```html
<input type="hidden" name="user_id" value="12345" />
```

### Advantages:

- Simple and browser-compatible
- No client-side storage needed

### Disadvantages:

- Only works with form submissions (not general navigation)
- Can be modified on client side (less secure)

### 5. Local Storage / Session Storage (HTML5)

Client-side storage supported by modern browsers (accessible via JavaScript).

| Type             | Persistent? | Scope        |
| ---------------- | ----------- | ------------ |
| `localStorage`   | Yes         | Across tabs  |
| `sessionStorage` | No          | Per-tab only |


### Advantages:

- Store larger amounts of data (up to ~5–10MB)
- Does not get sent with every HTTP request
- Easy to access via JS

### Disadvantages:

- Not secure for sensitive data
- No server-side access (need JS to sync)
- Not available in older browsers