"use strict";
exports.__esModule = true;
exports.JaniatorTaskList = exports.CollectorTaskList = exports.JaniatorList = exports.VehicleList = exports.CollectorList = exports.MCPList = exports.RouteList = void 0;
var model_1 = require("./model");
//represend route table
var RouteList = [
    new model_1.Route(1, "testRouteName1"),
    new model_1.Route(2, "testRouteName2"),
    new model_1.Route(3, "testRouteName3"),
];
exports.RouteList = RouteList;
//represent mcp table
var MCPList = [
    new model_1.MCP(1, "testLocation1", 1, 4),
    new model_1.MCP(2, "testLocation2", 1, 4),
    new model_1.MCP(3, "testLocation3", 1, 4),
    new model_1.MCP(4, "testLocation4", 1, 4),
    new model_1.MCP(5, "testLocation5", 2, 4),
    new model_1.MCP(6, "testLocation6", 2, 4),
    new model_1.MCP(7, "testLocation7", 2, 4),
    new model_1.MCP(8, "testLocation8", 2, 4),
    new model_1.MCP(9, "testLocation9", 3, 4),
    new model_1.MCP(10, "testLocation10", 3, 4),
    new model_1.MCP(11, "testLocation11", 3, 4),
    new model_1.MCP(12, "testLocation12", 3, 4),
];
exports.MCPList = MCPList;
//represent vehicle table
var VehicleList = [
    new model_1.Vehicle(1, "testVehicleName1"),
    new model_1.Vehicle(2, "testVehicleName2"),
    new model_1.Vehicle(3, "testVehicleName3"),
    new model_1.Vehicle(4, "testVehicleName4"),
    new model_1.Vehicle(5, "testVehicleName5"),
    new model_1.Vehicle(6, "testVehicleName6"),
    new model_1.Vehicle(7, "testVehicleName7"),
    new model_1.Vehicle(8, "testVehicleName8"),
    new model_1.Vehicle(9, "testVehicleName9"),
    new model_1.Vehicle(10, "testVehicleName10"),
];
exports.VehicleList = VehicleList;
//represent collector table
var CollectorList = [
    new model_1.Collector(1, model_1.Shift.Morning),
    new model_1.Collector(2, model_1.Shift.Afternoon),
    new model_1.Collector(3, model_1.Shift.Evening),
    new model_1.Collector(4, model_1.Shift.Morning),
    new model_1.Collector(5, model_1.Shift.Afternoon),
    new model_1.Collector(6, model_1.Shift.Evening),
    new model_1.Collector(7, model_1.Shift.Morning),
    new model_1.Collector(8, model_1.Shift.Afternoon),
    new model_1.Collector(9, model_1.Shift.Evening),
    new model_1.Collector(10, model_1.Shift.Morning),
];
exports.CollectorList = CollectorList;
//represend Janiator table
var JaniatorList = [
    new model_1.Janiator(1, model_1.Shift.Morning),
    new model_1.Janiator(2, model_1.Shift.Afternoon),
    new model_1.Janiator(3, model_1.Shift.Evening),
    new model_1.Janiator(4, model_1.Shift.Morning),
    new model_1.Janiator(5, model_1.Shift.Afternoon),
    new model_1.Janiator(6, model_1.Shift.Evening),
    new model_1.Janiator(7, model_1.Shift.Morning),
    new model_1.Janiator(8, model_1.Shift.Afternoon),
    new model_1.Janiator(9, model_1.Shift.Evening),
    new model_1.Janiator(10, model_1.Shift.Morning),
    new model_1.Janiator(11, model_1.Shift.Morning),
    new model_1.Janiator(12, model_1.Shift.Afternoon),
    new model_1.Janiator(13, model_1.Shift.Evening),
    new model_1.Janiator(14, model_1.Shift.Morning),
    new model_1.Janiator(15, model_1.Shift.Afternoon),
    new model_1.Janiator(16, model_1.Shift.Evening),
    new model_1.Janiator(17, model_1.Shift.Morning),
    new model_1.Janiator(18, model_1.Shift.Afternoon),
    new model_1.Janiator(19, model_1.Shift.Evening),
];
exports.JaniatorList = JaniatorList;
//represend Collector Task table
var CollectorTaskList = [];
exports.CollectorTaskList = CollectorTaskList;
//represend Janiator Task table
var JaniatorTaskList = [];
exports.JaniatorTaskList = JaniatorTaskList;
