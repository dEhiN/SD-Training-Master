# python list
# can contain any data and duplicates
my_list = ["test", 123, True, "hello", "test", "world"]

print(my_list[-1])
print(my_list[0])
print(my_list[1])

# find the length of the list
print(len(my_list))

# Range of index with start and and range
# start range is considered, end range is not (end - 1)
print(my_list[1:5])

# no starting range but ending range will fetch data from the start
print(my_list[:5])

# starting range but no end range will give data all the way till the end of the list
print(my_list[2:])

# check if an item exists in the list
print("test" in my_list)
print("testing" in my_list)
print(123 in my_list)
print(100000 in my_list)
print(True in my_list)
print(False in my_list)

# does not cover up for index not present
# print(my_list[10])

# update item at an index
my_list[1] = 100
my_list[0] = 20000000

# update a range of data inside the list
my_list[2:5] = ["one", "two", "three", "four"]

print(my_list)
