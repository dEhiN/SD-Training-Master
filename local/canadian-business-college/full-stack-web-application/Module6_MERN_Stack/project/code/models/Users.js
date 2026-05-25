/** This acts as the Mongoose model for a User object. The schema defined here should correspond to the definition found in the local file "kd-dd_user.schema.json". Any and all database interaction regarding users will be handled by this model. */


/** Named Module Imports */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


/** Child Schemas: In the JSON Schema file, the following aren't explicitly listed as separate schemas but just inline objects. However, since Mongoose maps inline objects to their own schemas anyway, these are being explicitly created for greater control. */

// This one maps to "VehicleDetails" in the JSON Schema. A virtual alias is used to map the _id field in the database to the "VehicleId" field from the JSON schema. A virtual getter and setter are created to perform this mapping. This will allow all logic to work with "VehicleId".
const vehicleDetailsSchema = new mongoose.Schema({
    OwnerName: {
        type: String
    },
    VehicleMake: {
        type: String,
        required: true
    },
    VehicleModel: {
        type: String,
        required: true
    },
    VehicleColour: {
        type: String,
        required: true
    },
    LicensePlate: {
        type: String,
        match: /^([A-Z]{4}\d{3}|[A-Z]{3}\d{3}|[A-Z]{2}\d{5}|GV[A-Z]\d{4}|[A-Z0-9]{2,8})$/,
        required: true
    },
}, {
    strict: "throw",
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    virtuals: {
        VehicleId: {
            get() {
                return this._id.toHexString();
            },
            set(value) {
                this._id = new mongoose.Types.ObjectId(value);
            }
        }
    }
})

// This one maps to "CreditCardDetails" in the JSON Schema. A virtual alias is used to map the _id field in the database to the "CardId" field from the JSON schema. A virtual getter and setter are created to perform this mapping. This will allow all logic to work with "CardId".
const ccDetailsSchema = new mongoose.Schema({
    IsDefault: {
        type: Boolean,
        required: true
    },
    CC_Name: {
        type: String,
    },
    CC_Type: {
        type: String,
        enum: ["VISA", "MasterCard"],
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
    toObject: { virtuals: true },
    virtuals: {
        CardId: {
            get() {
                return this._id.toHexString();
            },
            set(value) {
                this._id = new mongoose.Types.ObjectId(value);
            }
        }
    }

})

// This one maps to "UserProfile" in the JSON Schema
const userProfileSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    MiddleName: {
        type: String,
    },
    FamilyName: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        match: /^([2-9]\d{2}[2-9]\d{7}|[2-9]\d{2}-[2-9]\d{2}-\d{4})$/,
        required: () => {
            return !this.UserProfile?.EmailAddress;
        }
    },
    EmailAddress: {
        type: String,
        match: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/,
        required: () => {
            return !this.UserProfile?.PhoneNumber;
        }
    },
}, {
    strict: "throw"
})

// This one maps to "AccountInfo" in the JSON Schema
const accountInfoSchema = new mongoose.Schema({
    UserName: {
        type: String,
        match: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,})$/,
        required: true
    },
    UserPassword: {
        type: String,
        required: true
    }
}, {
    strict: "throw"
})


/** Main User Schema: This will be the schema for the top level document to represent a User object. */
const userSchema = new mongoose.Schema({

})


/** Creating a pre-save hook to hash the user password using bcrypt.
 * NOTE: The code was generated with Gemini.
 */
userSchema.pre('save', async function (next) {
    const user = this;

    // ONLY hash the password if it has been modified (or is brand new)
    if (!user.isModified('AccountInfo.UserPassword')) {
        return next();
    }

    try {
        // Generate a secure salt (10 rounds is the industry standard balance)
        const salt = await bcrypt.genSalt(10);

        // Hash the plain-text password using the generated salt
        const hash = await bcrypt.hash(user.AccountInfo.UserPassword, salt);

        // Overwrite the plain-text password with the secure regex-compliant hash
        user.AccountInfo.UserPassword = hash;

        // Release the hook and allow Mongoose to complete the save
        next();
    } catch (error) {
        // Pass any hashing system errors down to the Express handler
        next(error);
    }
});