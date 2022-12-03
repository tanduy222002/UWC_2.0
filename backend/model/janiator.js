"use strict";
exports.__esModule = true;
exports.getJaniatorById = exports.getUnassignedJan = void 0;
//get all unassigned janiator in thang x tuan y
var data = require("./data");
function getUnassignedJan(month, week) {
    //get assigned list at specified time
    var assignedID = [];
    data.JaniatorTaskList.forEach(function (task) {
        if (task.month === month && task.week == week) {
            assignedID.push(task.janiatorID);
        }
    });
    var result = [];
    data.JaniatorList.forEach(function (jan) {
        if (!assignedID.includes(jan.userID)) {
            result.push(jan);
        }
    });
    return result;
}
exports.getUnassignedJan = getUnassignedJan;
function getJaniatorById(id) {
    var res = null;
    for (var i = 0; i < data.JaniatorList.length; i++) {
        var tmp = data.JaniatorList[i];
        if (tmp.userID === id) {
            res = tmp;
        }
    }
    return res;
}
exports.getJaniatorById = getJaniatorById;
