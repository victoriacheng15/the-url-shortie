const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

const shortUrlSchema = new mongoose.Schema(
	{
		full: {
			type: String,
			required: true,
		},
		short: {
			type: String,
			required: true,
			default: nanoid(6),
		},
		clicks: {
			type: Number,
			required: true,
			default: 0,
		},
		expiresAt: {
			type: Date,
			expires: "1h",
			default: Date.now,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("url", shortUrlSchema);
