import { useState } from 'react'
import { detailedServices, serviceCards } from '../data/siteData'
import VisualBlock from '../components/VisualBlock'

export default function Services() {
  const [activeService, setActiveService] = useState(null)

  return (
    <section className="services-page py-page">
      <div className="container">
        <div className="service-title-block">
          <h2>Our Services</h2>
          <p>
            Our architectural services are tailored to meet client needs, ensuring every aspect of your project meets the highest standards. From meticulous planning and detailed modeling, manage materials and logistics efficiently to conduct checklist reviews, and offer comprehensive after-support services to ensure satisfaction and longevity of our collaboration.
          </p>
        </div>

        <div className="custom-cardgroup service-modal-grid">
          {detailedServices.map((service) => (
            <article className="custom-card sr hr-role-box" key={service.title}>
              <VisualBlock tone={service.tone} label={service.label} />
              <div className="card-body skp">
                <h5 className="cus-cardtitle">{service.label}</h5>
                <button type="button" className="service-btn" onClick={() => setActiveService(service)}>Click Here</button>
              </div>
            </article>
          ))}
        </div>

        <div className="service-card-grid">
          {serviceCards.map(([title, text, icon]) => (
            <article className="service-card hr-role-box" key={title}>
              <div className="service-icon">{icon}</div>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      {activeService && (
        <div className="service-modal is-visible" role="dialog" aria-modal="true">
          <div className="modal-content">
            <button className="close-btn" type="button" aria-label="Close service details" onClick={() => setActiveService(null)}>×</button>
            <div className="modal-body">
              <VisualBlock tone={activeService.tone} label={activeService.title} />
              <div>
                <h3>{activeService.title}</h3>
                <p>{activeService.subtitle}</p>
                <ul>
                  {activeService.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
