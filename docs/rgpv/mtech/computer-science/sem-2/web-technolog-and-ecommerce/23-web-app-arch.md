# Web Application Architectures

Web application architecture refers to the structure and interaction between components (client, server, database) in a web application.

## Types of Web Application Architectures

1. Monolithic Architecture
2. Client-Server Architecture
3. Two-Tier Architecture
4. Three-Tier Architecture
5. N-Tier Architecture
6. Microservices Architecture
7. Serverless Architecture
8. Progressive Web App (PWA) Architecture

## 1. Monolithic Architecture

- All components (UI, business logic, database) are bundled into a single application.
- Tight coupling of frontend and backend.
- Easy to develop for small apps, but hard to scale and maintain.
  Example: Classic PHP applications, JSP, ASP.NET Web Forms.

## 2. Client-Server Architecture

- The client (browser) makes requests to the server.
- Server processes the request and sends back responses (HTML or JSON).
- Separation of concerns: client handles UI, server handles logic and data.
  Example: WordPress, LAMP stack apps (Linux, Apache, MySQL, PHP)

## 3. Two-Tier Architecture

- Consists of Client and Server (usually DB server).
- Business logic runs on the client or middle layer.
- Suitable for small networks, not scalable for internet-scale apps.
  Example: Desktop app with direct database access.

## 4. Three-Tier Architecture

- Divides the application into three layers:
  1. Presentation (Frontend)
  2. Application Logic (Backend/API)
  3. Data (Database)
- Clean separation and better scalability.
  Example: React frontend + Node.js API + MongoDB.

## 5. N-Tier Architecture

- Like 3-tier, but adds more layers such as caching, authentication, message queues, microservices.
- Designed for large, complex systems.
  Example: Enterprise apps with load balancers, service buses, microservices.

## 6. Microservices Architecture

- Application is split into small, independent services.
- Each service handles a specific function and communicates over APIs.
- Great for scaling, deployment, and fault isolation.
  Example: Netflix, Amazon

## 7. Serverless Architecture

- Developers write functions, not server logic.
- Infrastructure is managed by cloud providers (e.g., AWS Lambda).
- Cost-effective and scalable.
  Example: JAMstack apps, AWS Lambda + API Gateway + S3

## 8. Progressive Web App (PWA) Architecture

- Web apps that behave like native apps.
- Uses service workers, caching, and offline-first techniques.

## Summary Table

| Architecture Type | Key Feature                      | Use Case              |
| ----------------- | -------------------------------- | --------------------- |
| Monolithic        | All-in-one application           | Small apps            |
| Client-Server     | UI on client, logic on server    | Traditional web apps  |
| Two-Tier          | Direct client-DB connection      | LAN-based apps        |
| Three-Tier        | Frontend, backend, database      | Modern web apps       |
| N-Tier            | Multiple layers + microservices  | Enterprise solutions  |
| Microservices     | Independent services per feature | Highly scalable apps  |
| Serverless        | Cloud-managed functions          | Event-driven, low ops |
| PWA               | Web app with native app features | Mobile-first apps     |
