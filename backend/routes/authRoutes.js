const express = require("express");
const router = express.Router();
const passport = require("passport");
const { googleCallback, logout } = require("../controllers/authController");

// login with Google
router.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/login" }),
	googleCallback,
);

// logout
router.get("/logout", logout);

module.exports = router;
