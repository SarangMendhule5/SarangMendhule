import { useRef, useState } from 'react'
import useReveal from './hooks/useReveal'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import { profile } from './data/profile'

export default function App() {
  const [ready, setReady] = useState(false)
  const root = useRef(null)
  useReveal(root)
  return (
    <>
      <Loader onStart={() => setReady(true)} />
      <Cursor />
      <Navbar />
      <div ref={root}>
        <main>
          <Hero ready={ready} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <footer className="footer">© 2026 {profile.name}. Built with React, Three.js and GSAP.</footer>
      </div>
    </>
  )
}
