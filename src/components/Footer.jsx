import React from 'react'
import { Link } from 'react-router-dom'
import brandLogo from '../assets/logo1.png'
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Globe,
  ArrowRight,
  Sparkles,
  Building2,
  CheckCircle2,
  Lock
} from 'lucide-react'

export default function Footer({ onOpenDemoModal }) {
  return (
    <footer className="relative bg-gradient-to-b from-[#F9FAF9] via-white to-white border-t border-slate-200/90 pt-16 pb-12 text-slate-700 overflow-hidden">
      {/* Background soft ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1720px] h-32 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-24 bg-[#E8F3EC] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Executive Brand & Connect Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side: Brand Logo, Tagline & Trust Badges */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Link to="/" className="inline-block">
                  <img 
                    src={brandLogo} 
                    alt="SmartiDP EDMS — Kenz Innovations" 
                    className="h-11 sm:h-12 w-auto object-contain" 
                  />
                </Link>
                <span className="text-[11px] font-mono font-bold text-[#14532D] bg-[#E8F3EC] px-3 py-1 rounded-full border border-[#14532D]/15">
                  KENZ INNOVATIONS · EDMS 2026
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                The intelligent platform for enterprise documents. Capture, manage, automate, secure, and govern every document across your enterprise on one AI-powered, compliance-ready platform built for regulated and non-regulated industries.
              </p>

              {/* Trust Point Chips */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5 text-[#14532D]">
                  <CheckCircle2 className="h-4 w-4 text-[#14532D]" />
                  <span>21 CFR Part 11 Validated</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#14532D]">
                  <Lock className="h-4 w-4 text-[#14532D]" />
                  <span>Zero-Trust Security</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#14532D]">
                  <ShieldCheck className="h-4 w-4 text-[#14532D]" />
                  <span>ISO 13485 & 9001 Aligned</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#14532D]">
                  <Sparkles className="h-4 w-4 text-[#14532D]" />
                  <span>Sub-350ms Multimodal OCR</span>
                </div>
              </div>
            </div>

            {/* Right Side: Quick Connect & Action Capsule */}
            <div className="lg:col-span-5 bg-[#F5F7F5] p-6 rounded-2xl border border-slate-200/90 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14532D]">
                  Enterprise Connect
                </span>
                <span className="text-[10px] font-mono text-emerald-800 bg-white px-2 py-0.5 rounded border border-slate-200">
                  24/7 GxP Ready
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href="tel:+918065904278"
                  className="p-3 rounded-xl bg-white hover:bg-[#E8F3EC] border border-slate-200 hover:border-[#14532D]/30 transition-all flex items-center gap-2.5 text-slate-800 font-semibold group"
                >
                  <div className="h-7 w-7 rounded-lg bg-[#E8F3EC] group-hover:bg-[#14532D] text-[#14532D] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-slate-500 block font-normal">Direct Helpline</span>
                    <span className="text-xs font-bold">+91 8065904278</span>
                  </div>
                </a>

                <a
                  href="mailto:info@smartidp.ai"
                  className="p-3 rounded-xl bg-white hover:bg-[#E8F3EC] border border-slate-200 hover:border-[#14532D]/30 transition-all flex items-center gap-2.5 text-slate-800 font-semibold group"
                >
                  <div className="h-7 w-7 rounded-lg bg-[#E8F3EC] group-hover:bg-[#14532D] text-[#14532D] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-slate-500 block font-normal">Official Inquiries</span>
                    <span className="text-xs font-bold">info@smartidp.ai</span>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://edms.smartidp.ai/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white text-xs font-bold transition-all shadow-md shadow-[#14532D]/15 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Launch Client Portal</span>
                  <ExternalLink className="h-3.5 w-3.5 text-emerald-200" />
                </a>

                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-[#14532D] text-xs font-bold border border-slate-300 transition-all cursor-pointer shadow-2xs flex items-center justify-center gap-1.5"
                >
                  <span>Request a Demo</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Main 4-Column Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-slate-200 text-sm">
          
          {/* Column 1: Popular Links (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#14532D]" />
              <span>Popular Links</span>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>SmartIDP Content Automation</span>
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Artificial Intelligence in SmartIDP</span>
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Process Automation (BPMN 2.0)</span>
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>SAP & ERP with SmartIDP</span>
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Multimodal OCR & Layout Analysis</span>
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Version & Controlled Document Governance</span>
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Immutable Tamper-Evident Audit Trails</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services & Partner (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#14532D]" />
              <span>Services & Partner</span>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Becoming a Partner</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Locations & Global Coverage</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenDemoModal}
                  className="text-left text-slate-600 hover:text-[#14532D] font-medium transition-colors cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Live Interactive Platform Demo</span>
                </button>
              </li>
              <li>
                <Link to="/compliance" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>View Our Certifications (21 CFR Part 11)</span>
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>EU GMP Annex 11 & GAMP 5 Frameworks</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>7-Step Implementation Methodology</span>
                </Link>
              </li>
              <li>
                <Link to="/benefits" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>ROI & Total Cost of Ownership Model</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regulated Solutions (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#14532D]" />
              <span>Regulated Solutions</span>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Pharmaceuticals & Biotech (GxP)</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Medical Devices (ISO 13485 & MDR)</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Healthcare & Clinical Trials</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Banking & Financial Services (BFSI)</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Government & Public Sector</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Contract Lifecycle Management (CLM)</span>
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors flex items-center gap-1.5 group">
                  <span className="text-slate-400 group-hover:text-[#14532D] transition-colors">›</span>
                  <span>Accounts Payable & Invoice Automation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Global Offices (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2 mb-5">
              <span className="h-2 w-2 rounded-full bg-[#14532D]" />
              <span>Contact & Global Offices</span>
            </div>

            {/* Head Office Austin Card */}
            <div className="p-4 rounded-2xl bg-[#F5F7F5] border border-slate-200/90 shadow-2xs space-y-1.5 text-xs hover:border-[#14532D]/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold font-mono text-[#14532D] bg-[#E8F3EC] px-2 py-0.5 rounded">
                  GLOBAL HEADQUARTERS
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Austin, TX</span>
              </div>
              <div className="font-bold text-slate-900 text-xs">SmartIDP Group Inc.</div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                5900 Balcones Drive STE 13688<br />
                Austin, TX 78731, USA
              </p>
            </div>

            {/* India / ODC Hyderabad Card */}
            <div className="p-4 rounded-2xl bg-[#F5F7F5] border border-slate-200/90 shadow-2xs space-y-1.5 text-xs hover:border-[#14532D]/30 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold font-mono text-[#14532D] bg-[#E8F3EC] px-2 py-0.5 rounded">
                  OFFSHORE DEVELOPMENT CENTER
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Hyderabad, IN</span>
              </div>
              <div className="font-bold text-slate-900 text-xs">SmartIDP India Operations</div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                3rd Floor, Shriya Building, Mothi Nagar, Dwarakapuri,<br />
                Punjagutta, Hyderabad, Telangana 500082, India
              </p>
            </div>

            {/* Direct Line & Inquiries */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">Direct Phone:</span>
                <a href="tel:+918065904278" className="font-bold text-[#14532D] hover:underline font-mono">
                  +91 8065904278
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 text-[11px]">Direct Email:</span>
                <a href="mailto:info@smartidp.ai" className="font-bold text-[#14532D] hover:underline font-mono">
                  info@smartidp.ai
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer Box */}
        <div className="my-8 p-5 rounded-2xl bg-gradient-to-r from-[#E8F3EC]/70 via-[#F5F7F5] to-[#E8F3EC]/70 border border-[#14532D]/15 text-xs sm:text-sm text-slate-700 leading-relaxed shadow-2xs flex items-start gap-3">
          <ShieldCheck className="h-5 w-5 text-[#14532D] shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-900">Regulatory Disclaimer:</strong> Compliance with regulations is a shared responsibility; the SmartiDP EDMS platform provides technical controls, validation packages, and immutable audit trails, while customer organizations maintain standard operating procedures, role training, configuration governance, and performance qualification. Product interfaces depicted are illustrative.
          </p>
        </div>

        {/* Bottom Utility Bar (Clean Flex, Zero Trailing Pipes, Elevated Socials) */}
        <div className="pt-6 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-5 text-xs sm:text-sm text-slate-600">
          
          {/* Legal / Policy Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 font-medium">
            <Link to="/about" className="hover:text-[#14532D] transition-colors">Terms & Conditions</Link>
            <Link to="/compliance" className="hover:text-[#14532D] transition-colors">Privacy Policy</Link>
            <a 
              href="https://edms.smartidp.ai/login" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#14532D] font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Client Portal Login</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <Link to="/contact" className="hover:text-[#14532D] transition-colors">Delete Account</Link>
            <Link to="/compliance" className="hover:text-[#14532D] transition-colors">Security Whitepaper</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-9 w-9 rounded-full bg-white hover:bg-[#14532D] hover:text-white text-slate-600 flex items-center justify-center transition-all border border-slate-200 hover:border-[#14532D] shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-9 w-9 rounded-full bg-white hover:bg-[#14532D] hover:text-white text-slate-600 flex items-center justify-center transition-all border border-slate-200 hover:border-[#14532D] shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.smartidp.ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official Website"
              className="h-9 w-9 rounded-full bg-white hover:bg-[#14532D] hover:text-white text-slate-600 flex items-center justify-center transition-all border border-slate-200 hover:border-[#14532D] shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <Globe className="h-4 w-4" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="h-9 w-9 rounded-full bg-white hover:bg-[#14532D] hover:text-white text-slate-600 flex items-center justify-center transition-all border border-slate-200 hover:border-[#14532D] shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="h-9 w-9 rounded-full bg-white hover:bg-[#14532D] hover:text-white text-slate-600 flex items-center justify-center transition-all border border-slate-200 hover:border-[#14532D] shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>

          {/* Copyright Line */}
          <div className="text-slate-500 font-normal text-center lg:text-right">
            © 2026 SmartIDP · Kenz Innovations. All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  )
}
