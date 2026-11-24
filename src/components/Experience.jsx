import Section from './Section'
import Timeline from './Timeline'
import { experience } from '../data/profile'

export default function Experience() {
  return <Section id="experience" index="04" kicker="Experience" title="My Journey"><Timeline items={experience} /></Section>
}
