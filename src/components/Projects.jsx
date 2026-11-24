import Section from './Section'
import TiltCard from './TiltCard'
import ProjectModel from './ProjectModel'
import { projects } from '../data/profile'

export default function Projects() {
  return (
    <Section id="projects" index="03" kicker="Projects" title="Things I’ve Built">
      <div className="grid-2">
        {projects.map((p, i) => (
          <TiltCard key={p.id} delay={i}>
            <ProjectModel kind={p.model} />
            <h3>{p.title}</h3>
            <p className="grad">{p.subtitle}</p>
            <ul className="chips">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
            <ul className="points">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
            {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">GitHub</a>}
          </TiltCard>
        ))}
      </div>
    </Section>
  )
}
