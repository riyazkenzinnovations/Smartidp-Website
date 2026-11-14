import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import InteractiveWorkbench from '../components/InteractiveWorkbench'
import RequestDemoButton from '../components/RequestDemoButton'
import dashboard1Img from '../assets/Dashboard1.png'
import {
  ScanText,
  FileCheck2,
  GitBranch,
  FileSignature,
  FileSpreadsheet,
  Search,
  Lock,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Sliders,
  ChevronRight,
  Activity,
  Cpu,
  Zap,
  Globe2,
  Play
} from 'lucide-react'

const CAPABILITY_DOMAINS = [
  {
    id: 'capture',
    num: '01',
    title: 'Intelligent Capture & OCR',
    badge: 'Neural Ingestion',
    icon: ScanText,
    accent: 'from-emerald-600 to-teal-600',
    accentLight: 'rgba(240, 253, 244, 0.85)',
    summary: 'Omnichannel content ingestion from network scanners, email, mobile, and APIs. Multi-modal AI enhances, classifies, and extracts structured data with confidence scores.',
    telemetry: [
      { label: 'Latency', value: '< 340ms' },
      { label: 'Accuracy', value: '99.4% Field Confidence' },
      { label: 'Ingestion', value: 'Omnichannel + APIs' },
      { label: 'Language', value: '50+ Scripts & ICR' }
    ],
    specs: [
      { name: 'Multi-Modal Layout Analysis', desc: 'Identifies headers, tables, key-value pairs, barcodes, and stamps.' },
      { name: 'Pre-Processing Cleanup', desc: 'Automated de-skew, contrast normalization, and speckle removal.' },
      { name: 'Multilingual OCR & ICR', desc: 'Recognizes machine-printed text and hand-printed handwriting across 50+ languages.' },
      { name: 'Validation Station', desc: 'Human-in-the-loop review station for fields falling below confidence thresholds.' }
    ]
  },
  {
    id: 'versioning',
    num: '02',
    title: 'Document & Version Control',
    badge: 'Single Source of Truth',
    icon: FileCheck2,
    accent: 'from-teal-600 to-cyan-600',
    accentLight: 'rgba(236, 253, 245, 0.85)',
    summary: 'Enforce strict revision governance. Users always see the current effective version while obsolete copies are automatically archived.',
    telemetry: [
      { label: 'Status Flow', value: 'Draft (0.x) → Effective (1.0)' },
      { label: 'Concurrency', value: 'Zero Overwrite Collisions' },
      { label: 'Diff Engine', value: 'Visual & Text Redline' },
      { label: 'Multi-Site', value: 'Inherited Parent Changes' }
    ],
    specs: [
      { name: 'Major & Minor Versioning', desc: 'Strict draft (0.x) vs. effective (1.0, 2.0) status transitions.' },
      { name: 'Check-In / Check-Out Locks', desc: 'Prevents concurrent conflicting edits with mandatory revision notes.' },
      { name: 'Redline Comparison', desc: 'Side-by-side text and visual diff highlight added, deleted, or altered clauses.' },
      { name: 'Multisite Master Documents', desc: 'Linked multilingual and plant-specific variants inherit parent change orders.' }
    ]
  },
  {
    id: 'workflow',
    num: '03',
    title: 'Visual Workflow Automation',
    badge: 'BPMN 2.0 Engine',
    icon: GitBranch,
    accent: 'from-emerald-700 to-green-600',
    accentLight: 'rgba(240, 253, 244, 0.85)',
    summary: 'A visual, no-code workflow designer lets business owners model complex reviews, approvals, and escalations with strict segregation of duties.',
    telemetry: [
      { label: 'Engine', value: 'BPMN 2.0 Compliant' },
      { label: 'Governance', value: 'Segregation of Duties' },
      { label: 'Escalations', value: 'Dynamic SLA Routing' },
      { label: 'Templates', value: 'GxP / SOP / CAPA Ready' }
    ],
    specs: [
      { name: 'Drag-and-Drop Designer', desc: 'Serial, parallel, consensus, and conditional approval branches.' },
      { name: 'Segregation of Duties', desc: 'Enforces policy preventing document authors from approving their own releases.' },
      { name: 'SLA Tracking & Reminders', desc: 'Automated email alerts, escalation pathways, and dynamic out-of-office delegation.' },
      { name: 'GxP Templates Included', desc: 'Pre-built workflows for SOP change control, deviation reports, and CAPA.' }
    ]
  },
  {
    id: 'signatures',
    num: '04',
    title: 'Electronic Signatures',
    badge: '21 CFR Part 11 & eIDAS',
    icon: FileSignature,
    accent: 'from-cyan-600 to-blue-600',
    accentLight: 'rgba(238, 242, 255, 0.85)',
    summary: 'Fully compliant digital and electronic signatures. Cryptographically binds signer identity, date/time in UTC, and legal manifestation of intent to the document.',
    telemetry: [
      { label: 'Standard', value: 'FDA 21 CFR Part 11 & eIDAS' },
      { label: 'Cryptography', value: 'SHA-256 Digest Seal' },
      { label: 'Auth Factor', value: 'Two-Component Verified' },
      { label: 'Timestamp', value: 'UTC Certified Manifest' }
    ],
    specs: [
      { name: 'Two-Component Authentication', desc: 'Re-entry of password or biometric credential prior to executing signature.' },
      { name: 'Declared Signature Meanings', desc: 'Review, Authorship, Approval, Technical Verification, or Release.' },
      { name: 'Cryptographic SHA-256 Binding', desc: 'Tamper-evident seal invalidates signature if document bytes are altered.' },
      { name: 'eIDAS & ESIGN Support', desc: 'Advanced and Qualified Electronic Signatures (QES) compatible with PKI.' }
    ]
  },
  {
    id: 'distribution',
    num: '05',
    title: 'Controlled Distribution & Printing',
    badge: 'Leak Prevention',
    icon: Lock,
    accent: 'from-emerald-600 to-teal-700',
    accentLight: 'rgba(240, 253, 244, 0.85)',
    summary: 'Eliminate uncontrolled copies and paper leaks. Dynamic on-demand watermarking embeds user identity, copy numbers, and timestamp upon view or print.',
    telemetry: [
      { label: 'Watermark', value: 'Dynamic Session Overlay' },
      { label: 'Tracking', value: 'Serialized Copy Number' },
      { label: 'Recall', value: 'Instant Revoke on Supersede' },
      { label: 'Access Gate', value: 'Certified Controller Only' }
    ],
    specs: [
      { name: 'Dynamic Watermarking', desc: 'Overlays user name, IP address, purpose, and date across every page.' },
      { name: 'Controlled Copy Numbering', desc: 'Each physical print generates a unique serialized copy tracked in audit log.' },
      { name: 'Expiration & Recall', desc: 'Mark documents superseded to automatically revoke read links across portals.' },
      { name: 'Print Quotas & Permissions', desc: 'Restrict printing capability to certified document controllers only.' }
    ]
  },
  {
    id: 'retention',
    num: '06',
    title: 'Records Management & Retention',
    badge: 'ISO 15489 Standard',
    icon: FileSpreadsheet,
    accent: 'from-teal-600 to-emerald-700',
    accentLight: 'rgba(236, 253, 245, 0.85)',
    summary: 'Automate content lifecycles from active creation to permanent archival or certified destruction in compliance with ISO 15489 and GDPR principles.',
    telemetry: [
      { label: 'Standard', value: 'ISO 15489 & ISO 16175' },
      { label: 'Litigation', value: '1-Click Freeze Hold' },
      { label: 'Disposal', value: 'Dual-Signoff Destruction' },
      { label: 'Format', value: 'Standardized PDF/A-1b' }
    ],
    specs: [
      { name: 'Policy-Driven Retention', desc: 'Event-triggered and time-based schedules (e.g. 10 years post-batch release).' },
      { name: 'Legal & Litigation Holds', desc: 'One-click litigation freeze overrides standard disposal schedules.' },
      { name: 'Defensible Disposition', desc: 'Two-tier sign-off for destruction with permanent tamper-proof certificates.' },
      { name: 'PDF/A Archival Renditions', desc: 'Automated background conversion to ISO-standard PDF/A for long-term survival.' }
    ]
  },
  {
    id: 'search',
    num: '07',
    title: 'Enterprise & Semantic Search',
    badge: 'Sub-Second Discovery',
    icon: Search,
    accent: 'from-sky-600 to-blue-700',
    accentLight: 'rgba(240, 249, 255, 0.85)',
    summary: 'Instantaneous discovery across millions of documents. Search by metadata, full text, or natural-language semantic meaning with security trimming.',
    telemetry: [
      { label: 'Search Speed', value: '< 180ms Latency' },
      { label: 'Formats', value: '100+ Streamed In-Browser' },
      { label: 'Security', value: 'Security-Trimmed Index' },
      { label: 'NLP', value: 'Vector & Intent Match' }
    ],
    specs: [
      { name: 'Security-Trimmed Indexing', desc: 'Users only see search results for documents their permissions grant.' },
      { name: 'Universal In-Browser Viewer', desc: 'High-speed streaming viewer for 100+ formats without local app install.' },
      { name: 'Parametric & Faceted Filters', desc: 'Drill down by document type, author, site, effective date, and metadata tags.' },
      { name: 'Natural Language Queries', desc: 'Semantic understanding matches intent, synonyms, and conceptual context.' }
    ]
  },
  {
    id: 'security',
    num: '08',
    title: 'Zero-Trust Security & Audit Trail',
    badge: 'ALCOA+ Forensic Integrity',
    icon: ShieldCheck,
    accent: 'from-emerald-700 to-teal-800',
    accentLight: 'rgba(240, 253, 244, 0.85)',
    summary: 'Defense-in-depth protection. Append-only, tamper-evident audit trails guarantee complete forensic accountability for every view, edit, or approval.',
    telemetry: [
      { label: 'Audit Trail', value: 'Append-Only Hash-Chained' },
      { label: 'Encryption', value: 'AES-256 + TLS 1.3 / BYOK' },
      { label: 'SSO / IAM', value: 'SAML 2.0 / SCIM Ready' },
      { label: 'Access Control', value: 'Fine-Grained RBAC & ABAC' }
    ],
    specs: [
      { name: 'Append-Only Hash-Chained Logs', desc: 'Every user action cryptographically chained and timestamped in UTC.' },
      { name: 'Enterprise SSO & SCIM', desc: 'SAML 2.0 / OIDC integrations with automated user provisioning and de-provisioning.' },
      { name: 'Dual-Layer Encryption', desc: 'AES-256 at rest, TLS 1.3 in flight, with optional Customer-Managed Keys (BYOK).' },
      { name: 'Fine-Grained Permissions (RBAC/ABAC)', desc: 'Control permissions down to document metadata fields and lifecycle states.' }
    ]
  }
]

