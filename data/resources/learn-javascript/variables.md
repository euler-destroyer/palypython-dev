## Variables

Variables are a way of storing information for later in Javascript. To declare a variable, use "let". Look at the following example

```
let my_nice_message="hello this is my message"// declare a variable
console.log(my_nice_message)//  call the variable
```

This time there are no quotes around the console.log, meaning what is inside will be seen as JS code. my_nice_message is a variable, so it will reference what it was assigned to, in this case was "hello this is my message. EXERCISE: try changing the name of the variable and get the same result

<Problem
    title="variables problem"
    description="do stuff with variables"
    defaultCode="let a = 'e';"
    language="javascript"
/>

Variables are a way of storing information for later in Javascript. To declare a variable, use "let". Look at the following example

```
let my_nice_message="hello this is my message"// declare a variable
console.log(my_nice_message)//  call the variable
```

This time there are no quotes around the console.log, meaning what is inside will be seen as JS code. my_nice_message is a variable, so it will reference what it was assigned to, in this case was "hello this is my message. EXERCISE: try changing the name of the variable and get the same result

Another important part of variables is that they can be re-assigned. If a variable is reassigned, then do not use let the second time. Run this code to see what will happen

```
let message =  "first message"
let message = "second message"// will cause an error
console.log(message)
```

Here is the correct way to do it

```
let message =  "first message"
message = "second message"
console.log(message) // will work just fine

```

remember that variables can only be accessed after they have been assigned, and if you try that, it will cause an error

```
console.log(message) //will cause an error
let message = "hello"
```
