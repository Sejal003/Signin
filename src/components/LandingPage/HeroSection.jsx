import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
       <div className='Hero-Content'>
        <div className='Hero'>
                <div id='Intro'>
                    <h1 className="H1" >Parking made simple, with <span>echopark</span></h1>
                    <p>India's premier real-time parking booking & automated management solution!</p>
                    <div className='Buttons'>
                    <button> <a href="/" className='Btn'>Get Started</a></button>
                    <div className='Know-Button'>
                       <div className='Play'><div className='Polygon'></div></div><a href="/" className='Knowmore' >Know More</a>
                    </div>
                    </div>
                </div>
                <div className='Hero-img'>
                <img src="/Assets/Hero.svg" alt="" />
                </div>
        </div>
        </div>
  )
}

export default HeroSection
