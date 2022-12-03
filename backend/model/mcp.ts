import * as data from './data'
import {MCP,CollectorTask} from './model'

function getAllMCP():MCP[]{
    return data.MCPList
}
//lay mcp theo route id
function getMCPByRoute(routeID:number):MCP[]{
    var result:MCP[]=[]
    data.MCPList.forEach((mcp)=>{
        if (mcp.routeID===routeID){
            result.push(mcp)
        }
    })
    return result
}

//dem so luong janiator cua MCP trong thang x tuan y
function countMCPWorker(mcpID:number,month:number,week:number):number{
    var count:number=0
    data.JaniatorTaskList.forEach((task)=>{
        if (task.mcpID===mcpID&&task.month===month&&task.week===week){
            count++
        }
    })
    return count
}
//lay so luong mcp da duoc assigned theo route id trong thang x tuan y 
function countAssignedMCP(routeID:number,month:number,week:number):number[]{
    var assign=0,count=0
    data.MCPList.forEach((mcp)=>{
        if (mcp.routeID===routeID){
            count++
            if (countMCPWorker(mcp.mcpID,month,week)===mcp.workerCount){
                assign++
            }
        }
    })
    return [assign,count]
}

function getAssignedMCP(routeID:number,month:number,week:number):MCP[]{
    let res:MCP[]=[];
    data.MCPList.forEach((mcp)=>{
        if (mcp.routeID===routeID){
            if (countMCPWorker(mcp.mcpID,month,week)===mcp.workerCount){
                res.push(mcp);
            }
        }
    })
    return res;
}

export {getMCPByRoute,countMCPWorker,countAssignedMCP, getAssignedMCP}