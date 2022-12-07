import { useState, useEffect} from 'react'
import { api } from '../data/api'
import './VehicleSelection.css'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SeachBar'
import VehicleTable from '../components/VehicleTable'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const VehicleSelection = () => {
  const navigate = useNavigate()
  const [vehicles, setVehicles] = useState()

  useEffect(() => {
    const url = '/api/vehicle?week=11&month=12'
    api.get(url)
    .then(res => {
      setVehicles(res.data)
    })
  }, [])
  return (
    <>
        <ArrowBackIcon className='back-btn'onClick={() => navigate(-1)}/>
        <h1>DANH SÁCH PHƯƠNG TIỆN</h1>
        <div>
            <div>Tuyến đường</div>
            <div>Địa chỉ</div>
        </div>

        <SearchBar placeHolder='Tìm kiếm tài xế theo tên'/>
        <VehicleTable vehicles={vehicles}/>
        <button className='submit' style={{marginTop: "10px"}}>
            Lưu thay đổi
        </button>

    </>
  )
}

export default VehicleSelection