class Route{
    routeID:string
    startLocation:string //maybe some more field?
    assigned:boolean //whether route have vehicle and collector

    constructor(_id:string,_startLoc:string,_assigned=false){
        this.routeID=_id
        this.startLocation=_startLoc
        this.assigned=_assigned
    }
}

class MCP{
    mcpID:string
    capacity:number=100
    location:string
    routeID:string //route that MCP belong to

    constructor(_id:string,_location:string,_routeID:string){
        this.mcpID=_id
        this.location=_location
        this.routeID=_routeID
    }

}

class Vehicle{
    vehicleID:string
    vehicleName:string
    capacity:number=100
    weight:number=100
    fuelConsumption:number=100
    assigned:boolean=false //whether the Vehicle had been assigned

    constructor(_Id:string,_name:string){
        this.vehicleID=_Id
        this.vehicleName=_name
    }
}


////////////////////////////////////
/////Task
////////////////////////////////////
enum TaskStatus{

}

class Task{
    taskID:string
    startTime:Date=new Date()
    endTime:Date=new Date()
    status:TaskStatus


    constructor(_id:string){ //need to rewrite constructor
        this.taskID=_id
    }
}

class CollectorTask extends Task{
    routeID:string
    vehicleID:string
    collectorID:string
    constructor(_taskID:string,_routeID:string,_vehicleID:string,_collectorID:string){
        super(_taskID)
        this.routeID=_routeID
        this.vehicleID=_vehicleID
        this.collectorID=_collectorID
    }
}

class JaniatorTask extends Task{
    mcpID:string
    janiatorID:string
    constructor(_taskID:string,_mcpID:string,_janiatorID:string){
        super(_taskID)
        this.mcpID=_mcpID
        this.janiatorID=_janiatorID
    }
}

////////////////////////////////
////User
////////////////////////////////
class User{
    userID:string
    userName:string="testName"
    address:string="testAddress"
    email:string="testEmail@testServer.com"

    constructor(_id:string){
        this.userID=_id
    };
}


class Janiator extends User{
    workingArea:string="testJaniatorArea"

    constructor(_id:string){
        super(_id)
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

class Collector extends User{
    licenseNumber:number=123456

    constructor(_id:string){
        super(_id)
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
    constructor(_id:string){
        super(_id)
    }
}

export {Route,MCP,Collector,Janiator,CollectorTask,JaniatorTask,Vehicle}