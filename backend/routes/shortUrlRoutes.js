const express = require("express");
const router = express.Router();
const { addFull, getShort } = require("../controllers/shortUrlController");

router.post("/", addFull);
router.get("/:shortUrl", getShort);

module.exports = router;
