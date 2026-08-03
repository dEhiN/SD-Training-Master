# This is my Module 8, Assignment 2 for the CBC FSWAD diploma

import math
import random

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


"""
Part 3: Using Built-in Packages

1. Use the math module:

- Import the math module at the top of your file.

- Write a function called find_square_root(number) that returns the square root of the number using math.sqrt(). (Example: find_square_root(16) → 4.0)

2. Use the random module:

- Import the random module at the top of your file.

- Write a function called roll_dice() that returns a random number between 1 and 6 using random.randint().

3. Test it: Call both functions and print their results. (Example output for dice: You rolled a 4)
"""

def find_square_root(number):
    return math.sqrt(number)

def roll_dice():
    return random.randint(1, 6)

print("\nPart 3: Using Built-in Packages")
print(find_square_root(16))
print(roll_dice())


"""
Part 4: Variable Scope (Local vs. Global)

1. Create a global variable called coding_language and set it to "Python".

2. Write a function called demonstrate_scope():

3. Inside the function, create a local variable with the exact same name (coding_language) and set it to "JavaScript".

4. Print the local variable from inside the function. (Example: Inside function: JavaScript)

5. Test it:

- Call demonstrate_scope().

- Print the coding_language variable outside the function to prove that the global variable hasn't changed. (Example: Outside function: Python)
"""

coding_language = "Python"

def demonstrate_scope():
    coding_language = "JavaScript"
    print(f"Inside function: {coding_language}")

print("\nPart 4: Variable Scope (Local vs. Global)")
demonstrate_scope()
print(f"Outside function: {coding_language}")
