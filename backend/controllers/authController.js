const jwt = require("jsonwebtoken");

const googleCallback = (req, res) => {
	const userId = {
		id: req.user.id,
	};

	const token = jwt.sign(userId, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});

	res.cookie("jwt", token, { httpOnly: true });
	res.redirect("/");
};

const logout = (req, res, next) => {
	req.logout((error) => {
		if (error) {
			return next(error);
		}

		res.redirect("/");
	});
};

module.exports = {
	googleCallback,
	logout,
};
