import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <nav id="mainNavbar" className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">ARCWELL</span>
          <small>ARCHITECTURE</small>
        </Link>
        <button className="nav-toggle" type="button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-menu ${open ? 'is-open' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/architecture" onClick={closeMenu}>Architecture</NavLink>
          <NavLink to="/interior" onClick={closeMenu}>Interior</NavLink>
          <NavLink to="/construction" onClick={closeMenu}>Construction</NavLink>
          <div className="dropdown">
            <NavLink to="/about">About</NavLink>
            <div className="dropdown-menu">
              <NavLink to="/team" onClick={closeMenu}>Team</NavLink>
              <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
              <NavLink to="/news-media" onClick={closeMenu}>Media</NavLink>
              <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
            </div>
          </div>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
