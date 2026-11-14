import React, { useState } from 'react'
import smartIdpGif from '../assets/smartIDP.gif'
import MagicRings from './MagicRings'
import {
  Sparkles,
  CheckCircle2,
  Database,
  Cloud,
  FileText,
  Mail,
  Server,
  Layers,
  Shield,
  ShieldCheck,
  Lock,
  Cpu,
  ArrowRight,
  Check,
  X,
  Users,
  Activity,
  Workflow,
  KeyRound,
  FileCheck,
  Bot,
  Zap,
  ChevronRight,
  ScanText,
  FileCheck2,
  GitBranch,
  Archive,
  Search,
  FileSignature,
  Clock,
  AlertTriangle,
  RotateCcw,
  Sliders,
  MessageSquare
} from 'lucide-react'

const SMARTIDP_STEPS = [
  {
    id: '01',
    category: 'INGESTION ENGINE',
    navTitle: 'Intelligent Capture & OCR',
    icon: ScanText,
    title: 'Intelligent Capture & OCR',
    description: 'Ingest content from any channel, automatically classify document types, and extract structured metadata.',
    userPrompt: 'Extract this clinical SOP protocol, auto-classify key fields, and route to QA approval.',
    agentReply: 'Got it! Classifying SOP-QA & auto-extracting key metadata.',
    cardTitle: 'Choose your engine',
    cardOptions: [
      { name: 'GPT-4o Multimodal', note: 'Fast Extraction', checked: true },
      { name: 'Claude 3.5 Sonnet', note: 'Complex Tables', checked: false },
      { name: 'Deep Neural OCR', note: 'Handwriting ICR', checked: false },
      { name: 'Private GxP Model', note: 'Air-Gapped Vault', checked: false }
    ],
    bullets: [
      'Omnichannel capture from MFP scanners, shared mailboxes, mobile devices, and high-speed REST APIs',
      'Neural multi-lingual OCR & handwriting (ICR) with automated de-skew and speckle clean-up',
      'AI document classification trained on enterprise types (SOPs, Invoices, CoAs, Batch Records) in under 340ms'
    ],
    rings: {
      color: '#059669',
      colorTwo: '#0284C7',
      motion: 'ripple',
      speed: 1,
      ringCount: 6,
      lineThickness: 2,
      glow: 1.2
    }
  },
  {
    id: '02',
    category: 'REVISION GOVERNANCE',
    navTitle: 'Controlled Versioning & Review',
    icon: FileCheck2,
    title: 'Controlled Versioning & Review',
    description: 'Enforce strict lifecycle governance so teams always access the current effective revision.',
    userPrompt: 'Lock v4.0 Effective, compute redline text diff, and withdraw obsolete v3.1 revision.',
    agentReply: 'v4.0 locked! Redline diff calculated: +14 clauses added, 0 merge conflicts.',
    cardTitle: 'Revision Governance',
    cardOptions: [
      { name: 'v4.0 Effective (Locked)', note: 'Single Source of Truth', checked: true },
      { name: 'v3.2 Draft', note: 'Redline Audited', checked: false },
      { name: 'v3.1 Obsolete', note: 'Superseded & Archived', checked: false },
      { name: 'ALCOA+ Verified', note: 'Full Traceability', checked: false }
    ],
    bullets: [
      'Strict major (1.0) and minor (0.1) versioning with mandatory check-in/check-out locks',
      'Side-by-side redline diff comparison highlighting added, deleted, or revised clauses in real time',
      'Single source of truth where obsolete revisions are withdrawn automatically while preserving audit history'
    ],
    rings: {
      color: '#2563EB',
      colorTwo: '#6366F1',
      motion: 'pulse',
      speed: 0.9,
      ringCount: 6,
      lineThickness: 2,
      glow: 1.2
    }
  },
  {
    id: '03',
    category: 'PROCESS ORCHESTRATION',
    navTitle: 'BPMN Workflows & E-Signatures',
    icon: GitBranch,
    title: 'BPMN Workflows & E-Signatures',
    description: 'Automate multi-stage review and approval lifecycles with 21 CFR Part 11 compliant digital signatures.',
    userPrompt: 'Route SOP-QA-0142 through 3-tier technical review, then challenge QA Director for e-sign.',
    agentReply: 'BPMN route launched! Technical reviews 3/3 passed. Awaiting QA digital signature.',
    cardTitle: 'Workflow Pipeline',
    cardOptions: [
      { name: '21 CFR Part 11 E-Sign', note: 'Password + OTP Auth', checked: true },
      { name: 'Author Draft', note: 'Submitted & Passed', checked: false },
      { name: 'Parallel Review (3/3)', note: 'All Approvals In', checked: false },
      { name: 'SHA-256 Crypto Seal', note: 'Tamper-Evident Hash', checked: false }
    ],
    bullets: [
      'No-code drag-and-drop BPMN 2.0 designer for sequential, parallel, and conditional approval routes',
      'Strict segregation of duties ensuring authors cannot approve their own submitted changes',
      'Two-component credential re-authentication with cryptographic SHA-256 tamper-evident digital sealing'
    ],
    rings: {
      color: '#7C3AED',
      colorTwo: '#EC4899',
      motion: 'breathe',
      speed: 0.85,
      ringCount: 6,
      lineThickness: 2,
      glow: 1.3
    }
  },
  {
    id: '04',
    category: 'RECORDS PRESERVATION',
    navTitle: 'Defensible Records & Archival',
    icon: Archive,
    title: 'Defensible Records & Archival',
    description: 'ISO 15489 compliant retention policies, instant legal holds, and certified permanent disposition.',
    userPrompt: 'Lock records under 7-year GxP retention clock, generate PDF/A-1b and monitor legal holds.',
    agentReply: 'Vault policy enforced! 7-year clock running. Instant litigation hold switch armed.',
    cardTitle: 'Archival Vault Controls',
    cardOptions: [
      { name: '7-Yr Retention Clock', note: 'ISO 15489 Active', checked: true },
      { name: 'Searchable PDF/A-1b', note: 'Long-Term Rendition', checked: false },
      { name: 'Litigation Hold Freeze', note: 'Zero-Purge Protection', checked: false },
      { name: 'Dual-Cert Disposition', note: 'Certified Purge', checked: false }
    ],
    bullets: [
      'Automated event-triggered and time-based retention clocks enforced across all record classes',
      'Litigation legal hold freezes that immediately halt automated disposition upon legal notice',
      'Long-term searchable PDF/A preservation with dual-authorized certificates of destruction'
    ],
    rings: {
      color: '#D97706',
      colorTwo: '#059669',
      motion: 'ripple',
      speed: 1,
      ringCount: 6,
      lineThickness: 2,
      glow: 1.2
    }
  }
]

