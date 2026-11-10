import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
  Sparkles,
  Laptop,
  Smartphone,
  Mail,
  Server,
  Cloud,
  Lock,
  Database
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
    num: '01',
    title: 'Create & Capture',
    icon: UploadCloud,
    summary: 'Omnichannel document capture or native authoring within Microsoft Office with template governance.'
  },
  {
    num: '02',
    title: 'Review & Collaborate',
    icon: GitBranch,
    summary: 'Parallel reviews, inline commenting, check-in/out locks, and side-by-side redline diff comparison.'
  },
  {
    num: '03',
    title: 'Approve & Sign',
    icon: FileSignature,
    summary: 'Two-component credential re-authentication, declared legal meaning, and cryptographic SHA-256 seal.'
  },
  {
    num: '04',
    title: 'Publish & Index',
    icon: BookOpen,
    summary: 'Automated PDF/A rendering, major version assignment (e.g. v2.0 Effective), and full-text search indexing.'
  },
  {
    num: '05',
    title: 'Distribute & Acknowledge',
    icon: Share2,
    summary: 'Dynamic user-stamped watermarking, controlled print serialization, and mandatory training read acknowledgments.'
  },
  {
    num: '06',
    title: 'Retain & Protect',
    icon: Calendar,
    summary: 'ISO 15489 event/time schedules, litigation legal holds, and immutable append-only audit trail logging.'
  },
  {
    num: '07',
    title: 'Archive or Dispose',
    icon: Trash2,
    summary: 'Long-term immutable archival or multi-authorization defensible destruction with tamper-proof certificate.'
  }
]

export default function HowItWorksPage({ onOpenDemoModal }) {
  const [activeLifecycleIndex, setActiveLifecycleIndex] = useState(0)

  return (
    <div className="py-12 bg-white">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link to="/" className="hover:text-[#14532D]">Home</Link>
          <span>/</span>
          <span className="text-[#14532D] font-semibold">How It Works & Architecture</span>
        </nav>

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-4">
            <Cpu className="h-3.5 w-3.5" />
            <span>ARCHITECTURE & PIPELINES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight leading-tight">
            How SmartiDP EDMS Works: Ingestion to Archival
          </h1>
          <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            A comprehensive overview of our 6-stage AI capture pipeline, the 7-step governed record lifecycle, and our enterprise cloud/on-premise deployment architecture.
          </p>
        </div>

        {/* 1. The 7-Step Governed Record Lifecycle */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#F5F7F5] border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-1">
              Brochure Page 16 Core Engine
            </span>
            <h2 className="text-3xl font-extrabold text-[#14532D]">
              The 7-Step Governed Record Lifecycle
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              From the instant a file enters your organization to its certified permanent disposition.
            </p>
          </div>

          {/* Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {LIFECYCLE_STEPS.map((s, idx) => {
              const Icon = s.icon
              const isSelected = idx === activeLifecycleIndex
              return (
                <div
                  key={idx}
                  onClick={() => setActiveLifecycleIndex(idx)}
                  className={`p-5 rounded-2xl transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#14532D] text-white shadow-lg scale-102'
                      : 'bg-white text-slate-800 border border-slate-200 hover:border-[#14532D]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#E8F3EC] text-[#14532D]'
                      }`}>
                        {s.num}
                      </span>
                      <Icon className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-[#14532D]'}`} />
                    </div>
                    <h3 className={`text-sm font-bold mb-1.5 ${isSelected ? 'text-white' : 'text-[#14532D]'}`}>
                      {s.title}
                    </h3>
                  </div>
                  <p className={`text-[11px] leading-relaxed pt-2 border-t ${
                    isSelected ? 'border-white/20 text-emerald-100' : 'border-slate-100 text-slate-600'
                  }`}>
                    {s.summary}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* 2. The 6-Stage AI Capture Pipeline */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-1">
              Neural Document Intelligence
            </span>
            <h2 className="text-3xl font-extrabold text-[#14532D]">
              The 6-Stage AI Capture Pipeline
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Transforming unstructured multi-format scans and PDFs into verified, structured data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPTURE_STAGES.map((cs) => {
              const Icon = cs.icon
              return (
                <div key={cs.step} className="p-6 rounded-2xl glass-card-green flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-white text-[#14532D] flex items-center justify-center shrink-0 border border-[#14532D]/15 shadow-2xs font-mono font-bold text-sm">
                    {cs.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="h-4 w-4 text-[#14532D]" />
                      <h3 className="text-base font-bold text-[#14532D]">{cs.title}</h3>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">{cs.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* 3. Validation Station (Human-in-the-Loop Mockup) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F5F7F5] border border-slate-200 mb-20">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-bold text-[#14532D]">
              Interactive AI Validation Station
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              When field confidence falls below policy thresholds (e.g. 95%), documents are automatically routed to the validation station.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-slate-300 shadow-md overflow-hidden">
            <div className="px-5 py-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs text-slate-700 font-mono">
              <span>queue / validation-station / doc-09412</span>
              <span className="text-[#14532D] font-bold">Confidence: 97.8% (Math OK)</span>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-3">
                <div className="font-bold text-slate-900 pb-1 border-b border-slate-100">
                  Extracted Document Properties
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Document Type:</span>
                  <span className="font-semibold text-slate-800">Commercial Invoice (AP)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Vendor:</span>
                  <span className="font-semibold text-slate-800">BioTech Global Supplies Ltd</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">PO Number:</span>
                  <span className="font-semibold text-slate-800 font-mono">PO-2026-9912 (Matched)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Gross Amount:</span>
                  <span className="font-semibold text-emerald-800 font-mono">$48,250.00 USD</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="font-bold text-slate-900 pb-1 border-b border-slate-100">
                  Automated Rule Validations
                </div>
                <div className="p-2.5 rounded-lg bg-[#E8F3EC] text-[#14532D] flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>3-Way PO & Goods Receipt match verified in ERP</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#E8F3EC] text-[#14532D] flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Tax calculation and subtotal math sum verified</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#E8F3EC] text-[#14532D] flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Duplicate invoice number hash check passed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Deployment Models & Ecosystem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl glass-card-green">
            <div className="h-10 w-10 rounded-xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/15 shadow-2xs mb-4">
              <Cloud className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-[#14532D] mb-1">Multi-Tenant Cloud SaaS</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Fully managed on AWS / Azure with automatic updates, high availability, regional data residency, and 99.9% SLA.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card-green">
            <div className="h-10 w-10 rounded-xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/15 shadow-2xs mb-4">
              <Lock className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-[#14532D] mb-1">Dedicated Private Cloud</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Single-tenant isolated instance deployed into your dedicated VPC with customer-managed encryption keys (BYOK).
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card-green">
            <div className="h-10 w-10 rounded-xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/15 shadow-2xs mb-4">
              <Server className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-[#14532D] mb-1">On-Premise / Air-Gapped</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Containerised microservices on Kubernetes for defense, government, and strictly regulated on-site data centers.
            </p>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#14532D] text-white text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Want to Review the Technical Architecture Spec?
          </h2>
          <p className="text-emerald-100 text-sm max-w-xl mx-auto leading-relaxed">
            Our enterprise architects are available to review system security, API integrations, and deployment sizing for your environment.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenDemoModal}
              className="px-8 py-3.5 rounded-xl bg-white text-[#14532D] font-bold text-sm shadow-md hover:bg-[#E8F3EC] transition-all cursor-pointer"
            >
              Book an Architecture Review
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
