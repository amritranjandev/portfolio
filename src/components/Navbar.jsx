import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 200,
    background: 'var(--paper)',
    borderBottom: '1px solid var(--border)',
    padding: '1rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'box-shadow 0.3s',
    boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.06)' : 'none',
  }

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div
        style={{
          fontFamily: "'Unbounded', sans-serif",
          fontWeight: 900,
          fontSize: '1.1rem',
          letterSpacing: '-0.03em',
          color: 'var(--ink)',
          cursor: 'pointer',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        AR<span style={{ color: 'var(--amber)' }}>.</span>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {[
          { label: 'About',      id: 'about'      },
          { label: 'Stack',      id: 'skills'     },
          { label: 'Work',       id: 'experience' },
          { label: 'Projects',   id: 'projects'   },
          { label: 'Contact',    id: 'contact'    },
        ].map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scroll(id)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink3)',
              transition: 'color 0.2s',
              padding: 0,
            }}
            onMouseEnter={e => (e.target.style.color = 'var(--amber)')}
            onMouseLeave={e => (e.target.style.color = 'var(--ink3)')}
          >
            {label}
          </button>
        ))}

        {/* Available dot */}
        <div
          title="Open to new opportunities"
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--teal)',
            animation: 'pulse 2s infinite',
          }}
        />
      </div>
    </nav>
  )
}

export default Navbar
