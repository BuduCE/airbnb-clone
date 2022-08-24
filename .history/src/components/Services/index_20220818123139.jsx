import React from 'react'
import './styles.css'
import katie from './katie.svg'
import star from ''

const Services = () => {
  return (
    <div>
        <img src={katie} alt="" />
        <div className="serv_stat">
            <img src={star} alt="" />
        </div>
    </div>
  )
}

export default Services