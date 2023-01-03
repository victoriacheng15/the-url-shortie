const express = require("express");
const router = express.Router();
const passport = require("passport");

// login with Google
router.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/login" }),
	(req, res) => {
		// res.send("you have reached the callback");
		res.send(req.user)
		// res.redirect("/");
	},
);

// logout
router.get("/logout", (req, res, next) => {
	req.logout((error) => {
		if (error) {
			return next(error);
		}

		res.redirect("/");
	});
});

module.exports = router;
