#Functions in Python

Functions are blocks of code we can define that execute some task. They are useful because allow us to modularize our code and organize it into sections. Instead of pasting the same chunk of code every time we want to do something, we can define a function with it and then call the function. Let's jump straight into an example:

```
def my_function():
    print("hello world!")

my_function()
```

We can define functions using the `def` keyword in Python. Next comes the name of the function, and then parentheses to hold the arguments of the function which we will see how to use in the next section. Then, a block of code defines what the function does, and we can call it by using those same parentheses.

## Arguments of functions

Just like functions in math, functions in Python have inputs (arguments) and outputs. This makes them more flexible and more useful. We can pass in values to the function to tell it what to do.

```
def add_five(num):
    num += 5
    return num

sum = add_five(5)
print(sum)
```

We specify the name of the arguments for the function inside of the parentheses when we first define it, and then we can pass the values in when we call them. And then we can return values using the `return` keyword. A return isn't necessary, but make sure that if you want the function to return a usable value you include it in your code.

<Problem
    title = "Functions practice"
    description = "Write a function which returns both the sum and the product of two numbers as a tuple."
    defaultCode = "def sum_and_product(num1, num2):
    pass

print(sum_and_product(1, 3))
print(sum_and_product(3, 7))"
/>