import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { HERO_CONTENT } from '../constants/index.js'
import resume from '../assets/amrit_ranjan_res.pdf'

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const blobX = useTransform(springX, v => v * 0.04)
  const blobY = useTransform(springY, v => v * 0.04)

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden pt-24">
      {/* Animated blobs */}
      <motion.div
        className="blob blob-1"
        style={{ x: blobX, y: blobY }}
        animate={{ scale: [1, 1.15, 0.95, 1.08, 1], rotate: [0, 15, -10, 5, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob blob-2"
        style={{ x: useTransform(springX, v => v * -0.03), y: useTransform(springY, v => v * -0.03) }}
        animate={{ scale: [1, 0.88, 1.12, 0.95, 1], rotate: [0, -20, 12, -8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="blob blob-3"
        animate={{ scale: [1, 1.2, 0.9, 1.05, 1], rotate: [0, 10, -15, 8, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="label-tag">Available for opportunities</span>
            </motion.div>

            <motion.h1
              className="hero-title mt-6"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Amrit
              <span className="title-gradient"> Ranjan</span>
            </motion.h1>

            <motion.div
              className="role-text mt-3"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="role-line" />
              Python Developer
            </motion.div>

            <motion.p
              className="hero-desc mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
            >
              <motion.button
                className="btn-primary"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>View Resume</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </motion.button>
              <motion.a
                href="mailto:amritranjanamc@gmail.com"
                className="btn-ghost"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </div>

          {/* <motion.div
            className="hero-visual-wrap"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="orb-container">
              <div className="orb-ring ring-1" />
              <div className="orb-ring ring-2" />
              <div className="orb-ring ring-3" />
              <div className="orb-core">
                <div className="orb-inner">
                  <span className="orb-text">3+</span>
                  <span className="orb-sub">years exp.</span>
                </div>
              </div>
              {[
                { label: "Python", angle: 0, color: "#3b82f6" },
                { label: "Backend", angle: 60, color: "#8b5cf6" },
                { label: "APIs", angle: 120, color: "#06b6d4" },
                { label: "Docker", angle: 180, color: "#10b981" },
                { label: "Data", angle: 240, color: "#f59e0b" },
                { label: "Cloud", angle: 300, color: "#ec4899" },
              ].map(({ label, angle, color }, i) => {
                const rad = (angle * Math.PI) / 180
                const r = 140
                const x = Math.cos(rad) * r
                const y = Math.sin(rad) * r
                return (
                  <motion.div
                    key={i}
                    className="orbit-tag"
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      borderColor: color + '60',
                      color,
                    }}
                    animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    {label}
                  </motion.div>
                )
              })}
            </div>
          </motion.div> */}


          <motion.div
  className="hero-visual-wrap hidden lg:flex justify-center pl-8"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
>
  <div className="sci-fi-module">

    <motion.div
      className="core-panel"
      animate={{ y: [0, -10, 0], rotateX: [0, 2, 0], rotateY: [0, -2, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="core-big">3+</span>
      <span className="core-small">YEARS EXPERIENCE</span>
    </motion.div>

    <motion.div
      className="float-strip strip-1"
      animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      Python Backend
    </motion.div>

    <motion.div
      className="float-strip strip-2"
      animate={{ x: [0, -8, 0], y: [0, 10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    >
      APIs · Automation
    </motion.div>

    <motion.div
      className="float-strip strip-3"
      animate={{ x: [0, 8, 0], y: [0, 6, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    >
      Cloud · Data
    </motion.div>

    <div className="scan-line scan-1"></div>
    <div className="scan-line scan-2"></div>
  </div>
</motion.div>

        </div>
      </div>

      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setIsOpen(false)}>✕</button>
            <iframe src={resume} title="Resume" className="w-full" style={{ height: 600, borderRadius: 12, border: 'none' }} />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Hero
