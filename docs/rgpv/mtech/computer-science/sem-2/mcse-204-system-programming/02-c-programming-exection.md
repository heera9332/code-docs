# C Programming Execution Steps

## Steps from C/C++ Programming to Machine Code

Let’s break it down for both C and C++ (the steps are nearly the same).

### 1. Writing the Source Code

You write code in a file:
e.g., main.c (C) or main.cpp (C++)

### 2. Preprocessing

The preprocessor handles all lines starting with #, like #include, #define, #ifdef, etc.

Output is a pure C/C++ file with all macros expanded, header files included.

Example:

```sh
gcc -E main.c -o main.i
```

### 3. Compilation

The compiler translates the preprocessed code (main.i) into assembly language for your system (e.g., main.s).

The output is human-readable assembly code.

Example:
`gcc -S main.i -o main.s`

### 4. Assembling

The assembler converts the assembly code (main.s) into object code (main.o or main.obj), which is machine-specific but not yet executable.

Example:
`gcc -c main.s -o main.o`

### 5. Linking

The linker combines your object code (main.o) with other object files and libraries (e.g., standard C library) into a single executable (a.out or main.exe).

Example:
`gcc main.o -o main`

### 6. Loading

The loader (part of the operating system) loads the executable from disk into memory and starts the program.

### 7. Execution

The CPU executes the machine code instructions in your executable.

## Summary Diagram

```md
Source Code (main.c / main.cpp)
      │
      ▼
[Preprocessor]   →   main.i
      │
      ▼
[Compiler]       →   main.s (assembly)
      │
      ▼
[Assembler]      →   main.o (object/machine code)
      │
      ▼
[Linker]         →   main.exe or a.out (executable)
      │
      ▼
[Loader (OS)]
      │
      ▼
[Execution on CPU]

```

## Short Table

| Step          | Input         | Output       | Tool         |
| ------------- | ------------- | ------------ | ------------ |
| Preprocessing | main.c        | main.i       | Preprocessor |
| Compilation   | main.i        | main.s       | Compiler     |
| Assembling    | main.s        | main.o       | Assembler    |
| Linking       | main.o + libs | main.exe     | Linker       |
| Loading       | main.exe      | Running code | OS Loader    |
