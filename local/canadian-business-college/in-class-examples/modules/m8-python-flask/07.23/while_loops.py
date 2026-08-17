# python loop - while

my_var = 10
my_second_var = 10

# while loop for my_var < 20 while incrementing value by 1
while my_var < 20:
    print(my_var)
    my_var += 1

# while loop while decrementing the value of the variable
while my_second_var > 0:
    print(my_second_var)
    my_second_var -= 2

# python loop - while

my_var = 10

# while loop for my_var < 20 while incrementing value by 1
# use the break keyword to break the loop
while my_var < 20:
    print(my_var)
    my_var += 1
    if my_var == 15:
        break

# python loop - while

my_var = 10

# while loop for my_var < 20 while incrementing value by 1
# use the continue keyword to start again from the top
while my_var < 20:
    my_var += 1
    if my_var == 15:
        continue
    print(my_var)


# python loop - while

my_var = 10

# while loop for my_var < 20 while incrementing value by 1
# use the continue keyword to start again from the top
# use else statement as the last part
while my_var < 20:
    my_var += 1
    if my_var == 15:
        continue
    print(my_var)
else:
    print("loop is over")
