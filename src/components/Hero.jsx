import React from 'react'
import smartIdpGif from '../assets/smartIDP.gif'
import { Sparkles, ArrowRight, Play, CheckCircle2, ShieldCheck, Cpu, FileText, Check, Lock, Users, Clock } from 'lucide-react'

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

        {/* Professional EDMS Animated Showcase Frame with smartIDP.gif */}
        <div className="mt-14 max-w-5xl mx-auto text-left rounded-3xl border border-slate-300/80 bg-white shadow-xl overflow-hidden">
          {/* Top Window Chrome */}
          <div className="px-5 py-3.5 bg-[#F5F7F5] border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300 inline-block" />
              <span className="ml-3 text-slate-500 font-medium">app.smartidp.ai / edms / live-stream</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F3EC] text-[#14532D] font-bold text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#14532D] animate-ping" />
                AI Capture & Extraction Active
              </span>
            </div>
          </div>

          {/* Animated smartIDP.gif Showcase */}
          <div className="relative aspect-video max-h-[500px] w-full bg-slate-950 flex items-center justify-center overflow-hidden">
            <img 
              src={smartIdpGif} 
              alt="SmartiDP EDMS AI Ingestion & Processing" 
              className="w-full h-full object-contain" 
            />
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 text-xs shadow-lg">
              <Cpu className="h-4 w-4 text-[#14532D] animate-spin" />
              <span className="text-slate-800 font-semibold">AI Extraction & Classification:</span>
              <span className="text-[#14532D] font-mono font-bold">340ms · 99.8% Accuracy</span>
            </div>
          </div>

          {/* Bottom Feature Badges */}
          <div className="p-4 bg-[#F5F7F5] border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#14532D]" />
              <span>Omnichannel Ingestion & OCR</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#14532D]" />
              <span>Multi-Modal AI Classification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#14532D]" />
              <span>Validation Station with Part 11 Audit</span>
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
