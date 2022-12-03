import http from "../http_handeler"

 class Service{
    

    getRoute(week, month){
        return http.get(`/api/route?week=${week}&month=${month}`);
    }
    getRouteByName(name, week, month){
        return http.get(`/api/route?name=${name}&week=${week}&month=${month}`)
    }

    getCollector(week, month){
        return http.get(`/api/collector?week=${week}&month=${month}`)
    }
    getCollectorByName(name, week, month){
        return http.get(`/api/collector?name=${name}&week=${week}&month=${month}`)
    }

    getVehicle(week, month){
        return http.get(`/api/vehicle?week=${week}&month=${month}`)
    }
    

}
export default new Service()
