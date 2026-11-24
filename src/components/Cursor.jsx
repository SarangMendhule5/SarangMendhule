import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const dx = gsap.quickTo(dot.current, 'x', { duration: 0.05 }), dy = gsap.quickTo(dot.current, 'y', { duration: 0.05 })
    const rx = gsap.quickTo(ring.current, 'x', { duration: 0.35 }), ry = gsap.quickTo(ring.current, 'y', { duration: 0.35 })
    const move = (e) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY) }
    const over = (e) => ring.current.classList.toggle('hot', !!e.target.closest('a,button,.tilt,input,textarea'))
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerover', over) }
  }, [])
  return (<><div className="cursor dot" ref={dot} /><div className="cursor ring" ref={ring} /></>)
}
