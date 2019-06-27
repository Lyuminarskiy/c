# 5. Strings

## 5.1. String constants

Ask for user's name, surname, and age. After receiving all the data, print a greeting.

All the messages should be declared as a characters array, for example:

```c
int age = 19;
char greeting_message[] = "You already %d years old!";

printf(greeting_message, age);
```

Sample output:

```
What is your name?
Nick

What is your surname?
Smith

What is your age?
19

Long time no see you, Nick Smith. You already 19 years old!
```

### Reference (5.1)

A string constant, or string literal, is a sequence of zero or more characters surrounded by double quotes:

```c
"I am string";
```

Or empty string:

```c
"";
```

The quotes are not part of the string, but serve only to delimit it. String constants can be concatenated at compile time:

```c
"hello," " world";
```

Is equivalent to:

```c
"hello, world";
```

Technically, a string constant is an array of characters. The internal representation of a string has a null character `'\0'` at the end, so the physical storage required is one more than the number of characters written between the double quotes.

Hence, to declare a string one should use an array of characters:

```c
char message[] = "hello";
```

Is equivalent to:

```c
char message[] = { 'h', 'e', 'l', 'l', 'o', '\0' };
```

Here is an example of writing string to a standard output:

```c
char message[] = "hello, world";
printf("%s", message);
```

Here is an example of reading string from a standard input:

```c
char message[20];
scanf("%s", message);
```

## 5.2. Searching for a characters

Read a string from a standard input. Determine whether there is at least one character in the string ...

| Variant | Description              |
| ------- | ------------------------ |
| 1       | ... from `'i'` to `'l'`. |
| 2       | ... from `'p'` to `'t'`. |
| 3       | ... from `'r'` to `'u'`. |
| 4       | ... from `'e'` to `'h'`. |
| 5       | ... from `'a'` to `'d'`. |
| 6       | ... from `'v'` to `'z'`. |
| 7       | ... from `'g'` to `'l'`. |
| 8       | ... from `'c'` to `'f'`. |
| 9       | ... from `'m'` to `'q'`. |

If the required character was found, display it. Otherwise, display a message saying that the no one characters was found.

Remember that at the end of the line there is always a null character `'\0'`. Remembering this, you will be able to determine the end of the line.

## 5.3. Counting characters

Read a string from a standard input. Determine how many in the string of characters ...

| Variant | Description                                      |
| ------- | ------------------------------------------------ |
| 1       | ... from `'k'` to `'p'` and from `'t'` to `'x'`. |
| 2       | ... from `'c'` to `'f'` and from `'q'` to `'t'`. |
| 3       | ... from `'r'` to `'u'` and from `'v'` to `'z'`. |
| 4       | ... from `'v'` to `'z'` and from `'a'` to `'d'`. |
| 5       | ... from `'e'` to `'h'` and from `'i'` to `'l'`. |
| 6       | ... from `'b'` to `'d'` and from `'p'` to `'t'`. |
| 7       | ... from `'a'` to `'d'` and from `'e'` to `'h'`. |
| 8       | ... from `'m'` to `'q'` and from `'r'` to `'u'`. |
| 9       | ... from `'i'` to `'l'` and from `'m'` to `'q'`. |

If a character satisfying the conditions was found, display it immediately. At the end, display the number of characters found.

## 5.4. Replacing characters

Read a string from a standard input. Replace in the string all of the characters ...

| Variant | Description                 | Replace by
| ------- | --------------------------- | --------------------
| 1       | ... from `'a'` to `'d'` ... | ... their uppercase
| 2       | ... from `'A'` to `'D'` ... | ... their lowercase
| 3       | ... from `'r'` to `'u'` ... | ... star
| 4       | ... from `'M'` to `'Q'` ... | ... their lowercase
| 5       | ... from `'e'` to `'h'` ... | ... space
| 6       | ... from `'m'` to `'q'` ... | ... their uppercase
| 7       | ... from `'i'` to `'l'` ... | ... underscore
| 8       | ... from `'V'` to `'Z'` ... | ... their lowercase
| 9       | ... from `'v'` to `'z'` ... | ... their uppercase

At the end, display the modified string.

Sample output (replacing `'l'` by uppercase):

