import { useState } from 'react'
import './App.css'
import Login_signup from './components/Login_signup/Login_signup'
import HeroSection from './components/LandingPage/HeroSection'
import Navbar from './components/LandingPage/Navbar'
import Solution from './components/LandingPage/Solution'
import Contact from './components/LandingPage/Contact'
import Footer from './components/LandingPage/Footer'
import EchoparkDemo from './components/LandingPage/EchoparkDemo'
import AppLaunch from './components/LandingPage/AppLaunch'
import Testimonial from './components/LandingPage/Testimonial'

function App() {

  return (
    <>
     {/* <Login_signup/> */}
     <Navbar></Navbar>
     <HeroSection></HeroSection>
     <Testimonial></Testimonial>
     <Solution></Solution>
     <AppLaunch></AppLaunch>
     <EchoparkDemo></EchoparkDemo>
     <Contact></Contact>
     <Footer></Footer>
    </>
  )
}

export default App
