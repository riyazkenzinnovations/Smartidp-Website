import React, { useState } from 'react'
import { Mail, Phone, Building2, Globe, Check, ArrowRight, ShieldCheck, Sparkles, Clock, MapPin } from 'lucide-react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
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
    <section id="contact" className="py-24 bg-[#F5F7F5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold">
              <Mail className="h-3.5 w-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] tracking-tight">
              Ready to Transform How Your Enterprise Governs Information?
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Book a tailored demonstration with our solutions engineers. We will walk through your exact document types, compliance obligations (such as FDA Part 11 or ISO 9001/13485), and existing ERP/ECM integrations.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-200 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#E8F3EC] text-[#14532D] flex items-center justify-center shrink-0">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Official Portal</div>
                  <a href="https://www.smartidp.ai" target="_blank" rel="noopener noreferrer" className="text-[#14532D] hover:underline">
                    www.smartidp.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#E8F3EC] text-[#14532D] flex items-center justify-center shrink-0">
                  <Building2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Enterprise Provider</div>
                  <div className="text-slate-600">Kenz Innovations — SmartiDP EDMS Division</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#E8F3EC] text-[#14532D] flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Rapid Response SLA</div>
                  <div className="text-slate-600">Enterprise enquiries answered within 2 business hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#E8F3EC] text-[#14532D] flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Enterprise Support & GxP Validation</div>
                  <div className="text-slate-600">Pre-packaged URS templates & IQ/OQ/PQ documentation accelerators</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="h-16 w-16 rounded-full bg-[#E8F3EC] text-[#14532D] flex items-center justify-center mx-auto border border-[#14532D]/20 shadow-xs">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#14532D]">Enquiry Received</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Kenz Innovations. A senior solutions consultant specializing in <strong>{formData.industry}</strong> will contact you within 2 business hours with platform demonstration credentials.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#E8F3EC] text-[#14532D] text-xs font-bold hover:bg-[#14532D] hover:text-white transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#14532D]">
                    Schedule a Personalised Demonstration
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Fill out the form below to receive a demo tailored to your industry and regulatory scope.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F7F5] border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jenkins"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F7F5] border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah.jenkins@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F7F5] border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F7F5] border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Organization / Company *</label>
                      <input
                        type="text"
                        required
                        placeholder="BioHealth Therapeutics Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F7F5] border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Industry Vertical *</label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F7F5] border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white cursor-pointer"
                      >
                        <option>Pharmaceuticals & Biotech</option>
                        <option>Medical Devices (ISO 13485)</option>
                        <option>Healthcare & Clinical (HIPAA)</option>
                        <option>Banking & Financial Services (BFSI)</option>
                        <option>Government & Public Sector</option>
                        <option>Manufacturing & Energy (ISO 9001)</option>
                        <option>Legal & Professional Services</option>
                        <option>Laboratories & CROs (GLP/GCP)</option>
                        <option>Other Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Process Focus</label>
                      <select
                        value={formData.processInterest}
                        onChange={(e) => setFormData({ ...formData, processInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F7F5] border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white cursor-pointer"
                      >
                        <option>Controlled Document & SOP Lifecycle</option>
                        <option>AI-Powered Accounts Payable (AP)</option>
                        <option>Contract Lifecycle Management (CLM)</option>
                        <option>Records Retention & Legal Hold (ISO 15489)</option>
                        <option>GxP Electronic Batch Records & Validation</option>
                        <option>HR Digital Personnel Dossiers</option>
                        <option>Complete Enterprise Migration from Legacy ECM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Deployment Preference</label>
                      <select
                        value={formData.deployment}
                        onChange={(e) => setFormData({ ...formData, deployment: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F7F5] border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white cursor-pointer"
                      >
                        <option>SaaS (Cloud Managed, Regional Residency)</option>
                        <option>Dedicated Private Cloud (Single-Tenant)</option>
                        <option>On-Premise (Air-Gapped / Bare Metal)</option>
                        <option>Undecided / Open to Recommendation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Specific Requirements or Comments</label>
                    <textarea
                      rows={3}
                      placeholder="Please mention your current document volume, regulatory targets, or legacy systems to integrate..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5F7F5] border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Demonstration & Compliance Package</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-1">
                    Your details are protected under GDPR & ISO 27001 policies. Zero data sharing guaranteed.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

