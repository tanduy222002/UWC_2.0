"use strict";
exports.__esModule = true;
exports.getColNameById = exports.getUnassignedColWithName = exports.getUnassignedCol = void 0;
var data = require("./data");
//lay danh sach tat ca tai xe chua duoc phan cong vapf thang x, tuan y
function getUnassignedCol(month, week) {
    //get assigned list at specified time
    var assignedID = [];
    data.CollectorTaskList.forEach(function (task) {
        if (task.month === month && task.week == week) {
            assignedID.push(task.collectorID);
        }
    });
    var result = [];
    data.CollectorList.forEach(function (coll) {
        if (!assignedID.includes(coll.userID)) {
            result.push(coll);
        }
    });
    return result;
}
exports.getUnassignedCol = getUnassignedCol;
//lay danh sach tat ca tai xe chua duoc phan cong vao thang x, tuan y ma ten co chua chuoi z
function getUnassignedColWithName(month, week, name) {
    //get assigned list at specified time
    var assignedID = [];
    data.CollectorTaskList.forEach(function (task) {
        if (task.month === month && task.week == week) {
            assignedID.push(task.collectorID);
        }
    });
    var result = [];
    data.CollectorList.forEach(function (coll) {
        if (!assignedID.includes(coll.userID) && coll.userName.includes(name)) {
            result.push(coll);
        }
    });
    return result;
}
exports.getUnassignedColWithName = getUnassignedColWithName;
function getColNameById(id) {
    var result = "";
    data.CollectorList.forEach(function (collector) {
        if (collector.userID == id) {
            result = collector.userName;
        }
    });
    return result;
}
exports.getColNameById = getColNameById;
