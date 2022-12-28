const express = require("express");
const router = express.Router();
const { addFull, getFull } = require("../controllers/shortUrlController");

router.post("/shortie", addFull);
router.get("/:shortUrl", getFull);

module.exports = router;
