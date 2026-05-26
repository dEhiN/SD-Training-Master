/** This is the main Express server file. It creates and starts the Express server for the site kd-dd.ca. */

/** Installed module imports */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

/** Custom module imports */
import connectToMongoDB from './config/database_config.js';
import userRouter from './routes/user_routes.js';
import tripRouter from './routes/trip_routes.js';


/** Configure the dotenv module to add the variables in the .env file to the environment path. This is done at this point so the script specific global variables that rely on the environment variables can be initialized. */
dotenv.config();


/** Variable to represent the server listening port. */
const PORT = process.env.PORT || 4006;


/** Connect to the database before continuing. */
await connectToMongoDB();


/** Create the Express app */
const app = express();


/** Set up global Express middleware:
 * - Sets up CORS
 * - Add the ability to handle complex form data through POST
 * - Add the ability to handle JSON data through POST
 * - Specifies the static directory that Express should use */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/** Set up main routes to then call the respective imported routers. */
app.use("/api/users", userRouter);
app.use("/api/trips", tripRouter);


/** Start server to listen */
app.listen(PORT, () => {
    console.log(`The server has started on port ${PORT}!`);
})


export default app;