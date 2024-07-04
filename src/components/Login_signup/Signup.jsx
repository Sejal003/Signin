import React, { useState } from 'react'
import './Login_signup.css'
import { Link } from 'react-router-dom';


const Signup = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({})

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if (!formData.email.trim()) {
            validationErrors.email = "Email is required"
        }
        if (!formData.password.trim()) {
            validationErrors.password = "Password is required"
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
                                <img src="/Assets/Logo.svg" alt="" />
                            </span>
                            <p>Welcome, Please create your account</p>
                            <h3 className='Entry'>Name</h3>
                            <div className="input_box">
                                <input type="text" name="name" placeholder='Name' />
                            </div>
                            <h3 className='Entry'>Email</h3>
                            <div className="input_box">
                                <input type="text"
                                    name='email'
                                    placeholder='E-mail or username'
                                    onChange={handlechange}
                                />
                                {errors.email && <span className='errors'>{errors.email}</span>}
                            </div>
                            <h3 className='Entry'>Password</h3>
                            <div className="input_box">
                                <input type="password" name='password' placeholder='Password' onChange={handlechange} />
                                {errors.password && <span className='errors'>{errors.password}</span>}
                            </div>
                            <div className="submit-buttons">
                                <Link to="/" className='button'>
                                    <button type='submit'>Sign Up</button>
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
