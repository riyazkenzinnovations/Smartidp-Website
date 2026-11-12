import React from 'react'
import { Award } from 'lucide-react'
import { IMPLEMENTATION_AND_SUCCESS } from '../../data/brochureData'

export default function ImplementationSteps() {
  const steps = IMPLEMENTATION_AND_SUCCESS?.methodologySteps || IMPLEMENTATION_AND_SUCCESS?.methodology || []

  return (
    <section aria-labelledby="methodology-heading" className="py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#14532D] text-xs font-semibold mb-3 border border-[#14532D]/15 shadow-2xs">
            <Award className="h-3.5 w-3.5 text-[#14532D]" />
            <span className="uppercase tracking-wider text-[11px] font-bold">Delivery Methodology</span>
          </div>
          <h2 id="methodology-heading" className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            7-Step Implementation Methodology
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {IMPLEMENTATION_AND_SUCCESS.intro}
          </p>
        </div>

        {/* Desktop Horizontal Numbered Timeline (>= lg) */}
        <div className="hidden lg:grid grid-cols-7 gap-4">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#14532D]/35 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#14532D] bg-[#F0FDF4] px-2.5 py-1 rounded-lg border border-[#14532D]/15 font-mono">
                    {s.step}
                  </span>
                  <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                    Phase 0{idx + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-2 leading-snug group-hover:text-[#14532D] transition-colors">
                  {s.name}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-3 border-t border-slate-100 font-normal">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Timeline (< lg) */}
        <div className="lg:hidden space-y-3.5">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-4"
            >
              <div className="h-10 w-10 rounded-xl bg-forest-gradient text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-xs font-mono">
                {s.step}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 text-base">
                    {s.name}
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Phase 0{idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
