import React from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SeachBar'
import CollectorTable from '../components/CollectorTable'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const CollectorSelection = () => {
  const navigate = useNavigate()
  return (
    <>
        <ArrowBackIcon className='back-btn'onClick={() => navigate(-1)}/>
        <h1>DANH SÁCH CÁC TÀI XẾ</h1>
        <div>
            <div>Tuyến đường</div>
            <div>Địa chỉ</div>
        </div>

        <SearchBar placeHolder='Tìm kiếm tài xế theo tên'/>
        <CollectorTable />
        <button className='submit' style={{marginTop: "10px"}}>
          Lưu thay đổi
        </button>
    </>
  )
}

export default CollectorSelection