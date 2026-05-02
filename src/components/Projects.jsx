import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { PROJECTS } from '../constants'

const Projects = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className="section-base">
      <div className="container mx-auto px-8">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-number">04</span>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={i}
              className={`project-card glass-card ${hovered === i ? 'project-hovered' : ''}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -8, scale: 1.015 }}
            >
              <div className="project-image-wrap">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-img-overlay" />
                <div className="project-timeline-badge">{project.timeline}</div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech-wrap">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="tech-pill tech-pill-sm">{tech}</span>
                  ))}
                </div>
              </div>

              <motion.div
                className="project-glow"
                animate={{ opacity: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
