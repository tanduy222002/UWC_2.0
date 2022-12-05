import React from 'react'
import SearchBar from '../components/SeachBar'
import CollectorTable from '../components/CollectorTable'



const CollectorSelection = () => {
  return (
    <>
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