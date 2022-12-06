require("dotenv").config();
const express = require("express");
const ShortUrl = require("./models/shortUrl");
const port = process.env.PORT || 5000;

const connectDB = require("./config/db");
const homeRoute = require('./routes/homeRoute')
const shortUrlRoute = require('./routes/shortUrlRoute')

connectDB();

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRoute)
app.use('/', shortUrlRoute)

app.listen(port, () => {
	console.log(`the server is running on ${port}`);
});
