import React, { useState } from 'react'
import { WordHeading } from './WordHeading'
import { useReveal } from '../hooks/useReveal'
import { PROJECTS } from '../constants'

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false)
  const isLeft = index % 2 === 0

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--paper2)' : 'var(--paper)',
        padding: '2.5rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s',
        cursor: 'default',
      }}
    >
      {/* Arrow */}
      <div style={{
        position: 'absolute',
        top: '2rem', right: '2rem',
        fontSize: '1.2rem',
        color: hovered ? 'var(--amber)' : 'var(--border)',
        transform: hovered ? 'translate(2px, -2px)' : 'none',
        transition: 'all 0.3s',
      }}>
        ↗
      </div>

      {/* Number */}
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.6rem',
        letterSpacing: '0.2em',
        color: 'var(--ink3)',
        marginBottom: '1.5rem',
      }}>
        {String(index + 1).padStart(2, '0')} / {project.timeline}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Unbounded', sans-serif",
        fontSize: '1.5rem',
        fontWeight: 900,
        letterSpacing: '-0.03em',
        marginBottom: '0.35rem',
        lineHeight: 1.1,
        color: hovered ? 'var(--amber)' : 'var(--ink)',
        transition: 'color 0.3s',
      }}>
        {project.title}
      </h3>

      {/* Company */}
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '0.7rem',
        letterSpacing: '0.1em',
        color: 'var(--coral)',
        marginBottom: '1rem',
      }}>
        {project.company || (index < 2 ? 'Avo Automation' : 'Bot IT Services')}
      </div>

      {/* Description */}
      <p style={{
        fontSize: '0.78rem',
        color: 'var(--ink2)',
        lineHeight: 1.8,
        marginBottom: '1.5rem',
      }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.technologies.map((tech) => (
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
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Animated bottom bar */}
      <div style={{
        height: 2,
        background: 'var(--border)',
        marginTop: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: 'var(--amber)',
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }} />
      </div>
    </div>
  )
}

const Projects = () => {
  const headRef  = useReveal()
  const gridRef  = useReveal()

  // Inject company name for display (not in original constants)
  const projectsWithCompany = PROJECTS.map((p, i) => ({
    ...p,
    company: i < 2 ? 'Avo Automation' : 'Bot IT Services',
  }))

  return (
    <section
      id="projects"
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
          04 / Projects
        </div>
        <WordHeading
          text="What I've built"
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

      {/* 2×2 grid */}
      <div
        ref={gridRef}
        className="reveal"
        style={{
          marginTop: '4rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}
      >
        {projectsWithCompany.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects
