import { getMCPByRoute, countMCPWorker } from "../model/mcp";

const getAllMCP = async (req, res, next) => {
  const week = req.query.week;
  const month = req.query.month;
  const routeID = req.query.route_id;
  const mcpList = getMCPByRoute(routeID);
  var result = [];
  mcpList.forEach((mcp) => {
    result.push({
      mcpID: mcp.mcpID,
      mcpName: "mcp " + String(mcp.mcpID),
      address: mcp.location,
      janiator:
        String(countMCPWorker(mcp.mcpID, month, week)) +
        "/" +
        String(mcp.workerCount),
    });
  });
};

const updateMCP = async (req, res, next) => {
  const mcpId = req.body.mcpId;
  const janiatorId = req.body.janiatorId;
  const month = req.body.month;
  const week = req.body.week;
  createJaniatorTask(mcpId, janiatorId, month, week);
  res.status(200).json("Create janitortask successfully");
};

module.exports = { getAllMCP, updateMCP };
