import React from 'react'
import { Sparkles, Eye, Building2, ShieldCheck, Zap, Layers } from 'lucide-react'

export default function Hero({ onOpenDemoModal }) {
  return (
    <section className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/40 text-indigo-300 text-xs font-medium mb-8 backdrop-blur shadow-sm">
        <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
        <span>Next-Gen Vision-Language Models & Human-In-The-Loop AI</span>
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
        Turn Any Unstructured Document into <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300">Clean, Validated Data</span>
      </h1>

      <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
        SmartIDP automates document ingestion, multi-modal layout extraction, complex table reconstruction, and 
        ERP synchronization in under 450ms with 99.8% precision.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#interactive-demo"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all border border-indigo-400/30 cursor-pointer"
        >
          <Eye className="h-5 w-5" />
          <span>Try Live Document Demo</span>
        </a>
        <button
          onClick={onOpenDemoModal}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base border border-slate-700/70 transition-all shadow-md cursor-pointer"
        >
          <Building2 className="h-5 w-5 text-slate-400" />
          <span>Request Enterprise Pilot</span>
        </button>
      </div>

      {/* Hero Proof Metrics */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur">
          <div className="text-3xl sm:text-4xl font-extrabold text-white">99.8%</div>
          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Extraction Accuracy</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur">
          <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400">&lt; 400ms</div>
          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Average Latency</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur">
          <div className="text-3xl sm:text-4xl font-extrabold text-white">85%+</div>
          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Processing Cost Reduction</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur">
          <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">SOC 2 / HIPAA</div>
          <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Certified Compliance</div>
        </div>
      </div>

      {/* Enterprise Logos Bar */}
      <div className="mt-16 pt-8 border-t border-slate-800/80">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
          Trusted by modern leaders in FinTech, Logistics, Insurance, and Global Supply Chains
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all">
          <span className="font-bold text-lg text-slate-300 tracking-wider">NOVOPAY</span>
          <span className="font-bold text-lg text-slate-300 tracking-wider">MEDICAREX</span>
          <span className="font-bold text-lg text-slate-300 tracking-wider">APEX LOGISTICS</span>
          <span className="font-bold text-lg text-slate-300 tracking-wider">CLEARCAPITAL</span>
          <span className="font-bold text-lg text-slate-300 tracking-wider">SYNTHETIX</span>
        </div>
      </div>
    </section>
  )
}

