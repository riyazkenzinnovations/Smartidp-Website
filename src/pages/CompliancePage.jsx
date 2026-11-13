import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import RequestDemoButton from '../components/RequestDemoButton'
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileText,
  Search,
  ArrowRight,
  Sparkles,
  FileSignature,
  FileCheck2,
  GitBranch,
  Building2,
  Layers,
  Award,
  Sliders,
  ChevronRight,
  Play,
  Database,
  KeyRound,
  Fingerprint,
  Check,
  Clock,
  Scale,
  Shield,
  Activity,
  Workflow,
  Archive,
  RefreshCw,
  Cpu,
  BadgeCheck
} from 'lucide-react'

// 1. 6 Global Compliance Category Domains (Brochure Page 12)
const COMPLIANCE_CATEGORIES = [
  {
    id: 'gxp',
    num: '01',
    name: 'Life Sciences (GxP)',
    icon: Award,
    frameworks: ['FDA 21 CFR Part 11', 'EU GMP Annex 11', 'GAMP 5', 'ALCOA+ Data Integrity'],
    description: 'Cryptographic electronic records, two-component e-signatures, automated change controls, and pre-packaged CSV validation protocols.'
  },
  {
    id: 'quality',
    num: '02',
    name: 'Quality Management Systems',
    icon: ShieldCheck,
    frameworks: ['ISO 9001:2015', 'ISO 13485:2016', 'FDA QMSR', 'ISO 14971'],
    description: 'Rigorous document controls, major/minor revisioning, obsolete version withdrawal, and Design History File (DHF) traceability.'
  },
  {
    id: 'security',
    num: '03',
    name: 'Information Security & Trust',
    icon: Lock,
    frameworks: ['ISO/IEC 27001:2022', 'SOC 2 Type II', 'NIST SP 800-53', 'Cloud Security Alliance'],
    description: 'Defense-in-depth architecture with AES-256 encryption at rest, TLS 1.3 in transit, role/attribute access gates (RBAC/ABAC), and continuous monitoring.'
  },
  {
    id: 'privacy',
    num: '04',
    name: 'Data Privacy & Healthcare',
    icon: Fingerprint,
    frameworks: ['GDPR', 'HIPAA Security & Privacy', 'CCPA / CPRA', 'Global PDPL'],
    description: 'Automated Protected Health Information (PHI) detection, DSAR fulfillment workflows, granular data processing consent, and zero PHI leakage.'
  },
  {
    id: 'records',
    num: '05',
    name: 'Records Management & Preservation',
    icon: Archive,
    frameworks: ['ISO 15489-1', 'ISO 19005 (PDF/A)', 'ISO 16175', 'DoD 5015.02'],
    description: 'Policy-based retention schedules, single-click litigation legal holds, certified defensible disposition, and standardized PDF/A survival format.'
  },
  {
    id: 'signatures',
    num: '06',
    name: 'Digital & Electronic Signatures',
    icon: FileSignature,
    frameworks: ['eIDAS (QES / AdES)', 'ESIGN Act', 'UETA', 'Cryptographic SHA-256'],
    description: 'Two-component credential re-authentication, declared legal manifestation of intent, and permanent cryptographic SHA-256 tamper-evident binding.'
  }
]

