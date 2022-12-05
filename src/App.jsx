import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import WeekSelect from './pages/WeekSelect'
import CollectorSelection from './pages/CollectorSelection'
import VehicleSelection from './pages/VehicleSelection'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='main-layout'>
        <Routes>
            <Route path='/:week' element={<WeekSelect />} />
            <Route path='/:week/collector' element={<CollectorSelection /> } />
            <Route path='/:week/vehicle' element={<VehicleSelection /> } />

        </Routes>
      </div>
    </div>
  )
}

export default App