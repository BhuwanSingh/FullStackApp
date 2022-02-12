import './storyItem.css'
import Like from '../data/like.svg'

const StoryItem = (props) => {
	console.log(props.books)
	return (
		<div className="story-item">
			<div className='title'>{props.title}</div>
			{/* <div className='story '>{props.story}</div> */}
			<img className="like_button" src={Like}  alt="like"></img>
			<div className='likes'>{props.likes}</div>
		</div>
	)
}

export default StoryItem;
