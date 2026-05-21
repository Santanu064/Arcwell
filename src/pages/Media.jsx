import { useState } from 'react'
import { Link } from 'react-router-dom'
import VisualBlock from '../components/VisualBlock'

const filters = [
  ['videos', 'Videos'],
  ['reels', 'Reels'],
  ['ongoing-constraction', 'Ongoing Construction'],
]

const mediaItems = [
  { type: 'videos', title: 'video 1', video: 'https://www.youtube.com/embed/KCZE0XdOwp4?si=6lcUIoaPRzItabng' },
  { type: 'reels', title: 'reels 1', video: 'https://www.youtube.com/embed/N1eQR7ZmmVU' },
  { type: 'ongoing-constraction', title: 'ongoing', tone: 'media-a' },
]

export default function Media() {
  const [filter, setFilter] = useState('videos')
  const filteredItems = mediaItems.filter((item) => item.type === filter)

  return (
    <section className="media-page py-page">
      <div className="container">
        <div className="media-filters">
          {filters.map(([value, label]) => (
            <button
              className={`filter-btn ${filter === value ? 'active' : ''}`}
              key={value}
              type="button"
              onClick={() => setFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="media-content">
          {filteredItems.map((item) => (
            <article className="media-card" key={item.title}>
              {item.video ? (
                <div className="video-box">
                  <iframe src={item.video} title={item.title} allow="autoplay; encrypted-media" allowFullScreen />
                </div>
              ) : (
                <div className="project-card">
                  <VisualBlock tone={item.tone} label={item.title} />
                  <div className="project-content">
                    <h5>{item.title}</h5>
                    <Link to="/ongoing" className="project-btn">View Details →</Link>
                  </div>
                </div>
              )}
              <h5>{item.title}</h5>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
