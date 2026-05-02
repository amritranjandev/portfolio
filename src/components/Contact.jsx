import React from 'react'
import { motion } from 'motion/react'
import { CONTACT } from '../constants'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa'

const Contact = () => (
  <section id="contact" className="contact-section">
    <motion.div className="contact-wrapper" initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}>
      <span className="section-number" style={{display:'block',textAlign:'center',marginBottom:'0.5rem'}}>05</span>
      <div className="contact-heading">Ready to build<br /><em>something great?</em></div>
      <p className="contact-sub">Open to backend engineering roles, API development, and data-driven projects. Based in Bangalore — available remotely.</p>
      <div>
        <div className="contact-box">
          <a href={`mailto:${CONTACT.email}`} className="contact-email-link">{CONTACT.email}</a>
          <div className="contact-details">{CONTACT.phoneNo.trim()} · {CONTACT.address}</div>
        </div>
      </div>
      <div className="contact-social">
        <a href="https://www.linkedin.com/in/amrit-ranjan-professional/" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaLinkedin style={{width:13,height:13}} /> LinkedIn
        </a>
        <a href="https://github.com/amritranjandev" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaGithub style={{width:13,height:13}} /> GitHub
        </a>
        <a href="https://medium.com/@amritranjanamc" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaMedium style={{width:13,height:13}} /> Medium
        </a>
      </div>
    </motion.div>
  </section>
)
export default Contact
