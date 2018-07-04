[Back to the homepage](../README.md)

# Standard library: `<stdio.h>`

Contents:
- [1. The `printf()` function](#1-the-printf-function)

## 1. The `printf()` function

> The output function `printf()` translates internal values to characters:
>
> ```c
> int printf(char *format, arg1, arg2, ...);
> ```
>
> The function converts, formats, and print its arguments (`arg1`, `arg2`, ...) on the standard output under control of the `format`. It returns the number of characters printed.
>
> The format string contains two types of objects: ordinary characters, which are copied to the output stream, and **conversion specifications**, each of which causes conversion and printing of the next successive argument to `printf()`. Each conversion specification begins with a `%` and ends with a conversion character. Between the `%` and the conversion character there may be, in order:
>
> 1. A minus sign, which specifies left adjustment of the converted argument.
> 2. A number that specifies the minimum field width. The converted argument will be printed in a field at least this wide. If necessary it will be padded on the left (or right, if left adjustment is called for) to make up the field width.
> 3. A period, which separates the field width from the precision.
> 4. A number, the precision, that specifies the maximum number of characters to be printed from a string, or the number of digits after the decimal point of a floating-point value, or the minimum number of digits for an integer.
> 5. An `h` if the integer is to be printed as a `short`, or `l` if as a `long`.
>
> Conversion characters are shown in table below. If the character after the `%` is not a conversion specification, the behavior is undefined.
>
> | Character | Argument type            | Printed as                                                                                                                                                                   |
> | --------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `d`, `i`  | `int`                    | Decimal number.                                                                                                                                                              |
> | `o`       | `int`                    | Unsigned octal number (without a leading zero).                                                                                                                              |
> | `x`, `X`  | `int`                    | Unsigned hexadecimal number (without a leading `0x` ot `0X`), using `abcdef` or `ABCDEF` for `10`, ..., `15`.                                                                |
> | `u`       | `int`                    | Unsigned decimal number.                                                                                                                                                     |
> | `c`       | `int`                    | Single character.                                                                                                                                                            |
> | `s`       | `char*`, `char[]`        | Print characters from the string until a `\0` or the number of characters given by the precision.                                                                            |
> | `f`       | `double`                 | `[-]m.dddddd`, where the number of `d`'s is given by the precision (default is `6`).                                                                                         |
> | `e`, `E`  | `double`                 | `[-]m.dddddde±xx` or `[-]m.ddddddE±xx`, where the number of `d`'s is given by the precision (default is `6`).                                                                |
> | `g`, `G`  | `double`                 | Use `%e` of `%E` if the exponent is less than `-4` or greater than or equal to the precision; otherwise use `%f`. Trailing zeros and trailing decimal point are not printed. |
> | `p`       | `void*`                  | Pointer (implementation-dependent representation).                                                                                                                           |
> | `%`       | No argument is converted | Print a `%`.                                                                                                                                                                 |
>
> A width or precision may be specified as `*`, in which case the value is computed by converting the next argument (which must be an `int`). For example, printing at most `max` characters from a string `s`:
>
> ```c
> printf("%.*s", max, s);
> ```
>
> Most of the format conversions have been illustrated in earlier chapters. One exception is precision as it relates to strings. The following table shows the effect of a variety of specifications in printing `"hello, world"` message:
>
> ```
> | Specification | Printed as        |
> | ------------- | ----------------- |
> | :%s:          | :hello, world:    |
> | :%10s:        | :hello, world:    |
> | :%.10s:       | :hello, wor:      |
> | :%.-10s:      | :hello, world:    |
> | :%.15s:       | :hello, world:    |
> | :%-15s:       | :hello, world   : |
> | :%15.10s:     | :     hello, wor: |
> | :%-15.10s:    | :hello, wor     : |
> ```
>
> **A warning**: `printf()` uses its first argument to decide how many arguments follow and what their types are. It will get confused, and you will get wrong answers, if there are not enough arguments or if they are wrong type.

Using the `printf()` function and conversion specifications, display the following values.

Variants (click to open):

<details>
<summary>1</summary>
<hr>

Values:

```c
"abcdefghijklmnopqrstuvxyz"
5.2818783475
234987123649187236
3765
3765
3765
"%"
```

Display as:

```
|abcdefghijk   |
|    5.281|
|2.34e+17|
|  3765|
|   7265|
|EB5:
|%|
```

<hr>
</details>

<details>
<summary>2</summary>
<hr>

Values:

```c
"abcdefghijklmnopqrstuvxyz"
6.3298716238
988711224321235
2346
2346
2346
"%"
```

Display as:

```
|   abcdefg|
| 6.3298|
|  9.8E+14|
|2346    |
| 4452|
|92A   |
|%|
```

<hr>
</details>

<details>
<summary>3</summary>
<hr>

Values:

```c
"abcdefghijklmnopqrstuvxyz"
123.30409812
23499128370123
7783
7783
7783
"%"
```

Display as:

```
|abcdef|
|123.3     |
|    2.3499e+13|
|  7783|
|17147  |
|    1e67|
|%|
```

<hr>
</details>

<details>
<summary>4</summary>
<hr>

Values:

```c
"abcdefghijklmnopqrstuvxyz"
998.2
9786987634
2347
2347
2347
"%"
```

Display as:

```
|abcdefghijklmnopqrstuvxyz   |
| 998.2000|
|    9e+9|
|2347   |
|  4453|
|  92b|
|%|
```

<hr>
</details>

<details>
<summary>5</summary>
<hr>

Values:

```c
"abcdefghijklmnopqrstuvxyz"
3874.1
0,000000000000012598763
4234
4234
4234
"%"
```

Display as:

```
|   abcdefghijklmnopqrstuvxyz|
|  3874|
|1E-14   |
| 4234|
|10212   |
|   108A|
|%|
```

<hr>
</details>

<details>
<summary>6</summary>
<hr>

Values:

```c
"abcdefghijklmnopqrstuvxyz"
24987,23
0,00000000023487
3423435
3423435
3423435
"%"
```

Display as:

```
|   abcdefghijkl|
|24987,23000  |
|  2,3E-10|
|   3423435|
|15036313   |
| 343ccb|
|%|
```

<hr>
</details>