[Back to the homepage](../README.md)

# Basic data types, operators, and `if-else` statement

Contents:
[[toc]]

## 1. Getting started

> To write data to a standard output one should use a `printf()` function. Here is an example of writing integer number to a standard output:
>
> ```c
> int number = 42;
>
> printf ("value = %d", number);
> ```

Display your name and age.

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
> The C Language provides several basic data types:
>
> | Data Type | Description                               |
> | --------- | ----------------------------------------- |
> | `char`    | A single character.                       |
> | `int`     | An integer number.                        |
> | `short`   | An short integer number.                  |
> | `long`    | An long integer number.                   |
> | `float`   | A single-precision floating point number. |
> | `double`  | A double-precision floating point number. |

Declare three of variables (`a`, `b`, `c`) choosing an according basic data type for each variable and initializing them with values shown below:

| Variant | `a`   | `b`  | `c`     |
| ------- | ----- | ---- | ------- |
| 1       | 457   | 6.03 | 'c'     |
| 2       | 373   | 'x'  | 167.314 |
| 3       | 60.2  | 'e'  | 442     |
| 4       | 122.1 | 560  | 'w'     |
| 5       | 'f'   | 1132 | 39.6    |
| 6       | 'y'   | 77.9 | 2502    |

Display variables' values.

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

Solve the task using `if-else` statement:

| Variant | Description                                                            |
| ------- | ---------------------------------------------------------------------- |
| 1       | Create an integer and check whether it is even or odd.                 |
| 2       | Create an integer and check whether it is positive or non-positive.    |
| 3       | Create an integer and check whether it is negative or non-negative.    |
| 4       | Create two integers and check whether they are equal or not.           |
| 5       | Create two integers and check if the first is bigger than the second.  |
| 6       | Create two integers and check if the first is smaller than the second. |

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

Solve the task using `if-else` statements chain:

| Variant | Description                                                  |
| ------- | ------------------------------------------------------------ |
| 1       | Create three different integers and find the biggest value.  |
| 2       | Create three different integers and find the smallest value. |
| 3       | Create three different integers and find the biggest value.  |
| 4       | Create three different integers and find the smallest value. |
| 5       | Create three different integers and find the biggest value.  |
| 6       | Create three different integers and find the smallest value. |

Display the results.

## 5. Operators

Calculate an expression:

| Variant | Description                                                                                                          |
| ------- | -------------------------------------------------------------------------------------------------------------------- |
| 1       | Create three floating point numbers and calculate their average value.                                               |
| 2       | Create three floating point numbers and check whether their sum is greater than their multiplication.                |
| 3       | Create three floating point numbers and check if the first two numbers' sum is greater than the third number.        |
| 4       | Create three floating point numbers and check if the first two numbers' multiplication is equal to the third number. |
| 5       | Create three floating point numbers and check whether all of them are positive or non-positive.                      |
| 6       | Create three floating point numbers and check whether all of them are negative or non-negative.                      |

Display the results.