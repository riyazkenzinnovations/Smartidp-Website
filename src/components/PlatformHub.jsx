import React from 'react'
import initialLogo from '../assets/initial.png'
import {
  ScanText,
  FileCheck2,
  GitBranch,
  Users,
  Search,
  Archive,
  ShieldCheck,
  BarChart3,
  ArrowRight
} from 'lucide-react'

const DOMAINS = [
  // Middle Orbit (r = 175px, 29%) - Cardinal 4
  {
    id: 'capture',
    title: 'Capture',
    desc: 'Scan, ingest, OCR, AI classification',
    icon: ScanText,
    color: '#0284C7', // Sky Blue
    posStyle: { left: '50%', top: 'calc(50% - 29%)' }
  },
  {
    id: 'automate',
    title: 'Automate',
    desc: 'BPMN workflows, e-signatures',
    icon: GitBranch,
    color: '#EA580C', // Vibrant Orange
    posStyle: { left: 'calc(50% + 29%)', top: '50%' }
  },
  {
    id: 'discover',
    title: 'Discover',
    desc: 'Full-text, semantic & metadata search',
    icon: Search,
    color: '#2563EB', // Cobalt Blue
    posStyle: { left: '50%', top: 'calc(50% + 29%)' }
  },
  {
    id: 'secure',
    title: 'Secure',
    desc: 'Zero-trust access, encryption, DLP',
    icon: ShieldCheck,
    color: '#0D9488', // Teal
    posStyle: { left: 'calc(50% - 29%)', top: '50%' }
  },

  // Outer Orbit (r = 245px, 41%) - Diagonal 4
  {
    id: 'manage',
    title: 'Manage',
    desc: 'Versioning, metadata, check-in/out',
    icon: FileCheck2,
    color: '#059669', // Emerald Green
    posStyle: { left: 'calc(50% + 29%)', top: 'calc(50% - 29%)' }
  },
  {
    id: 'collaborate',
    title: 'Collaborate',
    desc: 'Co-authoring, comments, sharing',
    icon: Users,
    color: '#7C3AED', // Royal Purple
    posStyle: { left: 'calc(50% + 29%)', top: 'calc(50% + 29%)' }
  },
  {
    id: 'govern',
    title: 'Govern',
    desc: 'Retention, legal hold, disposition',
    icon: Archive,
    color: '#D97706', // Amber Gold
    posStyle: { left: 'calc(50% - 29%)', top: 'calc(50% + 29%)' }
  },
  {
    id: 'analyse',
    title: 'Analyse',
    desc: 'Dashboards, KPIs, audit reporting',
    icon: BarChart3,
    color: '#E11D48', // Crimson Rose
    posStyle: { left: 'calc(50% - 29%)', top: 'calc(50% - 29%)' }
  }
]

