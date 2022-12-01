//get all unassigned janiator in thang x tuan y
import * as data from './data'
import {Janiator} from './model'

function getUnassignedJan(month:number,week:number):Janiator[]{
    //get assigned list at specified time
    var assignedID:string[]=[]
    data.JaniatorTaskList.forEach((task)=>{
        if (task.month===month&&task.week==week){
            assignedID.push(task.janiatorID)
        }
    })
    var result:Janiator[]=[]
    data.JaniatorList.forEach((jan)=>{
        if (!assignedID.includes(jan.userID)){
            result.push(jan)
        }
    })
    return result
}