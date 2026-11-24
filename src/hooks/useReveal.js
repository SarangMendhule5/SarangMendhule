import { useLayoutEffect } from 'react'
import gsap from 'gsap'

// Scroll-triggered reveals for every .reveal element and scrubbed timeline lines.
export default function useReveal(scope) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia(scope.current)
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray('.reveal').forEach((el) =>
        gsap.from(el, { y: 50, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } })
      )
      gsap.utils.toArray('.tl-line').forEach((el) =>
        gsap.fromTo(el, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top 70%', end: 'bottom 70%', scrub: true } })
      )
    })
    return () => mm.revert()
  }, [scope])
}
