import React, { useEffect, useRef, useState } from 'react'
import {
  ShieldCheck, CheckCircle2, AlertTriangle, Clock,
  Lock, TrendingUp, Layers, Cpu, Settings2, Sparkles, ArrowRight
} from 'lucide-react'
import { THE_CASE_FOR_CHANGE, PLATFORM_OVERVIEW } from '../../data/brochureData'

const PAIN_ICONS = [Clock, AlertTriangle, TrendingUp, Lock]

const PILLAR_CONFIG = [
  { icon: Layers, gradient: 'linear-gradient(135deg, #14532D, #166534)', light: 'rgba(240,253,244,0.92)' },
  { icon: Cpu, gradient: 'linear-gradient(135deg, #166534, #15803D)', light: 'rgba(236,253,245,0.88)' },
  { icon: Settings2, gradient: 'linear-gradient(135deg, #15803D, #16a34a)', light: 'rgba(240,253,244,0.85)' },
]

export default function CaseForChange() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [hoveredPillar, setHoveredPillar] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 120)
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
      aria-labelledby="case-for-change-heading"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 55%, #F8FAFC 100%)' }}
    >
      {/* Background ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="abt-orb2 absolute -top-24 right-0 rounded-full"
          style={{
            width: 520,
            height: 520,
            background: 'radial-gradient(circle, rgba(20,83,45,0.05) 0%, transparent 70%)',
            transform: 'translateX(30%)',
          }}
        />
        <div
          className="abt-orb1 absolute bottom-0 -left-20 rounded-full"
          style={{
            width: 440,
            height: 440,
            background: 'radial-gradient(circle, rgba(21,128,61,0.04) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* ── MAIN ENCLOSING CARD ───────────────────────────────── */}
        <div
          className="rounded-3xl overflow-hidden transition-all duration-700 ease-out"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(226,232,240,0.95)',
            boxShadow: '0 12px 60px -12px rgba(15,23,42,0.08)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">

            {/* ── LEFT COLUMN: The Case for Change Narrative & 4 Pain Points ─────────────────────── */}
            <div className="p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-between">
              <div>
                {/* Eyebrow Badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(240,253,244,1), rgba(220,252,231,0.6))',
                    border: '1px solid rgba(20,83,45,0.18)',
                  }}
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-[#14532D]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#14532D]">
                    {THE_CASE_FOR_CHANGE.title}
                  </span>
                </div>

                {/* Main Heading */}
                <h2
                  id="case-for-change-heading"
                  className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-[1.2] mb-5"
                >
                  {THE_CASE_FOR_CHANGE.subtitle}
                </h2>

                {/* Introductory Copy */}
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  {THE_CASE_FOR_CHANGE.intro}
                </p>

                {/* 4 Pain Point Cards with Hover Elevate & Glow */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {THE_CASE_FOR_CHANGE.painPoints.slice(0, 4).map((pt, idx) => {
                    const Icon = PAIN_ICONS[idx] || ShieldCheck
                    return (
                      <div
                        key={idx}
                        className="group relative p-5 rounded-2xl overflow-hidden transition-all duration-300 cursor-default bg-[#F8FAFC] border border-slate-200/90 hover:bg-white hover:border-[#14532D]/35 hover:-translate-y-1.5 hover:shadow-lg"
                      >
                        {/* Hover emerald subtle background sheen */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                          style={{
                            background: 'linear-gradient(135deg, rgba(240,253,244,0.6), transparent)',
                          }}
                        />
                        <div className="relative flex items-start gap-3.5">
                          {/* Animated Icon Box */}
                          <div
                            className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 shadow-2xs transition-transform duration-300 group-hover:scale-110"
                            style={{
                              background: 'linear-gradient(135deg, rgba(240,253,244,1), rgba(220,252,231,0.7))',
                              border: '1px solid rgba(20,83,45,0.12)',
                            }}
                          >
                            <Icon className="h-4.5 w-4.5 text-[#14532D]" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-[#14532D] transition-colors">
                              {pt.title}
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed font-normal">
                              {pt.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Platform Overview with 3 Pillars ─────────────────────── */}
            <div
              className="relative p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-between gap-8"
              style={{
                background: 'linear-gradient(145deg, rgba(240,253,244,0.45) 0%, rgba(255,255,255,0.98) 55%)',
              }}
            >
              {/* Subtle background architectural dot pattern */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: 'radial-gradient(circle, #14532D 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              <div className="relative">
                {/* Sub-badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(240,253,244,1), rgba(220,252,231,0.6))',
                    border: '1px solid rgba(20,83,45,0.18)',
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#14532D]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#14532D]">
                    {PLATFORM_OVERVIEW.title}
                  </span>
                </div>

                {/* Sub-heading */}
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight leading-snug mb-3">
                  {PLATFORM_OVERVIEW.subtitle}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  {PLATFORM_OVERVIEW.intro}
                </p>

                {/* 3 Core Platform Pillar Cards */}
                <div className="space-y-4">
                  {PLATFORM_OVERVIEW.pillars.map((pillar, idx) => {
                    const cfg = PILLAR_CONFIG[idx]
                    const Icon = cfg.icon
                    const isHovered = hoveredPillar === idx
                    return (
                      <div
                        key={idx}
                        onMouseEnter={() => setHoveredPillar(idx)}
                        onMouseLeave={() => setHoveredPillar(null)}
                        className="group relative flex items-start gap-4 sm:gap-5 p-5 rounded-2xl overflow-hidden transition-all duration-300 cursor-default"
                        style={{
                          background: isHovered
                            ? 'rgba(255, 255, 255, 0.98)'
                            : cfg.light,
                          border: isHovered
                            ? '1.5px solid rgba(20, 83, 45, 0.35)'
                            : '1px solid rgba(20, 83, 45, 0.12)',
                          boxShadow: isHovered
                            ? '0 12px 32px -4px rgba(20, 83, 45, 0.14)'
                            : '0 2px 8px rgba(15, 23, 42, 0.02)',
                          transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
                        }}
                      >
                        {/* Animated Left Accent Bar */}
                        <div
                          className="absolute left-0 top-4 bottom-4 w-1 rounded-full transition-all duration-300"
                          style={{
                            background: cfg.gradient,
                            opacity: isHovered ? 1 : 0.7,
                          }}
                        />

                        {/* Animated Icon Box */}
                        <div
                          className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0 shadow-2xs transition-transform duration-300 group-hover:scale-110"
                          style={{ background: cfg.gradient }}
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1.5">
                            <span
                              className="text-sm font-bold transition-colors duration-200"
                              style={{ color: isHovered ? '#14532D' : '#0F172A' }}
                            >
                              {pillar.title}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-slate-400">
                              0{idx + 1}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            {pillar.desc}
                          </p>
                        </div>

                        {/* Top glowing shimmer line */}
                        <div
                          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(20,83,45,0.4), transparent)',
                          }}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Bottom Signature Tagline with Shimmer Light Sweep */}
              <div
                className="abt-shimmer-wrap relative rounded-2xl px-6 py-4.5 text-center shadow-md overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #064E3B 0%, #14532D 50%, #166534 100%)',
                }}
              >
                <p className="text-xs sm:text-sm font-semibold text-white/95 tracking-wide">
                  One platform. Every document. Complete control.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
