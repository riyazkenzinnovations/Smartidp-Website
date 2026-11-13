import React, { useState } from 'react'
import CtaBanner from '../components/CtaBanner'
import BrochureChapterBar from '../components/brochure/BrochureChapterBar'
import WorkflowAutomationSection from '../components/brochure/WorkflowAutomationSection'
import UserExperienceSection from '../components/brochure/UserExperienceSection'
import ProductivityAnywhereSection from '../components/brochure/ProductivityAnywhereSection'
import EnterpriseIntegrationSection from '../components/brochure/EnterpriseIntegrationSection'
import PlatformArchitectureSection from '../components/brochure/PlatformArchitectureSection'
import ScalabilityPerformanceSection from '../components/brochure/ScalabilityPerformanceSection'
import ZeroTrustSecuritySection from '../components/brochure/ZeroTrustSecuritySection'
import {
  UploadCloud,
  FileCheck2,
  FileSignature,
  GitBranch,
  ShieldCheck,
  Share2,
  BookOpen,
  Archive,
  Trash2,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Layers,
  RotateCw,
  AlertTriangle,
  Zap,
  ScanLine
} from 'lucide-react'

const CAPTURE_STAGES = [
  {
    step: '01',
    title: 'Multimodal Ingestion',
    icon: UploadCloud,
    desc: 'Ingest scanned paper, PDFs, TIFFs, emails, camera images, or direct EDI streams from scanners, hot folders, and SFTP.',
    color: 'from-sky-500 to-blue-600'
  },
  {
    step: '02',
    title: 'Image Enhancement',
    icon: Cpu,
    desc: 'Automated de-skew, orientation correction, adaptive binarisation, and border cleanup optimize visual clarity.',
    color: 'from-violet-500 to-purple-600'
  },
  {
    step: '03',
    title: 'Classification',
    icon: Layers,
    desc: 'Deep neural networks classify document type (SOP, invoice, clinical protocol, CoA) without manual separator sheets.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    step: '04',
    title: 'Data Extraction',
    icon: FileCheck2,
    desc: 'Extract key fields, complex tabular hierarchies, and entities with confidence scores attached to every individual coordinate.',
    color: 'from-orange-500 to-amber-600'
  },
  {
    step: '05',
    title: 'Rule Validation',
    icon: ShieldCheck,
    desc: 'Automated math cross-checks, ERP master data lookups, and routing of edge-cases to a human-in-the-loop review station.',
    color: 'from-rose-500 to-pink-600'
  },
  {
    step: '06',
    title: 'File & Launch',
    icon: Share2,
    desc: 'Auto-indexed with metadata taxonomy, secured by role-based permissions, and launched directly into approval workflows.',
    color: 'from-teal-500 to-cyan-600'
  }
]

