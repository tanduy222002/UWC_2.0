const {
  getAllRoutes,
  getUnassignedRoute,
  getUnassignedRouteWithName,
} = require("../model/route");
const {
  getCollectorTaskByRouteID,
  createCollectorTask,
  createJaniatorTask,
} = require("../model/task");
const { countAssignedMCP } = require("../model/mcp");
const { getColNameById } = require("../model/collector");
const { getVecNameById } = require("../model/vehicle");

const getAllRoutesReq = async (req, res, next) => {
  var name = req.query.name === undefined ? "" : req.query.name;
  const week = Number(req.query.week);
  const month = Number(req.query.month);
  const allRoute = getAllRoutes();

  let result = [];
  allRoute.forEach((route) => {
    if (!route.routeName.includes(name)) {
      return;
    }
    //get collectask from route id
    let collectask = getCollectorTaskByRouteID(route.routeID, month, week);
    console.log(collectask);
    //get mcp from route id
    let countMCP = countAssignedMCP(route.routeID, month, week); //[assigned,count]

    if (collectask == null) {
      result.push({
        routeIO: route.routeID,
        routeName: route.routeName,
        colName: "Chua phan cong",
        vecName: "chua phan cong",
        MCP: String(countMCP[0]) + "/" + String(countMCP[1]),
      });
    } else if (countMCP[0] < countMCP[1]) {
      result.push({
        routeID: route.routeID,
        routeName: route.routeName,
        colName: getColNameById(collectask.collectorID),
        vecName: getVecNameById(collectask.vehicleID),
        MCP: String(countMCP[0]) + "/" + String(countMCP[1]),
      });
    }
  });

  res.status(200).json(result);
};

const updateRoute = (req, res, next) => {
  const route = Number(req.body.route_id);
  const collector = Number(req.body.collector_id);
  const vehicle = Number(req.body.vehicle_id);
  const month = Number(req.body.month);
  const week = Number(req.body.week);

  createCollectorTask(route, collector, vehicle, month, week);
  res.status(200).json("Create collectortask successfully");
};

module.exports = { getAllRoutesReq, updateRoute };
