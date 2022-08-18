import React from 'react'
import './styles.css'
import photos from './airbnb-photo.svg'

const Intro = () => {
  return (
    <div className='intro'>
        <img src={photos} alt="" className='photo-grid'/>

        
        <h1>Online Experiences</h1>
        
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
        
    </div>
  )
}

export default Intro