import React from 'react'
import './styles.css'
// import katie from './katie.svg'
// import star from './star.svg'

const Services = (props) => {

  // const fn = 'Abdullah'
  // const ln = 'Oladeji'

  // const date = new Date()
  // const hours = date.getHours()
  // let timeOfTheDay

  // if (hours < 12){
  //   timeOfTheDay = "Morning"
  // } else if (hours >= 12 && hours < 17){
  //   timeOfTheDay = "Afternoon"
  // } else {
  //   timeOfTheDay = "Evening"
  // }

  // Map challenge 1
  // const nums = [1,2,3,4,5]
  // const sqr = nums.map(x => x**2)

  // Map challenge 2
  // const name = ["alice", " bob", " charlie", " denielle"]
  // const firstUpper = name.map(x => x[0].toUpperCase() + x.slice(1))

  let badgeText
  if (props.opens === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "online"){
    badgeText = "ONLINE"
  } else {
    badgeText 
  }

  return (
    <div className="H_services">
      <div className='services'>
        <div className='badge'>{SOLD OUT}</div>}

          <img src={`../../images/${props.img}`} alt="" />
          <div className="serv_stat">
              {/* <img src={props.star} alt="" /> */}
              <span>{props.rating}</span>
              <span>{props.num}</span>
              {/* <span>{props.region}</span> */}
          </div>
          <p>{props.title}</p>
          <p><b>From ${props.price}</b>/ person</p>
          {/* <p>Good {timeOfTheDay}</p>
          <p>The square gives {sqr}</p>
          <p>Their names are {firstUpper}</p> */}
      </div>
    </div>
  )
}

export default Services