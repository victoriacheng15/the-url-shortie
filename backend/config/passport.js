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
				const newUser = {
					googleId: profile.id,
					email: profile.emails[0].value,
					firstName: profile.name.givenName,
					lastName: profile.name.familyName,
				};

				try {
					let user = await User.findOne({ googleId: profile.id });
					if (user) {
						done(null, user);
					} else {
						user = await User.create(newUser);
						return done(null, newUser);
					}
				} catch (error) {
					return done(error);
				}
			},
		),
	);

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((id, done) => {
		// User.findById(id, (err, user) => done(err, user));
		done(null, id)
	});
};
