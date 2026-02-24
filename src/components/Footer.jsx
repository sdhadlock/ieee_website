import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ieee-navy border-t border-ieee-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <span className="text-ieee-blue font-bold text-lg">IEEE</span>
            <span className="text-white font-semibold ml-1">Cornell Student Branch</span>
            <p className="text-gray-500 text-xs mt-1">
              Empowering engineers at Cornell University
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
            <NavLink to="/about" className="hover:text-white transition-colors">About</NavLink>
            <NavLink to="/eboard" className="hover:text-white transition-colors">E-Board</NavLink>
            <a
              href="https://ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              IEEE.org ↗
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ieee-border text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} IEEE Cornell Student Branch. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
