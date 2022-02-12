import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import Login from './components/pages/Login.jsx'
import Stories from './components/pages/Stories.jsx'
import StoryInd from './components/pages/StoryInd'
// import createHistory from 'history/createBrowserHistory'
import { createBrowserHistory } from 'history' 
    

function App() {
  const history = createBrowserHistory();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/dashboard" exact element={<Stories />} />
          {/* Route for individual page to be accessed through the url paramter */}
          <Route path="/dashboard/:id" history={history} element={<StoryInd />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App