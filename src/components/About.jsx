import React from 'react'
import { motion } from 'motion/react'
import { ABOUT_TEXT } from '../constants/index.js'

const About = () => (
  <section id="about" className="section-base">
    <div className="section-header">
      <span className="section-number">01</span>
      <h2 className="section-title">About Me</h2>
      <span className="section-rule" />
    </div>
    <div className="about-grid">
      <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:0.8}}>
        <div className="av-card">
          <div className="av-initials">AR</div>
          <div className="av-role-text">Backend Engineer · Python Developer</div>
          <div className="av-loc">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            Bangalore, India
          </div>
          <div className="av-tags">
            {['Python','Flask','Backend','Data','APIs','Docker'].map(t => (
              <span key={t} className={`av-tag ${['Python','APIs'].includes(t)?'av-tag-gold':['Backend','Data'].includes(t)?'av-tag-teal':''}`}>{t}</span>
            ))}
            <span className="av-tag av-tag-gold">Open to Work</span>
          </div>
          <div className="av-metrics">
            {[['3+','Years'],['14','Tech Stack'],['4','Projects'],['2','Companies']].map(([n,l]) => (
              <div className="av-metric" key={l}><div className="av-metric-n">{n}</div><div className="av-metric-l">{l}</div></div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div className="about-text-body" initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:0.8,delay:0.1}}>
        <p>I'm a backend-focused software engineer based in Bangalore with over 3 years of professional experience. My expertise lies in Python development, building scalable APIs, and creating data-driven solutions for businesses.</p>
        <div className="pull-quote">"I turn complex data problems into clean, efficient backend architecture."</div>
        <p>I've worked extensively on projects involving data extraction, reconciliation, and test data management — ensuring security and efficiency at every step. Beyond Python, I have hands-on experience with SQL and NoSQL databases, containerization with Docker, and cloud services on Azure.</p>
        <p>Currently expanding my backend skills with Node.js to stay versatile and deliver even more robust solutions.</p>
      </motion.div>
    </div>
  </section>
)
export default About
