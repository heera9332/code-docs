# Normalization

Normalization is the process of organizing the data in a database to reduce redundancy and improve data integrity. The main goal is to ensure that the data is stored logically, is consistent, and adheres to the ACID properties (Atomicity, Consistency, Isolation, Durability).

Normalization typically involves dividing large tables into smaller ones and defining relationships between them. It follows a series of normal forms (NF) — each with its own rules.

## 1NF (First Normal Form)

A relation (table) is in 1NF if:

- All columns contain atomic (indivisible) values.
- Each column contains values of a single type (no repeating groups or arrays).
- Each record is uniquely identifiable (usually with a primary key).

Bad (Not in 1NF):

Student | Courses
--------|----------------
John    | Math, Physics

Good (1NF Applied):

Student | Course
--------|---------
John    | Math
John    | Physics

## 2NF (Second Normal Form)

A relation is in 2NF if:

- It is already in 1NF, and
- All non-key attributes are fully functionally dependent on the entire primary key (i.e., no partial dependency).
- Applies only when the primary key is composite (i.e., made up of more than one column).


Not in 2NF:

(StudentID, CourseID) → InstructorName


Split the table:

- One table for (StudentID, CourseID)
- Another for (CourseID → InstructorName)

## 3NF (Third Normal Form)

A relation is in 3NF if:

- It is in 2NF, and
- There are no transitive dependencies, i.e., non-key → non-key dependencies.


Not in 3NF:

StudentID | DeptID | DeptName


Here, DeptName depends on DeptID, which depends on StudentID.

✅ Fix:

Split into:

Students(StudentID, DeptID)
Departments(DeptID, DeptName)

BCNF is a stricter version of 3NF. A relation is in BCNF if:

- For every functional dependency X → Y, X is a super key.

> Even in 3NF, sometimes anomalies still exist if candidate keys are not handled properly — BCNF fixes that.

Violation of BCNF:

Professor | Subject | Department

- A professor teaches only one department.
- Each subject is taught by one professor.

So we have:

Subject → Professor
Professor → Department

But neither Subject nor Professor is a full super key.

✅ Fix:

Split into:
- Subjects(Subject, Professor)
- Professors(Professor, Department)