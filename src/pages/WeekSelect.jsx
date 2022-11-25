import WeekFilter from '../components/WeekFilter'
import Report from '../assets/Report.png'
import './WeekSelect.css'
import DefaultPage from './DefaultPage'
import WeekPage from './WeekPage'
import { Routes, Route} from 'react-router-dom'


const WeekSelect = () => {
    return (
        <div className='content-layout'>
            <div className='title'>
                <img src={Report} />
                <h1>BẢNG THỐNG KÊ</h1>
            </div>
            <WeekFilter className='week-filter'/>
            <Routes>
                <Route path='/' element={<DefaultPage />} />
                <Route path='/:week' element={<WeekPage />} />
            </Routes>
        </div>
    )

}

export default WeekSelect;