import TiltCard from './TiltCard'

export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      <span className="tl-line" />
      {items.map((it) => (
        <li key={it.title} className="tl-item">
          <i className="node" />
          <TiltCard>
            <p className="date mono">{it.date}</p>
            <h3>{it.title}</h3>
            <p className="muted">{it.org}</p>
            {it.points.length > 0 && <ul>{it.points.map((p) => <li key={p}>{p}</li>)}</ul>}
          </TiltCard>
        </li>
      ))}
    </ol>
  )
}
