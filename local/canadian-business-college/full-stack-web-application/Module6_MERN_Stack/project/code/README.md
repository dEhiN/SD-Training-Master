# Module 6: MERN Stack Project

_Last updated: 2026-05-27_

## Project Details

### Purpose:

This project fulfills the requirements for the _Full Stack Web Application Developer_ program from _Canadian Business College_. Specifically, this project serves as the end-of-module project for _Module 6_.

### Requirements:

The requirement for the _Module 6 Project_ was to create a server and database that will function as the backend part of a MERN or MEAN web application.

Specifically, an `Express.js` server created using `Node.js` needed to be established alongside a Mongo database based in the _Mongo Atlas_ cloud. Further, the server needed to connect with the Mongo database using the `mongodb` Node package to implement the standard database CRUD operations.

The database requirements included 2 different Mongo collections and at least 10 different data points for each collection document. The server needed to handle at least 4 API endpoints consisting of a mix of POST and GET HTTP calls. One of the GET API endpoints needed to allow for query filtering of records from the database.

### Special Note:

The project submission was built for a planned, real-world web application. Listed below are the details regarding the website followed by details regarding the submission

## Website Details

### Name:

_KD-DD_

### Description:

The planned real-world website function as a client entrypoint for a designated driver service. Specifically, the website will contain the following functionality:

1. Calculation of a trip fare estimate by allowing the client to specify a pickup and drop off location.
2. Booking of a trip by a client either anonymously or via an established account.
3. Creation of an account by the client to save various client profile details and trip history.
4. Saving of trip history for a client with an existing account.
5. Viewing of account details and trip history by client after login.

## Submission Details

### Description:

The project that has been developed was created to be a robust, backend server that functions as a headless API database gateway. That is, the server created in the file `server.js` only exists to do the following:

- Connect to a Mongo database
- Receive and send JSON data to a client frontend
- Use CRUD operations on the JSON data in connection with the Mongo database

### Basic Functionality:

The database was built predicated on two main collections - _Users_ and _Trips_. The first collection will be used to store and handle all account related data, while the second will be used to store and handle all trip related data.

JSON schemas were developed for each set of data to specify data properties and to allow for data validation. Each collection data is treated as its own data type and is called _User_ and _Trip_.

### Technical Details:

The server was built in a modular format, allowing for functionality to be separated across different custom JavaScript modules.

As a result of the modularity, in addition to `server.js`, the folders `config`, `controllers`, `json_data`, `middleware`, `models`, `routes`, and `test_data` were created.

- For each collection data type - _User_ and _Trip_ - a local JSON Schema file was created. The schema is based on the <a href=http://json-schema.org/draft-07/schema>Draft 7 Schema</a> specifications. These files are stored in the folder `json_data`.

- The Node package `mongoose` was used to interact with the Mongo database to facilitate JSON data validation. Since Mongoose is an Object Document Mapper, Mongoose schemas and models were created for _User_ and _Trip_ in the folder `models`.

- Controller modules were created to utilise the Mongoose models and act as the route functions and can be found in the folder `controllers`.

- The routing was also split up into modules with a separate route file for each _User_ and _Trip_ in the folder `routes`. To facilitate this routing approach, an _Express Router_ was created. The main server routes the two main API endpoints appropriately: `/api/users` for the _User_ collection and `/api/trips` for the _Trip_ collection. The specific routing modules then further split the routes based on the endpoints created.

- A database configuration module was created to specifically handle establishing the connection to the database. If a connection cannot be established, the server quits completely. This module can be found in the folder `config`.

- In addition to JSON data validation prior to storage in the database, JSON data validation is also performed on any incoming POST data. The Node package `ajv` was used for this and validator function was created that acts as middleware when necessary. The function is found in the folder `middleware`.

- Since the _User_ and _Trip_ data types are complex, the AI Gemini was used to create sample data that can assist with testing of the API endpoints. The sample data can be found in the folder `test_data`.

For the API endpoints, four `POST` and three `GET` routes were created. Two of the `POST` routes are for _Trip_ data, while all the `GET` and the rest of the `POST` routes are for _User_ data.

Finally, the server and database configuration are set up to pull environment variables from a `.env` file. The file needs to follow the exact structure outlined below:

```
# Express Server Variables
PORT=

# MongoDB Variables
MONGODB_UNAME=
MONGODB_PWD=
MONGODB_URI=
```

_Note: The Mongo database connection URI does not need to have the username or password hardcoded. A pattern like `mongodb+srv://<db_username>:<db_password>` is sufficient._

## Repository Information

### Setup:

This project submission was created using a Git and GitHub repository. A development branch specifically for this project was created. In addition, a GitHub Project was created to track issues and work done.

### Project URLs:

Main branch = https://github.com/dEhiN/CBCDiploma--FSWAD/

Project branch = https://github.com/dEhiN/CBCDiploma--FSWAD/tree/Module-6/Project

GitHub Project = https://github.com/users/dEhiN/projects/10
