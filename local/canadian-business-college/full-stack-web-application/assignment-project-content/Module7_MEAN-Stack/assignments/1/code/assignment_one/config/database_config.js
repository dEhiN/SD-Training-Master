/** This solely and explicitly handles the connection to the Mongo Atlas database. It uses Mongoose to do so. */

/** Installed module imports */
import { MongoClient } from "mongodb";

/** Script variable to store static console and return messages */
const msgsObj = {
	errors: {
		SERVQUIT: "The server is quitting...",
		ERRLEAD: "Please see below for the specific error:",
		mongodb: {
			DBFAIL: "The connection to the Mongo database could not be established.",
			NODBURI: "The connection URI to the database is missing!",
			NODBUSERNAME: "The database connection username is missing!",
			NODBUSERPASSWORD: "The database connection password is missing!",
		},
	},
	consoles: {
		mongodb: {
			DBATTEMPT: "Attempting connection to Mongo Atlas...",
			DBCONNECTED: "Connection to the Mongo database was successfully established!",
		},
	},
	misc: {
		mongodb: {
			DBUSERNAME: "<db_username>",
			DBPASSWORD: "<db_password>",
		},
	},
};

/**
 * This function creates the actual connection to a MongoDB Atlas cluster. It relies on the following environment variables:
 *
 * MONGODB_URI - The connection string to the cluster.
 *
 * MONGO_UNAME - The username for the cluster.
 *
 * MONGO_PWD - The password for the cluster.
 *
 * NOTE: The function looks for the strings "\<db_username\>" and "\<db_password\>" in the connection string and replaces them with the environmental variables mentioned above. If they are not in the connection string, an error will be generated.
 *
 * NOTE: If there are any errors in trying to connect, the error message is logged to the console and the process quits. This means the server will quit as well.
 *
 * @returns {MongoClient} An instance of MongoClient that is connected to the expected cluster.
 *
 */
const connectToMongoDB = async () => {
	console.log(msgsObj.consoles.mongodb.DBATTEMPT);
	try {
		// Variables for the database connection
		const dbConnectionUri = process.env.MONGODB_URI;
		const dbUserName = process.env.MONGODB_UNAME;
		const dbUserPassword = process.env.MONGODB_PWD;

		/** Check to make sure the database related variables have values. If not, throw an error */
		if (!dbConnectionUri) {
			throw new Error(msgsObj.errors.mongodb.NODBURI);
		}
		if (!dbUserName) {
			throw new Error(msgsObj.errors.mongodb.NODBUSERNAME);
		}
		if (!dbUserPassword) {
			throw new Error(msgsObj.errors.mongodb.NODBUSERPASSWORD);
		}

		/** Add the username and password to the connection URI */
		let uri = dbConnectionUri;
		uri = uri.replace(msgsObj.misc.mongodb.DBUSERNAME, dbUserName);
		uri = uri.replace(msgsObj.misc.mongodb.DBPASSWORD, dbUserPassword);

		/** Create a new MongoClient object to use for the connection */
		let mongoConnection = new MongoClient(uri);

		/** Connect to the MongoDB */
		await mongoConnection.connect(uri);
		console.log(msgsObj.consoles.mongodb.DBCONNECTED);

		return mongoConnection;
	} catch (err) {
		/** Specify that the database connection failed and the reason why. */
		console.log(msgsObj.errors.mongodb.DBFAIL + "\n" + msgsObj.errors.ERRLEAD);
		console.error(err);
		console.log(msgsObj.errors.SERVQUIT);
		/** Shut the server down since there's no connection to the database. */
		process.exit(1);
	}
};

export default connectToMongoDB;
