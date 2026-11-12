import React from 'react'
import { CheckCircle2, FileWarning, Sparkles } from 'lucide-react'
import { THE_CASE_FOR_CHANGE } from '../../data/brochureData'

export default function TransformationTable() {
  return (
    <section aria-labelledby="transformation-heading" className="py-14 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] text-[#14532D] text-xs font-semibold mb-3 border border-[#14532D]/15">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider text-[11px] font-bold">Operational Transformation</span>
          </div>
          <h2 id="transformation-heading" className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Traditional Practices vs. SmartiDP EDMS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            A documented operational comparison across six core enterprise information dimensions.
          </p>
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200/90 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700">
                <th scope="col" className="py-4 px-6 w-1/5 text-slate-900">Dimension</th>
                <th scope="col" className="py-4 px-6 w-2/5 text-slate-700">Before (Legacy Process)</th>
                <th scope="col" className="py-4 px-6 w-2/5 text-[#14532D] bg-[#F0FDF4]/60">With SmartiDP EDMS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
              {THE_CASE_FOR_CHANGE.transformation.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors motion-reduce:transition-none">
                  {/* Dimension */}
                  <th scope="row" className="py-4 px-6 font-semibold text-slate-900 align-top text-xs uppercase tracking-wider">
                    {row.dimension}
                  </th>
                  
                  {/* Before */}
                  <td className="py-4 px-6 text-slate-600 leading-relaxed align-top">
                    <div className="flex items-start gap-2.5">
                      <FileWarning className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{row.before}</span>
                    </div>
                  </td>
                  
                  {/* With SmartiDP */}
                  <td className="py-4 px-6 text-slate-900 leading-relaxed align-top bg-[#F0FDF4]/30">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" />
                      <span className="font-medium text-slate-900">{row.withSmartIDP}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Card View (< md) */}
        <div className="md:hidden space-y-4">
          {THE_CASE_FOR_CHANGE.transformation.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-2xs space-y-3.5"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14532D]">
                  {item.dimension}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  0{index + 1}
                </span>
              </div>

              {/* Before */}
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600">
                <div className="font-semibold text-slate-800 mb-1 flex items-center gap-1.5">
                  <FileWarning className="h-3.5 w-3.5 text-amber-600" />
                  <span>Before:</span>
                </div>
                <p className="leading-relaxed">{item.before}</p>
              </div>

              {/* With SmartiDP EDMS */}
              <div className="p-3.5 rounded-xl bg-[#F0FDF4] border border-[#14532D]/20 text-xs text-slate-900">
                <div className="font-semibold text-[#14532D] mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D]" />
                  <span>With SmartiDP EDMS:</span>
                </div>
                <p className="leading-relaxed font-medium">{item.withSmartIDP}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
