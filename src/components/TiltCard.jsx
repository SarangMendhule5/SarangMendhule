import { useRef } from 'react'

// Glass card that tilts in 3D toward the pointer.
export default function TiltCard({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(8px)`
    ref.current.style.setProperty('--gx', `${(x + 0.5) * 100}%`)
    ref.current.style.setProperty('--gy', `${(y + 0.5) * 100}%`)
  }
  return (
    <div className="reveal">
      <div ref={ref} className={`glass tilt ${className}`} style={{ '--d': delay }} onPointerMove={move} onPointerLeave={() => (ref.current.style.transform = '')}>
        {children}
      </div>
    </div>
  )
}
