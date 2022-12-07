import React from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SeachBar'
import JanitorTable from '../components/JanitorTable'


const JanitorSelection = () => {
  const navigate = useNavigate()
  return (
    <>
        <h1>DANH SÁCH CÁC TÀI XẾ</h1>
        <div>
            <div>Tuyến đường</div>
            <div>Địa chỉ</div>
        </div>

        <SearchBar placeHolder='Tìm kiếm tài xế theo tên'/>
        <JanitorTable />
        <button className='submit' style={{marginTop: "10px"}}>
          Lưu thay đổi
        </button>
    </>
  )
}

export default JanitorSelection