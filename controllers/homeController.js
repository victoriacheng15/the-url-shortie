const ShortUrl = require("../models/shortUrl");

const getHome = async(req, res) => {
  const shortUrls = await ShortUrl.find();
	res.render("index", { shortUrls: shortUrls });
}

module.exports = {
  getHome
}