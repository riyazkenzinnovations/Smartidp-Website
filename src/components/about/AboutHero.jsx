import React, { useEffect, useRef, useState } from 'react'
import { Building2, Target, Compass, CheckCircle2, Shield, Layers, Cpu, ArrowRight, Sparkles, Activity } from 'lucide-react'
import { HERO_FACTS, MISSION_VISION } from '../../data/aboutContent'
import { BROCHURE_META, EXECUTIVE_SUMMARY, PLATFORM_OVERVIEW } from '../../data/brochureData'

const PILLAR_ICONS = [Shield, Cpu, Layers]

export default function AboutHero() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [activePillar, setActivePillar] = useState(0)

  useEffect(() => {
    // Immediate activation for above-the-fold or fast transition
    const timer = setTimeout(() => setInView(true), 50)
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
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden bg-white"
      style={{ minHeight: '92vh' }}
    >
      {/* ── Animated Background Ambient Glow & Orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated breathing gradient orb 1 */}
        <div
          className="abt-orb1 absolute rounded-full"
          style={{
            width: 620,
            height: 620,
            top: '-12%',
            left: '-6%',
            background: 'radial-gradient(circle, rgba(20,83,45,0.08) 0%, rgba(20,83,45,0.02) 50%, transparent 70%)',
          }}
        />
        {/* Animated breathing gradient orb 2 */}
        <div
          className="abt-orb2 absolute rounded-full"
          style={{
            width: 520,
            height: 520,
            top: '25%',
            right: '-8%',
            background: 'radial-gradient(circle, rgba(21,128,61,0.07) 0%, rgba(16,185,129,0.02) 50%, transparent 70%)',
          }}
        />
        {/* Subtle center-bottom pulse orb */}
        <div
          className="abt-orb3 absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            bottom: '8%',
            left: '32%',
            background: 'radial-gradient(circle, rgba(20,83,45,0.04) 0%, transparent 70%)',
          }}
        />
        {/* Fine architectural grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(20,83,45,1) 1px, transparent 1px), linear-gradient(90deg, rgba(20,83,45,1) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        {/* Bottom soft ambient gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(248,250,252,0.7))' }}
        />
      </div>

      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-24 pb-20 lg:pt-32 lg:pb-28">

        {/* ── HERO TOP 2-COLUMN SPLIT ─────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">

          {/* Left Column: Eyebrow + Headline + Copy + Closing Note */}
          <div className="lg:col-span-7 space-y-7">

            {/* 1. Live Status Eyebrow Badge with Pulsing Beacon */}
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '60ms',
              }}
            >
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-2xs group cursor-default"
                style={{
                  background: 'linear-gradient(135deg, rgba(240,253,244,1) 0%, rgba(220,252,231,0.7) 100%)',
                  border: '1px solid rgba(20,83,45,0.18)',
                  color: '#14532D',
                }}
              >
                {/* Live pulsing green beacon */}
                <span className="relative flex h-2 w-2">
                  <span className="abt-beacon-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14532D]" />
                </span>
                <Building2 className="h-3.5 w-3.5 text-[#14532D]" />
                <span>
                  About {BROCHURE_META.companyName} · {BROCHURE_META.productName}
                </span>
                <span className="hidden sm:inline-block h-3 w-px bg-[#14532D]/20 mx-0.5" />
                <span className="hidden sm:inline-block text-[10px] text-emerald-800/80 font-semibold normal-case">
                  Continuous Audit-Ready
                </span>
              </div>
            </div>

            {/* 2. Main Executive Headline */}
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                transitionDelay: '140ms',
              }}
            >
              <h1
                id="about-hero-heading"
                className="text-4xl sm:text-5xl xl:text-[3.6rem] font-semibold text-slate-900 tracking-tight leading-[1.12]"
              >
                {EXECUTIVE_SUMMARY.headline}
              </h1>
            </div>

            {/* 3. Verbatim Executive Paragraphs */}
            <div
              className="space-y-4 transition-all duration-700 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(28px)',
                transitionDelay: '220ms',
              }}
            >
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {EXECUTIVE_SUMMARY.paragraph1}
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                {EXECUTIVE_SUMMARY.paragraph2}
              </p>
            </div>

            {/* 4. Highlighted Closing Statement */}
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: '300ms',
              }}
            >
              <div
                className="group relative flex items-start gap-3.5 p-5 sm:p-6 rounded-2xl overflow-hidden cursor-default transition-all duration-300 hover:shadow-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(240,253,244,0.95) 0%, rgba(255,255,255,0.7) 100%)',
                  borderLeft: '4px solid #14532D',
                  borderTop: '1px solid rgba(20,83,45,0.1)',
                  borderRight: '1px solid rgba(20,83,45,0.1)',
                  borderBottom: '1px solid rgba(20,83,45,0.1)',
                }}
              >
                {/* Subtle sheen on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(20,83,45,0.04), transparent)',
                  }}
                />
                <div
                  className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'linear-gradient(135deg, #14532D, #15803D)' }}
                >
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-[#14532D] leading-relaxed">
                  {EXECUTIVE_SUMMARY.closing}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Platform Foundation Card with Hover Glow & Spotlight */}
          <div
            className="lg:col-span-5 transition-all duration-700 ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(32px)',
              transitionDelay: '180ms',
            }}
          >
            <div className="relative">
              {/* Floating top mini badge */}
              <div
                className="abt-float absolute -top-4 -right-2 sm:-right-4 z-20 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold text-[#14532D] shadow-lg backdrop-blur-md"
                style={{
                  background: 'rgba(255,255,255,0.92)',
                  border: '1px solid rgba(20,83,45,0.22)',
                }}
              >
                <Shield className="h-3.5 w-3.5 text-[#14532D]" />
                <span>Zero-Trust Architecture</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Main Glassmorphic Card */}
              <div
                className="rounded-3xl p-7 sm:p-9 relative overflow-hidden backdrop-blur-xl transition-all duration-500"
                style={{
                  background:
                    'linear-gradient(145deg, rgba(209,250,229,0.6) 0%, rgba(236,253,245,0.75) 45%, rgba(255,255,255,0.96) 100%)',
                  border: '1px solid rgba(20,83,45,0.2)',
                  boxShadow:
                    '0 24px 64px -12px rgba(20,83,45,0.15), 0 4px 16px rgba(20,83,45,0.06)',
                }}
              >
                {/* Background dot pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #14532D 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Card Top Header with Live indicator */}
                <div className="relative flex items-center justify-between pb-5 mb-6 border-b border-[#14532D]/12">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="h-9 w-9 rounded-xl flex items-center justify-center shadow-sm"
                      style={{ background: 'linear-gradient(135deg, #14532D, #15803D)' }}
                    >
                      <Layers className="h-4.5 w-4.5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#14532D] block">
                        Platform Foundation
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">Core Enterprise Capabilities</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/80 border border-[#14532D]/15 text-[10px] font-semibold text-[#14532D]">
                    <Activity className="h-3 w-3 text-[#14532D] animate-pulse" />
                    <span>Live Architecture</span>
                  </div>
                </div>

                {/* Interactive Pillar Cards (Click or Hover spotlights one) */}
                <div className="relative space-y-3.5">
                  {PLATFORM_OVERVIEW.pillars.map((pillar, idx) => {
                    const Icon = PILLAR_ICONS[idx] || CheckCircle2
                    const isActive = activePillar === idx
                    return (
                      <div
                        key={idx}
                        onClick={() => setActivePillar(idx)}
                        onMouseEnter={() => setActivePillar(idx)}
                        className="group relative flex items-start gap-4 p-4 sm:p-4.5 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden"
                        style={{
                          background: isActive
                            ? 'rgba(255, 255, 255, 0.98)'
                            : 'rgba(255, 255, 255, 0.65)',
                          border: isActive
                            ? '1.5px solid rgba(20, 83, 45, 0.35)'
                            : '1px solid rgba(20, 83, 45, 0.08)',
                          boxShadow: isActive
                            ? '0 10px 28px -4px rgba(20, 83, 45, 0.14)'
                            : 'none',
                          transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                        }}
                      >
                        {/* Left active accent line */}
                        <div
                          className="absolute left-0 top-3 bottom-3 w-1 rounded-full transition-opacity duration-300"
                          style={{
                            background: 'linear-gradient(to bottom, #14532D, #15803D)',
                            opacity: isActive ? 1 : 0,
                          }}
                        />

                        {/* Icon Container with smooth scale */}
                        <div
                          className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-2xs"
                          style={{
                            background: isActive
                              ? 'linear-gradient(135deg, #14532D, #15803D)'
                              : 'linear-gradient(135deg, rgba(20,83,45,0.1), rgba(21,128,61,0.08))',
                            color: isActive ? '#FFFFFF' : '#14532D',
                          }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span
                              className="text-sm font-bold transition-colors duration-200"
                              style={{ color: isActive ? '#14532D' : '#0F172A' }}
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

                        {/* Check indicator */}
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 mt-0.5 ml-auto transition-all duration-300"
                          style={{
                            color: '#14532D',
                            opacity: isActive ? 1 : 0.3,
                            transform: isActive ? 'scale(1.15)' : 'scale(1)',
                          }}
                        />
                      </div>
                    )
                  })}
                </div>

                {/* Bottom Active Architecture Strip */}
                <div
                  className="mt-5 p-3 rounded-xl flex items-center justify-between text-xs font-semibold text-[#14532D]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(240,253,244,0.9), rgba(220,252,231,0.5))',
                    border: '1px solid rgba(20,83,45,0.12)',
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>360° Enterprise Governance</span>
                  </span>
                  <span className="font-mono text-[11px] text-emerald-800 font-bold">100% Audit Trail</span>
                </div>

                {/* Decorative Bottom Corner Glow */}
                <div
                  className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full pointer-events-none opacity-40"
                  style={{ background: 'radial-gradient(circle, #14532D, transparent 70%)' }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* ── MISSION & VISION INTERACTIVE CARDS ─────────────────────────── */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(28px)',
            transitionDelay: '360ms',
          }}
        >
          <div
            className="relative overflow-hidden rounded-3xl"
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(226,232,240,0.95)',
              boxShadow: '0 8px 36px rgba(15,23,42,0.06)',
            }}
          >
            {/* Top illuminated gradient bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: 'linear-gradient(90deg, transparent, #14532D 30%, #15803D 70%, transparent)',
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
              {/* Mission Card */}
              <div className="group relative p-8 sm:p-11 overflow-hidden transition-all duration-300 hover:bg-slate-50/50">
                {/* Background Watermark Letter "M" */}
                <div
                  className="absolute top-4 right-6 text-[7rem] font-black text-[#14532D] opacity-[0.03] leading-none select-none pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.05]"
                >
                  M
                </div>

                {/* Hover gradient tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(240,253,244,0.45), transparent)' }}
                />

                <div className="relative">
                  <div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      background: 'linear-gradient(135deg, rgba(240,253,244,1), rgba(220,252,231,0.6))',
                      border: '1px solid rgba(20,83,45,0.18)',
                    }}
                  >
                    <Target className="h-4 w-4 text-[#14532D]" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#14532D]">
                      {MISSION_VISION.mission.title}
                    </span>
                  </div>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                    {MISSION_VISION.mission.text}
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group relative p-8 sm:p-11 overflow-hidden transition-all duration-300 hover:bg-slate-50/50">
                {/* Background Watermark Letter "V" */}
                <div
                  className="absolute top-4 right-6 text-[7rem] font-black text-[#14532D] opacity-[0.03] leading-none select-none pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.05]"
                >
                  V
                </div>

                {/* Hover gradient tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(240,253,244,0.45), transparent)' }}
                />

                <div className="relative">
                  <div
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      background: 'linear-gradient(135deg, rgba(240,253,244,1), rgba(220,252,231,0.6))',
                      border: '1px solid rgba(20,83,45,0.18)',
                    }}
                  >
                    <Compass className="h-4 w-4 text-[#14532D]" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#14532D]">
                      {MISSION_VISION.vision.title}
                    </span>
                  </div>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                    {MISSION_VISION.vision.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
