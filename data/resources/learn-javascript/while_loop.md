While writing a program, you may encounter a situation where you need to perform an action over and over again. In such situations, you would need to write loop statements to reduce the number of lines.

JavaScript supports all the necessary loops to ease down the pressure of programming.

## The while Loop
The most basic loop in JavaScript is the while loop which would be discussed in this chapter. The purpose of a while loop is to execute a statement or code block repeatedly as long as an expression is true. Once the expression becomes false, the loop terminates.


### While loop Syntax
The syntax of while loop in JavaScript is as follows −

```
while (expression) {
   Statement(s) to be executed if expression is true
}
```

## Example
Try the following example to implement while loop.


```
let count = 0;
console.log("Starting Loop ");

while (count < 10) {
    console.log("Current Count : " + count + "<br />");
    count++;
}

console.log("Loop stopped!");
```