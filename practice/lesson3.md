[Back to the homepage](../README.md)

# Loops and array

Contents:
- [1. `while` loop](#1-while-loop)
- [2. `for` loop](#2-for-loop)
- [3. `do-while` loop](#3-do-while-loop)
- [4. Array](#4-array)

## 1. `while` loop

> Syntax:
>
> ```c
> while (expression)
> {
>   statement;
> }
> ```
>
> Firstly, the `expression` is evaluated. If it is `true` (non-zero), `statement` is executed and > `expression` is re-evaluated. This cycle contiinues until `expression` becomes `false` (zero), > at which point execution resumes after `statement`.

Solve the task using `while` loop:

| Variant | Description                                                                                                                                                                      |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1       | Create two integer-type variables, `a` and `b`. Increase `a` by `3` and decrease `b` by `1` every cycle as long as `a` lesser than `300` and `b` greater than `5`.               |
| 2       | Create two integer-type variables, `c` and `d`. Decrease `c` by `2` and increase `d` by `10` every cycle as long as `c` greater than `-500` and `d` lesser than `10000`.         |
| 3       | Create two integer-type variables, `e` and `f`. Increase `e` by `2` times and decrease `f` by `3` times every cycle as long as `e` lesser than `670` and `f` greater than `-30`. |
| 4       | Create two integer-type variables, `g` and `h`. Decrease `g` by `4` times and increase `h` by `2` times every cycle as long as `g` greater than `-2` and `h` lesser than `2560`. |
| 5       | Create integer-type variable `i`. Increase `i` by `1` every cycle as long as the remainder of the division of `i` by `30` is not zero.                                           |
| 6       | Create integer-type variable `j`. Increase `j` by `1` every cycle as long as the remainder of the division of `j` by `216` is lesser than `121`.                                 |

You can initialize variables either by integer constant in code or by reading data from a standard input.

## 2. `for` loop

> Syntax:
>
> ```c
> for (expression1; expression2; expression3)
> {
>   statement;
> }
> ```
>
> This `for` loop is equivalent to `while` loop shown below:
>
> ```c
> expression1;
> while (expression2)
> {
>   statement;
>   expression3;
> }
> ```
>
> So, the `for` loop is a generalization of the `while` loop.
>
> The first part of the loop, `expression1`, is the initialization. The second part, `expression2`, is the test or condition tha controls the loop (the same as for `while` loop). This condition is evaluated. If it is `true` (non-zero), the body  of the loop is executed. Then the increment step, `expression3`, is executed, and the condition re-evaluated. The loop terminates id the condition has become `false` (zero).

Solve the task using `for` loop:

| Variant | Description                                                                                                                             |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1       | Print all even integer numbers from `1` to `1000`.                                                                                      |
| 2       | Print all odd integer numbers from `300` to `500`.                                                                                      |
| 3       | Print all integer numbers from `-100` to `100`, for which the remainder of the division by `5` equals `3`.                              |
| 4       | Print all integer numbers from `-500` to `-200`, for which the remainder of the division by `8` equals `5`.                             |
| 5       | Print all integer numbers from `100` to `300`, for which the remainder of the division by `13` is greater than `3` and lesser than `8`. |
| 6       | Print all integer numbers from `50` to `100`, for which the remainder of the division by `9` is greater than `2` and lesser than `7`.   |

## 3. `do-while` loop

> The `while` and `for` loops test the termination condition at the top. By contrast, `do-while` loop, tests at the bottom after making each pass through the loop body. **The body is executed at least once.**
>
> Syntax:
>
> ```c
> do
> {
>   statement;
> }
> while (expression);
> ```
>
> The `statement` is executed, then `expression` is evaluated. If it's `true` (non-zero), `statement` is evaluated again, and so on. When the expression becomes false, the loop terminates.

Solve the task using `do-while` loop. Ask user to repeatedly input integer numbers. Terminate the loop ...

| Variant | Description                                                                     |
| ------- | ------------------------------------------------------------------------------- |
| 1       | ... when the sum of all entered numbers becomes greater than `100`.             |
| 2       | ... when the multiplication of all entered numbers becomes greater than `4000`. |
| 3       | ... if the next entered number is even.                                         |
| 4       | ... if the next entered number is odd.                                          |
| 5       | ... if the next entered number is greater than `100`.                           |
| 6       | ... when the count of all entered numbers becomes greater than `5`.             |

## 4. Array

> To declare an array one should use a square brackets. Number in the square brackets means the size of the array:
>
> ```c
> int numbers[10]; // Non-initialized array of 10 integer-typed values.
> char symbols[3]; // Non-initialized array of 3 char-typed values.
> ```
>
> Arrays can be created and initialized in one line using a braces:
>
> ```c
> double values[3] = { 1.21, 1.44, 1.69 }; // Initialized array of 3 double-typed values.
> ```
>
> This statement can be rewritten without mentioning the size of the array. In this case, the size is adjusted according to the number of elements initialized within the array:
>
> ```c
> double values[] = { 1.21, 1.44, 1.69 }; // Initialized array of 3 double-typed values.
> ```
>
> Note that the number in square brackets must be no less than the number of initial values. If it is larger, then uninitialized elements remain in the array.

Declare an array of `10` integer-typed values. Initialize it using the `for` loop. The array must contains ...

| Variant | Description |
| ------- | ----------- |
| 1 | ... even numbers starting from `2` onwards (2, 4, 6, ...).
| 2 | ... odd numbers starting from `1` onwards (1, 3, 5, ...).
| 3 | ... numbers for which the remainder of the division by `7` equals `4`, starting from `4` onwards (4, 11, 18, ...).
| 4 | ... numbers for which the remainder of the division by `13` equals `7`, starting from `7` onwards (7, 20, 33, ...).
| 5 | ... numbers for which the remainder of the division by `7` equals `4`, starting from `4` onwards (4, 11, 18, ...).
| 6 | ... numbers for which the remainder of the division by `7` equals `4`, starting from `4` onwards (4, 11, 18, ...).

Print the array to the standard output using the `for` loop.