import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

// Cursor follower
const CursorGlow = () => {
  const cursorRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      const el = cursorRef.current
      if (!el) return

      currentRef.current.x += (posRef.current.x - currentRef.current.x) * 0.08
      currentRef.current.y += (posRef.current.y - currentRef.current.y) * 0.08

      el.style.transform = `translate(${currentRef.current.x - 200}px, ${currentRef.current.y - 200}px)`
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 999,
        willChange: 'transform',
      }}
    />
  )
}

const App = () => {
  return (
    <div className="app-root">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        fontSize: '0.8rem',
        color: 'rgba(180,170,220,0.3)',
        letterSpacing: '0.08em',
        fontFamily: "'Syne', sans-serif",
      }}>
        DESIGNED & BUILT BY AMRIT RANJAN · {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