export default function CoordinationSteps() {
  const [activeStep, setActiveStep] = useState(0)

  const current = SMARTIDP_STEPS[activeStep]

  const handleStepChange = (idx) => {
    setActiveStep(idx)
  }

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFC] border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[380px] bg-gradient-to-b from-emerald-50/50 via-teal-50/20 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            From Ingestion to Defensible Archival
          </h2>
          <p className="mt-3.5 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            SmartiDP EDMS unifies every stage of the document journey in four governed stages — from omnichannel capture and revision control to automated sign-off and compliant archival.
          </p>
        </div>

        {/* 3-Part Layout: Left Nav | Center Interactive Canvas | Right Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-7xl mx-auto">
          
          {/* 1. LEFT COLUMN: Step Pills Navigation (3 cols) */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-2 lg:pb-0 justify-center">
            {SMARTIDP_STEPS.map((step, idx) => {
              const isActive = activeStep === idx
              return (
                <button
                  key={step.id}
                  onClick={() => handleStepChange(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-slate-950 text-white shadow-xl shadow-slate-950/10 scale-[1.02] ring-1 ring-white/10'
                      : 'bg-white hover:bg-slate-50/90 text-slate-700 hover:text-slate-950 border border-slate-200/90 shadow-2xs hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 transition-colors font-mono font-bold text-xs ${
                        isActive
                          ? 'bg-white/15 text-emerald-400 border border-white/20'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {step.id}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider font-bold opacity-60">
                        {step.category}
                      </div>
                      <div className="text-xs sm:text-sm font-bold truncate mt-0.5">
                        {step.navTitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pl-2">
                    {isActive ? (
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-slate-300" />
                    )}
                  </div>
                </button>
              )
            })}

           
          </div>

          {/* 2. CENTER COLUMN: Visual Interactive Canvas (6 cols - Spacious & Perfectly Centered) */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/5 p-6 sm:p-10 min-h-[500px] flex items-center justify-center relative overflow-hidden transition-all duration-300">
            
            {/* Background MagicRings Interactive WebGL Field */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <MagicRings
                color={current.rings.color}
                colorTwo={current.rings.colorTwo}
                motion={current.rings.motion}
                ringCount={current.rings.ringCount}
                speed={current.rings.speed}
                lineThickness={current.rings.lineThickness}
                glow={current.rings.glow}
                baseRadius={0.28}
                radiusStep={0.08}
                expansion={0.08}
                taper={1.35}
                rotation={0}
                spin={0.04}
                tilt={-4}
                dispersion={0.06}
                grain={0}
                opacity={0.9}
                followMouse={true}
                mouseInfluence={0.18}
                hoverScale={1.15}
                hoverIntensity={1}
                parallax={0.05}
                clickBurst={true}
                intro={true}
                theme="light"
              />
            </div>

            {/* Central smartIDP.gif Hero Banner Card - Clean & Prominent */}
            <div className="relative z-10 w-full max-w-[380px] sm:max-w-[440px] group cursor-pointer">
              {/* Glowing Ambient Backdrop Aura matched to active step */}
              <div
                className="absolute -inset-1.5 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"
                style={{
                  background: `linear-gradient(to right, ${current.rings.color}40, ${current.rings.colorTwo}40)`
                }}
              />
              
              {/* Card wrapping smartIDP.gif */}
              <div className="relative w-full aspect-[16/9] rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl shadow-slate-900/10 flex items-center justify-center p-5 sm:p-7 overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src={smartIdpGif}
                  alt="SmartIDP Intelligent Document Processing"
                  className="w-full h-full object-contain filter drop-shadow-sm select-none"
                />
              </div>
            </div>

          </div>

          {/* 3. RIGHT COLUMN: Step Details & Bullet Points (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-6">
            <div>
              {/* Category squircle */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black text-white font-mono font-bold text-xs shadow-sm mb-4">
                <span>{current.id}</span>
                <span className="text-white/40">/</span>
                <span className="text-[10px] text-emerald-400 uppercase tracking-widest">{current.category}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                {current.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Enhanced Bullet Points */}
              <div className="mt-5 space-y-3">
                {current.bullets.map((bullet, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-relaxed font-normal">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next stage button */}
            <div className="pt-2">
              <button
                onClick={() => handleStepChange((activeStep + 1) % SMARTIDP_STEPS.length)}
                className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-between shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
              >
                <span>Cycle to Stage 0{((activeStep + 1) % SMARTIDP_STEPS.length) + 1}</span>
                <ArrowRight className="h-4 w-4 text-[#14532D] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
