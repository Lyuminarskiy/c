[Back to the homepage](../README.md)

# Standard library: `<stdio.h>`

Contents:
- [1. The `printf()` function](#1-the-printf-function)
- [2. Tabular view](#2-tabular-view)
- [3. The `scanf()` function](#3-the-scanf-function)
- [4. File access](#4-file-access)
- [5. Reading data from a file](#5-reading-data-from-a-file)

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
> | `g`, `G`  | `double`                 | Use `"%e"` of `"%E"` if the exponent is less than `-4` or greater than or equal to the precision; otherwise use `"%f"`. Trailing zeros and trailing decimal point are not printed. |
> | `p`       | `void*`                  | Pointer (implementation-dependent representation).                                                                                                                           |
> | `%`       | No argument is converted | Print a `'%'`.                                                                                                                                                                 |
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
|EB5   |
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
|92A    |
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

## 2. Tabular view

The data below is a vital statistic for Russia for recent years:

| Year | Total population | Live births | Deaths    | Natural change |
| ---- | ---------------- | ----------- | --------- | -------------- |
| 2010 | 142'849'472      | 1'788'948   | 2'028'516 | -239'568       |
| 2011 | 142'960'908      | 1'796'629   | 1'925'720 | -129'091       |
| 2012 | 143'201'700      | 1'902'084   | 1'906'335 | -4'251         |
| 2013 | 143'506'995      | 1'895'822   | 1'871'809 | 24'013         |
| 2014 | 146'090'613      | 1'942'683   | 1'912'347 | 30'346         |
| 2015 | 146'405'999      | 1'940'579   | 1'908'541 | 32'038         |
| 2016 | 146'674'541      | 1'888'729   | 1'891'015 | -2'286         |
| 2017 | 146'842'402      | 1'690'307   | 1'826'125 | -135'818       |

Save the headers and the data in a two-dimensional arrays:

```c
char headers[5][20]; // Five 20-characters strings.
double data[8][5]; // Matrix of size 8 rows and 5 columns.
```

Using the `printf()` function, display the data as a table as shown below. The easiest way to display the data is row by row, since each column requires various specifications.

Variants (click to open):

<details>
<summary>1</summary>
<hr>

The output:

```
|     Year |     Total population |     Live births |     Deaths |     Natural change |
| -------- | -------------------- | --------------- | ---------- | ------------------ |
| 2010     | 142849472            | 1788948         | 2028516    | -239568            |
| 2011     | 142960908            | 1796629         | 1925720    | -129091            |
| 2012     | 143201700            | 1902084         | 1906335    | -4251              |
| 2013     | 143506995            | 1895822         | 1871809    | 24013              |
| 2014     | 146090613            | 1942683         | 1912347    | 30346              |
| 2015     | 146405999            | 1940579         | 1908541    | 32038              |
| 2016     | 146674541            | 1888729         | 1891015    | -2286              |
| 2017     | 146842402            | 1690307         | 1826125    | -135818            |
```

<hr>
</details>

<details>
<summary>2</summary>
<hr>

The output:

```
| Year     | Total population     | Live births     | Deaths     | Natural change     |
| -------- | -------------------- | --------------- | ---------- | ------------------ |
|     2010 |            142849472 |         1788948 |    2028516 |            -239568 |
|     2011 |            142960908 |         1796629 |    1925720 |            -129091 |
|     2012 |            143201700 |         1902084 |    1906335 |              -4251 |
|     2013 |            143506995 |         1895822 |    1871809 |              24013 |
|     2014 |            146090613 |         1942683 |    1912347 |              30346 |
|     2015 |            146405999 |         1940579 |    1908541 |              32038 |
|     2016 |            146674541 |         1888729 |    1891015 |              -2286 |
|     2017 |            146842402 |         1690307 |    1826125 |            -135818 |
```

<hr>
</details>

<details>
<summary>3</summary>
<hr>

The output:

```
|     Year |     Total population |     Live births |     Deaths |     Natural change |
| -------- | -------------------- | --------------- | ---------- | ------------------ |
| 2010     | 1.428e+8             | 1.78e+6         | 2.02E+6    | -239568            |
| 2011     | 1.429e+8             | 1.79e+6         | 1.92E+6    | -129091            |
| 2012     | 1.432e+8             | 1.90e+6         | 1.90E+6    | -4251              |
| 2013     | 1.435e+8             | 1.89e+6         | 1.87E+6    | 24013              |
| 2014     | 1.460e+8             | 1.94e+6         | 1.91E+6    | 30346              |
| 2015     | 1.464e+8             | 1.94e+6         | 1.90E+6    | 32038              |
| 2016     | 1.466e+8             | 1.88e+6         | 1.89E+6    | -2286              |
| 2017     | 1.468e+8             | 1.69e+6         | 1.82E+6    | -135818            |
```

<hr>
</details>

<details>
<summary>4</summary>
<hr>

The output:

```
| Year     | Total population     | Live births     | Deaths     | Natural change     |
| -------- | -------------------- | --------------- | ---------- | ------------------ |
|     2010 |            1.4284E+8 |        1.788e+6 |     2.0e+6 |            -239568 |
|     2011 |            1.4296E+8 |        1.796e+6 |     1.9e+6 |            -129091 |
|     2012 |            1.4320E+8 |        1.902e+6 |     1.9e+6 |              -4251 |
|     2013 |            1.4350E+8 |        1.895e+6 |     1.8e+6 |              24013 |
|     2014 |            1.4609E+8 |        1.942e+6 |     1.9e+6 |              30346 |
|     2015 |            1.4640E+8 |        1.940e+6 |     1.9e+6 |              32038 |
|     2016 |            1.4667E+8 |        1.888e+6 |     1.8e+6 |              -2286 |
|     2017 |            1.4684E+8 |        1.690e+6 |     1.8e+6 |            -135818 |
```

<hr>
</details>

<details>
<summary>5</summary>
<hr>

The output:

```
| Year | Total p. | Live births | Deaths     | Natural change |
| ---- | -------- | ----------- | ---------- | -------------- |
| 2010 | 1.428e+8 |     1788948 | 2028516    |        -239568 |
| 2011 | 1.429e+8 |     1796629 | 1925720    |        -129091 |
| 2012 | 1.432e+8 |     1902084 | 1906335    |          -4251 |
| 2013 | 1.435e+8 |     1895822 | 1871809    |          24013 |
| 2014 | 1.460e+8 |     1942683 | 1912347    |          30346 |
| 2015 | 1.464e+8 |     1940579 | 1908541    |          32038 |
| 2016 | 1.466e+8 |     1888729 | 1891015    |          -2286 |
| 2017 | 1.468e+8 |     1690307 | 1826125    |        -135818 |
```

<hr>
</details>

<details>
<summary>6</summary>
<hr>

The output:

```
| Year | Total p. | Live births | Deaths  | Natural ch. |
| ---- | -------- | ----------- | ------- | ----------- |
| 2010 | 1.42E+8  |    1.788e+6 | 2028516 | -239568     |
| 2011 | 1.42E+8  |    1.796e+6 | 1925720 | -129091     |
| 2012 | 1.43E+8  |    1.902e+6 | 1906335 | -4251       |
| 2013 | 1.43E+8  |    1.895e+6 | 1871809 | 24013       |
| 2014 | 1.46E+8  |    1.942e+6 | 1912347 | 30346       |
| 2015 | 1.46E+8  |    1.940e+6 | 1908541 | 32038       |
| 2016 | 1.46E+8  |    1.888e+6 | 1891015 | -2286       |
| 2017 | 1.46E+8  |    1.690e+6 | 1826125 | -135818     |
```

<hr>
</details>

## 3. The `scanf()` function

> The function `scanf()` is the input analog of `printf()`, providing many of the same conversion facilities in the opposite direction:
>
> ```c
> int scanf(char *format, arg1, arg2, ...);
> ```
>
> `scanf()` reads characters from the standard input, interprets them according to the specification in `format`, and stores the results through the remaining arguments. The `format` argument is described below. The other arguments indicate where the corresponding converted input should be stored.
>
> `scanf()` stops when it exhausts its format string, or when some input fails to match the control specification. It returns as its value the number of successfully matched and assigned input items. This can be used to decide how many items were found.
>
> The `format` string usually contains conversion specifications, which are used to control conversion of input. The `format` string may contain:
>
> 1. Blanks ot tabs, which are ignored.
> 2. Ordinary characters (not `'%'`), which are expected to match the next non-white space character of the input stream.
> 3. Conversion specifications, consisting of the character `'%'`, an optional assignment suppression character `'*'`, an optional number specifying a maximum field width, an optional `'h'`, `'l'`, or `'L'` indicating the width of the target, and conversion character.
>
> Conversion characters are shown in table below. If the character after the `%` is not a conversion specification, the behavior is undefined.
>
> | Character     | Argument type         | Input data                                                                                                                                                                                     |
> | ------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `d`           | `int*`                | Decimal integer.                                                                                                                                                                               |
> | `i`           | `int*`                | Integer. The integer may be in octal (leading `0`) or hexadecimal (leading `0x` or `0X`).                                                                                                      |
> | `o`           | `int*`                | Octal integer (with or without a leading zero).                                                                                                                                                |
> | `u`           | `unsigned int*`       | Unsigned decimal integer.                                                                                                                                                                      |
> | `x`           | `int*`                | Hexadecimal integer (with or without a leading `0x` ot `0X`).                                                                                                                                  |
> | `c`           | `char*`               | Characters. The next input characters (default `1`) are placed at the indicated spot. The normal skip over white space is suppressed. To read the next non-white space character, use `"%1s"`. |
> | `s`           | `char*`, `char[]`     | Character string (not quoted). Pointing to an array of characters large enough for the string and a terminating `'\0'` that will be added.                                                     |
> | `e`, `f`, `g` | `float*`              | Floating-point number with optional sign, optional decimal point and optional exponent.                                                                                                        |
> | `%`           | No assignment is made | Literal `'%'`.                                                                                                                                                                                 |
>
> The conversion characters `d`, `i`, `o`, `u`, and `x` may be preceded by `h` to indicate that a pointer to `short` rather than `int` appears in the argument list, or by `l` to indicate that a pointer to `long` appears in the argument list. Similarly, the conversion characters `e`, `f`, and `g` may be preceded by `l` to indicate that a pointer to `double` rather than `float` is in the argument list.

Read the values below from the standard input using the `scanf()` function. Save these values in variables. Then display the read values using the `printf()` function.

Variants (click to open):

<details>
<summary>1</summary>
<hr>

The input:

```
23092
024351
0x4ABC
5.627
1.3249E+68
a
orange
```

<hr>
</details>

<details>
<summary>2</summary>
<hr>

The input:

```
4823
0536
0x9dab
6.45601
1.241E+72
h
apple
```

<hr>
</details>

<details>
<summary>3</summary>
<hr>

The input:

```
9981273
06123
0x34ccd
90.39587
1.124124e-108
q
tomato
```

<hr>
</details>

<details>
<summary>4</summary>
<hr>

The input:

```
54824
04624
0x13af24
-45.345
-1.2346e+96
z
cherry
```

<hr>
</details>

<details>
<summary>5</summary>
<hr>

The input:

```
89876124
02351
0x123acc
-341.20000
1.243E-74
f
blackberry
```

<hr>
</details>

<details>
<summary>6</summary>
<hr>

The input:

```
349871
02451354
0xaabbcfd
2124.0000124
-1.43462E-89
j
potato
```

<hr>
</details>

## 4. File access

> Before a file can be read or written, it has to be opened by the library function `fopen()`. `fopen()` takes an external  name like `file.txt`, does some housekeeping and negotiation with the operating system, and returns a pointer to be used in subsequent reads or writes of the file.
>
> This pointer, called the **file pointer**, has a `FILE` type. Here is an example of declaration a file pointer variable:
>
> ```c
> FILE *file;
> ```
>
> Syntax of the `fopen()` function is shown below:
>
> ```c
> FILE *fopen(char *name, char *mode);
> ```
>
> This says that `fopen()` returns a pointer to a `FILE`. The call to `fopen()` in a program looks like this:
>
> ```c
> FILE *file;
> file = fopen("file.txt", "r");
> ```
>
> The first argument of `fopen()` is a character string containing the name of the file. The second argument is the `mode`, also a character string, which indicates how one intends to use the file. Allowable modes include read (`"x"`), write (`"w"`), and append (`"a"`).
>
> If a file that does not exist is opened for writing or appending, it is created if possible. Opening an existing file for writing causes the old contents to be discarded, while opening for appending preservers them. Trying to read a file that does not exist is an error, and there may be other causes of error as well, like trying to read a file when you don't have permission. If there is any error, `fopen()` will return `NULL`.
>
> For formatted input ot output of files, the functions `fscanf()` and `fprintf()` may be used. These are identical to `scanf()` and `printf()`, except the the first argument is a file pointer that specifies the file to be read or written. The `format` string is the second argument.
>
> ```c
> int fscanf(FILE *file, char *format, arg1, arg2, ...);
> int fprintf(FILE *file, char *format, arg1, arg2, ...);
> ```

Modify the second task so that the data is not output to the standard output, but written to the file named `population.txt`.

To make this, create and open the file using `fopen()` function with the `"w"` mode. Then replace `printf()` function calls with `fprintf()` calls.

## 5. Reading data from a file