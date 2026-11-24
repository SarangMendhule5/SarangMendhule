import Section from './Section'
import TiltCard from './TiltCard'
import { skills } from '../data/profile'

export default function Skills() {
  return (
    <Section id="skills" index="02" kicker="Skills" title="My Tech Arsenal">
      <div className="grid-4">
        {skills.map((g, i) => (
          <TiltCard key={g.group} className="float" delay={i}>
            <h3>{g.group}</h3>
            <ul className="chips">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </TiltCard>
        ))}
      </div>
    </Section>
  )
}
