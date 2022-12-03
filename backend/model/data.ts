import { Route, MCP, Vehicle, Collector, CollectorTask, JaniatorTask, Janiator, Shift } from './model'
//represend route table
var RouteList: Route[] = [
    new Route(1, "testRouteName1"),
    new Route(2, "testRouteName2"),
    new Route(3, "testRouteName3"),
]

//represent mcp table
var MCPList: MCP[] = [
    new MCP(1, "Lc1", 1, 4),
    new MCP(2, "Lc2", 1, 4),
    new MCP(3, "Lc3", 1, 4),
    new MCP(4, "Lc4", 1, 4),
    new MCP(5, "Lc5", 2, 4),
    new MCP(6, "Lc6", 2, 4),
    new MCP(7, "Lc7", 2, 4),
    new MCP(8, "Lc8", 2, 4),
    new MCP(9, "Lc9", 3, 4),
    new MCP(10, "Lc10", 3, 4),
    new MCP(11, "Lc11", 3, 4),
    new MCP(12, "Lc12", 3, 4),

]

//represent vehicle table
var VehicleList: Vehicle[] = [
    new Vehicle(1, "testVehicleName1"),
    new Vehicle(2, "testVehicleName2"),
    new Vehicle(3, "testVehicleName3"),
    new Vehicle(4, "testVehicleName4"),
    new Vehicle(5, "testVehicleName5"),
    new Vehicle(6, "testVehicleName6"),
    new Vehicle(7, "testVehicleName7"),
    new Vehicle(8, "testVehicleName8"),
    new Vehicle(9, "testVehicleName9"),
    new Vehicle(10, "testVehicleName10"),
]


//represent collector table
var CollectorList: Collector[] = [
    new Collector(1, Shift.Morning),
    new Collector(2, Shift.Afternoon),
    new Collector(3, Shift.Evening),
    new Collector(4, Shift.Morning),
    new Collector(5, Shift.Afternoon),
    new Collector(6, Shift.Evening),
    new Collector(7, Shift.Morning),
    new Collector(8, Shift.Afternoon),
    new Collector(9, Shift.Evening),
    new Collector(10, Shift.Morning),
]


//represend Janiator table
var JaniatorList: Janiator[] = [
    new Janiator(1, Shift.Morning),
    new Janiator(2, Shift.Afternoon),
    new Janiator(3, Shift.Evening),
    new Janiator(4, Shift.Morning),
    new Janiator(5, Shift.Afternoon),
    new Janiator(6, Shift.Evening),
    new Janiator(7, Shift.Morning),
    new Janiator(8, Shift.Afternoon),
    new Janiator(9, Shift.Evening),
    new Janiator(10, Shift.Morning),
    new Janiator(11, Shift.Morning),
    new Janiator(12, Shift.Afternoon),
    new Janiator(13, Shift.Evening),
    new Janiator(14, Shift.Morning),
    new Janiator(15, Shift.Afternoon),
    new Janiator(16, Shift.Evening),
    new Janiator(17, Shift.Morning),
    new Janiator(18, Shift.Afternoon),
    new Janiator(19, Shift.Evening),
]

//represend Collector Task table
var CollectorTaskList: CollectorTask[] = []

//represend Janiator Task table
var JaniatorTaskList: JaniatorTask[] = []

export { RouteList, MCPList, CollectorList, VehicleList, JaniatorList, CollectorTaskList, JaniatorTaskList }