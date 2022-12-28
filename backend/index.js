require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;

const connectDB = require("./config/db");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const homeRoute = require("./routes/homeRoute");
const shortUrlRoute = require("./routes/shortUrlRoutes");
const authRoutes = require("./routes/authRoutes");

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/urls", homeRoute);
app.use("/api/auth", authRoutes);
app.use("/api/url", shortUrlRoute);

app.use(errorMiddleware);

app.listen(port, () => {
	console.log(`the server is running on ${port}`);
});
