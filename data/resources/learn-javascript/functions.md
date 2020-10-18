A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again. It helps programmers in writing modular codes. Functions allow a programmer to divide a big program into a number of small and manageable functions.

Like any other advanced programming language, JavaScript also supports all the features necessary to write modular code using functions. You must have seen functions like console.log() in the earlier chapters. We were using these functions again and again, but they had been written in core JavaScript only once.

JavaScript allows us to write our own functions as well. This section explains how to write your own functions in JavaScript.

## Function Definition
Before we use a function, we need to define it. The most common way to define a function in JavaScript is by using the function keyword, followed by a unique function name, a list of parameters (that might be empty), and a statement block surrounded by curly braces.

## Syntax


```
function functionname(parameter-list) {
    statements
}
```

## Example

Try the following example. It defines a function called sayHello that takes no parameters 


```
function sayHello() {
    return "Hello there"
}
```


## Calling a Function
To invoke a function somewhere later in the script, you would simply need to write the name of that function as shown in the following code

```
const e = sayHello()
console.log(e)
```

### Function Parameters
Till now, we have seen functions without parameters. But there is a facility to pass different parameters while calling a function. These passed parameters can be captured inside the function and any manipulation can be done over those parameters. A function can take multiple parameters separated by comma.


```
function sayHello(name, age) {
    return name + " is " + age + " years old."
}
```

### The return Statement
A JavaScript function can have an optional return statement. This is required if you want to return a value from a function. This statement should be the last statement in a function.

For example, you can pass two numbers in a function and then you can expect the function to return their multiplication in your calling program.

Example
Try the following example. It defines a function that takes two parameters and concatenates them before returning the resultant in the calling program