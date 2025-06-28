---
date: 24-11-2024
author: Heera Singh
keywords: ["constructor in c++", "oops in c++"]
---

# Inheritance

Inheritance is way of using object property to another object. or way extending the functionality of object.

- A new class take the features of existing class, and extend the functionality.
- In the inheritance we have parent class and child class concept, parent class mean's existing. child class new that inherit the features of parent class.
- We are having the parent-child hierarchy in all the inheritance.

## Types of Inheritance

There are five types of inheritance

1. Single inheritance
2. Multi-level inheritance
3. Multiple inheritance
4. Hierarchical inheritance
5. Hybrid inheritance

## Single Inheritance

It is a type of inheritance, when we have two class, child class inherites the features of parent class.

```cpp

/*
parent
  ^
  |
  |
  |
  |

child
*/
```

**Example**

```cpp

class Parent {
  public:
  string parentName = "John";

  string getParentName(){
    return this->parentName;
  }
};

class Child : public Parent {
  public:
  string childName = "Son";

  string getChildName() {
    return this->childName;
  }
};

int main() {

  return 0;
}

```
