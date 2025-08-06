# Query Processing and Optimization – Introduction

When a user writes a SQL query (e.g., SELECT * FROM orders WHERE amount > 1000;), the Database Management System (DBMS) doesn't just execute it directly. Instead, it goes through several internal processing stages to:

- Understand the query
- Convert it into an efficient execution plan
- Optimize it to minimize time & resources
- Then execute it on the underlying data structures (tables, indexes, etc.)

This whole flow is called `Query Processing`, and the part where it chooses the fastest method is called Query Optimization.

## Query Processing – Steps Involved

### Step 1: Query Parsing / Syntax Analysis (Parser)

- Checks whether the query is syntactically correct.
- Produces a parse tree or abstract syntax tree (AST).

```sql
SELECT name FROM customers WHERE age > 25;
```

The parser ensures:

- Keywords like SELECT, FROM, WHERE are valid.
- The table customers exists.
- Column name and age are valid columns of the table.

If there is any syntax error (e.g., misspelled SQL keywords or invalid column names), it is caught here.

> 📌 This stage is also called syntax analyzer.

### Step 2: Query Rewrite (Algebraic Translation)

- Converts SQL query to a relational algebra expression.
- Simplifies or rewrites the query using rules (e.g., pushing down WHERE conditions).
- May also rewrite `views` or `subqueries` into simpler expressions.

```sql
SELECT name FROM customers WHERE age > 25 AND city = 'Delhi';
```

Might be rewritten as:


```sql
σ age > 25 AND city = 'Delhi' (customers) → then project `name`
```

### Step 3: Query Optimization

- Available indexes
- Table statistics (row count, column selectivity)
- Join methods (Nested Loop, Hash Join, Merge Join)
- Query cost (I/O cost, CPU cost, memory usage)

### Step 4: Query Code Generation

- The optimized plan is converted into a low-level instruction set or query execution plan (QEP).
- This is what the DB engine executes.

### Step 5: Query Execution Engine

- Executes the plan
- Uses access methods (index scan, table scan)
- Retrieves or modifies data
- Returns result to the user