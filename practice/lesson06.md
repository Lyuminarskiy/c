[Back to the homepage](../README.md)

# Multidimensional arrays

Contents:
- [1. First steps](#1-first-steps)

## 1. First steps

> C provides rectangular multidimensional arrays. In C, a two-dimensional array is really a one-dimensional array, each of whose elements is an array.
>
> An array is initialized by a list of initializers in braces. Each row of two-dimensional array is initialized by a corresponding sub-list.
>
> Here is an example of declaring and initializing a two-dimensional array of size `3` by `3`:
>
> ```c
> int matrix[3][3] =
> {
>   { 1, 2, 3 },
>   { 4, 5, 6 },
>   { 7, 8, 9 }
> };
> ```
>
> Now, you can access the array's element in the following way:
>
> ```c
> // Changing the value of the element.
> matrix[0][2] = 4;
>
> // Printing the value of the element.
> printf("%d", matrix[0][2]);
> ```

Create a two-dimensional array ...

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