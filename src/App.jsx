import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import CampusNavigator from './CampusNavigator'
import ClassroomOccupancy from './ClassroomOccupancy'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/navigation" element={<CampusNavigator />} />
          <Route path="/occupancy" element={<ClassroomOccupancy />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App