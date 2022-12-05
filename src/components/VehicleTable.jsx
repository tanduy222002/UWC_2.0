import './VehicleTable.css'

const routes = [
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
]

const CollectorTable = () => {
    return(
        <table className="collector-table">
            <thead>
                <tr>
                    <th>Mã số xe</th>
                    <th>Sức chứa</th>
                    <th>Tình trạng xe</th>
                    <th>Bảng số xe</th>
                    <th></th>
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

export default CollectorTable