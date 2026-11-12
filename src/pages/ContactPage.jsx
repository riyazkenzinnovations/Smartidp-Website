import React, { useState } from 'react'
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
  ChevronDown,
  ExternalLink,
  FileText,
  Download
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
    <div className="bg-white">
      {/* 1. Page Hero & Demonstration Request Form */}
      <section className="py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Page Hero */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-4 shadow-2xs">
              <Mail className="h-3.5 w-3.5 text-[#14532D]" />
              <span>GLOBAL ENTERPRISE SUPPORT</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              Connect With Our Solutions Team
            </h1>
            <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              Schedule a tailored platform walkthrough, request validation documentation, or discuss your organization's document management requirements.
            </p>

            {/* Quick Brochure Download Options in Hero */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <span className="text-xs text-slate-500 font-medium">Download Official Brochures:</span>
              <a
                href="/SmartiDP-EDMS-Product-Brochure.pdf"
                download="SmartiDP-EDMS-Product-Brochure.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#F0FDF4] border border-slate-300 hover:border-[#14532D]/30 text-slate-800 hover:text-[#14532D] text-xs font-semibold shadow-2xs transition-all"
              >
                <Download className="h-3.5 w-3.5 text-[#14532D]" />
                <span>Product Brochure (PDF)</span>
              </a>
              <a
                href="/SmartiDP-EDMS-Compliance-Brochure.pdf"
                download="SmartiDP-EDMS-Compliance-Brochure.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#F0FDF4] border border-slate-300 hover:border-[#14532D]/30 text-slate-800 hover:text-[#14532D] text-xs font-semibold shadow-2xs transition-all"
              >
                <Download className="h-3.5 w-3.5 text-[#14532D]" />
                <span>Compliance Brochure (PDF)</span>
              </a>
            </div>
          </div>

          {/* Centered Demonstration Request Form */}
          <div className="max-w-4xl mx-auto bg-white border border-slate-200/90 p-8 sm:p-12 rounded-3xl shadow-xl shadow-slate-900/5">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="h-16 w-16 rounded-full bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mx-auto border border-[#14532D]/20">
                  <Check className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Demonstration Request Received
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.firstName}</strong>. A dedicated SmartiDP solutions architect will contact you at <strong>{formData.email}</strong> within 2 business hours to coordinate demonstration credentials.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#14532D] hover:bg-[#166534] text-white text-xs font-semibold hover:opacity-95 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 mb-8 border-b border-slate-100">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900">
                      Request an Executive Demonstration
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 font-normal">
                      Fields marked with an asterisk (*) are required for tailored demonstration setup.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] text-[#14532D] text-xs font-medium self-start sm:self-auto">
                    <Clock className="h-3.5 w-3.5" />
                    2-Hour SLA Response
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Sarah"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#14532D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#14532D] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#14532D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#14532D] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Organization / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Global Life Sciences Corp"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#14532D] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Industry Vertical *
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#14532D] transition-colors"
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
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Preferred Hosting Model *
                      </label>
                      <select
                        value={formData.deployment}
                        onChange={(e) => setFormData({ ...formData, deployment: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#14532D] transition-colors"
                      >
                        <option>SaaS (Multi-Tenant Cloud)</option>
                        <option>Dedicated Private Cloud (AWS/Azure)</option>
                        <option>On-Premise / Air-Gapped Kubernetes</option>
                        <option>Undecided / Open to Recommendation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Specific Requirements or Document Scope
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your document volumes, regulatory requirements (e.g. 21 CFR Part 11), or current systems..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#14532D] transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white text-sm font-bold shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 group"
                    >
                      <span>Submit Demonstration Request</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Global Office Locations & Direct Enterprise Channels */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-2">
              Worldwide Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Global Headquarters & Delivery Hubs
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal">
              Direct access to our architecture, implementation, and regulatory support teams across North America and Asia-Pacific.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Austin, TX USA Head Office */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#14532D]/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold font-mono text-[#14532D] bg-[#F0FDF4] px-3.5 py-1.5 rounded-full border border-[#14532D]/15">
                    USA HEAD OFFICE
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Austin, TX</span>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] border border-emerald-900/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      USA Head Office · SmartIDP Group Inc.
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      5900 Balcones Drive STE 13688<br />
                      Austin, TX 78731, USA
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#F0FDF4] text-[#14532D] border border-emerald-900/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:info@smartidp.ai" className="text-slate-700 hover:text-[#14532D] font-medium transition-colors">
                    info@smartidp.ai
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#F0FDF4] text-[#14532D] border border-emerald-900/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a href="tel:+918065904278" className="text-slate-700 hover:text-[#14532D] font-medium transition-colors">
                    +91 8065904278
                  </a>
                </div>
              </div>
            </div>

            {/* Hyderabad India / ODC Operations */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#14532D]/30 transition-all">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold font-mono text-[#14532D] bg-[#F0FDF4] px-3.5 py-1.5 rounded-full border border-[#14532D]/15">
                    INDIA / ODC
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Hyderabad, IN</span>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] border border-emerald-900/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      India / ODC · SmartIDP India Operations
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1 font-normal">
                      3rd Floor, Shriya Bldg, Punjagutta<br />
                      Hyderabad 500082, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#F0FDF4] text-[#14532D] border border-emerald-900/10 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <a href="mailto:info@smartidp.ai" className="text-slate-700 hover:text-[#14532D] font-medium transition-colors">
                    info@smartidp.ai
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[#F0FDF4] text-[#14532D] border border-emerald-900/10 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <a href="tel:+918065904278" className="text-slate-700 hover:text-[#14532D] font-medium transition-colors">
                    +91 8065904278
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Official Platform Documentation & Brochure Downloads */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-2">
              Official Documentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Download Executive Brochures
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal">
              Direct access to our complete product architecture specifications and regulatory compliance validation frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Brochure 1: Product Overview */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#14532D]/30 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold font-mono text-[#14532D] bg-[#F0FDF4] px-3.5 py-1.5 rounded-full border border-[#14532D]/15">
                    PRODUCT ARCHITECTURE
                  </span>
                  <span className="text-xs text-slate-500 font-mono">PDF · 4.6 MB</span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#F0FDF4] text-[#14532D] border border-emerald-900/10 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#14532D] transition-colors">
                      SmartiDP EDMS Product Brochure
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Enterprise Document Management Platform Overview
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Comprehensive 20-page guide covering the 8 foundational capability domains, intelligent OCR ingest engine, visual BPMN 2.0 workflow designer, enterprise integration APIs, and hybrid deployment models.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#14532D]" />
                    <span>8 Integrated Core Capability Domains</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#14532D]" />
                    <span>Multi-Modal OCR & Neural Data Extraction</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#14532D]" />
                    <span>Enterprise ERP / CRM Integration Architecture</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="/SmartiDP-EDMS-Product-Brochure.pdf"
                  download="SmartiDP-EDMS-Product-Brochure.pdf"
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Product PDF</span>
                </a>
                <a
                  href="/SmartiDP-EDMS-Product-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-[#14532D] text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                >
                  <span>Preview</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Brochure 2: Compliance & Regulatory Guide */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#14532D]/30 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold font-mono text-[#14532D] bg-[#F0FDF4] px-3.5 py-1.5 rounded-full border border-[#14532D]/15">
                    REGULATORY COMPLIANCE
                  </span>
                  <span className="text-xs text-slate-500 font-mono">PDF · 2.8 MB</span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#F0FDF4] text-[#14532D] border border-emerald-900/10 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#14532D] transition-colors">
                      SmartiDP EDMS Compliance Brochure
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Regulatory Controls & Computer Systems Validation
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Detailed technical compliance guide for regulated life sciences, healthcare, medical devices, and financial services. Details FDA 21 CFR Part 11, EU Annex 11, and our pre-packaged GAMP 5 validation accelerator pack.
                </p>

                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#14532D]" />
                    <span>FDA 21 CFR Part 11 & EU GMP Annex 11 Controls</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#14532D]" />
                    <span>GxP Validation Accelerator Pack (IQ/OQ/PQ)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#14532D]" />
                    <span>ALCOA+ Cryptographic Audit Trail Security</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="/SmartiDP-EDMS-Compliance-Brochure.pdf"
                  download="SmartiDP-EDMS-Compliance-Brochure.pdf"
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Compliance PDF</span>
                </a>
                <a
                  href="/SmartiDP-EDMS-Compliance-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3 px-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-[#14532D] text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                >
                  <span>Preview</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Frequently Asked Enterprise Questions */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] text-[#14532D] text-xs font-semibold mb-3">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
                Frequently Asked Enterprise Questions
              </h2>
            </div>

            <div className="space-y-3.5">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaq === idx
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left flex items-center justify-between text-sm font-semibold text-slate-900 hover:text-[#14532D] hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span>{item.q}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 text-[#14532D] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-700 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {item.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom Security & Governance Assurance Banner */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] flex items-center justify-center shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-base">
                  Pre-Signed Mutual NDA & Vendor Security Questionnaires
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Standard mutual NDAs, SOC 2 Type II reports, and vendor assessment documents processed within 24 hours.
                </p>
              </div>
            </div>
            <a
              href="mailto:info@smartidp.ai"
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors shrink-0"
            >
              Request Security Pack
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
