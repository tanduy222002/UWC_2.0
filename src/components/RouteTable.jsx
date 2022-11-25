import './RouteTable.css'

const routes = [
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
]

const RouteTable = () => {
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
                        <td>{route.collector}</td>
                        <td>{route.vehicle}</td>
                        <td>{route.MCP}</td>
                        <td>{route.state}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default RouteTable