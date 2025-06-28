# NodeJS & Databases

NodeJS a JS runtime that runs on server, on server we connect to any databases like MySQL, MongoDB, SQlite3 and so on.

- For any type Database connection we use their database driver to connect them. every database has own specific driver to connect.
- A database driver provided by Database developers, called native driver.

## ORM (Object Relational Model)

- Generally in development we use databases ORM (Object relational Modal) library to map Real object to Database
- Prisma (MySQL, Postgres)
- Mongoose (Mongodb)

## NodeJS with MongoDB

we can connect mongodb using its native driver or mongose (third party library)

Let's install mongoose

```bash
npm install mongoose
```

```js
async function connectDB() {
  try {
    const connect = await mongoose.connect(mongo_uri);
  } catch (err) {
    console.log(err);
  }
}
```
