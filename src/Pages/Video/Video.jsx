import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'


const Video = () => {
  return (
    <div className='play-container'>
        <PlayVideo></PlayVideo>
        <Recommended></Recommended>
    </div>
  )
}

export default Video