// 2. 10 Regulatory Requirements vs Technical Controls (Brochure Page 13)
const STATUTORY_CONTROLS = [
  {
    id: 'audit-trail',
    num: '01',
    category: 'gxp',
    requirement: 'Secure, time-stamped audit trails',
    reference: 'Part 11 §11.10(e) · Annex 11 §9',
    control: 'Append-only, hash-chained audit service records user, UTC time, action, old/new values and reason for change. No user or administrator can edit or delete entries.',
    evidence: 'SHA-256 Hash-Chained · 100% Immutable',
    icon: Database
  },
  {
    id: 'e-signatures',
    num: '02',
    category: 'signatures',
    requirement: 'Electronic signatures',
    reference: 'Part 11 §11.50–11.200 · eIDAS Art. 25–26',
    control: 'Two-component re-authentication, displayed signature meaning, cryptographic binding to the exact signed version; optional PKI and qualified signatures.',
    evidence: 'Cryptographic Binding · Legal Manifestation',
    icon: FileSignature
  },
  {
    id: 'validation',
    num: '03',
    category: 'gxp',
    requirement: 'System validation',
    reference: 'Part 11 §11.10(a) · Annex 11 §4 · GAMP 5',
    control: 'Validation accelerator: pre-written URS templates, functional risk assessment (FMEA), traceability matrix, IQ/OQ execution evidence and release impact notes.',
    evidence: 'GAMP 5 Category 4 · Turnkey IQ/OQ/PQ',
    icon: Award
  },
  {
    id: 'access-control',
    num: '04',
    category: 'security',
    requirement: 'Access control',
    reference: 'Part 11 §11.10(d,g) · ISO 27001 A.5.15 · HIPAA §164.312(a)',
    control: 'Enterprise SSO (SAML 2.0 / OIDC) + mandatory MFA, fine-grained RBAC/ABAC down to document metadata fields, server-side authorization of every action, and automatic session timeouts.',
    evidence: 'Zero-Trust Gate · SAML 2.0 / SCIM',
    icon: KeyRound
  },
  {
    id: 'document-control',
    num: '05',
    category: 'quality',
    requirement: 'Document control',
    reference: 'ISO 9001 §7.5 · ISO 13485 §4.2.4',
    control: 'Review and approval before release, major/minor revision status gates, automated obsolete-version withdrawal, and controlled external document register.',
    evidence: 'Lifecycle State Gates · Zero Overwrite',
    icon: FileCheck2
  },
  {
    id: 'retention',
    num: '06',
    category: 'records',
    requirement: 'Records retention & disposition',
    reference: 'ISO 15489 §8.6, §9.9 · GDPR Art. 5(1)(e)',
    control: 'Policy-based retention schedules, litigation legal hold freeze, multi-level disposition approval workflows, and permanent tamper-proof destruction certificates.',
    evidence: 'ISO 15489 · Defensible Disposition',
    icon: Archive
  },
  {
    id: 'data-integrity',
    num: '07',
    category: 'gxp',
    requirement: 'Data integrity (ALCOA+)',
    reference: 'FDA, MHRA, PIC/S guidance',
    control: 'Attributable actions to named individuals, synchronized UTC server timestamps, preserved original files, cryptographic hash verification, and complete version history.',
    evidence: 'Attributable · Legible · Contemporaneous',
    icon: ShieldCheck
  },
  {
    id: 'data-subject-rights',
    num: '08',
    category: 'privacy',
    requirement: 'Data-subject rights',
    reference: 'GDPR Art. 15–20',
    control: 'Automated DSAR workflow to locate, collate, redact, export or erase personal data across repositories — while strictly respecting legal litigation holds.',
    evidence: 'DSAR Automation · PII Redaction',
    icon: Fingerprint
  },
  {
    id: 'security-processing',
    num: '09',
    category: 'security',
    requirement: 'Security of processing',
    reference: 'GDPR Art. 32 · SOC 2 CC6 · NIST SC-8/28',
    control: 'AES-256 encryption at rest, TLS 1.3 in transit, automated vulnerability monitoring, high-availability multi-zone resilience, and annual independent SOC 2 Type II penetration testing.',
    evidence: 'AES-256 · TLS 1.3 · SOC 2 Type II',
    icon: Lock
  },
  {
    id: 'backup-continuity',
    num: '10',
    category: 'security',
    requirement: 'Backup & continuity',
    reference: 'Annex 11 §7, §16 · ISO 27001 A.8.13',
    control: 'Encrypted, geo-redundant backups, automated integrity checks, periodic test restores, and documented disaster-recovery plans with sub-hour RPO / RTO targets.',
    evidence: 'Geo-Redundant · Sub-Hour RPO/RTO',
    icon: RefreshCw
  }
]

