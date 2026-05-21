import { CardGrid, ContactStrip, ProjectsSection, SectionIntro } from '../components/SharedSections'
import { services } from '../data/siteData'

export default function ListingPage({ title, type }) {
  return (
    <>
      <section className="sub-hero">
        <h1>{title}</h1>
      </section>
      <ProjectsSection />
      <SectionIntro title={type || 'Our Services'}>
        <p>
          We use four main components to turn your dreams turn reality, from early concept to planning, supervision, material coordination, and post-support.
        </p>
        <CardGrid items={services} />
      </SectionIntro>
      <ContactStrip />
    </>
  )
}
