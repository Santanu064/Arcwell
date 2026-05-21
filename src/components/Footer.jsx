import { useState } from 'react'
import { Link } from 'react-router-dom'

function ReviewForm() {
  const [sent, setSent] = useState(false)

  return (
    <form className="review-form" onSubmit={(event) => {
      event.preventDefault()
      setSent(true)
      event.currentTarget.reset()
    }}>
      <h5>Review Us</h5>
      <input name="name" placeholder="Your name" required />
      <textarea name="review" rows="3" placeholder="Your Review" maxLength="200" required />
      <button type="submit">Post Review</button>
      {sent && <small>Thank you, your review has been recorded locally.</small>}
    </form>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logo">ARCWELL ARCHITECTURE</div>
          <h5>About Us</h5>
          <p>Arcwell Architecture is one stop solution for all your concerns. Wellbeing and wellness for all are our main goals.</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">t</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Facebook">f</a>
          </div>
        </div>
        <div className="quick-links">
          <h5>Quick Links</h5>
          <Link to="/architecture">Architecture</Link>
          <Link to="/interior">Interior</Link>
          <Link to="/construction">Construction</Link>
          <Link to="/services">Service</Link>
          <Link to="/news-media">News & Media</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h5>Contact Info</h5>
          <p>1st Floor, Renu Bhaban, Rajarhat, Newtown, Kolkata WB- 700136</p>
          <a href="tel:+918802544022">+91 8802544022</a>
          <a href="mailto:pranshav@arcwell.in">pranshav@arcwell.in</a>
          <a href="mailto:archwellarchitecture@gmail.com">archwellarchitecture@gmail.com</a>
        </div>
        <ReviewForm />
      </div>
      <div className="copyright">© 2026 Your Company. All rights reserved.</div>
    </footer>
  )
}
