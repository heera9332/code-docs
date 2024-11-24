---
keyword: ["class", "object", "class in cpp", "object in cpp"]
author: "Heera Singh"
date: 24-11-2024
---

# Class & Object

Class is a blueprint of an object, which define the functionality and attributes of an object.

- Class is only the structure of an object.
- Class is a user-defined data type.
- `class` is used to create a class

```cpp
class Student {
  string name;
  int age;
};

int main() {
  // new user-defined data type, so let's create a variable of that type
  Student student;
  cout << student.name << endl;
}
```

## Types of Classes

- Abstract Class
- Normal

### Abstract Class

Any class with one abstract method is called an abstract class. When we take an abstract method in a class then we need to declare a class with 
abstract keyword.
- `abstract` keyword is used to declare a class as abstract class
