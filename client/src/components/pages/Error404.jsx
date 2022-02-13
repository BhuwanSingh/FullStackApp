import React from 'react'
import "./Error404.css"
// import Error from '../data/error.jpg'

function Error404() {
  return (
    <div className='container'>
        <button className="button" onClick={() => window.location.href = '/'}> Home </button>
   </div>

  )
}

export default Error404