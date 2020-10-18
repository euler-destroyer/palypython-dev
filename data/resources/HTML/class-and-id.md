The HTML class attribute is used to specify a class for an HTML element.

Multiple HTML elements can share the same class.

## Using The class Attribute
The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.
In the following example we have three `<div>` elements with a class attribute with the value of "city". All of the three `<div>` elements will be styled equally according to the .city style definition in the head section

<Problem
    title="classes"
    defaultCode='
<!DOCTYPE html>
<html>
<head>
<style>
.city {
  background-color: tomato;
  color: white;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
}
</style>
</head>
<body>
<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>
<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>
<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>
</body>
</html>
    '
    language="html"

/> 


## The Syntax For Class
To create a class; write a period (.) character, followed by a class name. Then, define the CSS properties within curly braces {}:


## Multiple Classes
HTML elements can belong to more than one class.
To define multiple classes, separate the class names with a space, e.g. <div class="city main">. The element will be styled according to all the classes specified.
In the following example, the first <h2> element belongs to both the city class and also to the main class, and will get the CSS styles from both of the classes: 

<Problem
    title="mutliple classes"
    defaultCode='
<h2 class="city main">London</h2>
<h2 class="city">Paris</h2>
<h2 class="city">Tokyo</h2>
    '
    language="html"

/> 

## Different Elements Can Share Same Class
Different HTML elements can point to the same class name.
In the following example, both <h2> and <p> points to the "city" class and will share the same style:

<Problem
    title="different elements"
    defaultCode='
<h2 class="city">Paris</h2>
<p class="city">Paris is the capital of France</p>
    '
    language="html"

/> 