# python tuples

my_list_tuple = (200, 800, 500, 600, 100, "Hello", "world", True, False, "Hello")

print(my_list_tuple)
# find type
print(type(my_list_tuple))

# python tuples

my_list_tuple = (200, 800, 500, 600, 100, "Hello", "world", True, False, "Hello")

# extract an item based on its index
print(my_list_tuple[1])

# extract based on range
print(my_list_tuple[1:5])

# python tuples

my_list_tuple = (200, 800, 500, 600, 100, "Hello", "world", True, False, "Hello")

the_num_tup = (200, 800, 500, 600, 100)

# updating or changing values in tuple is not allowed
my_list_tuple[0] = 00

# sorting is basically changing item location hence it is not allowed
the_num_tup.sort()

print(my_list_tuple)

# convert tuple to list
my_list_tuple = list(my_list_tuple)
the_num_tup = list(the_num_tup)

# convert list to tuple
my_list_tuple = tuple(my_list_tuple)
the_num_tup = tuple(the_num_tup)

print(my_list_tuple)
print(the_num_tup)

# python tuples

my_tuple = (200, 800, 500, 600, 100, "Hello", "world", True, False, "Hello")

# for loop to iterate over the tuple
for item in my_tuple:
    print(type(item))

# python tuples

my_tuple = ("Hello", "world", True, False, "Hello")

my_another_tuple = (
    200,
    800,
    500,
    600,
    100,
)

# add two tuples to create a new one
my_final_tuple = my_tuple + my_another_tuple

print(my_final_tuple)

# python tuples

my_tuple = ("Hello", "world", True, False, "Hello")

my_another_tuple = (
    200,
    800,
    500,
    600,
    100,
)

# multiply the tuple to increase content to the number you wish
my_final_tuple = my_another_tuple * 3

print(my_final_tuple)
