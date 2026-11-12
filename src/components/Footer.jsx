import React from 'react'
import { Link } from 'react-router-dom'
import brandLogo from '../assets/logo1.png'
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Globe,
  ArrowUp
} from 'lucide-react'

export default function Footer({ onOpenDemoModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-slate-50/95 text-slate-700 pt-16 pb-10 border-t border-slate-200/90">
      {/* Subtle brand color accent line on top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#14532D]/30 to-transparent" />

      {/* Main Full-Width Container matching 1720px max layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* ========================================================= */}
        {/* MAIN 5-COLUMN DIRECTORY GRID (EXACTLY MATCHING BROCHURE) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 text-sm sm:text-base">
          
          {/* Column 1: Brand Info & Attribution (Brochure Page 1 & 20) */}
          <div className="lg:col-span-3 space-y-4">
            <Link 
              to="/" 
              onClick={scrollToTop} 
              className="inline-block group cursor-pointer"
              aria-label="SmartiDP - Back to top"
            >
              <img 
                src={brandLogo} 
                alt="SmartiDP EDMS — Kenz Innovations" 
                className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity" 
              />
            </Link>

            {/* Exact platform description from Brochure Page 1 */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed pr-2">
              The intelligent platform for enterprise documents. Capture, manage, automate, secure and govern every document across your enterprise — on one AI-powered, compliance-ready platform built for regulated and non-regulated industries.
            </p>

            <div className="pt-1 text-xs sm:text-sm text-slate-500">
              <span>SmartiDP EDMS is a product of</span>
              <div className="text-slate-900 font-bold text-base sm:text-lg tracking-wide mt-0.5">
                Kenz Innovations
              </div>
            </div>

            {/* Social & Portal Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-lg bg-slate-50 hover:bg-[#14532D] hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-2xs"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="h-9 w-9 rounded-lg bg-slate-50 hover:bg-[#14532D] hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-2xs"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.smartidp.ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official Website"
                className="h-9 w-9 rounded-lg bg-slate-50 hover:bg-[#14532D] hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-2xs"
              >
                <Globe className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-lg bg-slate-50 hover:bg-[#14532D] hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-2xs"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="h-9 w-9 rounded-lg bg-slate-50 hover:bg-[#14532D] hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-all hover:-translate-y-0.5 shadow-2xs"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Platform Capabilities (Brochure Page 4, 6, 7, 8) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight mb-4">
              Platform Overview
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works#intelligent-capture" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Intelligent Capture & OCR
                </Link>
              </li>
              <li>
                <Link to="/how-it-works#record-lifecycle" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Document & Records Lifecycle
                </Link>
              </li>
              <li>
                <Link to="/how-it-works#workflow-automation" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Workflow Automation (BPMN 2.0)
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Compliant Electronic Signatures
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Audit Trail & Version Control
                </Link>
              </li>
              <li>
                <Link to="/how-it-works#enterprise-integration" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Enterprise Integration APIs
                </Link>
              </li>
              <li>
                <Link to="/how-it-works#zero-trust-security" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Security & Access Control
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Compliance (Brochure Page 15, 16, 19) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight mb-4">
              Services & Success
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  7-Step Implementation
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Validation Accelerator (GxP)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Advisory & Governance
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Legacy Archive Migration
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenDemoModal}
                  className="text-left text-slate-600 hover:text-[#14532D] transition-colors block cursor-pointer w-full text-sm sm:text-base leading-relaxed"
                >
                  Live Interactive Demo
                </button>
              </li>
              <li>
                <Link to="/compliance" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  21 CFR Part 11 & Annex 11
                </Link>
              </li>
              <li>
                <Link to="/benefits" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Business Value & ROI
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Regulated Industries (Brochure Page 1 & 17) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight mb-4">
              Regulated Industries
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Life Sciences & Pharma
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Medical Devices (ISO 13485)
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Healthcare & Clinical Trials
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Financial Services & BFSI
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Government & Public Sector
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Manufacturing & Energy
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] transition-colors block text-sm sm:text-base leading-relaxed">
                  Legal & Professional Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Global Hubs */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight mb-4">
              Contact
            </h4>

            <div className="space-y-4 text-sm sm:text-base">
              {/* Official Portal (Brochure Page 1 & 20) */}

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-[#F0FDF4] text-[#14532D] border border-emerald-900/10 flex items-center justify-center shrink-0">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <a href="mailto:info@smartidp.ai" className="text-slate-700 hover:text-[#14532D] transition-colors font-medium text-sm sm:text-base">
                  info@smartidp.ai
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-[#F0FDF4] text-[#14532D] border border-emerald-900/10 flex items-center justify-center shrink-0">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <a href="tel:+918065904278" className="text-slate-700 hover:text-[#14532D] transition-colors font-medium text-sm sm:text-base">
                  +91 8065904278
                </a>
              </div>

              {/* USA Head Office */}
              <div className="flex items-start gap-3 pt-1">
                <div className="h-9 w-9 rounded-lg bg-[#F0FDF4] text-[#14532D] border border-emerald-900/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-slate-900 text-sm sm:text-base block">USA Head Office · SmartIDP Group Inc.</span>
                  <span className="text-slate-600 text-xs sm:text-sm leading-relaxed block">
                    5900 Balcones Drive STE 13688, Austin, TX 78731, USA
                  </span>
                </div>
              </div>

              {/* India / ODC Center */}
              <div className="flex items-start gap-3 pt-1">
                <div className="h-9 w-9 rounded-lg bg-[#F0FDF4] text-[#14532D] border border-emerald-900/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Building2 className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-slate-900 text-sm sm:text-base block">India / ODC · SmartIDP India Operations</span>
                  <span className="text-slate-600 text-xs sm:text-sm leading-relaxed block">
                    3rd Floor, Shriya Bldg, Punjagutta, Hyderabad 500082, India
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM BAR: EXACT BROCHURE COPYRIGHT & DISCLAIMER */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-slate-200 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm sm:text-base text-slate-600">
            {/* Exact Copyright line from Brochure Page 20 */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 font-normal">
              <span className="text-slate-900 font-semibold">© 2026 Kenz Innovations. All rights reserved.</span>
              <span className="text-slate-300">|</span>
              <Link to="/about" className="hover:text-[#14532D] transition-colors font-medium">Terms & Conditions</Link>
              <span className="text-slate-300">|</span>
              <Link to="/compliance" className="hover:text-[#14532D] transition-colors font-medium">Compliance & Privacy</Link>
            </div>

            {/* Right: Product & Back to Top */}
            <div className="flex items-center gap-4 text-slate-600">
              <span className="text-sm sm:text-base font-medium">
                <strong className="text-slate-900 font-bold">SmartiDP EDMS</strong> · Kenz Innovations
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="h-10 w-10 rounded-lg bg-slate-50 hover:bg-[#14532D] hover:text-white text-slate-600 border border-slate-200 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:-translate-y-0.5"
                title="Back to Top"
              >
                <ArrowUp className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          {/* Exact regulatory disclaimer from Brochure Page 20 */}
          {/* <p className="text-[11px] text-slate-400 text-center md:text-left leading-relaxed">
            Product interfaces shown are illustrative. Compliance with regulations is a shared responsibility; this website is for informational purposes and is not legal advice. All other trademarks are the property of their respective owners.
          </p> */}
        </div>

      </div>
    </footer>
  )
}
