import React from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  ShieldCheck,
  Clock,
  Lock,
  Archive,
  Layers,
  CheckCircle2,
  ArrowRight,
  XCircle
} from 'lucide-react'
import { THE_CASE_FOR_CHANGE, BUSINESS_VALUE } from '../data/brochureData'

const PAIN_POINT_ICONS = [
  Search,       // Time lost searching
  ShieldCheck,  // Compliance exposure
  Clock,        // Slow, manual processes
  Lock,         // Security blind spots
  Archive,      // Rising storage & legal risk
  Layers        // Legacy system sprawl
]

export default function OperationalTransformation() {
  const painPoints = THE_CASE_FOR_CHANGE?.painPoints || []
  const transformationRows = THE_CASE_FOR_CHANGE?.transformation || []

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* 1. Header Section (Exact Brochure Copy from Client Data) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 lg:mb-16 gap-6">
          <div className="max-w-4xl xl:max-w-5xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284C7] mb-3">
              <span className="w-5 h-0.5 bg-[#0284C7] inline-block" />
              <span>The Case for Change</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B192C] tracking-tight leading-tight">
              From document chaos to <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0D9488] to-[#10B981]">
                intelligent information flow
              </span>
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
              {THE_CASE_FOR_CHANGE.intro}
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0284C7] font-semibold text-xs sm:text-sm border border-slate-300 shadow-2xs hover:shadow-md transition-all self-start lg:self-auto shrink-0 group"
          >
            <span>Read About Kenz Innovations</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2. Six Pain Point Cards (3x2 Grid Matching Client Image 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 lg:mb-20">
          {painPoints.map((point, idx) => {
            const Icon = PAIN_POINT_ICONS[idx % PAIN_POINT_ICONS.length]
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0284C7]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-11 w-11 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-[#0284C7] group-hover:text-white transition-all shadow-2xs">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0284C7] transition-colors mb-2.5">
                    {point.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* =========================================================================
            COMMENTED OUT: The Transformation Matrix ("The transformation" table)
            ========================================================================= */}
        {/* 3. The Transformation Matrix (Exact Layout from Client Image 1) - COMMENTED OUT */}
        {false && (
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight mb-6">
            The transformation
          </h3>

          {/* Desktop & Tablet Table (md+) */}
          <div className="hidden md:block rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0B1A2F] text-white text-xs font-bold uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6 w-1/5">Dimension</th>
                  <th className="py-4 px-6 w-2/5">Before</th>
                  <th className="py-4 px-6 w-2/5">With SmartiDP EDMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 bg-white">
                {transformationRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-900 align-top">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-6 text-slate-600 align-top leading-relaxed">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.before}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-900 font-semibold align-top leading-relaxed">
                      <div className="flex items-start gap-2 text-emerald-950">
                        <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{row.withSmartIDP}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards (< md) */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {transformationRows.map((row, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">
                  {row.dimension}
                </div>
                <div className="space-y-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                    <XCircle className="h-3.5 w-3.5" />
                    <span>Before</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-5">
                    {row.before}
                  </p>
                </div>
                <div className="space-y-1 pt-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>With SmartiDP EDMS</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-900 leading-relaxed pl-5">
                    {row.withSmartIDP}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}

        {/* 4. Quantified Business Outcomes (Brochure Page 5) */}
        <div className="pt-10 border-t border-slate-200/80">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
            Typical Improvement Areas Identified in Business-Case Workshops
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(BUSINESS_VALUE?.outcomes || []).map((outcome, idx) => {
              const metrics = outcome.metrics || (outcome.desc ? [outcome.desc] : [])
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="text-xl font-extrabold text-[#0284C7] tracking-tight mb-3">
                      {outcome.title}
                    </div>
                    <div className="space-y-2">
                      {metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0284C7] shrink-0 mt-1.5" />
                          <span className="leading-relaxed">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
