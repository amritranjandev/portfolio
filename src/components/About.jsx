import React from 'react'
import { motion } from "motion/react"
import { ABOUT_TEXT } from '../constants/index.js'
import server from '../assets/server_b.mp4'

const About = () => {
  return (
    <section id="about" className="section-base">
      <div className="container mx-auto px-8">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-number">01</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-video-wrap"
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="video-glass-frame">
              <video autoPlay loop muted playsInline className="about-video">
                <source src={server} type="video/mp4" />
              </video>
              <div className="video-overlay-glow" />
            </div>
            <div className="floating-stat stat-1">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="floating-stat stat-2">
              <span className="stat-num">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="about-text">{ABOUT_TEXT}</p>

            <div className="about-highlights">
              {[
                { icon: "⚡", label: "Backend Architecture", desc: "Scalable systems design" },
                { icon: "🔗", label: "API Development", desc: "RESTful & async patterns" },
                { icon: "🗄️", label: "Data Engineering", desc: "SQL, NoSQL & pipelines" },
              ].map(({ icon, label, desc }, i) => (
                <motion.div
                  key={i}
                  className="highlight-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <span className="highlight-icon">{icon}</span>
                  <div>
                    <div className="highlight-label">{label}</div>
                    <div className="highlight-desc">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
