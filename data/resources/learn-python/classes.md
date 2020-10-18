# Classes (and Objects)
Since Python is an object-oriented language, objects are the pillar of many programs. What are objects? Well to put it simply, an object is something which contains properties (data) and methods (functions). An example of an object is a car. The properties of a car can include model, color, and mileage. The methods of a car can include drive, brake, and refill gas. 

## Classes ... the Blueprint of an Object
Additionally, classes are like the blueprint of an object. You use classes to define initialization, properties, and methods of the object. Classes are very useful because they organize code, help you keep track of state, store data directly with procedures, use inheritence, and emphasize reusability.

Let's get started on our quest to master classes! We'll continue to use the example of a car while exploring classes.

## Class Keyword
To begin, write the class keyword followed by the name of the class and then a colon (signifies block of code).

```
class Car:
```

## Initialization & Properties
Next, we will move onto the `__init__` function. This function is executed when the class is being initiated and is typically used to define object properties and carry out other initial operations.

```
class Car:

    def __init__(self, model, color):
        # Define properties
        self.model = model
        self.color = color

        # Initial operations
        print("Car class... initialized...)
```

## Self
Notice the self parameter and how it is used to define properties. The `self` keyword is a stand-in for the object and is used to access properties. When ever you use properties, self must be the first parameter.

To use our classes, we can initialize an object as such and then access properties.

```
class Car:
    ...

car = Car("BMW", "silver")
print(car.model) # "BMW"
print(car.color) # "silver"
```

<Problem
    title="Working with __init__"
    description="Using the example above, add another parameter to __init__ called mpg (miles per gallon) and create the corresponding mpg property. Then create a property called miles with a value of 0.
    "
    defaultCode='class Car:

    # Add mpg parameter
    def __init__(self, model, color):
        self.model = model
        self.color = color
        # Replace with mpg property
        # Replace with miles property

# Test
car = Car("BMW", "silver", 30)

print(car.mpg)
print(car.miles)
'
/>

## Methods
Next, let's take a look at class methods. Methods are simply just functions with our class. Note that if you will be accessing class properties within the method, self must be the first parameter.

```
class Car:

    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg = mpg
        self.miles = 0
        self.gas = 14

    def drive(self, miles_driven):
        self.miles += miles_driven
        self.gas -= miles_driven / self.mpg
```

Here's how we use class methods...

```
class Car:
    ...

car = Car("BMW", "silver", 30)

print(car.miles) # 0
print(car.gas) # 14

car.drive(120) 
print(car.miles) # 120
print(car.gas) # 10
```

<Problem
    title="Creating Methods"
    description="Add a method called info which outputs a stylized message about the miles traveled and remaining gas. Add a method called refill with a parameter called gas_refill which increases the gas by that amount."
    defaultCode='class Car:

    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg = mpg
        self.miles = 0
        self.gas = 14

    def drive(self, miles_driven):
        self.miles += miles_driven
        self.gas -= miles_driven / self.mpg

    def info(self):
        pass

    def refill(self, gas_refill):
        pass

# Test
car = Car("BMW", "silver", 30)

car.info()
car.drive(45)
car.info()
car.refill(1)
car.info()
'
/>

And that's all there is to classes. Test your knowledge with this last practice problem.

```
# Parameters are legs of triangle
triangle = RightTriangle(3, 4)

# Attributes
triangle.legs -> [3, 4]
triangle.hypotenuse -> 5
triangle.sides -> [3, 4, 5]

# Methods 
triangle.calc_area() -> 6
triangle.display_info() 
# Creatively display the triangle's information

# Bonus (trig needed)
triangle.calc_angles() -> [36.87, 53.13, 90]
                                                                         
```

<Problem
    title="Class Practice: Right Triangle"
    description="Create a right triangle class with the properties and methods displayed above."
    defaultCode='
class RightTriangle:
    # Code goes here

# Test
triangle = RightTriangle(3, 4)

print(triangle.legs)
print(triangle.hypotenuse)
print(triangle.sides)

print(triangle.calc_area())
triangle.display_info()
'
/>