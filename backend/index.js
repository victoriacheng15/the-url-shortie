const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");
const { errorMiddleware } = require("./middleware/errorMiddleware");

require("dotenv").config();
require("./config/passport.js")(passport);

const port = process.env.PORT || 5000;

const homeRoute = require("./routes/homeRoute");
const shortUrlRoute = require("./routes/shortUrlRoutes");
const authRoutes = require("./routes/authRoutes");

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// session
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
		rolling: true,
		maxAge: 60 * 60 * 1000,
		store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
	}),
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/urls", homeRoute);
app.use("/auth", authRoutes);
app.use("/api/url", shortUrlRoute);

app.use(errorMiddleware);

app.listen(port, () => {
	console.log(`the server is running on ${port}`);
});
