/** This acts as the controller for Trip endpoints. The functions attached to each Trip endpoint will be written here. These functions will interact with a global instance of the Trip model and use that to interact with the Mongo database. The API endpoints and their associated functions:
 * 
 * /fare-estimate = calculateFare()
 * /book-trip = bookTrip()
*/


/** Mongoose model import */
import Trip from "../models/trip_model.js";

/** Script global variables */
// Set the base pickup fee
const pickupFee = 10;
// Set the base per km rate
const perKmRate = 2.5;


/** Helper functions */

/** This function will calculate the total cost of a trip. It will take the passed in Trip object and perform the business mathematical operations based on the trip details to determine the total cost for the trip and return that. 
 * 
 * @param {Trip} tripObjClone A validated Trip object.
 * 
 * @returns A float value representing the total trip cost in CAD.
 */
function getTotalCost(tripObj) {
    // Clone the request body so it doesn't get accidentally modified
    const cloneOfTrip = structuredClone(tripObj);
    // Grab the total distance from the Trip object
    const tripDistance = cloneOfTrip.TotalDistanceKm;

    // Simple calculation for now to test functionality. 
    // NEED TO CHANGE TO REAL CALCULATION LATER!!!
    const totalCost = pickupFee + (tripDistance * perKmRate);

    // Return the total cost as a float
    return totalCost;
}

/** Route functions */

/** API endpoint: /api/trips/fare-estimate */
export const calculateFare = (req, res) => {
    // Grab the trip data and store it in a variable for easier access
    const tripData = req.body;

    // First, check to see if there's already a TotalCostCAD field and it's greater than $1; if so, return a message to the client
    if (tripData.TotalCostCAD && tripData.TotalCostCAD > 1) {
        return res.status(418).json({
            status: "fail",
            message: "The trip request data already contains a TotalCostCAD field! There was nothing to calculate.",
            errors: "I'm a teapot and cannot brew coffee."
        })
    }

    // Get the total cost of the trip
    const estimatedFare = getTotalCost(tripData);

    // Add the cost to the trip data and create the TotalCostCAD field
    tripData.TotalCostCAD = estimatedFare;

    // Return the trip data with the cost added
    return res.status(200).json({
        status: "success",
        message: "The total estimated cost of the trip was calculated. Please see the payload below for the total fare.",
        payload: {
            estimated_fare: tripData.TotalCostCAD
        }
    });
};

/** API endpoint: /api/trips/book-trip */
export const bookTrip = async (req, res) => {
    try {
        // Create a new Trip document using the passed in POST data since it's already been validated
        const newTrip = new Trip(req.body);

        // Confirm that the field TotalCostCAD exists since it's not part of the validation; if it's missing, call the helper function to calculate it
        if (!req.body.TotalCostCAD || req.body.TotalCostCAD === 0) {
            newTrip.TotalCostCAD = getTotalCost(req.body);
        }

        // Save the trip information
        await newTrip.save();

        // Return a success status and message along with just the trip id
        return res.status(200).json({
            status: "success",
            message: "The trip information was saved to the database. Please see the payload for the trip document id.",
            payload: {
                trip_id: newTrip._id
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