import React from 'react'
import { CheckCircle2, ArrowRight, ShieldCheck, Database, Layers, Search, Clock, FileWarning, Sparkles } from 'lucide-react'

const TRANSFORMATION_ITEMS = [
  {
    dimension: 'Document Access',
    before: 'Fragmented across file drives, email inboxes, physical binders & legacy repositories.',
    withSmartIDP: 'One unified, governed repository with instant, permission-trimmed semantic search.'
  },
  {
    dimension: 'Data Entry & Ingestion',
    before: 'Hours spent manually re-keying data from scans, PDFs, and paper forms with high error rates.',
    withSmartIDP: 'AI-driven OCR, layout analysis, automated classification, and structured data extraction.'
  },
  {
    dimension: 'Reviews & Approvals',
    before: 'Unruly email threads, printed copies, wet-ink signatures, and delayed approval cycles.',
    withSmartIDP: 'Parallel BPMN 2.0 electronic workflows with 21 CFR Part 11 & eIDAS digital signatures.'
  },
  {
    dimension: 'Regulatory Compliance',
    before: 'Scrambling for days to assemble paper evidence and history binders before inspections.',
    withSmartIDP: 'Continuous immutable audit trails, revision tracking, and one-click inspection packages.'
  },
  {
    dimension: 'Records Retention',
    before: 'Content kept indefinitely or deleted ad-hoc, creating severe legal discovery exposure.',
    withSmartIDP: 'Automated ISO 15489 policy-driven retention schedules, legal holds, and certified disposition.'
  },
  {
    dimension: 'Operational Visibility',
    before: 'Zero real-time visibility into bottlenecks, cycle times, or document distribution status.',
    withSmartIDP: 'Executive dashboards, SLA tracking, and audit-ready analytics across all departments.'
  }
]

export default function About({ onOpenDemoModal }) {
  return (
    <section id="about" className="py-24 bg-[#F5F7F5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>The Case for Change</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight">
            From Document Chaos to Intelligent Information Flow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Information is your enterprise's most valuable asset. SmartiDP EDMS by Kenz Innovations unifies the complete document lifecycle on one secure, intelligent, and compliance-first platform.
          </p>
        </div>

        {/* Core Narrative Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <h3 className="text-2xl font-bold text-[#14532D]">
                Govern Every Document. Empower Every Stakeholder.
              </h3>
              <p>
                Every strategic decision, regulatory submission, commercial contract, product release, and customer interaction depends directly on documents. Yet in most organisations, that content is scattered across disparate network drives, legacy silos, personal inboxes, and paper archives — multiplying risk and hiding business value.
              </p>
              <p>
                <strong>SmartiDP EDMS</strong> brings eight integrated capability domains together on a single, shared enterprise foundation. AI-driven capture turns unstructured content into structured, searchable records. Configurable workflows automate reviews, approvals, and records governance. Security and compliance controls are built directly into every layer — so your organisation moves faster while remaining continuously audit-ready.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl glass-card-green">
                <div className="text-2xl font-extrabold text-[#14532D] font-mono">Unified</div>
                <p className="text-xs text-slate-700 mt-1.5">
                  One repository, one security model, one immutable audit trail across sites and borders.
                </p>
              </div>
              <div className="p-5 rounded-2xl glass-card-green">
                <div className="text-2xl font-extrabold text-[#14532D] font-mono">Intelligent</div>
                <p className="text-xs text-slate-700 mt-1.5">
                  Multi-modal AI extracts meaning, auto-indexes metadata, and enables natural language discovery.
                </p>
              </div>
              <div className="p-5 rounded-2xl glass-card-green">
                <div className="text-2xl font-extrabold text-[#14532D] font-mono">Configurable</div>
                <p className="text-xs text-slate-700 mt-1.5">
                  No-code workflows, custom taxonomies, and business rules without costly custom development.
                </p>
              </div>
              <div className="p-5 rounded-2xl glass-card-green">
                <div className="text-2xl font-extrabold text-[#14532D] font-mono">Compliant</div>
                <p className="text-xs text-slate-700 mt-1.5">
                  Pre-mapped controls for FDA 21 CFR Part 11, EU Annex 11, ISO 9001, ISO 13485 & HIPAA.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Transformation Comparison Table */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#14532D]">
              The Operational Transformation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Document management before vs. after implementing SmartiDP EDMS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRANSFORMATION_ITEMS.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#14532D]/30 transition-all shadow-2xs hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14532D] mb-3 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span>{item.dimension}</span>
                    <span className="text-[10px] text-slate-400 font-mono">0{index + 1}</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-600">
                      <div className="font-semibold text-slate-800 mb-1 flex items-center gap-1.5">
                        <FileWarning className="h-3.5 w-3.5 text-amber-600" />
                        <span>Before:</span>
                      </div>
                      {item.before}
                    </div>

                    <div className="p-3 rounded-xl bg-[#E8F3EC] border border-[#14532D]/15 text-slate-800">
                      <div className="font-semibold text-[#14532D] mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D]" />
                        <span>With SmartiDP EDMS:</span>
                      </div>
                      {item.withSmartIDP}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

