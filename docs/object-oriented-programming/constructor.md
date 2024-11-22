---
date: 22-11-2024
author: Heera Singh
keywords: ["constructor in c++", "oops in c++"]
---


# Constructor

A constructor is a special type of member function that is called when an object of a class is created. Constructors are used to initialize the member variables of an object and to perform any other tasks that are required to set up the object for use.

Constructor is a special kind of member method which is never return a value. Used to initialize of an object.

- Constructor name is the class name.
- It is self-executed when an object is created or initialize.
- Constructor should be public.



**There are three types of Constructor**

- Default constructor.
- Parameterized constructor.
- Copy parameterized constructor.

## Default Constructor

A constructor which does have any parameters (no parameters), called default constructor

:::tip[Note]
Constructor with no parameter
:::

**Example**

```cpp
#include <stdio.h>
#include <iostream>
using namespace std;

class Student
{
private:
  string name = "";
  int age = 0;

public:
  Student()
  {
    cout << "default constructor called" << endl;
  }

  string getName()
  {
    return this->name;
  }

  int getAge()
  {
    return this->age;
  }

  void displayInfo()
  {
    cout << "name is > " << this->name << endl;
    cout << "age is > " << this->age << endl;
  }
};

main()
{
  // s1 is an object
  Student s1;
  s1.displayInfo();
  return 0;
}  
```


## Parameterized Constructor

A Constructor which has atleast one parameter, called parameterized Constructor

**Example**

```js
#include <stdio.h>
#include <iostream>
using namespace std;

class Student
{
private:
  string name = "";
  int age = 0;

public:
  Student()
  {
    cout << "default constructor called" << endl;
  }

  Student(string name, int age)
  {
    this->name = name;
    this->age = age;
  }

  string getName()
  {
    return this->name;
  }

  int getAge()
  {
    return this->age;
  }

  void displayInfo()
  {
    cout << "name is > " << this->name << endl;
    cout << "age is > " << this->age << endl;
  }
};

main()
{
  // s1 is an object
  Student s1;
  s1.displayInfo();
  return 0;
}
```


## Copy Parameterized Constructor

