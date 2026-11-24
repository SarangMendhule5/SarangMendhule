import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Section from './Section'
import TiltCard from './TiltCard'
import { profile, skills, projects } from '../data/profile'

function Stat({ value, label }) {
  const ref = useRef(null)
  useEffect(() => {
    const o = { n: 0 }
    const t = gsap.to(o, { n: value, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 92%', once: true }, onUpdate: () => (ref.current.textContent = Math.round(o.n)) })
    return () => { t.scrollTrigger && t.scrollTrigger.kill(); t.kill() }
  }, [value])
  return <div className="stat"><b ref={ref}>0</b><span>{label}</span></div>
}

function Illustration() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="Developer laptop illustration" className="illo">
      <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stopColor="#22d3ee" /><stop offset="1" stopColor="#8b5cf6" /></linearGradient></defs>
      <ellipse cx="160" cy="110" rx="140" ry="60" fill="none" stroke="url(#g)" strokeOpacity=".35" strokeDasharray="4 8" />
      <rect x="80" y="40" width="160" height="106" rx="10" fill="#0a1228" stroke="url(#g)" strokeWidth="2" />
      <path d="M130 70 112 93l18 23M190 70l18 23-18 23" fill="none" stroke="url(#g)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M170 66 150 120" stroke="#e6edf7" strokeWidth="4" strokeLinecap="round" />
      <path d="M60 154h200l-18 20H78z" fill="#0f1b3d" stroke="url(#g)" />
      <circle cx="58" cy="60" r="6" fill="#22d3ee" /><circle cx="270" cy="150" r="5" fill="#8b5cf6" /><circle cx="262" cy="52" r="4" fill="#3b82f6" />
    </svg>
  )
}

export default function About() {
  const techCount = skills.reduce((n, g) => n + g.items.length, 0)
  return (
    <Section id="about" index="01" kicker="About" title="Beyond the Code">
      <div className="about">
        <div>
          <p className="lead reveal">{profile.about}</p>
          <div className="stats reveal">
            <Stat value={2026} label="Graduation year" />
            <Stat value={projects.length} label="Featured projects" />
            <Stat value={techCount} label="Technologies" />
          </div>
          <div className="reveal"><Illustration /></div>
        </div>
        <TiltCard className="profile">
          <div className="avatar" aria-hidden="true">SM</div>
          <h3>{profile.name}</h3>
          <p className="grad">{profile.role}</p>
          <dl>
            <dt>Degree</dt><dd>B.Tech, Computer Engineering</dd>
            <dt>University</dt><dd>RTM Nagpur University</dd>
            <dt>Graduating</dt><dd>2026</dd>
            <dt>Location</dt><dd>{profile.location}</dd>
          </dl>
        </TiltCard>
      </div>
    </Section>
  )
}
