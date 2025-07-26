# Markup Languages

Markup is a system for annotating text to define structure, formatting, or meaning — especially for display in web browsers or other programs.

> A markup language uses tags or symbols to "mark up" text so that software can process and present it appropriately.

## Key Characteristics of Markup:

- Markup does **not perform logic** (unlike programming languages).
- It defines **how content should be structured or displayed**.
- It uses **tags** (e.g., `<title>`, `<p>`, `<table>`) to identify elements.
- It separates **content from presentation or behavior**.


> Markup = content + structure

> It’s how we tell computers what our content is and how it should be treated.

## Markup Languages Overview

| Markup Language | Full Form                        | Description |
|------------------|----------------------------------|-------------|
| **HTML**         | HyperText Markup Language        | The standard language for creating web pages. Uses tags like `<p>`, `<div>`, `<img>` to structure content. |
| **DHTML**        | Dynamic HTML                     | Not a language, but a collection of HTML, CSS, JavaScript used together to create interactive web pages. |
| **VRML**         | Virtual Reality Modeling Language| Used to describe 3D interactive graphics (virtual worlds) on the web. Now mostly replaced by WebGL/X3D. |
| **SGML**         | Standard Generalized Markup Language | A meta-language used to define other markup languages like HTML and XML. Very complex and rarely used directly. |
| **XML**          | eXtensible Markup Language       | A flexible text format for storing and transporting data. Tags are user-defined. Used in config files, data exchange, etc. |

## HTML (HyperText Markup Language)

- Defines the structure of web pages.
- Uses predefined tags like `<h1>`, `<table>`, `<a>`, etc.
- Cannot store logic or dynamic behavior alone.

```html
<p>Hello, world!</p>
```

## DHTML (Dynamic HTML)

- Combines HTML + CSS + JavaScript.
- Enables animations, live input validations, content updates without page reloads.
- Not a separate language.

```html
<div id="demo">Hello</div>
<script>
  document.getElementById("demo").innerText = "Dynamic content";
</script>
```

## VRML (Virtual Reality Modeling Language)

- Used to model 3D environments on the web.
- File extension: `.wrl`
- Mostly outdated; replaced by WebGL, Three.js, and X3D.


## SGML (Standard Generalized Markup Language)

- Parent of HTML and XML.
- Used to define the structure and rules of custom markup languages.
- Too complex for most web use-cases.

## XML (eXtensible Markup Language)

- A markup language for storing, transporting, and sharing structured data.
- User-defined tags (unlike HTML’s fixed set).
- Strictly structured (every tag must be closed, case-sensitive).


```xml
<user>
  <name>Developer</name>
  <role>Full Stack</role>
</user>
```

## Summary

| Language | Purpose                              | Extensible | Dynamic | Modern Use |
|----------|--------------------------------------|------------|---------|-------------|
| HTML     | Web page structure                   | No         | No      | Yes         |
| DHTML    | Interactive web design               | N/A        | Yes     | Yes         |
| VRML     | 3D virtual modeling                  | No         | Yes     | No          |
| SGML     | Define markup languages              | Yes        | No      | Rare        |
| XML      | Data transport and config            | Yes        | No      | Yes         |
