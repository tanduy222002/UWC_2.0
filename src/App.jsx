import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import WeekSelect from './pages/WeekSelect'
import CollectorSelection from './pages/CollectorSelection'
import VehicleSelection from './pages/VehicleSelection'
import MCPSelection from './pages/MCPSelection'
import JanitorSelection from './pages/JanitorSelection'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/overview')
  }, [])
  return (
    <div className="App">
      <NavBar />
      <div className='main-layout'>
        <Routes>
            <Route path='/:week' element={<WeekSelect />} />
            <Route path='/:week/:route/collector' element={<CollectorSelection /> } />
            <Route path='/:week/:route/vehicle' element={<VehicleSelection /> } />
            <Route path='/:week/:route/mcp' element={<MCPSelection /> } />
            <Route path='/:week/:route/:mcp/janitor' element={<JanitorSelection /> } />

        </Routes>
      </div>
    </div>
  )
}

export default App
