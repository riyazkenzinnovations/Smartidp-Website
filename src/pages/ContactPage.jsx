import React, { useState } from 'react'
import {
  Mail,
  Phone,
  Building2,
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  FileText,
  Download,
  Globe,
  Sparkles,
  Lock,
  Users,
  Zap
} from 'lucide-react'

const FAQ_ITEMS = [
  {
    q: 'How long does an enterprise SmartiDP EDMS deployment typically take?',
    a: 'Typical timelines are: Cloud deployment takes 4–8 weeks to initial production; on-premise or private cloud takes 8–16 weeks depending on infrastructure; and GxP-validated deployments include 4–6 weeks dedicated validation execution following our structured 7-step methodology.'
  },
  {
    q: 'How does SmartiDP support 21 CFR Part 11 and EU Annex 11 computer system validation?',
    a: 'We provide an audit-ready GxP Validation Accelerator Pack including pre-written User Requirements Specifications (URS), Functional Specifications (FS), Risk Assessments (FMEA), and executable IQ/OQ protocol templates, reducing time-to-value by up to 50%.'
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

const TRUST_CHIPS = [
  { icon: Clock, label: '2-Hour SLA Response' },
  { icon: ShieldCheck, label: 'Mutual NDA Available' },
  { icon: Lock, label: 'SOC 2 Type II Certified' },
  { icon: Globe, label: 'Multi-Region Deployment' }
]

const OFFICES = [
  {
    badge: 'HEAD OFFICE',
    city: 'Nepean, ON',
    flag: '🇨🇦',
    name: 'SmartIDP Group Inc.',
    icon: MapPin,
    address: '65 Aura Avenue, Nepean\nOntario K2J 6R9, Canada',
    email: 'info@smartidp.ai',
    phone: '+91 8065904278',
    tel: '+918065904278',
    color: 'from-emerald-600 to-teal-700'
  },
  {
    badge: 'USA OFFICE',
    city: 'Austin, TX',
    flag: '🇺🇸',
    name: 'SmartIDP Group Inc.',
    icon: Building2,
    address: '5900 Balcones Drive STE 13688\nAustin, TX 78731, USA',
    email: 'info@smartidp.ai',
    phone: '+91 8065904278',
    tel: '+918065904278',
    color: 'from-sky-500 to-blue-600'
  },
  {
    badge: 'INDIA / ODC',
    city: 'Hyderabad, IN',
    flag: '🇮🇳',
    name: 'SmartIDP India Operations',
    icon: Building2,
    address: '3rd Floor, Shriya Bldg, Punjagutta\nHyderabad 500082, India',
    email: 'info@smartidp.ai',
    phone: '+91 8065904278',
    tel: '+918065904278',
    color: 'from-orange-500 to-amber-600'
  }
]

const BROCHURES = [
  {
    badge: 'PRODUCT ARCHITECTURE',
    size: 'PDF · 4.6 MB',
    icon: FileText,
    title: 'SmartiDP EDMS Product Brochure',
    subtitle: 'Enterprise Document Management Platform Overview',
    desc: 'Comprehensive 20-page guide covering the 8 foundational capability domains, intelligent OCR ingest engine, visual BPMN 2.0 workflow designer, enterprise integration APIs, and hybrid deployment models.',
    bullets: [
      '8 Integrated Core Capability Domains',
      'Multi-Modal OCR & Neural Data Extraction',
      'Enterprise ERP / CRM Integration Architecture'
    ],
    downloadFile: '/SmartiDP-EDMS-Product-Brochure.pdf',
    downloadName: 'SmartiDP-EDMS-Product-Brochure.pdf',
    downloadLabel: 'Download Product PDF',
    color: 'from-sky-500 to-blue-600'
  },
  {
    badge: 'REGULATORY COMPLIANCE',
    size: 'PDF · 2.8 MB',
    icon: ShieldCheck,
    title: 'SmartiDP EDMS Compliance Brochure',
    subtitle: 'Regulatory Controls & Computer Systems Validation',
    desc: 'Detailed technical compliance guide for regulated life sciences, healthcare, medical devices, and financial services. Details FDA 21 CFR Part 11, EU Annex 11, and our pre-packaged GAMP 5 validation accelerator pack.',
    bullets: [
      'FDA 21 CFR Part 11 & EU GMP Annex 11 Controls',
      'GxP Validation Accelerator Pack (IQ/OQ/PQ)',
      'ALCOA+ Cryptographic Audit Trail Security'
    ],
    downloadFile: '/SmartiDP-EDMS-Compliance-Brochure.pdf',
    downloadName: 'SmartiDP-EDMS-Compliance-Brochure.pdf',
    downloadLabel: 'Download Compliance PDF',
    color: 'from-emerald-500 to-teal-600'
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
    deployment: 'SaaS (Multi-Tenant Cloud)',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-white">

      {/* ── 1. HERO + FORM (split layout) ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0a2010] to-slate-900">
        {/* grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.3) 1px,transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* glow blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400/8 rounded-full blur-3xl" />

        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left — Hero copy */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
                <Mail className="h-3.5 w-3.5" />
                <span>Global Enterprise Support</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                Connect With Our{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  Solutions Team
                </span>
              </h1>

              <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed">
                Schedule a tailored platform walkthrough, request validation documentation, or discuss your organization's document management requirements.
              </p>

              {/* Trust chips */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {TRUST_CHIPS.map((chip, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-white/8 border border-white/12 backdrop-blur-sm"
                  >
                    <chip.icon className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-semibold text-white">{chip.label}</span>
                  </div>
                ))}
              </div>

              {/* Quick download links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3">Official Brochures</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/SmartiDP-EDMS-Product-Brochure.pdf"
                    download="SmartiDP-EDMS-Product-Brochure.pdf"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/15 transition-all"
                  >
                    <Download className="h-3.5 w-3.5 text-emerald-400" />
                    Product Brochure (PDF)
                  </a>
                  <a
                    href="/SmartiDP-EDMS-Compliance-Brochure.pdf"
                    download="SmartiDP-EDMS-Compliance-Brochure.pdf"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/15 transition-all"
                  >
                    <Download className="h-3.5 w-3.5 text-emerald-400" />
                    Compliance Brochure (PDF)
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Form card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-black/40 overflow-hidden">
              {submitted ? (
                <div className="p-10 text-center space-y-5 py-16">
                  <div className="h-16 w-16 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Request Received!</h2>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{formData.firstName}</strong>. A dedicated solutions architect will contact you at <strong>{formData.email}</strong> within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  {/* Form header */}
                  <div className="px-8 pt-8 pb-5 border-b border-slate-100 flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Request an Executive Demo</h2>
                      <p className="text-xs text-slate-500 mt-1">Fields marked * are required for tailored setup.</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200 shrink-0">
                      <Clock className="h-3 w-3" />
                      2-hr SLA
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">First Name *</label>
                        <input
                          type="text" required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="Sarah"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">Last Name *</label>
                        <input
                          type="text" required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Jenkins"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">Work Email *</label>
                        <input
                          type="email" required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="s.jenkins@corp.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 019-2834"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">Organization *</label>
                      <input
                        type="text" required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Global Life Sciences Corp"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 transition"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">Industry *</label>
                        <select
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 transition"
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
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">Hosting Model *</label>
                        <select
                          value={formData.deployment}
                          onChange={(e) => setFormData({ ...formData, deployment: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 transition"
                        >
                          <option>SaaS (Multi-Tenant Cloud)</option>
                          <option>Dedicated Private Cloud (AWS/Azure)</option>
                          <option>On-Premise / Air-Gapped Kubernetes</option>
                          <option>Undecided / Open to Recommendation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">Specific Requirements or Document Scope</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your document volumes, regulatory requirements (e.g. 21 CFR Part 11), or current systems..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-sm font-bold shadow-lg shadow-emerald-900/25 hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 group"
                    >
                      <span>Submit Demonstration Request</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    <p className="text-center text-[11px] text-slate-400">
                      Direct consultation with enterprise solution architects · No obligation
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. GLOBAL OFFICES ── */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1 uppercase tracking-widest mb-3 shadow-sm">
              <Globe className="h-3 w-3" />
              Worldwide Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Global Headquarters & Delivery Hubs
            </h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base">
              Direct access to our architecture, implementation, and regulatory support teams across North America and Asia-Pacific.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {OFFICES.map((office, i) => {
              const Icon = office.icon
              return (
                <div key={i} className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                  <div className="p-7 sm:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-gradient-to-r ${office.color} text-white`}>
                        {office.badge}
                      </span>
                      <span className="text-base">{office.flag} <span className="text-xs text-slate-500 font-mono ml-1">{office.city}</span></span>
                    </div>

                    <div className="flex items-start gap-4 mb-6">
                      <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${office.color} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">{office.name}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed mt-1 whitespace-pre-line">{office.address}</p>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-slate-100 space-y-3">
                      <a href={`mailto:${office.email}`} className="flex items-center gap-3 group">
                        <div className="h-8 w-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition">
                          <Mail className="h-4 w-4" />
                        </div>
                        <span className="text-sm text-slate-700 group-hover:text-emerald-700 font-medium transition">{office.email}</span>
                      </a>
                      <a href={`tel:${office.tel}`} className="flex items-center gap-3 group">
                        <div className="h-8 w-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition">
                          <Phone className="h-4 w-4" />
                        </div>
                        <span className="text-sm text-slate-700 group-hover:text-emerald-700 font-medium transition">{office.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 3. BROCHURE DOWNLOADS ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-3 py-1 uppercase tracking-widest mb-3">
              <FileText className="h-3 w-3" />
              Official Documentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Download Executive Brochures
            </h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base">
              Complete product architecture specifications and regulatory compliance validation frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {BROCHURES.map((b, i) => {
              const Icon = b.icon
              return (
                <div key={i} className="group rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-5">
                      <span className={`text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-gradient-to-r ${b.color} text-white`}>
                        {b.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{b.size}</span>
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${b.color} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {b.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">{b.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">{b.desc}</p>

                    <ul className="space-y-2 mb-6">
                      {b.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex items-center gap-2.5 text-xs text-slate-700">
                          <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${b.color} shrink-0`} />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                      <a
                        href={b.downloadFile}
                        download={b.downloadName}
                        className={`w-full sm:flex-1 py-3 px-5 rounded-full bg-gradient-to-r ${b.color} text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:opacity-90 transition-all`}
                      >
                        <Download className="h-4 w-4" />
                        {b.downloadLabel}
                      </a>
                      <a
                        href={b.downloadFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto py-3 px-5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold flex items-center justify-center gap-1.5 hover:bg-slate-50 transition"
                      >
                        Preview <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4. FAQ ── */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1 uppercase tracking-widest mb-3 shadow-sm">
                <HelpCircle className="h-3 w-3" />
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Frequently Asked Enterprise Questions
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                      isOpen
                        ? 'border-emerald-200 bg-white shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer group"
                    >
                      <span className={`text-sm font-semibold leading-snug transition-colors ${
                        isOpen ? 'text-emerald-700' : 'text-slate-900 group-hover:text-emerald-700'
                      }`}>
                        {item.q}
                      </span>
                      <div className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isOpen ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                      }`}>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 border-t border-emerald-100">
                        <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SECURITY ASSURANCE BAR ── */}
      <section className="py-14 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="rounded-3xl bg-slate-900 p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="h-14 w-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/25 text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">
                  Pre-Signed Mutual NDA & Vendor Security Questionnaires
                </h3>
                <p className="text-sm text-slate-400 mt-0.5">
                  Standard mutual NDAs, SOC 2 Type II reports, and vendor assessment documents processed within 24 hours.
                </p>
              </div>
            </div>
            <a
              href="mailto:info@smartidp.ai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition-all shrink-0 shadow-lg shadow-emerald-900/30"
            >
              <Zap className="h-4 w-4" />
              Request Security Pack
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
