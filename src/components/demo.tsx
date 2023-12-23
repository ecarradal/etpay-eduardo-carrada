import React from 'react'

const Demo = () => {
  return (
    <div className='container demo-container flex-column align-center'>
      <h1 className='display'>
        All-in-one Event Platform
      </h1>
      <p className='body'>
        Deliver an exceptional event experience
      </p>
      <br />
      <br />
      <img className='img' src="/assets/video-thumbnail.png" alt="Video Thumbnail" />
      <button className='button pill-button'>
        <img src="/assets/play.svg" alt="Play Icon" className="play-icon" />
        See it in action (2 min)
      </button>
    </div>
  )
}

export default Demo
