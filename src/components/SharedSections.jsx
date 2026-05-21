import { Link } from 'react-router-dom'
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

export function ProjectsSection() {
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
