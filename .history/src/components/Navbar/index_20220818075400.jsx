import React from 'react'
import './styles.css'
import logo from './airbnb-logo.svg'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="" className='nav-log' />
    </nav>
  )
}

export default Navbar