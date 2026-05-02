/** Imports */
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

/** Global variables */
const app = express();

/** Middleware Setup */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));