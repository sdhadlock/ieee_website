import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/eboard', label: 'E-Board' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-ieee-teal' : 'text-ieee-navy hover:text-ieee-teal'
    }`

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-ieee-border shadow-ieee-card">
      <div className="max-w-6xl mx-auto pl-1 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={`${import.meta.env.BASE_URL}logos/ieee-blue-text-logo.png`}
              alt="IEEE at Cornell"
              className="h-10"
            />
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
              className="text-sm font-medium px-4 py-1.5 rounded-md bg-ieee-teal text-white hover:bg-ieee-dark transition-all duration-200"
            >
              Join Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-ieee-navy hover:text-ieee-teal focus:outline-none"
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
        <div className="md:hidden border-t border-ieee-border bg-white px-4 pb-4 pt-2 flex flex-col gap-3">
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
            className="text-sm font-medium text-ieee-teal"
            onClick={() => setOpen(false)}
          >
            Join Us →
          </a>
        </div>
      )}
    </nav>
  )
}
