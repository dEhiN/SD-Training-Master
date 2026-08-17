# main.py
# import flask module
from flask import Flask, redirect, url_for, request, render_template

# create a flask application
app = Flask(__name__) 

# route flask to a python function
@app.route('/') 
def hello_world(): 
    return render_template("home.html")

@app.route('/home/') 
def home_page(): 
    return 'Hello From the home page'

@app.route('/contact/') 
def contact_world(): 
    return 'Hello from the contact!!....!!'

@app.route('/form/') 
def form_method(): 
    return render_template("form.html")

# app route with dynamic path
@app.route('/data/<name>/user/') 
def data_page(name): 
    return 'The data from the path is -- ' + name

# defining a path that only accepts post request
@app.route('/data/', methods = ['POST']) 
def data_path(): 
    # extract data from the request using request.form
    username = request.form["user_name"]
    userage = request.form["user_age"]
    # extract data using form.get method
    usercity = request.form.get("user_city")
    random_info = request.form.get("random_info")
    print(random_info)
    return "Users name is - " + username + " , Users age is - " + userage + " , users city is - " + usercity


# defining a path that only accepts post request
@app.route('/data_read_write/', methods = ['POST', 'GET']) 
def data_read_write_path(): 
    return 'This path deals with data, it reads as well and send back as well'

# path variable with data conversion
@app.route('/number/<float:my_path_num>/') 
def number_page(my_path_num): 
    return str(my_path_num + 100)

@app.route('/user_type/<type>') 
def redirect_type_based(type): 
    if type == "admin":
        #  redirect to redirect users to another path
        # url_for for finding the function where we need to redirect to
         return redirect(url_for("home_page"))
    elif type == "user":
        return redirect(url_for("contact_world"))
    else:
         return redirect(url_for("hello_world"))

# handle all other unknown paths
# @app.errorhandler(404)
# def page_not_found(e):
#     #  return "The page you are trying to find does not exist on our server, please check"
#     return redirect(url_for("root_page"))

# in main method run flask server
if __name__ == '__main__': 
 app.run(debug=True)

 
 