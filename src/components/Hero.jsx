import React from 'react'
import whiteBgAnimation from '../assets/SmartIDP_WhiteBG_Animation.mp4'
import { Sparkles, ArrowRight, Play, CheckCircle2, ShieldCheck, Cpu, FileText, Check, Lock, Users, Clock } from 'lucide-react'

export default function Hero({ onOpenDemoModal, onOpenVideoModal }) {
  return (
    <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F7F5] via-white to-white border-b border-slate-200/70">
      {/* Background soft green radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#E8F3EC] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Heading, Copy, CTAs & Metrics */}
          <div className="lg:col-span-6 text-left space-y-6">
            {/* Top Product Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#14532D]" />
              <span>KENZ INNOVATIONS · SMARTIDP EDMS 2026</span>
            </div>

            {/* Hero Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#14532D] leading-[1.12]">
              The Intelligent Platform for{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14532D] via-[#064E3B] to-emerald-700">
                Enterprise Documents.
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
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

            {/* Key Metrics directly from Brochure Page 2 (2x2 Grid) */}
            <div className="pt-2 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl glass-card-green">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#14532D] font-mono">12+</div>
                <div className="text-[11px] font-semibold text-slate-700 mt-1 uppercase tracking-wider leading-snug">
                  Global Regulations Supported
                </div>
              </div>
              <div className="p-4 rounded-xl glass-card-green">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#14532D] font-mono">360°</div>
                <div className="text-[11px] font-semibold text-slate-700 mt-1 uppercase tracking-wider leading-snug">
                  Lifecycle Coverage
                </div>
              </div>
              <div className="p-4 rounded-xl glass-card-green">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#14532D] font-mono">3</div>
                <div className="text-[11px] font-semibold text-slate-700 mt-1 uppercase tracking-wider leading-snug">
                  Deployment Models
                </div>
              </div>
              <div className="p-4 rounded-xl glass-card-green">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#14532D] font-mono">100%</div>
                <div className="text-[11px] font-semibold text-slate-700 mt-1 uppercase tracking-wider leading-snug">
                  Audit Trail Logging
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean WhiteBG Video Showcase */}
          <div className="lg:col-span-6 w-full mt-6 lg:mt-0 flex items-center justify-center">
            <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden flex items-center justify-center">
              <video 
                src={whiteBgAnimation} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto max-h-[500px] object-contain bg-white" 
              />
            </div>
          </div>

        </div>

        {/* Regulatory Badges Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200 text-center">
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
