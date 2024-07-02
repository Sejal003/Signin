import React from 'react'
import './AppLaunch.css'

const AppLaunch = () => {
  return (
    <div className='Launch-Section'>
      <div className='Launch-Container'>
            <div className='Launch-Info'>
                   <h3>Sneak Peek: </h3>
                   <h2>The echopark app</h2>
                   <p>Get ready to simplify your parking experience.</p>
                   <h3 className='Launch'>Launching Soon!</h3>
            </div>
            <div className='Img-Box'>
                   <img src="/Assets/phone1.png" alt="" className='img-1'/>
                   <img src="/Assets/phone2.png" alt="" className='img-2' />
                   <img src="/Assets/phone3.png" alt="" className='img-3'/>
            </div>
      </div>
    </div>
  )
}

export default AppLaunch
