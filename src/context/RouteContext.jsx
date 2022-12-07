import { createContext, useState, useEffect } from "react";
import { api } from "../data/api";


export const RouteContext = createContext()
export const RouteUpdateContext = createContext()

const RouteProvider = ({children}) => {
    const [routes, setRoutes] = useState()

    function updateRoute(routeId, updateEntry, updateValue) {
        const updatedRoutes = routes?.map(route => {
            return route.routeIO === parseInt(routeId) ? {...route, [updateEntry]: updateValue} : route
        })
        setRoutes(updatedRoutes)
    }

    useEffect(() => {     
        const url = '/api/route?week=11&month=12'  
        api.get(url)
        .then(res => {
            const newRoutes = res.data
            setRoutes(newRoutes)
        }) 
    }, [])

    return (
        <RouteContext.Provider value={routes}>
            <RouteUpdateContext.Provider value={updateRoute}>
                {children}
            </RouteUpdateContext.Provider>
        </RouteContext.Provider>
    )
}

export default RouteProvider