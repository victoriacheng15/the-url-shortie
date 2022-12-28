const ShortUrl = require("../models/shortUrl");

const addFull = async (req, res) => {
	const { fullUrl } = req.body;

	const newFullUrl = await ShortUrl.find({ full: fullUrl });

	try {
		if (!newFullUrl) {
			const savedUrl = await newFullUrl.create({ full: fullUrl });
			res.status(200).json(savedUrl);
		}
		res.json({ message: "the full url exists" });
	} catch (error) {
		console.log(error);
	}
};

const getFull = async (req, res) => {
	// const getShort = await ShortUrl.find({ short: req.params.shortUrl });
	// const short = getShort[0];
	// if (short === null) {
	// 	return res.status(404).json({ message: "the url doesnt exist" });
	// }
	// short.clicks += 1;
	// await short.save();
	// res.redirect(short.full);
};

module.exports = {
	addFull,
	getFull,
};
