require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const App = express();

App.use(express.urlencoded({extended: true}));
App.use(express.json());
App.use(cors({
    origin: process.env.REACT_LOCATION
}));

const Port = process.env.PORT || 3001;

// Connecting to the database
const client = new MongoClient(process.env.MONGODB_CONNECT_URI);
client.connect()
.then(() => console.log("Database connection successful"))
.catch((error) => {
    console.log("Database connection failed");
    console.log(error);
})

// UTILITY FUNCTIONS
const print_get_request = (message) => {
    console.log(`[GET]: ${message}`);
}

const print_post_request = (message) => {
    console.log(`[POST]: ${message}`);
}

// GET methods
App.get("/api/getcovidcamps", async (req, res) => {
    let result = await client.db(process.env.DB_NAME).collection(process.env.COVID_CAMP_COLLECTION).find({});
    let camps = []

    await result.forEach((camp) => camps.push(camp));
    print_get_request(`Retrieving details of ALL Covid Camps`);

    res.json({camps: camps});
})

App.get("/api/getvolunteer/:username", async (req, res) => {
    let result = await client.db(process.env.DB_NAME).collection(process.env.VOLUNTEER_COLLECTION).findOne({
        username: req.params.username
    });

    print_get_request(`Retrieved details of Volunteer ${req.params.username}`);

    res.json({result: result});
})

App.get("/api/getemployee/:username", async (req, res) => {
    let result = await client.db(process.env.DB_NAME).collection(process.env.EMPLOYEE_COLLECTION).findOne({
        username: req.params.username
    });

    print_get_request(`Retrieved details of Employee ${req.params.username}`);

    res.json(result);
})

App.listen(Port, () => {
    console.log(`Server started at Port ${Port}`)
});