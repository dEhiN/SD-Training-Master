# This is my Module 8, Assignment 2 for the CBC FSWAD diploma

"""
Part 1: Functions Without Parameters

1. Write a function called greet_user that prints: Hello, welcome to Python class!

2. Write a function called show_python_tip that prints: Tip: Use clear variable names in your code.

3. Test it: Call both functions to display their messages on the screen.
"""

def greet_user():
    print("Hello, welcome to Python class!")

def show_python_tip():
    print("Tip: Use clear variable names in your code.")

print("Part 1: Functions Without Parameters")
greet_user()
show_python_tip()


"""
Part 2: Functions With Parameters

1. Write a function called greet_by_name(name) that takes a name as an argument and prints: Hello <name>, nice to meet you! (Example: greet_by_name("Alex") should print: Hello Alex, nice to meet you!)

2. Write a function called add_numbers(a, b) that returns the sum of two numbers. (Example: add_numbers(3, 5) should return 8)

3. Test it: Call greet_by_name with your own name. Call add_numbers, save the result in a variable, and print that variable.
"""

def greet_by_name(name):
    print(f"Hello {name}, nice to meet you!")

def add_numbers(a, b):
    return (a + b)

print("\nPart 2: Functions With Parameters")
greet_by_name("David")
sum_result = add_numbers(15, 20)
print(sum_result)