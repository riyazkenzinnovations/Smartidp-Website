import React, { useState } from 'react'
import {
  UploadCloud,
  ScanText,
  Cpu,
  FileCheck2,
  CheckCircle2,
  Share2,
  GitBranch,
  FileSignature,
  BookOpen,
  Calendar,
  Archive,
  Trash2,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Sparkles
} from 'lucide-react'

const CAPTURE_STAGES = [
  {
    step: '01',
    title: 'Ingest',
    icon: UploadCloud,
    desc: 'Omnichannel capture from MFP network scanners, shared email inboxes, mobile devices, REST APIs, or watched network folders.'
  },
  {
    step: '02',
    title: 'Enhance & OCR',
    icon: ScanText,
    desc: 'Automatic de-skew, contrast normalization, de-noising, and multi-lingual OCR plus advanced handwriting (ICR) recognition.'
  },
  {
    step: '03',
    title: 'AI Classification',
    icon: Cpu,
    desc: 'Deep learning models identify document type (e.g. invoice, SOP, clinical form) and automatically split multi-document batches.'
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
    step: '1',
    name: 'Create',
    icon: BookOpen,
    desc: 'Author documents from approved templates with automatic numbering schemes and mandatory taxonomy metadata.'
  },
  {
    step: '2',
    name: 'Review',
    icon: GitBranch,
    desc: 'Parallel reviewers collaborate with side-by-side redline diff comparison and threaded comment resolution.'
  },
  {
    step: '3',
    name: 'Approve',
    icon: FileSignature,
    desc: 'Formal sign-off via two-component electronic signatures with displayed regulatory meaning (Approval / Authorship).'
  },
  {
    step: '4',
    name: 'Publish',
    icon: CheckCircle2,
    desc: 'Current effective version published. Automated read-and-acknowledge training campaigns assigned to personnel.'
  },
  {
    step: '5',
    name: 'Periodic Review',
    icon: Calendar,
    desc: 'Risk-based automated review reminders ensure procedures never become obsolete without formal recertification.'
  },
  {
    step: '6',
    name: 'Archive',
    icon: Archive,
    desc: 'Automated conversion to ISO 19005 compliant PDF/A format with legal hold freezing capability during investigations.'
  },
  {
    step: '7',
    name: 'Defensible Dispose',
    icon: Trash2,
    desc: 'Multi-level authorization for destruction, generating a permanent, tamper-evident certificate of disposition.'
  }
]

