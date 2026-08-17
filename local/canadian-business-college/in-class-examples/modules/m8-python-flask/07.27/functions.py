# functions in python

# define a function
def demo_function():
    print("hello from inside the function")
    print("bye")


# calling function
demo_function()
demo_function()
demo_function()
demo_function()

# functions in python


# define a function with parameter
# parameters - Name as string
def demo_function(name):
    print("The users name is - " + name)


# calling function with arguments
demo_function("Mark")
demo_function("Jacob")
demo_function("John")
demo_function("Jane")
demo_function("doe")

# functions in python


# define a function with parameter
# parameters - Name as string
def demo_function(name):
    print("The users name is - " + name)


# parameters - num1 as number, num2 as number
def add_function(num1, num2):
    print(num1 + num2)


# calling function with arguments
demo_function("Mark")
demo_function("Jacob")

add_function(10, 20)
add_function(100, 200)
add_function(5, 20)
add_function(1.01, 20)

# functions in python


# define a function with parameter
# parameters - arbitrary args
def demo_function(*args):
    # all arguments passed come in as tuple inside the function
    print(args)
    for item in args:
        print(item)


demo_function("Jacob", 100, True, 200)

# functions in python


# define a function with parameter
# parameters - arbitrary args
def demo_function(**args):
    # all arguments passed come in as dictionary inside the function
    print(args)
    for item, value in args.items():
        print(item, value)


demo_function(name="jacob", age=40, city="Toronto", hobby="coding")

# functions in python


# define a function with parameter
# parameters - arbitrary args
def demo_function(**args):
    # all arguments passed come in as dictionary inside the function
    print(args)
    for item, value in args.items():
        print("the " + item + " of the user is - " + str(value))


demo_function(name="jacob", age=40, city="Toronto", hobby="coding", car="fiat")
