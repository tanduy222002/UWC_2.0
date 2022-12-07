import { useContext } from "react";
import { RouteUpdateContext } from "../context/RouteContext"

export function useRouteUpdate() {
    return useContext(RouteUpdateContext)
}