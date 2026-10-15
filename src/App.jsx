import { useState, useEffect } from 'react'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Prices from './pages/Prices.jsx'
import Visit from './pages/Visit.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/prices', label: 'Prices' },
  { to: '/visit', label: 'Visit' },
]

export default function App() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <header className="site-header">
        <div className="wrap bar">
          <NavLink to="/" className="logo">Grain &amp; Light</NavLink>
          <button className="menu-btn" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Menu'}
          </button>
          <nav className={open ? 'open' : ''} aria-label="Main">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end>{l.label}</NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="wrap">Grain &amp; Light darkroom. Every roll is hand-developed.</div>
      </footer>
    </>
  )
}