const LIFECYCLE_STEPS = [
  {
    num: '01',
    title: 'Create & Capture',
    icon: UploadCloud,
    badge: 'Creation',
    summary: 'Omnichannel document capture or native authoring within Microsoft Office with template governance.',
    details: [
      'Controlled document templates',
      'Auto-numbering & metadata taxonomy',
      'Major & minor draft versioning'
    ],
    stat: 'Draft State',
    color: 'from-sky-500 to-blue-600'
  },
  {
    num: '02',
    title: 'Review & Collaborate',
    icon: GitBranch,
    badge: 'Collab',
    summary: 'Parallel reviews, inline commenting, check-in/out locks, and side-by-side redline diff comparison.',
    details: [
      'Parallel review workflows',
      'Mandatory check-in/out locks',
      'Side-by-side redline text diff'
    ],
    stat: 'In Review',
    color: 'from-violet-500 to-purple-600'
  },
  {
    num: '03',
    title: 'Approve & Sign',
    icon: FileSignature,
    badge: 'Sign-Off',
    summary: 'Two-component credential re-authentication, declared legal meaning, and cryptographic SHA-256 seal.',
    details: [
      '21 CFR Part 11 e-signatures',
      'Two-component credential challenge',
      'SHA-256 tamper-evident seal'
    ],
    stat: 'Approved',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    num: '04',
    title: 'Publish & Index',
    icon: BookOpen,
    badge: 'Release',
    summary: 'Effective document published to controlled distribution lists with automatic obsolescence of prior revisions.',
    details: [
      'Single effective copy live',
      'Obsolete versions withdrawn',
      'Searchable PDF/A rendition'
    ],
    stat: 'Effective',
    color: 'from-orange-500 to-amber-600'
  },
  {
    num: '05',
    title: 'Distribute & Acknowledge',
    icon: Share2,
    badge: 'Training',
    summary: 'Read-and-acknowledge training workflows with complete time-stamped employee comprehension tracking.',
    details: [
      'Training-on-release routing',
      'Read-and-acknowledge audit log',
      'Dynamic security watermarking'
    ],
    stat: 'Attestation',
    color: 'from-rose-500 to-pink-600'
  },
  {
    num: '06',
    title: 'Archive & Retain',
    icon: Archive,
    badge: 'Retention',
    summary: 'Long-term immutable preservation with automated retention schedule clocks and legal holds.',
    details: [
      'Policy-driven retention clocks',
      'Immediate litigation legal hold',
      'Immutable append-only archive'
    ],
    stat: 'Archived',
    color: 'from-teal-500 to-cyan-600'
  },
  {
    num: '07',
    title: 'Certified Disposition',
    icon: Trash2,
    badge: 'Disposal',
    summary: 'Controlled permanent purge or permanent archive with dual-authorized cryptographic certificate of destruction.',
    details: [
      'Multi-level disposition approvals',
      'Permanent certified destruction',
      'Cryptographic disposition certificate'
    ],
    stat: 'Disposed',
    color: 'from-slate-500 to-slate-700'
  }
]

const EXTRACTED_FIELDS = [
  { label: 'Doc type', value: 'Supplier Invoice', conf: 99, flagged: false },
  { label: 'Supplier', value: 'Example Supplies Ltd', conf: 97, flagged: false },
  { label: 'Date', value: '2026-03-14', conf: 98, flagged: false, mono: true },
  { label: 'Invoice no.', value: '55190', conf: 99, flagged: false, mono: true },
  { label: 'PO number', value: 'PO-88213', conf: 82, flagged: true, mono: true },
  { label: 'Total', value: '12,480.00', conf: 96, flagged: false, mono: true }
]

const DOC_TYPES = [
  'Invoices & receipts',
  'Purchase orders',
  'Certificates of analysis',
  'Contracts & agreements',
  'Batch records',
  'Delivery notes',
  'Identity documents',
  'Searchable PDF/A output'
]

