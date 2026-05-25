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
const userValidate = ajv.compile(userSchema);
const tripValidate = ajv.compile(tripSchema);