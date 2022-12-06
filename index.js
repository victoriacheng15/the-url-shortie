require("dotenv").config();
const express = require("express");
const ShortUrl = require("./models/shortUrl");

const connectDB = require("./config/db");

connectDB();

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", async (req, res) => {
	const shortUrls = await ShortUrl.find();
	res.render("index", { shortUrls: shortUrls });
});

app.post("/shortie", async (req, res) => {
	await ShortUrl.create({
		full: req.body.fullUrl,
	});

	res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
	const getShort = await ShortUrl.find({ short: req.params.shortUrl });
	const short = getShort[0];

	if (short === null) {
		return res.status(404).json({ message: "the url doesnt exist" });
	}

	short.clicks += 1;
	await short.save();

	res.redirect(short.full);
});

app.listen(port, () => {
	console.log(`the server is running on ${port}`);
});
