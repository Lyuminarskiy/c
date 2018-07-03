[Back to the homepage](../README.md)

# Functions

Contents:
- [1. Creating your first function](#1-creating-your-first-function)

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
> This definition says tha `print_number` is a function that takes one `int` argument and returns nothing.

Create a function. Demonstrate at least three examples of using it in the `main()` function. Write the results of a function into the standard output.

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
 * Calculates the divison of two numbers.
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