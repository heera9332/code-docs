# HTML and Web

Static and dynamic web pages, tiers, plug-ins, frames and forms.

| Feature             | Static Web Page                      | Dynamic Web Page                                          |
| ------------------- | ------------------------------------ | --------------------------------------------------------- |
| Content             | Fixed (doesn't change unless edited) | Generated at runtime (changes based on user or data)      |
| Technologies        | HTML, CSS                            | HTML + JavaScript + Server-side code (PHP, Node.js, etc.) |
| Interactivity       | Minimal                              | High (can respond to user inputs, database)               |
| Hosting Requirement | Just a file server                   | Needs application server and often a database             |
| Example             | about.html                           | profile.php?id=123                                        |

## Web Tiers (Architectures)

| Tier   | Description                                                                      |
| ------ | -------------------------------------------------------------------------------- |
| 1-Tier | All logic in a single layer (e.g., static HTML site).                            |
| 2-Tier | Client + Server (e.g., web frontend + database server).                          |
| 3-Tier | Client + Application Server + Database (standard for web apps).                  |
| N-Tier | Like 3-tier but with additional layers (e.g., services, caching, microservices). |

> Most common: Browser ↔ Backend (API) ↔ Database

## Plug-ins

- **Definition**: Small software components that add features to browsers or applications.
- **Examples**: Adobe Flash Player, Java Applet plugin, PDF viewer.
- **Status**: Mostly obsolete — replaced by HTML5, WebAssembly, native browser APIs.

## Frames

- **Definition**: HTML tags `<frameset>` and `<frame>` divide the browser window into scrollable sections.
- **Purpose**: Load multiple HTML pages in one window.
- **Issues**:
  - Bad SEO
  - Difficult navigation
  - Deprecated in HTML5
- **Modern Replacement**: Use `<iframe>` (rarely), or CSS Grid/Flexbox layouts.

## Forms

- **Definition**: `<form>` is used to collect user inputs and send them to a server.
- **Common Elements**:
  - `<input>`, `<textarea>`, `<select>`, `<button>`
- **Example**:

```html
<form action="/submit" method="POST">
  <input type="text" name="username" />
  <button type="submit">Send</button>
</form>
```

> Use Cases: Login, Signup, Contact Us, Search, Feedback, etc.

## Form Methods

| Method   | Description                                        |
|----------|----------------------------------------------------|
| GET      | Appends data to the URL as query parameters. Visible and not secure. Used for searches. |
| POST     | Sends data in the body of the request. More secure, used for login, registration, etc. |


## Form Content Types (enctype)

| enctype value	| Description                                                           |
| --------------| ----------------------------------------------------------------------|
| application/x-www-form-urlencoded | Default. Used for simple forms (text, numbers, etc.)
| multipart/form-data |	Used for file uploads (<input type="file">)
| text/plain | Sends plain text (rarely used)

```html
<form method="POST" enctype="multipart/form-data"></form>
```



## Form Encryption & Security

- Use `HTTPS` to ensure data is encrypted in transit.
- Use `CSRF` tokens to prevent cross-site attacks.
- Use `input validation` on client and server side.
- Never trust client-side data alone

## Common Form Attributes

| Attribute | Description |
------------|-------------|
| action |	URL where form data is submitted |
| method | HTTP method (GET, POST, etc.) |
| enctype |	Content type of the submitted data |
| target |	Where to open the response (_self, _blank, etc.) |
| autocomplete | Enables/disables autofill (on / off) |
| novalidate | Disables HTML5 validation |
| name	| Name of the form (optional, used in JS)


## Example Form

```html
<form action="/login" method="POST">
  <label>Username:</label>
  <input type="text" name="username" required />

  <label>Password:</label>
  <input type="password" name="password" required />

  <button type="submit">Login</button>
</form>

```

## Form Input Types

- `text`, `password`, `email`, `number`, `radio`, `checkbox`, `file`, `hidden`, `date`, `submit`, `reset`

```html
<input type="email" name="email" required />
<input type="checkbox" name="terms" />

```

## Summary

- Use POST for secure data handling.
- Use multipart/form-data for file uploads.
- Always validate input on the server.
- Protect with HTTPS and anti-CSRF measures.