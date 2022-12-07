import { useState } from 'react'
import './VehicleTable.css'


const VehicleTable = ({vehicles, selected, checkItem}) => {


    return(
        <table className="vehicle-table">
            <thead>
                <tr>
                    <th>Mã số xe</th>
                    <th>Tên xe</th>
                    <th>Sức chứa</th>
                    <th>Tiêu hao nhiên liệu</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {vehicles?.map((vehicle, i) => {
                    return(
                    <tr key={i}>
                        <td>{vehicle.vehicleID}</td>
                        <td>{vehicle.vehicleName}</td>
                        <td>{vehicle.capacity}</td>
                        <td>{vehicle.fuelConsumption}</td>
                        <td>
                            <input 
                                className='checkbox' 
                                type='checkbox' 
                                checked={i === selected ? true : false}
                                onChange={(e)=>checkItem(e, i)}
                            />
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default VehicleTable