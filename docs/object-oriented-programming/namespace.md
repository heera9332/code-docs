# Namespace

Namespace is a grouping machenism of c++ classes, function and interfaces.

- Same type of classes we grouped together group name is a namespace
- `namespace` keyword is used to create a new cpp namespace

:::tip[Note]
namespace is not the feature of OOPs, it is the feature of C++
:::

**Example**

```cpp
#include <stdio.h>
#include <iostream>
using namespace std;

// math is namespace
namespace math
{
  int add_10(int a)
  {
    return 10 + a;
  }

  int add(int a, int b)
  {
    return a + b;
  }

  int sub(int a, int b)
  {
    return a - b;
  }
}

using namespace math;

int main()
{
  cout << add_10(4) << endl;
  return 0;
}

```

**`using` keyword**

- when we use keyword `using` and spacify namespace, mean's we using the spcified name items or things.

## std namespace

std namespace is a `standard` namespace that contains c++ standard functions, classes and objects

## Key Features of the std Namespace:

`Containers`:

std::vector, std::list, std::deque, std::set, std::map, std::unordered_map, etc.
Algorithms:

Functions like std::sort, std::find, std::accumulate, std::transform, etc.
Iterators:

std::iterator, std::begin, std::end, etc.
Input/Output (I/O):

std::cin, std::cout, std::cerr, std::ifstream, std::ofstream, etc.
Strings:

std::string, std::wstring, and associated methods.
Utilities:

std::pair, std::tuple, std::function, std::bind, etc.
Memory Management:

Smart pointers like std::unique_ptr, std::shared_ptr, and std::weak_ptr.
Threads and Concurrency:

Classes and functions like std::thread, std::mutex, std::async, std::condition_variable, etc.

## Scope Resolution Operator 

When we using more then one namespaces, make every name has unique functions if not, then using scope resolution operator to resolve scop of function

let's understand with help of an example

```cpp
#include <stdio.h>
#include <iostream>
using namespace std;

// math is namespace
namespace math
{
  int add_10(int a)
  {
    return 10 + a;
  }

  int add(int a, int b)
  {
    return a + b;
  }

  int sub(int a, int b)
  {
    return a - b;
  }
}

namespace calc
{
  int add(int a, int b)
  {
    return a + b;
  }
}

using namespace math;
using namespace calc;

int main()
{


  // if we are using
  // cout << add(4,5) << endl; error, add present in calc and math namespace.

  // so we need to use scope resolution operator

  cout << math::add(4, 4) << endl;
  return 0;
}
```
