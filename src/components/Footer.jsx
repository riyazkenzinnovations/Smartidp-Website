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
  CheckCircle2
} from 'lucide-react'

export default function Footer({ onOpenDemoModal }) {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-700">
      {/* Full-width container matching user outward arrows (max-w-[1720px]) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Brand Banner Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="space-y-2">
            <Link to="/" className="inline-block">
              <img 
                src={brandLogo} 
                alt="SmartiDP EDMS — Kenz Innovations" 
                className="h-11 sm:h-12 w-auto object-contain" 
              />
            </Link>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              The intelligent platform for enterprise documents. Capture, manage, automate, secure, and govern every document across your enterprise on one AI-powered, compliance-ready platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            <a
              href="tel:+918065904278"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F5F7F5] hover:bg-slate-200/80 text-slate-800 text-sm font-semibold transition-all border border-slate-300 shadow-2xs"
            >
              <Phone className="h-4 w-4 text-[#14532D]" />
              <span>+91 8065904278</span>
            </a>

            <a
              href="mailto:info@smartidp.ai"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F5F7F5] hover:bg-slate-200/80 text-slate-800 text-sm font-semibold transition-all border border-slate-300 shadow-2xs"
            >
              <Mail className="h-4 w-4 text-[#14532D]" />
              <span>info@smartidp.ai</span>
            </a>

            <a
              href="https://edms.smartidp.ai/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white text-sm font-bold shadow-md shadow-[#14532D]/15 transition-all cursor-pointer"
            >
              <span>Client Portal Login</span>
              <ExternalLink className="h-4 w-4 text-emerald-200" />
            </a>
          </div>
        </div>

        {/* Main 4-Column Directory Grid (Popular Links, Services & Partners, Solutions, Contact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 py-12 border-b border-slate-200 text-sm">
          
          {/* Column 1: Popular Links */}
          <div>
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#14532D]" />
              <span>Popular Links</span>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  SmartIDP Intelligent Content Automation
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Artificial Intelligence in SmartIDP
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Process Automation (BPMN 2.0)
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  SAP & ERP with SmartIDP
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Multimodal OCR & Layout Analysis
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Version & Controlled Document Governance
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Immutable Tamper-Evident Audit Trails
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services & Partners */}
          <div>
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#14532D]" />
              <span>Services & Partner</span>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Becoming a Partner
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Locations & Global Coverage
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenDemoModal}
                  className="text-left text-slate-600 hover:text-[#14532D] font-medium transition-colors cursor-pointer"
                >
                  Live Interactive Demo
                </button>
              </li>
              <li>
                <Link to="/compliance" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  View Our Certifications (21 CFR Part 11)
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  EU GMP Annex 11 & GAMP 5 Frameworks
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  7-Step Implementation Methodology
                </Link>
              </li>
              <li>
                <Link to="/benefits" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  ROI & Total Cost of Ownership Model
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regulated Solutions */}
          <div>
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#14532D]" />
              <span>Regulated Solutions</span>
            </div>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Pharmaceuticals & Biotech (GxP)
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Medical Devices (ISO 13485 & MDR)
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Healthcare & Clinical Trials
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Banking & Financial Services (BFSI)
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Government & Public Sector
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Contract Lifecycle Management (CLM)
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-slate-600 hover:text-[#14532D] font-medium transition-colors">
                  Accounts Payable & Invoice Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact & Global Offices */}
          <div className="space-y-5">
            <div className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#14532D]" />
              <span>Contact & Global Offices</span>
            </div>

            {/* Head Office Austin */}
            <div className="p-4 rounded-xl bg-[#F5F7F5] border border-slate-200 space-y-1 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs text-[#14532D]">
                <MapPin className="h-3.5 w-3.5 text-[#14532D]" />
                <span>Head Office — USA</span>
              </div>
              <div className="font-semibold text-slate-800">SmartIDP Group Inc.</div>
              <p className="text-slate-600 leading-relaxed">
                5900 Balcones Drive STE 13688<br />
                Austin, TX 78731, USA
              </p>
            </div>

            {/* India / ODC Hyderabad */}
            <div className="p-4 rounded-xl bg-[#F5F7F5] border border-slate-200 space-y-1 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs text-[#14532D]">
                <MapPin className="h-3.5 w-3.5 text-[#14532D]" />
                <span>India / Offshore Development Center (ODC)</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                3rd Floor, Shriya Building, Mothi Nagar, Dwarakapuri,<br />
                Punjagutta, Hyderabad, Telangana 500082, India.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-2 text-xs font-medium">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="h-3.5 w-3.5 text-[#14532D]" />
                <span>Phone:</span>
                <a href="tel:+918065904278" className="font-semibold text-slate-900 hover:text-[#14532D]">
                  +91 8065904278
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="h-3.5 w-3.5 text-[#14532D]" />
                <span>Email:</span>
                <a href="mailto:info@smartidp.ai" className="font-semibold text-slate-900 hover:text-[#14532D]">
                  info@smartidp.ai
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Globe className="h-3.5 w-3.5 text-[#14532D]" />
                <span>Web:</span>
                <a href="https://www.smartidp.ai" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 hover:text-[#14532D]">
                  www.smartidp.ai
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer Box */}
        <div className="mt-8 p-5 rounded-2xl bg-[#F5F7F5] border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            <strong className="text-slate-800">Regulatory Disclaimer:</strong> Compliance with regulations is a shared responsibility; the SmartiDP EDMS platform provides technical controls, validation packages, and immutable audit trails, while customer organizations maintain standard operating procedures, role training, configuration governance, and performance qualification. Product interfaces depicted are illustrative.
          </p>
        </div>

        {/* Bottom Bar (Terms, Social Icons, Copyright) */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-5 text-xs sm:text-sm text-slate-600">
          
          {/* Legal / Policy Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 font-medium">
            <Link to="/about" className="hover:text-[#14532D] transition-colors">Terms & Conditions</Link>
            <span className="text-slate-300">|</span>
            <Link to="/compliance" className="hover:text-[#14532D] transition-colors">Privacy Policy</Link>
            <span className="text-slate-300">|</span>
            <a 
              href="https://edms.smartidp.ai/login" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#14532D] font-bold hover:underline"
            >
              Client Portal Login
            </a>
            <span className="text-slate-300">|</span>
            <Link to="/contact" className="hover:text-[#14532D] transition-colors">Delete Account</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-9 w-9 rounded-full bg-[#F5F7F5] hover:bg-[#14532D] hover:text-white text-slate-600 flex items-center justify-center transition-all border border-slate-200 shadow-2xs"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-9 w-9 rounded-full bg-[#F5F7F5] hover:bg-[#14532D] hover:text-white text-slate-600 flex items-center justify-center transition-all border border-slate-200 shadow-2xs"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.smartidp.ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Website"
              className="h-9 w-9 rounded-full bg-[#F5F7F5] hover:bg-[#14532D] hover:text-white text-slate-600 flex items-center justify-center transition-all border border-slate-200 shadow-2xs"
            >
              <Globe className="h-4 w-4" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="h-9 w-9 rounded-full bg-[#F5F7F5] hover:bg-[#14532D] hover:text-white text-slate-600 flex items-center justify-center transition-all border border-slate-200 shadow-2xs"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="h-9 w-9 rounded-full bg-[#F5F7F5] hover:bg-[#14532D] hover:text-white text-slate-600 flex items-center justify-center transition-all border border-slate-200 shadow-2xs"
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
