/** This acts as the controller for User endpoints. The functions attached to each User endpoint will be written here. These functions will interact with a global instance of the User model and use that to interact with the Mongo database. The API endpoints and their associated functions:
 * 
 * /profile = getUserAccount()
 * /trips = getUserTrips()
 * /trips/filter = filterUserTrips()
 * /create-account = createUserAccount()
 * /login = loginUser()
*/


/** Mongoose model import */
import User from "../models/user_model.js";


/** Route functions */

/** API endpoint: /api/users/profile */
export const getUserAccount = (req, res) => { };

/** API endpoint: /api/users/trips */
export const getUserTrips = (req, res) => { };

/** API endpoint: /api/users/trips/filter */
export const filterUserTrips = (req, res) => { };

/** API endpoint: /api/users/create-account */
export const createUserAccount = (req, res) => { };

/** API endpoint: /api/users/login */
export const loginUser = (req, res) => { };