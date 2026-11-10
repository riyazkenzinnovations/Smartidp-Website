import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import brandLogo from '../assets/logo1.png'
import { ArrowRight, Menu, X, ShieldCheck, Sparkles } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Features', path: '/features' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Compliance', path: '/compliance' },
  { name: 'Benefits & ROI', path: '/benefits' },
  { name: 'Contact', path: '/contact' }
]

export default function Navbar({ onOpenDemoModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center group py-2 shrink-0">
          <img 
            src={brandLogo} 
            alt="SmartiDP EDMS — Kenz Innovations" 
            className="h-10 sm:h-11 w-auto object-contain group-hover:opacity-90 transition-opacity" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 sm:gap-2 text-xs font-semibold text-slate-700">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl transition-all ${
                  isActive
                    ? 'text-[#14532D] font-bold bg-[#E8F3EC]'
                    : 'text-slate-700 hover:text-[#14532D] hover:bg-[#F5F7F5]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Medium-screen Navigation fallback */}
        <nav className="hidden lg:flex xl:hidden items-center gap-1 text-xs font-semibold text-slate-700">
          {NAV_LINKS.slice(0, 6).map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-2.5 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'text-[#14532D] font-bold bg-[#E8F3EC]'
                    : 'text-slate-700 hover:text-[#14532D] hover:bg-[#F5F7F5]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-2.5 py-1.5 rounded-lg transition-all ${
                isActive
                  ? 'text-[#14532D] font-bold bg-[#E8F3EC]'
                  : 'text-slate-700 hover:text-[#14532D] hover:bg-[#F5F7F5]'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.smartidp.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-3.5 py-2 text-slate-700 hover:text-[#14532D] hover:bg-[#E8F3EC] rounded-xl transition-all"
          >
            Client Portal
          </a>
          <button 
            onClick={onOpenDemoModal}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white font-semibold text-xs shadow-md shadow-emerald-950/10 hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Request a Demo</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#14532D] rounded-lg hover:bg-[#E8F3EC] cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-2 shadow-lg">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-xl text-sm font-medium ${
                  isActive
                    ? 'text-[#14532D] font-bold bg-[#E8F3EC]'
                    : 'text-slate-800 hover:text-[#14532D] hover:bg-[#F5F7F5]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemoModal(); }}
              className="w-full py-2.5 bg-[#14532D] hover:bg-[#064E3B] text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer"
            >
              Request a Demo
            </button>
            <a
              href="https://www.smartidp.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2 text-xs font-semibold text-slate-600 hover:text-[#14532D]"
            >
              Open Client Portal
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
