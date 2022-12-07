import './JanitorTable.css'

const routes = [
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
]

const JanitorTable = () => {
    return(
        <table className="janitor-table">
            <thead>
                <tr>
                    <th>MSNV</th>
                    <th>Họ và tên</th>
                    <th>Lịch làm việc</th>
                    <th>Giờ làm việc</th>
                    <th>Số điện thoại</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {routes.map((route, i) => {
                    return(
                    <tr key={i}>
                        <td></td>
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

export default JanitorTable