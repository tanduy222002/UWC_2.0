import Collector from '../assets/Collector.png'
import Janitor from '../assets/Janitor.png'
import Route from '../assets/Route.png'
import MCP from '../assets/MCP.png'
import Vehicle from '../assets/Vehicle.png'
import './DefaultPage.css'

const items = [
    {icon: Route, title: "Tổng số tuyến", quantity: "123"},
    {icon: MCP, title: "Tổng số MCP", quantity: "738"},
    {icon: Vehicle, title: "Tổng số phương tiện", quantity: "123"},
    {icon: Collector, title: "Tổng số tài xế", quantity: "123"},
    {icon: Janitor, title: "Tổng số nhân viên", quantity: "3624"}
]

const PageItem = ({icon, title, quantity, className}) => {
    return(
        <div className='item'>
            <div className='title'>
                <img src={icon} />
                <p>{title}</p>
            </div>
            <p className='quantity'>{quantity}</p>
        </div>
    )
}

const DefaultPage = () => {
    return (
        <div className='item-lists'>
            {
                items.map((item, i) => {
                    return (
                        <PageItem 
                        icon={item.icon}
                        title={item.title}
                        quantity={item.quantity}
                        key={i}
                        />
                    )
                })
            }
        </div>
    )
}

export default DefaultPage;