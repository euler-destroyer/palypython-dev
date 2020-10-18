# Print

In this lesson of Learn Python, you will learn how to use the print function. Specifically, you will understand what it does and its features such as accepting multiple objects and keyword arguments.

The `print()` function is used to display text in the console. If you’re not familiar with the term function, it is something that receives input and returns input. In this case, `print()` receives objects such as strings or numbers and then outputs them to the console. Look at the example and then print your name.

```
print(“E”)
```

Tip: Strings are used to represent text content and are denoted by text surrounded by quotes.

You can also use multiple arguments with the print function and it will output them separated by spaces. If you want to change the character it uses, you can use an argument called sep=. If you want to change the ending from the default next line, you can also use the end= argument. In addition, you can specify a file to write to with file=.

For example,

```
print("Hello", "World", sep=.)
```

will print `Hello.World`.
<MultipleChoiceQuestion
    title="Print Question"
    description="What is the result of this line of code:  `print(“Hi”, “Hello”, sep = “$”, end = “!”)`"
    correctAnswer  = "Hi$Hello!",
    incorrectAnswers = "Hi Hello, Hi $ Hello !, Hi$Hello$!  "
/>


<Problem
    title="Prints"
    description="A printing exercise"
    defaultCode="#Think of a word and then print that word
#by putting into the print function. 
#Remember to use quotations to make sure
#your word is a string!
print()
"
/>