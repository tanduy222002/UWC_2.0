import { useState, useEffect} from 'react'
import { api } from '../data/api'
import { useParams, useNavigate } from 'react-router-dom'
import { useRouteUpdate } from '../hooks/useRouteUpdate'
import SearchBar from '../components/SeachBar'
import VehicleTable from '../components/VehicleTable'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './VehicleSelection.css'

const VehicleSelection = () => {
  const navigate = useNavigate()
  const { route } = useParams()
  const[name,setName]=useState('')
  let [vehicles, setVehicles] = useState()
  const [selected, setSelected] = useState(-1)
  const  updateRoute  = useRouteUpdate()
  if(name!=""){
    vehicles=vehicles.filter(vehicle=>vehicle.vehicleName.toLowerCase().includes(name.toLowerCase()))
  }
  function checkItem(e, i) {
      if(e.target.checked) {
          setSelected(i)
      }
      else{
          setSelected(-1)
      }
  }

  function updateVehicle() {
    let selectedVehicle = vehicles[selected]
    updateRoute(route, "vecName", selectedVehicle.vehicleName)

  }

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

        <SearchBar placeHolder='Tìm kiếm phương tiện'
        setName={setName}/>
        <VehicleTable vehicles={vehicles} selected={selected} checkItem={checkItem}/>
        <button 
            className='submit' 
            style={{marginTop: "10px"}}
            disabled={selected === -1 ? true : false}
            onClick={() => updateVehicle()}
          >
          Lưu thay đổi
        </button>

    </>
  )
}

export default VehicleSelection