import WeekFilter from '../components/WeekFilter'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import Report from '../assets/Report.png'
import './WeekSelect.css'
import DefaultPage from './DefaultPage'
import WeekPage from './WeekPage'


const WeekSelect = () => {
    const url = 'api/collector?week=11&month=12'
    const routes = useFetch(url)
    console.log(routes);
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