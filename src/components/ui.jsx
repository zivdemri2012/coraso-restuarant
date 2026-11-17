import { useEffect, useRef, useState } from 'react'

/** Fades and lifts its children into view the first time they enter the viewport. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(() => typeof window !== 'undefined' && !('IntersectionObserver' in window))

  useEffect(() => {
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Small numbered label that opens each section: "01 — Notre Histoire". */
export function Eyebrow({ number, children, light = false }) {
  return (
    <p className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>
      {number && <span className="eyebrow__num">{number}</span>}
      <span className="eyebrow__rule" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

/** The four-point star used as the house mark. */
export function StarMark({ size = 14, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" fill="currentColor" />
    </svg>
  )
}
