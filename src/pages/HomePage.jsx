import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PlatformHub from '../components/PlatformHub'
import InteractiveWorkbench from '../components/InteractiveWorkbench'
import CtaBanner from '../components/CtaBanner'
import AnimatedList from '../components/AnimatedList'
import OperationalTransformation from '../components/OperationalTransformation'
import CoordinationSteps from '../components/CoordinationSteps'
import {
  ArrowRight,
  ShieldCheck,
  Layers,
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
  TrendingDown,
  Workflow,
  ChevronRight,
  Users,
  Archive,
  BarChart3,
  RotateCw,
  Clock,
  DollarSign
} from 'lucide-react'

// 1. Interactive 8 Capability Domains
const CAPABILITIES_SHOWCASE = [
  {
    id: 'capture',
    title: 'Capture',
    icon: ScanText,
    badge: 'Intelligent Ingestion',
    tagline: 'Scan, Ingest, OCR & AI Classification',
    desc: 'Ingest content from scanners, shared inboxes, mobile devices, and REST APIs. Multi-modal AI enhances, classifies, and extracts structured key-value pairs in under 340ms.',
    bullets: [
      'Omnichannel ingestion: MFP scanners, shared mailboxes, mobile capture & APIs',
      'Automated de-skew, cleanup, multilingual OCR and handwriting recognition (ICR)',
      'AI document classification trained on enterprise document types with batch splitting',
      'Human-in-the-loop Validation Station with business rules & master data lookups'
    ],
    previewType: 'capture'
  },
  {
    id: 'manage',
    title: 'Manage',
    icon: FileCheck2,
    badge: 'Revision Governance',
    tagline: 'Versioning, Metadata & Check-In/Out',
    desc: 'Enforce complete revision integrity. Knowledge workers always access current effective revisions while obsolete versions are withdrawn automatically.',
    bullets: [
      'Strict major (1.0) and minor (0.1) versioning with lifecycle state gates',
      'Mandatory check-in/out locks preventing concurrent editing conflicts',
      'Side-by-side redline diff comparison highlighting added, deleted, or changed text',
      'Pre-built and custom metadata schemas with inheritance and controlled vocabularies'
    ],
    previewType: 'manage'
  },
  {
    id: 'automate',
    title: 'Automate',
    icon: GitBranch,
    badge: 'BPMN 2.0 Engine',
    tagline: 'BPMN Workflows & E-Signatures',
    desc: 'Model and automate sophisticated multi-stage document lifecycles with strict segregation of duties, automated escalation rules, and legally binding 21 CFR Part 11 electronic signatures.',
    bullets: [
      'BPMN 2.0 drag-and-drop designer for sequential, parallel, and conditional approvals',
      'Segregation of duties: Authors cannot approve their own changes',
      'Configurable SLAs, automated reminders, and dynamic out-of-office re-routing',
      'Two-component credential re-authentication e-signatures cryptographically bound via SHA-256'
    ],
    previewType: 'automate'
  },
  {
    id: 'collaborate',
    title: 'Collaborate',
    icon: Users,
    badge: 'Real-Time Workspaces',
    tagline: 'Co-Authoring, Comments & Sharing',
    desc: 'Empower cross-functional teams to securely draft, review, and annotate documents in real time with synchronized edits, contextual review threads, and access gates.',
    bullets: [
      'Real-time co-authoring with synchronized edits and tracked changes',
      'Threaded in-line contextual comments, @mentions, and review annotations',
      'Governed internal and external sharing workspaces with granular permission gates',
      'Microsoft Office 365, Word, Excel, and PowerPoint direct in-browser editing'
    ],
    previewType: 'collaborate'
  },
  {
    id: 'discover',
    title: 'Discover',
    icon: Search,
    badge: 'Sub-Second Discovery',
    tagline: 'Full-Text, Semantic & Metadata Search',
    desc: 'Find any document, paragraph, or extracted entity across millions of records with permission-trimmed natural language and structured filters.',
    bullets: [
      'Full-text OCR search across scanned PDFs, Office files & TIFF images in under 340ms',
      'Parametric metadata filtering by document type, status, department & date ranges',
      'Natural-language semantic discovery understanding intent, context, and synonyms',
      'Strict permission-aware search trimming preventing unauthorized visibility'
    ],
    previewType: 'discover'
  },
  {
    id: 'govern',
    title: 'Govern',
    icon: Archive,
    badge: 'ISO 15489 Compliant',
    tagline: 'Retention, Legal Hold & Disposition',
    desc: 'Implement defensible records management complying with ISO 15489, ISO 16175, and GDPR retention principles with legal hold freeze mechanisms.',
    bullets: [
      'Event-triggered and time-based policy retention schedules across all record types',
      'Litigation legal holds that immediately freeze scheduled disposition schedules',
      'Multi-tier review and sign-off workflows before permanent, defensible disposal',
      'Searchable PDF/A output for long-term digital preservation and audit compliance'
    ],
    previewType: 'govern'
  },
  {
    id: 'secure',
    title: 'Secure',
    icon: ShieldCheck,
    badge: 'ALCOA+ Data Integrity',
    tagline: 'Zero-Trust Access, Encryption & DLP',
    desc: 'A hardened zero-trust architecture featuring AES-256 encryption at rest, TLS 1.3 in transit, and immutable append-only audit trail logging.',
    bullets: [
      'Cryptographic SHA-256 hash-chained append-only audit trail capturing 100% of actions',
      'Every view, export, edit, approval, and permission change logged in UTC',
      'Enterprise SSO with SAML 2.0 / OIDC, MFA, and automated SCIM provisioning',
      'Role-based (RBAC) and attribute-based (ABAC) access down to document & field level'
    ],
    previewType: 'secure'
  },
  {
    id: 'analyse',
    title: 'Analyse',
    icon: BarChart3,
    badge: 'Operational Intelligence',
    tagline: 'Dashboards, KPIs & Audit Reporting',
    desc: 'Gain instant operational visibility into throughput bottlenecks, review turnaround times, compliance metrics, and document lifecycle analytics across business units.',
    bullets: [
      'Real-time operational dashboards tracking document throughput and active reviews',
      'Process KPI reporting measuring cycle times, bottleneck detection, and SLA adherence',
      'Comprehensive regulatory audit logs and exportable compliance inspection packages',
      'Workload distribution heatmaps and automated SLA notification triggers'
    ],
    previewType: 'analyse'
  }
]

