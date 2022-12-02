"use strict";
exports.__esModule = true;
exports.createCollectorTask = exports.createJaniatorTask = exports.getCollectorTaskByRouteID = void 0;
var data = require("./data");
var model_1 = require("./model");
//tao janiator task trong thang x tuan y
function createJaniatorTask(mcpId, janiatorId, month, week) {
    janiatorId.forEach(function (id) {
        data.JaniatorTaskList.push(new model_1.JaniatorTask(mcpId, Number(id), month, week));
    });
}
exports.createJaniatorTask = createJaniatorTask;
//tao collector task trong thang x tuan y
function createCollectorTask(routeID, collectorID, vehicleID, month, week) {
    data.CollectorTaskList.push(new model_1.CollectorTask(routeID, vehicleID, collectorID, month, week));
}
exports.createCollectorTask = createCollectorTask;
//lay collector task theo id tuyen duong thang x tuan y
function getCollectorTaskByRouteID(routeID, month, week) {
    for (var i = 0; i < data.CollectorTaskList.length; i++) {
        var temp = data.CollectorTaskList[i];
        if (temp.month === month && temp.week === week && temp.routeID === routeID) {
            return temp;
        }
    }
    return null;
}
exports.getCollectorTaskByRouteID = getCollectorTaskByRouteID;
