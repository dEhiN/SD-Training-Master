/** This acts as the controller for Trip endpoints. The functions attached to each Trip endpoint will be written here. These functions will interact with a global instance of the Trip model and use that to interact with the Mongo database. The API endpoints and their associated functions:
 * 
 * /fare-estimate = calculateFare()
 * /booking = bookTrip()
*/


/** Mongoose model import */
import Trip from "../models/trip_model.js";


/** Route functions */
export const calculateFare = (req, res) => { };

export const bookTrip = async (req, res) => {
    console.log("Hello from inside the function bookTrip!");

    try {
        // Create a new Trip document using the passed in POST data since it's already been validated
        const newTrip = new Trip(req.body);

        console.log("A new Trip document was created! Attempting to save.");

        return res.status(200).json({
            payload: newTrip
        })

    }
    catch (err) {
        return res.status(500).json({
            status: "fail",
            message: "Something went wrong! Please see the error(s) below:",
            errors: err
        })
    }
};