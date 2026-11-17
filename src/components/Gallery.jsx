import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import diningRoom from '../assets/images/gallery-dining-room.jpg'
import wineToast from '../assets/images/gallery-wine-toast.jpg'
import chefKnife from '../assets/images/gallery-chef-knife.jpg'
import parisNight from '../assets/images/gallery-paris-night.jpg'
import eveningRoom from '../assets/images/gallery-evening-room.jpg'
import bruleeTable from '../assets/images/gallery-brulee-table.jpg'
import cafeTerrace from '../assets/images/gallery-cafe-terrace.jpg'
import { Eyebrow, Reveal } from './ui.jsx'

const PHOTOS = [
  { src: diningRoom, caption: 'Le Salon', alt: 'Dining room with white tablecloths and tall windows', area: 'a' },
  { src: wineToast, caption: 'Le Toast', alt: 'Guests raising glasses of red wine', area: 'b' },
  { src: chefKnife, caption: 'La Préparation', alt: 'A chef finely chopping herbs and mushrooms', area: 'c' },
  { src: parisNight, caption: 'Pont Alexandre III', alt: 'The Pont Alexandre III and Eiffel Tower at dusk', area: 'd' },
  { src: bruleeTable, caption: 'La Douceur', alt: 'Crème brûlée with mint on a marble table', area: 'e' },
  { src: eveningRoom, caption: 'Le Soir', alt: 'The dining room in warm evening light', area: 'f' },
  { src: cafeTerrace, caption: 'La Terrasse', alt: 'A Parisian terrace glowing in the evening', area: 'g' },
]

export default function Gallery() {
  const [index, setIndex] = useState(null)
  const closeBtn = useRef(null)
  const lastTrigger = useRef(null)

  const close = useCallback(() => {
    setIndex(null)
    lastTrigger.current?.focus()
  }, [])
  const step = useCallback((dir) => setIndex((i) => (i + dir + PHOTOS.length) % PHOTOS.length), [])

  useEffect(() => {
    if (index === null) return
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index, close, step])

  const open = (i, e) => {
    lastTrigger.current = e.currentTarget
    setIndex(i)
  }

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <header className="section-head section-head--split">
          <div>
            <Reveal>
              <Eyebrow number="03">Gallery</Eyebrow>
            </Reveal>
            <Reveal as="h2" className="heading-xl" delay={100}>
              Moments at the <em>Maison</em>
            </Reveal>
          </div>
          <Reveal as="p" className="section-head__intro" delay={200}>
            Candlelight on linen, the hush of the kitchen before service, and the city glowing just beyond
            our windows.
          </Reveal>
        </header>

        <div className="mosaic">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src} className={`mosaic__item mosaic__item--${p.area}`} delay={(i % 3) * 90}>
              <button type="button" className="mosaic__btn" onClick={(e) => open(i, e)} aria-label={`View photo: ${p.caption}`}>
                <img src={p.src} alt={p.alt} loading="lazy" />
                <span className="mosaic__caption">
                  <span className="mosaic__num">{String(i + 1).padStart(2, '0')}</span>
                  {p.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {index !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={PHOTOS[index].caption} onClick={close}>
          <button ref={closeBtn} type="button" className="lightbox__close" onClick={close} aria-label="Close">
            <X size={26} strokeWidth={1.25} />
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              step(-1)
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={30} strokeWidth={1} />
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img key={index} src={PHOTOS[index].src} alt={PHOTOS[index].alt} />
            <figcaption>
              <span>{String(index + 1).padStart(2, '0')} / {String(PHOTOS.length).padStart(2, '0')}</span>
              {PHOTOS[index].caption}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              step(1)
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={30} strokeWidth={1} />
          </button>
        </div>
      )}
    </section>
  )
}
