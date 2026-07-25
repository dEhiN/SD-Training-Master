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

print("\nPart 1: Lists")
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

print("\nPart 2: Sets")
colors = {"red", "blue", "green", "yellow"}
colors.add("purple")
colors.add("red")
print(colors)
colors.remove("blue")


"""
Part 3: Tuples
This section deals with tuples and consists of the following instructions:

1. Create a tuple called days with values: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday".

2. Print the third item from the tuple.

3. Try changing "Tuesday" to "Tues" and see what error you get. - TypeError

4. Use slicing to print the first three items of the tuple.
"""

print("\nPart 3: Tuples")
days = ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday")
print(days[2])
# days[1] = "Tues"
print(days[:3])


"""
Part 4: Dictionaries
This section deals with dictionaries and consists of the following instructions:

1. Create a dictionary called student with keys: "name", "age", "grade" and values: "Alex", 20, "A".

2. Print the student's name.

3. Add a new key "city" with value "Toronto".

4. Change the "grade" to "B+".

5. Print all the keys and values using a loop.
"""

print("\nPart 4: Dictionaries")
student = {"name": "Alex", "age": 20, "grade": "A"}
print(student["name"])
student["city"] = "Toronto"
student["grade"] = "B+"
for key, value in student.items():
    print(key, ":", value)


"""
Part 5: If/Else Statements (Conditionals)
This section deals with conditionals and consists of the following instructions:

1. Create a variable called temperature and set it to 25.

2. Write an if/elif/else block that checks the temperature:
    
    If it is greater than 30, print "It's a hot day."
    
    If it is between 15 and 30 (inclusive), print "It's a beautiful day."

    If it is less than 15, print "It's a cold day."

3. Create a boolean variable called is_raining and set it to True. Write an if/else statement that prints "Bring an umbrella" if true, and "Leave the umbrella at home" if false.
"""

print("\nPart 5: If/Else Statements (Conditionals)")
temperature = 25
if temperature > 30:
    print("It's a hot day.")
elif temperature < 15:
    print("It's a cold day.")
else:
    print("It's a beautiful day.")
is_raining = True
if is_raining:
    print("Bring an umbrella")
else:
    print("Leave the umbrella at home")


"""
Part 6: For Loops
This section deals with for loops and consists of the following instructions:

1. Create a list called numbers containing the integers 1, 2, 3, 4, 5.

2. Write a for loop that iterates through the numbers list and prints each number multiplied by 2.
"""

print("\nPart 6: For Loops")
numbers = [x for x in range(1, 6)]
for num in numbers:
    print(num**2)


"""
Part 7: While Loops
This section deals with while loops and consists of the following instructions:

1. Create a variable called counter and set it to 0.

2. Write a while loop that prints the value of counter as long as it is less than 5. (Don't forget to add 1 to the counter inside the loop so it doesn't run forever!)

3. Create a new while loop that starts a variable at 10 and subtracts 1 each time. Use an if statement and the break keyword to stop the loop completely when the variable reaches 5. Print a "Loop ended!" message at the end.
"""

print("\nPart 7: While Loops")
counter = 0
while counter < 5:
    print(counter)
    counter += 1
rev_counter = 10
while rev_counter > 0:
    rev_counter -= 1
    if rev_counter == 5:
        break
print("Loop ended!")
