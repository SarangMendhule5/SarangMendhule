import { useState } from 'react'

const links = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['experience', 'Journey'], ['education', 'Education'], ['contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav glass">
      <a href="#home" className="logo mono">&lt;SM /&gt;</a>
      <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
      <nav className={open ? 'open' : ''} aria-label="Primary">
        {links.map(([id, label]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
    </header>
  )
}
