# main.py
# exception handeling

def handle_error_messages(message1, error_body):
    print("The error has happened inside" +  message1)
    print("The error is - " + str(error_body))

# a function with exception handeling
# handle all exceptions in one place
def calculation(num1, num2):
    try:
        result = num1 / num2
        print(result)
        print(hello123)
    except Exception as e:
        handle_error_messages("calculation function", str(e))


calculation(10, 5)
calculation(10, 50)
calculation(100, 20)