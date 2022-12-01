import {
  getAllRoutes,
  getUnassignedRoute,
  getUnassignedRouteWithName,
} from "../model/route";
import { getCollectorTaskByRouteID } from "../model/task";
import { countAssignedMCP } from "../model/mcp";
import { getColNameById } from "../model/collector";
import { getVecNameById } from "../model/vehicle";
import {
  getCollectorTaskByRouteID,
  createJaniatorTask,
  createCollectorTask,
} from "../model/task";

const getAllRoutes = async (req, res, next) => {
  var name = req.query.name === undefined ? "" : req.query.name;
  const week = req.query.week;
  const month = req.query.week;
  const allRoute = getAllRoutes();

  let result = [];
  allRoute.forEach((route) => {
    if (!route.routeName.includes(name)) {
      return;
    }
    //get collectask from route id
    let collectask = getCollectorTaskByRouteID(route.routeID, month, week);

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
  const route = req.body.route_id;
  const collector = req.body.collecotr_id;
  const vehicle = req.body.vehicle_id;
  const month = req.body.month;
  const week = req.body.week;

  createCollectorTask(route, collector, vehicle, month, week);
  res.status(200).json("Create collectortask successfully");
};

module.exports = { getAllRoutes, updateRoute };
