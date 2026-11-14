import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import brandLogo from '../assets/logo1.png'
import { ArrowRight, Menu, X } from 'lucide-react'
import RequestDemoButton from './RequestDemoButton'

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Content Model', path: '/content-model' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Compliance', path: '/compliance' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Benefits & ROI', path: '/benefits' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

export default function Navbar({ onOpenDemoModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  // Track scroll state for shadow & border
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-xl ${
        isScrolled
          ? 'border-b border-slate-200/90 shadow-sm'
          : 'border-b border-slate-200/60 shadow-none'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center group py-2 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14532D] rounded-lg"
          aria-label="SmartiDP - Home"
        >
          <img
            src={brandLogo}
            alt="SmartiDP"
            className="h-10 sm:h-11 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary"
          className="hidden xl:flex items-center gap-1.5 sm:gap-2 text-sm font-medium text-slate-700"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => {
                if (link.path === '/') handleLogoClick()
              }}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-xl transition-all whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14532D] ${
                  isActive
                    ? 'text-[#14532D] font-semibold bg-[#F0FDF4] border border-[#14532D]/15 shadow-2xs'
                    : 'text-slate-700 hover:text-[#14532D] hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Medium-screen Navigation fallback (1024px to 1279px) */}
        <nav
          aria-label="Primary Tablet"
          className="hidden lg:flex xl:hidden items-center gap-1 text-xs font-medium text-slate-700"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => {
                if (link.path === '/') handleLogoClick()
              }}
              className={({ isActive }) =>
                `px-2.5 py-1.5 rounded-lg transition-all whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14532D] ${
                  isActive
                    ? 'text-[#14532D] font-semibold bg-[#F0FDF4] border border-[#14532D]/15 shadow-2xs'
                    : 'text-slate-700 hover:text-[#14532D] hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <RequestDemoButton 
            href="https://edms.smartidp.ai/login"
            size="md"
          />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#14532D] rounded-lg hover:bg-slate-100 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14532D]"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-2 shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'text-[#14532D] font-bold bg-[#F0FDF4] border border-[#14532D]/15'
                    : 'text-slate-800 hover:text-[#14532D] hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <RequestDemoButton
              href="https://edms.smartidp.ai/login"
              onClick={() => setMobileMenuOpen(false)}
              fullWidth
              size="lg"
            />
            <a
              href="https://edms.smartidp.ai/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-2 text-sm font-semibold text-slate-600 hover:text-[#14532D]"
            >
              Open Client Portal
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
