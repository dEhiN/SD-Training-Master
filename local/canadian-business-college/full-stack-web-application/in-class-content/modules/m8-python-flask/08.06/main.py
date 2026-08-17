# main.py
# import flask module
from flask import Flask, redirect, url_for, request, render_template

# create a flask application
app = Flask(__name__) 

# route flask to a python function
@app.route('/') 
def root_page(): 
    # render an html template with expression/placeholder value
    # template having expression and statements (for loop, if/else) being used
    return render_template("main.html", main_heading = "Root Heading",
                            is_active = True,
                            my_list = ["Apple", "Mango", "Cherry", "Banana"]
                            ) 

@app.route('/home/') 
def home_page(): 
    the_placeholders = {
            "page_title": "Home",
            "page_heading" : "Home Page",
            "page_subheading": "A page to find the Home for our website",
            "page_para" : "Hello from the Home page"
        }
    # pass the dictionary as data wit ** that does unpacking 
    return render_template("common_page.html", **the_placeholders)

@app.route('/contact/') 
def contact_page(): 
    the_placeholders = {
        "page_title": "Contact",
        "page_heading" : "Contact Page",
        "page_subheading": "A page to find the contacts",
        "page_para" : "Hello from the contact page"
    }
    return render_template("common_page.html", **the_placeholders)

@app.route('/form/') 
def form_method(): 
    return render_template("form.html")

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

# response with list or dictionary
@app.route('/send_data/') 
def send_data(): 
    the_data = [{
         "name" : "John",
         "age" : 40,
         "city" : "Toronto",
         "hobby" : "Coding" 
    },
    {
         "name" : "Jane",
         "age" : 20,
         "city" : "Toronto",
         "hobby" : "Coding" 
    }]

    return the_data

# handle all other unknown paths
@app.errorhandler(404)
def page_not_found(e):
    #  return "The page you are trying to find does not exist on our server, please check"
    return redirect(url_for("root_page"))
    
# in main method run flask server
if __name__ == '__main__': 
 app.run(debug=True)
