/** This acts as custom middleware to allow validation of an incoming payload. The package ajv is used to compile the two JSON Schema files for User and Trip, and then they are used to validate the incoming payload. This ensures any client data sent through POST is cleaned up and adheres to the proper data schema prior to any further action. */


/** Named Module Imports */
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
/** JSON Schema Module Imports */
import userSchema from '../json_data/kd-dd_user.schema.json' with { type: 'json' };
import tripSchema from '../json_data/kd-dd_trip.schema.json' with { type: 'json' };


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


/** Helper function to do the actual validation of payloads against the JSON schemas.
 * 
 * It first performs some safety checks to make sure that the request object has a body and it isn't empty. If the checks pass then the passed-in validator function is called. If the validation passes, then the passed-in next function is called.
 * 
 * If either the safety checks or the validation fail, an HTTP 400 Status Code is returned with a custom message.
 * 
 * @param req An Express Request object
 * @param res An Express Response object
 * @param next An Express Next function
 * @param validatorFunction An Ajv validator function created from calling Ajv.compile() on a JSON schema.
 * @param dataType A string representing which type of data was meant to be in the req.body payload. The currently accepted values are "user" and "trip'."
 */
const validateData = (req, res, next, validatorFunction, dataType) => {
    // Check to make sure req.body exists and isn't empty. If it is, return immediately.
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            status: "fail",
            message: "No request data was provided in the body. Please send a valid data payload."
        })
    }

    // Do the actual validation
    const isValid = validatorFunction(req.body);

    // Check if the validation failed and let the client-side code know
    if (!isValid) {
        return res.status(400).json({
            status: "fail",
            message: `The ${dataType} request data sent did not pass JSON validation. Please check the data and resend.`,
            errors: validatorFunction.errors
        })
    }

    // The validation passed and the data has been cleaned and processed. Execution can proceed to the next step in the Express pipeline.
    next();
}

/** Express Middleware functions. */
// Validate User data
export const validateUser = (req, res, next) => {
    validateData(req, res, next, userValidator, "user");
}
// Validate Trip data
export const validateTrip = (req, res, next) => {
    validateData(req, res, next, tripValidator, "trip");
}