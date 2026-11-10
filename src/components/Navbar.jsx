import React, { useState } from 'react'
import brandLogo from '../assets/logo1.png'
import { ArrowRight, Menu, X, ShieldCheck, Sparkles } from 'lucide-react'

export default function Navbar({ onOpenDemoModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-slate-200/80 shadow-xs">
      {/* Top Compliance Bar */}
      <div className="bg-[#14532D] text-white text-[11px] py-1 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
        <span>Built to support 21 CFR Part 11 · EU Annex 11 · ISO 9001 · ISO 13485 · ISO 27001 · GDPR · HIPAA · SOC 2</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center group py-2">
          <img 
            src={brandLogo} 
            alt="SmartiDP EDMS — Kenz Innovations" 
            className="h-10 sm:h-11 w-auto object-contain group-hover:opacity-90 transition-opacity" 
          />
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <a href="#about" className="hover:text-[#14532D] transition-colors">About</a>
          <a href="#features" className="hover:text-[#14532D] transition-colors">Features</a>
          <a href="#solutions" className="hover:text-[#14532D] transition-colors">Solutions</a>
          <a href="#how-it-works" className="hover:text-[#14532D] transition-colors">How It Works</a>
          <a href="#benefits" className="hover:text-[#14532D] transition-colors">Benefits</a>
          <a href="#compliance" className="hover:text-[#14532D] transition-colors">Compliance</a>
          <a href="#why-choose" className="hover:text-[#14532D] transition-colors">Why SmartiDP</a>
          <a href="#contact" className="hover:text-[#14532D] transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={onOpenDemoModal}
            className="text-sm font-semibold px-4 py-2 text-slate-700 hover:text-[#14532D] hover:bg-[#E8F3EC] rounded-xl transition-all cursor-pointer"
          >
            Client Portal
          </button>
          <button 
            onClick={onOpenDemoModal}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white font-semibold text-sm transition-all shadow-md shadow-emerald-950/10 hover:shadow-lg hover:shadow-emerald-950/20 cursor-pointer"
          >
            <span>Request a Demo</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
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

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-lg">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#14532D] font-medium">About SmartiDP EDMS</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#14532D] font-medium">Key Capabilities</a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#14532D] font-medium">Industry Solutions</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#14532D] font-medium">Governed Workflow</a>
          <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#14532D] font-medium">Business Value</a>
          <a href="#compliance" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#14532D] font-medium">Compliance Framework</a>
          <a href="#why-choose" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#14532D] font-medium">Why SmartiDP EDMS</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-800 hover:text-[#14532D] font-medium">Contact & Enquiries</a>
          
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenDemoModal(); }}
              className="w-full py-2.5 bg-[#14532D] hover:bg-[#064E3B] text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
            >
              Request a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