// 3. Cross-Framework Compliance Mapping Matrix (Brochure Page 12)
const FRAMEWORK_MATRIX = [
  {
    framework: '21 CFR Part 11 / Annex 11',
    scope: 'FDA / EMA Life Sciences',
    auditTrail: 'Core Requirement',
    eSignature: 'Core Requirement',
    accessControl: 'Core Requirement',
    encryption: 'Supporting Control',
    versioning: 'Core Requirement',
    workflow: 'Core Requirement',
    retention: 'Core Requirement',
    validation: 'Core Requirement'
  },
  {
    framework: 'ISO 9001 / ISO 13485',
    scope: 'Medical Devices & Quality',
    auditTrail: 'Supporting Control',
    eSignature: 'Supporting Control',
    accessControl: 'Core Requirement',
    encryption: 'Supporting Control',
    versioning: 'Core Requirement',
    workflow: 'Core Requirement',
    retention: 'Core Requirement',
    validation: 'Core Requirement'
  },
  {
    framework: 'ISO 27001 / SOC 2 / NIST',
    scope: 'Information Security & Cloud',
    auditTrail: 'Core Requirement',
    eSignature: 'Supporting Control',
    accessControl: 'Core Requirement',
    encryption: 'Core Requirement',
    versioning: 'Supporting Control',
    workflow: 'Supporting Control',
    retention: 'Supporting Control',
    validation: 'Supporting Control'
  },
  {
    framework: 'GDPR / HIPAA',
    scope: 'Data Privacy & Healthcare',
    auditTrail: 'Core Requirement',
    eSignature: 'Supporting Control',
    accessControl: 'Core Requirement',
    encryption: 'Core Requirement',
    versioning: 'Supporting Control',
    workflow: 'Supporting Control',
    retention: 'Core Requirement',
    validation: 'Supporting Control'
  },
  {
    framework: 'ISO 15489 Records',
    scope: 'Records Management & Legal',
    auditTrail: 'Core Requirement',
    eSignature: 'Supporting Control',
    accessControl: 'Supporting Control',
    encryption: 'Supporting Control',
    versioning: 'Core Requirement',
    workflow: 'Supporting Control',
    retention: 'Core Requirement',
    validation: 'Supporting Control'
  },
  {
    framework: 'eIDAS / ESIGN / UETA',
    scope: 'Electronic Signatures',
    auditTrail: 'Core Requirement',
    eSignature: 'Core Requirement',
    accessControl: 'Core Requirement',
    encryption: 'Supporting Control',
    versioning: 'Supporting Control',
    workflow: 'Supporting Control',
    retention: 'Supporting Control',
    validation: 'Supporting Control'
  }
]

// 4. Hero Quick Telemetry Stats
const HERO_METRICS = [
  { value: '12+ Frameworks', label: 'Global Mandates', detail: 'FDA, ISO, EMA, HIPAA, SOC 2' },
  { value: '100% Captured', label: 'Immutable Audit Trail', detail: 'Append-only SHA-256 hash chains' },
  { value: '50% Faster', label: 'GxP Validation Pack', detail: 'Pre-packaged IQ/OQ/PQ & URS' },
  { value: 'Zero-Trust', label: 'Defense-in-Depth', detail: 'AES-256 at rest, TLS 1.3 in transit' }
]

// 5. Simulated Audit Trail Entries for Visualizer
const SIMULATED_AUDIT_LOGS = [
  {
    id: 'LOG-8841',
    timestamp: '2026-03-14 14:22:08 UTC',
    action: 'E-SIGNATURE APPLIED',
    user: 'Dr. Evelyn Vance (QA Head)',
    resource: 'SOP-QA-0142_v4.0.pdf',
    hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    status: 'VERIFIED'
  },
  {
    id: 'LOG-8840',
    timestamp: '2026-03-14 14:18:45 UTC',
    action: 'APPROVAL GATE PASSED',
    user: 'Marcus Sterling (Ops Lead)',
    resource: 'SOP-QA-0142_v3.9_draft',
    hash: '7d793037a0760186574b0282f2f435e70d73a4e728d2db79ce57ced3d0d01576',
    status: 'VERIFIED'
  },
  {
    id: 'LOG-8839',
    timestamp: '2026-03-14 11:05:12 UTC',
    action: 'LINE CLEARANCE ATTESTED',
    user: 'S. Al-Mansoor (Validation Eng)',
    resource: 'BATCH-REC-2026-B812',
    hash: 'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb',
    status: 'VERIFIED'
  }
]

