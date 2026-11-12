import React, { useState } from 'react'
import { X, Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: 'Life Sciences / Pharma (GxP)',
    process: 'Controlled SOP Lifecycle & Electronic Signatures'
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-8 shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="h-16 w-16 rounded-full bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mx-auto border border-[#14532D]/20">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#14532D] transition-colors">Demo Request Confirmed</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
              Our enterprise solutions team will reach out to <strong>{formData.email}</strong> within 2 business hours with demonstration credentials tailored to <strong>{formData.industry}</strong>.
            </p>
            <div className="pt-2">
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-[#14532D] hover:bg-[#166534] text-white text-xs font-bold hover:opacity-95 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] text-[#14532D] text-xs font-bold mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>SmartiDP EDMS · Kenz Innovations</span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#14532D] transition-colors">
              Request a Personalised Demonstration
            </h3>
            <p className="text-xs text-slate-600 mt-1 mb-6">
              Experience automated capture, 21 CFR Part 11 electronic signatures, and compliant workflows tailored to your sector.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Robert Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="r.miller@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="Acme Global Health Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Industry</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white"
                  >
                    <option>Life Sciences / Pharma (GxP)</option>
                    <option>Medical Devices (ISO 13485)</option>
                    <option>Healthcare (HIPAA / GDPR)</option>
                    <option>Financial Services & Banking</option>
                    <option>Manufacturing & Energy</option>
                    <option>Legal & Contract Management</option>
                    <option>Government & Public Sector</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Primary Interest</label>
                  <select
                    value={formData.process}
                    onChange={(e) => setFormData({ ...formData, process: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white"
                  >
                    <option>Controlled SOP Lifecycle & Signatures</option>
                    <option>AI-Powered Accounts Payable</option>
                    <option>Contract Lifecycle Management (CLM)</option>
                    <option>Records Retention & Defensible Disposition</option>
                    <option>Validation Accelerator Documentation</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white font-bold text-sm shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Confirm Demonstration Booking</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-[10px] text-slate-500 text-center pt-1">
                Zero spam policy. Covered under Kenz Innovations NDA & privacy governance.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

