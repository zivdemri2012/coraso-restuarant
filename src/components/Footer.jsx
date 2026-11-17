import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'
import { Eyebrow, Reveal, StarMark } from './ui.jsx'

const HOURS = [
  { days: 'Tuesday – Thursday', time: '19:00 – 23:00' },
  { days: 'Friday – Saturday', time: '19:00 – 23:30' },
  { days: 'Sunday – Monday', time: 'Closed' },
]

const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'TripAdvisor', href: 'https://www.tripadvisor.com/' },
]

const YEAR = new Date().getFullYear()

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Place+de+la+Madeleine+Paris'

/** A drawn, stylised map of the neighbourhood (no third-party embed or tracking). */
function LocationMap() {
  return (
    <a className="map" href={MAPS_URL} target="_blank" rel="noreferrer" aria-label="Open the area in Google Maps (new tab)">
      <svg viewBox="0 0 600 420" role="img" aria-labelledby="map-title" preserveAspectRatio="xMidYMid slice">
        <title id="map-title">Map showing Maison Étoile near the Madeleine, north of the Seine</title>
        <rect width="600" height="420" className="map__bg" />
        {/* Seine */}
        <path d="M-20 360 C 120 330, 200 390, 320 370 S 520 300, 640 330" className="map__river" />
        {/* Streets */}
        <g className="map__streets">
          <path d="M0 120 L600 70" />
          <path d="M0 230 L600 200" />
          <path d="M40 0 L130 420" />
          <path d="M250 0 L270 420" />
          <path d="M470 0 L420 420" />
          <path d="M0 40 L320 300 L600 260" />
          <path d="M120 420 L560 0" />
        </g>
        <g className="map__minor">
          <path d="M0 175 L600 140" />
          <path d="M150 0 L200 420" />
          <path d="M360 0 L350 420" />
          <path d="M540 0 L500 420" />
          <path d="M0 290 L600 255" />
        </g>
        {/* Park */}
        <rect x="455" y="285" width="110" height="40" className="map__park" transform="rotate(-6 510 305)" />
        <g className="map__labels">
          <text x="70" y="395">La Seine</text>
          <text x="565" y="276" textAnchor="end">Jardin des Tuileries</text>
          <text x="380" y="58">Opéra</text>
          <text x="40" y="108">Bd Haussmann</text>
          <text x="60" y="222">Rue du Faubourg Saint-Honoré</text>
        </g>
        {/* Pin */}
        <g transform="translate(300 182)" className="map__pin">
          <circle r="34" className="map__pulse" />
          <circle r="7" className="map__dot" />
          <text x="16" y="-14" className="map__pin-label">Maison Étoile</text>
        </g>
      </svg>
      <span className="map__cta">
        Open in Maps <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
      </span>
    </a>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <Reveal>
              <Eyebrow number="06">Contact</Eyebrow>
            </Reveal>
            <Reveal as="h2" className="heading-xl" delay={100}>
              Find us in <em>Paris.</em>
            </Reveal>

            <Reveal className="contact__cols" delay={200}>
              <div className="contact__block">
                <h3>
                  <MapPin size={15} strokeWidth={1.5} aria-hidden="true" /> Address
                </h3>
                <address>
                  27 Rue de l'Étoile Dorée
                  <br />
                  75008 Paris, France
                </address>
                <p className="contact__muted">Métro Madeleine, lines 8, 12 &amp; 14</p>
              </div>

              <div className="contact__block">
                <h3>
                  <Clock size={15} strokeWidth={1.5} aria-hidden="true" /> Opening hours
                </h3>
                <dl className="hours">
                  {HOURS.map((h) => (
                    <div key={h.days}>
                      <dt>{h.days}</dt>
                      <dd className={h.time === 'Closed' ? 'is-closed' : ''}>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="contact__block">
                <h3>
                  <Phone size={15} strokeWidth={1.5} aria-hidden="true" /> Telephone
                </h3>
                <a href="tel:+33142601887">+33 1 42 60 18 87</a>
              </div>

              <div className="contact__block">
                <h3>
                  <Mail size={15} strokeWidth={1.5} aria-hidden="true" /> Email
                </h3>
                <a href="mailto:bonjour@maison-etoile.example">bonjour@maison-etoile.example</a>
              </div>
            </Reveal>
          </div>

          <Reveal className="contact__map" delay={150}>
            <LocationMap />
          </Reveal>
        </div>

        <div className="footer">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              Maison <StarMark size={12} className="footer__star" /> Étoile
            </a>
            <p className="footer__tagline">Maison Étoile — The Art of French Dining.</p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <a href="#story">Our Story</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Gallery</a>
            <a href="#reservations">Reservations</a>
          </nav>

          <ul className="footer__social" aria-label="Social media">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label} <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__legal">
          <p>© {YEAR} Maison Étoile. A fictional restaurant, designed as a portfolio piece.</p>
          <p>Photography via Unsplash.</p>
        </div>
      </div>
    </footer>
  )
}
