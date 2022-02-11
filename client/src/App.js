import './App.css'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import Login from './components/pages/Login.jsx'
import Stories from './components/pages/Stories.jsx'

function App() {
  // axios
  //   .get('localhost:5000/api/hello')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response)
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error)
  //   })
  //   .then(function () {
  //     // always executed
  //   })

  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="api"></div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          {/* <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} /> */}
          <Route path="/Stories" exact element={<Stories />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  )
}

export default App