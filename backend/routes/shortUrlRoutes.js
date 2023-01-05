const express = require("express");
const router = express.Router();
const { addFull, getShort } = require("../controllers/shortUrlController");
const protect = require("../middleware/authMiddleware")

router.post("/", protect, addFull);
router.get("/:shortUrl", getShort);

module.exports = router;
