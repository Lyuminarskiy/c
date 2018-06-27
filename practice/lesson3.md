[Back to the homepage](../README.md)

# Loops and arrays

Contents:
- [1. `while` loop](#1-while-loop)

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

| Variant | Description                                                            |
| ------- | ---------------------------------------------------------------------- |
| 1       | Create two integer-type variables, `a` and `b`. Increase `a` by `3` and decrease `b` by `1` every cycle until `a` lesser than `300` and `b` greater than `5`.
| 2       | Create two integer-type variables, `c` and `d`. Decrease `a` by `2` and increase `b` by `10` every cycle until `a` greater than `-500` and `b` lesser than `10000`.
| 3       | Create two integer-type variables, `a` and `b`. Increase `a` by `2` times and decrease `b` by `3` times every cycle until `a` lesser than `670` and `b` greater than `-30`.
| 4       | Create two integer-type variables, `c` and `d`. Decrease `a` by `4` times and increase `b` by `2` times every cycle until `a` greater than `-2` and `b` lesser than `2560`.
| 5       | Create integer-type variable `a`. Increase `a` by `1` every cycle until the remainder of the division of `a` by `30` is not zero.
| 6       |

You can initialize variables either by integer constant in code or by reading data from a standard input.