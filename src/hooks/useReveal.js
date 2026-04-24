import { useEffect, useRef } from 'react'

/**
 * Returns a ref — attach to any element.
 * Adds class `vis` when the element enters the viewport.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('vis')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px', ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

/**
 * Returns a ref — attach to a heading element.
 * When in view, adds `words-visible` class which triggers
 * CSS transitions on every `.word-inner` child.
 */
export function useWordReveal(delayStep = 80) {
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
  }, [])
  return ref
}
