import { useMemo, useRef, useState } from 'react'
import { CalendarDays, Clock, Users, Info, ArrowRight } from 'lucide-react'
import sideImage from '../assets/images/reserve-chef-dark.jpg'
import { Eyebrow, Reveal, StarMark } from './ui.jsx'

const TIMES = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']
const GUESTS = [1, 2, 3, 4, 5, 6, 7, 8]
const MAX_REQUEST = 400
const BOOKING_WINDOW_DAYS = 90
const EMPTY = { name: '', email: '', date: '', time: '', guests: '2', requests: '' }

/** yyyy-mm-dd in the visitor's local time zone (toISOString would shift to UTC). */
function toInputDate(d) {
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function startOfToday() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

function parseInputDate(value) {
  const [y, m, d] = value.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function validate(v, today) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'This email address does not look right.'

  if (!v.date) e.date = 'Please choose a date.'
  else {
    const chosen = parseInputDate(v.date)
    const last = new Date(today)
    last.setDate(last.getDate() + BOOKING_WINDOW_DAYS)
    if (chosen < today) e.date = 'Please choose a date from today onwards.'
    else if (chosen > last) e.date = `We take reservations up to ${BOOKING_WINDOW_DAYS} days ahead.`
    else if (chosen.getDay() === 0 || chosen.getDay() === 1) e.date = 'We are closed on Sundays and Mondays.'
  }

  if (!v.time) e.time = 'Please choose a time.'
  const g = Number(v.guests)
  if (!Number.isInteger(g) || g < 1 || g > 8) e.guests = 'Please choose between 1 and 8 guests.'
  if (v.requests.length > MAX_REQUEST) e.requests = `Please keep this under ${MAX_REQUEST} characters.`
  return e
}

const formatDate = (value) =>
  parseInputDate(value).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })

