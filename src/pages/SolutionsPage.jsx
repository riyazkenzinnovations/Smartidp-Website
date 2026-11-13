import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageCtaBanner from '../components/PageCtaBanner'
import {
  FlaskConical,
  Stethoscope,
  HeartPulse,
  Landmark,
  Shield,
  Factory,
  Scale,
  Receipt,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  FileCheck2,
  Cpu,
  Archive,
  Headphones,
  Check,
  ChevronRight,
  Workflow,
  TrendingUp,
  Lock,
  Search,
  FileText,
  BadgeCheck,
  Clock,
  Zap,
  Globe2,
  FolderCheck,
  Briefcase
} from 'lucide-react'

// 1. Regulated GxP & Mission-Critical Industry Verticals (Brochure Page 14)
const REGULATED_INDUSTRIES = [
  {
    id: 'pharma',
    name: 'Pharmaceuticals & Biotechnology',
    tag: 'GxP Validated',
    icon: FlaskConical,
    iconGradient: 'from-[#14532D] to-[#0D9488]',
    regulations: '21 CFR Part 11 · EU GMP Annex 11 · GAMP 5 · ICH Q10 · ALCOA+',
    highlight: 'Turnkey Validation Accelerator with pre-packaged IQ/OQ/PQ execution evidence and URS templates.',
    useCases: [
      'Standard Operating Procedure (SOP) Change Control Lifecycles',
      'Electronic Batch Records (EBR) & Line Clearance Attestations',
      'Deviation, OOS Investigation & CAPA Incident Escalation',
      'Mandatory Read-and-Acknowledge Attestation Tracking',
      'Regulatory Submissions (eCTD) & CMC Technical Dossiers'
    ],
    metric: '100% Audit Trail',
    accentColor: 'emerald'
  },
  {
    id: 'meddev',
    name: 'Medical Devices & Diagnostics',
    tag: 'ISO 13485:2016',
    icon: Stethoscope,
    iconGradient: 'from-[#0D9488] to-[#0284C7]',
    regulations: 'FDA QMSR · ISO 13485:2016 · EU MDR 2017/745 · ISO 14971',
    highlight: 'Complete Design History File (DHF) and Device Master Record (DMR) bidirectional traceability.',
    useCases: [
      'Design History Files (DHF) & Verification Protocol Sign-Off',
      'Device Master Records (DMR) & Manufacturing Work Instructions',
      'ISO 14971 Risk Management Files & FMEA Matrix Traceability',
      'Post-Market Surveillance, Complaint Handling & MDR/Vigilance',
      'CE Mark Technical Documentation & Notified Body Audit Packs'
    ],
    metric: '360° Traceability',
    accentColor: 'teal'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinical Trials',
    tag: 'HIPAA & GCP',
    icon: HeartPulse,
    iconGradient: 'from-[#0284C7] to-[#14532D]',
    regulations: 'ICH-GCP E6(R2) · HIPAA · FDA 21 CFR Part 312 · GDPR',
    highlight: 'eTMF electronic Trial Master File with automated DIA Reference Model classification and redaction.',
    useCases: [
      'Electronic Trial Master Files (eTMF) across Multi-Site Clinical Trials',
      'Informed Consent Form (ICF) Version Tracking & Patient Verification',
      'Investigator Site Files (ISF) & IRB/IEC Regulatory Correspondence',
      'HIPAA / GDPR Compliant Protected Health Information (PHI) Redaction',
      'Clinical Governance Policies & Hospital Accreditation Records'
    ],
    metric: 'Zero PHI Leakage',
    accentColor: 'sky'
  },
  {
    id: 'bfsi',
    name: 'Banking, Financial Services & Insurance',
    tag: 'SEC 17a-4 / SOX',
    icon: Landmark,
    iconGradient: 'from-[#14532D] to-[#0284C7]',
    regulations: 'SEC Rule 17a-4 · FINRA · SOX §404 · ISO 27001 · AML Regulations',
    highlight: 'WORM non-rewritable, non-erasable electronic storage compliance with instant litigation legal hold.',
    useCases: [
      'Know-Your-Customer (KYC) & Customer Due Diligence (CDD) Onboarding',
      'Credit Underwriting & Mortgage Dossier Multi-Party Approvals',
      'SEC 17a-4 Compliant Electronic Broker-Dealer Records Archival',
      'Insurance First-Notice-of-Loss (FNOL) & Claims Processing',
      'Board Resolutions, Audit Committee Papers & Sovereign Data Controls'
    ],
    metric: 'WORM Compliant',
    accentColor: 'emerald'
  },
  {
    id: 'public',
    name: 'Government & Public Sector',
    tag: 'ISO 15489 / DoD',
    icon: Shield,
    iconGradient: 'from-[#0F766E] to-[#166534]',
    regulations: 'DoD 5015.02 · ISO 15489 · ISO 16175 · NIST SP 800-53',
    highlight: 'Defensible records disposition, multi-tier security classifications, and FOIA transparency governance.',
    useCases: [
      'Public Records Request (FOIA) Processing & Automated PII Redaction',
      'Citizen Service Application Digitization & Omnichannel Intake',
      'Legislative Council Policy Enactment & Controlled Promulgation',
      'Controlled Unclassified Information (CUI) & Defense Access Gates',
      'Statutory Legal Retention Schedules with Cryptographic Proof'
    ],
    metric: 'DoD Aligned',
    accentColor: 'teal'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Energy',
    tag: 'ISO 9001 / IATF',
    icon: Factory,
    iconGradient: 'from-[#14532D] to-[#0D9488]',
    regulations: 'ISO 9001:2015 · IATF 16949 · ISO 14001 · OSHA §1910',
    highlight: 'Engineering Change Order (ECO) workflows with multi-site CAD drawing revisioning and redline diffs.',
    useCases: [
      'Engineering Change Orders (ECO) & Shop Floor Drawing Revisions',
      'Standard Operating Procedures & Safe Work Method Statements (SWMS)',
      'Supplier Quality Audits & Certificate of Analysis (CoA) Ingestion',
      'Equipment Preventive Maintenance, Calibration & Asset Logs',
      'Hazardous Material & HSE Compliance Safety Data Sheets (SDS)'
    ],
    metric: 'Zero-Fault ECOs',
    accentColor: 'emerald'
  },
  {
    id: 'legal',
    name: 'Legal & Professional Services',
    tag: 'Ethical Walls',
    icon: Scale,
    iconGradient: 'from-[#0284C7] to-[#0D9488]',
    regulations: 'ABA Model Rules · GDPR · ISO 27001 · eIDAS / ESIGN',
    highlight: 'Strict ethical walls, automated matter categorization, and cryptographic side-by-side redline diffs.',
    useCases: [
      'Matter File Organization & Electronic Discovery (eDiscovery) Readiness',
      'Contract Lifecycle Management (CLM) from Redlining to e-Signature',
      'Conflict-of-Interest Checks & Information Barrier Governance',
      'Precedent Clause Libraries with Controlled Version Inheritance',
      'Defensible Client File Retention & Certified Document Disposition'
    ],
    metric: 'Cryptographic Diff',
    accentColor: 'sky'
  },
  {
    id: 'cro',
    name: 'Laboratories & CROs',
    tag: 'GLP / ISO 17025',
    icon: FlaskConical,
    iconGradient: 'from-[#0D9488] to-[#14532D]',
    regulations: 'GLP · GCP · ISO/IEC 17025 · 21 CFR Part 11 · ALCOA+',
    highlight: 'Study protocols, analytical method validation dossiers, certificates of analysis, and Trial Master Files.',
    useCases: [
      'Study Protocols & Method Validation Dossiers with Revision Locks',
      'Electronic Lab Notebooks (ELN) & Analytical Raw Data Verification',
      'Certificates of Analysis (CoA) Multi-Modal Ingestion & Data Extraction',
      'Study Archive Integrity with Immutable SHA-256 Checksum Logs',
      'Sponsor Audit Trail Packages & Real-Time Inspection Dossiers'
    ],
    metric: 'ALCOA+ Integrity',
    accentColor: 'teal'
  }
]

