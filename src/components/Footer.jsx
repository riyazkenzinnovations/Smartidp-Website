import React from 'react'
import brandLogo from '../assets/logo1.png'
import { ShieldCheck, ArrowUpRight, Globe, Lock } from 'lucide-react'

export default function Footer({ onOpenDemoModal }) {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <a href="#" className="inline-block py-1">
              <img 
                src={brandLogo} 
                alt="SmartiDP EDMS — Kenz Innovations" 
                className="h-10 w-auto object-contain" 
              />
            </a>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              The intelligent platform for enterprise documents. Capture, manage, automate, secure, and govern every document across your enterprise on one AI-powered, compliance-ready platform.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              KENZ INNOVATIONS · EDMS DIVISION
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#14532D]">
              <ShieldCheck className="h-4 w-4" />
              <span>Certified Controls for Regulated Industries</span>
            </div>
          </div>

          {/* Column 1: Capabilities */}
          <div>
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">
              Capability Domains
            </div>
            <ul className="space-y-2.5">
              <li><a href="#features" className="hover:text-[#14532D] transition-colors">Intelligent Capture & OCR</a></li>
              <li><a href="#features" className="hover:text-[#14532D] transition-colors">Version & Document Control</a></li>
              <li><a href="#features" className="hover:text-[#14532D] transition-colors">Visual Workflow Automation</a></li>
              <li><a href="#features" className="hover:text-[#14532D] transition-colors">Electronic Signatures</a></li>
              <li><a href="#features" className="hover:text-[#14532D] transition-colors">Controlled Distribution</a></li>
              <li><a href="#features" className="hover:text-[#14532D] transition-colors">Records Retention (ISO 15489)</a></li>
              <li><a href="#features" className="hover:text-[#14532D] transition-colors">Enterprise Semantic Search</a></li>
              <li><a href="#features" className="hover:text-[#14532D] transition-colors">Immutable Audit Trail</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">
              Industry Solutions
            </div>
            <ul className="space-y-2.5">
              <li><a href="#solutions" className="hover:text-[#14532D] transition-colors">Pharmaceuticals & Biotech</a></li>
              <li><a href="#solutions" className="hover:text-[#14532D] transition-colors">Medical Devices (ISO 13485)</a></li>
              <li><a href="#solutions" className="hover:text-[#14532D] transition-colors">Healthcare & Clinical</a></li>
              <li><a href="#solutions" className="hover:text-[#14532D] transition-colors">Banking & BFSI</a></li>
              <li><a href="#solutions" className="hover:text-[#14532D] transition-colors">Government & Public Sector</a></li>
              <li><a href="#solutions" className="hover:text-[#14532D] transition-colors">Manufacturing & Energy</a></li>
              <li><a href="#solutions" className="hover:text-[#14532D] transition-colors">Contract Lifecycle (CLM)</a></li>
              <li><a href="#solutions" className="hover:text-[#14532D] transition-colors">Accounts Payable Automation</a></li>
            </ul>
          </div>

          {/* Column 3: Compliance & Trust */}
          <div>
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">
              Compliance & Specs
            </div>
            <ul className="space-y-2.5">
              <li><a href="#compliance" className="hover:text-[#14532D] transition-colors">FDA 21 CFR Part 11</a></li>
              <li><a href="#compliance" className="hover:text-[#14532D] transition-colors">EU GMP Annex 11</a></li>
              <li><a href="#compliance" className="hover:text-[#14532D] transition-colors">ISO 9001 / ISO 13485</a></li>
              <li><a href="#compliance" className="hover:text-[#14532D] transition-colors">ISO/IEC 27001 Security</a></li>
              <li><a href="#compliance" className="hover:text-[#14532D] transition-colors">GDPR & HIPAA Controls</a></li>
              <li><a href="#compliance" className="hover:text-[#14532D] transition-colors">Validation Accelerator Pack</a></li>
              <li><a href="#why-choose" className="hover:text-[#14532D] transition-colors">Implementation Roadmap</a></li>
              <li><button onClick={onOpenDemoModal} className="text-[#14532D] font-bold hover:underline cursor-pointer">Request Demo</button></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box from Brochure Page 20 */}
        <div className="p-4 rounded-xl bg-[#F5F7F5] border border-slate-200 text-[11px] text-slate-500 leading-relaxed mb-8">
          <p>
            <strong>Regulatory Disclaimer:</strong> Compliance with regulations is a shared responsibility; the SmartiDP EDMS platform provides technical controls, validation packages, and immutable audit trails, while customer organizations maintain standard operating procedures, role training, configuration governance, and performance qualification. Product interfaces depicted are illustrative.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 Kenz Innovations. All rights reserved. SmartiDP EDMS is a proprietary solution of Kenz Innovations.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.smartidp.ai" target="_blank" rel="noopener noreferrer" className="hover:text-[#14532D] transition-colors">
              www.smartidp.ai
            </a>
            <a href="#" className="hover:text-[#14532D] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#14532D] transition-colors">Security Whitepaper</a>
            <a href="#" className="hover:text-[#14532D] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

