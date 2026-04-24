import React, { useState } from 'react'
import { WordHeading } from './WordHeading'
import { useReveal } from '../hooks/useReveal'
import { EXPERIENCES } from '../constants'

const ExpItem = ({ experience, index }) => {
  const [hovered, setHovered] = useState(false)
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '10rem 1fr auto',
        gap: '2rem',
        padding: hovered ? '3rem 1.5rem' : '3rem 0',
        margin: hovered ? '0 -1.5rem' : '0',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        transition: 'all 0.3s ease',
        background: hovered ? 'var(--paper2)' : 'transparent',
        alignItems: 'start',
      }}
    >
      {/* Animated bottom line */}
      <div style={{
        position: 'absolute',
        left: 0, bottom: 0,
        height: '1px',
        width: hovered ? '100%' : '0%',
        background: 'var(--amber)',
        transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }} />

      {/* Year */}
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.7rem',
        color: 'var(--ink3)',
        lineHeight: 1.6,
        paddingTop: '0.15rem',
      }}>
        {experience.year.replace(' - ', '\n—\n')}
      </div>

      {/* Body */}
      <div>
        <div style={{
          fontFamily: "'Unbounded', sans-serif",
          fontSize: '1.1rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '0.25rem',
          color: 'var(--ink)',
        }}>
          {experience.role}
        </div>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          color: 'var(--amber)',
          marginBottom: '1rem',
        }}>
          {experience.company}
        </div>
        <p style={{
          fontSize: '0.82rem',
          lineHeight: 1.8,
          color: 'var(--ink2)',
          maxWidth: '44rem',
          marginBottom: '1.25rem',
        }}>
          {experience.description}
        </p>
        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.55rem',
                letterSpacing: '0.08em',
                padding: '0.3rem 0.65rem',
                border: '1px solid var(--border)',
                color: 'var(--ink3)',
                background: 'var(--paper)',
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.target.style.background = 'var(--ink)'
                e.target.style.color = 'var(--paper)'
                e.target.style.borderColor = 'var(--ink)'
              }}
              onMouseLeave={e => {
                e.target.style.background = 'var(--paper)'
                e.target.style.color = 'var(--ink3)'
                e.target.style.borderColor = 'var(--border)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Large index number */}
      <div style={{
        fontFamily: "'Unbounded', sans-serif",
        fontSize: '4rem',
        fontWeight: 900,
        color: 'var(--border)',
        lineHeight: 1,
        alignSelf: 'center',
        userSelect: 'none',
        transition: 'color 0.3s',
        ...(hovered ? { color: 'var(--amber-l)' } : {}),
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>
    </div>
  )
}

const Experience = () => {
  const headRef = useReveal()

  return (
    <section
      id="experience"
      style={{ padding: '8rem 3rem', borderBottom: '1px solid var(--border)' }}
    >
      <div ref={headRef} className="reveal">
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--ink3)',
          marginBottom: '1rem',
        }}>
          03 / Experience
        </div>
        <WordHeading
          text="Where I've worked"
          style={{
            fontFamily: "'Unbounded', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            display: 'block',
          }}
        />
      </div>

      <div style={{ marginTop: '4rem' }}>
        {EXPERIENCES.map((exp, i) => (
          <ExpItem key={i} experience={exp} index={i} />
        ))}
        {/* Closing border */}
        <div style={{ borderTop: '1px solid var(--border)' }} />
      </div>
    </section>
  )
}

export default Experience
