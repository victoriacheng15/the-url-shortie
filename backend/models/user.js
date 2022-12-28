const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		googleId: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

module.export = mongoose.model("user", userSchema);
