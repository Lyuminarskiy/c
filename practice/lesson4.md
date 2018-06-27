[Back to the homepage](../README.md)

# Loops and arrays: part two

Contents:
- [1. `continue` statement](#1-continue-statement)

## 1. `continue` statement

> The `continue` statement is related to `break` statement, but less often used. It causes the next iteration of the enclosing  `for`, `while` or `do-while` loop to begin.
>
> In the `while` and `do-while`, this means that the test part is executed immediately. In the `for`, control passes to the increment step. The `continue` statement applies only to loops, not to `switch`. A `continue` inside a `switch` inside a loop causes the next loop iteration.

Declare an array of `10` integer-typed values. Initialize it either by integer constants in code or by reading data from a standard input. Using the `for` loop, find the number of values in the array ...

| Variant | Description                                                                                  |
| ------- | -------------------------------------------------------------------------------------------- |
| 1       | ... that are greater than `40` and less than `46`.                                           |
| 2       | ... that are greater than `13` and less than `17`.                                           |
| 3       | ... for which the remainder of the division by `6` equals `5`.                               |
| 4       | ... for which the remainder of the division by `9` equals `4`.                               |
| 5       | ... for which the remainder of the division by `31` is greater than `16` and less than `21`. |
| 6       | ... for which the remainder of the division by `18` is greater than `4` and less than `7`.   |

If a number satisfying the conditions was found, display it immediately. At the end, display the number of values found.

Use the `continue` statement to cause the next iteration of `for` loop once a number satisfying the conditions was found.

Sample output:

```
Please, input the array: 4 -3 5 8 -1 4 2 0 5 6
A number of values found: 2
```