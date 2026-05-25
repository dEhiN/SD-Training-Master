/** This is the main Express server file. It creates and starts the Express server for the site kd-dd.ca. */

/** Named Module Imports */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


/** Configure the dotenv module to add the variables in the .env file to the environment path. This is done at this point so the script specific global variables that rely on the environment variables can be initialized. The results are stored in a variable for easier use. */
const dotConfigResults = dotenv.config().parsed;


/** Script specific global variables */
// Server listening port
const PORT = dotConfigResults.PORT || 4006;
// Variables for the database connection
const dbConnectionUri = dotConfigResults?.MONGODB_URI || process.env.MONGODB_URI;
const dbUserName = dotConfigResults?.MONGODB_UNAME || process.env.MONGODB_UNAME;
const dbUserPassword = dotConfigResults?.MONGODB_PWD || process.env.MONGODB_PWD;
// Variables to assist with console and return messages
const msgsObj = {
    errors: {
        SERVQUIT: "The server is quitting...",
        ERRLEAD: "Please see below for the specific error:",
        mongodb: {
            DBFAIL: "The connection to the Mongo database could not be established.",
            NODBURI: "The connection URI to the database is missing!",
            NODBUSERNAME: "The database connection username is missing!",
            NODBUSERPASSWORD: "The database connection password is missing!"
        }
    },
    consoles: {
        mongodb: {
            DBATTEMPT: "Attempting connection to Mongo Atlas...",
            DBCONNECTED: "Connection to the Mongo database was successfully established!"
        }
    },
    misc: {
        mongodb: {
            DBUSERNAME: "<db_username>",
            DBPASSWORD: "<db_password>"
        }
    }
}


/** Before continuing, check to make sure a connection to the database can be made. Start with inserting the db username and password into the connection uri if they all exist. If there are issues at any stage, throw an error. */
async function connectToMongoDB() {
    console.log(msgsObj.consoles.mongodb.DBATTEMPT)
    try {
        /** Check to make sure the db related variables have values. If not, throw an error */
        if (!dbConnectionUri) {
            throw new Error(msgsObj.errors.mongodb.NODBURI);
        }
        if (!dbUserName) {
            throw new Error(msgsObj.errors.mongodb.NODBUSERNAME);
        }
        if (!dbUserPassword) {
            throw new Error(msgsObj.errors.mongodb.NODBUSERPASSWORD);
        }

        /** Add the username and password to the connection URI */
        let uri = dbConnectionUri;
        uri = uri.replace(msgsObj.misc.mongodb.DBUSERNAME, dbUserName);
        uri = uri.replace(msgsObj.misc.mongodb.DBPASSWORD, dbUserPassword);

        /** Connect to the MongoDB */
        await mongoose.connect(uri, {
            autoIndex: false,
            dbName: "kd-dd"
        })
        console.log(msgsObj.consoles.mongodb.DBCONNECTED);
    }
    catch (err) {
        console.log(msgsObj.errors.mongodb.DBFAIL + "\n" + msgsObj.errors.ERRLEAD);
        console.error(err);
        console.log(msgsObj.errors.SERVQUIT);
        process.exit(1);
    }
}
connectToMongoDB();


/** Module specific global variables:
 * - Create the Express app */
const app = express();


/** Middleware setup:
 * - Sets up CORS
 * - Add the ability to handle complex form data through POST
 * - Add the ability to handle JSON data through POST
 * - Specifies the static directory that Express should use */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());