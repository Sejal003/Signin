import React from 'react'
import './EchoparkDemo.css'

const EchoparkDemo = () => {
  return (
    <div className='Demo-Container'>
       <div className='Demo-Box'>
           <div>
            <h2 className='Demo-Heading'>echopark <span>for businesses</span> </h2>
            <p className='Demo-Desc'>Fully automate your parking operations with echopark's state-of-the-art management solution.</p>
           </div>
           <div className='Demo-Button'>
                 <button>Schedule a Demo</button>
           </div>
      </div>
      <div className='img-box'>
        <img src="/Assets/BG.svg" alt=""/>
      </div>
    </div>
  )
}

export default EchoparkDemo
