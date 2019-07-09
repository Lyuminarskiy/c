# 6. Multidimensional arrays

## 6.1. First steps

Declare a two-dimensional array ...

Variants (click to open):

<details>
<summary>1</summary>
<hr>

of size `3` by `3` and initialize it with the following values:

```
 3 -5  2
 4  1  8
-3  2  1
```

<hr>
</details>

<details>
<summary>2</summary>
<hr>

of size `3` by `5` and initialize it with the following values:

```
 3 -5  2  4  9
 4  1  8 -3  7
-3  2  1  8 -4
```

<hr>
</details>

<details>
<summary>3</summary>
<hr>

of size `5` by `3` and initialize it with the following values:

```
 3 -5  2
 4  1  8
-3  2  1
-5  7  9
 4  3  2
```

<hr>
</details>

<details>
<summary>4</summary>
<hr>

of size `3` by `3` and initialize it with the following values:

```
 8  2  4
-5 -4  8
 3  1  8
```

<hr>
</details>

<details>
<summary>5</summary>
<hr>

of size `3` by `5` and initialize it with the following values:

```
 4  2 -5  3  8
-4 -1  2 -5 -4
 1  0  9  3  4
```

<hr>
</details>

<details>
<summary>6</summary>
<hr>

of size `5` by `3` and initialize it with the following values:

```
 0  1  2
 4  9 -1
 5  8 -2
 0  0  4
 6  5  3
```

<hr>
</details>

Using two `for` loops (one of which is nested) display the values of a two-dimensional array.

### Reference (6.1)

C provides rectangular multidimensional arrays. In C, a two-dimensional array is really a one-dimensional array, each of whose elements is an array.

An array is initialized by a list of initializers in braces. Each row of two-dimensional array is initialized by a corresponding sub-list.

Here is an example of declaring and initializing a two-dimensional array of size `3` by `3`:

```c
int matrix[3][3] =
{
  { 1, 2, 3 },
  { 4, 5, 6 },
  { 7, 8, 9 }
};
```

Now, you can access the array's element in the following way:

```c
// Changing the value of the element.
matrix[0][2] = 4;

// Printing the value of the element.
printf("%d", matrix[0][2]);
```

## 6.2. Search and summation

Declare a two-dimensional array of size `3` by `3`. Initialize it either by integer constants in code or by reading data from a standard input. Find the sum of the values in the array ...

| Variant | Description                                                                                  |
| ------- | -------------------------------------------------------------------------------------------- |
| 1       | ... that are greater than `40` and less than `46`.                                           |
| 2       | ... that are greater than `13` and less than `17`.                                           |
| 3       | ... for which the remainder of the division by `14` is greater than `2` and less than `5`.   |
| 4       | ... for which the remainder of the division by `22` is greater than `12` and less than `17`. |
| 5       | ... that are even.                                                                           |
| 6       | ... that are odd.                                                                            |

At the end, display the sum.

Sample output:

```
An array:
 8  2  4
-5 -4  8
 3  1  8

The sum: 15
```

## 6.3. Search and replacement

Declare a two-dimensional array of size `3` by `3`. Initialize it either by integer constants in code or by reading data from a standard input. Replace all of the ...

| Variant | Description                             |
| ------- | --------------------------------------- |
| 1       | ... positive values by their negation.  |
| 2       | ... negative values by their negation.  |
| 3       | ... positive values by their square.    |
| 4       | ... negative values by their cube.      |
| 5       | ... even values in the array with zero. |
| 6       | ... odd values in the array with zero.  |

At the end, display the modified array.

Sample output:

```
An array:
 8  2  4
-5 -4  8
 3  1  8

Modified array:
 3  1  8
 8  2  4
-5 -4  8
```

## 6.4. Search and counting

Declare a two-dimensional array of size `3` by `3`. Initialize it either by integer constants in code or by reading data from a standard input. Find the count of the values in the array ...

| Variant | Description                                                                                  |
| ------- | -------------------------------------------------------------------------------------------- |
| 1       | ... for which the remainder of the division by `14` is greater than `2` and less than `5`.   |
| 2       | ... for which the remainder of the division by `22` is greater than `12` and less than `17`. |
| 3       | ... that are even.                                                                           |
| 4       | ... that are odd.                                                                            |
| 5       | ... that are greater than `40` and less than `46`.                                           |
| 6       | ... that are greater than `13` and less than `17`.                                           |

At the end, display the number of values found.

```
An array:
 8  2  4
-5 -4  8
 3  1  8

The number of values: 2
```

## 6.5. Matrix and diagonal

Declare a two-dimensional array of size `5` by `5`. Initialize it either by integer constants in code or by reading data from a standard input. Using two `for` loops (one of which is nested) find the sum of the values in the array ...

| Variant | Description                           |
| ------- | ------------------------------------- |
| 1       | ... that are above the main diagonal. |
| 2       | ... that are below the main diagonal. |
| 3       | ... that are above the antidiagonal.  |
| 4       | ... that are below the antidiagonal.  |
| 5       | ... that are on the main diagonal.    |
| 6       | ... that are on the antidiagonal.     |

At the end, display the sum of the values.

```
The array:
 3 -5  2  4  9
 4  1  8 -3  7
-3  2  1  8 -4
 0  4  5 -9  3
 2  0  0  8  1

The sum: 27
```