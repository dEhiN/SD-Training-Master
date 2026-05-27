/** This acts as the controller for User endpoints. The functions attached to each User endpoint will be written here. These functions will interact with a global instance of the User model and use that to interact with the Mongo database. The API endpoints and their associated functions:
 * 
 * /user-profile = getUserAccount()
 * /user-trips = getUserTrips()
 * /user-trips/filter = filterUserTrips()
 * /create-account = createUserAccount()
 * /login-account = loginUser()
*/


/** Installed module imports */
import bcrypt from "bcrypt";

/** Mongoose model import */
import User from "../models/user_model.js";


/** Route functions */

/** API endpoint: /api/users/user-profile */
export const getUserAccount = (req, res) => { };

/** API endpoint: /api/users/user-trips */
export const getUserTrips = (req, res) => { };

/** API endpoint: /api/users/user-trips/filter */
export const filterUserTrips = (req, res) => { };

/** API endpoint: /api/users/create-account */
export const createUserAccount = async (req, res) => {
    try {
        // Create a new User document using the passed in POST data since it's already been validated
        const newUser = new User(req.body);

        // Save the user information
        await newUser.save();

        // Return a success status and message along with just the trip id
        return res.status(200).json({
            status: "success",
            message: "The user account was created and the user information was saved to the database. Please see the payload for the user document id.",
            payload: {
                user_id: newUser._id
            }
        });

    }
    catch (err) {
        return res.status(500).json({
            status: "fail",
            message: "Something went wrong! Please see the error(s) below:",
            errors: err
        });
    }
};

/** API endpoint: /api/users/login-account */
export const loginUser = async (req, res) => {
    try {
        // Pull out the username and password sent in the req body
        const { userName, userPassword } = req.body
    }
    catch (err) {
        return res.status(500).json({
            status: "fail",
            message: "Something went wrong! Please see the error(s) below:",
            errors: err
        });
    }
};