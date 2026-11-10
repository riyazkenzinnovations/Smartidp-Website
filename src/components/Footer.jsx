import React from 'react'
import { Link } from 'react-router-dom'
import brandLogo from '../assets/logo1.png'
import { ShieldCheck, ArrowUpRight, Globe, Lock, ExternalLink } from 'lucide-react'

export default function Footer({ onOpenDemoModal }) {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-700">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          
          {/* Brand Info (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block py-1">
              <img 
                src={brandLogo} 
                alt="SmartiDP EDMS — Kenz Innovations" 
                className="h-11 sm:h-12 w-auto object-contain" 
              />
            </Link>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md">
              The intelligent platform for enterprise documents. Capture, manage, automate, secure, and govern every document across your enterprise on one AI-powered, compliance-ready platform.
            </p>
            
            <div className="pt-1 text-xs text-slate-500 font-mono font-medium">
              KENZ INNOVATIONS · SMARTIDP EDMS 2026
            </div>
            
            <div className="flex items-center gap-2 text-sm font-semibold text-[#14532D]">
              <ShieldCheck className="h-5 w-5 text-[#14532D] shrink-0" />
              <span>Certified Technical Controls for Regulated Industries</span>
            </div>
          </div>

          {/* Column 1: Capabilities */}
          <div>
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">
              Capability Domains
            </div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Intelligent Capture & OCR</Link></li>
              <li><Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Version & Document Control</Link></li>
              <li><Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Visual Workflow Automation</Link></li>
              <li><Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Electronic Signatures</Link></li>
              <li><Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Controlled Distribution</Link></li>
              <li><Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Records Retention (ISO 15489)</Link></li>
              <li><Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Enterprise Semantic Search</Link></li>
              <li><Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Immutable Audit Trail</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">
              Industry Solutions
            </div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Pharmaceuticals & Biotech</Link></li>
              <li><Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Medical Devices (ISO 13485)</Link></li>
              <li><Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Healthcare & Clinical</Link></li>
              <li><Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Banking & BFSI</Link></li>
              <li><Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Government & Public Sector</Link></li>
              <li><Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Manufacturing & Energy</Link></li>
              <li><Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Contract Lifecycle (CLM)</Link></li>
              <li><Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Accounts Payable Automation</Link></li>
            </ul>
          </div>

          {/* Column 3: Compliance & Specs */}
          <div>
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">
              Compliance & Specs
            </div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/compliance" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">FDA 21 CFR Part 11</Link></li>
              <li><Link to="/compliance" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">EU GMP Annex 11</Link></li>
              <li><Link to="/compliance" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">ISO 9001 / ISO 13485</Link></li>
              <li><Link to="/compliance" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">ISO/IEC 27001 Security</Link></li>
              <li><Link to="/compliance" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">GDPR & HIPAA Controls</Link></li>
              <li><Link to="/compliance" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Validation Accelerator Pack</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">Implementation Roadmap</Link></li>
              <li>
                <a 
                  href="https://edms.smartidp.ai/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#14532D] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Client Portal Login</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-5 rounded-2xl bg-[#F5F7F5] border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
          <p>
            <strong className="text-slate-800">Regulatory Disclaimer:</strong> Compliance with regulations is a shared responsibility; the SmartiDP EDMS platform provides technical controls, validation packages, and immutable audit trails, while customer organizations maintain standard operating procedures, role training, configuration governance, and performance qualification. Product interfaces depicted are illustrative.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-xs sm:text-sm">
          <div>
            © 2026 Kenz Innovations. All rights reserved. SmartiDP EDMS is a proprietary solution of Kenz Innovations.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 font-medium">
            <a 
              href="https://edms.smartidp.ai/login" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#14532D] font-semibold hover:underline transition-colors"
            >
              Client Portal Login
            </a>
            <Link to="/about" className="hover:text-[#14532D] transition-colors">About Us</Link>
            <Link to="/compliance" className="hover:text-[#14532D] transition-colors">Security & Whitepaper</Link>
            <Link to="/contact" className="hover:text-[#14532D] transition-colors">Support & Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
