# functions in python

# declaring variable as global which will be accessible from anywhere throughout the code
my_var = "hello from the outside as global variable"


# define a function with parameter
# parameters - val1, val2 number data type
# function returns multiplication of two parameters as numbers
def demo_function(val1, val2):
    # declaring a local scope variable inside the function
    return_val = val1 * val2
    print(my_var)
    return return_val


# store function return to a variable for usage
result_data = demo_function(10, 5)
print(result_data)
print(my_var)

# functions in python


# define a function with parameter
# parameters - val1, val2 number data type
# function returns multiplication of two parameters as numbers
def demo_function(val1, val2):
    # declaring a local scope variable inside the function
    return_val = val1 * val2
    # declaring a naturally local variable but as global
    global my_var
    my_var = "Hello from the function"
    print(my_var)
    return return_val


# store function return to a variable for usage
result_data = demo_function(10, 5)
print(result_data)
print(my_var)
