# This is my Module 8, Assignment 2 for the CBC FSWAD diploma

"""
Part 1: Lists
This section deals with lists and consists of the following instructions:

1. Create a list called fruits with the following values: "apple", "banana", "cherry", "mango".

2. Print the second item in the list.

3. Add "orange" to the list.

4. Change the first item of the list to "grape".

5. Print the length of the list.
"""

fruits = ["apple", "banana", "cherry", "mango"]
print(fruits[1])
fruits.append("orange")
fruits[0] = "grape"
print(len(fruits))

"""
Part 2: Sets
This section deals with sets and consists of the following instructions:

1. Create a set called colors with the values: "red", "blue", "green", "yellow".

2. Add "purple" to the set.

3. Try adding "red" again and print the set. What do you observe? It doesn't get added but there's also no error

4. Remove "blue" from the set.
"""
colors = {"red", "blue", "green", "yellow"}
colors.add("purple")
colors.add("red")
print(colors)
colors.remove("blue")