export default function PlatformHub({ onSelectDomain }) {
  return (
    <section
      id="platform-overview"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
    >
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* 1. Two-Column Hero Layout (Matching First Image Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
          
          {/* Left Column: Headline, Paragraph & CTA */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0067B8]">
              <span>Platform Overview</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B192C] tracking-tight leading-tight">
              One platform for the complete <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0D9488] to-[#10B981]">
                enterprise information lifecycle
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              SmartiDP EDMS brings eight integrated capability domains together on a shared, secure foundation — so content flows seamlessly from capture to archive without switching tools.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#core-domains"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm shadow-lg shadow-sky-500/25 hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer group"
              >
                <span>Explore All 8 Domains</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Orbital Solar System (Matching First Image) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[560px] xl:max-w-[620px] aspect-square flex items-center justify-center select-none group">
              
              {/* Center Radiant Soft Blue Aura */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-sky-400/25 via-blue-500/20 to-teal-400/20 blur-3xl pointer-events-none" />

              {/* SVG Background Rings, Dots, and Dashed Spokes */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outermost Faint Ambient Boundary */}
                <circle
                  cx="300"
                  cy="300"
                  r="285"
                  stroke="#F1F5F9"
                  strokeWidth="1.5"
                />

                {/* 8 Dashed Radial Spokes (at 45° intervals) */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
                  const rad = (deg * Math.PI) / 180
                  const x1 = 300 + Math.cos(rad) * 60
                  const y1 = 300 + Math.sin(rad) * 60
                  const x2 = 300 + Math.cos(rad) * 285
                  const y2 = 300 + Math.sin(rad) * 285
                  return (
                    <line
                      key={deg}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#E2E8F0"
                      strokeWidth="1.2"
                      strokeDasharray="4 6"
                    />
                  )
                })}

                {/* Ring 1: Inner Dashed Orbit */}
                <circle
                  cx="300"
                  cy="300"
                  r="105"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />

                {/* Ring 2: Middle Dashed Orbit */}
                <circle
                  cx="300"
                  cy="300"
                  r="175"
                  stroke="#93C5FD"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  strokeOpacity="0.85"
                />

                {/* Ring 3: Outer Dashed Orbit */}
                <circle
                  cx="300"
                  cy="300"
                  r="245"
                  stroke="#CBD5E1"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                />

                {/* Geometric Intersection Dots (as seen in Image 1) */}
                {[
                  // Dots on Ring 1
                  ...[30, 90, 150, 210, 270, 330].map((deg) => {
                    const r = (deg * Math.PI) / 180
                    return { cx: 300 + Math.cos(r) * 105, cy: 300 + Math.sin(r) * 105, r: 2.5 }
                  }),
                  // Dots on Ring 2
                  ...[15, 60, 105, 165, 225, 255, 300, 345].map((deg) => {
                    const r = (deg * Math.PI) / 180
                    return { cx: 300 + Math.cos(r) * 175, cy: 300 + Math.sin(r) * 175, r: 3 }
                  }),
                  // Dots on Ring 3
                  ...[20, 75, 120, 190, 240, 285, 335].map((deg) => {
                    const r = (deg * Math.PI) / 180
                    return { cx: 300 + Math.cos(r) * 245, cy: 300 + Math.sin(r) * 245, r: 3.5 }
                  })
                ].map((dot, i) => (
                  <circle
                    key={i}
                    cx={dot.cx}
                    cy={dot.cy}
                    r={dot.r}
                    fill="#60A5FA"
                    fillOpacity="0.8"
                  />
                ))}
              </svg>

              {/* Rotating Orbit Container for the 8 Domain Nodes */}
              <div className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-700 animate-[spin_55s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                {DOMAINS.map((domain) => {
                  const Icon = domain.icon
                  return (
                    <div
                      key={domain.id}
                      style={domain.posStyle}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    >
                      {/* Counter-rotation to keep icons and labels upright at all times */}
                      <div className="animate-[spin_55s_linear_infinite_reverse] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                        <button
                          type="button"
                          onClick={() => onSelectDomain?.(domain.id)}
                          aria-label={`Select ${domain.title}: ${domain.desc}`}
                          className="group/node relative flex flex-col items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7] rounded-full cursor-pointer"
                        >
                          {/* Circular Floating Disc with Vibrant Domain Color */}
                          <div
                            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white border border-slate-200/90 shadow-md shadow-sky-950/10 group-hover/node:shadow-2xl group-hover/node:scale-115 transition-all duration-300 flex items-center justify-center"
                            style={{ color: domain.color }}
                          >
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                          </div>

                          {/* Domain Title Pill beneath the circle */}
                          <div className="mt-1 px-2.5 py-0.5 rounded-full bg-white/95 border border-slate-200/90 text-[10px] sm:text-[11px] font-bold text-slate-800 shadow-xs whitespace-nowrap group-hover/node:text-[#0284C7] group-hover/node:border-[#0284C7]/50 transition-colors">
                            {domain.title}
                          </div>

                          {/* Floating Tooltip with full brochure description on hover */}
                          <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none group-hover/node:opacity-100 group-hover/node:pointer-events-auto transition-all duration-200 z-30 min-w-[190px] max-w-[230px] p-2.5 rounded-xl bg-[#0B1A2F] text-white shadow-xl text-center">
                            <div className="text-xs font-bold text-sky-300">{domain.title}</div>
                            <div className="text-[10px] text-slate-300 leading-snug mt-0.5">{domain.desc}</div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0B1A2F]" />
                          </div>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Central Core with user's initial.png logo */}
              <div className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-blue-100 shadow-2xl shadow-blue-500/25 flex items-center justify-center p-4.5 select-none hover:scale-105 transition-transform cursor-pointer">
                <img
                  src={initialLogo}
                  alt="SmartiDP EDMS"
                  className="w-full h-full object-contain filter drop-shadow-xs"
                />
              </div>

            </div>
          </div>

        </div>

        {/* 2. Three Pillars (Unified, Intelligent, Configurable from Brochure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#F0F7FA]/80 border border-[#0284C7]/15 hover:border-[#0284C7]/30 transition-all shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Unified</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              One repository, one security model, one audit trail — across departments, sites and countries.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#F0F7FA]/80 border border-[#0284C7]/15 hover:border-[#0284C7]/30 transition-all shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Intelligent</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              AI extracts meaning from content, automates classification and powers natural-language discovery.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#F0F7FA]/80 border border-[#0284C7]/15 hover:border-[#0284C7]/30 transition-all shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Configurable</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Adapt document types, metadata, workflows and rules through configuration — no custom code.
            </p>
          </div>
        </div>

        {/* 3. Shared Platform Services Dark Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1A2F] text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xl">
          <div className="shrink-0">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white leading-snug">
              Shared platform<br className="hidden sm:inline" /> services
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {[
              'Identity & access',
              'Audit trail',
              'Metadata & taxonomy',
              'AI services',
              'Notifications',
              'Integration APIs',
              'Encryption',
              'Analytics'
            ].map((service, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold backdrop-blur-xs transition-colors shadow-2xs"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
