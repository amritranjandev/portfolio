import React from 'react'
import { WordHeading } from './WordHeading'
import { useReveal } from '../hooks/useReveal'
import { ABOUT_TEXT } from '../constants'

const stats = [
  { num: '3+',  label: 'Years' },
  { num: '4',   label: 'Projects' },
  { num: '14',  label: 'Technologies' },
  { num: '2',   label: 'Companies' },
]

const About = () => {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section
      id="about"
      style={{
        padding: '8rem 3rem',
        display: 'grid',
        gridTemplateColumns: '2fr 3fr',
        gap: '5rem',
        alignItems: 'start',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* LEFT */}
      <div ref={leftRef} className="reveal-l">
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--ink3)',
          marginBottom: '1rem',
        }}>
          01 / About
        </div>

        <WordHeading
          text="Who I am"
          style={{
            fontFamily: "'Unbounded', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            marginBottom: '2rem',
            display: 'block',
          }}
        />

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}>
          {stats.map(({ num, label }) => (
            <div
              key={label}
              style={{
                background: 'var(--paper)',
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'background 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--amber-l)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--paper)')}
            >
              <div style={{
                fontFamily: "'Unbounded', sans-serif",
                fontSize: '2.5rem',
                fontWeight: 900,
                color: 'var(--amber)',
                lineHeight: 1,
              }}>
                {num}
              </div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--ink3)',
                marginTop: '0.35rem',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div ref={rightRef} className="reveal-r" style={{ paddingTop: '4rem' }}>
        {ABOUT_TEXT.split('\n').filter(Boolean).map((para, i) => (
          <p
            key={i}
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.9,
              color: 'var(--ink2)',
              marginBottom: '1.25rem',
            }}
          >
            {para}
          </p>
        ))}
      </div>
    </section>
  )
}

export default About
