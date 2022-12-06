require("dotenv").config();
const express = require("express");

const connectDB = require('./config/db')

connectDB()

const app = express();
app.set("view engine", "ejs");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.render("index");
});

app.post("shortie", (req, res) => {
	//
});

app.listen(port, () => {
	console.log(`the server is running on ${port}`);
});
