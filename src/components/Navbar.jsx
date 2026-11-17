import { useEffect, useState } from 'react'
import { Menu as MenuIcon, X } from 'lucide-react'
import { StarMark } from './ui.jsx'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Solid background once the hero has been scrolled past a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link of the section currently in the middle of the viewport.
  useEffect(() => {
    // Observe every section, so ones without a nav link (experience, reservations)
    // clear the highlight instead of leaving the previous link lit.
    const sections = [...document.querySelectorAll('main section, footer')]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id || ''))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock page scroll and allow Escape while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Close the mobile menu if the viewport grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <a href="#home" className="nav__logo" onClick={close} aria-label="Maison Étoile, back to top">
          <span>Maison</span>
          <StarMark size={11} className="nav__star" />
          <span>Étoile</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${active === l.id ? 'is-active' : ''}`}
              aria-current={active === l.id ? 'true' : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#reservations" className="btn btn--gold nav__cta">
          Reserve a Table
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} strokeWidth={1.25} /> : <MenuIcon size={22} strokeWidth={1.25} />}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" aria-hidden={!open} inert={!open ? true : undefined}>
        <nav className="mobile-menu__links" aria-label="Mobile">
          {LINKS.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={close}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
            >
              <span className="mobile-menu__num">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <a href="#reservations" className="btn btn--gold" onClick={close}>
            Reserve a Table
          </a>
          <p>
            Tuesday – Saturday · 19:00 – 23:00
            <br />
            +33 1 42 60 18 87
          </p>
        </div>
      </div>
    </header>
  )
}
