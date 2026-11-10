import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  Building2,
  Globe,
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Clock,
  MapPin,
  HelpCircle,
  ChevronDown
} from 'lucide-react'

const FAQ_ITEMS = [
  {
    q: 'How long does an enterprise SmartiDP EDMS deployment typically take?',
    a: 'Turnkey cloud SaaS deployments can go live in 2 to 4 weeks using our pre-configured GxP and industry templates. Complex multi-site enterprise deployments with custom legacy migrations typically require 8 to 12 weeks following our structured 7-step methodology.'
  },
  {
    q: 'How does SmartiDP support 21 CFR Part 11 and EU Annex 11 computer system validation?',
    a: 'We provide an audit-ready GxP Validation Accelerator Pack including pre-written User Requirements Specifications (URS), Functional Specifications (FS), Risk Assessments (FMEA), and executable IQ/OQ protocol templates, reducing validation effort by over 70%.'
  },
  {
    q: 'Can SmartiDP EDMS migrate our existing legacy documents and metadata?',
    a: 'Yes. Our automated migration pipelines ingest legacy content from OpenText, Documentum, SharePoint, file shares, or physical scanning vendors, preserving version histories, author metadata, and cryptographic checksums.'
  },
  {
    q: 'What deployment models are supported?',
    a: 'SmartiDP EDMS supports multi-tenant Cloud SaaS (AWS / Azure) with regional data residency, single-tenant dedicated Private Cloud, and fully air-gapped on-premise Kubernetes hosting.'
  }
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: 'Pharmaceuticals & Biotech',
    processInterest: 'Controlled Document & SOP Lifecycle',
    deployment: 'SaaS (Cloud Managed)',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="py-12 bg-white">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link to="/" className="hover:text-[#14532D]">Home</Link>
          <span>/</span>
          <span className="text-[#14532D] font-semibold">Contact Us</span>
        </nav>

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-4">
            <Mail className="h-3.5 w-3.5" />
            <span>GLOBAL ENTERPRISE SUPPORT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight leading-tight">
            Connect With Our Solutions Team
          </h1>
          <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            Schedule a tailored platform walkthrough, request validation documentation, or discuss your organization's document management requirements.
          </p>
        </div>

        {/* Main Grid: Form on Left, Company Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#F5F7F5] border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-sm">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="h-16 w-16 rounded-full bg-[#E8F3EC] text-[#14532D] flex items-center justify-center mx-auto border border-[#14532D]/20">
                  <Check className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-[#14532D]">
                  Demonstration Request Received
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.firstName}</strong>. A dedicated SmartiDP solutions architect will contact you at <strong>{formData.email}</strong> within 2 business hours to coordinate demonstration credentials.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#14532D] text-white text-xs font-semibold hover:bg-[#064E3B] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-[#14532D] mb-1">
                  Request an Executive Demonstration
                </h2>
                <p className="text-xs text-slate-600 mb-8">
                  Fields marked with an asterisk (*) are required for tailored demonstration setup.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Sarah"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Organization / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Global Life Sciences Corp"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Industry Vertical *
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D]"
                      >
                        <option>Pharmaceuticals & Biotech</option>
                        <option>Medical Devices (ISO 13485)</option>
                        <option>Healthcare & Clinical</option>
                        <option>Banking, BFSI & Insurance</option>
                        <option>Government & Public Sector</option>
                        <option>Manufacturing & Energy</option>
                        <option>Legal & Professional Services</option>
                        <option>CRO / Clinical Trials</option>
                        <option>Cross-Industry Enterprise</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Hosting Model *
                      </label>
                      <select
                        value={formData.deployment}
                        onChange={(e) => setFormData({ ...formData, deployment: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D]"
                      >
                        <option>SaaS (Multi-Tenant Cloud)</option>
                        <option>Dedicated Private Cloud (AWS/Azure)</option>
                        <option>On-Premise / Air-Gapped Kubernetes</option>
                        <option>Undecided / Open to Recommendation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Specific Requirements or Document Scope
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your document volumes, regulatory requirements (e.g. 21 CFR Part 11), or current systems..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-950/10 hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Submit Demonstration Request</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Contact Details & Info Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Global Office Locations */}
            <div className="p-8 rounded-3xl bg-[#F5F7F5] border border-slate-200 space-y-6">
              <h3 className="text-xl font-bold text-[#14532D] flex items-center gap-2">
                <Building2 className="h-5 w-5 text-[#14532D]" />
                <span>Global Office Locations</span>
              </h3>

              {/* Head Office Austin */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#14532D] bg-[#E8F3EC] px-2.5 py-0.5 rounded">
                    GLOBAL HEADQUARTERS
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">Austin, TX</span>
                </div>
                <div className="font-bold text-slate-900 text-sm">SmartIDP Group Inc.</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  5900 Balcones Drive STE 13688<br />
                  Austin, TX 78731, USA
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a href="mailto:info@smartidp.ai" className="text-[#14532D] font-semibold hover:underline flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5" />
                    <span>info@smartidp.ai</span>
                  </a>
                  <a href="tel:+918065904278" className="text-slate-700 font-medium hover:text-[#14532D] flex items-center gap-1">
                    <Phone className="h-3.5 w-3.5" />
                    <span>+91 8065904278</span>
                  </a>
                </div>
              </div>

              {/* India / ODC Hyderabad */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#14532D] bg-[#E8F3EC] px-2.5 py-0.5 rounded">
                    OFFSHORE DEVELOPMENT CENTER (ODC)
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">Hyderabad, IN</span>
                </div>
                <div className="font-bold text-slate-900 text-sm">SmartIDP India Operations</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  3rd Floor, Shriya Building, Mothi Nagar, Dwarakapuri,<br />
                  Punjagutta, Hyderabad, Telangana 500082, India
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px]">R&D, Delivery & 24/7 Support</span>
                  <a href="tel:+918065904278" className="text-[#14532D] font-semibold hover:underline flex items-center gap-1">
                    <Phone className="h-3.5 w-3.5" />
                    <span>+91 8065904278</span>
                  </a>
                </div>
              </div>

              {/* Enterprise Channels */}
              <div className="space-y-3 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-white text-[#14532D] flex items-center justify-center shrink-0 border border-slate-200">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Demonstration SLA</span>
                    <span className="text-slate-600">Response within 2 business hours for qualified enterprise inquiries</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-white text-[#14532D] flex items-center justify-center shrink-0 border border-slate-200">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">NDA & Security Questionnaires</span>
                    <span className="text-slate-600">Pre-signed Mutual NDAs and vendor security assessments processed within 24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Support Card */}
            <div className="p-6 rounded-3xl glass-card-green">
              <span className="text-xs font-bold text-[#14532D] uppercase tracking-wider block mb-1">
                Client Portal & Technical Helpdesk
              </span>
              <p className="text-xs text-slate-700 leading-relaxed mb-4">
                Existing customers with active support agreements can access 24/7 ticketing, SLA dashboards, and product documentation through the client portal.
              </p>
              <a
                href="https://edms.smartidp.ai/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#14532D] hover:underline flex items-center gap-1"
              >
                <span>Access Client Portal (edms.smartidp.ai)</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Enterprise FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F3EC] text-[#14532D] text-xs font-semibold mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#14532D]">
              Frequently Asked Enterprise Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm font-bold text-[#14532D] hover:bg-[#F5F7F5] transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-700 leading-relaxed border-t border-slate-100 bg-[#F5F7F5]/50">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
