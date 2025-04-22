---
keywords: [hello world in c, c language docs, c docs, c example]
date: 22-04-2025
author: Heera Singh
slug: hello-world
---
# Hello, World!

A minimal C program that prints **Hello, World!** to the console. This example demonstrates:

- Including standard headers
- Defining the `main` function
- Using `printf` to display text
- Returning an exit status

```c
#include <stdio.h>

// Entry point of the program
int main(int argc, char *argv[]) {
  // Print greeting message to stdout
  printf("Hello, World!\n");
  // Return 0 to indicate successful execution
  return 0;
}
```

## How it Works

`#include <stdio.h>`

Includes the Standard Input/Output library, which provides functions like `printf`.

`int main(int argc, char *argv[])`

This is the entry point of the C program.

- `argc`: Number of command-line arguments passed to the program
- `argv`: Array of strings representing those arguments

`printf("Hello, World!\n");`

Prints the message **Hello, World!** followed by a newline character (`\n`).

`return 0;`

Indicates that the program has terminated successfully.

---

## Compilation & Execution

Use the following commands in your terminal:

```bash
# Compile the program
gcc -o hello hello.c

# Run the executable
./hello
```
