import { lazy, Suspense, useEffect } from 'react'
import gsap from 'gsap'
import { profile } from '../data/profile'

const Workspace3D = lazy(() => import('./Workspace3D'))

export default function Hero({ ready }) {
  useEffect(() => {
    if (!ready || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.from('.hero-in', { y: 40, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out' })
  }, [ready])
  return (
    <section id="home" className="hero wrap">
      <div className="hero-copy">
        <p className="kicker mono hero-in">Hello, I’m</p>
        <h1 className="hero-in">SARANG<br />MENDHULE</h1>
        <p className="role grad hero-in">{profile.role}</p>
        <p className="mono sub hero-in">{profile.tagline}</p>
        <p className="lead hero-in">{profile.intro}</p>
        <div className="btns hero-in">
          <a className="btn primary" href="#projects">Explore My Projects</a>
          <a className="btn" href={profile.resume} download>Download Resume</a>
          <a className="btn ghost" href="#contact">Contact Me</a>
        </div>
      </div>
      <div className="hero-3d"><Suspense fallback={null}><Workspace3D /></Suspense></div>
    </section>
  )
}
