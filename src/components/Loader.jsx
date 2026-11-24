import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Loader({ onStart }) {
  const el = useRef(null)
  const [pct, setPct] = useState(0)
  const [gone, setGone] = useState(false)
  useEffect(() => {
    const o = { v: 0 }
    const tl = gsap.timeline({ onComplete: () => setGone(true) })
    tl.to(o, { v: 100, duration: 1.5, ease: 'power1.inOut', onUpdate: () => setPct(Math.round(o.v)) })
      .add(onStart)
      .to(el.current, { yPercent: -100, duration: 0.7, ease: 'power3.inOut' })
    return () => tl.kill()
  }, [onStart])
  if (gone) return null
  return (
    <div className="loader" ref={el} role="status" aria-label="Loading">
      <div className="loader-box">
        <span className="mono">&lt;SM /&gt;</span>
        <div className="bar"><i style={{ width: pct + '%' }} /></div>
        <b className="mono">{pct}%</b>
      </div>
    </div>
  )
}
