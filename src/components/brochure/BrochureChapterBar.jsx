import React from 'react'

const CHAPTERS = [
  { id: 'intelligent-capture', num: '01', name: 'Capture' },
  { id: 'record-lifecycle', num: '02', name: 'Lifecycle' },
  { id: 'workflow-automation', num: '03', name: 'Workflow' },
  { id: 'user-experience', num: '04', name: 'User Experience' },
  { id: 'productivity-anywhere', num: '05', name: 'Productivity' },
  { id: 'enterprise-integration', num: '06', name: 'Integration' },
  { id: 'platform-architecture', num: '07', name: 'Architecture' },
  { id: 'scalability-performance', num: '08', name: 'Scalability' },
  { id: 'zero-trust-security', num: '09', name: 'Security' }
]

export default function BrochureChapterBar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -90
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 shadow-2xs">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
        <div className="text-[11px] font-bold font-mono text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#14532D]" />
          <span>Platform Explorer:</span>
        </div>
        
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {CHAPTERS.map((ch) => (
            <button
              key={ch.id}
              onClick={() => scrollTo(ch.id)}
              className="px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium text-slate-600 hover:text-[#14532D] hover:bg-[#F0FDF4] border border-transparent hover:border-[#14532D]/20 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5"
            >
              <span className="font-mono text-[10px] text-[#14532D] font-bold">{ch.num}</span>
              <span>{ch.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

