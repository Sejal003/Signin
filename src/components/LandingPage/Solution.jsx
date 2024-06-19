import React from 'react'
import './Solution.css'

const Solution = () => {
  return (
    <div className='Sol-Section'>
      <h3 className='Echopark'>echopark’s</h3>
      <h2 className='Main-Heading'>Four-Step Parking Solution</h2>
      <div className='Card-Container'>
              <div className='Sol-Card'>
                    <img src="/Assets/parking slot.png" alt="cardimage" className='Card-Image' />
                    <h3 className='Card-Heading'>Find Your Spot</h3>
                    <p className='Card-Description'>Locate nearby parking options in real-time with the echopark app.</p>
              </div>
              <div className='Sol-Card'>
                    <img src="/Assets/slot.png" alt="cardimage" className='Card-Image' />
                    <h3 className='Card-Heading'>Secure Your Spot </h3>
                    <p className='Card-Description'>Select your preferred slot and secure it by paying a base reservation fee</p>
              </div>
              <div className='Sol-Card'>
                    <img src="/Assets/map.png" alt="cardimage" className='Card-Image' />
                    <h3 className='Card-Heading'>Navigate & Park</h3>
                    <p className='Card-Description'>Follow easy in-app directions to your reserved parking space.</p>
              </div>
              <div className='Sol-Card'>
                    <img src="/Assets/parking.png" alt="cardimage" className='Card-Image' />
                    <h3 className='Card-Heading'>Pay As You Go</h3>
                    <p className='Card-Description'>Automatic timer starts upon arrival, so you pay only for the time you park.</p>
              </div>
              
      </div>
    </div>
  )
}

export default Solution
