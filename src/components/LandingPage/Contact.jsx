import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact-Box'>
      <div className='Contact-Info'>
              <div className='Contact'>
                  <p className='Contact-Para'>Have a Question? Feel Free to </p>
                  <h3 className='Contact-heading'>Contact Us.</h3>
              </div>
              <div className='Email'>
                <img src="/Assets/Email icon 1.svg" alt=""/>
                <h3 className='Mail-Id'>support@echopark.in</h3>
              </div>
      </div>
    </div>
  )
}

export default Contact
