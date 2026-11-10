import React from 'react'
import { Sparkles, ArrowRight, Play, CheckCircle2, ShieldCheck, FileText, Check, Lock, Users, Clock } from 'lucide-react'

export default function Hero({ onOpenDemoModal, onOpenVideoModal }) {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F5F7F5] via-white to-white border-b border-slate-200/70">
      {/* Background soft green radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#E8F3EC] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Product Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-6 shadow-xs">
          <Sparkles className="h-3.5 w-3.5 text-[#14532D]" />
          <span>KENZ INNOVATIONS · SMARTIDP EDMS 2026</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#14532D] max-w-5xl mx-auto leading-[1.12]">
          The Intelligent Platform for <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14532D] via-[#064E3B] to-emerald-700">Enterprise Documents.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-normal">
          Capture, manage, automate, secure and govern every document across your enterprise — on one 
          AI-powered, compliance-ready platform built for regulated and non-regulated industries.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white font-semibold text-base shadow-lg shadow-emerald-950/15 hover:shadow-xl transition-all cursor-pointer"
          >
            <span>Request a Personalised Demo</span>
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={onOpenVideoModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F5F7F5] text-slate-800 hover:text-[#14532D] font-semibold text-base border border-slate-300 transition-all shadow-xs cursor-pointer group"
          >
            <div className="h-6 w-6 rounded-full bg-[#E8F3EC] text-[#14532D] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Play className="h-3 w-3 fill-current ml-0.5" />
            </div>
            <span>Watch Platform Tour</span>
          </button>
        </div>

        {/* Key Metrics directly from Brochure Page 2 */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="p-5 rounded-2xl glass-card-green text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#14532D] font-mono">12+</div>
            <div className="text-xs font-semibold text-slate-700 mt-1 uppercase tracking-wider">
              Global Regulations & Standards Supported
            </div>
          </div>
          <div className="p-5 rounded-2xl glass-card-green text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#14532D] font-mono">360°</div>
            <div className="text-xs font-semibold text-slate-700 mt-1 uppercase tracking-wider">
              Document Lifecycle Coverage
            </div>
          </div>
          <div className="p-5 rounded-2xl glass-card-green text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#14532D] font-mono">3</div>
            <div className="text-xs font-semibold text-slate-700 mt-1 uppercase tracking-wider">
              Deployment Models (SaaS, Private, On-Prem)
            </div>
          </div>
          <div className="p-5 rounded-2xl glass-card-green text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#14532D] font-mono">100%</div>
            <div className="text-xs font-semibold text-slate-700 mt-1 uppercase tracking-wider">
              Actions Logged in Immutable Audit Trail
            </div>
          </div>
        </div>

        {/* Professional EDMS Interface Mockup (Brochure Page 9 Representation) */}
        <div className="mt-14 max-w-5xl mx-auto text-left rounded-2xl border border-slate-300/80 bg-white shadow-xl overflow-hidden">
          {/* Top Window Chrome */}
          <div className="px-5 py-3 bg-[#F5F7F5] border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300 inline-block" />
              <span className="ml-3 text-slate-500 font-medium">edms.yourcompany.com / documents / SOP-QA-0142</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8F3EC] text-[#14532D] font-bold text-[10px]">
                <ShieldCheck className="h-3 w-3" />
                21 CFR Part 11 Validated
              </span>
            </div>
          </div>

          {/* Inner Interface Simulation */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white">
            {/* Document Content View */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-[#14532D]">
                    SOP-QA-0142 · Deviation Handling & Corrective Actions
                  </h3>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Standard Operating Procedure · Quality Assurance · Global Enterprise Release
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#14532D] text-white text-xs font-bold">
                  Effective v4.0
                </span>
              </div>

              {/* Verified Electronic Signature Box (Brochure Page 9 & 16) */}
              <div className="p-3.5 rounded-xl bg-[#E8F3EC]/80 border border-[#14532D]/20 text-xs text-slate-800 flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#14532D] text-white shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-bold text-[#14532D]">
                    Digitally Signed & Approved by Quality Assurance Head
                  </div>
                  <div className="text-[11px] text-slate-600 mt-0.5">
                    Date & Time: <span className="font-mono font-medium">2026-03-14 09:42 UTC</span> · Meaning: <strong className="text-slate-900">Regulatory Approval</strong> · Cryptographic SHA-256 Binding
                  </div>
                </div>
              </div>

              {/* Document Text Snippet */}
              <div className="p-4 rounded-xl bg-[#F5F7F5] border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans space-y-2">
                <div className="font-bold text-slate-900">1. Purpose & Scope</div>
                <p>
                  This standard operating procedure defines the systematic identification, risk assessment, root cause investigation, and escalation protocol for all non-conformances across GxP manufacturing facilities.
                </p>
                <div className="font-bold text-slate-900 pt-1">2. Responsibilities</div>
                <p>
                  Document owners, parallel reviewers, and qualified delegates must authenticate via two-component credentials prior to executing formal disposition or lifecycle transitions.
                </p>
              </div>
            </div>

            {/* Sidebar Metadata & Audit Trail */}
            <div className="lg:col-span-4 space-y-4 border-t lg:border-t-0 lg:border-l lg:border-slate-100 lg:pl-6 pt-4 lg:pt-0">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#14532D] mb-2 flex items-center justify-between">
                  <span>Document Properties</span>
                  <span className="text-[10px] text-slate-400 font-mono">ISO 9001:2015</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Document Type:</span>
                    <span className="font-medium text-slate-800">Controlled SOP</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Owner:</span>
                    <span className="font-medium text-slate-800">Quality Assurance</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Site Scope:</span>
                    <span className="font-medium text-slate-800">All Manufacturing Sites</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Next Review:</span>
                    <span className="font-medium text-emerald-800">2028-03-14</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#14532D] mb-2">
                  Tamper-Evident Audit Trail
                </div>
                <div className="space-y-2 text-[11px] font-mono">
                  <div className="p-2 rounded bg-[#E8F3EC] text-slate-800 flex items-center justify-between">
                    <span>09:42 · Approved (e-signature)</span>
                    <Check className="h-3 w-3 text-[#14532D]" />
                  </div>
                  <div className="p-2 rounded bg-slate-50 text-slate-600 flex items-center justify-between">
                    <span>09:15 · Review completed (3/3)</span>
                    <Check className="h-3 w-3 text-slate-400" />
                  </div>
                  <div className="p-2 rounded bg-slate-50 text-slate-600 flex items-center justify-between">
                    <span>08:02 · Redline comment resolved</span>
                    <Check className="h-3 w-3 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Badges Carousel / Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
            Engineered & Certified for Global Regulatory Frameworks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              '21 CFR Part 11',
              'EU GMP Annex 11',
              'ISO 9001:2015',
              'ISO 13485:2016',
              'ISO/IEC 27001',
              'GDPR & HIPAA',
              'SOC 2 Type II',
              'ISO 15489',
              'eIDAS & ESIGN'
            ].map((reg, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg bg-[#E8F3EC] border border-[#14532D]/15 text-[#14532D] text-xs font-bold shadow-2xs"
              >
                {reg}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
