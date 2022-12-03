const express = require("express");
const router = express.Router();
const { getAllVehicle } = require("../controllers/vehicle");

router.route("/").get(getAllVehicle);

module.exports = router;
