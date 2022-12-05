import WeekFilter from '../components/WeekFilter'
import { useParams } from 'react-router-dom'
import Report from '../assets/Report.png'
import './WeekSelect.css'
import DefaultPage from './DefaultPage'
import WeekPage from './WeekPage'
import { Routes, Route} from 'react-router-dom'


const WeekSelect = () => {
    const { week } = useParams()
    return (
        <div className='content-layout'>
            <div className='title'>
                <img src={Report} />
                <h1>BẢNG THỐNG KÊ</h1>
            </div>
            <WeekFilter className='week-filter'/>
            { week === 'overview' ? <DefaultPage /> : <WeekPage /> }

        </div>
    )

}

export default WeekSelect;