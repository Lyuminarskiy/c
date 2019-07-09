# 9. Standard library: miscellaneous

## 9.1. String handling: `string.h`

Execute the task using the functions from `string.h`.

Variants (click to open):

<details>
<summary>1</summary>
<hr>

Combine the two strings and display the result:

```c
char destination[20] = "Bombarda ";
char source[] = "Maxima";
```

<hr>
</details>

<details>
<summary>2</summary>
<hr>

Create and compare two strings and show the message if they are equal.

<hr>
</details>

<details>
<summary>3</summary>
<hr>

Create a string, find the length of the string, and display the result.

<hr>
</details>

<details>
<summary>4</summary>
<hr>

Combine the two strings and display the result:

```c
char destination[20] = "Avada";
char source[] = " Kedavra";
```

<hr>
</details>

<details>
<summary>5</summary>
<hr>

Create and compare two strings and show the message if they are equal.

<hr>
</details>

<details>
<summary>6</summary>
<hr>

Create a string, find the length of the string, and display the result.

<hr>
</details>

### Reference (9.1)

This header file defines several functions to manipulate strings and arrays. Here are some of them:

```c
/**
 * Appends a copy of the source string to the destination string.
 * The terminating null character in destination is overwritten by the first
 * character of source, and a null-character is included at the end
 * of the new string formed by the concatenation of both in destination.
 *
 * @param destination Pointer to the destination array,
 * which should contain a string, and be large enough
 * to contain the concatenated resulting string.
 *
 * @param source String to be appended. This should not overlap destination.
 *
 * @return destination is returned.
 */
char* strcat(char* destination, const char* source);
```

```c
/**
 * Compares the string str1 to the string str2.
 * This function starts comparing the first character of each string.
 * If they are equal to each other, it continues with the following pairs until
 * the characters differ or until a terminating null-character is reached.
 *
 * @param str1 String to be compared.
 * @param str2 String to be compared.
 *
 * @return An integral value indicating the relationship between the strings:
 * !=0 - the contents the strings are different.
 * ==0 - the contents of both strings are equal.
 */
int strcmp(const char* str1, const char* str2);
```

```c
/**
 * Returns the length of the string str.
 * The length of a C string is determined by the terminating null-character:
 * a string is as long as the number of characters between the beginning
 * of the string and the terminating null character (without including
 * the terminating null character itself).
 *
 * @param str A string.
 * @return The length of string.
 */
size_t strlen(const char* str);
```

## 9.2. Mathematical operations and transformations: `math.h`

Create the `f()` function using the functions from `math.h`:

```c
double f(double x);
```

The function should return the result of the mathematical formula:

| Variant | Mathematical formula                                                                           |
| ------- | ---------------------------------------------------------------------------------------------- |
| 1       | $f(x) = \frac{ sin^{2}(x) + cos^{2}(x) }{ e^{x} }$                                             |
| 2       | $f(x) = \sqrt{ lg(e^{x}) + x^{8} }$                                                            |
| 3       | $f(x) = \vert x^{9} + 2x^{5} - 10x^{3} \vert$                                                  |
| 4       | $f(x) = \frac{ e^{x} + e^{-x} }{ lg^{2}(x) }$                                                  |
| 5       | $f(x) = \big( \frac{ sin(x) }{ cos(x) } \big)^{2} + \big( \frac{ cos(x) }{ sin(x) } \big)^{2}$ |
| 6       | $f(x) = ln(x^{5}) + \vert cos^{3}(x) - sin^{3}(x) \vert$                                       |

Demonstrate at least three examples of using the `f()` function in the `main()` function.

### Reference (9.2)

This header file defines a set of functions to compute common mathematical operations and transformations. Here are some of them:

```c
/**
 * Computes the sine of an angle of x radians.
 *
 * @param x Value representing an angle expressed in radians.
 * @return Sine of x radians.
 */
double sin(double x);
```

```c
/**
 * Computes the cosine of an angle of x radians.
 *
 * @param x Value representing an angle expressed in radians.
 * @return Cosine of x radians.
 */
double cos(double x);
```

```c
/**
 * Computes the natural logarithm of x.
 *
 * @param x Value whose logarithm is calculated.
 * @return Natural logarithm of x.
 */
double log(double x);
```

```c
/**
 * Computes the common (base-10) logarithm of x.
 *
 * @param x Value whose logarithm is calculated.
 * @return Common logarithm of x.
 */
double log10(double x);
```

```c
/**
 * Computes the base-e exponential function of x,
 * which is e raised to the power x.
 *
 * @param x Value of the exponent.
 * @return Exponential value of x.
 */
double exp(double x);
```

```c
/**
 * Computes the absolute value of x.
 *
 * @param x Value whose absolute value is returned.
 * @return The absolute value of x.
 */
double abs(double x);
```