// Industry Solutions
const INDUSTRY_HIGHLIGHTS = [
  {
    id: 'pharma',
    name: 'Pharmaceuticals & Biotech',
    badge: 'GxP Validated',
    icon: FlaskConical,
    standards: '21 CFR Part 11 · EU Annex 11 · GAMP 5 · ICH Q10 · ALCOA+',
    headline: 'Continuous Inspection-Readiness for Life Sciences',
    desc: 'SOPs, batch records, validation documents, regulatory submissions, CMC, and training records with automated change control and validation accelerator.',
    stat: '100% Audit Trail',
    action: 'Explore Pharma Spec',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'meddev',
    name: 'Medical Devices',
    badge: 'ISO 13485:2016',
    icon: Stethoscope,
    standards: 'ISO 13485 · FDA QMSR · EU MDR / IVDR · ISO 14971',
    headline: 'Design History Files & Device Master Records',
    desc: 'Design history files, technical documentation, device master records, risk files, and CAPA with complete verification trace matrix.',
    stat: '360° Lifecycle',
    action: 'Explore MedDev Spec',
    color: 'from-sky-500 to-blue-600'
  },
  {
    id: 'finance',
    name: 'Banking, Financial Services & Insurance',
    badge: 'SOC 2 Type II',
    icon: Building2,
    standards: 'SOC 2 · ISO 27001 · GDPR · AML regulations',
    headline: 'High-Volume Document Security & AP Automation',
    desc: 'KYC/onboarding, loan files, policies, claims, board papers, and regulatory reporting with tamper-evident audit trails and automated PO matching.',
    stat: '3 Deployments',
    action: 'Explore BFSI Spec',
    color: 'from-violet-500 to-purple-600'
  }
]

// Pipeline Stages
const PIPELINE_STAGES = [
  {
    step: '01',
    title: 'Omnichannel Ingest',
    desc: 'MFP scanners, watched folders, email inboxes & high-speed REST APIs.',
    badge: 'Ingestion',
    details: [
      'MFP scanners & email mailboxes',
      'Mobile capture & watched folders',
      'Sub-340ms stream ingestion'
    ],
    stat: 'Omnichannel',
    color: 'from-sky-500 to-blue-600'
  },
  {
    step: '02',
    title: 'De-Skew & OCR',
    desc: 'Image enhancement, speckle removal, and multilingual neural OCR.',
    badge: 'Pre-Process',
    details: [
      'Automated de-skew & cleanup',
      'Multilingual OCR in 50+ languages',
      'Handwriting & cursive recognition'
    ],
    stat: '99.8% Precision',
    color: 'from-violet-500 to-purple-600'
  },
  {
    step: '03',
    title: 'AI Classification',
    desc: 'Deep learning recognizes document types and splits mixed batches.',
    badge: 'Neural AI',
    details: [
      'Automatic batch splitting',
      'Zero separator sheets needed',
      'Pre-trained for invoices & SOPs'
    ],
    stat: 'Auto-Routing',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    step: '04',
    title: 'Data Extraction',
    desc: 'Key-value pairs, nested tables, and barcode metadata coordinates.',
    badge: 'Extraction',
    details: [
      'Key-value coordinate extraction',
      'Complex nested table parsing',
      'Confidence scoring per field'
    ],
    stat: 'High Confidence',
    color: 'from-orange-500 to-amber-600'
  },
  {
    step: '05',
    title: 'Validation & Sign',
    desc: 'Math cross-checks, ERP verification, and 21 CFR Part 11 e-signatures.',
    badge: 'Governance',
    details: [
      'Automated 3-way ERP PO checks',
      'Human-in-the-loop review station',
      '21 CFR Part 11 digital signatures'
    ],
    stat: '100% Traceable',
    color: 'from-rose-500 to-pink-600'
  },
  {
    step: '06',
    title: 'Retention & Archive',
    desc: 'ISO 15489 policy schedules, legal holds, and certified disposition.',
    badge: 'Archival',
    details: [
      'Searchable PDF/A preservation',
      'Event- & time-based retention',
      'Immediate legal hold freezing'
    ],
    stat: 'ISO 15489',
    color: 'from-teal-500 to-cyan-600'
  }
]

// ROI Metrics
const ROI_METRICS = [
  {
    metric: '80%',
    label: 'Faster Approvals',
    desc: 'Review & approval cycles through parallel electronic workflows.',
    icon: Clock,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    metric: '95%',
    label: 'Less Manual Entry',
    desc: 'Manual data entry eliminated via intelligent capture and extraction.',
    icon: TrendingDown,
    color: 'from-sky-500 to-blue-600'
  },
  {
    metric: '60%',
    label: 'Lower Storage Costs',
    desc: 'Paper, printing, courier and physical storage costs cut.',
    icon: DollarSign,
    color: 'from-violet-500 to-purple-600'
  },
  {
    metric: '100%',
    label: 'Audit Ready',
    desc: 'Continuous inspection readiness — not just on audit day.',
    icon: ShieldCheck,
    color: 'from-orange-500 to-amber-600'
  }
]

const COMPLIANCE_STANDARDS = [
  'FDA 21 CFR Part 11',
  'EU GMP Annex 11',
  'ISO 9001:2015',
  'ISO 13485:2016',
  'ISO/IEC 27001',
  'GDPR & HIPAA',
  'SOC 2 Type II',
  'ISO 15489',
  'GAMP 5'
]

export default function HomePage({ onOpenDemoModal, onOpenVideoModal }) {
  const [activeCapability, setActiveCapability] = useState(0)

  const handleSelectDomain = (domainId) => {
    const idx = CAPABILITIES_SHOWCASE.findIndex(c => c.id === domainId)
    if (idx !== -1) {
      setActiveCapability(idx)
      const el = document.getElementById('core-domains')
      if (el) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
      }
    }
  }

  const currentCap = CAPABILITIES_SHOWCASE[activeCapability] || CAPABILITIES_SHOWCASE[0]

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero
        onOpenDemoModal={onOpenDemoModal}
        onOpenVideoModal={onOpenVideoModal}
      />

      {/* 2. Compliance Standards Bar */}
      <section className="py-5 bg-slate-900 border-b border-slate-700/60">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Certified Controls For
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {COMPLIANCE_STANDARDS.map((std, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-white/8 border border-white/12 text-slate-300 text-[11px] font-bold"
                >
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operational Transformation */}
      <OperationalTransformation />

      {/* 4. Platform Hub */}
      <PlatformHub onSelectDomain={handleSelectDomain} />

      {/* 5. From Creation to Co-ordination Steps (Interactive 4-Step Architecture) */}
      <CoordinationSteps />

      {/* 6. 8 Capability Domains */}
      <section id="core-domains" className="py-20 lg:py-28 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-4 uppercase tracking-wider">
                <Layers className="h-3.5 w-3.5" />
                <span>8 Core Integrated Domains</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                An Integrated Suite for{' '}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  Every Stage
                </span>{' '}
                of the Document Journey
              </h2>
              <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
                Rather than cobbling together point-solution plugins, SmartiDP delivers 8 native capability domains built on one unified zero-trust core. Click each capability to inspect live controls.
              </p>
            </div>
            <Link
              to="/features"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all self-start lg:self-auto shrink-0 group"
            >
              <span>All Technical Specs</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Capability showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left — pill list */}
            <div className="lg:col-span-5">
              <AnimatedList
                items={CAPABILITIES_SHOWCASE}
                selectedIndex={activeCapability}
                onItemSelect={(item, index) => setActiveCapability(index)}
                animation="pop"
                theme="light"
                accentColor="#14532D"
                width="100%"
                maxHeight={700}
                gap={8}
                radius={14}
                frame={false}
                selectOnHover={false}
                itemClassName="group !p-3.5 sm:!p-4"
                renderItem={(cap, idx, isSelected) => {
                  const Icon = cap.icon
                  return (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-slate-900 text-white shadow-sm'
                              : 'bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 text-left">
                          <div className={`text-sm font-bold transition-colors ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                            {cap.title}
                          </div>
                          <div className="text-[11px] text-slate-400 font-medium truncate">{cap.tagline}</div>
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-transform ${
                          isSelected ? 'text-emerald-600 translate-x-1' : 'text-slate-300 group-hover:text-slate-500'
                        }`}
                      />
                    </div>
                  )
                }}
              />
            </div>

            {/* Right — live preview */}
            <div className="lg:col-span-7 rounded-3xl border border-slate-200 shadow-xl overflow-hidden bg-white">
              {/* Top meta bar */}
              <div className="flex items-center justify-between gap-3 px-6 py-4 bg-slate-900 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {currentCap.title}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold border border-emerald-400/25">
                  {currentCap.badge}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                {/* Description */}
                <div className="space-y-4 pb-6 border-b border-slate-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{currentCap.tagline}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{currentCap.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {currentCap.bullets.map((b, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-600 leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulation console */}
                <div className="mt-5 rounded-2xl bg-slate-900 p-5">
                  <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span>Engine Simulation Console</span>
                      <span className="text-slate-600 font-sans normal-case">(Illustrative)</span>
                    </div>
                    <span className="text-emerald-400 font-bold">Status: Online · 320ms</span>
                  </div>

                  {currentCap.id === 'capture' && (
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 bg-white/8 rounded-xl border border-white/10 flex items-center justify-between">
                        <span className="text-slate-300">Document Type:</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">SOP · 99.9%</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[11px]">
                        {[['Document ID','SOP-QA-0142 (100%)'],['Effective Date','2026-03-14 (99.8%)'],['Validation','Auto Pass (100%)']].map(([k,v],i)=>(
                          <div key={i} className="p-2.5 bg-white/5 rounded-lg border border-white/8">
                            <div className="text-slate-500">{k}</div>
                            <div className="text-emerald-400 font-bold text-[10px]">{v}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {currentCap.id === 'manage' && (
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 bg-white/8 rounded-xl border border-white/10 flex items-center justify-between">
                        <span className="text-slate-300">Active Revision:</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">v4.0 Effective (Locked)</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/8 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500">v3.2 → v4.0 Redline:</span>
                        <span className="text-emerald-400 font-bold">+14 added · -2 withdrawn</span>
                      </div>
                    </div>
                  )}
                  {currentCap.id === 'automate' && (
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 bg-white/8 rounded-xl border border-white/10 flex items-center justify-between">
                        <span className="text-slate-300">BPMN 2.0 Route:</span>
                        <span className="text-emerald-400 font-bold">Author → Review (3/3) → QA</span>
                      </div>
                      <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-400/20 space-y-1">
                        <div className="flex items-center justify-between font-bold text-emerald-400 text-[11px]">
                          <span>✓ 21 CFR Part 11 Signature Validated</span>
                          <span>SHA-256 ✓</span>
                        </div>
                        <div className="text-[11px] text-slate-400">Signer: <strong className="text-slate-300">Dr. E. Vance (QA)</strong> · Meaning: Regulatory Approval</div>
                      </div>
                    </div>
                  )}
                  {currentCap.id === 'collaborate' && (
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 bg-white/8 rounded-xl border border-white/10 flex items-center justify-between">
                        <span className="text-slate-300">Active Co-Authors:</span>
                        <div className="flex gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[11px] font-bold">Dr. E. Vance</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">M. Al-Mansoor</span>
                        </div>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/8 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500">Sync Status:</span>
                        <span className="text-emerald-400 font-bold">0 conflicts · TLS 1.3</span>
                      </div>
                    </div>
                  )}
                  {currentCap.id === 'discover' && (
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 bg-white/8 rounded-xl border border-white/10 flex items-center justify-between">
                        <span className="text-slate-300">"SOP batch deviation autoclave"</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">18 results · 180ms</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/8 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500">Security Gate:</span>
                        <span className="text-emerald-400 font-bold">RBAC Trimmed (3 redacted)</span>
                      </div>
                    </div>
                  )}
                  {currentCap.id === 'govern' && (
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 bg-white/8 rounded-xl border border-white/10 flex items-center justify-between">
                        <span className="text-slate-300">Retention Schedule:</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">7 Yrs · 2033-04-01</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/8 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500">Litigation Hold:</span>
                        <span className="text-emerald-400 font-bold">Inactive (Enforced)</span>
                      </div>
                    </div>
                  )}
                  {currentCap.id === 'secure' && (
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 bg-white/8 rounded-xl border border-white/10 flex items-center justify-between">
                        <span className="text-slate-300">Encryption:</span>
                        <span className="text-emerald-400 font-bold">AES-256-GCM / TLS 1.3</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/8 flex items-center justify-between text-[11px]">
                        <span className="text-slate-500">Audit Hash Chain:</span>
                        <span className="text-emerald-400 font-bold">SHA-256 Verified ✓</span>
                      </div>
                    </div>
                  )}
                  {currentCap.id === 'analyse' && (
                    <div className="grid grid-cols-3 gap-2 font-mono text-[11px]">
                      {[['Avg Approval','4.2 hrs (-68%)'],['Active Workflows','142 In Progress'],['SLA Adherence','99.4% On-Time']].map(([k,v],i)=>(
                        <div key={i} className="p-2.5 bg-white/5 rounded-lg border border-white/8">
                          <div className="text-slate-500">{k}</div>
                          <div className="text-emerald-400 font-bold">{v}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">Pre-configured validation test scripts included.</span>
                    <button
                      onClick={onOpenDemoModal}
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer transition"
                    >
                      <span>Live Platform Test</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 6-Stage Pipeline — dark section */}
      <section className="py-20 lg:py-28 bg-slate-900 border-b border-slate-700/60 relative overflow-hidden">
        {/* glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-500/6 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold mb-4 uppercase tracking-widest">
              <Workflow className="h-3.5 w-3.5" />
              <span>End-to-End Processing Flow</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              The{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                6-Stage
              </span>{' '}
              Intelligent Document Pipeline
            </h2>
            <p className="mt-4 text-base text-slate-400 leading-relaxed">
              From the moment an unstructured document arrives until its permanent defensible disposition, every step is automated, audited, and secured.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {PIPELINE_STAGES.map((p, i) => (
              <div
                key={i}
                className="flip-card-container h-[255px] w-full cursor-pointer group"
                tabIndex={0}
                role="region"
                aria-label={`${p.step} ${p.title}`}
              >
                <div className="flip-card-inner">
                  {/* Front — white card */}
                  <div className="flip-card-front p-5 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-9 w-9 rounded-xl bg-slate-100 text-slate-700 font-mono font-bold text-sm flex items-center justify-center border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-all">
                          {p.step}
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                          {p.badge}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-emerald-700 transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                    </div>
                    <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>Stage {p.step}</span>
                      <span className="font-bold text-emerald-600">{p.stat}</span>
                    </div>
                  </div>

                  {/* Back — dark green card */}
                  <div className="flip-card-back p-5 bg-gradient-to-br from-[#064E3B] via-[#14532D] to-[#0F766E] rounded-2xl text-white flex flex-col justify-between shadow-xl border border-emerald-400/40">
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-white/20 mb-3">
                        <span className="font-mono text-xs font-bold text-emerald-200">STAGE {p.step}</span>
                        <span className="text-[9px] uppercase font-bold text-emerald-100 tracking-wider bg-white/10 px-2 py-0.5 rounded-full">
                          {p.badge}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white mb-3 leading-tight">{p.title} Specs</h4>
                      <ul className="space-y-2 text-[11px] text-white/90 leading-tight">
                        {p.details.map((d, di) => (
                          <li key={di} className="flex items-start gap-1.5">
                            <CheckCircle2 className="h-3 w-3 text-emerald-300 shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2.5 border-t border-white/20 flex items-center justify-between text-[10px] text-emerald-200 font-mono">
                      <span>{p.stat}</span>
                      <span className="text-white/70 font-sans">SmartiDP EDMS</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>



          <div className="mt-10 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition group"
            >
              <span>Explore Detailed Stage-by-Stage Architecture Specifications</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Interactive Platform Workbench */}
      <InteractiveWorkbench onOpenDemoModal={onOpenDemoModal} />

      {/* 8. Industry Solutions Hub */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold mb-4 uppercase tracking-wider">
                <Building2 className="h-3.5 w-3.5" />
                <span>Tailored Vertical Configurations</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                Engineered for{' '}
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  High-Stakes
                </span>{' '}
                Regulated Sectors
              </h2>
              <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
                Out-of-the-box regulatory frameworks and pre-configured workflows tailored for strict inspection requirements.
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all self-start lg:self-auto shrink-0 group"
            >
              <span>View All 8 Industry Modules</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {INDUSTRY_HIGHLIGHTS.map((ind) => {
              const Icon = ind.icon
              return (
                <div
                  key={ind.id}
                  className="group relative rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${ind.color} text-white flex items-center justify-center shadow-sm`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r ${ind.color} text-white`}>
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">{ind.name}</h3>
                  <div className="text-[10px] font-mono font-bold text-slate-400 mb-4 uppercase tracking-wider">
                    {ind.standards}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">{ind.desc}</p>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 font-mono">{ind.stat}</span>
                    <Link
                      to="/solutions"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-600 group-hover:translate-x-1 transition-all"
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

      {/* 9. ROI Metrics */}
      <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold mb-4 uppercase tracking-wider shadow-sm">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Business Value</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Measurable outcomes{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                across the enterprise
              </span>
            </h2>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              SmartiDP EDMS delivers value on four fronts at once: productivity, risk reduction, cost optimisation and better decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROI_METRICS.map((m, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-7 overflow-hidden flex flex-col text-center"
              >
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${m.color} text-white flex items-center justify-center mx-auto mb-4 shadow-sm`}>
                  <m.icon className="h-6 w-6" />
                </div>
                <div className="text-5xl font-black text-slate-900 leading-none mb-2">{m.metric}</div>
                <div className="text-sm font-bold text-slate-800 mb-2">{m.label}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Business case callout */}
          <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-slate-900 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/25 text-emerald-400 flex items-center justify-center shrink-0">
                <BarChart3 className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">Business Case</div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our consultants build a quantified, organisation-specific ROI model — covering labour savings, cycle-time reduction, storage consolidation, and compliance risk avoidance.
                </p>
              </div>
            </div>
            <Link
              to="/benefits"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/30 transition-all shrink-0 group"
            >
              <span>Explore ROI & Business Value</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Final CTA Banner */}
      <CtaBanner onOpenDemoModal={onOpenDemoModal} />
    </div>
  )
}
