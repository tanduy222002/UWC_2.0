const express = require("express");
const router = express.Router();
const { getAllJaniator } = require("../controllers/janiator");

router.route("/").get(getAllJaniator);

module.exports = router;
