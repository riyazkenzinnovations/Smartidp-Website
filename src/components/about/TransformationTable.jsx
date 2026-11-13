import React, { useEffect, useRef, useState } from 'react'
import { CheckCircle2, FileWarning, Sparkles, Activity } from 'lucide-react'
import { THE_CASE_FOR_CHANGE } from '../../data/brochureData'

export default function TransformationTable() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [hoveredRow, setHoveredRow] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 150)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="transformation-heading"
      className="relative overflow-hidden py-20 lg:py-28 bg-white"
    >
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(20,83,45,1) 1px, transparent 1px), linear-gradient(90deg, rgba(20,83,45,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* ── SECTION HEADER ───────────────────────────────────── */}
        <div
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {/* Eyebrow Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 shadow-2xs"
            style={{
              background: 'linear-gradient(135deg, rgba(240,253,244,1), rgba(220,252,231,0.6))',
              border: '1px solid rgba(20,83,45,0.18)',
            }}
          >
            <Sparkles className="h-3.5 w-3.5 text-[#14532D]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#14532D]">
              Operational Transformation
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
          </div>

          <h2
            id="transformation-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight"
          >
            Traditional Practices vs.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #14532D 0%, #166534 50%, #15803D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              SmartiDP EDMS
            </span>
          </h2>

          <p className="text-slate-600 text-base mt-4 leading-relaxed max-w-xl mx-auto font-normal">
            A documented operational comparison across six core enterprise information dimensions.
          </p>
        </div>

        {/* ── DESKTOP COMPARISON TABLE (≥ md) ────────────────────────────── */}
        <div
          className="hidden md:block transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'scale(1)' : 'scale(0.98)',
            transitionDelay: '150ms',
          }}
        >
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              border: '1px solid rgba(226,232,240,0.95)',
              boxShadow: '0 12px 60px -12px rgba(15,23,42,0.08)',
            }}
          >
            {/* Column Headers */}
            <div className="grid grid-cols-12">
              <div
                className="col-span-2 py-5 px-7 flex items-center justify-between"
                style={{ background: '#F8FAFC', borderBottom: '1px solid rgba(226,232,240,0.95)' }}
              >
                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                  Dimension
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400">6 Domains</span>
              </div>
              <div
                className="col-span-5 py-5 px-7 flex items-center gap-3"
                style={{
                  background: '#FFF8F0',
                  borderBottom: '1px solid rgba(226,232,240,0.95)',
                  borderLeft: '1px solid rgba(226,232,240,0.8)',
                }}
              >
                <div
                  className="h-7 w-7 rounded-lg flex items-center justify-center shadow-2xs"
                  style={{ background: 'rgba(245,158,11,0.12)' }}
                >
                  <FileWarning className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-amber-800">
                    Before
                  </div>
                  <div className="text-[10px] text-amber-700/80 font-medium">
                    Legacy Process & Fragmented Tools
                  </div>
                </div>
              </div>
              <div
                className="col-span-5 py-5 px-7 flex items-center justify-between"
                style={{
                  background: 'linear-gradient(135deg, rgba(240,253,244,0.95), rgba(220,252,231,0.6))',
                  borderBottom: '1px solid rgba(20,83,45,0.12)',
                  borderLeft: '1px solid rgba(20,83,45,0.12)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-7 w-7 rounded-lg flex items-center justify-center shadow-2xs"
                    style={{ background: 'rgba(20,83,45,0.15)' }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#14532D]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-[#14532D]">
                      With SmartiDP EDMS
                    </div>
                    <div className="text-[10px] text-[#14532D]/80 font-medium">
                      Intelligent Governed Platform
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 border border-[#14532D]/20 text-[10px] font-bold text-[#14532D]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="abt-beacon-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#14532D]" />
                  </span>
                  <span>Audit-Ready</span>
                </div>
              </div>
            </div>

            {/* Table Rows with Interactive Synchronized Spotlight */}
            {THE_CASE_FOR_CHANGE.transformation.map((row, idx) => {
              const isHov = hoveredRow === idx
              const isLast = idx === THE_CASE_FOR_CHANGE.transformation.length - 1
              return (
                <div
                  key={idx}
                  className="grid grid-cols-12 cursor-default transition-all duration-200"
                  style={{
                    borderBottom: isLast ? 'none' : '1px solid rgba(226,232,240,0.7)',
                  }}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  {/* Dimension Column */}
                  <div
                    className="col-span-2 py-5 px-7 flex items-center transition-colors duration-200"
                    style={{
                      background: isHov ? '#F0FDF4' : '#F8FAFC',
                      borderRight: '1px solid rgba(226,232,240,0.8)',
                    }}
                  >
                    <div>
                      <span className="text-[9px] font-mono font-bold text-slate-400 block mb-0.5">
                        0{idx + 1}
                      </span>
                      <span
                        className="text-xs font-bold uppercase tracking-wider transition-colors duration-200"
                        style={{ color: isHov ? '#14532D' : '#334155' }}
                      >
                        {row.dimension}
                      </span>
                    </div>
                  </div>

                  {/* Before (Legacy) Column */}
                  <div
                    className="col-span-5 py-5 px-7 flex items-start gap-3 transition-colors duration-200"
                    style={{
                      background: isHov ? 'rgba(255,251,235,0.85)' : 'rgba(255,255,255,0.6)',
                      borderRight: '1px solid rgba(226,232,240,0.8)',
                    }}
                  >
                    <FileWarning
                      className="h-4 w-4 shrink-0 mt-0.5 transition-transform duration-200"
                      style={{
                        color: isHov ? '#d97706' : '#f59e0b',
                        transform: isHov ? 'scale(1.15)' : 'scale(1)',
                      }}
                    />
                    <span className="text-sm text-slate-600 leading-relaxed font-normal">
                      {row.before}
                    </span>
                  </div>

                  {/* With SmartiDP EDMS Column */}
                  <div
                    className="col-span-5 py-5 px-7 flex items-start gap-3 transition-colors duration-200"
                    style={{
                      background: isHov
                        ? 'rgba(240,253,244,0.95)'
                        : 'rgba(240,253,244,0.4)',
                    }}
                  >
                    <CheckCircle2
                      className="h-4.5 w-4.5 text-[#14532D] shrink-0 mt-0.5 transition-transform duration-200"
                      style={{
                        transform: isHov ? 'scale(1.2)' : 'scale(1)',
                      }}
                    />
                    <span
                      className="text-sm leading-relaxed transition-colors duration-200"
                      style={{
                        color: isHov ? '#14532D' : '#0F172A',
                        fontWeight: isHov ? 600 : 500,
                      }}
                    >
                      {row.withSmartIDP}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── MOBILE CARDS (< md) ──────────────────────────────── */}
        <div
          className="md:hidden space-y-4 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '150ms',
          }}
        >
          {THE_CASE_FOR_CHANGE.transformation.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs"
            >
              <div
                className="flex items-center justify-between py-3.5 px-5"
                style={{ background: '#F8FAFC', borderBottom: '1px solid rgba(226,232,240,0.8)' }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#14532D]">
                  {item.dimension}
                </span>
                <span className="text-[11px] font-mono font-bold text-slate-400">
                  0{idx + 1}
                </span>
              </div>
              <div
                className="p-4"
                style={{ background: 'rgba(255,251,235,0.5)', borderBottom: '1px solid rgba(226,232,240,0.6)' }}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <FileWarning className="h-3.5 w-3.5 text-amber-500" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Before</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.before}</p>
              </div>
              <div className="p-4" style={{ background: 'rgba(240,253,244,0.6)' }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#14532D]">With SmartiDP EDMS</span>
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-relaxed">{item.withSmartIDP}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
