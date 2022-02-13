import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import './home.css'
import Image from '../data/one.jpg'

const Home = () => {
  const history = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation , setPassword_confirmation] = useState('')

  // function to check if the password is according to a regex
  const checkPassword = (password) => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/
    let test = regex.test(password)
    if (test) {
      return true;
    } else {
      return false;
    }
  }


  async function registerUser(event) {
    event.preventDefault()

    if ( password !== password_confirmation ) {
      alert('password does not match')
    } else if ( !checkPassword(password) ) {
      alert('a minimum of 1 upper case letter [A-Z]\na minimum of 1 lower case letter [a-z]\na minimum of 1 numeric character [0-9]\na minimum of 1 special character\npassword must be at least 10 characters in length, but can be much longer.')
    } else {


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
      history('/dashboard')
    } else {
      alert('User Already Exists')
    }
  }
}

  return (
    <div className='Home'>
      <div className='Left'>
      <div class="title-form">Welcome</div>
      <div class="subtitle">Let's create your account!</div>
        <form onSubmit={registerUser}>
          <input className='input-field'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <br />
          <input className='input-field'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // odChange={ (e) => checkPassword(e.target.value) }
            type="password"
            placeholder="Password"
          />
          <br />
          <input className='input-field'
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />
          <br />
          <input type="submit" className='form-submit' value="Register" />
        </form>
        <div  >
				<p>Already have an account? <Link to="/login">Login</Link>
        </p>
				</div>
      </div>
      <div className='Right'>
        {/* <img src="../data/one.jpg" alt="books" /> */}
        <img src={Image} alt="books" className='books' />
      </div>
    </div>

  )
}

export default Home