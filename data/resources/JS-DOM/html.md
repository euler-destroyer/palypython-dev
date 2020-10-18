## Changing the HTML Output Stream

In JavaScript, `document.write()` can be used to write directly to the HTML output stream:


<Problem
    title="document.write"
    defaultCode='
<!DOCTYPE html>
<html>
<body>

<script>
document.write(Date());
</script>

</body>
</html>
    '
    language="html"

/> 


## Changing HTML Content
The easiest way to modify the content of an HTML element is by using the innerHTML property.

To change the content of an HTML element, use this syntax:

`document.getElementById(id).innerHTML = new HTML`
This example changes the content of a `<p>` element:

<Problem
    title="innerHTML"
    defaultCode='
<html>
<body>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML = "New text!";
</script>

</body>
</html>
    '
    language="html"

/> 

Example explained:

- The HTML document above contains a `<p>` element with id="p1"

- We use the HTML DOM to get the element with id="p1"

- A JavaScript changes the content (innerHTML) of that element to "New text!"

This example changes the content of an `<h1>` element:

<Problem
    title="new heading"
    defaultCode='
<!DOCTYPE html>
<html>
<body>

<h1 id="id01">Old Heading</h1>

<script>
var element = document.getElementById("id01");
element.innerHTML = "New Heading";
</script>

</body>
</html>
    '
    language="html"

/> 


## Changing the Value of an Attribute
To change the value of an HTML attribute, use this syntax:

`document.getElementById(id).attribute = new value`
This example changes the value of the src attribute of an `<img>` element:

<Problem
    title="new image src"
    defaultCode='
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "/images/nextjs.png";
</script>

</body>
</html>
    '
    language="html"

/> 