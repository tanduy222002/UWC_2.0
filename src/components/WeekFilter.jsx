import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import './WeekFilter.css'
 
const weeks = ['Chọn tuần', 'Tháng 11-Tuần 1', 'Tháng 11-Tuần 2', 'Tháng 11-Tuần 3', 'Tháng 11-Tuần 4']


const WeekFilter = () => {
    const navigate = useNavigate()
    return (
        <Form.Select
            onChange={(e) => {
                if(parseInt(e.target.value) > 0) {
                    navigate(`/week${e.target.value}`)
                } else {
                    navigate('/')
                }
            }}
            className='week-filter'
        >
        {
            weeks.map((week, i) => {
                return (
                    <option 
                    key={i} 
                    value={i} 
                    >
                        {week}
                    </option>
                )
        
            })
        }
        </Form.Select>
    )
}

export default WeekFilter;