export default function HowItWorks({ onOpenDemoModal }) {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState('lifecycle') // 'lifecycle' | 'capture'

  return (
    <section id="how-it-works" className="py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-3">
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Workflow & Ingestion Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight">
            How SmartiDP EDMS Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            From the moment unstructured content arrives to the day records are defensibly disposed of, every action is governed, automated, and permanently verifiable.
          </p>

          {/* Workflow Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-[#F5F7F5] border border-slate-200">
            <button
              onClick={() => setActiveWorkflowTab('lifecycle')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeWorkflowTab === 'lifecycle'
                  ? 'bg-[#14532D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#14532D]'
              }`}
            >
              The 7-Step Governed Record Lifecycle
            </button>
            <button
              onClick={() => setActiveWorkflowTab('capture')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeWorkflowTab === 'capture'
                  ? 'bg-[#14532D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#14532D]'
              }`}
            >
              The 6-Stage AI Capture & Extraction Engine
            </button>
          </div>
        </div>

        {/* View 1: 7-Step Governed Record Lifecycle */}
        {activeWorkflowTab === 'lifecycle' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4 relative">
              {LIFECYCLE_STEPS.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl glass-card-green flex flex-col justify-between text-left relative group hover:border-[#14532D]/40"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold text-[#14532D] bg-white px-2 py-0.5 rounded border border-[#14532D]/15">
                          STEP 0{step.step}
                        </span>
                        <div className="h-7 w-7 rounded-lg bg-white text-[#14532D] flex items-center justify-center">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-[#14532D] mb-1.5">{step.name}</h4>
                      <p className="text-[11px] text-slate-700 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Lifecycle Governance Details Banner */}
            <div className="mt-8 p-6 rounded-2xl bg-[#F5F7F5] border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#14532D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block mb-0.5">Single Source of Truth:</strong>
                  Users only see the current effective version. Superseded versions are automatically withdrawn but preserved for audit history.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#14532D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block mb-0.5">Traceable Revision Loops:</strong>
                  Draft changes link directly to CAPAs, change controls, or author revision justifications with complete redline diff comparisons.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#14532D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block mb-0.5">Defensible Disposition:</strong>
                  Certified destruction requires multi-level authorization and creates an unalterable certificate stating what, when, and why.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View 2: 6-Stage AI Capture & Extraction Engine */}
        {activeWorkflowTab === 'capture' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {CAPTURE_STAGES.map((stg, sIdx) => {
                const Icon = stg.icon
                return (
                  <div
                    key={sIdx}
                    className="p-5 rounded-2xl glass-card-green flex flex-col justify-between text-left group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold text-[#14532D] bg-white px-2 py-0.5 rounded border border-[#14532D]/15">
                          STAGE {stg.step}
                        </span>
                        <div className="h-7 w-7 rounded-lg bg-white text-[#14532D] flex items-center justify-center">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-[#14532D] mb-1.5">{stg.title}</h4>
                      <p className="text-[11px] text-slate-700 leading-relaxed">{stg.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Validation Station Preview (Brochure Page 6) */}
            <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-mono text-[#14532D] font-bold uppercase">Human-In-The-Loop Validation Station</span>
                  <h4 className="text-base font-bold text-[#14532D]">SmartIDP Intelligent Review Station Interface</h4>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#E8F3EC] text-[#14532D] text-xs font-bold">
                  Document Type: Supplier Invoice #55190
                </span>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#F5F7F5] text-slate-600 border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-4 font-sans font-semibold">Extracted Field</th>
                      <th className="py-2.5 px-4 font-sans font-semibold">Extracted Value</th>
                      <th className="py-2.5 px-4 font-sans font-semibold text-center">Confidence</th>
                      <th className="py-2.5 px-4 font-sans font-semibold text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    <tr>
                      <td className="py-2.5 px-4 font-sans font-medium text-slate-600">Document Type</td>
                      <td className="py-2.5 px-4 font-bold text-slate-900">Supplier Invoice</td>
                      <td className="py-2.5 px-4 text-center font-bold text-[#14532D]">99%</td>
                      <td className="py-2.5 px-4 text-center"><span className="text-[10px] bg-[#E8F3EC] text-[#14532D] px-2 py-0.5 rounded font-bold">Auto-Passed</span></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-sans font-medium text-slate-600">Supplier Name</td>
                      <td className="py-2.5 px-4 font-bold text-slate-900">Example Supplies Ltd</td>
                      <td className="py-2.5 px-4 text-center font-bold text-[#14532D]">97%</td>
                      <td className="py-2.5 px-4 text-center"><span className="text-[10px] bg-[#E8F3EC] text-[#14532D] px-2 py-0.5 rounded font-bold">ERP Matched</span></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-sans font-medium text-slate-600">Invoice Number</td>
                      <td className="py-2.5 px-4 font-bold text-slate-900">55190</td>
                      <td className="py-2.5 px-4 text-center font-bold text-[#14532D]">99%</td>
                      <td className="py-2.5 px-4 text-center"><span className="text-[10px] bg-[#E8F3EC] text-[#14532D] px-2 py-0.5 rounded font-bold">Verified</span></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-sans font-medium text-slate-600">Date</td>
                      <td className="py-2.5 px-4 font-bold text-slate-900">2026-03-14</td>
                      <td className="py-2.5 px-4 text-center font-bold text-[#14532D]">98%</td>
                      <td className="py-2.5 px-4 text-center"><span className="text-[10px] bg-[#E8F3EC] text-[#14532D] px-2 py-0.5 rounded font-bold">Validated</span></td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="py-2.5 px-4 font-sans font-medium text-slate-600">PO Number</td>
                      <td className="py-2.5 px-4 font-bold text-amber-900">PO-88213</td>
                      <td className="py-2.5 px-4 text-center font-bold text-amber-700">82%</td>
                      <td className="py-2.5 px-4 text-center"><span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">Review Flag</span></td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 font-sans font-medium text-slate-600">Total Due</td>
                      <td className="py-2.5 px-4 font-bold text-[#14532D]">$12,480.00</td>
                      <td className="py-2.5 px-4 text-center font-bold text-[#14532D]">96%</td>
                      <td className="py-2.5 px-4 text-center"><span className="text-[10px] bg-[#E8F3EC] text-[#14532D] px-2 py-0.5 rounded font-bold">Math Check OK</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

