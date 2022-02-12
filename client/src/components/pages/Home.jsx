import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import Image from '../data/one.jpg'

const Home = () => {
  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation , setPassword_confirmation] = useState('')

  async function registerUser(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        password_confirmation,
      }),
    })

    const data = await response.json()

    if (data.success) {
      // history.push('/login')
      history('/dashboard')
    }
  }

  return (
    <div className='Home'>
      <div className='Left'>
        <h1>Form</h1>
        <form onSubmit={registerUser}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <input
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
      <div className='Right'>
        {/* <img src="../data/one.jpg" alt="books" /> */}
        <img src={Image} alt="books" className='books' />
      </div>
    </div>

  )
}

export default Home