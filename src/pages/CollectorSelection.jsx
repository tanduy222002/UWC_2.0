import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useRouteUpdate } from '../hooks/useRouteUpdate';
import { api } from '../data/api';
import SearchBar from '../components/SeachBar'
import CollectorTable from '../components/CollectorTable'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const CollectorSelection = () => {
  const navigate = useNavigate()
  const { route } = useParams()
  const [collectors, setCollectors] = useState()
  const [selected, setSelected] = useState(-1)
  const updateRoute = useRouteUpdate()
  function checkItem(e, i) {
      if(e.target.checked) {
          setSelected(i)
      }
      else{
          setSelected(-1)
      }
  }
  function updateCollector() {
    let selectedCollector = collectors[selected]
    updateRoute(route, "colName", selectedCollector.userName)
  }
  useEffect(() => {
    const url = '/api/collector?week=11&month=12'
    api.get(url)
    .then(res => {
      setCollectors(res.data)
    })
  }, [])
  return (
    <>
        <ArrowBackIcon className='back-btn'onClick={() => navigate(-1)}/>
        <h1>DANH SÁCH CÁC TÀI XẾ</h1>
        <div>
            <div>Tuyến đường</div>
            <div>Địa chỉ</div>
        </div>

        <SearchBar placeHolder='Tìm kiếm tài xế theo tên'/>
        <CollectorTable collectors={collectors} selected={selected} checkItem={checkItem} />
        <button           
          className='submit' 
          style={{marginTop: "10px"}}
          disabled={selected === -1 ? true : false}
          onClick={()=>{updateCollector()}}
        >
          Lưu thay đổi
        </button>
    </>
  )
}

export default CollectorSelection