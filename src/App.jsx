import './App.css'
import NavBar from './components/NavBar'
import WeekSelect from './pages/WeekSelect'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='main-layout'>
        <WeekSelect />
      </div>
    </div>
  )
}

export default App
