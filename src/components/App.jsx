import React from 'react'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Marquee     from './components/Marquee'
import About       from './components/About'
import Technologies from './components/Technologies'
import Experience  from './components/Experience'
import Projects    from './components/Projects'
import Contact     from './components/Contact'

const Footer = () => (
  <footer style={{
    background: 'var(--ink)',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '2rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.6rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(245,240,232,0.25)',
    flexWrap: 'wrap',
    gap: '0.5rem',
  }}>
    <span>Amrit Ranjan · 2025</span>
    <span>Designed &amp; built with intent</span>
    <span>Bangalore, India</span>
  </footer>
)

const App = () => (
  <div style={{ overflowX: 'hidden' }}>
    <Navbar />
    <Hero />
    <Marquee />
    <About />
    <Technologies />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
  </div>
)

export default App