export default function HowItWorksPage({ onOpenDemoModal }) {
  const [activeStep, setActiveStep] = useState(null)

  return (
    <div className="bg-white">

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-[#0a1f2f] to-slate-900">
        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />

        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-widest uppercase mb-6">
              <Cpu className="h-3.5 w-3.5" />
              <span>Architecture & Pipelines</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              How SmartiDP EDMS Works:{' '}
              <span className="bg-gradient-to-r from-sky-400 to-teal-300 bg-clip-text text-transparent">
                Ingestion to Archival
              </span>
            </h1>
            <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              A comprehensive overview of our 6-stage AI capture pipeline, the 7-step governed record lifecycle,
              and our enterprise cloud/on-premise deployment architecture.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 text-white font-bold text-sm shadow-lg shadow-sky-900/40 hover:from-sky-400 hover:to-teal-400 transition-all group cursor-pointer"
              >
                <span>Book Architecture Review</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/15 transition-all cursor-pointer"
              >
                Request a Demo
              </button>
            </div>

            {/* quick stat chips */}
            <div className="mt-10 flex flex-nowrap items-center justify-center gap-2 overflow-x-auto pb-1">
              {[
                { label: '6-Stage', sub: 'AI Capture Pipeline' },
                { label: '7-Step', sub: 'Governed Lifecycle' },
                { label: '340ms', sub: 'Avg Processing Time' },
                { label: '99.9%', sub: 'Uptime SLA' },
                { label: '12+', sub: 'Compliance Standards' }
              ].map((chip, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/8 border border-white/12 backdrop-blur-sm whitespace-nowrap shrink-0"
                >
                  <span className="text-xs font-black text-white">{chip.label}</span>
                  <span className="text-[11px] text-slate-400">{chip.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Chapter Quick-Jump Bar */}
      <BrochureChapterBar />

      {/* ── 2. 7-STEP GOVERNED RECORD LIFECYCLE ── */}
      <section id="record-lifecycle" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 uppercase tracking-widest mb-3">
              <Zap className="h-3 w-3" />
              End-to-End Governance Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              The 7-Step Governed Record Lifecycle
            </h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base">
              From the instant a file enters your organization to its certified permanent disposition.
            </p>
          </div>

          {/* Timeline connector row */}
          <div className="relative">
            {/* horizontal connector line (desktop) */}
            <div className="hidden lg:block absolute top-[2.75rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-16 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
              {LIFECYCLE_STEPS.map((s, idx) => {
                const Icon = s.icon
                const isActive = activeStep === idx
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(isActive ? null : idx)}
                    className={`group text-left rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                      isActive
                        ? 'border-slate-900 shadow-xl ring-2 ring-slate-900/10'
                        : 'border-slate-200 bg-white hover:border-slate-400 hover:shadow-md'
                    }`}
                  >
                    <div className={`p-4 sm:p-5 ${isActive ? 'bg-slate-900' : 'bg-white'}`}>
                      {/* step number circle */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`h-8 w-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs border transition-all ${
                          isActive
                            ? 'bg-white text-slate-900 border-white/30'
                            : 'bg-slate-100 text-slate-600 border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900'
                        }`}>
                          {s.num}
                        </div>
                        <Icon className={`h-4 w-4 ${isActive ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-600'}`} />
                      </div>

                      <h3 className={`text-xs sm:text-sm font-bold leading-snug mb-1.5 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {s.title}
                      </h3>
                      <p className={`text-[11px] leading-relaxed ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {s.summary}
                      </p>

                      <div className={`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${
                        isActive ? 'border-white/15 text-emerald-400' : 'border-slate-100 text-slate-400'
                      }`}>
                        <span>Stage {s.num}</span>
                        <span className="font-bold">{s.stat}</span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Expanded detail panel */}
            {activeStep !== null && (
              <div className="mt-4 rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${LIFECYCLE_STEPS[activeStep].color} bg-clip-text text-transparent`}>
                        Stage {LIFECYCLE_STEPS[activeStep].num} · {LIFECYCLE_STEPS[activeStep].badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white">{LIFECYCLE_STEPS[activeStep].title} Controls</h4>
                    <p className="text-sm text-slate-400 mt-1 max-w-xl">{LIFECYCLE_STEPS[activeStep].summary}</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                    {LIFECYCLE_STEPS[activeStep].stat}
                  </span>
                </div>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {LIFECYCLE_STEPS[activeStep].details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/8">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-snug">{d}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[11px] text-slate-500 text-right">ISO 15489 / GxP Governed · Click the card again to close</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 3. 6-STAGE AI CAPTURE PIPELINE ── */}
      <section id="intelligent-capture" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 rounded-full px-3 py-1 uppercase tracking-widest mb-3">
              <ScanLine className="h-3 w-3" />
              Neural Document Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              The 6-Stage AI Capture Pipeline
            </h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base">
              Transforming unstructured multi-format scans and PDFs into verified, structured data in under 340ms.
            </p>
          </div>

          {/* Pipeline grid with connecting arrows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {CAPTURE_STAGES.map((cs, idx) => {
              const Icon = cs.icon
              return (
                <div
                  key={cs.step}
                  className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="flex items-start gap-4">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${cs.color} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-black text-slate-400 font-mono">STAGE {cs.step}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">{cs.title}</h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-slate-500 leading-relaxed flex-1">{cs.desc}</p>

                  {/* connector arrow (not last) */}
                  {idx < CAPTURE_STAGES.length - 1 && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm z-10">
                      <ArrowRight className="h-3 w-3 text-slate-400" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Pipeline summary bar */}
          <div className="mt-10 rounded-2xl bg-slate-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-3 text-white">
              <Zap className="h-5 w-5 text-sky-400 shrink-0" />
              <span>End-to-end pipeline processes documents in <strong className="text-sky-300">under 340ms</strong> with confidence scores on every extracted field.</span>
            </div>
            <button
              onClick={onOpenDemoModal}
              className="whitespace-nowrap text-xs font-bold text-white border border-white/30 rounded-full px-5 py-2.5 hover:bg-white/10 transition cursor-pointer shrink-0"
            >
              See Live Demo →
            </button>
          </div>
        </div>
      </section>

      {/* ── 4. AI VALIDATION STATION ── */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 uppercase tracking-widest mb-3">
              <AlertTriangle className="h-3 w-3" />
              Human-in-the-Loop Quality Assurance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Interactive AI Validation Station
            </h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base">
              When field confidence falls below policy thresholds (e.g. 95%), documents are automatically routed for expert review — before they ever touch your ERP.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              {/* Title bar */}
              <div className="px-5 py-3 bg-slate-900 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono ml-2">Capture · Validation Station / INVOICE #55190</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 font-mono">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Overall: 96% · 1 field flagged
                </div>
              </div>

              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Extracted fields */}
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                    Extracted Fields & Confidence
                  </div>
                  <div className="space-y-2">
                    {EXTRACTED_FIELDS.map((f, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-xl border text-xs ${
                          f.flagged
                            ? 'bg-amber-50 border-amber-200'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {f.flagged && <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0" />}
                          <span className={`font-medium ${f.flagged ? 'text-amber-800' : 'text-slate-500'}`}>
                            {f.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-right">
                          <span className={`${f.mono ? 'font-mono' : ''} font-semibold ${f.flagged ? 'text-amber-900' : 'text-slate-800'}`}>
                            {f.value}
                          </span>
                          <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
                            f.conf >= 95
                              ? 'text-emerald-700 bg-emerald-100'
                              : 'text-amber-700 bg-amber-100'
                          }`}>
                            {f.conf}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="mt-4 flex gap-2">
                    <div className="flex-1 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold text-center cursor-pointer hover:bg-emerald-500 transition">
                      Confirm & File
                    </div>
                    <div className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold text-center cursor-pointer hover:bg-slate-200 transition">
                      Reject & Return
                    </div>
                  </div>
                </div>

                {/* Document types */}
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                    Document Types Processed Out of the Box
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {DOC_TYPES.map((dt, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>{dt}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-[11px] text-slate-400 italic">
                    Illustrative interface. Low-confidence fields are highlighted for human review before ERP ingestion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brochure Sub-sections (unchanged) ── */}
      <WorkflowAutomationSection onOpenDemoModal={onOpenDemoModal} />
      <UserExperienceSection />
      <ProductivityAnywhereSection onOpenDemoModal={onOpenDemoModal} />
      <EnterpriseIntegrationSection onOpenDemoModal={onOpenDemoModal} />
      <PlatformArchitectureSection onOpenDemoModal={onOpenDemoModal} />
      <ScalabilityPerformanceSection />
      <ZeroTrustSecuritySection onOpenDemoModal={onOpenDemoModal} />

      {/* ── CTA BANNER ── */}
      <CtaBanner
        onOpenDemoModal={onOpenDemoModal}
        badge="SmartiDP EDMS Technical Architecture"
        title="Ready to Review the Enterprise Architecture Specification?"
        description="Our enterprise architects are available to review system security, API integrations, and deployment sizing for your environment."
        primaryBtnText="Book an Architecture Review →"
        secondaryBtnText="Speak with Solutions Architect"
        secondaryLink="/contact"
      />
    </div>
  )
}
