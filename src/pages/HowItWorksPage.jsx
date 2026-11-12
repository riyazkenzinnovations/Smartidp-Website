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
  Lock,
  GitBranch,
  ShieldCheck,
  Server,
  Cloud,
  CheckCircle2,
  Share2,
  BookOpen,
  Archive,
  Trash2,
  Check,
  ArrowRight,
  Cpu,
  Sparkles,
  Layers,
  RotateCw
} from 'lucide-react'

const CAPTURE_STAGES = [
  {
    step: '01',
    title: 'Multimodal Ingestion',
    icon: UploadCloud,
    desc: 'Ingest scanned paper, PDFs, TIFFs, emails, camera images, or direct EDI streams from scanners, hot folders, and SFTP.'
  },
  {
    step: '02',
    title: 'Image Enhancement',
    icon: Cpu,
    desc: 'Automated de-skew, orientation correction, adaptive binarisation, and border cleanup optimize visual clarity.'
  },
  {
    step: '03',
    title: 'Classification',
    icon: Layers,
    desc: 'Deep neural networks classify document type (SOP, invoice, clinical protocol, CoA) without manual separator sheets.'
  },
  {
    step: '04',
    title: 'Data Extraction',
    icon: FileCheck2,
    desc: 'Extract key fields, complex tabular hierarchies, and entities with confidence scores attached to every individual coordinate.'
  },
  {
    step: '05',
    title: 'Rule Validation',
    icon: ShieldCheck,
    desc: 'Automated math cross-checks, ERP master data lookups, and routing of edge-cases to a human-in-the-loop review station.'
  },
  {
    step: '06',
    title: 'File & Launch',
    icon: Share2,
    desc: 'Auto-indexed with metadata taxonomy, secured by role-based permissions, and launched directly into approval workflows.'
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
    stat: 'Draft State'
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
    stat: 'In Review'
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
    stat: 'Approved'
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
    stat: 'Effective'
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
    stat: 'Attestation'
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
    stat: 'Archived'
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
    stat: 'Disposed'
  }
]

