import React from 'react'
import './styles.css'
import photos from './airbnb-photo.svg'

const Intro = () => {
  return (
    <div className='intro'>
        {/* <div className="intro-img"> */}
            <img src={photos} alt="" className=''/>
        {/* </div> */}
        <div className="intro-txt">
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    </div>
  )
}

export default Intro