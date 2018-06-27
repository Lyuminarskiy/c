[Back to the homepage](../README.md)

# Loops and arrays

Contents:
- [1. `while` loop](#1-while-loop)
- [`for` loop](#for-loop)

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

| Variant | Description                                                                                                                                                                 |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1       | Create two integer-type variables, `a` and `b`. Increase `a` by `3` and decrease `b` by `1` every cycle until `a` lesser than `300` and `b` greater than `5`.               |
| 2       | Create two integer-type variables, `c` and `d`. Decrease `c` by `2` and increase `d` by `10` every cycle until `c` greater than `-500` and `d` lesser than `10000`.         |
| 3       | Create two integer-type variables, `e` and `f`. Increase `e` by `2` times and decrease `f` by `3` times every cycle until `e` lesser than `670` and `f` greater than `-30`. |
| 4       | Create two integer-type variables, `g` and `h`. Decrease `g` by `4` times and increase `h` by `2` times every cycle until `g` greater than `-2` and `h` lesser than `2560`. |
| 5       | Create integer-type variable `i`. Increase `i` by `1` every cycle until the remainder of the division of `i` by `30` is not zero.                                           |
| 6       | Create integer-type variable `j`. Increase `j` by `1` every cycle until the remainder of the division of `j` by `216` is lesser than `121`.                                 |

You can initialize variables either by integer constant in code or by reading data from a standard input.

## `for` loop

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