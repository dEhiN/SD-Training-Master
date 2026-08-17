# string

# give the variable a string value with {}
my_str = "My name is {} and my age is {}"

# format the string to give value on the go to replace {} placeholders
print(my_str.format("tommy", "40"))

print(my_str.format("jimmy", "30"))

# give the variable a string value with {} having indexes
my_str = "My name is {0} and my age is {1} and my city is {2}, {2} city is the best in the world"

# format the string to give value on the go to replace {} placeholders
print(my_str.format("tommy", "40", "Toronto"))

print(my_str.format("jimmy", "30", "Montreal"))