import React from 'react'
import './styles.css'
// import katie from './katie.svg'
// import star from './star.svg'

const Services = (props) => {
  // const fn = 'Abdullah'
  // const ln = 'Oladeji'

  const date = new Date()
  const hours = date.getHours()
  let timeOfTheDay

  if (hours < 12){
    timeOfTheDay = "Morning"
  } else if (hours >= 12 && hours < 17){
    timeOfTheDay = "Afternoon"
  } else {
    timeOfTheDay = "Evening"
  }

  const nums = [1,2,3,4,5]
  

  return (
    <div className='services'>
        <img src={props.img} alt="" />
        <div className="serv_stat">
            <img src={props.star} alt="" />
            <span>{props.rating}</span>
            <span>{props.num}</span>
            <span>{props.region}</span>
        </div>
        <p>{props.title}</p>
        <p><b>From ${props.price}</b>/ person</p>
        <p>Good {timeOfTheDay}</p>
        <p>The square gives {}</p>
    </div>
  )
}

export default Services