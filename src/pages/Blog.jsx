import { Link } from 'react-router-dom'
import VisualBlock from '../components/VisualBlock'

export default function Blog() {
  return (
    <section className="blog-page py-page">
      <div className="container">
        <h2 className="archive-heading">Our Blog</h2>
        <div className="archive-grid">
          <article className="project-card">
            <VisualBlock tone="blog-a" label="Blog 1" />
            <div className="project-content">
              <h5>Blog 1</h5>
              <p></p>
              <Link to="/blog/test-1" className="project-btn">Read More →</Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
