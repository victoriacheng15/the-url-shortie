const ShortUrl = require("../models/shortUrl");

const getHome = async (req, res) => {
	const shortUrls = await ShortUrl.find();
	res.send(shortUrls);
};

module.exports = {
	getHome,
};
