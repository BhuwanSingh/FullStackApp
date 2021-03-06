import { useState, useEffect } from 'react'
import './stories.css'
import StoryList from './StoryList'

const Stories = () => {

	const [isLoading, setIsLoading] = useState(false)
	const [stories, setStories] = useState([])

	// If not logged in, redirect to login page
	if(!localStorage.getItem('token')) {
		window.location.href = '/login'
	}

	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:5000/api/books')
			.then((Response) => Response.json()
			)
			.then((data) => {
				const stories = [];

				// console.log(data.books)
				for (const key in data.books) {
					// console.log(data.books[key]._id)
					const story = {
						id: data.books[key]._id,
						...data.books[key]
					}
					stories.push(story)
				}
				setIsLoading(false)
				setStories(stories)
			})
	}, [])


	if (isLoading) {
		return <h1>Loading...</h1>
	}


	// stories.sort() // set up sorting by likes
	stories.sort((a, b) => b.likes - a.likes)

	return (
		<div className='stories'>
			<div className='heading'>STORIES</div>
			<hr className='line' />
			< StoryList stories={stories} />
		</div>
	)
}

export default Stories