# Module 6: MERN Stack Project

_Last updated: 2026-05-27_

## Project Details

### Purpose:

This project fulfills the requirements for the _Full Stack Web Application Developer_ program from _Canadian Business College_. Specifically, this project serves as the end-of-module project for _Module 6_.

### Requirements:

The requirement for the _Module 6 Project_ was to create a server and database that will function as the backend part of a MERN or MEAN web application.

Specifically, an `Express.js` server was to be created using `Node.js`, alongside a Mongo database based in the _Mongo Atlas_ cloud. Further, the server needed to connect with the Mongo database using the `mongodb` Node package to implement the standard database CRUD operations.

The database requirements included having 2 different Mongo collections and at least 10 different data points for each collection. The server needed to handle at least 4 API endpoints consisting of a mix of POST and GET HTTP calls. One of the GET API endpoints needed to allow for query filtering of records from the database.

### Special Note:

The project submission was built for a planned, real-world web application. Listed below are the details regarding the website followed by details regarding the submission.

## Website Background

### Business Model:

In rural and less urbanized areas, transportation services that work in large urban centres are either non-existent or less reliable. These include public transportation and ride sharing programs. As a result, a specific type of service called a _designated driver_ (or _DD_) service came about.

A client who needs a ride home from an establishment, and who has their personal vehicle with them but cannot operate it, can call a DD. The DD service operates in teams of two, wherein one DD drives the client home in the client vehicle, while the partner follows in the DD personal vehicle. This allows for the DD team to reach the pickup point and return from the drop off point safely.

### Business Need:

In the region of _Barrie_ and _Simcoe County_, the existing DD services have simple, static sites, and use human dispatchers to book client trips through phone calls. This is inefficient in the modern technological age of dynamic web applications.

This inefficiency is what gave rise to _KD-DD_, a new type of DD service that will allow clients to use a web application to get trip estimates, book trips, create accounts for saved client data and reuse, and view details such as trip history and saved client data.

## Website Details

### Name:

_KD-DD_

### Description:

The website will function as a client entry point for a designated driver service, allowing clients to book trips and more. Specifically, the website will contain the following functionality:

1. Calculation of a trip fare estimate by allowing the client to specify a pickup and drop off location.
2. Booking of a trip by a client either anonymously or via an established account.
3. Creation of an account by the client to save various client profile details and trip history.
4. Saving of trip history for a client with an existing account.
5. Viewing of account details and trip history by client after login.

## Submission Details

### Description:

The project submission was created to be a robust, backend server that functions as a headless API database gateway. That is, the server created in the file `server.js` only exists to do the following:

- Connect to a Mongo database
- Receive and send JSON data between a client frontend and the database via a custom API
- Use CRUD operations on the JSON data in connection with the database

### Basic Functionality:

The database was built predicated on two main collections - _Users_ and _Trips_. The first collection is used to store and handle all account related data, while the second is used to store and handle all trip related data.

JSON schemas were developed for each set of data to specify data properties and to allow for data validation. Each collection data is treated as its own data type and is called _User_ and _Trip_, respectively.

### Technical Details:

The server was built in a modular format, allowing for functionality to be separated across different custom JavaScript modules.

As a result of the modularity, in addition to `server.js`, the following folders were created: `json_data`, `models`,`controllers`, `routes`, `config`, `middleware`, and `test_data`.

For the API endpoints, four `POST` and three `GET` routes were created. Two of the `POST` routes are used for _Trip_ data, while the rest of the `POST` routes and all the `GET` routes are used for _User_ data. Note that currently, only the four `POST` routes were implemented fully.

### Module/Folder Breakdown:

1. `json_data`: For each collection data type - _User_ and _Trip_ - a local JSON Schema file was created and saved in this folder. The schema is based on the <a href=http://json-schema.org/draft-07/schema>Draft 7 Schema</a> specifications.

2. `models`: The Node package `mongoose` was used in place of `mongodb` to interact with the Mongo database. Since Mongoose is an Object Document Mapper, Mongoose schemas and models were created for _User_ and _Trip_ and saved in this folder.

3. `controllers`: Controller modules were created in this folder to utilise the Mongoose models and act as the route functions.

4. `routes`: The routing was split up into separate route files for _User_ and _Trip_, and are found in this folder. To facilitate this routing approach, `Express Router` was used. The main server splits the two main API routes and the specific routing modules further split the endpoints. Each route module lists the endpoints. The two main API routes are:
    - `/api/users` for the _User_ collection
    - `/api/trips` for the _Trip_ collection

5. `config`: A database configuration module was created in this folder to specifically handle establishing the connection to the database. If a connection cannot be established, the server quits completely.

6. `middleware`: In addition to JSON data validation prior to storage in the database, JSON data validation is also performed on any incoming POST data. The Node package `ajv` was used for this and a validator function was created that acts as middleware when necessary. The function was put into its own module in this folder.

7. `test_data`: Since the _User_ and _Trip_ data types are complex, Gemini AI was used to create sample data that can assist with testing of the API endpoints, and which can be found in this folder.

### Environment Configuration:

The server and database connection use environment variables for safer configuration. These are pulled from a `.env` file. The file follows the exact structure outlined below:

```
# Express Server Variables
PORT=

# MongoDB Variables
MONGODB_UNAME=
MONGODB_PWD=
MONGODB_URI=
```

_Note: The Mongo database connection URI does not need to have the username or password hardcoded. A pattern like `mongodb+srv://<db_username>:<db_password>` is sufficient._

## Testing Instructions

### Setup:

Use either the _Project branch URL_ from below to clone the project or, if a zipped copy of the project has been submitted and received, unzip the project.

### Directions:

1. Open a terminal and change to the project directory.
2. Create a `.env` file **exactly** as described above and place in the project root folder.
   <br>
   _Note: A fallback port has been hardcoded into `server.js` but the database connection will fail if there is no `.env` file or it is not as described above._
3. Run the command `npm install` to install all dependencies.
   <br>
   _Note: This assumes `Node.js` is already installed. If not, please first install it._
4. Run the command `npm run start` to start the server.
5. Use a program like _Postman_ to test the API endpoints using the sample data provided.

## Repository Information

### Setup:

This project submission was created using a Git and GitHub repository. A development branch specifically for this project was created. In addition, a GitHub Project was created to track issues and work done.

### Project URLs:

Main branch = https://github.com/dEhiN/CBCDiploma--FSWAD/

Project branch = https://github.com/dEhiN/CBCDiploma--FSWAD/tree/Module-6/Project

GitHub Project = https://github.com/users/dEhiN/projects/10
