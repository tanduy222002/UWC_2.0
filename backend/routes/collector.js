const express = require("express");
const router = express.Router();
const { getAllCollector } = require("../controllers/collector");

router.route("/").get(getAllCollector);

module.exports = router;
