# main.py
# exception handeling

def handle_error_messages(message1, error_body):
    print("The error has happened inside " +  message1)
    print("The error is - " + str(error_body))

# a function with exception handeling
# handle all exceptions in one place
# else block for success logging in case no issue happened in try block
# finally block to execute code either code passes or fails
def calculation(num1, num2):
    try:
        if (num2 > num1):
            # raise exception to identify your functionality related issues
            raise Exception("Num2 cannot be greater than num1")

        result = num1 / num2
        print(result)
    except Exception as e:
        handle_error_messages("calculation function", str(e))
    else:
        print("Function calculation ran successfully")
    finally:
        print("hello from the finally block")



calculation(10, 5)
calculation(10, 50)
calculation(100, 20)
calculation(10, 15)