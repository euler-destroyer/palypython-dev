## conditionals

What if you only wanted to do something conditionally? That is where if and else statements come in. The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed. The basic syntax is 

```
if(condition){
	do something
}else{
	do something else
}
```

Here is an example

```
let my_condition = true
if(my_condition){
	console.log("my condition is true")
}else{
	console.log("my condition is false")
}
```

EXERCISE: change the value of my_condition to false and see what happens.

<Problem
    title="conditionals problem"
    description="change the value of my_condition to false and see what happens."
    defaultCode="
let my_condition = false;
if(my_condition){
	console.log('my condition is true')
}else{
	console.log('my condition is false')
}
    
    "
    language="javascript"

/>

Ofter, conditional statements are used in conjunction with comparison operators, >,< and ===. These operators compare 2 things. For example === checks if 2 things are equal. Be sure not to confuse it with =, which assigns values. Here is an example

```
let user_password = "password123"
let my_password = "very secure"
if( user_password === my_password){
	console.log("that is my password")
}else{
	console.log("that is not my password")
}
```

EXERCISE: try changing what the variable user_password is . The other comparison operators, > and < only work with numbers. They work as expected. See this example

<Problem
    title="conditionals problem 2"
    description="try changing what the variable user_password is"
    defaultCode="
let user_password = 'password123'
let my_password = 'very secure'
if( user_password === my_password){
	console.log('that is my password')
}else{
	console.log('that is not my password')
}
    
    "
    language="javascript"

/>

```
let a = 5
let b = 2
if(a>b){
	console.log("a is bigger than b ")
}else if( a<b){
	console.log("a is less than b")
}else{
	console.log("a is equal to b")
}
```
