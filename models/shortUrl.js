const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const shortUrlSchema = new mongoose.Schema({
	full: {
		type: String,
		required: true,
	},
	short: {
		type: String,
		required: true,
		default: `shortie.${nanoid(6)}`,
	},
	clicks: {
		type: Number,
		required: true,
		default: 0,
	},
	date: {
		type: String,
		default: Date.now,
	},
});

module.exports = mongoose.model("url", shortUrlSchema);
