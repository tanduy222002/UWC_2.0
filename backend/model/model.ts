class Route {
    routeID: string
    routeName: string //maybe some more field?


    constructor(_id: string, _routeName: string) {
        this.routeID = _id
        this.routeName = _routeName
    }
}

class MCP {
    mcpID: string
    capacity: number = 100
    workerCount: number
    location: string
    routeID: string //route that MCP belong to

    constructor(_id: string, _location: string, _routeID: string, _workerCount: number) {
        this.mcpID = _id
        this.location = _location
        this.routeID = _routeID
        this.workerCount = _workerCount
    }

}

class Vehicle {
    vehicleID: string
    vehicleName: string
    capacity: string
    plate: string

    constructor(_Id: string, _name: string) {
        this.vehicleID = _Id
        this.vehicleName = _name
    }
}


////////////////////////////////////
/////Task
////////////////////////////////////
enum TaskStatus {

}

class Task {
    taskID: string
    status: TaskStatus
    month: number
    week: number
    constructor(_id: string, _month: number, _week: number) { //need to rewrite constructor
        this.taskID = _id
    }
}

class CollectorTask extends Task {
    routeID: string
    vehicleID: string
    collectorID: string

    constructor(_taskID: string, _routeID: string, _vehicleID: string, _collectorID: string, _month: number, _week: number) {
        super(_taskID, _month, _week)
        this.routeID = _routeID
        this.vehicleID = _vehicleID
        this.collectorID = _collectorID
    }
}

class JaniatorTask extends Task {
    mcpID: string
    janiatorID: string
    constructor(_taskID: string, _mcpID: string, _janiatorID: string, _month: number, _week: number) {
        super(_taskID, _month, _week)
        this.mcpID = _mcpID
        this.janiatorID = _janiatorID
    }
}

////////////////////////////////
////User
////////////////////////////////
enum Shift {
    Morning = "Sang",
    Afternoon = "Toi",
    Evening = "Dem",
}
class User {
    userID: string
    userName: string = "testName"
    phone: string = "0000000000"
    workTime: Shift
    workDay: string
    constructor(_id: string, _wt: Shift) {
        this.userID = _id
        this.workTime = _wt
    };
}


class Janiator extends User {
    workingArea: string = "testJaniatorArea"

    constructor(_id: string, _wt: Shift) {
        super(_id, _wt)
    }

    // addTask(task:JaniatorTask){
    //     this.assignedTask.push(task)
    // }

    // removeTask(taskID:string){
    //     for (let i=0;i<this.assignedTask.length;i++){
    //         if (this.assignedTask[i].taskID===taskID){
    //             this.assignedTask.splice(i,1);
    //             return
    //         }
    //     }
    // }
}

class Collector extends User {
    licenseNumber: number = 123456

    constructor(_id: string, _wt: Shift) {
        super(_id, _wt)
    }

    // addTask(task:CollectorTask){
    //     this.assignedTask.push(task)
    // }

    // removeTask(taskID:string){
    //     for (let i=0;i<this.assignedTask.length;i++){
    //         if (this.assignedTask[i].taskID===taskID){
    //             this.assignedTask.splice(i,1);
    //             return
    //         }
    //     }
    // }
}

class BackOfficer extends User {
    managementArea: string = "testmanagementArea"
    constructor(_id: string, _wt: Shift) {
        super(_id, _wt)
    }
}

export { Route, MCP, Collector, Janiator, CollectorTask, JaniatorTask, Vehicle }