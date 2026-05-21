import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section className="contact-page container">
      <div className="contact-details">
        <h3>Get in touch</h3>
        <p>Ar. Pranshav Singh</p>
        <a href="mailto:pranshav@arcwell.in">pranshav@arcwell.in</a>
        <a href="tel:+918802544022">+91 8802544022</a>
        <p>1st Floor, Renu Bhaban, Rajarhat, Newtown, Kolkata WB- 700136</p>
      </div>
      <form className="contact-form" onSubmit={(event) => {
        event.preventDefault()
        setSent(true)
        event.currentTarget.reset()
      }}>
        <label>Name*<input placeholder="Your name" required /></label>
        <label>Last name<input placeholder="Your last name" /></label>
        <label>Your email*<input type="email" placeholder="Your email address" required /></label>
        <label>Message*<textarea rows="6" required /></label>
        <button type="submit">Submit</button>
        {sent && <p className="form-success">Thanks. Your message has been saved locally for this demo.</p>}
      </form>
    </section>
  )
}
