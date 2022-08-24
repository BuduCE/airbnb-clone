import React from 'react'
import './styles.css'
import katie from './katie.svg'
import star from './star.svg'

const Services = () => {
  const fn = 'Abdullah'
  const ln = 'Oladeji'

  const date = new Date()
  const hours = date.getHours() % 12
  let timeOfTheDay

  if (hours < 12){
    timeOfTheDay = "Morning"
  } else if (hours >= 12 && hours < 17){
    timeOfTheDay = "Afer"
  }

  return (
    <div className='services'>
        <img src={katie} alt="" />
        <div className="serv_stat">
            <img src={star} alt="" />
            <span>5.0</span>
            <span>(6) ·</span>
            <span>USA</span>
        </div>
        <p>Life Lessons with {fn} {ln}</p>
        <p><b>From $136</b>/ person</p>
        <p>Good {timeOfTheDay}</p>
    </div>
  )
}

export default Services