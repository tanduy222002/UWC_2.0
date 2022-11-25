import './WeekSummary.css'

const summaryItems = [
    {title: "Tuyến đường", total: 123, selected: 100},
    {title: "MCP", total: 738, selected: 617},
    {title: "Phương tiện", total: 123, selected: 100},
    {title: "Tài xế", total: 123, selected: 100},
    {title: "Nhân viên", total: 3624, selected: 3085},
]

const SummaryItem = ({title, total, selected}) => {
    return (
        <div className='summary-item'>
            <div className='title'>{title}</div>
            <div className="circular">
                <span>{total}<br/>Tổng cộng</span>
            </div>
            <div className='selected row'>
                <div className='green-dot'></div>   
                <p>Đã phân công: {selected}</p>     
            </div>
            <div className='not-selected row'>
                <div className='red-dot'></div>   
                <p>Chưa phân công: {parseInt(total)-parseInt(selected)}</p>     
            </div>
        </div>   
    )
}

const WeekSummary = () => {
    return (
        <div className="week-summary">
            {summaryItems.map((item, i) => {
                return (
                    <SummaryItem 
                    key={i}
                    title={item.title}
                    total={item.total}
                    selected={item.selected}
                    />
                ) 
            })}
        </div>
    )
}

export default WeekSummary