## Install prisma

```sh
npm install @prisma/cli @prisma/client --save-dev
```

## Configure Database

Step 1: Install your database driver:

For MySQL:

```sh
npm install mysql2
```

For PostgreSQL:

```sh
npm install pg
```

For SQLite:

```sh
npm install sqlite3
```

### Initialize Prisma

Run the following command to create the required Prisma files:

```sh
npx prisma init
```

This will create:

A prisma folder containing a schema.prisma file.
A .env file for database connection configuration.

## Define Your Schema

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql" // Change to "postgresql" or "sqlite" as needed
  url      = env("DATABASE_URL")
}

model User {
  id    Int      @id @default(autoincrement())
  name  String
  email String   @unique
  posts Post[]
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String
  published Boolean  @default(false)
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
}
```

## Generate Prisma Client

Generate the Prisma Client for interacting with your database:

```sh
npx prisma generate
```

## Key Commands Summary:

- `npx prisma init` - Initialize Prisma.
- `npx prisma migrate dev --name migration_name ` - Create a migration.
- `npx prisma generate` - Generate Prisma Client.
- `npx prisma studio` - Open Prisma Studio.

## SQLite3

```sh
npm install sqlite3
```

**Configure .env file**

```sh
DATABASE_URL="mysql://username:password@localhost:3306/mydatabase"
```

## Prisma Studio (Optional)

Use Prisma Studio to visually interact with your database:

```bash
npx prisma studio
```

## Reset the Database Schema

1. migrate

```sh
npx prisma migrate reset
```

2. generate

```sh
npx prisma generate
```
