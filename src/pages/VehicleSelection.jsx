import React from 'react'
import SearchBar from '../components/SeachBar'
import VehicleTable from '../components/VehicleTable'

const VehicleSelection = () => {
  return (
    <>
        <h1>DANH SÁCH PHƯƠNG TIỆN</h1>
        <div>
            <div>Tuyến đường</div>
            <div>Địa chỉ</div>
        </div>

        <SearchBar placeHolder='Tìm kiếm tài xế theo tên'/>
        <VehicleTable />
        <button className='submit' style={{marginTop: "10px"}}>
            Lưu thay đổi
        </button>

    </>
  )
}

export default VehicleSelection