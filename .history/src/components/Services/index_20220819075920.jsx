import React from 'react'
import './styles.css'
import katie from './katie.svg'
import star from './star.svg'

const Services = () => {
  const fn = 'Abdullah'
  return (
    <div className='services'>
        <img src={katie} alt="" />
        <div className="serv_stat">
            <img src={star} alt="" />
            <span>5.0</span>
            <span>(6) ·</span>
            <span>USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><b>From $136</b>/ person</p>
    </div>
  )
}

export default Services