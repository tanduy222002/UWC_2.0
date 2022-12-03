"use strict";
exports.__esModule = true;
exports.getAssignedMCP = exports.countAssignedMCP = exports.countMCPWorker = exports.getMCPByRoute = void 0;
var data = require("./data");
function getAllMCP() {
    return data.MCPList;
}
//lay mcp theo route id
function getMCPByRoute(routeID) {
    var result = [];
    data.MCPList.forEach(function (mcp) {
        if (mcp.routeID === routeID) {
            result.push(mcp);
        }
    });
    return result;
}
exports.getMCPByRoute = getMCPByRoute;
//dem so luong janiator cua MCP trong thang x tuan y
function countMCPWorker(mcpID, month, week) {
    var count = 0;
    data.JaniatorTaskList.forEach(function (task) {
        if (task.mcpID === mcpID && task.month === month && task.week === week) {
            count++;
        }
    });
    return count;
}
exports.countMCPWorker = countMCPWorker;
//lay so luong mcp da duoc assigned theo route id trong thang x tuan y 
function countAssignedMCP(routeID, month, week) {
    var assign = 0, count = 0;
    data.MCPList.forEach(function (mcp) {
        if (mcp.routeID === routeID) {
            count++;
            if (countMCPWorker(mcp.mcpID, month, week) === mcp.workerCount) {
                assign++;
            }
        }
    });
    return [assign, count];
}
exports.countAssignedMCP = countAssignedMCP;
function getAssignedMCP(routeID, month, week) {
    var res = [];
    data.MCPList.forEach(function (mcp) {
        if (mcp.routeID === routeID) {
            if (countMCPWorker(mcp.mcpID, month, week) === mcp.workerCount) {
                res.push(mcp);
            }
        }
    });
    return res;
}
exports.getAssignedMCP = getAssignedMCP;
