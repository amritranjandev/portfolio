import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { EXPERIENCES } from '../constants'

const Experience = () => {
  const [active, setActive] = useState(0)

  return (
    <section id="experience" className="section-base">
      <div className="container mx-auto px-8">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-number">03</span>
          <h2 className="section-title">Experience</h2>
        </motion.div>

        <div className="exp-layout">
          {/* Timeline tabs */}
          <motion.div
            className="exp-tabs"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {EXPERIENCES.map((exp, i) => (
              <button
                key={i}
                className={`exp-tab ${active === i ? 'exp-tab-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="exp-tab-year">{exp.year}</div>
                <div className="exp-tab-company">{exp.company.trim()}</div>
                {active === i && (
                  <motion.div className="exp-tab-indicator" layoutId="exp-indicator" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="exp-panel glass-card"
              initial={{ opacity: 0, x: 40, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="exp-panel-header">
                <div>
                  <h3 className="exp-role">{EXPERIENCES[active].role}</h3>
                  <span className="exp-company-name">{EXPERIENCES[active].company.trim()}</span>
                </div>
                <div className="exp-badge">{EXPERIENCES[active].year}</div>
              </div>
              <p className="exp-description">{EXPERIENCES[active].description}</p>
              <div className="exp-tech-list">
                {EXPERIENCES[active].technologies.map((tech, j) => (
                  <motion.span
                    key={j}
                    className="tech-pill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: j * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Experience
