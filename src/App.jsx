import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Technologies />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Contact />
      <footer>Amrit Ranjan &bull; Python Developer &bull; Bangalore &bull; {new Date().getFullYear()}</footer>
    </div>
  )
}
export default App
