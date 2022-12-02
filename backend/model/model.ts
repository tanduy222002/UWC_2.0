class Route{
    routeID:number
    routeName:string //maybe some more field?

    constructor(_id:number,_routeName:string){
        this.routeID=_id
        this.routeName=_routeName
    }
}

class MCP{
    mcpID:number
    capacity:number=100
    workerCount:number
    location:string
    routeID:number //route that MCP belong to

    constructor(_id:number,_location:string,_routeID:number,_workerCount:number){
        this.mcpID=_id
        this.location=_location
        this.routeID=_routeID
        this.workerCount=_workerCount
    }

}

class Vehicle{
    vehicleID:number
    vehicleName:string
    capacity:number=100
    weight:number=100
    fuelConsumption:number=100

    constructor(_Id:number,_name:string){
        this.vehicleID=_Id
        this.vehicleName=_name
    }
}


////////////////////////////////////
/////Task
////////////////////////////////////
enum TaskStatus {

}

class Task{
    taskID:number
    status:TaskStatus
    month:number
    week:number
    constructor(_id:number,_month:number,_week:number){ //need to rewrite constructor
        this.taskID=_id
    }
}

class CollectorTask extends Task{
    static count:number=0
    routeID:number
    vehicleID:number
    collectorID:number

    constructor(_routeID:number,_vehicleID:number,_collectorID:number,_month:number,_week:number){
        CollectorTask.count++
        super(CollectorTask.count,_month,_week)
        this.routeID=_routeID
        this.vehicleID=_vehicleID
        this.collectorID=_collectorID
    }
}

class JaniatorTask extends Task{
    static count:number=0
    mcpID:number
    janiatorID:number
    constructor(_mcpID:number,_janiatorID:number,_month:number,_week:number){
        JaniatorTask.count++
        super(JaniatorTask.count,_month,_week)
        this.mcpID=_mcpID
        this.janiatorID=_janiatorID
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
class User{
    userID:number
    phone:string="0000000000"
    workTime:Shift
    workDay:string
    constructor(_id:number,_wt:Shift){
        this.userID=_id
        this.workTime=_wt
    };
}


class Janiator extends User {
    userName:string
    workingArea: string = "testJaniatorArea"

    constructor(_id:number,_wt:Shift){
        super(_id,_wt)
        this.userName=("testJaniatorName"+_id)
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
    userName
    licenseNumber: number = 123456

    constructor(_id:number,_wt:Shift){
        super(_id,_wt)
        this.userName=("testCollectorName"+_id)
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

class BackOfficer extends User{
    managementArea:string="testmanagementArea"
    constructor(_id:number,_wt:Shift){
        super(_id,_wt)
    }
}

export { Route, MCP, Collector, Janiator, CollectorTask, JaniatorTask, Vehicle,Shift }