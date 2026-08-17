# python set

my_set = {"Hello", "world", True, False}

print(my_set)
print(type(my_set))

# python set

# a set does not maintain the index of each item
my_set = {"Hello", "world", True, False}

# set does not allow any changes
my_set[0] = "testing"

print(my_set)

# python set

# a set does not maintain the index of each item
# a set does not allow duplicates
my_set = {"Hello", "world", True, False, "Hello", "Hello", "Hello", "Hello"}

print(my_set)

# python set

# a set does not maintain the index of each item
# a set does not allow duplicates
my_set = {"Hello", "world", True, False, "Hello", "Hello", "Hello", "Hello"}

# extract items from set using for loop iteration
for item in my_set:
    print(item)

# python set

# a set does not maintain the index of each item
# a set does not allow duplicates
my_set = {"Hello", "world", True}

# add content to a set
my_set.add("testing")
my_set.add(100)
my_set.add(False)

print(my_set)

# python set

# a set does not maintain the index of each item
# a set does not allow duplicates
my_set = {"Hello", "world", True}
my_another_set = {100, 500, 200}

# add content of a set to another set
my_set.update(my_another_set)

print(my_set)

# python set

# a set does not maintain the index of each item
# a set does not allow duplicates
my_set = {"Hello", "world", True}
my_list = [100, 500, 200]
my_tuple = ("Testing", "data", "tuple")

# add content of a set to another set
my_set.update(my_list)
my_set.update(my_tuple)

print(my_set)

# python set

# a set does not maintain the index of each item
# a set does not allow duplicates
my_set = {"Hello", "world", True}
my_another_set = {100, 500, 200}

# union content of two sets into a new one
my_final_set = my_set.union(my_another_set)

print(my_final_set)

# python set


my_fruits_list = ["orange", "mango", "kiwi", "pineapple", "banana", "mango"]

# get rid of duplicates from list by converting it into set first
my_fruits_list = set(my_fruits_list)

# convert the set back to the list
my_fruits_list = list(my_fruits_list)

print(my_fruits_list)
