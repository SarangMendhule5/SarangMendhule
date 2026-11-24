import { useState } from 'react'
import Section from './Section'
import TiltCard from './TiltCard'
import { profile } from '../data/profile'

export default function Contact() {
  const [sent, setSent] = useState(false)
  // No backend: the form opens the visitor's email app with the message pre-filled.
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = `${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio enquiry from ' + f.get('name'))}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (
    <Section id="contact" index="06" kicker="Contact" title="Let’s Build Something Together">
      <div className="about">
        <div className="reveal">
          <p className="lead">Have an opportunity or exciting project in mind? Let’s connect and create something amazing.</p>
          <ul className="links">
            <li><a href={`mailto:${profile.email}`}>✉ {profile.email}</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">in LinkedIn</a></li>
            {profile.github && <li><a href={profile.github} target="_blank" rel="noopener noreferrer">⌥ GitHub</a></li>}
          </ul>
        </div>
        <TiltCard>
          <form onSubmit={submit}>
            <label>Name<input name="name" required autoComplete="name" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            <label>Message<textarea name="message" rows="4" required /></label>
            <button className="btn primary" type="submit">Send Message</button>
            {sent && <p className="muted" role="status">Your email app should open with the message ready to send.</p>}
          </form>
        </TiltCard>
      </div>
    </Section>
  )
}
