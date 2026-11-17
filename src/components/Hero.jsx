import heroImage from '../assets/images/hero-plated-dish.jpg'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Welcome">
      <div className="hero__media">
        <img src={heroImage} alt="A finely plated dish on a candlelit table at Maison Étoile" fetchPriority="high" />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__content container">
        <p className="hero__kicker hero-in" style={{ '--d': '150ms' }}>
          <span className="hero__rule" aria-hidden="true" />
          The Art of French Dining
        </p>
        <h1 className="hero__title hero-in" style={{ '--d': '300ms' }}>
          An Evening <br />
          to <em>Remember.</em>
        </h1>
        <p className="hero__subtitle hero-in" style={{ '--d': '480ms' }}>
          Discover the timeless elegance of French cuisine, crafted with passion and served with soul.
        </p>
        <div className="hero__actions hero-in" style={{ '--d': '640ms' }}>
          <a href="#menu" className="btn btn--light">
            Discover Our Menu
          </a>
          <a href="#reservations" className="btn btn--gold">
            Reserve a Table
          </a>
        </div>
      </div>

      <aside className="hero__meta hero-in" style={{ '--d': '900ms' }} aria-label="Location">
        <span>Paris</span>
        <span className="hero__meta-rule" aria-hidden="true" />
        <span>VIII<sup>e</sup> Arrondissement</span>
      </aside>

      <a href="#story" className="hero__scroll" aria-label="Scroll to Our Story">
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}
