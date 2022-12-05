import './RouteTable.css'
import { useNavigate } from 'react-router-dom'

const routes = [
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
]

const RouteTable = () => {
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
                {routes.map((route, i) => {
                    return(
                    <tr key={i}>
                        <td>{route.name}</td>
                        <td onClick={(navigate('collector'))}>
                            {route.collector}
                        </td>
                        <td onClick={(navigate('vehicle'))}>
                            {route.vehicle}
                        </td>
                        <td onClick={(navigate('MCP'))}>
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