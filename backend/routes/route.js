const express = require("express");
const router = express.Router();
const { getAllRoutesReq,updateRoute } = require("../controllers/route");

router.route("/").get(getAllRoutesReq).post(updateRoute);

module.exports = router;
