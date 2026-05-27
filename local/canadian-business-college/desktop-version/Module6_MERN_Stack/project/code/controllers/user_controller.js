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

        // Query the database to see if a user exists with the supplied username
        const checkUser = await User.findOne({ "AccountInfo.UserName": userName });

        // Check to see if the query returned null which means there's no user with that username
        if (!checkUser) {
            return res.status(422).json({
                status: "fail",
                message: "The username given cannot be found. Please check the username and try again.",
                errors: "Incorrect username"
            });
        }

        // Check to see if the password given matches what's in the database
        const checkPassword = await bcrypt.compare(userPassword, checkUser.AccountInfo.UserPassword);

        // Check to see the result of the compare method
        if (!checkPassword) {
            return res.status(422).json({
                status: "fail",
                message: "The password given does not match what's on file. Please check the password and try again.",
                errors: "Incorrect password"
            });
        }

        // The login was successful so return the user id along with a success message
        return res.status(200).json({
            status: "success",
            message: "The username and password matched. The login was successful. Please see the payload for the user id.",
            payload: {
                user_id: checkUser._id
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