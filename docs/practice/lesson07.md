[Back to the homepage](../README.md)

# Functions

Contents:
- [1. Creating your first function](#1-creating-your-first-function)
- [2. Searching for a value](#2-searching-for-a-value)
- [3. Search and replacement](#3-search-and-replacement)
- [4. Search and counting](#4-search-and-counting)
- [5. Matrix and diagonal](#5-matrix-and-diagonal)

## 1. Creating your first function

> Functions break large computing tasks into smaller ones, and enable people to build on what others have done instead of starting over from scratch. Appropriate functions hide details of operation from parts of the program that don't need to know about them, thus clarifying the whole, and easing the pain of making changes.
>
> Syntax of function definition:
>
> ```c
> return_type function_name(argument_declarations)
> {
>   declarations and statements
> }
> ```
>
> The `return` statement is the mechanism for returning a value from the caller function to its caller. Any expression can follow `return`:
>
> ```c
> return expression;
> ```
>
> For example:
>
> ```c
> void print_number(int number)
> {
>   printf("%d", number);
>   return;
> }
> ```
>
> This definition says that `print_number` is a function that takes one `int` argument and returns nothing. Now the function can be called like this:
>
> ```c
> print_number(24);
> ```

Create a function.

Variants (click to open):

<details>
<summary>1</summary>
<hr>

```c
/**
 * Calculates the absolute value of a number.
 *
 * @param number A number.
 * @return The absolute value.
 */
double abs(double number);
```

<hr>
</details>

<details>
<summary>2</summary>
<hr>

```c
/**
 * Calculates the result of raising a number to a power.
 *
 * @param base A number.
 * @param exponent An exponent.
 * @return The result of raising a number to a power.
 */
double pow(double base, int exponent);
```

<hr>
</details>

<details>
<summary>3</summary>
<hr>

```c
/**
 * Calculates the multiplication of two numbers.
 *
 * @param left First number.
 * @param right Second number.
 * @return The result of a multiplication.
 */
double mul(double left, double right);
```

<hr>
</details>

<details>
<summary>4</summary>
<hr>

```c
/**
 * Calculates the result of dividing the first number by the second.
 *
 * @param left First number.
 * @param right Second number.
 * @return The result of a division.
 */
double div(double left, double right);
```

<hr>
</details>

<details>
<summary>5</summary>
<hr>

```c
/**
 * Calculates the sum of two numbers.
 *
 * @param left First number.
 * @param right Second number.
 * @return The result of a sum.
 */
double sum(double left, double right);
```

<hr>
</details>

<details>
<summary>6</summary>
<hr>

```c
/**
 * Calculates the result of subtraction of the second number from the first.
 *
 * @param left First number.
 * @param right Second number.
 * @return The result of a subtraction.
 */
double sub(double left, double right);
```

<hr>
</details>

Demonstrate at least three examples of using it in the `main()` function.

## 2. Searching for a value

> Here is an example how to pass an array as an argument of a function:
>
> ```c
> double average(int array[]);
> ```

Create a function:

```c
/**
 * Searches the array for a value that satisfies the condition.
 *
 * @param array An array.
 * @param size The size of an array.
 * @return The search results.
 */
bool contains(int array[], int size);
```

The function should search in the array a number ...

| Variant | Description                                                                                  |
| ------- | -------------------------------------------------------------------------------------------- |
| 1       | ... for which the remainder of the division by `6` equals `5`.                               |
| 2       | ... for which the remainder of the division by `9` equals `4`.                               |
| 3       | ... for which the remainder of the division by `31` is greater than `16` and less than `21`. |
| 4       | ... for which the remainder of the division by `18` is greater than `4` and less than `7`.   |
| 5       | ... is greater than `40` and less than `46`.                                                 |
| 6       | ... is greater than `13` and less than `17`.                                                 |

Function should return `true` if the required number was found and `false` otherwise.

Demonstrate at least three examples of using the `contains()` function in the `main()` function.

## 3. Search and replacement

Create a function:

```c
/**
 * Searches for values (that satisfy the condition) in the array, and replaces them.
 *
 * @param array An array.
 * @param size The size of an array.
 */
void filter(int array[], int size);
```

The function should replace all of the ...

| Variant | Description                             |
| ------- | --------------------------------------- |
| 1       | ... positive values by their square.    |
| 2       | ... negative values by their cube.      |
| 3       | ... positive values by their negation.  |
| 4       | ... negative values by their negation.  |
| 5       | ... even values in the array with zero. |
| 6       | ... odd values in the array with zero.  |

Demonstrate at least three examples of using the `filter()` function in the `main()` function.

## 4. Search and counting

> If a two-dimensional array is to be passed to a function, the parameter declaration in the function must include the number of columns (the number of rows is irrelevant):
>
> ```c
> double average(int array[][3]);
> ```

Create a function:

```c
/**
 * Searches for values (that satisfy the condition) in a two-dimensional 5-columns array, and counts them.
 *
 * @param array A two-dimensional 5-columns array.
 * @param rows_number The number of rows in the array.
 * @return The counting results.
 */
int count(int array[][5], int rows_number);
```

The function should find the count of the values in the a two-dimensional 5-columns array for the values ...

| Variant | Description                                                                                  |
| ------- | -------------------------------------------------------------------------------------------- |
| 1       | ... that are greater than `40` and less than `46`.                                           |
| 2       | ... that are greater than `13` and less than `17`.                                           |
| 3       | ... for which the remainder of the division by `14` is greater than `2` and less than `5`.   |
| 4       | ... for which the remainder of the division by `22` is greater than `12` and less than `17`. |
| 5       | ... that are even.                                                                           |
| 6       | ... that are odd.                                                                            |

Demonstrate at least three examples of using the `count()` function in the `main()` function.

## 5. Matrix and diagonal

Create a function:

```c
/**
 * Calculates the average value of the values (that satisfy the condition) in a two-dimensional 5-columns array.
 *
 * @param array A two-dimensional 5-columns array.
 * @param rows_number The number of rows in the array.
 * @return The average value.
 */
double average(int array[][5], int rows_number);
```

The function should find the average value in a two-dimensional 5-columns array for the values ...

| Variant | Description                           |
| ------- | ------------------------------------- |
| 1       | ... that are above the antidiagonal.  |
| 2       | ... that are below the antidiagonal.  |
| 3       | ... that are on the main diagonal.    |
| 4       | ... that are on the antidiagonal.     |
| 5       | ... that are above the main diagonal. |
| 6       | ... that are below the main diagonal. |

Demonstrate at least three examples of using the `average()` function in the `main()` function.