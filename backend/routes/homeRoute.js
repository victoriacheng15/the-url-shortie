const express = require("express");
const router = express.Router();
const { getHome } = require("../controllers/homeController");

// to be Delete later

router.get("/", getHome);

module.exports = router;
