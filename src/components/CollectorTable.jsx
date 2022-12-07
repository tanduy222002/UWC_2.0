import './CollectorTable.css'



const CollectorTable = ({collectors}) => {
    return(
        <table className="collector-table">
            <thead>
                <tr>
                    <th>Họ và tên</th>
                    <th>Lịch làm việc</th>
                    <th>Giờ làm việc</th>
                    <th>Số điện thoại</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {collectors?.map((collector, i) => {
                    return(
                    <tr key={i}>
                        <td>{collector.userID}</td>
                        <td>{collector.workDay}</td>
                        <td>{collector.workTime}</td>
                        <td>{collector.licenseNumber}</td>
                        <td>
                            <input className='checkbox' type='checkbox' />
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default CollectorTable