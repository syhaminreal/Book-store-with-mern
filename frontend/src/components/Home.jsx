import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = () => {
 
  return (
  <div className="hero">
    <div className="hero-content">
      <h1 className="hero-text">Book shop</h1>
      <p className='hero-description'>
        Lorem ipsum dolor sit, amet consectetur 
        adipisicing elit. Dicta tempora, quia blanditiis corrupti quos
         incidunt sunt quasi in eveniet dolore repellendus ipsum dolores,
         blanditiis odio harum beatae!
      </p>
    </div>
    <div className="hero-image"></div>
  </div>
  )
}

export default Home