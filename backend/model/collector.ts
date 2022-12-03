import * as data from './data'
import { Collector } from './model'
//lay danh sach tat ca tai xe chua duoc phan cong vapf thang x, tuan y
function getUnassignedCol(month: number, week: number): Collector[] {
    //get assigned list at specified time
    var assignedID:number[]=[]
    data.CollectorTaskList.forEach((task)=>{
        if (task.month===month&&task.week===week){
            assignedID.push(task.collectorID)
        }
    })

    var result: Collector[] = []
    data.CollectorList.forEach((coll) => {
        if (!assignedID.includes(coll.userID)) {
            result.push(coll)
        }
    })
    return result
}

//lay danh sach tat ca tai xe chua duoc phan cong vao thang x, tuan y ma ten co chua chuoi z

function getUnassignedColWithName(month: number, week: number, name: string): Collector[] {
    //get assigned list at specified time
    var assignedID:number[]=[]
    data.CollectorTaskList.forEach((task)=>{
        if (task.month===month&&task.week===week){
            assignedID.push(task.collectorID)
        }
    })
    var result: Collector[] = []
    data.CollectorList.forEach((coll) => {
        if (!assignedID.includes(coll.userID) && coll.userName.includes(name)) {
            result.push(coll)
        }
    })
    return result
}

function getColNameById(id: number) {
    var result=""
    data.CollectorList.forEach((collector) => {
        if (collector.userID == id) {
            result=collector.userName;
        }
    })
    return result
}
export { getUnassignedCol, getUnassignedColWithName, getColNameById }