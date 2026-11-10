import React from 'react'
import smartIdpGif from '../assets/smartIDP.gif'
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

          {/* Right Column: Platform Showcase Frame with smartIDP.gif */}
          <div className="lg:col-span-6 w-full mt-6 lg:mt-0">
            <div className="rounded-2xl sm:rounded-3xl border border-slate-300/80 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
              {/* Top Window Chrome */}
              <div className="px-4 py-3 bg-[#F5F7F5] border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-mono text-[11px]">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300 inline-block" />
                  <span className="ml-2 text-slate-500 font-medium truncate max-w-[150px] sm:max-w-none">
                    app.smartidp.ai / edms / live-stream
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E8F3EC] text-[#14532D] font-bold text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#14532D] animate-ping" />
                    AI Capture Active
                  </span>
                </div>
              </div>

              {/* Animated smartIDP.gif Showcase */}
              <div className="relative aspect-[4/3] sm:aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
                <img 
                  src={smartIdpGif} 
                  alt="SmartiDP EDMS AI Ingestion & Processing" 
                  className="w-full h-full object-contain" 
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs shadow-md">
                  <Cpu className="h-3.5 w-3.5 text-[#14532D] animate-spin" />
                  <span className="text-slate-800 font-semibold text-[11px]">AI Extraction:</span>
                  <span className="text-[#14532D] font-mono font-bold text-[11px]">340ms · 99.8% Accuracy</span>
                </div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="p-3.5 bg-[#F5F7F5] border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D] shrink-0" />
                  <span className="truncate">Omnichannel Ingestion</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D] shrink-0" />
                  <span className="truncate">AI Classification</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D] shrink-0" />
                  <span className="truncate">Part 11 Audit Trail</span>
                </div>
              </div>
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
