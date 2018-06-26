> Book: [The C programming language](http://www.dipmat.univpm.it/~demeio/public/the_c_programming_language_2.pdf).

# C Language Course

Contents:
- [1. First lesson](#1-first-lesson)
  - [1.1. Getting started](#11-getting-started)
  - [1.2. Data types and declarations](#12-data-types-and-declarations)
  - [1.3. `if-else` statement](#13-if-else-statement)
  - [1.4. `if-else` statements chain](#14-if-else-statements-chain)
  - [1.5. Operators](#15-operators)
- [2. Second lesson](#2-second-lesson)
  - [2.1. Conditional expression](#21-conditional-expression)
  - [2.2. Enumeration](#22-enumeration)
  - [2.3. `switch` statement](#23-switch-statement)
  - [2.4. From `if-else` statement to `switch` statement](#24-from-if-else-statement-to-switch-statement)
  - [2.5. Making a questionnaire](#25-making-a-questionnaire)

Students:

| Variant | Student Name                |
| ------- | --------------------------- |
| 1       | *Isha* Naa Ofeibea Dodoo    |
| 2       | *Rutendo* Midzi             |
| 3       | *Golfam* Mumawar            |
| 4       | *Emmanuel* Oyetunji Opeyemi |
| 5       | *Golden* Chebuzor Ubokh     |
| 6       | *Janti* Chuks Chidinma      |

## 1. First lesson

### 1.1. Getting started

Write a program to display your name and age. To deal with it one should use a `printf()` function.

Sample output:

```
Nick Smith, 19
```

### 1.2. Data types and declarations

> A declaration announces the properties of variables; it consists of a type name and a list of variables:
>
> ```c
> int number1, number2;
> ```
>
> Assignment statement sets variables to their initial values:
>
> ```c
> number1 = 42;
> number2 = 214;
> ```
>
> C Language provides several basic data types:
> | Data Type | Description                               |
> | --------- | ----------------------------------------- |
> | `char`    | A single character.                       |
> | `int`     | An integer number.                        |
> | `short`   | An short integer number.                  |
> | `long`    | An long integer number.                   |
> | `float`   | A single-precision floating point number. |
> | `double`  | A double-precision floating point number. |

Write a program to declarate a couple of variables (`a`, `b`, `c`):

| Variant | `a`   | `b`  | `c`     |
| ------- | ----- | ---- | ------- |
| First   | 457   | 6.03 | 'c'     |
| Second  | 373   | 'x'  | 167.314 |
| Third   | 60.2  | 'e'  | 442     |
| Fourth  | 122.1 | 560  | 'w'     |
| Fifth   | 'f'   | 1132 | 39.6    |
| Sixth   | 'y'   | 77.9 | 2502    |

Choose according basic data type for each variable and display their values.

Sample output:

```
a = 1
b = 3.14
c = 'h'
```

### 1.3. `if-else` statement

> Syntax:
>
> ```c
> if (expression)
>   statement1
> else
>   statement2
> ```

Write a program using `if-else` statement:

| Variant | Description
| - | -
| First | Create an integer and check whether it is even or odd.
| Second | Create an integer and check whether it is positive or non-positive.
| Third | Create an integer and check whether it is negative or non-negative.
| Fourth | Create two integers and check whether they are equal or not.
| Fifth | Create two integers and check if the first is bigger than the second.
| Sixth | Create two integers and check if the first is smaller than the second.

Display the results.

### 1.4. `if-else` statements chain

> Syntax:
>
> ```c
> if (expression1)
>   statement1
> else if (expression2)
>   statement2
> else if (expression3)
>   statement3
> else
>   statement4
> ```

Write a program using `if-else` statements chain:

| Variant | Description                                                  |
| ------- | ------------------------------------------------------------ |
| First   | Create three different integers and find the biggest value.  |
| Second  | Create three different integers and find the smallest value. |
| Third   | Create three different integers and find the biggest value.  |
| Fourth  | Create three different integers and find the smallest value. |
| Fifth   | Create three different integers and find the biggest value.  |
| Sixth   | Create three different integers and find the smallest value. |

Display the results.

### 1.5. Operators

Write a program to calculate an expression:

| Variant | Description                                                                                                          |
| ------- | -------------------------------------------------------------------------------------------------------------------- |
| First   | Create three floating point numbers and calculate their average value.                                               |
| Second  | Create three floating point numbers and check whether their sum is greater than their multiplication.                |
| Third   | Create three floating point numbers and check if the first two numbers' sum is greater than the third number.        |
| Fourth  | Create three floating point numbers and check if the first two numbers' multiplication is equal to the third number. |
| Fifth   | Create three floating point numbers and check whether all of them are positive or non-positive.                      |
| Sixth   | Create three floating point numbers and check whether all of them are negative or non-negative.                      |

Display the results.

## 2. Second lesson

### 2.1. Conditional expression

> Syntax:
>
> ```c
> expression1 ? expression2 : expression3;
> ```
>
> `Expression1` is evaluated first. If it is true (non-zero), then `expression2` is evaluated, and that is the value of conditional expression. Otherwise `expression3` is evaluated.

Change `if-else` Statement to conditional expression.

Variants (click to open):

<details>
<summary>1</summary>
<hr>

```c
int a = 1, b = 2, result;

if (a < b)
{
  result = a + b;
}
else
{
  result = a - b;
}
```

<hr>
</details>

<details>
<summary>2</summary>
<hr>

```c
double c = 3.14, d = 2.57, result;

if (c == d)
{
  result = c * d;
}
else
{
  result = c / d;
}
```

<hr>
</details>

<details>
<summary>3</summary>
<hr>

```c
bool e = true, f = false, result;

if (e && !f || !e && f)
{
  result = e && f;
}
else
{
  result = e || f;
}
```

<hr>
</details>

<details>
<summary>4</summary>
<hr>

```c
char g = 'a', h = 'b', result;

if (g >= h)
{
  result = 'x';
}
else
{
  result = 'y';
}
```

<hr>
</details>

<details>
<summary>5</summary>
<hr>

```c
bool i = false, j = true, result;

if (i && j || !i && !j )
{
  result = i || j;
}
else
{
  result = i && j;
}
```

<hr>
</details>

<details>
<summary>6</summary>
<hr>

```c
double k = 251.2, l = 113.1, result;

if (k % 2 > l * 3)
{
  result = k / 5;
}
else
{
  result = l * l;
}
```

<hr>
</details>

### 2.2. Enumeration

> Syntax:
>
> ```c
> enum enumeration_name { FIRST_VALUE, SECOND_VALUE, SPECIFIED_VALUE = 30 } variable_declaration;
> ```
>
> An enumeration is a list of constant integer values. The first name in an enum has value 0, the next 1, and so on, unless explicit values are specified. Enumerations provide a convenient way to associate constants values with names.

Create your own enumeration:

| Variant | Description                              |
| ------- | ---------------------------------------- |
| First   | Enumeration of months.                   |
| Second  | Enumeration of rainbow's colors.         |
| Third   | Enumeration of some animals.             |
| Fourth  | Enumeration of some flowers.             |
| Fifth   | Enumeration of some car brands.          |
| Sixth   | Enumeration of some phone manufacturers. |

### 2.3. `switch` statement

> Syntax:
>
> ```c
> switch (expression)
> {
>   case constexpr1:
>     statement1;
>     break;
>
>   case constexpr2:
>     statement2;
>     break;
>
>   default: statement3;
> }
> ```
>
> The switch statement is a multi-way decision that tests whether an expression matches one of a number of constant integer values, and branches accordingly.
>
> Each case is labeled by one or more integer-values constants or constant expressions. If a case matches the expression value, execution starts at that case. All case expressions must be different. The case labeled `default` is executed if none of the other cases are satisfied. A `default` is optional; if it isn't there and if none of the cases match, no action at all takes place. Cases and the `default` clause can occur in any order.

Take your enumeration from previous task and use it in switch statement like this:

```c
enum Boolean { TRUE, FALSE };
int enum_var = TRUE;

switch (enum_var)
{
  case TRUE:
    printf("TRUE");
    break;

  case FALSE:
    printf("FALSE");
    break;
}
```

So you should print name of your enumeration's constant.

### 2.4. From `if-else` statement to `switch` statement

Change `if-else` statements chain to `switch` statement.

Variants (click to open):

<details>
<summary>1</summary>
<hr>

```c
int number = 42;

if (number == 1)
{
  printf("1");
}
else if (number ==  2 || number ==  3)
{
  printf("2 || 3");
}
else
{
  printf("wrong value");
}
```

<hr>
</details>

<details>
<summary>2</summary>
<hr>

```c
char symbol = 'F';

if (symbol == 'A' || symbol ==  'B')
{
  printf("A || B");
}
else if (symbol ==  'C')
{
  printf("C");
}
else
{
  printf("wrong value");
}
```

<hr>
</details>

<details>
<summary>3</summary>
<hr>

```c
enum Color { GREEN, BLUE, RED, ORANGE };
int color = ORANGE;

if (color == GREEN)
{
  printf("GREEN");
}
else if (color == BLUE)
{
  printf("BLUE");
}
else if (color == RED || color == ORANGE)
{
  printf("RED || ORANGE");
}
else
{
  printf("wrong value");
}
```

<hr>
</details>

<details>
<summary>4</summary>
<hr>

```c
int number = 200;

if (number == 100 || number == 200)
{
  printf("100 || 200");
}
else if (number == 300 || number == 400 || number == 500)
{
  printf("300");
}
else if (number == 400 || number == 500)
{
  printf("400 || 500");
}
else
{
  printf("wrong value");
}
```

<hr>
</details>

<details>
<summary>5</summary>
<hr>

```c
char symbol = 'Z';

if (symbol == 'Q')
{
  printf("Q");
}
else if (symbol ==  'R' || symbol ==  'r')
{
  printf("R || r");
}
else if (symbol ==  'S' || symbol ==  's')
{
  printf("S || s");
}
else
{
  printf("wrong value");
}
```

<hr>
</details>

<details>
<summary>6</summary>
<hr>

```c
enum Animal { CAT, DOG, SNAKE, CROCODILE };
int animal = SNAKE;

if (animal == CAT)
{
  printf("CAT");
}
else if (animal == DOG)
{
  printf("BLUE");
}
else if (animal == SNAKE || animal == CROCODILE)
{
  printf("SNAKE || CROCODILE");
}
else
{
  printf("wrong value");
}
```

<hr>
</details>

### 2.5. Making a questionnaire

> To read data from standard input one should use a `scanf()` function. Here is an example of reading integer number from a standard input:
>
> ```c
> printf ("Please, enter your age: ");
>
> int age;
> scanf ("%d", &age);
>
> printf ("It seems like your age is %d.", age);
> ```

Make a simple questionnaire containing 3-5 questions with 4 possible answers. User should choose one correct answer by typing answer's number, which is integer from 1 to 4.

After finishing questionnaire your program should display number of a correct answers in percentage.

Sample output:

```
1. First question
  1. Answer #1
  2. Answer #2
  3. Answer #3
  4. Answer #4

Please, choose the correct answer: 2

2. Second question
  1. First answer
  2. Second answer
  3. Third answer
  4. Fourth answer

Please, choose the correct answer: 4

3. Third question
  1. First answer
  2. Second answer
  3. Third answer
  4. Fourth answer

Please, choose the correct answer: 1

Your success rate is 66 %.
```