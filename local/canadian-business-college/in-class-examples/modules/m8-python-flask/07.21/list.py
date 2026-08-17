# python list
# can contain any data and duplicates
my_list = [200, 800, 500, 600, 100]

my_fruits_list = ["orange", "mango", "kiwi", "pineapple", "banana"]

# do ascending sorting of the lists
my_list.sort()
my_fruits_list.sort()

print(my_list)
print(my_fruits_list)

my_list = [200, 800, 500, 600, 100]

my_fruits_list = ["orange", "mango", "kiwi", "pineapple", "banana"]

# do descending sorting of the lists
my_list.sort(reverse=True)
my_fruits_list.sort(reverse=True)

print(my_list)
print(my_fruits_list)

my_list = [200, 800, 500, 600, 100]

my_fruits_list = ["orange", "mango", "kiwi", "pineapple", "banana"]

# deep copy for a real copy of the original list
my_copy_list = my_list.copy()

my_copy_list[0] = 00

print(my_copy_list)
print(my_list)

my_list = [200, 800, 500, 600, 100]

my_fruits_list = ["orange", "mango", "kiwi", "pineapple", "banana"]

# loop over the my_list
for num in my_list:
    print(num + 100)

# loop over the my_fruits_list
for fruit in my_fruits_list:
    print("The fruit name is - " + fruit)
