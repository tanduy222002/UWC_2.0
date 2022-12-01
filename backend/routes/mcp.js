const express = require("express");
const router = express.Router();
const { getAllMCP, updateMCP } = require("../controllers/mcp");

router.route("/").get(getAllMCP).post(updateMCP);

module.exports = router;
