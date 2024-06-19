import React, {useEffect} from 'react'
import './Navbar.css'


export default function Navbar() {

    const toggleNavbar = () => {
        const navbar = document.querySelector('.Navbar-menu');
        navbar.classList.toggle('active');
      };
      const handleScroll = () => {
        const navbar = document.querySelector('.Navbar-menu');
        navbar.classList.remove('active');
      };
      useEffect(() => {
        document.querySelector('.Navbar-toggle').addEventListener('click', toggleNavbar);
        window.addEventListener('scroll', handleScroll);
        return () => {
          document.querySelector('.Navbar-toggle').removeEventListener('click', toggleNavbar);
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <>
            <nav className="Navbar">
                <div className="Navbar-brand"><img src="/Assets/Logo.svg" alt=""/></div>
                <ul className="Navbar-menu">
                    <li className="Navbar-item"><a href="/">Home</a></li>
                    <li className="Navbar-item"><a href="/">Features</a></li>
                    <li className="Navbar-item"><a href="/">About Us</a></li>
                    <li className="Navbar-item"><a href="/">Contact</a></li>
                    <li className="Navbar-item"><a href="/" className='Btn'>Join Waitlist</a></li>
                </ul>
                <div className="Navbar-toggle">
                    <div className="Bar"></div>
                    <div className="Bar"></div>
                    <div className="Bar"></div>
                </div>
            </nav>
        </>
        
    )
    
}