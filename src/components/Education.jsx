import Section from './Section'
import Timeline from './Timeline'
import { education } from '../data/profile'

export default function Education() {
  return <Section id="education" index="05" kicker="Education" title="Academic Background"><Timeline items={education} /></Section>
}
