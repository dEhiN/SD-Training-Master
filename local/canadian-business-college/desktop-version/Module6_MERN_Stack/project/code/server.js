/** Built-in Module Imports */
import fs from 'fs';
import path from 'path';
/** Named Module Imports */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Ajv from 'ajv';
import { MongoClient } from 'mongodb';


/** Configure the dotenv module to add the variables in the .env file to the environment path. This is done at this point so the script specific global variables that rely on the environment variables can be initialized. The results are stored in a variable for easier use. */
const dotConfigResults = dotenv.config().parsed;


/** Script specific global variables */
const PORT = dotConfigResults.PORT || 4006;
const dbConnectionUri = dotConfigResults?.MONGODB_URI || process.env.MONGODB_URI;
const dbUserName = dotConfigResults?.MONGODB_UNAME || process.env.MONGODB_UNAME;
const dbUserPassword = dotConfigResults?.MONGODB_PWD || process.env.MONGODB_PWD;


/** Before continuing, check to make sure a connection to the database can be made.  */



/** Module specific global variables: 
 * - Create the Express app 
 * - Create an Ajv object to use for the JSON schema validation */
const app = express();
const ajv = new Ajv({
    allErrors: true,
    useDefaults: true,
    removeAdditional: "all"
});