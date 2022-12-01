import * as data from './data'
import { CollectorTask, JaniatorTask } from './model'
//tao janiator task trong thang x tuan y

function createJaniatorTask(mcpId : number, janiatorId : number[], month:number, week:number) {
    return null
}
//tao collector task trong thang x tuan y
function createCollectorTask(route: number, collector:number, vehicle:number, month:number, week:number ) {
    return null
}

//lay collector task theo id tuyen duong thang x tuan y
function getCollectorTaskByRouteID(routeID: string, month: number, week: number): CollectorTask | null {
    for (let i = 0; i < data.CollectorTaskList.length; i++) {
        let temp = data.CollectorTaskList[i]
        if (temp.month === month && temp.week === week && temp.routeID === routeID) {
            return temp
        }
    }
    return null;
}

export { getCollectorTaskByRouteID, createJaniatorTask, createCollectorTask }
