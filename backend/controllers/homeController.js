const ShortUrl = require("../models/shortUrl");

const getHome = async (req, res) => {
	const shortUrls = await ShortUrl.find();
	res.status(200).json(shortUrls);
};

module.exports = {
	getHome,
};
