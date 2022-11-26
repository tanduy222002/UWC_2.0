
import * as data from './data'
import {Route} from './model'

function getAllRoutes():Route[]{
    return data.RouteList
}

function getUnassignedRoute():Route[]{

    let res:Route[]=[]

    data.RouteList.forEach((route:Route)=>{
        if (!route.assigned){
            res.push(route)
        }
    })
    
    return res
}



