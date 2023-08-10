import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-links'>
        <p>Go To:</p>
        <Link to="/">Home</Link>|
        <Link to="/cities">Cities</Link>
      </div>
      <p>© 2023 Alejandro Tonda | All Rights Reserved</p>
    </div>
  )
}