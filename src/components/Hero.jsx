import React from 'react'
import whiteBgAnimation from '../assets/SmartIDP_WhiteBG_Animation.mp4'
import { Sparkles, ArrowRight, Play, CheckCircle2, ShieldCheck, FileText, Check, Lock, Users, Clock } from 'lucide-react'

export default function Hero({ onOpenDemoModal, onOpenVideoModal }) {
  return (
    <section className="relative pt-10 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F7F5] via-white to-white border-b border-slate-200/70">
      {/* Background soft green radial ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1720px] h-[500px] pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[#E8F3EC] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Main 2-Column Split: Copy on Left, Elegant Video Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Value Proposition & CTAs */}
          <div className="lg:col-span-6 text-left space-y-6">
            {/* Top Product Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#14532D]" />
              <span>KENZ INNOVATIONS · SMARTIDP EDMS 2026</span>
            </div>

            {/* Hero Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#14532D] leading-[1.14]">
              The Intelligent Platform for{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14532D] via-[#064E3B] to-emerald-700">
                Enterprise Documents.
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-xl">
              Capture, manage, automate, secure and govern every document across your enterprise — on one 
              AI-powered, compliance-ready platform built for regulated and non-regulated industries.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-950/15 hover:shadow-xl transition-all cursor-pointer"
              >
                <span>Request a Personalised Demo</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onOpenVideoModal}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-white hover:bg-[#F5F7F5] text-slate-800 hover:text-[#14532D] font-semibold text-sm sm:text-base border border-slate-300 transition-all shadow-xs cursor-pointer group"
              >
                <div className="h-6 w-6 rounded-full bg-[#E8F3EC] text-[#14532D] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play className="h-3 w-3 fill-current ml-0.5" />
                </div>
                <span>Watch Platform Tour</span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-2 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#14532D]" />
                <span>21 CFR Part 11 Validated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#14532D]" />
                <span>Zero-Trust Security</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-[#14532D]" />
                <span>AI Multimodal OCR</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Framed Video Showcase */}
          <div className="lg:col-span-6 w-full mt-4 lg:mt-0">
            <div className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-br from-[#E8F3EC]/90 via-white to-[#E8F3EC]/50 border border-[#14532D]/15 shadow-xl shadow-emerald-950/5">
              {/* Soft decorative background blur */}
              <div className="absolute -top-8 -right-8 w-36 h-36 bg-emerald-200/40 rounded-full blur-2xl pointer-events-none" />

              {/* Video Player Container */}
              <div className="relative rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs flex items-center justify-center aspect-[16/10] sm:aspect-[16/9]">
                <video 
                  src={whiteBgAnimation} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-contain bg-white" 
                />
              </div>
            </div>
          </div>

        </div>

        {/* 4 Quantified Key Metrics from Brochure Page 2 (Horizontal 4-Column Row) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl glass-card-green hover:shadow-md transition-all text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#14532D] font-mono">12+</div>
            <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wide">
              Global Regulations
            </div>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              Technical controls for 21 CFR Part 11, EU Annex 11, ISO 13485, 9001, GDPR & HIPAA.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card-green hover:shadow-md transition-all text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#14532D] font-mono">360°</div>
            <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wide">
              Lifecycle Coverage
            </div>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              Complete governance from omnichannel capture and workflow to e-signatures & retention.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card-green hover:shadow-md transition-all text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#14532D] font-mono">3</div>
            <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wide">
              Deployment Models
            </div>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              Enterprise Multi-Tenant SaaS, Dedicated Private Cloud, or Self-Hosted On-Premise.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card-green hover:shadow-md transition-all text-left">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#14532D] font-mono">100%</div>
            <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wide">
              Audit Trail Logging
            </div>
            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              Every action, revision, and signature is cryptographically tracked in tamper-evident logs.
            </p>
          </div>
        </div>

        {/* Global Regulatory Badges Carousel / Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-5">
            Engineered & Certified for Global Regulatory Frameworks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
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
                className="px-3 py-1.5 rounded-lg bg-[#E8F3EC] border border-[#14532D]/15 text-[#14532D] text-xs font-bold shadow-2xs"
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
