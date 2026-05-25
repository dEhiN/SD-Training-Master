/** This acts as the Mongoose model for a User object. The schema defined here should correspond to the definition found in the local file "kd-dd_user.schema.json". Any and all database interaction regarding users will be handled by this model. */


/** Named Module Imports */
import mongoose from "mongoose";


/** Start with the child schemas */
// Create one to map to "CreditCardDetails" in the JSON Schema
const ccDetailsSchema = new mongoose.Schema({
    IsDefault: {
        type: Boolean,
        required: true
    },
    CC_Type: {
        type: String,
        enum: ["VISA", "MasterCard"],
        required: true
    },
    CC_Name: {
        type: String,
        required: true
    },
    CC_Number: {
        type: String,
        minLength: 15,
        maxLength: 16,
        match: /^(4\d{15}|5[1-5]\d{14}|2(22[1-9]|2[3-9]\d|[3-6]\d{2}|7[0-1]\d|720)\d{12})$/,
        required: true
    },
    "CC_ExpMonth": {
        type: String,
        match: /^(0[1-9]|1[0-2])$/,
        required: true
    },
    "CC_ExpYear": {
        type: String,
        match: /^(\d{4})$/,
        required: true
    }
}, {
    strict: "throw",
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})
// Create a virtual getter/setter to map the _id field in the db to the "CardId" key/field from the JSON Schema. This will allow all logic to work with "CardId".
ccDetailsSchema.virtual('CardId')
    .get(() => {
        return this._id.toHexString();
    })
    .set((value) => {
        this._id = new mongoose.Types.ObjectId(value);
    });