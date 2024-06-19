import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-Content'>
           <div>
            <h2 className='Footer-Heading'>echopark</h2>
            <p className='Footer-Desc'>India's Premier Real-Time Parking Booking & Automated Management Solution</p>
           </div>
           <div className='Footer-Logo'>
                 <img src="/Assets/Linkedin Logo.svg" alt="" />
                 <img src="/Assets/Linkedin Logo.svg" alt="" />
           </div>
      </div>
      <div className='line'></div>
      <div className='Info-Box'>
            <h4 className='Info-Heading'>echopark 2024 © All rights reserved</h4>
            <div className='Conditions'>
            <h4 className='Terms'>Terms & Conditions</h4>
            <h4 className='Terms'>Privacy Policy</h4>
            </div>
      </div>
    </div>
  )
}

export default Footer
