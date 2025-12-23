import { useEffect, useRef, useState } from 'react'
import './App.css'

const featuredLogos = ['Acme Bank', 'Northbridge', 'LumenPay', 'Atlas Org', 'Harbor', 'Juniper']

const featureCards = [
  {
    title: 'Adaptive checkout',
    body: 'Responsive layouts with on-scroll reveals that guide donors through context-rich messaging.',
  },
  {
    title: 'Trust built-in',
    body: 'Glassmorphism shells, soft shadows, and gently staggered elements reinforce credibility.',
  },
  {
    title: 'Launch-ready blocks',
    body: 'Hero, marquee, and narrative sections designed to be remixed without custom tooling.',
  },
]

const storyMoments = [
  {
    label: '01',
    heading: 'Signal intent',
    copy: 'Lead with a crisp value prop and a primary call to action. Keep supporting text concise.',
  },
  {
    label: '02',
    heading: 'Reassure on scroll',
    copy: 'Reveal social proof and benefits as the user scrolls, mirroring Stripe-style sequencing.',
  },
  {
    label: '03',
    heading: 'Convert with clarity',
    copy: 'Use focused cards and sticky highlights so the next step is always visible.',
  },
]

function Reveal({ children, className }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const mergedClass = ['reveal', visible ? 'reveal--visible' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={ref} className={mergedClass}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Stripe-inspired scroll demo</p>
          <h1>
            Build donation flows that feel premium — with on-scroll stories that earn trust.
          </h1>
          <p className="lede">
            A compact, Stripe-like landing that highlights narrative sequencing, soft gradients, and
            animated reveals without extra dependencies.
          </p>
          <div className="cta">
            <button className="btn btn-primary">View demo</button>
            <button className="btn btn-ghost">See motion specs</button>
          </div>
          <div className="hero__metrics">
            <div className="metric">
              <span className="metric__value">98%</span>
              <span className="metric__label">checkout completion in tests</span>
            </div>
            <div className="metric">
              <span className="metric__value"><span className="mono">TTV</span> 1wk</span>
              <span className="metric__label">time-to-validate designs</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="glass card">
            <div className="card__header">Live preview</div>
            <div className="card__body">
              <div className="pill">On-scroll choreography</div>
              <div className="stack">
                <div className="stack__item">Adaptive hero</div>
                <div className="stack__item">Social proof</div>
                <div className="stack__item">Narrative cards</div>
              </div>
              <div className="progress">
                <span className="progress__dot" />
                <span className="progress__dot" />
                <span className="progress__dot progress__dot--active" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <Reveal className="trusted">
        <p className="eyebrow">Trusted layouts</p>
        <div className="trusted__logos">
          {featuredLogos.map((name) => (
            <span key={name} className="chip">
              {name}
            </span>
          ))}
        </div>
      </Reveal>

      <section className="panels">
        {featureCards.map((item, idx) => (
          <Reveal key={item.title} className="panel" style={{ '--reveal-index': idx }}>
            <p className="eyebrow">{item.title}</p>
            <p className="panel__body">{item.body}</p>
          </Reveal>
        ))}
      </section>

      <section className="story">
        <div className="story__sticky">
          <p className="eyebrow">Narrative arc</p>
          <h2>Stripe-like sequencing</h2>
          <p className="lede">
            Sticky left rail stays in view while cards on the right animate in. Use this pattern to
            stage benefit proof-points as users scroll.
          </p>
        </div>
        <div className="story__steps">
          {storyMoments.map((moment, idx) => (
            <Reveal key={moment.label} className="story__card" style={{ '--reveal-index': idx }}>
              <span className="pill pill--muted">{moment.label}</span>
              <h3>{moment.heading}</h3>
              <p>{moment.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="cta-final">
        <div className="cta-final__content">
          <h2>Ready to remix this?</h2>
          <p>
            Swap copy, colors, and spacing to match your brand. The reveal patterns and layout grid
            handle the rest.
          </p>
          <div className="cta">
            <button className="btn btn-primary">Clone the demo</button>
            <button className="btn btn-ghost">Motion guidelines</button>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default App
