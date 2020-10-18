# Input

In this lesson of Learn Python, you will learn how to take input from the user. 

The input function is used to take input from the user. See example below.

```
input("Type something")
```

So what can we do with this? We can use that to make our program more interactive. The functions essentially takes the user input, and gives it back. We can store the input in a variable like this:

```
words = input("Type Something")
```

Then, we can do more with that variable such as printing it. Note that we don't have to store our results in a variable and can we can literally plug this in the print function. (This will make more sense after the Functions lesson.)

```
print(input("Type Something"))
```

Note that all the input that function takes is a string. So if you want to get a number, you will have to use the `int()` function, which will be covered more extensively in the next lesson.

We can use our other techniques with print such as putting multiple objects together to actually do something useful now:

```
print("Your name is ", input("What is your name? "))
```

<Problem title="Inputs" description="Take an input and print it" defaultCode="#Get your input here
user_Input = 
#Print the input here
print()
"/>