const HERO_METRICS = [
  { value: '99.4%', label: 'Extraction Confidence', detail: 'Neural multi-modal AI' },
  { value: '21 CFR Part 11', label: 'E-Signatures & Audit', detail: 'Cryptographic binding' },
  { value: '100%', label: 'Immutable Ledger', detail: 'Zero unlogged actions' },
  { value: '< 200ms', label: 'Semantic Search', detail: 'Security-trimmed discovery' }
]

export default function FeaturesPage({ onOpenDemoModal }) {
  const [selectedDomainId, setSelectedDomainId] = useState('capture')
  const explorerRef = useRef(null)

  const activeDomain = CAPABILITY_DOMAINS.find(d => d.id === selectedDomainId) || CAPABILITY_DOMAINS[0]
  const ActiveIcon = activeDomain.icon

  const handleSelectDomain = (domainId) => {
    setSelectedDomainId(domainId)
    if (explorerRef.current) {
      explorerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Linear / Stripe / Vercel Inspired)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-28 bg-white border-b border-slate-200/80">
        
        {/* Subtle architectural ambient background grid & radial mesh */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-center radiant green-blue glow */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: 900,
              height: 550,
              background: 'radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.12) 0%, rgba(2,132,199,0.08) 40%, rgba(248,250,252,0) 70%)',
            }}
          />
          {/* Subtle secondary teal ambient glow */}
          <div
            className="ambient-drift absolute top-20 right-[5%] rounded-full opacity-60"
            style={{
              width: 480,
              height: 480,
              background: 'radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 65%)',
            }}
          />
          {/* Fine 40px grid mesh */}
          <div className="absolute inset-0 linear-grid opacity-75" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-4xl mx-auto space-y-6">

            {/* Linear-style Pill Badge with Live Beacon */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-2xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="abt-beacon-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <Layers className="h-3.5 w-3.5 text-[#14532D]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-800">
                Enterprise Architecture · 8 Capability Domains
              </span>
              <span className="hidden sm:inline-block h-3 w-px bg-slate-200 mx-0.5" />
              <span className="hidden sm:inline-block font-mono text-[10px] text-teal-700 font-semibold">
                v4.2 GxP-Validated
              </span>
            </div>

            {/* Editorial Headline with Green-to-Blue Dual Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.12]">
              Eight Integrated{' '}
              <span className="bg-gradient-to-r from-[#14532D] via-[#0D9488] to-[#0284C7] bg-clip-text text-transparent">
                Capability Domains
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              SmartiDP EDMS brings together every foundational capability needed to capture, govern, automate, and protect enterprise records throughout their complete lifecycle.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <RequestDemoButton
                onClick={onOpenDemoModal}
                size="lg"
                className="shadow-lg shadow-emerald-950/20"
              />
              <button
                type="button"
                onClick={() => {
                  if (explorerRef.current) {
                    explorerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all cursor-pointer shadow-2xs"
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* 4 Linear-style Metric Chips */}
            <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {HERO_METRICS.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs backdrop-blur-sm text-left transition-all duration-300 hover:border-emerald-600/30 hover:bg-white hover:-translate-y-0.5"
                >
                  <div className="text-lg sm:text-xl font-bold font-mono text-slate-900 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-1">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* High-Resolution Enterprise EDMS Platform Showcase */}
          <div className="mt-12 sm:mt-16 relative max-w-6xl mx-auto">
            {/* Ambient radial glow behind the dashboard frame */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/20 via-teal-500/15 to-sky-500/20 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
            
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5">
              <img
                src={dashboard1Img}
                alt="SmartiDP EDMS Dashboard — Real-time Document Management, KPIs, and Audit Trails"
                className="w-full h-auto block select-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          2. INTERACTIVE CAPABILITY EXPLORER (Stripe & Linear Inspired)
      ───────────────────────────────────────────────────────────── */}
      <section
        ref={explorerRef}
        aria-labelledby="explorer-heading"
        className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
      >
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
            style={{
              width: 800,
              height: 800,
              background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, rgba(2,132,199,0.04) 40%, transparent 70%)',
            }}
          />
        </div>

        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/15 text-[#14532D] text-xs font-bold uppercase tracking-widest shadow-2xs mb-3">
              <Sliders className="h-3.5 w-3.5 text-[#14532D]" />
              <span>System Explorer</span>
            </div>
            <h2 id="explorer-heading" className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
              Interactive Capability Explorer
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Select any domain below to inspect its architecture, compliance capabilities, and technical controls in real time.
            </p>
          </div>

          {/* Linear-style Segmented Domain Selector Tabs */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-white/90 border border-slate-200/90 shadow-2xs backdrop-blur-md max-w-5xl mx-auto">
              {CAPABILITY_DOMAINS.map((domain) => {
                const Icon = domain.icon
                const isSelected = domain.id === selectedDomainId
                return (
                  <button
                    key={domain.id}
                    onClick={() => setSelectedDomainId(domain.id)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-md shadow-slate-950/20'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`} />
                    <span className="whitespace-nowrap">{domain.title}</span>
                    <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {domain.num}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Domain Detail Showcase (Bento Split Layout) */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5 overflow-hidden transition-all duration-300">
            
            {/* Top Bar with Domain Identifier */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-10 py-5 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#14532D] text-white">
                  DOMAIN {activeDomain.num}
                </span>
                <span className="text-slate-300">/</span>
                <span className="font-mono text-xs font-semibold text-slate-600">
                  ARCHITECTURAL MODULE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="abt-beacon-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span className="font-mono text-xs font-bold text-[#14532D] uppercase tracking-wider">
                  Active Control Set
                </span>
              </div>
            </div>

            {/* Split Content: Left = Overview + Telemetry, Right = 4 Specs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">
              
              {/* Left Column (5 cols): Architecture Overview & Telemetry */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    {/* Squircle Icon with Green-to-Blue Gradient */}
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#14532D] via-[#0D9488] to-[#0284C7] text-white flex items-center justify-center shadow-md shadow-emerald-950/20">
                      <ActiveIcon className="h-8 w-8" />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <Sparkles className="h-3 w-3 text-emerald-600" />
                        {activeDomain.badge}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 mt-1.5 tracking-tight">
                        {activeDomain.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {activeDomain.summary}
                  </p>

                  {/* Telemetry Chips Grid */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                      Architectural Telemetry
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {activeDomain.telemetry?.map((t, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                          <div className="text-[10px] uppercase font-semibold text-slate-500">{t.label}</div>
                          <div className="font-mono text-xs font-bold text-slate-900 mt-0.5">{t.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Left Bottom Action */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Schedule Technical Demo
                  </RequestDemoButton>
                  <span className="text-[11px] font-mono text-slate-400">
                    ID: {activeDomain.id}
                  </span>
                </div>
              </div>

              {/* Right Column (7 cols): 4 Technical Specification Cards */}
              <div className="lg:col-span-7 p-8 sm:p-10 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4 text-[#14532D]" />
                      Documented Technical Controls
                    </span>
                    <span className="font-mono text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                      {activeDomain.specs.length} Verified Specifications
                    </span>
                  </div>

                  {/* 2x2 Specifications Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeDomain.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="group relative p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#14532D]/40 hover:shadow-md transition-all duration-300"
                      >
                        {/* Hover Left Accent Line */}
                        <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-[#14532D] to-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="flex items-start gap-3 mb-2">
                          <div className="h-7 w-7 rounded-lg flex items-center justify-center shrink-0 bg-emerald-50 border border-emerald-100 text-[#14532D] group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold text-slate-400 block">
                              SPEC 0{idx + 1}
                            </span>
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#14532D] transition-colors">
                              {spec.name}
                            </h4>
                          </div>
                        </div>

                        <p className="text-xs text-slate-600 pl-10 leading-relaxed font-normal">
                          {spec.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Bottom Compliance Notice */}
                <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200/90 flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    All controls pre-mapped to FDA 21 CFR Part 11, EU Annex 11, and ISO 9001.
                  </span>
                  <span className="font-mono text-[11px] text-slate-400 font-bold hidden sm:inline">
                    FORENSIC READY
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          3. FULL CAPABILITY SPECIFICATIONS GRID (Vercel / Stripe Bento Grid)
      ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="specs-heading"
        className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden"
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 linear-grid opacity-50 pointer-events-none" />

        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-bold uppercase tracking-widest shadow-2xs mb-3">
              <Cpu className="h-3.5 w-3.5 text-[#14532D]" />
              <span>Full Specifications</span>
            </div>
            <h2 id="specs-heading" className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
              Full Capability Specifications
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Documented technical features across all eight functional modules — built for continuous audit readiness.
            </p>
          </div>

          {/* 8 Bento-Style Capability Cards (4 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITY_DOMAINS.map((domain) => {
              const Icon = domain.icon
              const isCurrent = domain.id === selectedDomainId
              return (
                <div
                  key={domain.id}
                  className={`group relative p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 cursor-default bg-white border ${
                    isCurrent
                      ? 'border-[#14532D] ring-2 ring-[#14532D]/20 shadow-xl shadow-emerald-950/10'
                      : 'border-slate-200/90 hover:border-emerald-600/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/8'
                  }`}
                >
                  <div>
                    {/* Header: Squircle Icon + Domain Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center shadow-sm group-hover:from-[#14532D] group-hover:to-[#0D9488] transition-all duration-300">
                        <Icon className="h-6 w-6 text-emerald-400 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#14532D] transition-colors">
                          {domain.num}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                          {domain.badge}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#14532D] transition-colors mb-2.5 tracking-tight leading-snug">
                      {domain.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                      {domain.summary}
                    </p>

                    {/* 2 Key Feature Bullet Previews */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {domain.specs.slice(0, 2).map((s, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium text-slate-800 truncate" title={s.name}>{s.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action: Activate Explorer */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => handleSelectDomain(domain.id)}
                      className="w-full inline-flex items-center justify-between text-xs font-bold text-[#14532D] hover:text-[#0D9488] transition-colors cursor-pointer group/btn"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          4. PLATFORM WORKBENCH SIMULATOR (Interactive Document Preview)
      ───────────────────────────────────────────────────────────── */}
      <InteractiveWorkbench onOpenDemoModal={onOpenDemoModal} />


      {/* ─────────────────────────────────────────────────────────────
          5. MODERN ENTERPRISE CTA SECTION (Linear / Stripe Inspired)
      ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="features-cta-heading"
        className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative overflow-hidden"
      >
        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div
            className="relative overflow-hidden rounded-3xl text-center p-10 sm:p-16 lg:p-20 shadow-2xl shadow-emerald-950/25"
            style={{
              background: 'linear-gradient(135deg, #022c22 0%, #064e3b 35%, #065f46 65%, #0284c7 100%)',
            }}
          >
            {/* Grid texture overlay */}
            <div className="absolute inset-0 linear-grid-dark opacity-30 pointer-events-none" />

            {/* Ambient radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 50% 0%, rgba(52,211,153,0.18) 0%, transparent 60%)',
              }}
            />

            {/* Decorative ambient orbs */}
            <div
              className="abt-orb1 absolute -right-20 -top-20 w-80 h-80 rounded-full pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}
            />
            <div
              className="abt-orb2 absolute -left-20 -bottom-20 w-72 h-72 rounded-full pointer-events-none"
              style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
            />

            {/* Shimmer top line */}
            <div
              className="absolute top-0 left-0 right-0 h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 50%, transparent)' }}
            />

            <div className="relative z-10 max-w-3xl mx-auto space-y-7">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-200 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                <span>Enterprise Platform Demonstration</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Headline */}
              <h2
                id="features-cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight"
              >
                Ready to See SmartiDP EDMS in Action?
              </h2>

              {/* Description */}
              <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
                Our solution architects can demo any of these 8 capability domains using your organization's sample document types, workflows, and regulatory frameworks.
              </p>

              {/* Dual CTA Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={onOpenDemoModal}
                  className="abt-btn-shimmer group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[52px] rounded-full font-bold text-sm bg-white text-[#14532D] shadow-xl shadow-black/20 hover:bg-emerald-50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <Play className="h-4 w-4 fill-current text-[#14532D]" />
                  <span>Request a Demo</span>
                  <ArrowRight className="h-4 w-4 text-[#14532D] transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>

                <Link
                  to="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[52px] rounded-full font-semibold text-sm text-white/95 bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  <span>Contact Solutions Team</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>

              {/* Compliance Standards Trust Strip */}
              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-white/70 font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> 21 CFR Part 11
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> EU Annex 11
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> ISO 9001 & 13485
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> ISO/IEC 27001
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> HIPAA & GDPR
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
