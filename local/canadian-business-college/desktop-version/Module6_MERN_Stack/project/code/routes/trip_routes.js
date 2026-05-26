/** This serves as the router for Trip endpoints. The following endpoints exist:
 * 
 * /fare-estimate = to calculate and return a fare estimate for a proposed trip
 * /booking = to book a trip
 * 
 * Last updated: 2026-05-26
*/


/** Named module imports */
import express from 'express';

/** Custom imports */
import { validateTrip } from '../middleware/validate_payload.js';
import { calculateFare, bookTrip } from '../controllers/trip_controller.js';


/** Create the Express Router */
const tripRouter = express.Router();


/** Set up the routes. These will be based on '/' because server.js will define the API trip endpoint for these routes. */
tripRouter.post("/fare-estimate", calculateFare);
tripRouter.post("/booking", validateTrip, bookTrip);

export default tripRouter;