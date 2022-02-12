//page for individual story

import { useState, useEffect } from 'react'
import React from 'react'
import './storyInd.css'

const StoryInd = () => {

  //get the url of the page
  const url = window.location.href
  //get the id of the page
  const id = url.substring(url.lastIndexOf('/') + 1)
  // console.log(id)

  const [isLoading, setIsLoading] = useState(true)
	const [Story, setStory] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/api/books/${id}`)
      .then((Response) => Response.json()
      )
      .then((data) => {
        // console.table(story)
        setIsLoading(false)
        setStory(data)
      })
  } , [id])


  if (isLoading) {
		return <h1>Loading...</h1>
	}

  return (
    <div className='cover'>
      <div className='book'>
        <div className='book-title'>{Story.title}</div>
        <div className='book-story'>{Story.story}</div>
        {/* <img className="image" src={Story.image} alt="random_image_from_api"></img> */}
        <div className='book-likes'>{Story.likes}</div>
      </div>
    </div>
  )
}

export default StoryInd