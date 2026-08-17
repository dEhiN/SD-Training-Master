# main.py
# exception handeling

def calculation(num1, num2):
    try:
        result = num1 / num2
        print(result)
    except:
        print("An error has happened in the calculation function")

calculation(10, 5)
calculation(10, "hello")
calculation(100, 20)

# main.py
# exception handeling

# a function with exception handeling
# handle all exceptions in one place
def calculation(num1, num2):
    try:
        result = num1 / num2
        print(result)
        print(hello123)
    except Exception as e:
        print("The error has happened inside calculation function")
        print("The error is - " + str(e))


calculation(10, 5)
calculation(10, 50)
calculation(100, 20)