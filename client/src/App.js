import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import Login from './components/pages/Login.jsx'
import Stories from './components/pages/Stories.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/dashboard" exact element={<Stories />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  )
}

export default App