```c
/**
 * Computes the square root of x.
 *
 * @param x Value whose square root is computed.
 * @return Square root of x.
 */
double sqrt(double x);
```

```c
/**
 * Computes the base raised to the power exponent.
 *
 * @param base Base value.
 * @param exponent Exponent value.
 * @return The result of raising base to the power exponent.
 */
double pow(double base, double exponent);
```

## 9.3. Character handling: `ctype.h`

Read a character from the standard input. Using the functions from `ctype.h` check if the character ...

| Variant | Description                     |
| ------- | ------------------------------- |
| 1       | ... is alphabetic.              |
| 2       | ... is decimal digit.           |
| 3       | ... is hexadecimal digit.       |
| 4       | ... is a punctuation character. |
| 5       | ... is lowercase letter.        |
| 6       | ... is uppercase letter.        |

### Reference (9.3)

This header file defines a set of functions to classify and transform individual characters. Here are some of them:

```c
/**
 * Checks whether c is an alphabetic letter.
 *
 * @param c Character to be checked, casted to an int, or EOF.
 * @return A value different from zero (i.e., true) if indeed
 * c is an alphabetic letter. Zero (i.e., false) otherwise.
 */
int isalpha(int c);
```

```c
/**
 * Checks whether c is a decimal digit character.
 *
 * @param c Character to be checked, casted to an int, or EOF.
 * @return A value different from zero (i.e., true) if indeed
 * c is a decimal digit. Zero (i.e., false) otherwise.
 */
int isdigit(int c);
```

```c
/**
 * Checks whether c is a hexadecimal digit character.
 *
 * @param c Character to be checked, casted to an int, or EOF.
 * @return A value different from zero (i.e., true) if indeed
 * c is a hexadecimal digit. Zero (i.e., false) otherwise.
 */
int isxdigit(int c);
```

```c
/**
 * Checks whether c is a punctuation character.
 *
 * @param c Character to be checked, casted to an int, or EOF.
 * @return A value different from zero (i.e., true) if indeed
 * c is a punctuation character. Zero (i.e., false) otherwise.
 */
int ispunct(int c);
```

```c
/**
 * Checks whether c is a lowercase alphabetic letter.
 *
 * @param c Character to be checked, casted to an int, or EOF.
 * @return A value different from zero (i.e., true) if indeed
 * c is a lowercase alphabetic letter. Zero (i.e., false) otherwise.
 */
int islower(int c);
```

```c
/**
 * Checks whether c is a uppercase alphabetic letter.
 *
 * @param c Character to be checked, casted to an int, or EOF.
 * @return A value different from zero (i.e., true) if indeed
 * c is a uppercase alphabetic letter. Zero (i.e., false) otherwise.
 */
int isupper(int c);
```

## 9.4. String conversion: `stdlib.h`

Read an integer or a double from the standard input and save it as a string. Using the functions from `stdlib.h` try to convert the string ...

| Variant | Description     |
| ------- | --------------- |
| 1       | ... to integer. |
| 2       | ... to double.  |
| 3       | ... to integer. |
| 4       | ... to double.  |
| 5       | ... to integer. |
| 6       | ... to double.  |

Display the result.

### Reference (9.4)

This header file defines several general purpose functions, including dynamic memory management, random number generation, communication with the environment, integer arithmetics, searching, sorting and converting. Here are some of them:

```c
/**
 * Parses the string str interpreting its content as an integral number,
 * which is returned as a value of type int.
 *
 * @param str String beginning with the representation of an integral number.
 * @return The converted integral number as an int value.
 */
int atoi(const char* str);
```

```c
/**
 * Parses the C string str, interpreting its content as a floating point number
 * and returns its value as a double.
 *
 * @param str String beginning with the representation
 * of a floating point number.
 * @return The converted floating point number as a double value.
 */
double atof(const char* str);
```

## 9.5. Pseudo-random sequence generation: `stdlib.h`

Declare an array of `10` integer-typed values. Initialize it by random values using the `rand()` function from `stdlib.h` in the range ...

| Variant | Description                |
| ------- | -------------------------- |
| 1       | ... from `0` to `99`.      |
| 2       | ... from `-400` to `-390`. |
| 3       | ... from `140` to `150` .  |
| 4       | ... from `-99` to `99`.    |
| 5       | ... from `-9` to `9` .     |
| 6       | ... from `-99` to `0` .    |

Create a file (programmatically) named `random.txt` and save the values from the array into it.

### Reference (9.5)

Syntax of the `rand()` function:

```c
/**
 * Returns a pseudo-random integral number in the range between 0 and RAND_MAX.
 *
 * @return An integer value between 0 and RAND_MAX.
 */
int rand();
```