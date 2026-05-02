import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-logo">
        <span className="logo-ar">Ar</span>
        <span className="logo-dot" />
      </div>
      <div className="nav-links">
        {['About', 'Skills', 'Experience', 'Projects'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
        ))}
      </div>
      <div className="nav-social">
        <a href="https://www.linkedin.com/in/amrit-ranjan-professional/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin />
        </a>
        <a href="https://medium.com/@amritranjanamc" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaMedium />
        </a>
        <a href="https://github.com/amritranjandev" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub />
        </a>
      </div>
    </motion.nav>
  )
}

export default Navbar
