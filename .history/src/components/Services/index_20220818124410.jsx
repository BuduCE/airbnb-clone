import React from 'react'
import './styles.css'
import katie from './katie.svg'
import star from './star.svg'

const Services = () => {
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
        <p><span >From $136</span>/ person</p>
    </div>
  )
}

export default Services