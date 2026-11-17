import chefImage from '../assets/images/chef-plating.jpg'
import { Eyebrow, Reveal } from './ui.jsx'

const FACTS = [
  { value: '1987', label: 'Established' },
  { value: '32', label: 'Covers each night' },
  { value: '4', label: 'Menus a year' },
]

export default function Story() {
  return (
    <section id="story" className="section story">
      <div className="container story__grid">
        <Reveal className="story__media">
          <div className="story__frame" aria-hidden="true" />
          <img
            src={chefImage}
            alt="Our chef carefully plating a dish under the warm kitchen lights"
            loading="lazy"
          />
          <p className="story__caption">Chef Élise Moreau, at the pass</p>
        </Reveal>

        <div className="story__text">
          <Reveal>
            <Eyebrow number="01">Our Story</Eyebrow>
          </Reveal>
          <Reveal as="h2" className="heading-xl" delay={100}>
            A Taste of <em>Parisian</em> Tradition.
          </Reveal>
          <Reveal delay={200}>
            <p className="lead">
              At Maison Étoile, we celebrate the beauty of French gastronomy. Every dish tells a story,
              combining traditional French techniques with seasonal ingredients and contemporary creativity.
            </p>
            <p className="body-copy">
              Behind a quiet façade a few steps from the Madeleine, our kitchen works with growers, fishermen
              and cheesemakers we have known for decades. The menu changes with the markets, never with
              fashion, and every plate leaves the pass only when it is exactly right.
            </p>
          </Reveal>

          <Reveal delay={300} className="story__signature">
            <p className="signature">With love, from Paris.</p>
            <p className="signature__name">Élise Moreau — Chef de Cuisine</p>
          </Reveal>

          <Reveal as="dl" delay={400} className="facts">
            {FACTS.map((f) => (
              <div key={f.label} className="facts__item">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
