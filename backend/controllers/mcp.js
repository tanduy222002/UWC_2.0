const  { getMCPByRoute, countMCPWorker } =require("../model/mcp");
const {createJaniatorTask}=require("../model/task")
const getAllMCP = async (req, res, next) => {
  const week = Number(req.query.week);
  const month = Number(req.query.month);
  const routeID = Number(req.query.route_id);
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
  res.json(result);
};

const updateMCP = async (req, res, next) => {
  console.log(req.body)
  const mcpId = Number(req.body.mcpId);
  const janiatorId = req.body.janiatorId;
  const month = Number(req.body.month);
  const week = Number(req.body.week);
  createJaniatorTask(mcpId, janiatorId, month, week);
  res.status(200).json("Create janitortask successfully");
};

module.exports = { getAllMCP, updateMCP };
