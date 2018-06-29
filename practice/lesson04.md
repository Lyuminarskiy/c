[Back to the homepage](../README.md)

# Loops and arrays: part two

Contents:
- [1. `continue` statement](#1-continue-statement)
- [2. Search and summation](#2-search-and-summation)
- [3. Search and replacement](#3-search-and-replacement)
- [4. From `for` loop to `while` loop](#4-from-for-loop-to-while-loop)
- [5. From `while` loop to `for` loop](#5-from-while-loop-to-for-loop)

## 1. `continue` statement

> The `continue` statement is related to `break` statement, but less often used. It causes the next iteration of the enclosing  `for`, `while` or `do-while` loop to begin.
>
> In the `while` and `do-while`, this means that the test part is executed immediately. In the `for`, control passes to the increment step. The `continue` statement applies only to loops, not to `switch`. A `continue` inside a `switch` inside a loop causes the next loop iteration.

Declare an array of `10` integer-typed values. Initialize it either by integer constants in code or by reading data from a standard input. Using the `for` loop, find the number of values in the array ...

| Variant | Description                                                                                  |
| ------- | -------------------------------------------------------------------------------------------- |
| 1       | ... for which the remainder of the division by `31` is greater than `16` and less than `21`. |
| 2       | ... for which the remainder of the division by `18` is greater than `4` and less than `7`.   |
| 3       | ... that are greater than `40` and less than `46`.                                           |
| 4       | ... that are greater than `13` and less than `17`.                                           |
| 5       | ... for which the remainder of the division by `6` equals `5`.                               |
| 6       | ... for which the remainder of the division by `9` equals `4`.                               |

If a number satisfying the conditions was found, display it immediately. At the end, display the number of values found.

Use the `continue` statement to cause the next iteration of `for` loop once a number satisfying the conditions was found.

Sample output:

```
Please, input the array: 4 -3 5 8 -1 4 2 0 5 6
A number of values found: 2
```

## 2. Search and summation

Declare an array of `10` integer-typed values. Initialize it either by integer constants in code or by reading data from a standard input. Using either `while` loop or `for` loop find the sum of values in the array ...

| Variant | Description                                                                                  |
| ------- | -------------------------------------------------------------------------------------------- |
| 1       | ... for which the remainder of the division by `14` is greater than `2` and less than `5`.   |
| 2       | ... for which the remainder of the division by `22` is greater than `12` and less than `17`. |
| 3       | ... that are even.                                                                           |
| 4       | ... that are odd.                                                                            |
| 5       | ... that are greater than `40` and less than `46`.                                           |
| 6       | ... that are greater than `13` and less than `17`.                                           |

At the end, display the sum.

Sample output:

```
Please, input the array: 4 -3 5 8 -1 4 2 0 5 6
The sum: 2
```

## 3. Search and replacement

Declare an array of `10` integer-typed values. Initialize it either by integer constants in code or by reading data from a standard input. Using either `while` loop or `for` loop replace all of the ...

| Variant | Description                             |
| ------- | --------------------------------------- |
| 1       | ... positive values by their square.    |
| 2       | ... negative values by their cube.      |
| 3       | ... even values in the array with zero. |
| 4       | ... odd values in the array with zero.  |
| 5       | ... positive values by their negation.  |
| 6       | ... negative values by their negation.  |

At the end, display the modified array.

Sample output:

```
Please, input the array: 4 -3 5 8 -1 4 2 0 5 6
Modified array: 4 0 5 8 0 4 2 0 5 6
```

## 4. From `for` loop to `while` loop

Replace `for` loop with `while` loop.

Variants (click to open):

<details>
<summary>1</summary>
<hr>

```c
for (char c = 'a'; c <= 'z'; c++)
{
  printf("%c = %d\n", c, c);
}
```

<hr>
</details>

<details>
<summary>2</summary>
<hr>

```c
for (char c = 'A'; c <= 'z'; c++)
{
  switch (c)
  {
    case 'f':
      printf("f\n");
      break;

    case 'Q':
    case 'q':
      printf("Q || q\n");
      break;
  }
}
```

<hr>
</details>

<details>
<summary>3</summary>
<hr>

```c
for (int c = 51, d = 23; d - c < 100; c--, d++)
{
  if (c >= d)
  {
    printf("c >= d\n");
  }
  else
  {
    printf("c < d\n");
  }
}
```

<hr>
</details>

<details>
<summary>4</summary>
<hr>

```c
for (int e = 4, f = -5; 2 * e * e - 4 * f <= 243 && e >= f; e += 2, f++)
{
  printf("e = %d, f = %d\n", e, f);
}
```

<hr>
</details>

<details>
<summary>5</summary>
<hr>

```c
for (int a = 0, b = 200; a + b < 300; a += 3)
{
  if (a % 2 == 1)
  {
    printf("a = %d\n", a);
  }
}
```

<hr>
</details>

<details>
<summary>6</summary>
<hr>

```c
for (int i = 0, j = 0; i < 100 && j / 3 < 50; i++, j += 2)
{
  printf("i = %d, j = %d\n", i, j);
}
```

<hr>
</details>

## 5. From `while` loop to `for` loop

Replace `while` loop with `for` loop.

Variants (click to open):

<details>
<summary>1</summary>
<hr>

```c
int c = 51;
int d = 23;

while (d - c < 100)
{
  if (c >= d)
  {
    printf("c >= d\n");
  }
  else
  {
    printf("c < d\n");
  }

  c--;
  d++;
}
```

<hr>
</details>

<details>
<summary>2</summary>
<hr>

```c
int e = 4;
int f = -5;

while (2 * e * e - 4 * f <= 243 && e >= f)
{
  printf("e = %d, f = %d\n", e, f);

  e += 2;
  f++;
}
```

<hr>
</details>

<details>
<summary>3</summary>
<hr>

```c
int a = 0;
int b = 200;

while (a + b < 300)
{
  if (a % 2 == 1)
  {
    printf("a = %d\n", a);
  }

  a += 3;
}
```

<hr>
</details>

<details>
<summary>4</summary>
<hr>

```c
int i = 0;
int j = 0;

while (i < 100 && j / 3 < 50)
{
  printf("i = %d, j = %d\n", i, j);

  i++;
  j += 2;
}
```

<hr>
</details>

<details>
<summary>5</summary>
<hr>

```c
char c = 'a';

while (c <= 'z')
{
  printf("%c = %d\n", c, c);
  c++;
}
```

<hr>
</details>

<details>
<summary>6</summary>
<hr>

```c
char c = 'A';

while (c <= 'z')
{
  switch (c)
  {
    case 'f':
      printf("f\n");
      break;

    case 'Q':
    case 'q':
      printf("Q || q\n");
      break;
  }

  c++;
}
```

<hr>
</details>