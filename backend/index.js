require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;

const connectDB = require("./config/db");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const homeRoute = require("./routes/homeRoute");
const shortUrlRoute = require("./routes/shortUrlRoute");

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", homeRoute);
app.use("/api", shortUrlRoute);

app.use(errorMiddleware);

app.listen(port, () => {
	console.log(`the server is running on ${port}`);
});
