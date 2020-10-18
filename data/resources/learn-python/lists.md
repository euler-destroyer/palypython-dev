#Python Arrays.
An Array is a collection which is ordered and changeable. In Python, arrays. are written with square brackets. For example,


```
sample_list = ["apple", "banana", "cherry"]
```
Items are accessed by their index in the array


```
thislist = ["apple", "banana", "cherry"]
print(thislist[1]) ##will print "banana"
```
You can loop over a list using a for loop.

```
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
  print(fruit)
```


Arrays have several related methods associated with them
- append(item) - add item to the end of the array
- insert(index, item) - put in an item at the given index 
- remove(item) - remove the item from the array
- pop(index) - remove the item at that index of the array


```
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")
print(fruits) ##will print ["apple", "banana", "cherry","orange"]
fruits.remove("apple")
print(fruits) ##will print ["banana", "cherry","orange"]
fruits.insert(2,"grape")
print(fruits) ##will print ["banana", "cherry","grape", "orange"]
fruits.pop(0)
print(fruits) ##will print [ "cherry","grape", "orange"]
```

<Problem
    title="Lists problem"
    description="Write a Python program to get the largest number from a list"
    defaultCode="
def largest_number(list):
    pass
print(largest_number([2,3,4,6,-10,0,56,8,3,3])) #should print 56
    "
/>