// 2. Cross-Industry Departmental Solutions (Brochure Page 15)
const DEPARTMENTAL_SOLUTIONS = [
  {
    id: 'finance',
    department: 'Finance & Accounting',
    title: 'Accounts Payable & Invoicing',
    icon: Receipt,
    benefit: 'Automated 3-Way ERP Matching',
    desc: 'Capture invoices from any channel, extract line-item tables with neural OCR, match to POs and Goods Receipts in ERP, and route for straight-through approval.',
    points: [
      'Omnichannel capture from email inboxes, scanned paper and EDI streams',
      'AI field and line-item extraction with confidence threshold gating',
      'Automated reconciliation against Purchase Orders and Goods Receipts in ERP',
      'Straight-through approval routing with configurable financial delegation limits'
    ],
    stat: '-74% AP Cycle Time'
  },
  {
    id: 'legal',
    department: 'Legal & Compliance',
    title: 'Contract Lifecycle Management (CLM)',
    icon: Scale,
    benefit: 'Centralized Obligation Tracking',
    desc: 'Controlled templates, collaborative negotiation, multi-party approvals, cryptographic e-signatures, milestone obligation tracking and renewal alerts in one governed repository.',
    points: [
      'Controlled contract template library with pre-approved fallback clauses',
      'Collaborative in-browser redlining and tracked revision histories',
      '21 CFR Part 11 and eIDAS compliant cryptographic digital signatures',
      'Automated milestone, expiration, and renewal notification alerts'
    ],
    stat: '100% Milestone Visibility'
  },
  {
    id: 'hr',
    department: 'Human Resources',
    title: 'Digital Employee Personnel Files',
    icon: Users,
    benefit: 'Policy Read-and-Acknowledge',
    desc: 'Confidential personnel files, onboarding packs, mandatory policy attestation campaigns with read-and-acknowledge, and statutory retention by employment status.',
    points: [
      'Confidential personnel dossiers protected by role-based access gates',
      'Automated policy attestation campaigns upon new handbook releases',
      'Pre-configured onboarding packet intake and verification workflows',
      'Event-based retention schedules tied to employee separation dates'
    ],
    stat: '99.4% Policy Sign-Off'
  },
  {
    id: 'engineering',
    department: 'Engineering & R&D',
    title: 'Drawings, CAD & Specifications',
    icon: Cpu,
    benefit: 'Asset-Linked Revision Control',
    desc: 'Revision-controlled technical CAD drawings, specifications and engineering change orders linked directly to products and operational assets with side-by-side diffing.',
    points: [
      'Major and minor revision management for technical CAD and PDF drawings',
      'Engineering Change Order (ECO) review and sign-off workflows',
      'Direct linkage between technical specifications and operational assets',
      'Side-by-side visual and text diff comparison between revisions'
    ],
    stat: 'Zero Duplicate Work'
  },
  {
    id: 'procurement',
    department: 'Procurement & Supply Chain',
    title: 'Supplier Management & Quality Files',
    icon: Building2,
    benefit: 'Certificate Expiry Alerts',
    desc: 'Supplier qualification dossiers, certificates of analysis with automated expiry alerts, quality agreements, and historical vendor performance audit tracking.',
    points: [
      'Supplier qualification dossiers and vendor onboarding intake',
      'Automated expiry alerts for ISO certificates and compliance attestations',
      'Centralized repository for supplier quality agreements and audit reports',
      'Performance rating history and historical compliance audit tracking'
    ],
    stat: 'Automated Expiry Alerts'
  },
  {
    id: 'customer-service',
    department: 'Customer Operations',
    title: 'Inbound Correspondence & Requests',
    icon: Headphones,
    benefit: 'Automated CRM Routing',
    desc: 'Inbound mail, customer correspondence, and digital inquiries classified automatically and routed to the right operational queue, linked directly to CRM profiles.',
    points: [
      'Automated scanning and classification of inbound mail and digital inquiries',
      'Metadata indexing and direct association with CRM customer profiles',
      'Rule-based routing to appropriate departmental resolution queues',
      'Full lifecycle tracking ensuring responsive SLA adherence'
    ],
    stat: 'Sub-Second Ingestion'
  },
  {
    id: 'corporate',
    department: 'Corporate Governance',
    title: 'Policies, Directives & Board Papers',
    icon: ShieldCheck,
    benefit: 'Controlled Attestation Campaigns',
    desc: 'Executive board papers, corporate policies and standard operating procedures with controlled publication lifecycles, superseding locks, and enterprise attestations.',
    points: [
      'Controlled publishing workflows with mandatory executive approvals',
      'Enterprise-wide attestation campaigns with real-time completion tracking',
      'Automatic withdrawal and superseding of obsolete corporate directives',
      'Confidential board paper collation and secure distribution'
    ],
    stat: 'Defensible Governance'
  },
  {
    id: 'it',
    department: 'IT & Information Security',
    title: 'Knowledge Base & ISMS Evidence',
    icon: Layers,
    benefit: 'ISO 27001 Evidence Readiness',
    desc: 'Runbooks, architecture topologies, and ISO 27001 / SOC 2 compliance evidence maintained with designated document ownership, review cycles, and access controls.',
    points: [
      'Technical runbooks and IT system architecture documentation governance',
      'ISO 27001, SOC 2, and security control audit evidence collection',
      'Scheduled periodic review cycles with designated document owners',
      'Version-locked change documentation with complete historical trails'
    ],
    stat: 'Continuous Audit State'
  },
  {
    id: 'records-office',
    department: 'Records Management',
    title: 'Archive Digitisation & Back-File Scanning',
    icon: Archive,
    benefit: 'Back-File Scanning & PDF/A',
    desc: 'High-throughput back-file scanning projects converting legacy paper archives into searchable, retention-managed digital PDF/A records complying with ISO 15489.',
    points: [
      'High-throughput bulk intake and automated indexing of legacy records',
      'Full-text OCR conversion producing searchable, preserved PDF/A files',
      'Application of ISO 15489 policy retention rules upon ingestion',
      'Defensible disposition workflows with cryptographic destruction records'
    ],
    stat: 'ISO 15489 Preserved'
  }
]

