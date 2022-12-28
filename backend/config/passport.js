const GoogleStrategy = require("passport-google-oauth20");
const User = require("../models/user");

module.exports = function (passport) {
	passport.use(
		new GoogleStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				callbackURL: `${process.env.BACKEND_URL}/auth/google/callback`,
			},
			async (accessToken, refreshToken, profile, done) => {
				console.log(profile);
			},
		),
	);
};
