// const { getCollectorTaskByRouteID } =require("../model/task");
const {getAllCollectorTask, getAllJanitorTask} = require("../model/task")
const { getAssignedMCP} = require("../model/mcp")
const { getJaniatorById } = require("../model/janiator")
const { getColNameById} = require("../model/collector")
const { getRouteNameById} = require("../model/route")
const { getVecNameById} = require("../model/vehicle")
const getAllTask = async (req, res, next) => {
  const week = Number(req.query.week);
  const month = Number(req.query.month);
  let result = [];
  let janiators = [];
  let mcps = [];
  const allCollectorTask = getAllCollectorTask(month, week);
  allCollectorTask.forEach(collectorTask=>{
    // reset
    janiators=[];
    mcps=[];
    // get all MCP id of each route
    const allAssignMcp = getAssignedMCP(collectorTask.routeID, month, week);
    allAssignMcp.forEach(assignedMcp=>{
      // get all janiator task of mcp
      const allJaniatorTask = getAllJanitorTask(month, week, assignedMcp.mcpID);
      allJaniatorTask.forEach(janiatorTask =>{
        const janiator = getJaniatorById(janiatorTask.janiatorID)
        janiators.push({
          "name": janiator.userName,
          "id": janiator.userID,
          "workship": janiator.workTime,
          "workday": janiator.workDay
        })
      })
      mcps.push({
        "name":assignedMcp.location,
        "janiators": janiators
      })
    })

    result.push({
      "name": getRouteNameById(collectorTask.routeID),
      "collector":{
        "name" : getColNameById(collectorTask.collectorID),
        "id": collectorTask.collectorID,
        "vehicle": getVecNameById(collectorTask.vehicleID)
      },
      "mcps": mcps
    })
  })

  res.status(200).json(result);
};

module.exports = { getAllTask };
