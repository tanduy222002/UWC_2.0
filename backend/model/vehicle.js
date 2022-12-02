"use strict";
exports.__esModule = true;
exports.getVecNameById = exports.getUnassignedVec = void 0;
//lay tat ca phuong tien chua duoc assign trong thang x tuan y
var data = require("./data");
function getUnassignedVec(month, week) {
    //get assigned list at specified time
    var assignedID = [];
    data.CollectorTaskList.forEach(function (task) {
        if (task.month === month && task.week == week) {
            assignedID.push(task.vehicleID);
        }
    });
    var result = [];
    data.VehicleList.forEach(function (vec) {
        if (!assignedID.includes(vec.vehicleID)) {
            result.push(vec);
        }
    });
    return result;
}
exports.getUnassignedVec = getUnassignedVec;
function getVecNameById(id) {
    var result = "";
    data.VehicleList.forEach(function (vehicle) {
        if (vehicle.vehicleID === id) {
            result = vehicle.vehicleName;
        }
    });
    return result;
}
exports.getVecNameById = getVecNameById;
//
