import {Route,MCP,Vehicle,Collector,CollectorTask,JaniatorTask,Janiator,Shift} from './model'
//represend route table
var RouteList:Route[]=[
    new Route(1,"testRouteName1"),
    new Route(2,"testRouteName2"),
    new Route(3,"testRouteName3"),
]

//represent mcp table
var MCPList:MCP[]=[
    new MCP(1,"testLocation1",1,4),
    new MCP(2,"testLocation2",1,4),
    new MCP(3,"testLocation3",1,4),
    new MCP(4,"testLocation4",1,4),
    new MCP(5,"testLocation5",2,4),
    new MCP(6,"testLocation6",2,4),
    new MCP(7,"testLocation7",2,4),
    new MCP(8,"testLocation8",2,4),
    new MCP(9,"testLocation9",3,4),
    new MCP(10,"testLocation10",3,4),
    new MCP(11,"testLocation11",3,4),
    new MCP(12,"testLocation12",3,4),
    
]

//represent vehicle table
var VehicleList:Vehicle[]=[
    new Vehicle(1,"testVehicleName1"),
    new Vehicle(2,"testVehicleName2"),
    new Vehicle(3,"testVehicleName3"),
    new Vehicle(4,"testVehicleName4"),
    new Vehicle(5,"testVehicleName5"),
    new Vehicle(6,"testVehicleName6"),
    new Vehicle(7,"testVehicleName7"),
    new Vehicle(8,"testVehicleName8"),
    new Vehicle(9,"testVehicleName9"),
    new Vehicle(10,"testVehicleName10"),
]


//represent collector table
var CollectorList:Collector[]=[
    new Collector(1,Shift.Morning),
    new Collector(2,Shift.Afternoon),
    new Collector(3,Shift.Evening),
    new Collector(4,Shift.Morning),
    new Collector(5,Shift.Afternoon),
    new Collector(6,Shift.Evening),
    new Collector(7,Shift.Morning),
    new Collector(8,Shift.Afternoon),
    new Collector(9,Shift.Evening),
    new Collector(10,Shift.Morning),    
]


//represend Janiator table
var JaniatorList:Janiator[]=[
    new Janiator(1,Shift.Morning),
    new Janiator(2,Shift.Afternoon),
    new Janiator(3,Shift.Evening),
    new Janiator(4,Shift.Morning),
    new Janiator(5,Shift.Afternoon),
    new Janiator(6,Shift.Evening),
    new Janiator(7,Shift.Morning),
    new Janiator(8,Shift.Afternoon),
    new Janiator(9,Shift.Evening),
    new Janiator(10,Shift.Morning),    
]

//represend Collector Task table
var CollectorTaskList:CollectorTask[]=[]

//represend Janiator Task table
var JaniatorTaskList:JaniatorTask[]=[]

export {RouteList,MCPList,CollectorList,VehicleList,JaniatorList,CollectorTaskList,JaniatorTaskList}