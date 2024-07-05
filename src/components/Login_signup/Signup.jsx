import React, { useState } from 'react'
import './Login_signup.css'


const Signup = () => {

    const [formData , setFormData] = useState({
         email : '',
         name: ''
    })
    const [errors, setErrors] = useState({})

    const handlechange = (e)=>{
        const {name , value} = e.target ;
        setFormData({
            ...formData, [name] : value
        })
    }

    const handlesubmit = (e) =>{
       e.preventDefault()
       const validationErrors ={}
       if(!formData.email.trim()){
        validationErrors.email = "Email is required"
       }
       if(!formData.name.trim()){
        validationErrors.name = "Name is required"
       }
       setErrors(validationErrors)
    }

  return (
    <div className='Login-Section'>
    <div className="container">
    <div className='wrapper'>
        <div className="form_box login">
            <form action="" onSubmit={handlesubmit}>
            <span >
            <img src="/Assets/Logo.svg" alt=""/>
            </span>
            <p>Secure your parking spot - Join the Waitlist!</p>
            <h3 className='Entry'>Name</h3>
            <div className="input_box">
            <input type="text" name="name" placeholder='Name' onChange={handlechange}/>
            {errors.name && <span className='errors'>{errors.name}</span> }
            </div>
            <h3 className='Entry'>Email</h3>
                <div className="input_box">
                    <input type="text"
                     name='email' 
                     placeholder='E-mail' 
                     onChange={handlechange}
                     />
               {errors.email && <span className='errors'>{errors.email}</span> }
                </div>
                <div className="submit-buttons">
                <button type='submit'>Join Waitlist</button>
                {/* <button type='submit' className='signup'>Sign Up</button> */}
                </div>
                
            </form>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Signup
