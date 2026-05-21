import { useEffect, useState } from 'react'
import { heroSlides } from '../data/siteData'

export default function HeroCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

  const next = () => setActive((current) => (current + 1) % heroSlides.length)
  const previous = () => setActive((current) => (current - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section className="hero-carousel" aria-label="Featured projects slideshow">
      {heroSlides.map((slide, index) => (
        <div className={`hero-slide ${slide.tone} ${index === active ? 'active' : ''}`} key={slide.title}>
          <div className="hero-shade" />
          <div className="carousel-caption">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      ))}
      <button className="carousel-control prev" type="button" aria-label="Previous slide" onClick={previous}>‹</button>
      <button className="carousel-control next" type="button" aria-label="Next slide" onClick={next}>›</button>
      <div className="carousel-indicators">
        {heroSlides.map((slide, index) => (
          <button
            className={index === active ? 'active' : ''}
            key={slide.title}
            type="button"
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  )
}
