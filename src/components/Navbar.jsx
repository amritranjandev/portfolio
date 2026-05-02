import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-logo">
        <div className="logo-mark"><span className="logo-ar">Ar</span></div>
        <span className="logo-name">Amrit Ranjan</span>
      </div>
      <div className="nav-right">
        <div className="nav-links">
          {['About','Skills','Experience','Projects'].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} className="nav-link">{s}</a>
          ))}
        </div>
        <a href="mailto:amritranjanamc@gmail.com" className="nav-cta">Hire Me</a>
      </div>
    </nav>
  )
}
export default Navbar
