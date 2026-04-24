import React, { useRef, useEffect } from 'react'

/**
 * Splits `text` into words, wraps each in .word-outer/.word-inner,
 * and adds `words-visible` when scrolled into view.
 *
 * Usage:
 *   <WordHeading text="Who I am" className="section-head" />
 */
export function WordHeading({ text, className = '', style = {}, tag: Tag = 'h2', delayStep = 80 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('words-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [text])

  const words = text.split(' ')

  return (
    <Tag ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="word-outer">
          <span
            className="word-inner"
            style={{ transitionDelay: `${i * delayStep}ms` }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}

/**
 * Splits `text` character-by-character and animates each one
 * dropping in from above on mount.
 *
 * Usage:
 *   <CharHeading text="Amrit Ranjan" className="hero-name" delay={200} />
 */
export function CharHeading({ text, className = '', style = {}, tag: Tag = 'h1', delay = 200, charDelay = 40 }) {
  const chars = [...text]

  return (
    <Tag className={className} style={style} aria-label={text}>
      {chars.map((ch, i) => {
        if (ch === ' ') return <span key={i} style={{ display: 'inline-block', width: '0.25em' }}>&nbsp;</span>
        return (
          <span key={i} className="char">
            <span
              className="char-inner animated"
              style={{ animationDelay: `${delay + i * charDelay}ms` }}
            >
              {ch}
            </span>
          </span>
        )
      })}
    </Tag>
  )
}
