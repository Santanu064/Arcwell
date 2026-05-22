import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects, reviews } from '../data/siteData'
import VisualBlock from './VisualBlock'

export function SectionIntro({ title, children, className = '' }) {
  return (
    <section className={`re-desc container ${className}`}>
      <h3 className="home-titleheader">{title}</h3>
      <div className="lead custom-lead text-center">{children}</div>
    </section>
  )
}

export function CardGrid({ items }) {
  return (
    <div className="custom-cardgroup">
      {items.map(([title, tone]) => (
        <article className="custom-card" key={title}>
          <VisualBlock tone={tone} label={title} />
          <div className="card-body">
            <h5 className="cus-cardtitle">{title}</h5>
          </div>
        </article>
      ))}
    </div>
  )
}

export function ContactStrip() {
  return (
    <section className="cont-wraper">
      <p>Let's build your dream with ARCWELL</p>
      <Link to="/contact" className="btn">contact us <span>→</span></Link>
    </section>
  )
}

export function ProjectsSection({ animated = false }) {
  const rootRef = useRef(null)
  const cardsRef = useRef([])
  const projectsPreview = projects.slice(0, 4)

  useEffect(() => {
    if (!animated) return undefined

    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia()

    mm.add('(min-width: 992px)', () => {
      const cards = cardsRef.current.filter(Boolean)
      if (!rootRef.current || !cards.length) return

      gsap.set(cards, {
        yPercent: (index) => (index === 0 ? 0 : 110),
        scale: 1,
        filter: 'brightness(1)',
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: `+=${cards.length * 420}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      cards.forEach((card, index) => {
        tl.to(card, { yPercent: 0, duration: 1, ease: 'none' }, index === 0 ? 0 : `+=${index === 1 ? 0.25 : 0.4}`)
        if (index > 0) {
          tl.to(
            cards[index - 1],
            { scale: 0.96, filter: 'brightness(0.8)', duration: 1, ease: 'none' },
            '<'
          )
        }
      })
    })

    return () => {
      mm.revert()
    }
  }, [animated])

  if (!animated) {
    return (
      <section className="pro-cardwrepper container">
        <h3 className="home-titleheader">Our Projects</h3>
        <div className="project-grid">
          {projects.map((project) => (
            <Link className="project-card" to={`/architectural-projects/${project.slug}`} key={project.slug}>
              <VisualBlock tone={project.tone} label={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.status}</p>
                <span>Read More</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="pro-cardwrepper container project-scroll-section">
      <h3 className="home-titleheader">Our Projects</h3>
      <div className="project-scroll-shell" ref={rootRef}>
        {projectsPreview.map((project, index) => (
          <Link
            className={`project-scroll-card card-tone-${index + 1}`}
            to={`/architectural-projects/${project.slug}`}
            key={project.slug}
            ref={(node) => {
              cardsRef.current[index] = node
            }}
          >
            <div className="project-scroll-media">
              <VisualBlock tone={project.tone} label={project.title} />
            </div>
            <div className="project-scroll-content">
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="project-scroll-meta">
                <span>{project.status}</span>
              </div>
              <strong>Read Project →</strong>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="clientreview-wrapper">
      <div className="testimonial-track">
        {reviews.map(([name, quote]) => (
          <article className="testimonial-card" key={name}>
            <div className="client-img">{name.slice(0, 1)}</div>
            <p>"{quote}"</p>
            <h4>{name}</h4>
          </article>
        ))}
      </div>
    </section>
  )
}
