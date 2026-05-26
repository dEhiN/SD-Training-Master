/** This serves as the router for User endpoints. The following endpoints exist:
 * 
 * /profile = to get the user's profile
 * /trips = to get the user's trip history
 * /trips/filter = to get the user's trip history based on the query parameters acting as filters
 * /create-account = to register a new user account
 * /login = to log in a user with their credentials
 * 
 * Last updated: 2026-05-26
*/


/** Installed module imports */
import express from 'express';

/** Custom imports */
import { validateUser } from '../middleware/validate_payload.js';
import { createAccount, loginUser, getUserAccount, getUserTrips, filterUserTrips } from '../controllers/user_controller.js';


/** Create the Express Router */
const userRouter = express.Router();


/** Set up the routes. These will be based on '/' because server.js will define the API user endpoint for these routes. */
userRouter.get("/profile", getUserAccount);
userRouter.get("/trips", getUserTrips);
userRouter.get("/trips/filter", filterUserTrips)
userRouter.post("/create-account", validateUser, createAccount);
userRouter.post("/login", loginUser);

export default userRouter;