import React from 'react'
import './styles.css'
import katie from './katie.svg'
import star from './star.svg'

const Services = () => {
  return (
    <div>
        <img src={katie} alt="" />
        <div className="serv_stat">
            <img src={star} alt="" />
            <span>5.0</span>
            <span>(6) ·</span>
            <span>USA</span>
        </div>
        <p></p>
        <p></p>
    </div>
  )
}

export default Services