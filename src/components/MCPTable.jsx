import { useNavigate } from 'react-router-dom'
import './MCPTable.css'

const routes = [
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
    {name: "TĐ-LT", collector: "Nguyễn Văn A", vehicle: "2T-01", MCP: "6/6", state: "Đã hoàn thành"},
]

const MCPTable = () => {
    const navigate = useNavigate()
    return(
        <table className="mcp-table">
            <thead>
                <tr>
                    <th>MCP</th>
                    <th>Địa chỉ</th>
                    <th>Nhân viên đã phân công</th>
                </tr>
            </thead>
            <tbody>
                {routes.map((route, i) => {
                    return(
                    <tr key={i} onClick={() => navigate('/week1/mcp/janitor')}>
                        <td>{route.name}</td>
                        <td>
                            {route.collector}
                        </td>
                        <td>
                            {route.vehicle}
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


export default MCPTable