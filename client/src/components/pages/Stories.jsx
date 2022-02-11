import React from 'react'
import Like from '../data/like.svg'
import './stories.css'

const Stories = () => {
	return (
		<div className='stories'>
			<div>Stories</div>
			<div className='story'>
				<div className='title'>This is a title</div>
				<div className='likes'>
					<img classname='like' src={Like} alt='like' />
				</div>
			</div>
		</div>
	)
}

export default Stories