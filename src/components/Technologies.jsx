import React, { useEffect, useRef } from 'react'
import { WordHeading } from './WordHeading'
import { useReveal } from '../hooks/useReveal'

/* ── Element data ─────────────────────────────────── */
const ELEMENTS = [
  // Row 1 — Languages & Frameworks
  { num: '01', sym: 'Py',  name: 'Python',     cat: 'lang'  },
  { num: '02', sym: 'JS',  name: 'JavaScript', cat: 'lang'  },
  { num: '03', sym: 'Nd',  name: 'Node.js',    cat: 'web'   },
  { num: '04', sym: 'Fl',  name: 'Flask',      cat: 'web'   },
  { num: '05', sym: 'Pd',  name: 'Pandas',     cat: 'data'  },
  { num: '06', sym: 'Sp',  name: 'PySpark',    cat: 'data'  },
  null, // spacer

  // Row 2 — Databases
  { num: '07', sym: 'Mg',  name: 'MongoDB',    cat: 'db'    },
  { num: '08', sym: 'My',  name: 'MySQL',      cat: 'db'    },
  { num: '09', sym: 'Cs',  name: 'Cassandra',  cat: 'db'    },
  { num: '10', sym: 'Pg',  name: 'PostgreSQL', cat: 'db'    },
  null, null, null,

  // Row 3 — Infrastructure & Cloud
  { num: '11', sym: 'Dk',  name: 'Docker',     cat: 'infra' },
  { num: '12', sym: 'K8',  name: 'Kubernetes', cat: 'infra' },
  { num: '13', sym: 'Az',  name: 'Azure',      cat: 'infra' },
  { num: '14', sym: 'Gt',  name: 'Git/GitHub', cat: 'infra' },
  null, null, null,
]

const CAT_STYLES = {
  lang:  { bg: '#fdecc8', border: '#e8920a', hover: '#e8920a' },
  data:  { bg: '#d0f5eb', border: '#0d9e7a', hover: '#0d9e7a' },
  db:    { bg: '#fde8e2', border: '#e05c3a', hover: '#e05c3a' },
  infra: { bg: '#dce8ff', border: '#3b6dd8', hover: '#3b6dd8' },
  web:   { bg: '#ede8ff', border: '#7c4dff', hover: '#7c4dff' },
}

const LEGEND = [
  { cat: 'lang',  color: '#e8920a', label: 'Languages' },
  { cat: 'data',  color: '#0d9e7a', label: 'Data'      },
  { cat: 'db',    color: '#e05c3a', label: 'Databases'  },
  { cat: 'infra', color: '#3b6dd8', label: 'Infrastructure' },
  { cat: 'web',   color: '#7c4dff', label: 'Web'        },
]

const Element = ({ num, sym, name, cat, animDelay = 0 }) => {
  const [hovered, setHovered] = React.useState(false)
  const { bg, border, hover } = CAT_STYLES[cat]

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:  hovered ? hover : bg,
        border:      `1px solid ${hovered ? hover : border}`,
        padding:     '0.6rem 0.4rem',
        textAlign:   'center',
        position:    'relative',
        cursor:      'default',
        transform:   hovered ? 'translateY(-6px) scale(1.08)' : 'none',
        zIndex:      hovered ? 10 : 1,
        boxShadow:   hovered ? `0 12px 32px ${border}40` : 'none',
        transition:  'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
        animation:   `elPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${animDelay}ms both`,
      }}
    >
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.5rem',
        color: hovered ? 'rgba(255,255,255,0.7)' : 'var(--ink3)',
        textAlign: 'right',
        lineHeight: 1,
      }}>
        {num}
      </div>
      <div style={{
        fontFamily: "'Unbounded', sans-serif",
        fontWeight: 900,
        fontSize: '1.3rem',
        lineHeight: 1.1,
        margin: '0.1rem 0',
        color: hovered ? '#fff' : 'var(--ink)',
        transition: 'color 0.2s',
      }}>
        {sym}
      </div>
      <div style={{
        fontSize: '0.45rem',
        fontFamily: "'Space Mono', monospace",
        letterSpacing: '0.05em',
        lineHeight: 1,
        color: hovered ? 'rgba(255,255,255,0.8)' : 'var(--ink3)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        transition: 'color 0.2s',
      }}>
        {name}
      </div>
    </div>
  )
}

const Technologies = () => {
  const sectionRef = useReveal()
  const headRef   = useReveal()
  const gridRef   = useRef(null)
  const legendRef = useReveal()

  /* Stagger-in the grid when it enters viewport */
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.dataset.visible = 'true'
          observer.unobserve(grid)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      style={{ padding: '8rem 3rem', borderBottom: '1px solid var(--border)' }}
    >
      {/* Header row */}
      <div
        ref={headRef}
        className="reveal"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ink3)',
            marginBottom: '1rem',
          }}>
            02 / Stack
          </div>
          <WordHeading
            text="The stack"
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
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem',
          color: 'var(--ink3)',
          textAlign: 'right',
          maxWidth: '14rem',
          lineHeight: 1.7,
        }}>
          Hover any element. Grouped by discipline like a periodic table.
        </div>
      </div>

      {/* Periodic grid */}
      <div
        ref={gridRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '6px',
        }}
      >
        {ELEMENTS.map((el, i) =>
          el === null ? (
            <div key={`spacer-${i}`} style={{ opacity: 0, pointerEvents: 'none' }} />
          ) : (
            <Element key={el.num} {...el} animDelay={i * 40} />
          )
        )}
      </div>

      {/* Legend */}
      <div
        ref={legendRef}
        className="reveal"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}
      >
        {LEGEND.map(({ color, label }) => (
          <div
            key={label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              color: 'var(--ink3)',
            }}
          >
            <div style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: color,
              flexShrink: 0,
            }} />
            {label}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies
