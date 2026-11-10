import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import InteractiveWorkbench from '../components/InteractiveWorkbench'
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  ScanText,
  FileCheck2,
  GitBranch,
  FileSignature,
  FileSpreadsheet,
  Search,
  Lock,
  Building2,
  FlaskConical,
  Stethoscope,
  TrendingUp,
  Clock,
  DollarSign,
  Workflow,
  Eye,
  FileWarning,
  Sliders,
  ChevronRight,
  Zap,
  Check,
  Database,
  FileText,
  AlertCircle,
  Award
} from 'lucide-react'

// 1. The Transformation Hub Data
const TRANSFORMATION_TABS = [
  {
    id: 'access',
    title: 'Document Access',
    metric: '90% Faster',
    metricLabel: 'Retrieval Time',
    before: {
      headline: 'Fragmented & Siloed',
      desc: 'Documents scattered across personal email inboxes, local desktop folders, network drives, and locked paper file cabinets. Employees spend up to 2.5 hours per day searching for files.',
      badge: 'Legacy Process'
    },
    after: {
      headline: 'Unified Single Source of Truth',
      desc: 'One enterprise-grade governed repository. Instant AI-powered semantic search finds any record, clause, or metadata property across millions of files in under 200ms.',
      badge: 'With SmartiDP EDMS'
    }
  },
  {
    id: 'capture',
    title: 'Data Ingestion & OCR',
    metric: '99.8% Accuracy',
    metricLabel: 'AI Neural Extraction',
    before: {
      headline: 'Manual Data Re-Keying',
      desc: 'Clerks manually type invoice fields, batch records, and patient data from paper and PDFs. High human error rates cause costly downstream reconciliation and audit penalties.',
      badge: 'Legacy Process'
    },
    after: {
      headline: 'Automated Neural Processing',
      desc: 'Multi-modal AI classifies document types, extracts tabular data, cross-checks business rules against ERPs, and routes low-confidence fields to validation stations in 340ms.',
      badge: 'With SmartiDP EDMS'
    }
  },
  {
    id: 'approvals',
    title: 'Reviews & E-Signatures',
    metric: '85% Reduction',
    metricLabel: 'Approval Cycle Time',
    before: {
      headline: 'Wet-Ink & Email Chains',
      desc: 'Approval requests get buried in email threads. Documents sit on executives’ desks for weeks waiting for physical ink signatures. Zero traceability of who reviewed what.',
      badge: 'Legacy Process'
    },
    after: {
      headline: 'Visual BPMN 2.0 Workflows',
      desc: 'Automated parallel routing, SLA countdowns, automated escalation, and 21 CFR Part 11 compliant two-component cryptographic digital signatures.',
      badge: 'With SmartiDP EDMS'
    }
  },
  {
    id: 'compliance',
    title: 'Audit & Compliance',
    metric: '100% Ready',
    metricLabel: 'Inspection Preparedness',
    before: {
      headline: 'Audit Preparation Panic',
      desc: 'Teams spend weeks assembling paper binders and hunting down version histories before FDA, EMA, or ISO inspections. Severe risk of 483 warning letters.',
      badge: 'Legacy Process'
    },
    after: {
      headline: 'Continuous Immutable Trail',
      desc: 'Append-only SHA-256 hash-chained audit service records every user interaction in real time with UTC timestamps. One-click export of complete inspection-ready dossiers.',
      badge: 'With SmartiDP EDMS'
    }
  }
]

// 2. Interactive 8 Capability Domains with Live Visual Preview
const CAPABILITIES_SHOWCASE = [
  {
    id: 'capture',
    title: 'Intelligent Capture & OCR',
    icon: ScanText,
    badge: 'Neural Core v4.2',
    tagline: 'Multi-Modal Layout Analysis & Data Extraction',
    desc: 'Ingest content from scanners, shared inboxes, mobile devices, and REST APIs. Multi-modal AI enhances, classifies, and extracts structured key-value pairs in under 340ms.',
    bullets: [
      'Omnichannel capture: Network MFP scanners, email inboxes & APIs',
      'Automated de-skew, contrast normalization & noise reduction',
      'Multilingual OCR/ICR supporting 50+ languages and hand-printed text',
      'Human-in-the-loop Validation Station for low-confidence fields'
    ],
    previewType: 'capture'
  },
  {
    id: 'versioning',
    title: 'Document & Version Control',
    icon: FileCheck2,
    badge: 'Revision Governance',
    tagline: 'Strict Major/Minor Lifecycle & Redline Diffs',
    desc: 'Enforce complete revision integrity. Knowledge workers always access current effective revisions while obsolete versions are withdrawn automatically.',
    bullets: [
      'Strict major (1.0, 2.0) vs. minor (0.1, 0.2) draft status gates',
      'Mandatory check-in/out locks preventing concurrent editing conflicts',
      'Side-by-side redline text diff highlight added, deleted, or changed text',
      'Multisite master documents with linked multilingual variants'
    ],
    previewType: 'versioning'
  },
  {
    id: 'workflow',
    title: 'Visual Workflow Automation',
    icon: GitBranch,
    badge: 'BPMN 2.0 Engine',
    tagline: 'Drag-and-Drop Process Orchestration & Routing',
    desc: 'Model and automate sophisticated multi-stage document lifecycles with strict segregation of duties, automated escalation rules, and delegation.',
    bullets: [
      'Drag-and-drop designer for serial, parallel, and conditional approvals',
      'Segregation of duties: Authors cannot approve their own changes',
      'Due dates, SLA escalation triggers, and automated notification alerts',
      'Turnkey templates for SOP change control, CAPAs, and CLM contracts'
    ],
    previewType: 'workflow'
  },
  {
    id: 'signatures',
    title: '21 CFR Part 11 Electronic Signatures',
    icon: FileSignature,
    badge: 'Cryptographic Binding',
    tagline: 'Tamper-Evident Signatures with Manifest Meaning',
    desc: 'Execute legally binding electronic signatures complying with FDA 21 CFR Part 11, EU Annex 11, and eIDAS standards with two-component credential re-authentication.',
    bullets: [
      'Two-component credential challenge (Username + Password / MFA / Biometrics)',
      'Displayed signature manifest meaning (Approval, Authorship, Review)',
      'Cryptographically bound to the document content via SHA-256 hash',
      'Full validation accelerator pack with IQ/OQ execution evidence'
    ],
    previewType: 'signatures'
  },
  {
    id: 'distribution',
    title: 'Controlled Distribution & Print Governance',
    icon: Lock,
    badge: 'Copy Protection',
    tagline: 'Dynamic Watermarks, Copy Serialization & Quotas',
    desc: 'Prevent unauthorized distribution and leakages of confidential documents and controlled SOPs with dynamic watermarks and copy serialization.',
    bullets: [
      'Dynamic security watermarks showing viewer identity, timestamp & copy #',
      'Serialized controlled physical print tracking with user authorization quotas',
      'Time-limited external access links with automated expiration',
      'Automated withdrawal notification when a new version supersedes an existing copy'
    ],
    previewType: 'distribution'
  },
  {
    id: 'retention',
    title: 'Records Management & Retention',
    icon: FileSpreadsheet,
    badge: 'ISO 15489 Compliant',
    tagline: 'Automated Lifecycle Schedules & Defensible Disposition',
    desc: 'Implement defensible records management complying with ISO 15489, DOD 5015.02, and GDPR retention principles with legal hold freeze mechanisms.',
    bullets: [
      'Event-triggered and time-based policy retention schedules',
      'Litigation legal holds that immediately freeze scheduled disposition',
      'Multi-tier review and authorization before permanent destruction',
      'Permanent, cryptographically signed Certificates of Disposition'
    ],
    previewType: 'retention'
  },
  {
    id: 'search',
    title: 'Enterprise Semantic Search',
    icon: Search,
    badge: 'Sub-Second Discovery',
    tagline: 'Natural Language, Full-Text & Metadata Queries',
    desc: 'Find any document, paragraph, or extracted invoice entity across millions of records with permission-trimmed natural language and structured filters.',
    bullets: [
      'Full-text OCR search across scanned PDFs, Office files & TIFF images',
      'Parametric metadata filtering by department, date, status & classification',
      'Natural language search understanding contextual synonyms and intent',
      'Permission-trimmed search results ensuring zero unauthorized data leaks'
    ],
    previewType: 'search'
  },
  {
    id: 'security',
    title: 'Zero-Trust Security & Audit Trail',
    icon: ShieldCheck,
    badge: 'ALCOA+ Data Integrity',
    tagline: 'Append-Only Hash-Chained Forensic Audit Logging',
    desc: 'A hardened zero-trust architecture featuring AES-256 encryption at rest, TLS 1.3 in transit, and immutable append-only audit trail logging.',
    bullets: [
      'Cryptographic SHA-256 hash-chained append-only audit trail',
      'Every view, export, edit, approval, and permission change logged in UTC',
      'Enterprise SSO with SAML 2.0 / OIDC, MFA, and automated SCIM provisioning',
      'Role-based (RBAC) and attribute-based (ABAC) access down to field level'
    ],
    previewType: 'security'
  }
]

// 3. Industry Solutions Preview
const INDUSTRY_HIGHLIGHTS = [
  {
    id: 'pharma',
    name: 'Pharmaceuticals & Biotech',
    badge: 'GxP Validated',
    icon: FlaskConical,
    standards: '21 CFR Part 11 · EU Annex 11 · GAMP 5 · ALCOA+',
    headline: 'Continuous Inspection-Readiness for Life Sciences',
    desc: 'Turnkey SOP management, electronic batch records (EBR), deviation logging, equipment IQ/OQ/PQ protocols, and mandatory read-and-acknowledge GxP training curricula.',
    stat: '100% Audit-Ready',
    action: 'Explore Pharma Spec'
  },
  {
    id: 'meddev',
    name: 'Medical Devices & Diagnostics',
    badge: 'ISO 13485:2016',
    icon: Stethoscope,
    standards: 'FDA QMSR · EU MDR/IVDR · ISO 14971 Risk',
    headline: 'Design History Files & Device Master Records',
    desc: 'Traceability matrices linking design inputs, outputs, verification tests, and change orders. End-to-end management of CAPA workflows and technical dossiers.',
    stat: '85% Faster Submissions',
    action: 'Explore MedDev Spec'
  },
  {
    id: 'finance',
    name: 'Banking & Financial Services',
    badge: 'SOC 2 Type II',
    icon: Building2,
    standards: 'ISO 27001 · PCI-DSS · SOX · GDPR',
    headline: 'High-Volume Document Security & AP Automation',
    desc: '3-way PO invoice matching, loan document ingestion, customer KYC/AML dossier management, and tamper-evident client agreements with multi-site disaster recovery.',
    stat: '70% Cost Reduction',
    action: 'Explore BFSI Spec'
  }
]

export default function HomePage({ onOpenDemoModal, onOpenVideoModal }) {
  const [activeTab, setActiveTab] = useState(0)
  const [activeCapability, setActiveCapability] = useState(0)

  const currentCap = CAPABILITIES_SHOWCASE[activeCapability]
  const currentTab = TRANSFORMATION_TABS[activeTab]

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero 
        onOpenDemoModal={onOpenDemoModal} 
        onOpenVideoModal={onOpenVideoModal} 
      />

      {/* 2. Global Regulatory Standards Marquee */}
      <section className="py-6 bg-[#F5F7F5] border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wider shrink-0">
              <ShieldCheck className="h-4 w-4 text-[#14532D]" />
              <span>Certified Technical Controls For Global Compliance</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
              {[
                'FDA 21 CFR Part 11',
                'EU GMP Annex 11',
                'ISO 9001:2015',
                'ISO 13485:2016',
                'ISO/IEC 27001',
                'GDPR & HIPAA',
                'SOC 2 Type II',
                'ISO 15489',
                'GAMP 5'
              ].map((std, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-800 text-[11px] font-bold shadow-2xs"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Executive Case for Change (Interactive Transformation Hub) */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-4 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#14532D]" />
              <span>The Strategic Business Case</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight leading-tight">
              From Document Chaos to Governed Operational Excellence
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Documents are the lifeblood of regulated enterprises. See the quantifiable shift between legacy manual operations and SmartiDP EDMS intelligence.
            </p>
          </div>

          {/* Interactive Transformation Hub Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {TRANSFORMATION_TABS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-[#E8F3EC] border-[#14532D] shadow-md shadow-[#14532D]/10'
                    : 'bg-[#F5F7F5] border-slate-200/90 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-slate-500">0{idx + 1}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-[#14532D] border border-[#14532D]/15">
                    {tab.metric}
                  </span>
                </div>
                <div className={`text-sm sm:text-base font-bold ${activeTab === idx ? 'text-[#14532D]' : 'text-slate-800'}`}>
                  {tab.title}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">{tab.metricLabel}</div>
              </button>
            ))}
          </div>

          {/* Before vs. After Comparative Display Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#F5F7F5] via-white to-[#E8F3EC]/40 border border-slate-200/90 shadow-xl shadow-slate-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Legacy Approach (Left) */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-rose-200/80 shadow-xs relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold mb-4 border border-rose-200">
                  <FileWarning className="h-3.5 w-3.5 text-rose-600" />
                  <span>{currentTab.before.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {currentTab.before.headline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {currentTab.before.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-rose-600 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-rose-500" />
                  <span>High Operating Costs · Risk of Audit Findings</span>
                </div>
              </div>

              {/* Central Arrow / Transform Bridge */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center text-center">
                <div className="h-14 w-14 rounded-2xl bg-[#14532D] text-white flex items-center justify-center shadow-lg shadow-[#14532D]/20 mb-2">
                  <Zap className="h-6 w-6 text-emerald-300" />
                </div>
                <span className="text-xs font-bold text-[#14532D] uppercase tracking-wider">
                  Transformation
                </span>
                <span className="text-[11px] font-mono text-slate-500">{currentTab.metric}</span>
              </div>

              {/* SmartiDP Approach (Right) */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#E8F3EC] border border-[#14532D]/30 shadow-md shadow-[#14532D]/5 relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#14532D] text-xs font-bold mb-4 border border-[#14532D]/20">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D]" />
                  <span>{currentTab.after.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-[#14532D] mb-2">
                  {currentTab.after.headline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {currentTab.after.desc}
                </p>
                <div className="mt-6 pt-4 border-t border-[#14532D]/15 flex items-center gap-2 text-xs text-[#14532D] font-bold">
                  <Check className="h-3.5 w-3.5 text-[#14532D]" />
                  <span>Zero Findings · 100% Traceable · Enterprise Scale</span>
                </div>
              </div>

            </div>

            {/* Bottom Section Link */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-slate-600 font-medium">
                Documented in Section 2 of the SmartiDP EDMS Product Architecture Dossier.
              </span>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#14532D] hover:text-[#064E3B] hover:underline"
              >
                <span>Read the Complete 6-Dimension Operational Transformation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive 8 Foundational Capability Domains with Dynamic Live Preview Canvas */}
      <section className="py-20 lg:py-28 bg-[#F5F7F5] border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-3">
                <Layers className="h-3.5 w-3.5 text-[#14532D]" />
                <span>8 Core Integrated Domains</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight leading-tight">
                An Integrated Suite for Every Stage of the Document Journey
              </h2>
              <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                Rather than cobbling together point-solution plugins, SmartiDP delivers 8 native capability domains built on one unified zero-trust core. Click each capability to inspect live controls.
              </p>
            </div>
            <Link
              to="/features"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white font-semibold text-xs sm:text-sm shadow-md transition-all self-start lg:self-auto shrink-0"
            >
              <span>Explore All Technical Specifications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Interactive Capability Showcase: Left Pills, Right Live Simulated Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Capability Selectors (5 cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              {CAPABILITIES_SHOWCASE.map((cap, idx) => {
                const Icon = cap.icon
                const isActive = activeCapability === idx
                return (
                  <button
                    key={cap.id}
                    onClick={() => setActiveCapability(idx)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between cursor-pointer group ${
                      isActive
                        ? 'bg-white border-[#14532D] shadow-lg shadow-[#14532D]/10 ring-1 ring-[#14532D]'
                        : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#14532D] text-white'
                            : 'bg-[#E8F3EC] text-[#14532D] group-hover:bg-[#14532D] group-hover:text-white'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className={`text-sm font-bold ${isActive ? 'text-[#14532D]' : 'text-slate-900'}`}>
                          {cap.title}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium">{cap.tagline}</div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        isActive ? 'text-[#14532D] translate-x-1' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    />
                  </button>
                )
              })}
            </div>

            {/* Right Column: Live Interactive Feature Simulator (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#14532D] animate-ping" />
                  <span className="text-xs font-bold text-[#14532D] uppercase tracking-wider">
                    {currentCap.title}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#E8F3EC] text-[#14532D] text-xs font-bold border border-[#14532D]/20">
                  {currentCap.badge}
                </span>
              </div>

              {/* Feature Description */}
              <div className="py-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {currentCap.tagline}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {currentCap.desc}
                </p>

                {/* Key Specification Bullet Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  {currentCap.bullets.map((b, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#F5F7F5] border border-slate-200/80 flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Live Simulated UI Canvas */}
              <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-[#F5F7F5] to-white border border-slate-200/90">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>Engine Simulation Console</span>
                  <span className="text-[#14532D] font-bold">Status: Online · Latency 320ms</span>
                </div>

                {/* Render distinct simulated UI based on previewType */}
                {currentCap.id === 'capture' && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between">
                      <span className="text-slate-700">Document Type Classification:</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Standard Operating Procedure (SOP) · 99.9%</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                        <div className="text-slate-500">Document ID</div>
                        <div className="text-[#14532D] font-bold">SOP-QA-0142 (100%)</div>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                        <div className="text-slate-500">Effective Date</div>
                        <div className="text-[#14532D] font-bold">2026-03-14 (99.8%)</div>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                        <div className="text-slate-500">Validation Status</div>
                        <div className="text-[#14532D] font-bold">Automated Pass (100%)</div>
                      </div>
                    </div>
                  </div>
                )}

                {currentCap.id === 'versioning' && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-700">Active Revision:</span>
                      <span className="px-2.5 py-0.5 rounded bg-[#14532D] text-white font-bold">v4.0 Effective (Locked)</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">v3.2 Draft &rarr; v4.0 Redline Comparison:</span>
                      <span className="text-emerald-700 font-bold">+14 clauses added · -2 withdrawn · 0 conflicts</span>
                    </div>
                  </div>
                )}

                {currentCap.id === 'workflow' && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-700">BPMN 2.0 Active Route:</span>
                      <span className="text-[#14532D] font-bold">Author &rarr; Technical Review (3/3) &rarr; QA Release</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">SLA Timer & Countdown:</span>
                      <span className="text-emerald-700 font-bold">Completed in 4.2 hours (Target: 48h SLA)</span>
                    </div>
                  </div>
                )}

                {currentCap.id === 'signatures' && (
                  <div className="p-3.5 bg-white rounded-xl border border-emerald-300 font-mono text-xs space-y-1.5">
                    <div className="flex items-center justify-between font-bold text-[#14532D]">
                      <span>✓ 21 CFR Part 11 Electronic Signature Executed</span>
                      <span>SHA-256 Valid</span>
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Signer: <strong>Dr. Evelyn Vance (QA Head)</strong> · Meaning: <strong>Regulatory Approval</strong> · UTC: <strong>2026-03-14 09:42:15</strong>
                    </div>
                  </div>
                )}

                {currentCap.id !== 'capture' && currentCap.id !== 'versioning' && currentCap.id !== 'workflow' && currentCap.id !== 'signatures' && (
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 font-mono text-xs flex items-center justify-between">
                    <span className="text-slate-700">Platform Control Engine:</span>
                    <span className="text-[#14532D] font-bold">Active & Enforced under ISO/IEC 27001</span>
                  </div>
                )}

                {/* Bottom Trigger Action */}
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Pre-configured validation test scripts included.</span>
                  <button
                    onClick={onOpenDemoModal}
                    className="text-xs font-bold text-[#14532D] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Live Platform Test</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. 6-Stage Governed Document Processing Pipeline */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-3">
              <Workflow className="h-3.5 w-3.5 text-[#14532D]" />
              <span>End-to-End Processing Flow</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight">
              The 6-Stage Intelligent Document Pipeline
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              From the moment an unstructured document arrives until its permanent defensible disposition, every step is automated, audited, and secured.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              {
                step: '01',
                title: 'Omnichannel Ingest',
                desc: 'MFP scanners, watched folders, email inboxes & high-speed REST APIs.'
              },
              {
                step: '02',
                title: 'De-Skew & OCR',
                desc: 'Image enhancement, speckle removal, and multilingual neural OCR.'
              },
              {
                step: '03',
                title: 'AI Classification',
                desc: 'Deep learning recognizes document types and splits mixed batches.'
              },
              {
                step: '04',
                title: 'Data Extraction',
                desc: 'Key-value pairs, nested tables, and barcode metadata coordinates.'
              },
              {
                step: '05',
                title: 'Validation & Sign',
                desc: 'Math cross-checks, ERP verification, and 21 CFR Part 11 e-signatures.'
              },
              {
                step: '06',
                title: 'Retention & Archive',
                desc: 'ISO 15489 policy schedules, legal holds, and certified disposition.'
              }
            ].map((p, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-[#F5F7F5] border border-slate-200/90 hover:border-[#14532D]/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-9 w-9 rounded-xl bg-white text-[#14532D] font-mono font-bold text-sm flex items-center justify-center border border-slate-200 mb-3 shadow-2xs group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                    {p.step}
                  </div>
                  <h3 className="text-sm font-bold text-[#14532D] mb-1.5 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#14532D] hover:underline"
            >
              <span>Explore Detailed Stage-by-Stage Architecture Specifications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Interactive Platform Simulation Workbench */}
      <section className="py-20 lg:py-24 bg-[#F5F7F5] border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-3">
              <Eye className="h-3.5 w-3.5 text-[#14532D]" />
              <span>Interactive Platform Simulation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight">
              Test Real Governed Records Live
            </h2>
            <p className="mt-3 text-base text-slate-700 leading-relaxed font-normal">
              Toggle between actual sample records from the SmartiDP brochure to test metadata extraction, immutable audit logs, and version histories in real time.
            </p>
          </div>

          <InteractiveWorkbench onOpenDemoModal={onOpenDemoModal} />
        </div>
      </section>

      {/* 7. Industry Solutions Hub */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-3">
                <Building2 className="h-3.5 w-3.5 text-[#14532D]" />
                <span>Tailored Vertical Configurations</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight">
                Engineered for High-Stakes Regulated Sectors
              </h2>
              <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                Out-of-the-box regulatory frameworks and pre-configured workflows tailored for strict inspection requirements.
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white font-semibold text-xs sm:text-sm shadow-md transition-all self-start lg:self-auto shrink-0"
            >
              <span>View All 8 Industry Modules</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {INDUSTRY_HIGHLIGHTS.map((ind) => {
              const Icon = ind.icon
              return (
                <div
                  key={ind.id}
                  className="p-8 rounded-3xl bg-[#F5F7F5] border border-slate-200/90 hover:border-[#14532D]/40 transition-all flex flex-col justify-between shadow-2xs hover:shadow-lg group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-white text-[#14532D] border border-slate-200 flex items-center justify-center shadow-xs group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white text-[#14532D] border border-[#14532D]/20 text-[11px] font-bold">
                        {ind.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1">{ind.name}</h3>
                    <div className="text-[10px] font-mono font-bold text-slate-500 mb-4 uppercase tracking-wider">
                      {ind.standards}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#14532D] font-mono">{ind.stat}</span>
                    <Link
                      to="/solutions"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14532D] hover:text-[#064E3B] group-hover:translate-x-1 transition-transform"
                    >
                      <span>{ind.action}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. Quantified Business Impact & Measurable ROI */}
      <section className="py-20 lg:py-28 bg-[#F5F7F5] border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-3">
              <TrendingUp className="h-3.5 w-3.5 text-[#14532D]" />
              <span>Measurable Enterprise Impact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight">
              Measurable ROI Across Every Department
            </h2>
            <p className="mt-3 text-base text-slate-700 leading-relaxed font-normal">
              Based on documented operational benchmarks from enterprise deployments of SmartiDP EDMS.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#14532D] font-mono mb-2">90%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Faster Document Retrieval</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                From an average of 18 minutes down to under 2 seconds using AI semantic natural language search.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#14532D] font-mono mb-2">85%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Faster Approval Cycles</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated parallel BPMN workflows and e-signatures cut approval turnarounds from weeks to hours.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#14532D] font-mono mb-2">99.8%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Data Extraction Precision</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-modal AI eliminates manual re-keying errors across invoices, batch records, and contracts.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#14532D] font-mono mb-2">100%</div>
              <div className="text-sm font-bold text-slate-900 mb-2">Continuous Audit Readiness</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cryptographic SHA-256 tamper-evident logs ensure zero surprise findings during regulatory audits.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/benefits"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
            >
              <span>Calculate Your Organization’s Quantified Savings</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Final Executive Closing Banner */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#14532D] via-[#064E3B] to-[#14532D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-semibold">
            <ShieldCheck className="h-4 w-4 text-emerald-300" />
            <span>Kenz Innovations · SmartiDP EDMS Enterprise 2026</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-white">
            Ready to Experience Governed Document Intelligence?
          </h2>

          <p className="text-emerald-100/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Schedule a confidential technical demonstration with our solutions engineers. We will walk through your exact document formats, compliance requirements, and integration architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-emerald-50 text-[#14532D] font-bold text-sm shadow-xl transition-all cursor-pointer"
            >
              Request a Personalised Demonstration
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent hover:bg-white/10 text-white font-semibold text-sm border border-white/30 transition-all text-center"
            >
              Speak to a Solutions Architect
            </Link>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200/80">
            <span>✓ Turnkey GxP Validation Accelerator Included</span>
            <span>✓ Choice of SaaS, Dedicated Cloud, or On-Premise</span>
            <span>✓ 24/7 Enterprise SLA Support</span>
          </div>
        </div>
      </section>
    </div>
  )
}