```
Please, input the string: Hello, world.
Modified string: HeLLo, worLd.
```

## 5.5. Calculation of the string's weight

Calculate the weight of the string based on the sum of the individual characters' weights. The weights of the individual characters for each variant are shown below. If the weight for the character is not specified, then consider it equal to zero.

When calculating the weight of the individual characters, try to use a `switch` statement instead of `if-else` statements chain.

Variants (click to open):


<details>
<summary>1</summary>
<hr>

| Character           | Weight |
| ------------------- | ------ |
| `'A'`, `'a'`        | `+9`   |
| `'s'`, `'u'`, `'v'` | `-4`   |
| `'z'`, `'R'`        | `+5`   |
| `'Q'`, `'r'`        | `-1`   |

<hr>
</details>


<details>
<summary>2</summary>
<hr>

| Character           | Weight |
| ------------------- | ------ |
| `'T'`, `'x'`        | `+2`   |
| `'p'`, `'N'`, `'V'` | `-2`   |
| `'q'`, `'o'`        | `+3`   |
| `'I'`, `'E'`        | `-7`   |

<hr>
</details>


<details>
<summary>3</summary>
<hr>

| Character           | Weight |
| ------------------- | ------ |
| `'e'`, `'x'`        | `+7`   |
| `'u'`, `'d'`        | `+3`   |
| `'W'`, `'c'`        | `+2`   |
| `'k'`, `'o'`, `'O'` | `-9`   |

<hr>
</details>
<details>
<summary>4</summary>
<hr>

| Character           | Weight |
| ------------------- | ------ |
| `'f'`, `'g'`, `'Z'` | `-2`   |
| `'h'`               | `+3`   |
| `'i'`, `'j'`        | `+4`   |
| `'t'`, `'T'`        | `-1`   |

<hr>
</details>

<details>
<summary>5</summary>
<hr>

| Character           | Weight |
| ------------------- | ------ |
| `'j'`, `'b'`        | `-1`   |
| `'h'`, `'f'`, `'s'` | `+8`   |
| `'L'`, `'U'`        | `-2`   |
| `'Y'`, `'W'`        | `-3`   |

<hr>
</details>

<details>
<summary>6</summary>
<hr>

| Character                  | Weight |
| -------------------------- | ------ |
| `'r'`                      | `-4`   |
| `'f'`, `'F'`               | `-3`   |
| `'j'`, `'E'`, `'i'`        | `+5`   |
| `'b'`, `'B'`, `'C'`, `'A'` | `+7`   |

<hr>
</details>

<details>
<summary>7</summary>
<hr>

| Character           | Weight |
| ------------------- | ------ |
| `'Y'`, `'M'`, `'z'` | `-4`   |
| `'k'`               | `-3`   |
| `'R'`, `'q'`, `'t'` | `+5`   |
| `'y'`               | `+7`   |

<hr>
</details>

<details>
<summary>8</summary>
<hr>

| Character                  | Weight |
| -------------------------- | ------ |
| `'N'`, `'n'`, `'M'`, `'m'` | `-1`   |
| `'x'`, `'y'`, `'z'`        | `-4`   |
| `'i'`, `'j'`               | `+5`   |
| `'o'`                      | `+8`   |

<hr>
</details>


<details>
<summary>9</summary>
<hr>

| Character                  | Weight |
| -------------------------- | ------ |
| `'a'`                      | `-3`   |
| `'f'`, `'F'`               | `+1`   |
| `'C'`, `'c'`, `'b'`        | `-4`   |
| `'H'`, `'h'`, `'R'`, `'r'` | `-2`   |

<hr>
</details>

At the end, display the string's weight.

### Example

| Character                  | Weight |
| -------------------------- | ------ |
| `'H'`                      | `+2`   |
| `'e'`                      | `+5`   |
| `'l'`                      | `-1`   |
| `'w'`                      | `+3`   |

Sample output:

```
Please, input the string: Hello, world.
The string's weight: 7
```

Explanation:

```
Input string:   H| e| l| l|o|,| w|o|r| l|d
Weights:       +2|+5|-1|-1| | |+3| | |-1|   

=> Sum: 2 + 5 - 1 - 1 + 3 - 1 = 7
