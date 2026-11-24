export default function Section({ id, index, kicker, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={id + '-t'}>
      <div className="wrap">
        <header className="reveal sec-head">
          <span className="kicker mono">{index} / {kicker}</span>
          <h2 id={id + '-t'}>{title}</h2>
        </header>
        {children}
      </div>
    </section>
  )
}
