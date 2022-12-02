
import * as data from './data'
import {Route, Vehicle} from './model'

function getAllRoutes():Route[]{
    return data.RouteList
}

//lay list cac tuyen duong chua assign trong thang x tuan y
function getUnassignedRoute(month:number,week:number):Route[]{
    var assignedID:number[]=[]
    data.CollectorTaskList.forEach((task)=>{
        if (task.month===month&&task.week==week){
            assignedID.push(task.routeID)
        }
    })
    var result:Route[]=[]
    data.RouteList.forEach((route)=>{
        if (!assignedID.includes(route.routeID)){
            result.push(route)
        }
    })
    return result
}
function getUnassignedRouteWithName(month:number,week:number,name:string):Route[]{
    var assignedID:number[]=[]
    data.CollectorTaskList.forEach((task)=>{
        if (task.month===month&&task.week==week){
            assignedID.push(task.routeID)
        }
    })
    var result:Route[]=[]
    data.RouteList.forEach((route)=>{
        if (!assignedID.includes(route.routeID)&&route.routeName.includes(name)){
            result.push(route)
        }
    })
    return result
}

export {getAllRoutes,getUnassignedRoute,getUnassignedRouteWithName}