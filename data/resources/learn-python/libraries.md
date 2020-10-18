#Python Libraries

Libraries are modules of code that we can import into our programs that contain premade functions, either made by other users or built into Python itself. They are useful utilities that we can use to avoid implementing a specific function or a specific algorithm ourselves.

An example of a useful library is the math library which contains many math functions

```
import math

print(math.sqrt(2))
print(math.floor(5.5))
print(math.ceil(5.5))
```

We import libraries using the `import` keyword followed by the name of the library to import. Since math is a native library, we don't need to install it but if you are using any user-made libraries remember to install it. Then, we can access any function of the library using the dot operator and then the function name, similar to classes and objects.

# Importing libraries

Besides the basic import, there are several other ways to import a library that can be used depending on the situation.

```
import math as m
print(m.sqrt(2))
```

The as keyword allows us to shorten library names if they happen to be exceedingly long into any alias

```
from math import sqrt, floor
print(sqrt(2))
print(floor(5.5))
```

We can use `from` to specify specific functions to import. Often if we don't want to use every single function we can only import the functions we want. Note that if you use `from` you don't need a keyword for the functions anymore, similar to destructing assignment in JavaScript.

```
from math import *
print(sqrt(2))
print(ceil(5.5))
```

Nobody uses this but we can import all the functions from math, and then use all of them without a keyword.