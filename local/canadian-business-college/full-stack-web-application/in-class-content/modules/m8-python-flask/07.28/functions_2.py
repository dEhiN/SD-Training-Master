# functions in python

# define a function with parameter
# parameters - val1, val2 any data type
def demo_function(val1, val2):
    print(val1)
    print(val2)


# passing keywords argument to parameters while calling function
demo_function(val2="World", val1="Hello")

# functions in python


# define a function with parameter
# parameters - val1, val2 any data type
def demo_function(val1, val2="Test"):
    print(val1)
    print(val2)


# passing value for both parameters so val2 default value will be replaced
demo_function(val1="Hello", val2="World")

# letting the default value apply for val2
demo_function(val1="One")

# functions in python


# define a function with parameter
# parameters - val1, val2 number data type
# function returns multiplication of two parameters as numbers
def demo_function(val1, val2):
    return val1 * val2


# store function return to a variable for usage
result_data = demo_function(10, 5)
print(result_data)
