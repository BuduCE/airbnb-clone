import React from 'react'
import './styles.css'
import photos from './airbnb-photos.svg'

const Intro = () => {
  return (
    <div>
        <div className="intro-img">
            <img src={photos} alt="" />
        </div>
        <div className="intro-txt">
            <h1>Online Experieneces</h1>
        </div>
    </div>
  )
}

export default Intro