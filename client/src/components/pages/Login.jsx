import { useState } from 'react'
import './home.css'
import { Link } from "react-router-dom";
import Image from '../data/one.jpg'

function App() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()
		console.log(data)
		if (data.success) {
			console.log(data)
			localStorage.setItem('token', data.access_token)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div className='Home'>
			<div className='Left'>
			<div class="title-form">Welcome Back</div>
      		<div class="subtitle">Please login to your account.</div>
				<form onSubmit={loginUser}>
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
						type="password"
						placeholder="Password"
					/>
					<br />
					<input
						type="submit" className="form-submit" value="Login" />
					
				</form>
				<div >
				<p>Don't have an account? <Link to="/"> Signup</Link></p>
				</div>
			</div>
			<div className='Right'>
			<img src={Image} alt="books" className='books' />
			</div>
		</div>
	)
}

export default App