export default function CompliancePage({ onOpenDemoModal }) {
  const [filterQuery, setFilterQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const matrixRef = useRef(null)

  // Filter statutory controls
  const filteredControls = STATUTORY_CONTROLS.filter(c => {
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory
    const q = filterQuery.toLowerCase().trim()
    const matchesQuery =
      !q ||
      c.requirement.toLowerCase().includes(q) ||
      c.reference.toLowerCase().includes(q) ||
      c.control.toLowerCase().includes(q) ||
      c.evidence.toLowerCase().includes(q)
    return matchesCategory && matchesQuery
  })

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Linear / Stripe / Vercel Aesthetic)
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
              <ShieldCheck className="h-3.5 w-3.5 text-[#14532D]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-800">
                Global Compliance Architecture · One Control Set, 12+ Frameworks
              </span>
              <span className="hidden sm:inline-block h-3 w-px bg-slate-200 mx-0.5" />
              <span className="hidden sm:inline-block font-mono text-[10px] text-teal-700 font-semibold">
                v4.2 GxP-Validated
              </span>
            </div>

            {/* Editorial Headline with Green-to-Blue Dual Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.12]">
              Engineered for 12+ Global{' '}
              <span className="bg-gradient-to-r from-[#14532D] via-[#0D9488] to-[#0284C7] bg-clip-text text-transparent">
                Regulatory Frameworks
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
              SmartiDP EDMS implements a unified technical control plane mapping directly to FDA 21 CFR Part 11, EU Annex 11, ISO 13485, GDPR, and HIPAA statutory requirements.
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
                  if (matrixRef.current) {
                    matrixRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all cursor-pointer shadow-2xs"
              >
                <span>Explore Control Matrix</span>
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
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          2. 6 GLOBAL COMPLIANCE CATEGORY DOMAINS (Brochure Page 12)
      ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="domains-heading"
        className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden"
      >
        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/15 text-[#14532D] text-xs font-bold uppercase tracking-widest shadow-2xs mb-3">
              <Layers className="h-3.5 w-3.5 text-[#14532D]" />
              <span>Brochure Page 12 · Compliance Architecture</span>
            </div>
            <h2 id="domains-heading" className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight">
              One Control Set, Many Regulations
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Rather than building separate silos for each mandate, SmartiDP EDMS implements a common foundation of technical controls mapped across six regulatory domains.
            </p>
          </div>

          {/* 6 Category Bento Cards (3x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPLIANCE_CATEGORIES.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.id}
                  className="group relative p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-emerald-600/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon + Domain Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#14532D] via-[#0D9488] to-[#0284C7] text-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        DOMAIN {cat.num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#14532D] transition-colors mb-2 tracking-tight">
                      {cat.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {cat.description}
                    </p>

                    {/* Framework Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                      {cat.frameworks.map((fw, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] font-mono font-semibold text-slate-700"
                        >
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#14532D]">
                      Pre-Mapped Controls
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.id)
                        if (matrixRef.current) {
                          matrixRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }
                      }}
                      className="text-xs font-bold text-[#14532D] hover:text-[#0D9488] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>Filter Matrix</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          3. SEARCHABLE REGULATORY REQUIREMENT VS TECHNICAL CONTROL MATRIX
      ───────────────────────────────────────────────────────────── */}
      <section
        ref={matrixRef}
        aria-labelledby="matrix-heading"
        className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden"
      >
        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-bold uppercase tracking-widest shadow-2xs mb-3">
                <Sliders className="h-3.5 w-3.5 text-[#14532D]" />
                <span>Statutory Mapping Matrix</span>
              </div>
              <h2 id="matrix-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                Regulatory Requirement vs. Technical Control Matrix
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Specific platform architecture features addressing strict statutory mandates across FDA, EMA, ISO, GDPR, and HIPAA.
              </p>
            </div>

            {/* Real-Time Filter & Search Controls */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              {/* Category Dropdown/Pills */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#14532D]/20"
              >
                <option value="all">All Domains (10 Controls)</option>
                <option value="gxp">Life Sciences & GxP</option>
                <option value="quality">Quality Management (ISO)</option>
                <option value="security">Information Security</option>
                <option value="privacy">Data Privacy & HIPAA</option>
                <option value="records">Records Retention</option>
                <option value="signatures">Electronic Signatures</option>
              </select>

              {/* Instant Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  placeholder="Filter by regulation or control..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14532D]/20 focus:border-[#14532D] shadow-2xs transition-all"
                />
                {filterQuery && (
                  <button
                    onClick={() => setFilterQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs px-1"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Elevated Linear/Stripe Table Container */}
          <div className="rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-50 via-[#F0FDF4]/50 to-slate-50 border-b border-slate-200/90 text-slate-900 text-xs uppercase tracking-wider font-mono">
                    <th className="py-4 px-6 font-bold w-1/4">Regulatory Requirement</th>
                    <th className="py-4 px-6 font-bold w-1/4">Statutory Reference</th>
                    <th className="py-4 px-6 font-bold w-1/3">SmartiDP EDMS Platform Control</th>
                    <th className="py-4 px-6 font-bold text-right">Verification Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredControls.map((row) => {
                    const RowIcon = row.icon
                    return (
                      <tr
                        key={row.id}
                        className="hover:bg-[#F8FAFC] transition-colors group"
                      >
                        {/* Requirement Name */}
                        <td className="py-5 px-6 align-top">
                          <div className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded-lg bg-emerald-50 text-[#14532D] flex items-center justify-center shrink-0 border border-emerald-100 group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                              <RowIcon className="h-4 w-4" />
                            </div>
                            <div>
                              <span className="font-mono text-[10px] text-slate-400 font-bold block">
                                CONTROL {row.num}
                              </span>
                              <span className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-[#14532D] transition-colors">
                                {row.requirement}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Statutory Reference */}
                        <td className="py-5 px-6 align-top">
                          <span className="inline-block px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs font-semibold text-[#14532D]">
                            {row.reference}
                          </span>
                        </td>

                        {/* SmartiDP Platform Control */}
                        <td className="py-5 px-6 text-slate-600 leading-relaxed align-top text-xs sm:text-sm font-normal">
                          {row.control}
                        </td>

                        {/* Verification Evidence */}
                        <td className="py-5 px-6 align-top text-right">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-mono font-bold whitespace-nowrap">
                            <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                            {row.evidence.split('·')[0].trim()}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {filteredControls.length === 0 && (
              <div className="p-12 text-center bg-white">
                <Search className="h-8 w-8 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No matching controls found</h3>
                <p className="text-xs text-slate-500 mt-1">Try clearing your search query or switching to All Domains.</p>
                <button
                  onClick={() => {
                    setFilterQuery('')
                    setSelectedCategory('all')
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-[#14532D] text-white text-xs font-bold"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          4. FORENSIC AUDIT TRAIL & E-SIGNATURE SIMULATOR
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/15 text-[#14532D] text-xs font-bold uppercase tracking-widest shadow-2xs mb-3">
              <Database className="h-3.5 w-3.5 text-[#14532D]" />
              <span>ALCOA+ Forensic Integrity Engine</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              Immutable SHA-256 Hash-Chained Audit Trail
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Every creation, review, redline, approval, and permission change is cryptographically chained and recorded in UTC. No administrator or user can alter or delete entries.
            </p>
          </div>

          {/* Interactive Console Visualizer */}
          <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 text-white overflow-hidden">
            
            {/* Window Chrome */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-slate-400 font-semibold">
                  smartidp-audit-ledger :: node-us-east-1 :: TLS 1.3
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
                  Append-Only Mode Active
                </span>
              </div>
            </div>

            {/* Simulated Live Ledger Entries */}
            <div className="py-6 space-y-4 font-mono text-xs">
              {SIMULATED_AUDIT_LOGS.map((log) => (
                <div
                  key={log.id}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 hover:border-emerald-500/40 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-slate-400 text-[11px]">
                    <span className="text-emerald-400 font-bold">{log.id}</span>
                    <span>{log.timestamp}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800/60">
                      {log.action}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-slate-300">
                    <div>
                      User: <strong className="text-white">{log.user}</strong> · Resource: <span className="text-sky-300">{log.resource}</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>{log.status}</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-500 truncate pt-1 border-t border-slate-900 font-mono">
                    SHA-256 Digest: {log.hash}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Zero Unlogged Actions · 100% Forensic Coverage</span>
              </span>
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>Request Live Audit Trail Demo</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          5. CROSS-FRAMEWORK COMPLIANCE MATRIX (Brochure Page 12 Matrix)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-bold uppercase tracking-widest shadow-2xs mb-3">
              <Cpu className="h-3.5 w-3.5 text-[#14532D]" />
              <span>Brochure Page 12 · Cross-Framework Coverage</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              Multi-Standard Compliance Coverage
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              How SmartiDP EDMS technical capabilities satisfy the requirements of major international frameworks without third-party bolt-ons.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-50 via-[#F0FDF4]/50 to-slate-50 border-b border-slate-200 text-slate-900 font-mono uppercase text-[11px]">
                    <th className="py-4 px-5 font-bold">Regulatory Framework</th>
                    <th className="py-4 px-3 font-bold text-center">Audit Trail</th>
                    <th className="py-4 px-3 font-bold text-center">E-Signatures</th>
                    <th className="py-4 px-3 font-bold text-center">Access Control</th>
                    <th className="py-4 px-3 font-bold text-center">Encryption</th>
                    <th className="py-4 px-3 font-bold text-center">Versioning</th>
                    <th className="py-4 px-3 font-bold text-center">Workflow</th>
                    <th className="py-4 px-3 font-bold text-center">Retention</th>
                    <th className="py-4 px-3 font-bold text-center">Validation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {FRAMEWORK_MATRIX.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-5">
                        <div className="font-bold text-slate-900">{row.framework}</div>
                        <div className="text-[11px] text-slate-500 font-normal">{row.scope}</div>
                      </td>
                      {[
                        row.auditTrail,
                        row.eSignature,
                        row.accessControl,
                        row.encryption,
                        row.versioning,
                        row.workflow,
                        row.retention,
                        row.validation
                      ].map((val, idx) => {
                        const isCore = val === 'Core Requirement'
                        return (
                          <td key={idx} className="py-4 px-3 text-center">
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold whitespace-nowrap ${
                                isCore
                                  ? 'bg-[#14532D] text-white shadow-2xs'
                                  : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              }`}
                            >
                              <Check className="h-3 w-3" />
                              <span>{isCore ? 'Core' : 'Supporting'}</span>
                            </span>
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#14532D]" />
                  <span>Core Requirement Supported</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <span>Supporting Technical Control</span>
                </span>
              </div>
              <span>Brochure Specification Page 12</span>
            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          6. SMARTIDP GxP VALIDATION ACCELERATOR PACK (Brochure Page 14 & 16)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-900/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#14532D] text-xs font-bold uppercase tracking-widest border border-emerald-200">
                  <Award className="h-3.5 w-3.5" />
                  <span>GxP Turnkey Validation Accelerator</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                  SmartiDP GxP Validation Accelerator Pack
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  Pre-configured industry templates, standard taxonomy libraries, and migration tooling reduce time-to-value by up to 50% for GxP regulated deployments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#14532D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Pre-Written URS Templates</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Comprehensive User Requirements Specifications for regulated life sciences.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#14532D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Functional & Design Specs</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Detailed FS/DS documentation ready for computer system validation (CSV).</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#14532D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">GAMP 5 FMEA Risk Assessment</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Functional risk analysis matrix linking risk controls directly to test scripts.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#14532D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Executable IQ / OQ / PQ Protocols</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Pre-executed validation evidence packages accelerating production sign-off.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Callout Card */}
              <div className="lg:col-span-4 p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 text-center shadow-md space-y-4">
                <span className="text-5xl sm:text-6xl font-semibold text-[#14532D] font-mono block tracking-tight">
                  50%
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider block">
                  Faster Time-to-Value
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Pre-configured accelerators reduce validation effort and deployment timelines by half across validated environments.
                </p>
                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                    fullWidth
                  >
                    Request Validation Sample
                  </RequestDemoButton>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          7. SHARED RESPONSIBILITY MODEL & DISCLAIMER (Brochure Page 13)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 text-[#14532D] flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">
                  Shared Responsibility Model & Regulatory Disclaimer
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                  Compliance with statutory regulations is a shared responsibility. SmartiDP EDMS provides technical controls, validation packages, and immutable audit trails, while customer organizations maintain standard operating procedures, role training, configuration governance, and performance qualification.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 shadow-2xs shrink-0 transition-all"
            >
              Consult Compliance Team
            </Link>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          8. MODERN ENTERPRISE CTA SECTION (Linear / Stripe Inspired)
      ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="compliance-cta-heading"
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
                <span>GxP & Regulatory Framework Demonstration</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Headline */}
              <h2
                id="compliance-cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight"
              >
                Ensure Continuous Inspection Readiness
              </h2>

              {/* Description */}
              <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
                Schedule a technical compliance review with our regulatory affairs specialists to inspect pre-validated technical controls, IQ/OQ/PQ execution evidence, and CSV audit readiness.
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
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> FDA 21 CFR Part 11
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> EU GMP Annex 11
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> ISO 13485:2016
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> ISO/IEC 27001
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" /> GDPR & HIPAA
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
