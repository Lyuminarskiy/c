[Back to the homepage](../README.md)

# Multidimensional arrays

Contents:
- [1. First steps](#1-first-steps)

## 1. First steps

C provides rectangular multidimensional arrays. In C, a two-dimensional array is really a one-dimensional array, each of whose elements is an array.

An array is initialized by a list of initializers in braces. Each row of two-dimensional array is initialized by a corresponding sub-list.

Here is an example of creating and initializing a two-dimensional array of size `3` by `3`:

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
matrix[0][2] = 4;
printf("%d", matrix[0][2]);
```

Variants (click to open):

<details>
<summary>1</summary>
<hr>

<hr>
</details>

<details>
<summary>2</summary>
<hr>

<hr>
</details>

<details>
<summary>3</summary>
<hr>

<hr>
</details>

<details>
<summary>4</summary>
<hr>

<hr>
</details>

<details>
<summary>5</summary>
<hr>

<hr>
</details>

<details>
<summary>6</summary>
<hr>

<hr>
</details>