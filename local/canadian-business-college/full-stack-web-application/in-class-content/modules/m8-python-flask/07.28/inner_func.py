# functions in python

# define a function with parameter
# parameters - val1, val2 number data type
# function returns multiplication of two parameters as numbers
def demo_function(val1, val2):
    # declaring a local scope variable inside the function
    return_val = val1 * val2

    # declaring a function inside a function
    def say_hello():
        print("Hello from the nested function")
        # access parents local scope variable as parent function shares with all its children
        print(return_val)

    say_hello()

    return return_val


# return_val is local scope hence cannot be used outside of the function
# print(return_val)

# store function return to a variable for usage
result_data = demo_function(10, 5)
print(result_data)
