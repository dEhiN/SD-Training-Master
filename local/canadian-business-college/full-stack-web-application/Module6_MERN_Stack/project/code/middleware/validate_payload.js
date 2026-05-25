/** This acts as custom middleware to allow validation of an incoming payload. The package ajv is used to compile the two JSON Schema files for User and Trip, and then they are used to validate the incoming payload. This ensures any client data sent through POST is cleaned up and adheres to the proper data schema prior to any further action. */


/** Named Module Imports */
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
/** JSON Schema Module Imports */
import userSchema from './json_data/kd-dd_user.schema.json' with { type: 'json' };
import tripSchema from './json_data/kd-dd_trip.schema.json' with { type: 'json' };


/** Module specific global variables:
 * Create the ajv object with necessary parameters
 */
const ajv = new Ajv({
    allErrors: true,
    useDefaults: true,
    removeAdditional: "all"
});
/** Add non-standard formats to ajv so it can validate for 'date-time'. */
addFormats(ajv);


/** Compile the schemas. */
const userValidator = ajv.compile(userSchema);
const tripValidator = ajv.compile(tripSchema);


/** Express Middleware functions to do the actual validation of payloads against the JSON schemas. */
// Validate User data
export const validateUser = (req, res, next) => {
    // Do the actual validation
    const isValid = userValidator(req.body);

    // Check if the validation failed and let the client-side code know
    if (!isValid) {
        return res.status(400).json({
            status: 'fail',
            message: 'The user request data sent did not pass JSON validation. Please check the data and resend.',
            errors: userValidator.errors
        })
    }

    // The validation passed and the data has been cleaned and processed. Execution can proceed to the next step in the Express pipeline.
    next();
}
// Validate Trip data
export const validateTrip = (req, res, next) => {
    // Do the actual validation
    const isValid = tripValidator(req.body);

    // Check if the validation failed and let the client-side code know
    if (!isValid) {
        return res.status(400).json({
            status: 'fail',
            message: 'The trip request data sent did not pass JSON validation. Please check the data and resend.',
            errors: tripValidator.errors
        })
    }

    // The validation passed and the data has been cleaned and processed. Execution can proceed to the next step in the Express pipeline.
    next();
}