import React from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import App from './App.jsx'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)
window.addEventListener('load', () => ScrollTrigger.refresh())
createRoot(document.getElementById('root')).render(<App />)
