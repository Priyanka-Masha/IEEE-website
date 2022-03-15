import React from 'react'
import "./Body.css"
import Video from "../Assets/video.mp4"

const Body = () => {
  return (
    <div className='Body'>
      <video id="bg-video" loop autoPlay muted >
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  )
}

export default Body