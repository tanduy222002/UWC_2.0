import {Route,MCP,Vehicle,Collector,CollectorTask,JaniatorTask,Janiator} from './model'
//represend route table
var RouteList:Route[]=[
    new Route("route1","startLoc1"),
    new Route("route2","startLoc2"),
    new Route("route3","startLoc3")
]

//represent mcp table
var MCPList:MCP[]=[
    new MCP("mcp1","route1Loc1","route1"),
    new MCP("mcp2","route1Loc2","route1"),
    new MCP("mcp3","route1Loc3","route1"),
    new MCP("mcp4","route2Loc1","route2"),
    new MCP("mcp5","route2Loc2","route2"),
    new MCP("mcp6","route2Loc3","route2"),
    new MCP("mcp7","route3Loc1","route3"),
    new MCP("mcp8","route3Loc2","route3"),
    new MCP("mcp9","route3Loc3","route3"),
]

//represent vehicle table
var VehicleList:Vehicle[]=[
    new Vehicle("vec1","maybach s450"),
    new Vehicle("vec2","porsche panamera"),
    new Vehicle("vec3","audi q7"),
    
]


//represent collector table
var CollectorList:Collector[]=[
    new Collector("coll1"),
    new Collector("coll2"),
    new Collector("coll3")
]


//represend Janiator table
var JaniatorList:Janiator[]=[
    new Janiator("jan1"),
    new Janiator("jan2"),
    new Janiator("jan3"),
    new Janiator("jan4"),
    new Janiator("jan5")
]

//represend Collector Task table
var CollectorTaskList:CollectorTask[]=[]

//represend Janiator Task table
var JaniatorTaskList:JaniatorTask[]=[]

export {RouteList,MCPList,CollectorList,VehicleList,JaniatorList,CollectorTaskList,JaniatorTaskList}