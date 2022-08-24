import React from 'react'
import './styles.css'
import katie from './katie.svg'
import star from './star.svg'

const Services = (props) => {
  // const fn = 'Abdullah'
  // const ln = 'Oladeji'

  const date = new Date()
  const hours = date.getHours() % 12
  let timeOfTheDay

  if (hours < 12){
    timeOfTheDay = "Morning"
  } else if (hours >= 12 && hours < 17){
    timeOfTheDay = "Afternoon"
  } else {
    timeOfTheDay = "Evening"
  }

  return (
    <div className='services'>
        <img src={props.img} alt="" />
        <div className="serv_stat">
            <img src={props.star} alt="" />
            <span>{props.star}</span>
            <span>{props.</span>
            <span>USA</span>
        </div>
        <p>Life Lessons with {name.fn} {name.ln}</p>
        <p><b>From $136</b>/ person</p>
        <p>Good {timeOfTheDay}</p>
    </div>
  )
}

export default Services