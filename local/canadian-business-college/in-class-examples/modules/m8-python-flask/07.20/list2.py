# python list
# can contain any data and duplicates
my_list = ["test", 123, True, "hello", "test", "world"]

# insert an item at a specific index
my_list.insert(1, "nothing")

print(my_list)

my_list = ["test", 123, True, "hello", "test", "world"]

# append item to the end of the list
my_list.append("nothing")

my_list.append("anything")

print(my_list)

my_list = ["test", 123, True, "hello", "test", "world"]

# remove a item from the list
my_list.remove("hello")
my_list.remove("test")

print(my_list)

# remove an item based on its index using pop
my_list.pop(1)

print(my_list)

my_list = ["test", 123, True, "hello", "test", "world"]

# delete an item using del keyword
del my_list[0]

print(my_list)

my_list = ["test", 123, True, "hello", "test", "world"]

# clear the list
my_list.clear()

print(my_list)
