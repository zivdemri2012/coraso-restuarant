import { useState } from 'react'
import { CATEGORIES, DISHES } from '../data/menu.js'
import { Eyebrow, Reveal } from './ui.jsx'

export default function Menu() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? DISHES : DISHES.filter((d) => d.category === filter)
  const frenchLabel = (cat) => CATEGORIES.find((c) => c.id === cat)?.french

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <header className="section-head section-head--center">
          <Reveal>
            <Eyebrow number="02">La Carte</Eyebrow>
          </Reveal>
          <Reveal as="h2" className="heading-xl" delay={100}>
            Signature <em>Dishes</em>
          </Reveal>
          <Reveal as="p" className="section-head__intro" delay={200}>
            A short selection from our autumn carte. Each course is prepared to order from ingredients
            delivered that morning.
          </Reveal>
        </header>

        <Reveal delay={250}>
          <div className="filters" role="group" aria-label="Filter dishes by course">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`filters__btn ${filter === c.id ? 'is-active' : ''}`}
                aria-pressed={filter === c.id}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'dish' : 'dishes'}
        </p>

        {/* Keyed on the filter so the grid re-plays its entrance each time it changes. */}
        <ul className="dishes" key={filter}>
          {visible.map((dish, i) => (
            <li key={dish.id} className="dish" style={{ '--i': i }}>
              <div className="dish__media">
                <img src={dish.image} alt={dish.alt} loading="lazy" />
                <span className="dish__tag">{frenchLabel(dish.category)}</span>
              </div>
              <div className="dish__body">
                <h3 className="dish__name">
                  <span>{dish.name}</span>
                  <span className="dish__leader" aria-hidden="true" />
                  <span className="dish__price">€{dish.price}</span>
                </h3>
                <p className="dish__desc">{dish.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <Reveal className="menu__foot">
          <p>
            Menu dégustation in seven courses, €145 &nbsp;·&nbsp; with wine pairing, €225
          </p>
          <a href="#reservations" className="link-arrow">
            Reserve your table
          </a>
        </Reveal>
      </div>
    </section>
  )
}
