/** This serves as the router for User endpoints. The following endpoints exist:
 * 
 * create-account = to register a new user account
 * login = to log in a user with their credentials
*/


/** Named module imports */
import express from 'express';

/** Custom imports */
import { validateUser } from '../middleware/validate_payload.js';
import { createAccount, loginUser } from '../controllers/user_controller.js';


/** Create the Express Router */
const userRouter = express.Router();


/** Set up the routes. These will be based on '/' because server.js will define the API user endpoint for these routes. */
userRouter.post('/create-account', validateUser, createAccount);
userRouter.post('/login', loginUser);