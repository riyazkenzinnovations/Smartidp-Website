import React, { useState } from 'react'
import brandLogo from '../assets/logo1.png'
import { ArrowRight, Menu, X } from 'lucide-react'

export default function Navbar({ onOpenDemoModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center group py-2">
          <img 
            src={brandLogo} 
            alt="SmartIDP — Intelligent Document AI" 
            className="h-10 sm:h-11 w-auto object-contain group-hover:opacity-95 transition-opacity" 
          />
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Platform</a>
          <a href="#interactive-demo" className="hover:text-white transition-colors flex items-center gap-1.5">
            Live Demo
            <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30">Interactive</span>
          </a>
          <a href="#pipeline" className="hover:text-white transition-colors">Architecture</a>
          <a href="#api" className="hover:text-white transition-colors">API & SDK</a>
          <a href="#integrations" className="hover:text-white transition-colors">Integrations</a>
          <a href="#calculator" className="hover:text-white transition-colors">ROI Calculator</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={onOpenDemoModal}
            className="text-sm font-medium px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all cursor-pointer"
          >
            Sign In
          </button>
          <button 
            onClick={onOpenDemoModal}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 border border-indigo-400/20 cursor-pointer"
          >
            <span>Book a Demo</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-5 space-y-4">
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium"
          >
            Platform
          </a>
          <a 
            href="#interactive-demo" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium"
          >
            Live Demo
          </a>
          <a 
            href="#pipeline" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium"
          >
            Architecture
          </a>
          <a 
            href="#api" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium"
          >
            API & SDK
          </a>
          <a 
            href="#integrations" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium"
          >
            Integrations
          </a>
          <a 
            href="#calculator" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium"
          >
            ROI Calculator
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-white font-medium"
          >
            Pricing
          </a>
          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemoModal(); }}
              className="w-full text-center py-2.5 text-slate-300 hover:bg-slate-800 rounded-lg text-sm font-medium cursor-pointer"
            >
              Sign In
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemoModal(); }}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium cursor-pointer"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
