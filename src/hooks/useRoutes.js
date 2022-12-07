import { useContext } from 'react'
import { RouteContext } from '../context/RouteContext'


export function useRoutes() {
    return useContext(RouteContext)
} 