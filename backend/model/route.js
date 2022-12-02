"use strict";
exports.__esModule = true;
exports.getUnassignedRouteWithName = exports.getUnassignedRoute = exports.getAllRoutes = void 0;
var data = require("./data");
function getAllRoutes() {
    return data.RouteList;
}
exports.getAllRoutes = getAllRoutes;
//lay list cac tuyen duong chua assign trong thang x tuan y
function getUnassignedRoute(month, week) {
    var assignedID = [];
    data.CollectorTaskList.forEach(function (task) {
        if (task.month === month && task.week == week) {
            assignedID.push(task.routeID);
        }
    });
    var result = [];
    data.RouteList.forEach(function (route) {
        if (!assignedID.includes(route.routeID)) {
            result.push(route);
        }
    });
    return result;
}
exports.getUnassignedRoute = getUnassignedRoute;
function getUnassignedRouteWithName(month, week, name) {
    var assignedID = [];
    data.CollectorTaskList.forEach(function (task) {
        if (task.month === month && task.week == week) {
            assignedID.push(task.routeID);
        }
    });
    var result = [];
    data.RouteList.forEach(function (route) {
        if (!assignedID.includes(route.routeID) && route.routeName.includes(name)) {
            result.push(route);
        }
    });
    return result;
}
exports.getUnassignedRouteWithName = getUnassignedRouteWithName;
