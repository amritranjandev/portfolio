import React from 'react'
import { motion } from "motion/react"
import { CONTACT } from '../constants'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaMedium } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="section-base contact-section">
      <div className="contact-blob-1" />
      <div className="contact-blob-2" />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          className="contact-inner"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-number">05</span>
          <h2 className="contact-title">Let's Build<br /><span className="title-gradient">Something Together</span></h2>
          <p className="contact-sub">
            Open to backend engineering roles, API work, and data-driven projects.
          </p>

          <div className="contact-links">
            <motion.a
              href={`mailto:${CONTACT.email}`}
              className="contact-email-link"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              {CONTACT.email}
            </motion.a>

            <div className="contact-meta">
              <span className="contact-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {CONTACT.address}
              </span>
              <span className="contact-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.68h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.04a16 16 0 0 0 6.05 6.05l1.42-1.42a2 2 0 0 1 2.11-.44c.908.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
                </svg>
                {CONTACT.phoneNo.trim()}
              </span>
            </div>
          </div>

          <div className="contact-social">
            {[
              { href: "https://www.linkedin.com/in/amrit-ranjan-professional/", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "https://medium.com/@amritranjanamc", icon: <FaMedium />, label: "Medium" },
              { href: "https://github.com/amritranjandev", icon: <FaGithub />, label: "GitHub" },
            ].map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {icon}
                <span>{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