export default function Reservations() {
  const [today] = useState(startOfToday)
  const maxDate = useMemo(() => {
    const d = new Date(today)
    d.setDate(d.getDate() + BOOKING_WINDOW_DAYS)
    return d
  }, [today])

  const [values, setValues] = useState(EMPTY)
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done
  const [confirmed, setConfirmed] = useState(null)
  const formRef = useRef(null)
  const confirmRef = useRef(null)

  const errors = validate(values, today)
  const show = (field) => touched[field] && errors[field]

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  const blur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }))

  const submit = (e) => {
    e.preventDefault()
    setTouched(Object.fromEntries(Object.keys(EMPTY).map((k) => [k, true])))
    const firstInvalid = Object.keys(EMPTY).find((k) => errors[k])
    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus()
      return
    }
    setStatus('sending')
    // Demo only: nothing is sent anywhere. We simulate a short round-trip.
    window.setTimeout(() => {
      setConfirmed({
        ...values,
        name: values.name.trim(),
        email: values.email.trim(),
        reference: `ME-${Math.random().toString(36).slice(2, 7).toUpperCase()}`,
      })
      setStatus('done')
      requestAnimationFrame(() => confirmRef.current?.focus())
    }, 900)
  }

  const reset = () => {
    setValues(EMPTY)
    setTouched({})
    setConfirmed(null)
    setStatus('idle')
  }

  const fieldProps = (name) => ({
    id: `res-${name}`,
    name,
    value: values[name],
    onChange: update,
    onBlur: blur,
    'aria-invalid': show(name) ? 'true' : undefined,
    'aria-describedby': show(name) ? `res-${name}-error` : undefined,
  })

  const fieldError = (name) =>
    show(name) ? (
      <p className="field__error" id={`res-${name}-error`} role="alert">
        {errors[name]}
      </p>
    ) : null

  return (
    <section id="reservations" className="section reservations">
      <div className="container reservations__grid">
        <Reveal className="reservations__aside">
          <img src={sideImage} alt="A chef in whites standing in the low light of the dining room" loading="lazy" />
          <div className="reservations__aside-text">
            <Eyebrow number="05" light>
              Réservations
            </Eyebrow>
            <h2 className="heading-xl">
              Reserve <em>your table.</em>
            </h2>
            <p>
              We serve dinner from Tuesday to Saturday. For parties of more than eight, private dining or the
              chef's table, please call us directly.
            </p>
            <a className="reservations__phone" href="tel:+33142601887">
              +33 1 42 60 18 87
            </a>
          </div>
        </Reveal>

        <Reveal className="reservations__panel" delay={120}>
          <div className="demo-note" role="note">
            <Info size={16} strokeWidth={1.5} aria-hidden="true" />
            <p>
              <strong>Demonstration only.</strong> This form is part of a portfolio website. Submissions are
              checked in your browser and are not sent to any restaurant, and no data is stored.
            </p>
          </div>

          {status === 'done' && confirmed ? (
            <div className="confirmation" ref={confirmRef} tabIndex={-1} aria-live="polite">
              <StarMark size={18} className="confirmation__star" />
              <p className="confirmation__kicker">Merci, {confirmed.name.split(' ')[0]}</p>
              <h3 className="confirmation__title">Your table awaits.</h3>
              <p className="confirmation__lead">
                Your demo request has been received. A real booking would be confirmed by email to{' '}
                <strong>{confirmed.email}</strong>.
              </p>
              <dl className="confirmation__details">
                <div>
                  <dt>
                    <CalendarDays size={15} strokeWidth={1.5} aria-hidden="true" /> Date
                  </dt>
                  <dd>{formatDate(confirmed.date)}</dd>
                </div>
                <div>
                  <dt>
                    <Clock size={15} strokeWidth={1.5} aria-hidden="true" /> Time
                  </dt>
                  <dd>{confirmed.time}</dd>
                </div>
                <div>
                  <dt>
                    <Users size={15} strokeWidth={1.5} aria-hidden="true" /> Guests
                  </dt>
                  <dd>
                    {confirmed.guests} {confirmed.guests === '1' ? 'guest' : 'guests'}
                  </dd>
                </div>
                <div>
                  <dt>Reference</dt>
                  <dd className="confirmation__ref">{confirmed.reference}</dd>
                </div>
              </dl>
              {confirmed.requests.trim() && (
                <p className="confirmation__requests">
                  <span>Your note</span>“{confirmed.requests.trim()}”
                </p>
              )}
              <p className="confirmation__demo">Demo submission — nothing was sent to the restaurant.</p>
              <button type="button" className="btn btn--dark" onClick={reset}>
                Make another reservation
              </button>
            </div>
          ) : (
            <form ref={formRef} className="form" onSubmit={submit} noValidate>
              <div className="form__row">
                <div className={`field ${show('name') ? 'has-error' : ''}`}>
                  <label htmlFor="res-name">Full name</label>
                  <input type="text" autoComplete="name" placeholder="Camille Laurent" {...fieldProps('name')} />
                  {fieldError('name')}
                </div>
                <div className={`field ${show('email') ? 'has-error' : ''}`}>
                  <label htmlFor="res-email">Email</label>
                  <input type="email" autoComplete="email" placeholder="camille@example.com" {...fieldProps('email')} />
                  {fieldError('email')}
                </div>
              </div>

              <div className="form__row form__row--3">
                <div className={`field ${show('date') ? 'has-error' : ''}`}>
                  <label htmlFor="res-date">Date</label>
                  <input type="date" min={toInputDate(today)} max={toInputDate(maxDate)} {...fieldProps('date')} />
                  {fieldError('date')}
                </div>
                <div className={`field ${show('time') ? 'has-error' : ''}`}>
                  <label htmlFor="res-time">Time</label>
                  <select {...fieldProps('time')}>
                    <option value="" disabled>
                      Select
                    </option>
                    {TIMES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {fieldError('time')}
                </div>
                <div className={`field ${show('guests') ? 'has-error' : ''}`}>
                  <label htmlFor="res-guests">Guests</label>
                  <select {...fieldProps('guests')}>
                    {GUESTS.map((g) => (
                      <option key={g} value={String(g)}>
                        {g} {g === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                  </select>
                  {fieldError('guests')}
                </div>
              </div>

              <div className={`field ${show('requests') ? 'has-error' : ''}`}>
                <label htmlFor="res-requests">
                  Special requests <span className="field__optional">Optional</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Allergies, a celebration, a quiet corner…"
                  maxLength={MAX_REQUEST + 50}
                  {...fieldProps('requests')}
                />
                <div className="field__meta">
                  {fieldError('requests')}
                  <span className={`field__count ${values.requests.length > MAX_REQUEST ? 'is-over' : ''}`}>
                    {values.requests.length}/{MAX_REQUEST}
                  </span>
                </div>
              </div>

              <div className="form__foot">
                <button type="submit" className="btn btn--dark btn--wide" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <>
                      <span className="spinner" aria-hidden="true" /> Checking availability
                    </>
                  ) : (
                    <>
                      Request Reservation <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
                    </>
                  )}
                </button>
                <p className="form__hint">Dinner Tuesday – Saturday, last seating 22:00.</p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
