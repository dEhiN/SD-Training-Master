# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

print(my_dict)
print(type(my_dict))

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

print(my_dict)
print(type(my_dict))
print(len(my_dict))

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# extract item from dictionary using the key
print(my_dict["city"])
print(my_dict["hobbies"][1])

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# update values of a dictionary
my_dict["age"] = 50
my_dict["name"] = "John Doe"

print(my_dict)

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# add values of a dictionary
my_dict["car"] = "Ford"

print(my_dict)

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# get data from dictionary using the get method
print(my_dict.get("isActive"))


# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# get all keys present inside the dictionary
print(my_dict.keys())

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# get all values present inside the dictionary
print(my_dict.values())

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# get all items present inside the dictionary
print(my_dict.items())

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# check if a key exists inside a dictionary
print("age" in my_dict)
print("abc" in my_dict)

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# change a dictionary item
my_dict["name"] = "Timmy"

# update content of a dictionary using update method
my_dict.update({"age": 60, "isActive": False})

print(my_dict)

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# add a dictionary item
my_dict["car"] = "Tesla"

# add content to a dictionary using update method
my_dict.update({"model": "Model 3", "color": "grey"})

print(my_dict)

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# delete a key value pair using pop
my_dict.pop("city")

print(my_dict)

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# delete a key value pair using del keyword
del my_dict["hobbies"]

print(my_dict)

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# clear all content of a dictionary using clear
my_dict.clear()

print(my_dict)

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
    "car": "Tesla",
    "model": "model 3",
}

# regular for loop over the dictionary
for item in my_dict:
    print(my_dict[item])

# for loop on dictionary using items method
for key, value in my_dict.items():
    print("for the key - " + key + " the value is - " + str(value))

# python dictionary

my_dict = {
    "name": "ABC",
    "age": 40,
    "city": "Toronto",
    "hobbies": ["reading", "biking", "sleeping"],
    "isActive": True,
}

# deep copy
my_copy_dict = my_dict.copy()

# reference or shallow copy
# my_copy_dict = my_dict

my_copy_dict["name"] = "John joe"

print(my_copy_dict)
print(my_dict)
