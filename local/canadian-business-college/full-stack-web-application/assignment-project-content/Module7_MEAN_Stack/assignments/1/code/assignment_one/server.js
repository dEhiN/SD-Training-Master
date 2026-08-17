/** This is the Express server that acts as the API server for the React app for Module 7, Assignment 1 */

/** Installed module import */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

/** Custom module import */
import connectToMongoDB from "./config/database_config.js";

/** Configure the dotenv module */
dotenv.config();

/** Create the connection to the Mongo database and then to the collection that will be used for the React app. */
const dbClient = await connectToMongoDB();
const dbCollection = dbClient.db("module_7").collection("assignment_1");

/** Create the Express app */
const app = express();

/** Set up the Express middleware for CORS, handling complex form data through POST, and handling JSON data. */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Set the server listening port */
const PORT = process.env.PORT || 4000;

/** Set up the server API routes */
app.post("/api/save-user", async (req, res) => {
	// Save the user data and return a status of 200
	try {
		await dbCollection.insertOne(req.body);
		res.status(200).send("Received!");
	} catch (error) {
		res.status(500).send("There was a problem!");
	}
});

app.get("/api/get-user", async (req, res) => {
	// Get all of the saved database data, store it in an array, and send it back with a status code of 200
	try {
		let results = await dbCollection.find({}, { projection: { _id: 0 } }).toArray();
		res.status(200).json({
			results: results,
		});
	} catch (error) {
		res.status(500).send("There was a problem!");
	}
});

app.use((req, res) => {
	// Return a status code of 502 with an error message
	res.status(502).send("This route cannot be found on the server!");
});

/** Start the server */
app.listen(PORT, () => {
	console.log(`The server has started on port ${PORT}!`);
});
