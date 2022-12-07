import './RouteTable.css'
import { useNavigate } from 'react-router-dom'



const RouteTable = ({routes}) => {
    console.log(routes);
    const navigate = useNavigate()
    return(
        <table className="route-table">
            <thead>
                <tr>
                    <th>Tuyến đường</th>
                    <th>Tài xế</th>
                    <th>Phương tiện</th>
                    <th>MCP</th>
                    <th>Trạng thái</th>
                </tr>
            </thead>
            <tbody>
                {routes?.map((route, i) => {
                    return(
                    <tr key={i}>
                        <td>{route.routeName}</td>
                        <td onClick={() => navigate(`${route.routeIO}/collector`)}>
                            {route.colName}
                        </td>
                        <td onClick={() => navigate(`${route.routeIO}/vehicle`)}>
                            {route.vecName}
                        </td>
                        <td onClick={() => navigate(`${route.routeIO}/MCP`)}>
                            {route.MCP}
                        </td>
                        <td>{route.state}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default RouteTable