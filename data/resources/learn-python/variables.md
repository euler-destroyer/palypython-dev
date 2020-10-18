# Variables

In this lesson of Learn Python, you will learn how to use variables. 

Variables are simply something you store values in. They first get assigned an initial value, which can be changed. You can assign them any type of value you like, such as strings we used in our print function last class or numbers like example below. See the example below which shows a variable getting assigned a value. 

```
x=1
```

We can still use our print function like we have before, but now we can reference the variable directly like this:

```
print(x)
```

We can also mix up strings and variables in printing like this:

```
name = Sean
print("My name is ", name)
```

When we get to more complicated material, having these variables can really make our lives easier.

You can also assign values to multiple variables in one line by separating them by commas:

```
x, y = 1, "hi"
```

which assigns the variable `x` with the value `1` and the variable `y` with the value `"hi"`.

Since variables are meant to be for ease of use, we have to name them in a useful way. Note that variable names can only start with an underscore or a letter. For variables that use multiple words, we put underscores between the words, so that it's more readable. For example, `first_name` or `favorite_color`. We call this style of naming variables **snake case** because of how the bodies of snakes go up and down. It's also the most commonly used naming convention in Python.

<Problem
    title="Variables"
    description="A practice problem for variables"
    defaultCode="
#Here is a variable! You can change its value
myVariable = 'I am a variable'
#Try to print myVariable.
print()
"
/>