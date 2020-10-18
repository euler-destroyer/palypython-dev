#Loops 

Loops allow you to repeatedly execute a piece of code. Instead of pasting the same set of lines a hundred times, instead we can use loops. The two main types of looks are for loops and while loops. For loops let us repeat a task a certain number of times, and while loops repeat until a condition is met or until they are stopped.

```
for x in range(5):
    print(x)
```

The above example is a simple for loop using the `range` function to generate a range of numbers. An important part of for loops is the iterator variable. They are temporary variables generated to execute the loop. In this example, our iterator variable is x. This code tells python to generate a variable x, and for each x in the range from 0 to 5, execute the code inside of the loop once.

```
x = -10
while (x < 0):
	x += 1
print(x)
```

The while loop is a bit more straightforward to understand. Like conditionals, we can put a condition inside of the while loop and the code will execute while the condition holds true.

## Using loops with data structures

Loops can help us iterate through data structures, or access every element inside of them. If we have a list we can use a for loop to get every element of the list.

```
numbers = [1, 3, 3, 7]
for number in numbers:
    print(number)
```

Instead of using the range function to generate a specific set of numbers, we can tell Python to select every number inside of the list and then print them. We can also use for loops with strings as you can think of them like an array of characters.

```
best_language = "javascript"
for letter in best_language:
    print(letter)
```

Note that you can name your iterator variables anything you want, so it would be a good idea to pick descriptive names to help you keep track of what is being iterated.

## Using loops

Instead of only printing stuff out inside our loops, let's look at something useful we can do with them. If we wanted to multiply every value inside of an array by 2, we could use a for loop.

```
numbers = [1, 3, 3, 7]
for i in range(len(numbers)):
    numbers[i] *= 2
print(numbers)
```

Notice that instead of directly iterating through numbers, we have to use the range function to get all the indexes of the elements. This allows us to assign values to those indexes and change the array.

<Problem
    title = "Practice with Loops"
    description = "Use any type of loop to print out all the numbers that are divisible by either 3 or 7 from 0 to 100"
    defaultCode = ""
/>