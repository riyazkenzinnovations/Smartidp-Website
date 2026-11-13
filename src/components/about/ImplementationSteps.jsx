import React, { useEffect, useRef, useState } from 'react'
import { Award, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react'
import { IMPLEMENTATION_AND_SUCCESS } from '../../data/brochureData'

// Cycling emerald/forest green gradients for the 7 steps
const STEP_COLORS = [
  'linear-gradient(135deg, #064E3B, #14532D)',
  'linear-gradient(135deg, #14532D, #166534)',
  'linear-gradient(135deg, #166534, #15803D)',
  'linear-gradient(135deg, #15803D, #16a34a)',
  'linear-gradient(135deg, #16a34a, #22c55e)',
  'linear-gradient(135deg, #14532D, #166534)',
  'linear-gradient(135deg, #166534, #15803D)',
]

export default function ImplementationSteps() {
  const steps =
    IMPLEMENTATION_AND_SUCCESS?.methodologySteps ||
    IMPLEMENTATION_AND_SUCCESS?.methodology ||
    []
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [activeStep, setActiveStep] = useState(null)

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
      aria-labelledby="methodology-heading"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%)' }}
    >
      {/* Background ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="abt-orb3 absolute top-1/2 left-1/2 rounded-full"
          style={{
            width: 850,
            height: 850,
            background: 'radial-gradient(circle, rgba(20,83,45,0.035) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* ── SECTION HEADER ───────────────────────────────────── */}
        <div
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          {/* Eyebrow Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 shadow-2xs"
            style={{
              background: 'rgba(255,255,255,0.95)',
              border: '1px solid rgba(20,83,45,0.18)',
            }}
          >
            <Award className="h-3.5 w-3.5 text-[#14532D]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#14532D]">
              Delivery Methodology
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
          </div>

          <h2
            id="methodology-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-5"
          >
            7-Step Implementation{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #14532D 0%, #166534 50%, #15803D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Methodology
            </span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed max-w-xl mx-auto font-normal">
            {IMPLEMENTATION_AND_SUCCESS.intro}
          </p>
        </div>

        {/* ── DESKTOP HORIZONTAL TIMELINE (≥ lg) ──────────────────── */}
        <div
          className="hidden lg:block transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
            transitionDelay: '150ms',
          }}
        >
          {/* Connecting Rail with Traveling Light Beam Animation */}
          <div className="relative flex items-center justify-between px-[3.5%] mb-7">
            {/* Base grey track */}
            <div
              className="absolute left-[3.5%] right-[3.5%] top-1/2 h-[3px] -translate-y-1/2 rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(90deg, rgba(20,83,45,0.12), rgba(21,128,61,0.25) 50%, rgba(20,83,45,0.12))',
              }}
            >
              {/* Animated traveling light beam */}
              <div className="abt-beam-h" />
            </div>

            {/* 7 Glowing Step Nodes along the Rail */}
            {steps.map((_, idx) => {
              const isSelected = activeStep === idx
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(isSelected ? null : idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="relative z-10 h-6 w-6 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center"
                  style={{
                    background: STEP_COLORS[idx],
                    boxShadow: isSelected
                      ? '0 0 0 6px rgba(20,83,45,0.22), 0 4px 16px rgba(20,83,45,0.3)'
                      : '0 2px 8px rgba(20,83,45,0.18)',
                    transform: isSelected ? 'scale(1.35)' : 'scale(1)',
                  }}
                >
                  <span className="h-2 w-2 rounded-full bg-white opacity-90" />
                </div>
              )
            })}
          </div>

          {/* 7 Step Cards with Interactive Elevation */}
          <div className="grid grid-cols-7 gap-3.5">
            {steps.map((s, idx) => {
              const isSelected = activeStep === idx
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(isSelected ? null : idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="group relative p-5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between"
                  style={{
                    background: isSelected
                      ? 'linear-gradient(145deg, rgba(240,253,244,0.98), rgba(220,252,231,0.65))'
                      : '#FFFFFF',
                    border: isSelected
                      ? '1.5px solid rgba(20,83,45,0.4)'
                      : '1px solid rgba(226,232,240,0.95)',
                    boxShadow: isSelected
                      ? '0 16px 44px -8px rgba(20,83,45,0.18)'
                      : '0 2px 10px rgba(15,23,42,0.03)',
                    transform: isSelected ? 'translateY(-8px)' : 'translateY(0)',
                  }}
                >
                  {/* Top Glowing Accent Bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3.5px] rounded-t-2xl transition-all duration-300"
                    style={{
                      background: STEP_COLORS[idx],
                      opacity: isSelected ? 1 : 0.75,
                    }}
                  />

                  <div>
                    {/* Header: Step Number & Phase */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="h-9 w-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm text-white shadow-2xs transition-transform duration-300 group-hover:scale-110"
                        style={{ background: STEP_COLORS[idx] }}
                      >
                        {s.step}
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
                        Phase 0{idx + 1}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3
                      className="font-bold text-sm mb-3 leading-snug transition-colors duration-200"
                      style={{ color: isSelected ? '#14532D' : '#0F172A' }}
                    >
                      {s.name}
                    </h3>

                    {/* Divider */}
                    <div
                      className="h-px mb-3"
                      style={{
                        background: 'linear-gradient(90deg, rgba(226,232,240,0.9), transparent)',
                      }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {s.desc}
                  </p>

                  {/* Selected Active Checkmark */}
                  {isSelected && (
                    <CheckCircle2 className="absolute top-3.5 right-3.5 h-4 w-4 text-[#14532D] opacity-60" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* ── MOBILE / TABLET VERTICAL TIMELINE (< lg) ───────────────────── */}
        <div
          className="lg:hidden relative transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '150ms',
          }}
        >
          {/* Vertical Rail with Traveling Beam */}
          <div
            className="absolute left-[23px] top-6 bottom-6 w-[3px] rounded-full overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom, rgba(20,83,45,0.15), rgba(21,128,61,0.3) 50%, rgba(20,83,45,0.15))',
            }}
          >
            <div className="abt-beam-v" />
          </div>

          <div className="space-y-3.5 pl-1">
            {steps.map((s, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div
                  className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0 font-mono font-bold text-sm text-white z-10 relative shadow-sm"
                  style={{ background: STEP_COLORS[idx] }}
                >
                  {s.step}
                </div>
                <div
                  className="flex-1 p-4.5 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-bold text-slate-900 text-base">{s.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Phase 0{idx + 1}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── EXECUTIVE COMMITMENT FOOTER CARD ────────────────────────── */}
        <div
          className="mt-14 lg:mt-16 transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transitionDelay: '300ms',
          }}
        >
          <div
            className="relative overflow-hidden rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-all duration-300 hover:shadow-md"
            style={{
              background: 'linear-gradient(135deg, rgba(240,253,244,0.95), rgba(255,255,255,0.8))',
              border: '1px solid rgba(20,83,45,0.15)',
              boxShadow: '0 2px 14px rgba(20,83,45,0.06)',
            }}
          >
            <div
              className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
              style={{
                background: 'linear-gradient(135deg, #14532D, #15803D)',
              }}
            >
              <Award className="h-5 w-5 text-white" />
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              <span className="font-bold text-slate-900">Our commitment: </span>
              {IMPLEMENTATION_AND_SUCCESS.commitment}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
