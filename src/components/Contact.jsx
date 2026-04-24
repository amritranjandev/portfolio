import React, { useState } from 'react'
import { WordHeading } from './WordHeading'
import { useReveal } from '../hooks/useReveal'
import { CONTACT } from '../constants'

const ContactLink = ({ href, label, meta, external = false }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: hovered ? '1.25rem 0 1.25rem 0.75rem' : '1.25rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        textDecoration: 'none',
        color: hovered ? 'var(--amber)' : 'var(--paper)',
        transition: 'all 0.25s',
      }}
    >
      <span style={{ fontSize: '0.9rem' }}>{label}</span>
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.6rem',
        letterSpacing: '0.1em',
        color: hovered ? 'var(--amber)' : 'rgba(245,240,232,0.3)',
        transition: 'color 0.25s',
      }}>
        {meta}
      </span>
    </a>
  )
}

const Contact = () => {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section
      id="contact"
      style={{
        padding: '8rem 3rem',
        background: 'var(--ink)',
        color: 'var(--paper)',
      }}
    >
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.65rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(245,240,232,0.3)',
        marginBottom: '1rem',
      }}>
        05 / Contact
      </div>

      <WordHeading
        text="Let's connect"
        style={{
          fontFamily: "'Unbounded', sans-serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 900,
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
          display: 'block',
          color: 'var(--paper)',
          marginBottom: 0,
        }}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '5rem',
        marginTop: '4rem',
        alignItems: 'start',
      }}>
        {/* LEFT — lede */}
        <div ref={leftRef} className="reveal-l">
          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'rgba(245,240,232,0.6)',
            marginBottom: '2rem',
          }}>
            Have a project that needs a solid backend? Want to talk{' '}
            <span style={{ color: 'var(--amber)', fontStyle: 'normal' }}>data engineering</span>
            {' '}or{' '}
            <span style={{ color: 'var(--amber)' }}>Python</span>
            ? I'm always open to good conversations and interesting problems.
          </p>

          {/* Available badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(13,158,122,0.15)',
            color: '#4de8b4',
            padding: '0.6rem 1rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            border: '1px solid rgba(13,158,122,0.3)',
          }}>
            <div style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#4de8b4',
              animation: 'pulse 2s infinite',
              flexShrink: 0,
            }} />
            Open to new opportunities
          </div>

          {/* Location & phone */}
          <div style={{ marginTop: '2rem' }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.7rem',
              color: 'rgba(245,240,232,0.4)',
              lineHeight: 2,
            }}>
              <div>📍 {CONTACT.address}</div>
              <div>📞 {CONTACT.phoneNo.trim()}</div>
            </div>
          </div>
        </div>

        {/* RIGHT — links */}
        <div ref={rightRef} className="reveal-r">
          <ContactLink
            href={`mailto:${CONTACT.email}`}
            label={CONTACT.email}
            meta="Email ↗"
          />
          <ContactLink
            href="https://www.linkedin.com/in/amrit-ranjan-professional/"
            label="LinkedIn"
            meta="Connect ↗"
            external
          />
          <ContactLink
            href="https://github.com/amritranjandev"
            label="GitHub"
            meta="Follow ↗"
            external
          />
          <ContactLink
            href="https://medium.com/@amritranjanamc"
            label="Medium"
            meta="Read ↗"
            external
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
