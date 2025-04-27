import React from 'react'
// import logo from '../assets/kevinRushLogo.png'
import logo from '../assets/Ar.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
// import { FaSquareXTwitter } from 'react-icons/fa' 
import { FaInstagram } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
            <span className="mx-2 w-10 font-bold text-xl">Ar</span>

        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/amrit-ranjan-professional/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            {/* <FaGithub/> */}
            {/* <FaSquareXTwitter/>  */}
            {/* <FaInstagram/> */}
            {/* <FaMedium/> */}
            <a href="https://medium.com/@amritranjanamc" target="_blank" rel="noopener noreferrer">
                <FaMedium />
            </a>
            <a href="https://github.com/amritranjandev" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
        </div>
    </nav>
  )
}

export default Navbar
