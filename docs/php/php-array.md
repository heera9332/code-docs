# Array

An array is a data structure that stores a collection of elements. Arrays allow you to store multiple values in a single variable and access them using an index or key.

In PHP, there are three main types of arrays:

1. Indexed (Simple) Array
2. Associative Array
3. Multidimensional Array

## Simple Array

An indexed array stores values with a numeric index, starting from 0 by default.

```php
$fruits = ["Apple", "Banana", "Mango", "Orange"];

```

## Associative Array

An associative array uses named keys to store values instead of numeric indexes.

```php
$person = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];


```

## Multi-dimensional Array

A multidimensional array is an array that contains one or more arrays.

```php
$students = [
    ["John", 25, "New York"],
    ["Sara", 22, "Los Angeles"],
    ["David", 28, "Chicago"]
];
```

## Summary

