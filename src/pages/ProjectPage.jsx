import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { ContactStrip } from '../components/SharedSections'
import VisualBlock from '../components/VisualBlock'
import { projects } from '../data/siteData'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = useMemo(() => projects.find((item) => item.slug === slug) || projects[0], [slug])

  return (
    <>
      <section className="project-detail container">
        <h1>{project.title}</h1>
        <p>{project.text}</p>
        <p>{project.status}</p>
        <div className="detail-gallery">
          <VisualBlock tone={project.tone} label={project.title} />
          <VisualBlock tone="detail-b" label={`${project.title} second view`} />
          <VisualBlock tone="detail-c" label={`${project.title} third view`} />
        </div>
        <h3>PROJECT BRIEF:</h3>
        <p>
          PROJECT PURPOSE/FACTOR: To built a dream home that include both family and personal spaces for each individual. Where family will experience happiness and positive vibes.
        </p>
        <p>
          IMPORTANT FEATURES TO BE CONSIDER: Good views, connect with outdoor at all levels, site planning for landscape, adequate daylight and ventilation in all rooms, nice facade with balconies, and terrace seating.
        </p>
      </section>
      <ContactStrip />
    </>
  )
}