// 3. Pre-Configured Template Features (Brochure Page 14)
const TEMPLATE_ACCELERATORS = [
  {
    step: '01',
    title: 'Document Types',
    desc: 'Pre-defined types, metadata schemas, and automated regulatory numbering schemes.',
    icon: FileText
  },
  {
    step: '02',
    title: 'Workflows',
    desc: 'Industry-standard BPMN 2.0 review, approval, and segregation-of-duties change processes.',
    icon: Workflow
  },
  {
    step: '03',
    title: 'Retention Rules',
    desc: 'Starter retention schedules aligned with ISO 15489, FDA, and GDPR statutory requirements.',
    icon: Clock
  },
  {
    step: '04',
    title: 'Compliance Pack',
    desc: 'Control mappings, URS templates, and pre-packaged IQ/OQ/PQ validation evidence.',
    icon: BadgeCheck
  }
]

// 4. "Start Small, Scale Fast" Enterprise Growth Model (Brochure Page 15)
const SCALE_STAGES = [
  {
    phase: 'Phase 01',
    name: 'Pilot',
    badge: 'Immediate Value',
    tagline: 'High-Impact Single Process',
    desc: 'Begin with a focused, high-impact business need — such as accounts payable automation or SOP management — demonstrating rapid ROI in weeks.',
    highlights: ['Fast deployment', 'Immediate measurable ROI', 'Zero disruption to existing teams']
  },
  {
    phase: 'Phase 02',
    name: 'Department',
    badge: 'Operational Expansion',
    tagline: 'Division-Wide Workflow Integration',
    desc: 'Expand across related operational teams, establishing unified metadata taxonomies, role-based security policies, and ERP/CRM system integrations.',
    highlights: ['Reused metadata schemas', 'Integrated approval chains', 'Consolidated software licenses']
  },
  {
    phase: 'Phase 03',
    name: 'Enterprise',
    badge: 'Global Governance',
    tagline: 'Unified Multi-Entity Content Ecosystem',
    desc: 'Deploy enterprise-wide governance across all global divisions, subsidiaries, and manufacturing sites with centralized zero-trust security and defensible archival.',
    highlights: ['Multi-site GxP compliance', 'Centralized audit readiness', 'Consolidated total cost of ownership']
  }
]

