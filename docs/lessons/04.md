# 4. Loops and arrays: part two

## 4.1. The `continue` statement

Declare an array of `10` integer-typed values. Initialize it either by integer constants in code or by reading data from a standard input. Using the `for` loop, find the number of the values in the array ...

| Variant | Description                                                                                  |
| ------- | -------------------------------------------------------------------------------------------- |
| 1       | ... for which the remainder of the division by `18` is greater than `4` and less than `7`.   |
| 2       | ... for which the remainder of the division by `9` equals `4`.                               |
| 3       | ... for which the remainder of the division by `6` equals `5`.                               |
| 4       | ... which are even and less than 50                             |
| 5       | ... which are odd and greater than 10                              |
| 6       | ... that are greater than `13` and less than `17`.                                           |
| 7       | ... which are divisible of 9                               |
| 8       | ... for which the remainder of the division by `31` is greater than `16` and less than `21`. |
| 9       | ... that are greater than `40` and less than `46`.                                           |

Display all satisfying the conditions values and show number of them

Use the `continue` statement to cause the next iteration of `for` loop if current value is not satisfying the condition.

Sample output:

```
Please, input the array: 4 -3 5 8 -1 4 2 0 5 6
A number of values found: 2
```

### Reference (4.1)

The `continue` statement is related to `break` statement, but less often used. It causes the next iteration of the enclosing  `for`, `while` or `do-while` loop to begin.

In the `while` and `do-while`, this means that the test part is executed immediately. In the `for`, control passes to the increment step. The `continue` statement applies only to loops, not to `switch`. A `continue` inside a `switch` inside a loop causes the next loop iteration.

## 4.2. Search and summation

Declare an array of `10` integer-typed values. Initialize it either by integer constants in code or by reading data from a standard input. Using either `while` loop or `for` loop find the sum of the values in the array ...

| Variant | Description                                                                                  |
| ------- | -------------------------------------------------------------------------------------------- |
| 1       | ... that are odd.                                                                            |
| 2       | ... which end with digits: 2,6,8                                           |
| 3       | ... that are greater than `40` and less than `46`.                                           |
| 4       | ... are divisible of 15                                           |
| 5       | ... have three digits                                           |
| 6       | ... that are greater than `13` and less than `17`.                                           |
| 7       | ... for which the remainder of the division by `22` is greater than `12` and less than `17`. |
| 8       | ... that are even.                                                                           |
| 9       | ... for which the remainder of the division by `14` is greater than `2` and less than `5`.   |

At the end, display the sum.

Sample output:

```
Please, input the array: 4 -3 5 8 -1 4 2 0 5 6
The sum: 2
```

## 4.3. Search and replacement

Declare an array of `10` integer-typed values. Initialize it either by integer constants in code or by reading data from a standard input. Using either `while` loop or `for` loop replace all of the ...

| Variant | Description                             |
| ------- | --------------------------------------- |
| 1       | ... negative values by their negation.  |
| 2       | ... positive values by their last digit.  |
| 3       | ... positive values by their negation.  |
| 4       | ... negative values by their cube.      |
| 5       | ... two-digit numbers by their first digit  |
| 6       | ... even values in the array with zero. |
| 7       | ... positive values by their square.    |
| 8       | ... negative values by their last digit.  |
| 9       | ... odd values in the array with zero.  |

At the end, display the modified array.

Sample output:

```
Please, input the array: 4 -3 5 8 -1 4 2 0 5 6
Modified array: 4 0 5 8 0 4 2 0 5 6
```

## 4.4. From `for` loop to `while` loop

Replace `for` loop with `while` loop.

Variants (click to open):

<details>
<summary>1</summary>
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
<summary>2</summary>
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
<summary>3</summary>
<hr>

```c
for (int i = 0, j = 0; i < 100 && j / 3 < 50; i++, j += 2)
{
  printf("i = %d, j = %d\n", i, j);
}
```

<hr>
</details>

<details>
<summary>4</summary>
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
<summary>5</summary>
<hr>

```c
for (int a = 0; a < 26; a++)
{
  printf("%c", a + 'A');
}
```

<hr>
</details>





<details>
<summary>6</summary>
<hr>

```c
for (int i = 5; i < 105, i += 5)
{
  int d;
  scanf("%d", &d);
  printf("%d ", d / i);
}
```

<hr>
</details>

<details>
<summary>7</summary>
<hr>

```c
int sum = 0;
for (int i = 0; i < 10; i++)
{
  sum += i;
  printf("%d\n", sum);  
}
```

<hr>
</details>



<details>
<summary>8</summary>
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
<summary>9</summary>
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




## 4.5. From `while` loop to `for` loop

Replace `while` loop with `for` loop.

Variants (click to open):


<details>
<summary>1</summary>
<hr>

```c
int i = 5;
while (i > 0){
   printf("%d", i);
   i--;
}
```

<hr>
</details>


<details>
<summary>2</summary>
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
<summary>3</summary>
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
<summary>4</summary>
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


<details>
<summary>5</summary>
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
<summary>6</summary>
<hr>

```c
int i = 0;
while (i % 10 < 8){
  if (i % 2 == 0){
   printf("%d", i % 10)
  }
  i++;
}
```

<hr>
</details>


<details>
<summary>7</summary>
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
<summary>8</summary>
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
<summary>9</summary>
<hr>

```c
int k = 10;
int x = 2
while (k / x > 2){
   printf("%d", k / x)
  
   x += 2;
   k++;
}
```

<hr>
</details>



