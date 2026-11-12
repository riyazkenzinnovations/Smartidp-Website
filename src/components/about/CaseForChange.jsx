import React from 'react'
import { ShieldCheck, CheckCircle2 } from 'lucide-react'
import { THE_CASE_FOR_CHANGE, PLATFORM_OVERVIEW } from '../../data/brochureData'

export default function CaseForChange() {
  return (
    <section aria-labelledby="case-for-change-heading" className="py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          
          {/* Left Column: Narrative Copy verbatim from Brochure Page 3 */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] text-[#14532D] text-xs font-semibold border border-[#14532D]/15">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span className="uppercase tracking-wider text-[11px] font-bold">{THE_CASE_FOR_CHANGE.title}</span>
            </div>

            <h2 id="case-for-change-heading" className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight leading-snug">
              {THE_CASE_FOR_CHANGE.subtitle}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {THE_CASE_FOR_CHANGE.intro}
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {THE_CASE_FOR_CHANGE.painPoints.slice(0, 4).map((pt, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700">
                  <div className="font-bold text-slate-900 mb-1">{pt.title}</div>
                  <p className="text-slate-600 leading-relaxed">{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Platform Pillars from Page 4 */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-3.5">
            {PLATFORM_OVERVIEW.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-card-green border border-[#14532D]/15 shadow-2xs hover:border-[#14532D]/35 transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-[#14532D] mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D]" />
                  <span>{pillar.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
