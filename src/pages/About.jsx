const stats = [
  ['🏗️', '27', 'Projects Completed'],
  ['🌍', '180000', 'Total Sqft Completed'],
  ['😊', '59', 'Happy Clients'],
  ['📅', '4', 'Years of Experience'],
]

const reasons = [
  ['✔ Client-Centric Approach', 'We prioritize your vision, ensuring every project reflects your needs, lifestyle, and aspirations.'],
  ['✔ End-to-End Solutions', 'From concept design to execution and post-project support, we handle everything seamlessly.'],
  ['✔ Quality & Precision', 'We maintain the highest standards in planning, materials, and construction practices.'],
  ['✔ Experienced Team', 'Our experts bring years of industry experience to deliver reliable and innovative results.'],
]

const process = [
  ['01', 'Consultation', 'We understand your requirements, budget, and vision to create a solid foundation.'],
  ['02', 'Planning & Design', 'Detailed layouts, 3D concepts, and technical planning ensure clarity before execution.'],
  ['03', 'Execution', 'Our team supervises every step to ensure quality construction and timely delivery.'],
  ['04', 'Handover & Support', 'We provide post-completion support to ensure long-term satisfaction.'],
]

const industries = ['Residential Projects', 'Commercial Buildings', 'Retail Spaces', 'Hospitality & Hotels', 'Institutional Buildings', 'Renovation & Redevelopment']

export default function About() {
  return (
    <>
      <section className="fv-stats-section">
        <div className="fv-container">
          <div className="fv-heading">
            <h2 className="home-titleheader">Our Achievements</h2>
            <p className="custom-lead text-center">Delivering trust, scale, and excellence through every project we build.</p>
          </div>
          <div className="fv-stats-grid">
            {stats.map(([icon, number, label]) => (
              <div className="fv-stat" key={label}>
                <div className="fv-icon">{icon}</div>
                <h3 className="fv-counter">{number}</h3>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="about-page">
        <section className="why-us">
          <div className="container">
            <h2 className="home-titleheader">Why Choose Arcwell Architecture</h2>
            <p className="custom-lead text-center">We combine innovation, precision, and client-focused design to deliver exceptional architectural solutions.</p>
            <div className="why-grid">
              {reasons.map(([title, text]) => (
                <div key={title}>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <h2 className="home-titleheader">Our Process</h2>
            <div className="process-grid">
              {process.map(([step, title, text]) => (
                <div key={title}>
                  <h4 data-step={step}>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="industries">
          <div className="container">
            <h2 className="home-titleheader">Industries We Serve</h2>
            <ul className="industry-list">
              {industries.map((industry) => <li key={industry}>{industry}</li>)}
            </ul>
          </div>
        </section>

        <section className="commitment">
          <div className="container">
            <h2 className="home-titleheader">Our Commitment</h2>
            <p>
              At Arcwell Architecture, we are committed to delivering designs that balance functionality,
              aesthetics, and sustainability. Our goal is not just to build structures, but to create
              environments that inspire and endure.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
