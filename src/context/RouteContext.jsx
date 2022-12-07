import { createContext, useState, useEffect } from "react";
import { api } from "../data/api";


export const RouteContext = createContext()


const RouteProvider = ({children}) => {
    const [routes, setRoutes] = useState()

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
            {children}
        </RouteContext.Provider>
    )
}

export default RouteProvider