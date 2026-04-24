import React, { useEffect, useState, useRef } from 'react'
import { CharHeading } from './WordHeading'
import { HERO_CONTENT } from '../constants'
import resume from '../assets/amrit_ranjan_res.pdf'

const PHRASES = [
  'Data Extraction',
  'API Engineering',
  'Backend Systems',
  'Test Data Mgmt',
  'Cloud Deployment',
]

function useTypewriter(phrases, typingSpeed = 85, deletingSpeed = 45, pauseMs = 1800) {
  const [display, setDisplay] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIdx % phrases.length]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(phrase.slice(0, charIdx + 1))
        if (charIdx + 1 === phrase.length) {
          setTimeout(() => setDeleting(true), pauseMs)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplay(phrase.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setPhraseIdx(i => i + 1)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, phraseIdx, phrases, typingSpeed, deletingSpeed, pauseMs])

  return display
}

const StatCard = ({ label, value, sub, accentColor = 'var(--amber)' }) => (
  <div
    style={{
      background: 'var(--paper)',
      border: '1px solid var(--border)',
      padding: '1.25rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: 3,
        background: accentColor,
      }}
    />
    <div style={{
      fontFamily: "'Space Mono', monospace",
      fontSize: '0.6rem',
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'var(--ink3)',
      marginBottom: '0.4rem',
    }}>
      {label}
    </div>
    <div style={{
      fontFamily: "'Unbounded', sans-serif",
      fontSize: value.length > 4 ? '1rem' : '2rem',
      fontWeight: 700,
      color: 'var(--ink)',
      lineHeight: 1.1,
    }}>
      {value}
    </div>
    {sub && (
      <div style={{
        fontSize: '0.75rem',
        color: 'var(--ink3)',
        marginTop: '0.25rem',
      }}>
        {sub}
      </div>
    )}
  </div>
)

const Hero = () => {
  const twText = useTypewriter(PHRASES)
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <>
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          padding: '6rem 3rem 4rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Right-side background stripe */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0, right: 0,
            width: '45%',
            height: '100%',
            background: 'var(--paper2)',
            clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
            zIndex: 0,
          }}
        />

        {/* LEFT COLUMN */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Eyebrow */}
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--amber)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
          }}>
            <span style={{ display: 'inline-block', width: '2rem', height: '2px', background: 'var(--amber)' }} />
            Python Developer · Backend Engineer
          </div>

          {/* Name — char split */}
          <CharHeading
            text="Amrit Ranjan"
            delay={200}
            charDelay={45}
            style={{
              fontFamily: "'Unbounded', sans-serif",
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              marginBottom: '2rem',
              display: 'block',
            }}
          />

          {/* Description */}
          <p style={{
            fontSize: '0.95rem',
            lineHeight: 1.8,
            color: 'var(--ink2)',
            maxWidth: '28rem',
            marginBottom: '2.5rem',
          }}>
            Building{' '}
            <span style={{ color: 'var(--amber)', fontWeight: 600 }}>scalable backends</span>
            , data pipelines, and APIs that power real products. 3+ years turning complex data
            challenges into clean, reliable engineering.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <HoverButton
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              primary
            >
              View Projects
            </HoverButton>
            <HoverButton
              onClick={() => setResumeOpen(true)}
            >
              View Resume
            </HoverButton>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* Location badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--teal-l)',
            color: 'var(--teal-d)',
            padding: '0.5rem 1rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.1em',
            width: 'fit-content',
          }}>
            📍 Bangalore, India
          </div>

          {/* Stat row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <StatCard label="Experience" value="3+" sub="Years in production" />
            <StatCard label="Projects" value="4" sub="Shipped & live" accentColor="var(--teal)" />
          </div>

          <StatCard
            label="Current Role"
            value="Project Engineer"
            sub="Avo Automation · 2023 – Present"
            accentColor="var(--coral)"
          />

          {/* Typewriter card */}
          <div style={{
            background: 'var(--paper)',
            border: '1px solid var(--border)',
            padding: '1.25rem 1.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: 3, background: 'var(--violet)',
            }} />
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--ink3)',
              marginBottom: '0.4rem',
            }}>
              Specialisation
            </div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.9rem',
              fontWeight: 700,
              color: 'var(--amber)',
              minHeight: '1.4rem',
            }}>
              {twText}
              <span className="tw-cursor" />
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      {resumeOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 500,
            background: 'rgba(10,10,15,0.7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(6px)',
          }}
          onClick={() => setResumeOpen(false)}
        >
          <div
            style={{
              background: 'var(--paper)',
              padding: '1.5rem',
              width: '90%', maxWidth: '900px',
              position: 'relative',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setResumeOpen(false)}
              style={{
                position: 'absolute', top: '1rem', right: '1rem',
                background: 'none', border: 'none',
                fontSize: '1.5rem', cursor: 'pointer',
                color: 'var(--ink)',
              }}
            >
              ×
            </button>
            <iframe
              src={resume}
              title="Amrit Ranjan Resume"
              style={{ width: '100%', height: '600px', border: 'none' }}
            />
            <div style={{ textAlign: 'right', marginTop: '1rem' }}>
              <a
                href={resume}
                download
                style={{
                  display: 'inline-block',
                  background: 'var(--ink)',
                  color: 'var(--paper)',
                  padding: '0.6rem 1.5rem',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                }}
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/* ── Small reusable button with hover fill ── */
export function HoverButton({ children, onClick, primary = false }) {
  const [hovered, setHovered] = useState(false)

  const base = {
    border: primary ? 'none' : '1.5px solid var(--ink)',
    background: primary
      ? hovered ? 'var(--amber)' : 'var(--ink)'
      : hovered ? 'transparent' : 'transparent',
    color: primary
      ? '#fff'
      : hovered ? 'var(--amber)' : 'var(--ink)',
    borderColor: !primary && hovered ? 'var(--amber)' : !primary ? 'var(--ink)' : undefined,
    padding: '0.85rem 2rem',
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.7rem',
    letterSpacing: '0.08em',
    cursor: 'pointer',
    transition: 'all 0.25s',
  }

  return (
    <button
      style={base}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  )
}

export default Hero
