/** This acts as the controller for Trip endpoints. The functions attached to each Trip endpoint will be written here. These functions will interact with a global instance of the Trip model and use that to interact with the Mongo database. The API endpoints and their associated functions:
 * 
 * /fare-estimate = calculateFare()
 * /booking = bookTrip()
*/


/** Mongoose model import */
import User from "../models/user_model.js";


/** Route functions */
export const calculateFare = (req, res) => { };

export const bookTrip = async (req, res) => {
    try {
        // Create a new Trip document using the passed in POST data since it's already been validated
        const newTrip = new Trip(req.body);

        console.log(newTrip);
    }
    catch (err) {

    }
};