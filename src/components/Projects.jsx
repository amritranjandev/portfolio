import React from 'react'
import { motion } from 'motion/react'
import { PROJECTS } from '../constants'

const Projects = () => (
  <section id="projects" className="section-base">
    <div className="section-header">
      <span className="section-number">04</span>
      <h2 className="section-title">Projects</h2>
      <span className="section-rule" />
    </div>
    <div className="projects-grid">
      {PROJECTS.map((p, i) => (
        <motion.div key={i} className="project-card"
          initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}}
          viewport={{once:true,margin:'-60px'}} transition={{duration:0.6,delay:i*0.08}}>
          <div className="project-stripe" />
          <div className="project-top">
            <div className="project-num">0{i+1}</div>
            <div className="project-era">{p.timeline}</div>
          </div>
          <div className="project-body">
            <div className="project-name">{p.title}</div>
            <p className="project-desc">{p.description}</p>
            <div className="project-tech-row">
              {p.technologies.map((t,j) => <span key={j} className="proj-pill">{t}</span>)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)
export default Projects
