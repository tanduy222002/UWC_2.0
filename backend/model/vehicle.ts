//lay tat ca phuong tien chua duoc assign trong thang x tuan y
import * as data from './data'
import { CollectorTask, Vehicle } from './model'

function getUnassignedVec(month: number, week: number): Vehicle[] {
    //get assigned list at specified time
    var assignedID:number[]=[]
    data.CollectorTaskList.forEach((task)=>{
        if (task.month===month&&task.week==week){
            assignedID.push(task.vehicleID)
        }
    })
    var result: Vehicle[] = []
    data.VehicleList.forEach((vec) => {
        if (!assignedID.includes(vec.vehicleID)) {
            result.push(vec)
        }
    })
    return result
}

function getVecNameById(id: number) {
    var result=""
    data.VehicleList.forEach(vehicle => {
        if (vehicle.vehicleID === id) {
            result=vehicle.vehicleName;
        }
    })
    return result;
}
export { getUnassignedVec, getVecNameById }
//