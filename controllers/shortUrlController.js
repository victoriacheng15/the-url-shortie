const ShortUrl = require('../models/shortUrl')

const addFull = async (req,res) => {
  await ShortUrl.create({
		full: req.body.fullUrl,
	});

	res.redirect("/");
}

const getFull = async (req, res) => {
	const getShort = await ShortUrl.find({ short: req.params.shortUrl });
	const short = getShort[0];

	if (short === null) {
		return res.status(404).json({ message: "the url doesnt exist" });
	}

	short.clicks += 1;
	await short.save();

	res.redirect(short.full);
}

module.exports = {
  addFull,
  getFull
}