const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		mongoose.set("strictQuery", true);
		const db = await mongoose.connect(process.env.MONGO_URI);

		console.log(`MongoDB connected: ${db.connection.host}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
