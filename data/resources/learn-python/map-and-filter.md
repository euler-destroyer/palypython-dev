# Map and Filter

The `map()` and `filter()` functions in Python allow you to apply a function across iterables (e.g. lists). These functions can be used in place of loops and conditional logic, making your code more efficient.

## Map
Let's imagine we wanted to go through a list of names and convert them to uppercase. Here's what an approach using `for` loops would look like...



```
names = ["alfred", "Laxman", "greg", "sAmAnthA"]
names_upper = []

for name in names:
    names_upper.append(name.upper())

print(names_upper) # ["ALFRED", "LAXMAN", "GREG", "SAMANTHA"]
```

This is the same program with `map()`...


```
names_upper = list(map(lambda x: x.upper(), names))
```

Crazy right! We were able to reduce to the functional code to one readable line. Now let's break down the the various parts of `map()`. The first parameter of map is a function and the second parameter is the iterable you would like to apply that function to. Notice that the list function is wrapped around map. That is because `map()` returns a map object and needs to be converted into a list.

## Lambda
Typically, `lambda` functions are used with `map()` and `filter()`. They are simply used to write short, one line functions. Lambda functions are useful because they allow you to use functions with parameters or methods such as `string.upper()` (see example above).

```
is_even = lambda n: n % 2 == 0
print(is_even(4)) # True
```

<Problem
    title="Map Practice: Rounding"
    description="Create a new list of rounded number with the map function."
    defaultCode='numbers = [23.33, 1, 90.9, 45.43, 3.1415, 6.28]

rounded_numbers = "Replace with map"

print(rounded_numbers) 
# [23, 1, 91, 45, 3, 6]
'
/>

## Filter

The filter function operates on the same principles as map, but is used to filter out elements which don't meet a condition and keep those that do. Look at this example which filters out all odd numbers.

```
numbers = [1, 2, 3, 4, 5]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))

print(even_numbers) # [2, 4]
```

Note that for `filter()`, the function must return a boolean (`True` or `False`).

<Problem
    title="Words Without Vowels"
    description="Use filter to create a list with only nonvowel words from the given list."
    defaultCode='words = ["apple", "crypt", "sphinx", "dryly", "thyme"]

non_vowel_words = "Replace with filter"

print(non_vowel_words) 
# ["crypt", "dryly"]
'
/>