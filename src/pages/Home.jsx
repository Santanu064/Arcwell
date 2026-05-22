import HeroCarousel from '../components/HeroCarousel'
import { CardGrid, ContactStrip, ProjectsSection, SectionIntro, Testimonials } from '../components/SharedSections'
import { approach, services } from '../data/siteData'

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <SectionIntro title="Arcwell Architecture">
        <p>
          Arcwell Architecture is one stop solution for all your concerns. Wellbeing and wellness for all are our main goals. which we accomplish by taking a holistic approach, that involves everything from planning to completion.Our team of skilled professionals is committed to delivering exceptional workmanship on every project. With experience and a passion for excellence, we ensure that every detail is meticulously crafted to meet the highest standards of durability, functionality, and aesthetics.
        </p>
      </SectionIntro>
      <ProjectsSection animated />
      <ContactStrip />
      <SectionIntro title="Our Approch">
        <p>
          Arcwell Architecture is one stop solution for all your concerns. Wellbeing and wellness for all are our main goals. which we accomplish by taking a holistic approach, that involves everything from planning to completion.
        </p>
        <p className="pillar-copy">The four main pillars we use to transform your dream into reality</p>
        <CardGrid items={approach} />
      </SectionIntro>
      <SectionIntro title="Our Services" className="services-section">
        <p>
          Our architectural services are tailored to meet client needs, ensuring every aspect of your project meets the highest standards. From meticulous planning and detailed modeling, manage materials and logistics efficiently to conduct checklist reviews, and offer comprehensive after-support services to ensure satisfaction and longevity of our collaboration.
        </p>
        <CardGrid items={services} />
      </SectionIntro>
      <Testimonials />
      <ContactStrip />
    </>
  )
}
