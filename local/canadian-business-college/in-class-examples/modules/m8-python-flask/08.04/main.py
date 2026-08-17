# main.py
# import flask module
from flask import Flask

# create a flask application
app = Flask(__name__) 

# route flask to a python function
@app.route('/') 
def hello_world(): 
    return 'Hello World' 

@app.route('/home') 
def home_page(): 
    return 'Hello From the home page'

# app route with dynamic path
@app.route('/data/<name>/user/') 
def data_page(name): 
    return 'The data from the path is - ' + name


# @app.route('/contact/') 
def contact_world(): 
    return 'Hello from the contact!!....!!'

# add url rule to replace decorator route method
app.add_url_rule("/contact/", "contact_path_rule", contact_world)

# in main method run flask server
if __name__ == '__main__': 
    app.run(debug=True)
