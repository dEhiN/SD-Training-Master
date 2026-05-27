/** This acts as the controller for Trip endpoints. The functions attached to each Trip endpoint will be written here. These functions will interact with a global instance of the Trip model and use that to interact with the Mongo database. The API endpoints and their associated functions:
 * 
 * /fare-estimate = calculateFare()
 * /booking = bookTrip()
*/


/** Mongoose model import */
import Trip from "../models/trip_model.js";


/** Helper functions */

/** This function will calculate the total cost of a trip. It will take the passed in Trip object and perform the business mathematical operations based on the trip details to determine the total cost for the trip and return that. 
 * 
 * @param {Trip} tripObjClone A validated Trip object.
 * 
 * @returns A float value representing the total trip cost in CAD.
 */
function getTotalCost(tripObj) {
    const cloneOfTrip = structuredClone(tripObj);
}

/** Route functions */
export const calculateFare = (req, res) => {
    const estimatedTrip = getTotalCost(req.body);
};

export const bookTrip = async (req, res) => {
    try {
        // Create a new Trip document using the passed in POST data since it's already been validated
        const newTrip = new Trip(req.body);

        // Confirm that the field TotalCostCAD exists since it's not part of the validation; if it's missing, call the helper function to calculate it
        if (!req.body.TotalCostCAD || req.body.TotalCostCAD === 0) {
            newTrip.TotalCostCAD = getTotalCost(req.body);
        }

        // Save the trip information
        // await newTrip.save();

        // Return a success status and message along with just the trip id
        return res.status(200).json({
            status: "success",
            message: "The trip information was saved to the database. Please see the payload for the trip document id.",
            payload: {
                trip_id: newTrip._id
            }
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