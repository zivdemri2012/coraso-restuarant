import { Leaf, Wine, Flame } from 'lucide-react'
import flameImage from '../assets/images/experience-flame.jpg'
import { Eyebrow, Reveal, StarMark } from './ui.jsx'

const FEATURES = [
  {
    icon: Leaf,
    numeral: 'I',
    title: 'Seasonal Ingredients',
    text: 'Our carte follows the French calendar: spring asparagus from the Loire, summer tomatoes from Provence, autumn game and winter truffles from Périgord.',
  },
  {
    icon: Wine,
    numeral: 'II',
    title: 'Exceptional Wine Selection',
    text: 'More than 600 references rest in our vaulted cellar, from grand cru Burgundy to small biodynamic growers. Our sommelier will help you choose.',
  },
  {
    icon: Flame,
    numeral: 'III',
    title: 'Intimate Atmosphere',
    text: 'Only thirty-two covers, candlelit tables set well apart, and a team who remember how you take your coffee. An evening entirely at your pace.',
  },
]

export default function Experience() {
  return (
    <section className="experience" aria-labelledby="experience-title">
      <div className="experience__band" aria-hidden="true">
        <img src={flameImage} alt="" loading="lazy" />
      </div>

      <div className="container experience__inner">
        <header className="section-head section-head--center">
          <Reveal>
            <Eyebrow number="04" light>
              L'Expérience
            </Eyebrow>
          </Reveal>
          <Reveal as="h2" id="experience-title" className="heading-xl experience__title" delay={100}>
            More Than a Meal. <br />
            <em>An Experience.</em>
          </Reveal>
        </header>

        <div className="features">
          {FEATURES.map(({ icon: Icon, numeral, title, text }, i) => (
            <Reveal key={title} className="feature" delay={i * 140}>
              <div className="feature__top">
                <span className="feature__numeral">{numeral}</span>
                <Icon size={26} strokeWidth={1} className="feature__icon" aria-hidden="true" />
              </div>
              <h3 className="feature__title">{title}</h3>
              <p className="feature__text">{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="figure" className="quote" delay={150}>
          <StarMark size={12} className="quote__star" />
          <blockquote lang="fr">« La cuisine, c'est quand les choses ont le goût de ce qu'elles sont. »</blockquote>
          <figcaption>Curnonsky, Prince des Gastronomes</figcaption>
        </Reveal>
      </div>
    </section>
  )
}
