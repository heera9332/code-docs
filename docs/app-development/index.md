# Table content - App Development

## App

A software application designed to run on mobile devices like Android or iOS.

- Android apps typically include:
- UI (XML or declarative frameworks)
- Logic (Java/Kotlin/Flutter/Dart/React Native/JS)
- Resources (images, sounds, etc.)
- AndroidManifest (metadata/config)

## SDK (Software Development Kit)

A set of tools, libraries, and APIs provided by platforms (like Android SDK) to build applications.

- Android SDK includes:
- Compilers
- Emulators
- Debuggers
- adb (Android Debug Bridge)
- Platform APIs (like Camera, Contacts, etc.)

## NDK (Native Development Kit)

Used to write parts of an Android app using native languages like C or C++.

Useful when:

- You need high-performance computation (e.g. games, image processing).
- Reusing existing C/C++ libraries.
- Not required for typical Android apps.

## SDK Kit / Windows SDK Kit

These are collections of SDKs for different purposes:

- Windows SDK Kit helps you build Windows-based apps using C#/C++.
- Term "SDK Kit" sometimes used generically to mean a complete SDK setup for a given platform (e.g., Android SDK Kit).

## Flutter

UI toolkit by Google for building cross-platform apps from a single codebase (Android, iOS, Web, Desktop).

- Language: Dart
- Renders UI using its own rendering engine (Skia) for consistent look/feel.
- Very fast and good for custom UIs and animations.

## 🌐 7. Cordova (Apache Cordova)

- Lets you build mobile apps using HTML, CSS, and JS.
- Wraps web code inside a native container using WebView.
- Considered older tech; less performant than Flutter/React Native.

## ☕ Java

- One of the original languages for Android development (officially supported).
- Used with Android SDK.
- Syntax: Object-oriented
- Still widely used in enterprise-level backend development too.

## 🧵 Spring Boot

- A Java framework for building backend APIs or microservices easily.

- Used when your Android app communicates with a server (e.g., login, fetch data).
- Comes with embedded server (like Tomcat), making it easy to deploy.

## 🌱 Hibernate

A Java-based ORM (Object-Relational Mapping) tool.

- Used with Spring Boot or standalone.
- Converts Java objects to database tables and vice versa (abstracts SQL handling).
- Helps reduce boilerplate code in DB operations.

## 🧩 Relationships:

Android app (frontend) ⟶ talks to ⟶ Spring Boot backend ⟶ which uses Hibernate for database operations.

- You can build Android frontend using:
- Native Java/Kotlin + Android SDK
- Flutter (Dart)
- React Native (JavaScript)
- Cordova (HTML/JS/CSS)