export default function HowItWorksPage({ onOpenDemoModal }) {
  return (
    <div className="bg-white">
      {/* 1. Page Hero Section */}
      <section className="py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-4 shadow-2xs">
              <Cpu className="h-3.5 w-3.5 text-[#14532D]" />
              <span>ARCHITECTURE & PIPELINES</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              How SmartiDP EDMS Works: Ingestion to Archival
            </h1>
            <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              A comprehensive overview of our 6-stage AI capture pipeline, the 7-step governed record lifecycle, and our enterprise cloud/on-premise deployment architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Brochure Chapter Quick-Jump Bar */}
      <BrochureChapterBar />

      {/* 2. The 7-Step Governed Record Lifecycle */}
      <section id="record-lifecycle" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-2">
              End-to-End Governance Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              The 7-Step Governed Record Lifecycle
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal">
              From the instant a file enters your organization to its certified permanent disposition.
            </p>
          </div>

          {/* Stepper Grid with 3D Flip Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {LIFECYCLE_STEPS.map((s, idx) => {
              const Icon = s.icon
              return (
                <div
                  key={idx}
                  className="flip-card-container h-[260px] sm:h-[275px] w-full cursor-pointer group"
                  tabIndex={0}
                  role="region"
                  aria-label={`${s.num} ${s.title}`}
                >
                  <div className="flip-card-inner">
                    {/* Front Side: Glassmorphic Faded Green Card */}
                    <div className="flip-card-front p-4 sm:p-5 glass-card-green text-slate-800 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="h-8 w-8 rounded-lg font-mono font-bold text-xs flex items-center justify-center border border-[#14532D]/20 shadow-2xs transition-all bg-[#F0FDF4] text-[#14532D] group-hover:bg-[#14532D] group-hover:text-white">
                            {s.num}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Icon className="h-4 w-4 text-[#14532D]" />
                            <span className="text-[9px] font-semibold flex items-center gap-1 px-1.5 py-0.5 rounded-full border bg-[#F0FDF4]/90 text-[#14532D] border-[#14532D]/15">
                              Flip <RotateCw className="h-2 w-2" />
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold mb-1.5 leading-snug transition-colors text-slate-900 group-hover:text-[#14532D]">
                          {s.title}
                        </h3>
                        <p className="text-[11px] leading-relaxed font-normal text-slate-600">
                          {s.summary}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#14532D]/15 flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>Stage {s.num}</span>
                        <span className="font-bold text-[#14532D]">{s.stat}</span>
                      </div>
                    </div>

                    {/* Back Side: Forest Green Detail Card */}
                    <div className="flip-card-back p-4 sm:p-5 bg-gradient-to-br from-[#064E3B] via-[#14532D] to-[#0F766E] text-white flex flex-col justify-between shadow-xl border border-emerald-400/40">
                      <div>
                        <div className="flex items-center justify-between pb-2 border-b border-white/20 mb-2">
                          <span className="font-mono text-xs font-bold text-emerald-200">STAGE {s.num}</span>
                          <span className="text-[9px] uppercase font-bold text-emerald-100 tracking-wider bg-white/10 px-2 py-0.5 rounded-full">
                            {s.badge}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white mb-2 leading-tight">{s.title} Controls</h4>
                        <ul className="space-y-1.5 text-[10px] sm:text-[11px] text-white/95 leading-tight">
                          {s.details.map((d, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="h-3 w-3 text-emerald-300 shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[10px] text-emerald-200 font-mono">
                        <span>{s.stat}</span>
                        <span className="text-white/80 font-sans text-[9px]">ISO / GxP Governed</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. The 6-Stage AI Capture Pipeline */}
      <section id="intelligent-capture" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-2">
              Neural Document Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              The 6-Stage AI Capture Pipeline
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal">
              Transforming unstructured multi-format scans and PDFs into verified, structured data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CAPTURE_STAGES.map((cs) => {
              const Icon = cs.icon
              return (
                <div key={cs.step} className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-white text-[#14532D] flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs font-mono font-bold text-sm">
                    {cs.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="h-4 w-4 text-[#14532D]" />
                      <h3 className="text-base font-bold text-slate-900">{cs.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{cs.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Interactive AI Validation Station */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-2">
              Human-in-the-Loop Quality Assurance
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Interactive AI Validation Station
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal">
              When field confidence falls below policy thresholds (e.g. 95%), documents are automatically routed to the validation station.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-300 shadow-xl overflow-hidden">
            <div className="px-6 py-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-700 font-mono">
              <span>Capture · Validation station / INVOICE #55190</span>
              <span className="text-[#14532D] font-bold">Confidence: 96% (Low fields flagged)</span>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs">
              <div className="space-y-3">
                <div className="font-bold text-slate-900 pb-2 border-b border-slate-100 text-sm">
                  Extracted Fields & Confidence
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Doc type:</span>
                  <span className="font-semibold text-slate-800">Supplier invoice <span className="text-[#14532D] font-bold">(99%)</span></span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Supplier:</span>
                  <span className="font-semibold text-slate-800">Example Supplies Ltd <span className="text-[#14532D] font-bold">(97%)</span></span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Date:</span>
                  <span className="font-semibold text-slate-800 font-mono">2026-03-14 <span className="text-[#14532D] font-bold">(98%)</span></span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Invoice no.:</span>
                  <span className="font-semibold text-slate-800 font-mono">55190 <span className="text-[#14532D] font-bold">(99%)</span></span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 bg-amber-50/60 px-2 rounded">
                  <span className="text-amber-800 font-medium">PO number:</span>
                  <span className="font-semibold text-amber-900 font-mono">PO-88213 <span className="text-amber-700 font-bold">(82% - Review)</span></span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500">Total:</span>
                  <span className="font-semibold text-[#14532D] font-mono">12,480.00 <span className="text-[#14532D] font-bold">(96%)</span></span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-bold text-slate-900 pb-2 border-b border-slate-100 text-sm">
                  Document Types Processed Out of the Box
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">• Invoices & receipts</div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">• Purchase orders</div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">• Certificates of analysis</div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">• Contracts & agreements</div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">• Batch records</div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">• Delivery notes</div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">• Identity documents</div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">• Searchable PDF/A output</div>
                </div>
                <p className="text-[11px] text-slate-500 italic pt-1">
                  Illustrative interface. Low-confidence fields are highlighted for review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Capability: Workflow & Process Automation (Brochure Page 08) */}
      <WorkflowAutomationSection onOpenDemoModal={onOpenDemoModal} />

      {/* 6. User Experience (Brochure Page 09) */}
      <UserExperienceSection />

      {/* 7. Productivity Anywhere (Brochure Page 10) */}
      <ProductivityAnywhereSection onOpenDemoModal={onOpenDemoModal} />

      {/* 8. Enterprise Integration Ecosystem (Brochure Page 11) */}
      <EnterpriseIntegrationSection onOpenDemoModal={onOpenDemoModal} />

      {/* 9. Cloud-Native Platform Architecture (Brochure Page 12) */}
      <PlatformArchitectureSection onOpenDemoModal={onOpenDemoModal} />

      {/* 10. Scalability, Performance & Availability (Brochure Page 13) */}
      <ScalabilityPerformanceSection />

      {/* 11. Zero-Trust Security & Defence in Depth (Brochure Page 14) */}
      <ZeroTrustSecuritySection onOpenDemoModal={onOpenDemoModal} />

      {/* 6. Bottom Technical Architecture CTA */}
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
