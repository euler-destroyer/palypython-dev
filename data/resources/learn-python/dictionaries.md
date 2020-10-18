#Dictionaries

A dictionary is a collection which is unordered, changeable and indexed. In Python dictionaries are written with curly brackets, and they have keys and values.

```
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)
```
## Accessing Items
You can access the items of a dictionary by referring to its key name, inside square brackets:

```
x = thisdict["model"]
```
## Change Values
You can change the value of a specific item by referring to its key name:


Change the "year" to 2018:

```
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["year"] = 2018
```

## Loop Through a Dictionary
You can loop through a dictionary by using a for loop.

When looping through a dictionary, the return value are the keys of the dictionary, but there are methods to return the values as well.


Print all key names in the dictionary, one by one:

```
for x in thisdict:
  print(x)
```

Example
Print all values in the dictionary, one by one:

```
for x in thisdict:
  print(thisdict[x])
```
# Dict Cheat Sheet
Dictionaries are a very interesting data type in python. The key concept comes down to an unordered set of key-value pairs. They have many uses in python, from user tables to other stuff.
Here is a cheat sheet for the video

```
## sample form of a JSON
my_dict = {
	"key":"value",
	"some_other_ley":"some_other_value"
}
##access keys
print(my_dict["key"])

##alter keys
my_dict["key"]="eee"
print(my_dict)
```


<Problem
    title="Dict problem"
    description=" write a program to combine 2 lists of the same length into a python dictionary"
    defaultCode="
def list_to_dict(l1,l2):
    pass
list1=['a','b','c']
list2=['w','x','y']
print(list_to_dict(list1,list2))
#should print
#{
#    'a':'w',
#    'b':'x'
#    'c':'y'
#}
    "
/>