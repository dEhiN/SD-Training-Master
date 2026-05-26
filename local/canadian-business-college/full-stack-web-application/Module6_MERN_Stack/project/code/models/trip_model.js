/** This acts as the Mongoose model for a Trip object. The schema defined here should correspond to the definition found in the local file "kd-dd_trip.schema.json". Any and all database interaction regarding trips will be handled by this model. */


/** Installed module imports */
import mongoose from 'mongoose';


/** Child Schemas: In the JSON Schema file, there is a "definitions" block, which lists two sub-schemas because those objects are used multiple times in the main Trip schema. Therefore, those two will become child schemas. StopOvers and ExtraCalculations are inline in the JSON Schema file, but will get their own child schema. */

// This one maps to "WaitTimeObject" in the JSON Schema.
const waitTimeSchema = new mongoose.Schema({
    StartTime: {
        type: Date,
        required: true
    },
    EndTime: {
        type: Date,
        required: true
    },
    WaitTotalSeconds: {
        type: Number,
        required: true
    }
}, {
    strict: "throw",
})

// This one maps to "AddressObject" in the JSON Schema.
const addressSchema = new mongoose.Schema({
    StreetAddress: {
        type: String,
        required: true
    },
    UnitNumber: {
        type: String,
    },
    CityName: {
        type: String,
        required: true
    },
    CountyName: {
        type: String,
    },
    ProvinceName: {
        type: String,
        enum: [
            "AB",
            "BC",
            "MB",
            "NB",
            "NL",
            "NT",
            "NU",
            "ON",
            "PE",
            "QC",
            "SK",
            "YT"
        ],
        default: "ON",
        required: true
    },
    PostalCode: {
        type: String,
        match: /^([A-CEGHJ-NPR-TVXY][0-9][A-CEGHJ-NPR-TV-Z]\s?[0-9][A-CEGHJ-NPR-TV-Z][0-9])$/,
        required: true
    },
    GeoLocation: {
        type: {
            type: String,
            enum: ["Point"],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            validate: {
                validator: function (value) {
                    return value.length === 2
                },
                message: "Coordinates array must contain exactly 2 elements [longitude, latitude]."
            }
        }
    }
}, {
    strict: "throw",
})

// This one maps to a StopOver object in the JSON Schema - that is, the objects that are in the "StopOvers" array
const stopOverSchema = new mongoose.Schema({
    StopOverNumber: {
        type: Number,
        min: [1, "Stopover number must be at least 1."],
        required: true,
        validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer."
        }
    },
    StopOverAddress: {
        type: addressSchema,
        required: true
    },
    StopOverWaitTime: {
        type: waitTimeSchema,
        required: true
    }
}, {
    strict: "throw"
})

// This one maps to "ExtraCalculations" in the JSON Schema.
const extraCalcSchema = new mongoose.Schema({
    PickupWaitTime: {
        type: waitTimeSchema,
        required: function () {
            return !this.StopOvers || this.StopOvers.length === 0;
        }
    },
    StopOvers: {
        type: [stopOverSchema],
        required: function () {
            return !this.PickupWaitTime;
        }
    }
}, {
    strict: "throw"
})


/** Main User Schema: This will be the schema for the top level document to represent a Trip object. */
const tripSchema = new mongoose.Schema({
    UserId: {
        type: String,
        required: true
    },
    PickupLocation: {
        type: addressSchema,
        required: true
    },
    DropOffLocation: {
        type: addressSchema,
        required: true
    },
    TotalDistanceKm: {
        type: Number,
        min: [0, "Total distance cannot be negative"],
        required: true
    },
    ExtraCalculations: {
        type: extraCalcSchema,
    },
    TotalCostCAD: {
        type: Number,
        required: true
    },
}, {
    strict: "throw",
    collection: "Trips"
})


/** Creating the final model for a Trip object and exporting it for use. */
const Trip = mongoose.model("Trip", tripSchema);
export default Trip;