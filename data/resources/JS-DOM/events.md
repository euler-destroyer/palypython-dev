HTML DOM allows JavaScript to react to HTML events:



## Reacting to Events
A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.

To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:

`onclick=JavaScript`
Examples of HTML events:

- When a user clicks the mouse

- When a web page has loaded

- When an image has been loaded

- When the mouse moves over an element

- When an input field is changed

- When an HTML form is submitted

- When a user strokes a key

In this example, the content of the `<h1>` element is changed when a user clicks on it:

<Problem
    title="click event"
    defaultCode='
<!DOCTYPE html>
<html>
<body>

<h1 onclick="this.innerHTML = `Ooops!`">Click on this text!</h1>

</body>
</html>
    '
    language="html"

/> 
This is a bad practice. Nobody uses this above method. Let's look at a better method.
In this example, a function is called from the event handler:

<Problem
    title="a best practice"
    defaultCode='
<!DOCTYPE html>
<html>
<body>

<h1 onclick="changeText(this)">Click on this text!</h1>

<script>
function changeText(id) {
  id.innerHTML = "Ooops!";
}
</script>

</body>
</html>
    '
    language="html"

/> 

## HTML Event Attributes
To assign events to HTML elements you can use event attributes.


## Assign Events Using the HTML DOM
The HTML DOM allows you to assign events to HTML elements using JavaScript:


<Problem
    title="assigned events"
    defaultCode='
<!DOCTYPE html>
<html>
<body>

<p>Click  to execute the displayDate() function.</p>

<button id="myBtn">Try it</button>

<p id="demo"></p>

<script>
document.getElementById(`myBtn`).onclick = displayDate;

function displayDate() {
  document.getElementById(`demo`).innerHTML = Date();
}
</script>

</body>
</html> 

    '
    language="html"

/> 



## The onmouseover and onmouseout Events


The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, or out of, an HTML element



<Problem
    title="mouse"
    defaultCode='
<!DOCTYPE html>
<html>
    <body>
        <p onmouseover="mOver(this)" onmouseout="mOut(this)" style="background-color:red;width:120px;height:20px;padding:40px;">
            Mouse Over Me
        </p>
        <script>
            function mOver(obj) {
                obj.innerHTML = `Thank You`
            }
            function mOut(obj) {
                obj.innerHTML = `Mouse Over Me`
            }
        </script>
    </body>
</html> 

    '
    language="html"

/> 






## The onmousedown, onmouseup and onclick Events


The onmousedown, onmouseup, and onclick events are all parts of a mouse-click. First when a mouse-button is clicked, the onmousedown event is triggered, then, when the mouse-button is released, the onmouseup event is triggered, finally, when the mouse-click is completed, the onclick event is triggered.onclick event is triggered.onclick event is triggered.onclick event is triggered.onclick event is triggered.onclick event is triggered.onclick event is triggered.onclick event is triggered.