import React, { useState } from 'react'
import { motion } from 'motion/react'
import { HERO_CONTENT } from '../constants/index.js'
import resume from '../assets/amrit_ranjan_res.pdf'

const Hero = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="hero-section">
      <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:0.8,ease:[0.16,1,0.3,1]}}>
        <div className="hero-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Available for opportunities</span>
        </div>
        <h1 className="hero-name">Amrit<em>Ranjan</em></h1>
        <div className="hero-role">Python Developer &amp; Backend Engineer</div>
        <p className="hero-desc">{HERO_CONTENT}</p>
        <div className="hero-btns">
          <motion.button className="btn-primary" onClick={() => setOpen(true)} whileHover={{scale:1.03}} whileTap={{scale:0.97}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            View Resume
          </motion.button>
          <a href="mailto:amritranjanamc@gmail.com" className="btn-ghost">Let's Talk →</a>
        </div>
        <div className="hero-stats">
          {[['3+','Years Exp.'],['14','Technologies'],['4','Projects'],['2','Companies']].map(([n,l]) => (
            <div key={l}><div className="stat-number">{n}</div><div className="stat-label">{l}</div></div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:0.9,delay:0.2,ease:[0.16,1,0.3,1]}}>
        <div className="terminal">
          <div className="t-bar">
            <span className="t-dot t-dot-r"/><span className="t-dot t-dot-y"/><span className="t-dot t-dot-g"/>
            <span className="t-file">amrit_ranjan.py</span>
          </div>
          <div className="t-body">
            <div><span className="t-comment"># Backend Engineer Profile</span></div>
            <div><br/></div>
            <div><span className="t-key">class</span> <span style={{color:'var(--gold)'}}>Engineer</span><span className="t-op">:</span></div>
            <div>&nbsp;&nbsp;<span className="t-key">name</span> <span className="t-op">=</span> <span className="t-str">"Amrit Ranjan"</span></div>
            <div>&nbsp;&nbsp;<span className="t-key">role</span> <span className="t-op">=</span> <span className="t-str">"Python Developer"</span></div>
            <div>&nbsp;&nbsp;<span className="t-key">location</span> <span className="t-op">=</span> <span className="t-str">"Bangalore, IN"</span></div>
            <div>&nbsp;&nbsp;<span className="t-key">experience</span> <span className="t-op">=</span> <span className="t-num">3</span><span className="t-op"> # years</span></div>
            <div><br/></div>
            <div>&nbsp;&nbsp;<span className="t-key">stack</span> <span className="t-op">= [</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">"Python"</span><span className="t-op">, </span><span className="t-str">"Flask"</span><span className="t-op">,</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">"PySpark"</span><span className="t-op">, </span><span className="t-str">"Docker"</span><span className="t-op">,</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-str">"Node.js"</span><span className="t-op">, </span><span className="t-str">"Azure"</span></div>
            <div>&nbsp;&nbsp;<span className="t-op">]</span></div>
            <div><br/></div>
            <div>&nbsp;&nbsp;<span className="t-key">status</span> <span className="t-op">=</span> <span className="t-str">"open_to_work"</span> <span className="t-cursor"/></div>
          </div>
          <div className="skill-bars-wrap">
            {[['Python','sb-gold','92%'],['Databases','sb-teal','85%'],['APIs','sb-gold','88%'],['DevOps','sb-ember','72%']].map(([l,c,w]) => (
              <div className="sb-row" key={l}>
                <span className="sb-label">{l}</span>
                <div className="sb-track"><div className={c} style={{width:w}} /></div>
                <span className="sb-pct">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {open && (
        <div style={{position:'fixed',inset:0,background:'rgba(6,8,10,0.9)',backdropFilter:'blur(12px)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center',padding:'2rem'}} onClick={() => setOpen(false)}>
          <div style={{background:'var(--ink2)',border:'1px solid var(--border2)',borderRadius:16,padding:'1.5rem',width:'100%',maxWidth:800,position:'relative'}} onClick={e => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} style={{position:'absolute',top:'1rem',right:'1rem',width:32,height:32,borderRadius:8,border:'1px solid var(--border2)',background:'var(--ink)',color:'var(--bone2)',cursor:'pointer',fontSize:'1rem',display:'flex',alignItems:'center',justifyContent:'center'}}>✕</button>
            <iframe src={resume} title="Resume" style={{width:'100%',height:580,border:'none',borderRadius:8}} />
          </div>
        </div>
      )}
    </div>
  )
}
export default Hero