export default function SolutionsPage({ onOpenDemoModal }) {
  const [filterMode, setFilterMode] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filtered lists based on search
  const filteredRegulated = REGULATED_INDUSTRIES.filter(ind => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return (
      ind.name.toLowerCase().includes(q) ||
      ind.regulations.toLowerCase().includes(q) ||
      ind.highlight.toLowerCase().includes(q) ||
      ind.useCases.some(uc => uc.toLowerCase().includes(q))
    )
  })

  const filteredDepartmental = DEPARTMENTAL_SOLUTIONS.filter(dept => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return (
      dept.department.toLowerCase().includes(q) ||
      dept.title.toLowerCase().includes(q) ||
      dept.benefit.toLowerCase().includes(q) ||
      dept.desc.toLowerCase().includes(q) ||
      dept.points.some(p => p.toLowerCase().includes(q))
    )
  })

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (Linear / Stripe Inspired)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
        
        {/* Ambient Subtle Grids & Lighting */}
        <div className="absolute inset-0 linear-grid opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-72 bg-gradient-to-b from-emerald-500/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="text-center max-w-4xl mx-auto space-y-5">
            
            {/* Enterprise Pill Badge with Pulsing Live Beacon */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#14532D]/20 shadow-2xs text-[#14532D] text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="abt-beacon-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14532D]" />
              </span>
              <Building2 className="h-3.5 w-3.5 text-[#14532D]" />
              <span className="uppercase tracking-wider text-[11px] font-bold">
                Purpose-Built Industry Configurations · 17 Turnkey Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12] text-slate-900">
              Tailored for Regulated Sectors &{' '}
              <span className="bg-gradient-to-r from-[#14532D] via-[#0D9488] to-[#0284C7] bg-clip-text text-transparent">
                Mission-Critical Operations
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl mx-auto">
              SmartiDP EDMS delivers pre-configured compliance packages, metadata taxonomies, and approval lifecycles built specifically for high-stakes industries and cross-functional enterprise departments.
            </p>

            {/* 4 Telemetry Stats Bento Strip */}
            <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-[#14532D]">8</div>
                <div className="text-[11px] font-medium text-slate-600 mt-0.5">Regulated Verticals</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-[#0D9488]">9</div>
                <div className="text-[11px] font-medium text-slate-600 mt-0.5">Departmental Modules</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-[#0284C7]">12+</div>
                <div className="text-[11px] font-medium text-slate-600 mt-0.5">Global Regulations</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-center">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-[#14532D]">100%</div>
                <div className="text-[11px] font-medium text-slate-600 mt-0.5">Audit Trail Capture</div>
              </div>
            </div>

            {/* Filter Navigation & Search Bar */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              
              {/* Segmented Filter Control */}
              <div className="inline-flex p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-2xs flex-wrap justify-center gap-1">
                <button
                  type="button"
                  onClick={() => setFilterMode('all')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filterMode === 'all'
                      ? 'bg-white text-[#14532D] shadow-sm ring-1 ring-[#14532D]/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  All Solutions (17)
                </button>
                <button
                  type="button"
                  onClick={() => setFilterMode('regulated')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    filterMode === 'regulated'
                      ? 'bg-white text-[#14532D] shadow-sm ring-1 ring-[#14532D]/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <FlaskConical className="h-3.5 w-3.5" />
                  <span>Regulated & GxP (8)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFilterMode('departmental')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    filterMode === 'departmental'
                      ? 'bg-white text-[#14532D] shadow-sm ring-1 ring-[#14532D]/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Briefcase className="h-3.5 w-3.5" />
                  <span>Departments (9)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFilterMode('scale')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    filterMode === 'scale'
                      ? 'bg-white text-[#14532D] shadow-sm ring-1 ring-[#14532D]/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>Scaling Roadmap</span>
                </button>
              </div>

              {/* Instant Search Bar */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by standard or keyword..."
                  className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#14532D]/20 focus:border-[#14532D] shadow-2xs transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs px-1"
                  >
                    ×
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. TEMPLATE ACCELERATION FRAMEWORK (Brochure Page 14)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
              <div className="max-w-2xl">
                <span className="text-[11px] font-mono font-bold text-[#14532D] uppercase tracking-wider block mb-1">
                  Brochure Specification · Page 14
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Pre-Configured Solution Templates Accelerate Deployment
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Rather than building from scratch, SmartiDP comes with industry-specific document types, workflows, metadata, and retention rules ready on Day 1.
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white text-xs font-bold shadow-md shadow-emerald-950/10 hover:shadow-lg transition-all self-start lg:self-auto shrink-0 group cursor-pointer"
              >
                <span>Request Solution Template Pack</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
              {TEMPLATE_ACCELERATORS.map((t, idx) => {
                const Icon = t.icon
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:border-emerald-600/30 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-9 w-9 rounded-xl bg-emerald-50 text-[#14532D] flex items-center justify-center border border-emerald-200/60 shadow-2xs">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-[10px] font-bold text-slate-400">
                          {t.step}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{t.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. REGULATED LIFE SCIENCES & GxP SECTORS (8 Verticals)
      ───────────────────────────────────────────────────────────── */}
      {(filterMode === 'all' || filterMode === 'regulated') && (
        <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80 relative">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-bold uppercase tracking-widest shadow-2xs mb-3">
                  <FlaskConical className="h-3.5 w-3.5 text-[#14532D]" />
                  <span>GxP & Mission-Critical Verticals</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                  Regulated Life Sciences & High-Stakes Industries
                </h2>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Engineered with mandatory technical controls complying with FDA 21 CFR Part 11, EU Annex 11, ISO 13485, and HIPAA data integrity requirements.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start lg:self-auto shrink-0">
                <span className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-[#14532D] shadow-2xs">
                  {filteredRegulated.length} Active Industry Modules
                </span>
              </div>
            </div>

            {/* 8 Regulated Verticals Bento Grid (2x4 on large screens) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredRegulated.map((ind) => {
                const Icon = ind.icon
                return (
                  <div
                    key={ind.id}
                    className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-emerald-600/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Header with Icon & Pill Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${ind.iconGradient} text-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-[#14532D] text-[10px] font-mono font-bold tracking-wide">
                          {ind.tag}
                        </span>
                      </div>

                      {/* Industry Title */}
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#14532D] transition-colors leading-snug mb-2">
                        {ind.name}
                      </h3>

                      {/* Regulatory Standards Strip */}
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/70 text-[10px] font-mono font-semibold text-slate-600 mb-4 leading-relaxed">
                        {ind.regulations}
                      </div>

                      {/* Value Proposition Highlight */}
                      <p className="text-xs text-slate-600 italic mb-4 leading-relaxed bg-[#F0FDF4]/60 p-2.5 rounded-xl border border-[#14532D]/10">
                        "{ind.highlight}"
                      </p>

                      {/* Complete List of Use Cases */}
                      <div className="space-y-2 border-t border-slate-100 pt-4 mb-4">
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          Key Workflows
                        </div>
                        {ind.useCases.map((uc, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D] shrink-0 mt-0.5" />
                            <span className="font-medium">{uc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#14532D]">
                        {ind.metric}
                      </span>
                      <button
                        type="button"
                        onClick={onOpenDemoModal}
                        className="text-xs font-bold text-[#14532D] hover:text-[#0D9488] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                      >
                        <span>Request Spec</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                  </div>
                )
              })}
            </div>

            {filteredRegulated.length === 0 && (
              <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
                <Search className="h-8 w-8 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No matching regulated industries found</h3>
                <p className="text-xs text-slate-500 mt-1">Try clearing your search query or switching to All Solutions.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-4 py-2 rounded-xl bg-[#14532D] text-white text-xs font-bold"
                >
                  Clear Search Filter
                </button>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. CROSS-INDUSTRY DEPARTMENTAL USE CASES (9 Departments)
      ───────────────────────────────────────────────────────────── */}
      {(filterMode === 'all' || filterMode === 'departmental') && (
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80 relative">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-bold uppercase tracking-widest shadow-2xs mb-3">
                  <Briefcase className="h-3.5 w-3.5 text-[#14532D]" />
                  <span>Cross-Industry Functional Modules</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                  Value in Every Department, Across Every Sector
                </h2>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  Beyond regulated content, SmartiDP EDMS digitises and automates the document-heavy processes found in every enterprise organisation.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start lg:self-auto shrink-0">
                <span className="px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-slate-200 text-xs font-mono font-bold text-[#14532D] shadow-2xs">
                  {filteredDepartmental.length} Departmental Use Cases
                </span>
              </div>
            </div>

            {/* 9 Departmental Bento Grid (3x3 on large screens) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDepartmental.map((dept) => {
                const Icon = dept.icon
                return (
                  <div
                    key={dept.id}
                    className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-emerald-600/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#14532D] to-[#0D9488] text-white flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono font-bold text-[#14532D] uppercase tracking-wider block">
                              {dept.department}
                            </span>
                            <h3 className="text-base font-bold text-slate-900 leading-snug">
                              {dept.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Benefit Tag Callout */}
                      <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[#14532D] text-xs font-bold">
                        <Sparkles className="h-3 w-3 text-emerald-600" />
                        <span>{dept.benefit}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                        {dept.desc}
                      </p>

                      {/* 4 Concrete Bullet Points */}
                      <div className="space-y-2 border-t border-slate-100 pt-4 mb-5">
                        {dept.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#0D9488] shrink-0 mt-0.5" />
                            <span className="font-medium">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-[#14532D]">
                        {dept.stat}
                      </span>
                      <button
                        type="button"
                        onClick={onOpenDemoModal}
                        className="text-xs font-bold text-[#14532D] hover:text-[#0D9488] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                      >
                        <span>Schedule Demo</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                  </div>
                )
              })}
            </div>

            {filteredDepartmental.length === 0 && (
              <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
                <Search className="h-8 w-8 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No matching departmental use cases found</h3>
                <p className="text-xs text-slate-500 mt-1">Try clearing your search query or switching to All Solutions.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 px-4 py-2 rounded-xl bg-[#14532D] text-white text-xs font-bold"
                >
                  Clear Search Filter
                </button>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. "START SMALL, SCALE FAST" ROADMAP (Brochure Page 15)
      ───────────────────────────────────────────────────────────── */}
      {(filterMode === 'all' || filterMode === 'scale') && (
        <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80 relative overflow-hidden">
          
          <div className="absolute inset-0 linear-grid opacity-40 pointer-events-none" />

          <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-bold uppercase tracking-widest shadow-2xs mb-3">
                <TrendingUp className="h-3.5 w-3.5 text-[#14532D]" />
                <span>Enterprise Growth Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
                Start Small, Scale Fast
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Many customers begin with a single high-impact process — such as accounts payable or SOP management — then expand across the enterprise on the same platform, reusing security, metadata, and integrations.
              </p>
            </div>

            {/* 3-Stage Scaling Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {SCALE_STAGES.map((s, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-emerald-600/35 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#14532D] text-white">
                        {s.phase}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {s.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{s.name}</h3>
                    <div className="text-xs font-semibold text-[#14532D] mb-3">
                      {s.tagline}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {s.desc}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4">
                      {s.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={onOpenDemoModal}
                      className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-[#14532D] hover:text-white text-slate-700 font-bold text-xs border border-slate-200 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Explore {s.name} Strategy</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture Assurance Note */}
            <div className="mt-12 max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-[#14532D] flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Zero Custom Code Required to Scale</div>
                  <div className="text-xs text-slate-600">Reuses unified authentication (SAML 2.0 / SCIM), metadata inheritance, and zero-trust security controls.</div>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="px-5 py-2.5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white text-xs font-bold shrink-0 shadow-2xs hover:shadow-md transition-all cursor-pointer"
              >
                Plan Your Enterprise Rollout
              </button>
            </div>

          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          6. STANDARDIZED EXECUTIVE BANNER (PageCtaBanner)
      ───────────────────────────────────────────────────────────── */}
      <PageCtaBanner
        onOpenDemoModal={onOpenDemoModal}
        badge="Tailored Enterprise Architecture"
        title="Need a Custom Regulatory Package or Multi-Site Workflow?"
        description="SmartiDP EDMS supports visual no-code configuration, custom metadata schemas, and multi-tier approval policies tailored to your compliance mandates."
        primaryBtnText="Request a Demo"
        secondaryBtnText="Contact Solutions Team"
        secondaryLink="/contact"
      />

    </div>
  )
}
