import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  const [active, setActive] = useState(0)
  const e = EXPERIENCES[active]
  return (
    <section id="experience" className="section-base">
      <div className="section-header">
        <span className="section-number">03</span>
        <h2 className="section-title">Experience</h2>
        <span className="section-rule" />
      </div>
      <div className="exp-layout">
        <div className="exp-tabs">
          {EXPERIENCES.map((exp, i) => (
            <button key={i} className={`exp-tab-btn ${active===i?'active':''}`} onClick={() => setActive(i)}>
              <div className="exp-tab-yr">{exp.year}</div>
              <div className="exp-tab-co">{exp.company.trim()}</div>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active} className="exp-content"
            initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}
            transition={{duration:0.35,ease:[0.16,1,0.3,1]}}>
            <div className="exp-header">
              <div>
                <div className="exp-role-name">{e.role}</div>
                <div className="exp-company-name">{e.company.trim()}</div>
              </div>
              <div className="exp-period-badge">{e.year}</div>
            </div>
            <p className="exp-description">{e.description}</p>
            <div className="exp-tech-list">
              {e.technologies.map((t,j) => (
                <motion.span key={j} className="exp-tech-pill" initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{delay:j*0.05}}>{t}</motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
export default Experience
