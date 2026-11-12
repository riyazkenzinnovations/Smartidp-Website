import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import PlatformHub from '../components/PlatformHub'
import InteractiveWorkbench from '../components/InteractiveWorkbench'
import CtaBanner from '../components/CtaBanner'
import AnimatedList from '../components/AnimatedList'
import OperationalTransformation from '../components/OperationalTransformation'
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
  Workflow,
  ChevronRight,
  Users,
  Archive,
  BarChart3,
  RotateCw
} from 'lucide-react'

// 1. Interactive 8 Capability Domains with Live Visual Preview
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

// 3. Industry Solutions Preview
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
    action: 'Explore Pharma Spec'
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
    action: 'Explore MedDev Spec'
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
    action: 'Explore BFSI Spec'
  }
]

// 4. 6-Stage Intelligent Capture Pipeline Stages (Brochure Page 06)
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
    stat: 'Omnichannel'
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
    stat: '99.8% Precision'
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
    stat: 'Auto-Routing'
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
    stat: 'High Confidence'
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
    stat: '100% Traceable'
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
    stat: 'ISO 15489'
  }
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

      {/* 2. Global Regulatory Standards Marquee */}
      <section className="py-7 bg-[#F8FAFC] border-b border-slate-200/80">
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
      <OperationalTransformation />

      {/* 4. Platform Overview (Hub-and-Spoke Architecture) */}
      <PlatformHub onSelectDomain={handleSelectDomain} />

      {/* 5. Interactive 8 Foundational Capability Domains with Dynamic Live Preview Canvas */}
      <section id="core-domains" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-3">
                <Layers className="h-3.5 w-3.5 text-[#14532D]" />
                <span>8 Core Integrated Domains</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                An Integrated Suite for Every Stage of the Document Journey
              </h2>
              <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                Rather than cobbling together point-solution plugins, SmartiDP delivers 8 native capability domains built on one unified zero-trust core. Click each capability to inspect live controls.
              </p>
            </div>
            <Link
              to="/features"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all self-start lg:self-auto shrink-0 group"
            >
              <span>Explore All Technical Specifications</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Interactive Capability Showcase: Left Pills, Right Live Simulated Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Capability Selectors (5 cols) */}
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
                gap={10}
                radius={16}
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
                              ? 'bg-[#14532D] text-white shadow-sm'
                              : 'bg-[#F0FDF4] text-[#14532D] group-hover:bg-[#14532D] group-hover:text-white'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 text-left">
                          <div
                            className={`text-sm font-bold transition-colors ${
                              isSelected ? 'text-[#14532D]' : 'text-slate-900'
                            }`}
                          >
                            {cap.title}
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium truncate">
                            {cap.tagline}
                          </div>
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 shrink-0 transition-transform ${
                          isSelected
                            ? 'text-[#14532D] translate-x-1'
                            : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                      />
                    </div>
                  )
                }}
              />
            </div>

            {/* Right Column: Live Interactive Feature Simulator (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#14532D]" />
                  <span className="text-xs font-bold text-[#14532D] uppercase tracking-wider">
                    {currentCap.title}
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F0FDF4] text-[#14532D] text-xs font-bold border border-[#14532D]/20">
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
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Live Simulated UI Canvas */}
              <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-[#F5F7F5] to-white border border-slate-200/90">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span>Engine Simulation Console</span>
                    <span className="text-[10px] text-slate-400 font-sans normal-case">(Illustrative example.)</span>
                  </div>
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
                    <div className="text-[10px] text-slate-400 italic font-sans pt-1">Illustrative example.</div>
                  </div>
                )}

                {currentCap.id === 'manage' && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-700">Active Revision:</span>
                      <span className="px-2.5 py-0.5 rounded bg-[#14532D] text-white font-bold">v4.0 Effective (Locked)</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">v3.2 Draft &rarr; v4.0 Redline Comparison:</span>
                      <span className="text-[#14532D] font-bold">+14 clauses added · -2 withdrawn · 0 conflicts</span>
                    </div>
                    <div className="text-[10px] text-slate-400 italic font-sans pt-1">Illustrative example.</div>
                  </div>
                )}

                {currentCap.id === 'automate' && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-700">BPMN 2.0 Active Route:</span>
                      <span className="text-[#14532D] font-bold">Author &rarr; Technical Review (3/3) &rarr; QA Release</span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-[#14532D]/15 space-y-1.5">
                      <div className="flex items-center justify-between font-bold text-[#14532D]">
                        <span>✓ 21 CFR Part 11 Signature Validated</span>
                        <span>SHA-256 Valid</span>
                      </div>
                      <div className="text-[11px] text-slate-600">
                        Signer: <strong>Dr. Evelyn Vance (QA Head)</strong> · Meaning: <strong>Regulatory Approval</strong>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-400 italic font-sans pt-1">Illustrative example.</div>
                  </div>
                )}

                {currentCap.id === 'collaborate' && (
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-700">Active Co-Authors (3 Online):</span>
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[11px]">Dr. E. Vance (Editing §4.2)</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">M. Al-Mansoor (Reviewing)</span>
                      </div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">Live Workspace Sync:</span>
                      <span className="text-[#14532D] font-bold">0 conflicts · WebSocket TLS 1.3 connected</span>
                    </div>
                    <div className="text-[10px] text-slate-400 italic font-sans pt-1">Illustrative example.</div>
                  </div>
                )}

                {currentCap.id === 'discover' && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-700">Query: "SOP batch deviation autoclave"</span>
                      <span className="px-2 py-0.5 rounded bg-[#14532D] text-white font-bold text-[11px]">18 results · 180ms</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">Search Security Gate:</span>
                      <span className="text-[#14532D] font-bold">RBAC Permission-Trimmed (3 records redacted)</span>
                    </div>
                    <div className="text-[10px] text-slate-400 italic font-sans pt-1">Illustrative example.</div>
                  </div>
                )}

                {currentCap.id === 'govern' && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                      <span className="text-slate-700">Retention Schedule:</span>
                      <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[11px]">7 Years Post-Release · 2033-04-01</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500">Litigation Hold Status:</span>
                      <span className="text-[#14532D] font-bold">Inactive (Schedule Enforced)</span>
                    </div>
                    <div className="text-[10px] text-slate-400 italic font-sans pt-1">Illustrative example.</div>
                  </div>
                )}

                {currentCap.id === 'secure' && (
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 font-mono text-xs space-y-2">
                    <div className="flex items-center justify-between text-slate-700">
                      <span>Zero-Trust Security Gate:</span>
                      <span className="text-[#14532D] font-bold">AES-256-GCM / TLS 1.3 Enforced</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>Audit Trail Hash Chain:</span>
                      <span className="text-[#14532D] font-bold font-mono">SHA-256 Hash Chained (Verified)</span>
                    </div>
                    <div className="text-[10px] text-slate-400 italic font-sans pt-1">Illustrative example.</div>
                  </div>
                )}

                {currentCap.id === 'analyse' && (
                  <div className="space-y-2 font-mono text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                        <div className="text-slate-500">Avg Approval Time</div>
                        <div className="text-[#14532D] font-bold">4.2 Hours (-68%)</div>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                        <div className="text-slate-500">Active Workflows</div>
                        <div className="text-[#14532D] font-bold">142 In Progress</div>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                        <div className="text-slate-500">SLA Adherence</div>
                        <div className="text-[#14532D] font-bold">99.4% On-Time</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-400 italic font-sans pt-1">Illustrative example.</div>
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
      <section className="py-20 lg:py-24 bg-[#F8FAFC] text-slate-900 border-y border-slate-200/80 relative overflow-hidden">
        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-3 shadow-2xs">
              <Workflow className="h-3.5 w-3.5 text-[#14532D]" />
              <span>End-to-End Processing Flow</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
              The 6-Stage Intelligent Document Pipeline
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From the moment an unstructured document arrives until its permanent defensible disposition, every step is automated, audited, and secured.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {PIPELINE_STAGES.map((p, i) => (
              <div
                key={i}
                className="flip-card-container h-[245px] sm:h-[255px] w-full cursor-pointer group"
                tabIndex={0}
                role="region"
                aria-label={`${p.step} ${p.title}`}
              >
                <div className="flip-card-inner">
                  {/* Front Side: Glassmorphic Faded Green Card */}
                  <div className="flip-card-front p-5 glass-card-green flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-9 w-9 rounded-xl bg-[#F0FDF4] text-[#14532D] font-mono font-bold text-sm flex items-center justify-center border border-[#14532D]/20 shadow-2xs group-hover:bg-[#14532D] group-hover:text-white transition-all">
                          {p.step}
                        </div>
                        <span className="text-[10px] text-[#14532D] font-semibold flex items-center gap-1 bg-[#F0FDF4]/90 px-2 py-0.5 rounded-full border border-[#14532D]/15">
                          Flip <RotateCw className="h-2.5 w-2.5" />
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#14532D] transition-colors mb-1.5 leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {p.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#14532D]/15 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>Stage {p.step}</span>
                      <span className="text-[#14532D] font-bold">{p.stat}</span>
                    </div>
                  </div>

                  {/* Back Side: Forest Green Detail Card */}
                  <div className="flip-card-back p-5 bg-gradient-to-br from-[#064E3B] via-[#14532D] to-[#0F766E] text-white flex flex-col justify-between shadow-xl border border-emerald-400/40">
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-white/20 mb-2.5">
                        <span className="font-mono text-xs font-bold text-emerald-200">STAGE {p.step}</span>
                        <span className="text-[10px] uppercase font-bold text-emerald-100 tracking-wider bg-white/10 px-2 py-0.5 rounded-full">
                          {p.badge}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white mb-2">{p.title} Specs</h4>
                      <ul className="space-y-1.5 text-[11px] text-white/95 leading-tight">
                        {p.details.map((d, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="h-3 w-3 text-emerald-300 shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[10px] text-emerald-200 font-mono">
                      <span>{p.stat}</span>
                      <span className="text-white/80 font-sans">SmartiDP EDMS</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#14532D] hover:underline transition-colors"
            >
              <span>Explore Detailed Stage-by-Stage Architecture Specifications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Interactive Platform Simulation Workbench */}
      <InteractiveWorkbench onOpenDemoModal={onOpenDemoModal} />

      {/* 7. Industry Solutions Hub */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-3">
                <Building2 className="h-3.5 w-3.5 text-[#14532D]" />
                <span>Tailored Vertical Configurations</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
                Engineered for High-Stakes Regulated Sectors
              </h2>
              <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                Out-of-the-box regulatory frameworks and pre-configured workflows tailored for strict inspection requirements.
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all self-start lg:self-auto shrink-0 group"
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
                  className="p-8 rounded-2xl glass-card-green flex flex-col justify-between group"
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14532D] hover:text-[#166534] group-hover:translate-x-1 transition-transform"
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
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-3">
              <TrendingUp className="h-3.5 w-3.5 text-[#14532D]" />
              <span>Business Value</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
              Measurable outcomes across the enterprise
            </h2>
            <p className="mt-3 text-base text-slate-700 leading-relaxed font-normal">
              SmartiDP EDMS delivers value on four fronts at once: productivity, risk reduction, cost optimisation and better decisions. Typical improvement areas identified in business-case workshops include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center flex flex-col justify-between">
              <div>
                <div className="text-4xl sm:text-5xl font-semibold text-[#14532D] font-mono mb-2">Faster</div>
                <div className="text-sm font-bold text-slate-900 mb-2">Review & Approval Cycles</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Document review & approval cycles through parallel electronic workflows.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center flex flex-col justify-between">
              <div>
                <div className="text-4xl sm:text-5xl font-semibold text-[#14532D] font-mono mb-2">Less</div>
                <div className="text-sm font-bold text-slate-900 mb-2">Manual Data Entry</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Manual data entry via AI-powered capture and extraction.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center flex flex-col justify-between">
              <div>
                <div className="text-4xl sm:text-5xl font-semibold text-[#14532D] font-mono mb-2">Lower</div>
                <div className="text-sm font-bold text-slate-900 mb-2">Storage & Paper Costs</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Paper, printing, courier and physical storage costs.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm text-center flex flex-col justify-between">
              <div>
                <div className="text-4xl sm:text-5xl font-semibold text-[#14532D] font-mono mb-2">Ready</div>
                <div className="text-sm font-bold text-slate-900 mb-2">Continuous Audit Readiness</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For audits and inspections at any time, not just on audit day.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14532D] block mb-1">Business Case</span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Our consultants build a quantified, organisation-specific ROI model with you — covering labour savings, cycle-time reduction, storage and licence consolidation, and compliance risk avoidance.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/benefits"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all group"
            >
              <span>Explore Stakeholder Business Value & ROI</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Final Executive Closing Banner */}
      <CtaBanner onOpenDemoModal={onOpenDemoModal} />
    </div>
  )
}
