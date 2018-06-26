[Back to the homepage](../README.md)

# Basic data types, operators, and `if-else` statement

Contents:
- [1. Getting started](#1-getting-started)
- [2. Basic data types and declarations](#2-basic-data-types-and-declarations)
- [3. `if-else` statement](#3-if-else-statement)
- [4. `if-else` statements chain](#4-if-else-statements-chain)
- [5. Operators](#5-operators)

## 1. Getting started

Write a program to display your name and age. To deal with it one should use a `printf()` function.

Sample output:

```
Nick Smith, 19
```

## 2. Basic data types and declarations

> A declaration announces the properties of variables; it consists of a type name and a list of variables:
>
> ```c
> int number1, number2;
> ```
>
> Assignment statement sets variables to their initial values:
>
> ```c
> number1 = 42;
> number2 = 214;
> ```
>
> C Language provides several basic data types:
> | Data Type | Description                               |
> | --------- | ----------------------------------------- |
> | `char`    | A single character.                       |
> | `int`     | An integer number.                        |
> | `short`   | An short integer number.                  |
> | `long`    | An long integer number.                   |
> | `float`   | A single-precision floating point number. |
> | `double`  | A double-precision floating point number. |

Write a program to declarate a couple of variables (`a`, `b`, `c`):

| Variant | `a`   | `b`  | `c`     |
| ------- | ----- | ---- | ------- |
| First   | 457   | 6.03 | 'c'     |
| Second  | 373   | 'x'  | 167.314 |
| Third   | 60.2  | 'e'  | 442     |
| Fourth  | 122.1 | 560  | 'w'     |
| Fifth   | 'f'   | 1132 | 39.6    |
| Sixth   | 'y'   | 77.9 | 2502    |

Choose according basic data type for each variable and display their values.

Sample output:

```
a = 1
b = 3.14
c = 'h'
```

## 3. `if-else` statement

> Syntax:
>
> ```c
> if (expression)
>   statement1
> else
>   statement2
> ```

Write a program using `if-else` statement:

| Variant | Description
| - | -
| First | Create an integer and check whether it is even or odd.
| Second | Create an integer and check whether it is positive or non-positive.
| Third | Create an integer and check whether it is negative or non-negative.
| Fourth | Create two integers and check whether they are equal or not.
| Fifth | Create two integers and check if the first is bigger than the second.
| Sixth | Create two integers and check if the first is smaller than the second.

Display the results.

## 4. `if-else` statements chain

> Syntax:
>
> ```c
> if (expression1)
>   statement1
> else if (expression2)
>   statement2
> else if (expression3)
>   statement3
> else
>   statement4
> ```

Write a program using `if-else` statements chain:

| Variant | Description                                                  |
| ------- | ------------------------------------------------------------ |
| First   | Create three different integers and find the biggest value.  |
| Second  | Create three different integers and find the smallest value. |
| Third   | Create three different integers and find the biggest value.  |
| Fourth  | Create three different integers and find the smallest value. |
| Fifth   | Create three different integers and find the biggest value.  |
| Sixth   | Create three different integers and find the smallest value. |

Display the results.

## 5. Operators

Write a program to calculate an expression:

| Variant | Description                                                                                                          |
| ------- | -------------------------------------------------------------------------------------------------------------------- |
| First   | Create three floating point numbers and calculate their average value.                                               |
| Second  | Create three floating point numbers and check whether their sum is greater than their multiplication.                |
| Third   | Create three floating point numbers and check if the first two numbers' sum is greater than the third number.        |
| Fourth  | Create three floating point numbers and check if the first two numbers' multiplication is equal to the third number. |
| Fifth   | Create three floating point numbers and check whether all of them are positive or non-positive.                      |
| Sixth   | Create three floating point numbers and check whether all of them are negative or non-negative.                      |

Display the results.