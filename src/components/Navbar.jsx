import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/eboard', label: 'E-Board' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-ieee-blue' : 'text-gray-300 hover:text-white'
    }`

  return (
    <nav className="sticky top-0 z-50 bg-ieee-navy/95 backdrop-blur border-b border-ieee-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <span className="text-ieee-blue font-bold text-xl tracking-tight">IEEE</span>
            <span className="text-white font-semibold text-sm hidden sm:block">Cornell</span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={navLinkClass}>
                {label}
              </NavLink>
            ))}
            <a
              href="https://cornellieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-1.5 rounded-md bg-ieee-blue/10 border border-ieee-blue/40 text-ieee-blue hover:bg-ieee-blue hover:text-white transition-all duration-200"
            >
              Join Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-ieee-border bg-ieee-navy px-4 pb-4 pt-2 flex flex-col gap-3">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={navLinkClass}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://cornellieee.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ieee-blue"
            onClick={() => setOpen(false)}
          >
            Join Us →
          </a>
        </div>
      )}
    </nav>
  )
}
