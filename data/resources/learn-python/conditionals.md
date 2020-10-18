#Conditional Logic in Python

Conditionals and boolean logic are fundamental parts of any programming language. They let us test conditions and also select when certain parts of programs should be executed over others. Let's look at an example:

```
if (x < 0):
	print("negative")
else:
	print("non-negative")
```

This simple program will check whether a number is negative or not. First, we test if `x < 0`. If this is true, then we print `negative` to the console. Otherwise, we print out `non-negative`.

Every conditional statement starts with an `if` in python. Then after the if comes the condition to check. If that condition is true, then the block of code after the `if` executes (as indicated by the indent). Otherwise, the code after `else` executes.

We can also include `else if` statements after the `if` that check if another condition is true. In the case that the first condition is not true, the `else if` conditions will all be checked in order until the end is reached.

```
if a:
    ...
else if b:
    ...
else if c:
    ...
else:
    ...
```

## Boolean Logic

Python supports all of the the usual boolean logic functions. They can be used in conjunction with if/else statements. You can use the math logic operators such as

- **>** less than
- **<** greater than
- **==** equals to (double = for comparison)
- **!=** not equals

and the logical operators

- is
- and
- or
- not

All of these operators are mostly self explanatory and can be used together:

```
num1 = 5
num2 = 10

if (num1 == num2):
	print("equal")
else if (num1 > num2):
	print("num1 is larger")
else:
	print("num2 is larger")
```

## Using conditionals

<Problem
    title = "Practice with Conditionals"
    description = "Improve the code provided to check whether a number is positive, negative, or 0."
    defaultCode = "
if (x < 0):
	print(\"negative\")
else:
	print(\"non-negative\")
"
>

## Math in Conditions

Python lets you use math expressions in conditions also. Think of it like writing your own Python code within the expression. Anything that can be evaluated can be checked.

```
if (x + 5 >= 7):
    print("x is larger than or equal to 2")
else:
    print("x is smaller than 2")
```

<Problem
    title = "Conditionals Challenge"
    description = "Write function which uses the mod operator (%) to determine if a year is a leap year. Remember that the rules of leap years are:

 - The year must be evenly divisible by 4;
 - If the year can also be evenly divided by 100, it is not a leap year;
unless...
 - The year is also evenly divisible by 400. Then it is a leap year.
    "
    defaultCode = "def is_leap_year(year):
    pass

print(is_leap_year(2000))
print(is_leap_year(1354))
print(is_leap_year(1234))
print(is_leap_year(2020))
"
/>