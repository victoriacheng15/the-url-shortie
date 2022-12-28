const ShortUrl = require("../models/shortUrl");


// @desc add a new full url
// @route POST /api/fullUrl
// @access private
const addFull = async (req, res, next) => {
	const { fullUrl } = req.body;
	const newUrl = await ShortUrl.findOne({ full: fullUrl });

	try {
		if (!newUrl) {
			const savedUrl = await ShortUrl.create({full: fullUrl});
			res.status(200).json(savedUrl);
		} else {
			res.status(200).json({message: "the url you entered is exist!"})
		}
	} catch (error) {
		next(error);
	}
};


// @desc get short url
// @route get /api/:shortUrl
// @access private
const getShort = async (req, res) => {
	try {
		const {shortUrl} = req.params
		const getShort = await ShortUrl.find({ short: shortUrl });
		console.log(getShort)
		const short = getShort[0];
		console.log(short);
		if (short === null) {
			return res.status(404).json({ message: "the url doesnt exist" });
		}
		res.status(200).json(short)
		// short.clicks += 1;
		// await short.save();
		// res.redirect(short.full);
	} catch (error) {
		next(error)
	}
};

module.exports = {
	addFull,
	getShort,
};
