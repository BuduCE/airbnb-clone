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
            span
        </div>
    </div>
  )
}

export default Services