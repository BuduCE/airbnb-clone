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
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (item.location === "online"){
    badgeText = "ONLINE"
  }

  return (
    <div className="H_services">
      <div className='services'>
        {badgeText && <div className='badge'>{badgeText}</div>}

          <img src={`../../images/${item.coverImg}`} alt="" />
          <div className="serv_stat">
              {/* <img src={props.star} alt="" /> */}
              <span>{item.rating}</span>
              <span>{item.stats.reviewCount}</span>
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