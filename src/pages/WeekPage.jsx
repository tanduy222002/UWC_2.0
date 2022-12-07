import SeachBar from '../components/SeachBar'
import WeekSummary from '../components/WeekSummary'
import { useRoutes } from '../hooks/useRoutes'
import Form from 'react-bootstrap/Form'
import RouteTable from '../components/RouteTable'

import './WeekPage.css'
import { useState } from 'react'

const options = ['Phân loại','Đã hoàn thành', 'Chưa hoàn thành', 'Chưa phân công tài xế', 'Chưa phân công phương tiện']


const WeekPage = () => {
    const [name,setName]=useState('')
    let routes = useRoutes()
    if(name!=''){
        routes=routes.filter(route=>route.routeName.toLowerCase().includes(name.toLowerCase()))
    }

    return(
        <div>
            <WeekSummary />
            <div className='seach-filter'>
                <SeachBar placeHolder={'tìm kiếm theo tuyến đường'}
                setName={setName}/>
                <Form.Select>   
                    {options.map((option, i) => {
                        return <option key={i} value={option}>{option}</option>
                    })}
                </Form.Select>
            </div>
            <RouteTable routes={routes} />
            <button className='submit' style={{marginTop: "10px"}}>
                Gửi thông báo
            </button>
        </div>
    )
}


export default WeekPage