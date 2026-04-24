import React from 'react'

const ITEMS = [
  'Python', 'PySpark', 'Flask', 'Pandas', 'MongoDB', 'MySQL',
  'Docker', 'Kubernetes', 'Azure', 'Node.js', 'JavaScript',
  'Cassandra', 'Git', 'Backend Engineering', 'Data Engineering',
]

const Marquee = () => (
  <div
    style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      background: 'var(--ink)',
      padding: '0.8rem 0',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        display: 'flex',
        gap: 0,
        animation: 'marquee 20s linear infinite',
        whiteSpace: 'nowrap',
      }}
    >
      {/* Duplicate for seamless loop */}
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span
          key={i}
          style={{
            padding: '0 2rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(245, 240, 232, 0.5)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {item}
          <span style={{ color: 'var(--amber)', fontSize: '0.5rem' }}>◆</span>
        </span>
      ))}
    </div>
  </div>
)

export default Marquee
