[Back to the homepage](../README.md)

# Conditional expression, enumerations, and `switch` statement

Contents:
- [1. Conditional expression](#1-conditional-expression)
- [2. Enumerations](#2-enumerations)
- [3. `switch` statement](#3-switch-statement)
- [4. From `if-else` statement to `switch` statement](#4-from-if-else-statement-to-switch-statement)
- [5. Making a questionnaire](#5-making-a-questionnaire)

## 1. Conditional expression

> Syntax:
>
> ```c
> expression1 ? expression2 : expression3;
> ```
>
> `expression1` is evaluated first. If it is true (non-zero), then `expression2` is evaluated, and that is the value of conditional expression. Otherwise `expression3` is evaluated.

Replace `if-else` statement with conditional expression.

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

## 2. Enumerations

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
| 1       | Enumeration of months.                   |
| 2       | Enumeration of rainbow's colors.         |
| 3       | Enumeration of some animals.             |
| 4       | Enumeration of some flowers.             |
| 5       | Enumeration of some car brands.          |
| 6       | Enumeration of some phone manufacturers. |

## 3. `switch` statement

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

## 4. From `if-else` statement to `switch` statement

Replace `if-else` statements chain with `switch` statement.

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

## 5. Making a questionnaire

> To read data from a standard input one should use a `scanf()` function. Here is an example of reading integer number from a standard input:
>
> ```c
> printf ("Please, enter your age: ");
>
> int age;
> scanf ("%d", &age);
>
> printf ("It seems like your age is %d.", age);
> ```

Make a simple questionnaire containing 3 to 5 questions on any topic. Each question should have 4 possible answers. User should choose one answer by typing answer's number, which is integer from 1 to 4.

Algorithm of the program:

1. Show first/next question and its answers.
2. Ask user to input a desired answer's number.
3. If the current question is the last one, display number of a correct answers in percentage and finish the program. Otherwise go to the first step.

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