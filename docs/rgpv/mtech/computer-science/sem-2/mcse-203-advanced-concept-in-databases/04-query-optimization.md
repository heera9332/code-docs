# Query Decomposition and Optimization

In modern relational DBMS, a SQL query is internally decomposed and optimized before being executed. The full lifecycle of a query typically involves these major phases:

## 1. Query Analysis

This is the first stage, where the query is parsed and validated for correctness.

Tasks:
Lexical analysis: Break SQL into tokens.

Syntax analysis (Parser): Checks SQL grammar.

Semantic analysis: Validates table/column names and types.

Output:
A parse tree or abstract syntax tree (AST).

## 2. Query Normalization

Query is normalized into canonical form — usually transformed into relational algebra expressions.

Example:
sql
Copy
Edit
SELECT name FROM users WHERE age > 25;
→ Becomes:

```sql 
π_name (σ_age > 25 (users))
```

Purpose:
Makes the query easier to optimize.

Handles nested queries, joins, subqueries, etc.

## 3. Semantic Analyzer

It ensures that:

All objects (tables, columns) exist.

Column types are compatible (e.g., can't compare varchar with int).

Functions and operators are used correctly.

Errors like:

WHERE age = 'twenty' → invalid type comparison

SELECT foo FROM non_existing_table; → invalid reference

## 4. Query Simplifier

It applies logical transformations to simplify the query without changing its result.

Examples:
Remove redundant predicates.

Replace NOT (A AND B) with NOT A OR NOT B (De Morgan's Laws).

Merge nested selections/projections.

This reduces the size and complexity of the query tree.

## 5. Query Restructuring

Performs deeper algebraic transformations to improve logical efficiency.

Examples:
Join reordering

Predicate pushdown (Apply filters as early as possible)

Merge subqueries with main query if safe

Flatten nested queries

Goal:
Create a better logical plan that still returns the same results but can be optimized more efficiently.

## 6. Query Optimization
This is where the DBMS selects the best physical plan to run the query.

Two approaches:

a. Rule-Based Optimization (RBO):
Uses predefined rules (e.g., always use index if present).

b. Cost-Based Optimization (CBO):
Calculates cost of multiple plans using:

Number of disk I/Os

CPU usage

Table size

Index selectivity

Picks the lowest-cost plan

## 7. Cost Estimation in Query Optimization

Cost estimation is done using statistics (e.g., table cardinality, index density).

Examples:
Full table scan cost: n pages

Index scan cost: log(n) (for B-Tree)

Join cost: depends on method (Nested Loop vs Hash Join vs Merge Join)

📌 Cost = Disk I/O + CPU + Network (for distributed DB)

## 8. Structure of Query Evaluation Plans
A Query Execution Plan (QEP) is a tree of physical operators.

Structure:
Leaf nodes: Access methods (e.g., table scan, index scan)

Intermediate nodes: Join, sort, filter

Root: Final projection or aggregation

Example QEP Tree:

mathematica

π_name
|
σ_age > 25
|
Table Scan (users)
🔹 9. Pipelining vs Materialization
These are two ways to execute intermediate results in a query plan.

## Pipelining

Passes the output of one operation directly into the next without storing.

Efficient in memory.

Faster for small datasets.

Example: Scan → Filter → Project → Output (streaming row by row)

# Materialization

Stores intermediate results in temporary storage before the next operation.

Needed when results are reused or sorted/joined multiple times.

Example: Subquery results are stored and reused.

| Phase               | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| Query Analysis      | Parses and validates query syntax and semantics              |
| Query Normalization | Converts SQL to canonical form (relational algebra)          |
| Semantic Analyzer   | Verifies object existence and type compatibility             |
| Query Simplifier    | Simplifies predicates and structure logically                |
| Query Restructuring | Applies algebraic rules to restructure query logic           |
| Query Optimization  | Chooses best execution plan based on cost                    |
| Cost Estimation     | Calculates I/O, CPU, and memory usage for plans              |
| Evaluation Plan     | Tree structure of physical execution steps                   |
| Pipelining          | Streams data between steps (fast, low memory)                |
| Materialization     | Stores intermediate results (slower, used for reuse/sorting) |
