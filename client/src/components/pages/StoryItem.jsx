import './storyItem.css'
import Like from '../data/up.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const StoryItem = (props) => {
	// fetch image from an api
	const [image, setImage] = useState()
	useEffect(() => {
		fetch(`https://picsum.photos/400/250`)
			.then((Response) => Response.blob()
			)
			.then((data) => {
				setImage(URL.createObjectURL(data))
				// setImage(data.image)
			})
	}, [])

	const history = useNavigate()

	console.log(props.id)
	return (
		<div className="story-item">
			<div className='title'>{props.title}</div>
			{/* <div className='story '>{props.story}</div> */}
			<img className="image" src={image} alt="random_image_from_api"></img>
			{/* button to click to navigate to the story page using the id */}
			<button className='story-button' onClick={() => { history(`/dashboard/${props.id}`) } }>Read Story</button>
			{/* <button className='story-button' onClick={ (id) => { history("/listDetail/" + id) } }>Read Story</button> */}
			<img className="like_button" src={Like} alt="like"></img>
			<div className='likes'>{props.likes}</div>
		</div>
	)
}

export default StoryItem;
