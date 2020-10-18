## What is CSS?
Cascading Style Sheets (CSS) is used to format the layout of a webpage.
With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!

##  Using CSS
CSS can be added to HTML documents in 3 ways:

- Inline - by using the style attribute inside HTML elements

- Internal - by using a `<style>` element in the `<head>` section

- External - by using a `<link>` element to link to an external CSS file

The most common way to add CSS, is to keep the styles in external CSS files. However, in this tutorial we will use inline and internal styles, because this is easier to demonstrate, and easier for you to try it yourself.

# Inline CSS
An inline CSS is used to apply a unique style to a single HTML element.
An inline CSS uses the style attribute of an HTML element.
The following example sets the text color of the `<h1>` element to blue, and the text color of the `<p>` element to red:



<Problem
    title="inline-styles"
    defaultCode='
<h1 style="color:blue;">A Blue Heading</h1>

<p style="color:red;">A red paragraph.</p>
    '
    language="html"

/> 

##Internal CSS

An internal CSS is used to define a style for a single HTML page.
An internal CSS is defined in the `<head>` section of an HTML page, within a `<style>` element.
The following example sets the text color of ALL the `<h1>` elements (on that page) to blue, and the text color of ALL the <p> elements to red. In addition, the page will be displayed with a "powderblue" background color: 


<Problem
    title="internal-styles"
    defaultCode='
<!DOCTYPE html>
<html>
<head>
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
    '
    language="html"

/> 

## External CSS
An external style sheet is used to define the style for many HTML pages.
To use an external style sheet, add a link to it in the `<head>` section of each HTML page:


<Problem
    title="external-styles"
    defaultCode='
<!DOCTYPE html>
<html>
<head>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://gist.githubusercontent.com/rajeevedmonds/4706380/raw/b6a999ee96d0e6a89f6b6ae751a79997fda76921/sample-style.css" crossorigin="anonymous">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
    '
    language="html"

/> 