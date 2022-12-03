import * as data from './data'
import { CollectorTask, JaniatorTask } from './model'
//tao janiator task trong thang x tuan y

function createJaniatorTask(mcpId: number, janiatorId: string[], month: number, week: number) {
    janiatorId.forEach((id) => {
        data.JaniatorTaskList.push(new JaniatorTask(mcpId, Number(id), month, week))
    })
}
//tao collector task trong thang x tuan y
function createCollectorTask(routeID: number, collectorID: number, vehicleID: number, month: number, week: number) {
    data.CollectorTaskList.push(new CollectorTask(routeID, vehicleID, collectorID, month, week))
}

//lay collector task theo id tuyen duong thang x tuan y
function getCollectorTaskByRouteID(routeID: number, month: number, week: number): CollectorTask | null {
    for (let i = 0; i < data.CollectorTaskList.length; i++) {
        let temp = data.CollectorTaskList[i]
        if (temp.month === month && temp.week === week && temp.routeID === routeID) {
            return temp
        }
    }
    return null;
}

// lay toan bo collector task duoc giao
function getAllCollectorTask(month: number, week: number): CollectorTask[] | null {
    let res: CollectorTask[] = [];
    for (let i = 0; i < data.CollectorTaskList.length; i++) {
        let temp = data.CollectorTaskList[i]
        if (temp.month === month && temp.week === week) {
            res.push(temp);
        }
    }
    return res;
}

// lay toan bo janiator task duoc giao theo mcpId
function getAllJanitorTask(month: number, week: number, mcpId: number): JaniatorTask[] | null {
    let res: JaniatorTask[] = [];
    for (let i = 0; i < data.JaniatorTaskList.length; i++) {
        let tmp = data.JaniatorTaskList[i];
        if (tmp.month === month && tmp.week === week && tmp.mcpID === mcpId) {
            res.push(tmp);
        }
    }
    return res;
}

export { getCollectorTaskByRouteID, createJaniatorTask, createCollectorTask, getAllCollectorTask, getAllJanitorTask }
