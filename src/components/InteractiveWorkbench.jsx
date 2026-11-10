import React, { useState } from 'react'
import {
  FileText,
  ScanText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Eye,
  Check,
  RefreshCw,
  Lock,
  FileSignature,
  History,
  Sparkles,
  ArrowRight,
  ExternalLink,
  GitBranch,
  FileCheck2,
  BadgeCheck,
  Printer,
  Copy,
  Cpu,
  Fingerprint,
  Calendar,
  Building2,
  AlertCircle
} from 'lucide-react'

const SAMPLE_DOCS = [
  {
    id: 'sop',
    code: 'SOP-QA-0142',
    revision: 'Rev 4.0',
    title: 'Deviation Handling & CAPA Protocol',
    category: 'Life Sciences / GxP',
    compliance: '21 CFR Part 11 · GAMP 5 · EU Annex 11',
    status: 'Effective',
    statusColor: 'emerald',
    orgName: 'KENZ BIOPHARMA LABS · QUALITY SYSTEM',
    docType: 'Standard Operating Procedure (SOP)',
    classification: 'Restricted GxP Controlled',
    effectiveDate: '2026-03-14',
    reviewCycle: '24 Months (Due 2028-03-14)',
    signedBy: 'Dr. Evelyn Vance, Ph.D.',
    signerRole: 'VP of Quality Assurance & Regulatory Affairs',
    authMethod: 'Two-Component (SAML 2.0 SSO + FIDO2 WebAuthn)',
    signedTime: '2026-03-14 09:42:15 UTC',
    meaning: 'Regulatory Approval & Commercial Release',
    sha256: '88fa2b109e44bc7190d7a2210c4391e6b8a1c90df0428d01f92e3a15b7c024d9',
    certId: 'KENZ-CERT-2026-GxP-8891',
    fields: [
      { label: 'Document Type', value: 'Standard Operating Procedure (SOP)', conf: 100, verified: true },
      { label: 'Classification', value: 'Internal Restricted (GxP)', conf: 100, verified: true },
      { label: 'Document Owner', value: 'Quality Assurance Dept.', conf: 99.8, verified: true },
      { label: 'Effective Date', value: '2026-03-14', conf: 100, verified: true },
      { label: 'Periodic Review Cycle', value: '24 Months (March 2028)', conf: 99.7, verified: true },
      { label: 'Assigned Training', value: 'Mandatory Read-and-Acknowledge (142 Users)', conf: 99.5, verified: true }
    ],
    docClauses: [
      {
        num: '1.0',
        title: 'PURPOSE & REGULATORY SCOPE',
        text: 'This Standard Operating Procedure governs the systematic identification, triage, root-cause investigation, and CAPA escalation of deviations arising during commercial pharmaceutical packaging, sterile fill-finish, and cold-chain distribution.',
        ocrMatch: null
      },
      {
        num: '2.0',
        title: 'INCIDENT CLASSIFICATION & TRIAGE',
        text: 'All non-conformances must be classified within 2 hours of detection into Minor (no product impact), Major (process parameter deviation within validation limits), or Critical (sterility breach or potency excursion requiring QA quarantine).',
        ocrMatch: 'Classification: Internal Restricted (GxP)'
      },
      {
        num: '3.0',
        title: 'MANDATORY PERIODIC REVIEW & GOVERNANCE',
        text: 'Per 21 CFR Part 11 and EU GMP Annex 11, this procedure remains effective for a strict 24-month horizon. Automated re-qualification workflows trigger at Day 660 with mandatory electronic read-and-acknowledge assigned to 142 certified operators.',
        ocrMatch: 'Periodic Review: 24 Months · Mandatory Read-and-Acknowledge'
      }
    ],
    versions: [
      { ver: 'v4.0', status: 'Effective', date: '2026-03-14', user: 'Dr. Evelyn Vance (QA Head)', notes: 'Updated 24h CAPA trigger per FDA warning letter guidance.' },
      { ver: 'v3.1', status: 'Superseded', date: '2024-03-10', user: 'Marcus Chen (QA Lead)', notes: 'Minor terminology harmonization with ISO 9001:2015.' },
      { ver: 'v3.0', status: 'Archived Baseline', date: '2022-03-01', user: 'Marcus Chen (QA Lead)', notes: 'Initial migration into SmartiDP cloud repository.' }
    ],
    diffs: [
      {
        section: 'Section 2.3 · Investigation Escalation Timelines',
        oldText: 'Investigations shall initiate within 48 business hours of initial triage notification.',
        newText: 'Investigations shall initiate within 24 calendar hours per FDA warning letter guidance 2026.'
      },
      {
        section: 'Section 4.1 · Batch Disposition Electronic Sign-Off',
        oldText: 'Manual wet signatures permitted on Annex-C when network outages exceed 6 hours.',
        newText: 'All batch disposition decisions strictly require two-component 21 CFR Part 11 digital signatures; manual waivers prohibited.'
      }
    ],
    auditLogs: [
      { time: '09:42:15.819 UTC', event: 'E-SIGNATURE APPLIED', user: 'Dr. Evelyn Vance (QA Head)', terminal: '10.240.14.92 · Secure Workstation', hash: 'sha256:88fa2b10...', prevHash: 'sha256:44b19e...' },
      { time: '09:15:02.104 UTC', event: 'PARALLEL WORKFLOW APPROVED', user: 'System (BPMN 2.0 Engine)', terminal: 'SmartIDP Workflow Cluster', hash: 'sha256:44b19e02...', prevHash: 'sha256:190d7a...' },
      { time: '08:02:40.450 UTC', event: 'REDLINE DELTA RESOLVED', user: 'James Doe (Lead Author)', terminal: '10.240.14.88 · Authoring Station', hash: 'sha256:190d7a22...', prevHash: 'sha256:32c841...' },
      { time: 'Yesterday 16:30 UTC', event: 'MULTIMODAL OCR INGEST', user: 'SmartIDP Neural Ingest Core', terminal: 'OCR Worker Instance #04', hash: 'sha256:32c841e0...', prevHash: 'GENESIS-BLOCK' }
    ]
  },
  {
    id: 'invoice',
    code: 'INV-55190',
    revision: 'PO-88213',
    title: 'Accounts Payable Commercial Invoice',
    category: 'Finance / AP Automation',
    compliance: 'ISO 9001 · 3-Way PO Reconciliation · GAAP',
    status: 'Ready for Payment',
    statusColor: 'blue',
    orgName: 'KENZ ENTERPRISE SYSTEMS · FINANCE OPERATIONS',
    docType: 'Commercial Tax Invoice',
    classification: 'Confidential Financial Record',
    effectiveDate: '2026-03-14',
    reviewCycle: '7 Years Retention Schedule',
    signedBy: 'Alistair Cooper, CPA',
    signerRole: 'Director of Corporate Financial Controllership',
    authMethod: 'Two-Component (Microsoft Entra ID + TOTP)',
    signedTime: '2026-03-14 11:20:04 UTC',
    meaning: 'ERP NetSuite Disbursement Authorization',
    sha256: '77b1029fe8011cb20194a552199bce8812a048dc0910e42718fb89190cde0142',
    certId: 'KENZ-FIN-2026-AP-5519',
    fields: [
      { label: 'Supplier Entity', value: 'BioMatrix Laboratory Supplies Ltd', conf: 99.4, verified: true },
      { label: 'Invoice Number', value: 'INV-55190 (Tax ID: US-991402)', conf: 100, verified: true },
      { label: 'Purchase Order Link', value: 'PO-88213 (Line Item 100% Match)', conf: 99.8, verified: true },
      { label: 'Net Subtotal', value: '$11,500.00 USD', conf: 100, verified: true },
      { label: 'Tax Amount (8.5%)', value: '$977.50 USD', conf: 99.2, verified: true },
      { label: 'Total Payable Amount', value: '$12,477.50 USD (Net 30)', conf: 100, verified: true }
    ],
    docClauses: [
      {
        num: 'ITEM 1',
        title: 'STERILE CONSUMABLES & LABWARE',
        text: 'Qty: 500 Units · Part #BM-901-T · Gamma-irradiated 50mL Centrifuge Tubes · Unit Price: $12.00 USD · Line Total: $6,000.00 USD. Verified against Receiving Slip GRN-2026-4410.',
        ocrMatch: 'Supplier: BioMatrix Supplies · Line Total: $6,000.00'
      },
      {
        num: 'ITEM 2',
        title: 'CALIBRATED MICROPIPETTE ARRAYS',
        text: 'Qty: 10 Units · Part #BM-PIPE-8 · 8-Channel Electronic Pipettor with NIST Calibration Certificate · Unit Price: $550.00 USD · Line Total: $5,500.00 USD.',
        ocrMatch: 'Purchase Order Link: PO-88213 · Line Total: $5,500.00'
      },
      {
        num: 'SUMMARY',
        title: 'TAX & PAYMENT RECONCILIATION',
        text: 'Subtotal: $11,500.00 USD · Applicable Sales Tax (8.5%): $977.50 USD · Grand Total: $12,477.50 USD · Payment Terms: Net 30 Days · Automated 3-way match matched PO, Invoice, and Goods Receipt.',
        ocrMatch: 'Total Payable Amount: $12,477.50 USD'
      }
    ],
    versions: [
      { ver: 'v1.1', status: 'Payment Authorized', date: '2026-03-14', user: 'Alistair Cooper (Finance)', notes: 'Approved 3-way ERP match with PO-88213.' },
      { ver: 'v1.0', status: 'Initial Ingestion', date: '2026-03-14', user: 'SmartIDP Ingestion AI', notes: 'Automated email inbox capture from billing@biomatrix.com.' }
    ],
    diffs: [
      {
        section: 'Line 2 Discrepancy Reconciliation',
        oldText: 'Tax rate parsed as 8.0% standard ($920.00 USD) - flagged for review.',
        newText: 'County surcharge applied (+0.5%) updated to exact 8.5% ($977.50 USD) matched against vendor master profile.'
      }
    ],
    auditLogs: [
      { time: '11:20:04.102 UTC', event: 'ERP PAYMENT RELEASED', user: 'Alistair Cooper (Finance)', terminal: 'NetSuite ERP Connector Gateway', hash: 'sha256:77b1029f...', prevHash: 'sha256:99f301...' },
      { time: '10:45:11.882 UTC', event: '3-WAY PO MATCH CONFIRMED', user: 'SmartIDP Match Engine', terminal: 'Automated Validation Station', hash: 'sha256:99f30140...', prevHash: 'sha256:55e819...' },
      { time: '10:42:00.320 UTC', event: 'OMNICHANNEL INGEST (EMAIL)', user: 'AP Inbound Ingestion Hub', terminal: 'Office 365 Exchange Listener', hash: 'sha256:55e81911...', prevHash: 'GENESIS-BLOCK' }
    ]
  },
  {
    id: 'dhf',
    code: 'DHF-MD-0914',
    revision: 'Rev 2.0',
    title: 'Design History File · CardioSmart Gen-3',
    category: 'Medical Devices / ISO 13485',
    compliance: 'ISO 13485:2016 · EU MDR 2017/745 · FDA QMSR 820',
    status: 'Locked for CE Submission',
    statusColor: 'purple',
    orgName: 'KENZ MEDTECH SYSTEMS · REGULATORY DOSSIER',
    docType: 'Medical Device Technical Dossier',
    classification: 'Class IIb Active Medical Device File',
    effectiveDate: '2026-03-14',
    reviewCycle: 'Permanent Device Lifecycle Record',
    signedBy: 'Madeline Vance, RAC',
    signerRole: 'Chief Regulatory Affairs & Quality Compliance Officer',
    authMethod: 'Two-Component (Okta Verify Push + Biometrics)',
    signedTime: '2026-03-14 14:15:30 UTC',
    meaning: 'Technical Documentation & CE Mark Sign-Off',
    sha256: '129ef402bb8a091e4a3199bc45120aef91209841bb02998a4421b0923e110492',
    certId: 'KENZ-MDR-2026-CE-0914',
    fields: [
      { label: 'Device Platform', value: 'CardioSmart Infusion System Gen-3', conf: 100, verified: true },
      { label: 'Risk Standard Compliance', value: 'ISO 14971:2019 Risk Management Aligned', conf: 99.8, verified: true },
      { label: 'Regulatory Classification', value: 'Class IIb Active Infusion Device', conf: 100, verified: true },
      { label: 'Traceability Matrix', value: '100% Verification Coverage (48/48 Req)', conf: 99.9, verified: true },
      { label: 'Engineering Change Ref', value: 'ECO-2026-0412 (Firmware Safety Kernel v2.4)', conf: 99.6, verified: true },
      { label: 'Notified Body Dossier', value: 'Technical File Section 4.2 Locked', conf: 100, verified: true }
    ],
    docClauses: [
      {
        num: 'SECTION 1',
        title: 'DEVICE DESCRIPTION & INTENDED CLINICAL USE',
        text: 'The CardioSmart Infusion System Gen-3 delivers controlled intravenous administration of critical cardiovascular therapies in ICU and emergency transport environments with dual redundant pressure sensors.',
        ocrMatch: 'Device: CardioSmart Infusion System Gen-3'
      },
      {
        num: 'SECTION 2',
        title: 'RISK MANAGEMENT & ALARM TRACEABILITY',
        text: 'In accordance with ISO 14971:2019 and IEC 60601-1-8, all single-fault occlusion scenarios trigger audible/visual alerts within 1.2 seconds, fail-safe clamping, and automated telemetry dispatch to nursing stations.',
        ocrMatch: 'Risk Standard: ISO 14971:2019 Aligned'
      },
      {
        num: 'SECTION 3',
        title: 'VERIFICATION MATRIX & REGULATORY LOCK',
        text: '48 of 48 design input requirements have verified protocols (Protocol DVP-880 through DVP-928) signed and locked under ECO-2026-0412. Uncontrolled modifications are cryptographically blocked.',
        ocrMatch: 'Traceability: 100% Verification Coverage (48/48 Req)'
      }
    ],
    versions: [
      { ver: 'v2.0', status: 'Locked (CE Ready)', date: '2026-03-14', user: 'Madeline Vance (Reg Affairs)', notes: 'Final submission freeze for TÜV SÜD Notified Body audit.' },
      { ver: 'v1.2', status: 'Superseded Draft', date: '2025-11-20', user: 'Thomas Becker (Lead Eng)', notes: 'Integrated human factors usability testing results per IEC 62366-1.' },
      { ver: 'v1.0', status: 'Archived Baseline', date: '2025-06-15', user: 'Thomas Becker (Lead Eng)', notes: 'Initial architecture definition baseline.' }
    ],
    diffs: [
      {
        section: 'Section 4.2 · Cybersecurity Kernel Update',
        oldText: 'Bluetooth Low Energy pairing allowed default PIN fallback during commissioning.',
        newText: 'Mandatory elliptic-curve cryptographic pairing (ECDSA P-256) enforced per FDA Postmarket Cybersecurity Guidance 2026.'
      }
    ],
    auditLogs: [
      { time: '14:15:30.902 UTC', event: 'DHF LOCKED FOR SUBMISSION', user: 'Madeline Vance (Reg Affairs)', terminal: '10.240.18.12 · Regulatory Station', hash: 'sha256:129ef402...', prevHash: 'sha256:443ac1...' },
      { time: '12:00:10.455 UTC', event: 'ISO 14971 RISK MATRIX SEALED', user: 'Dr. Rebecca Ramos (Safety Lead)', terminal: 'Risk Management Node #02', hash: 'sha256:443ac190...', prevHash: 'sha256:908fa1...' },
      { time: 'Yesterday 18:22 UTC', event: 'DESIGN VERIFICATION LINKED', user: 'Thomas Becker (Lead Eng)', terminal: '10.240.18.05 · Engineering Workstation', hash: 'sha256:908fa112...', prevHash: 'GENESIS-BLOCK' }
    ]
  }
]

export default function InteractiveWorkbench({ onOpenDemoModal }) {
  const [selectedDoc, setSelectedDoc] = useState(SAMPLE_DOCS[0])
  const [activeTab, setActiveTab] = useState('preview') // 'preview' | 'signature' | 'audit' | 'diff'
  const [showBoundingBoxes, setShowBoundingBoxes] = useState(true)
  const [isVerifying, setIsVerifying] = useState(false)
  const [verifySuccess, setVerifySuccess] = useState(false)
  const [copiedHash, setCopiedHash] = useState(false)
  const [isSimulatingSwitch, setIsSimulatingSwitch] = useState(false)

  const handleSelectDoc = (doc) => {
    if (doc.id === selectedDoc.id) return
    setIsSimulatingSwitch(true)
    setSelectedDoc(doc)
    setVerifySuccess(false)
    setTimeout(() => {
      setIsSimulatingSwitch(false)
    }, 450)
  }

  const handleVerifyHash = () => {
    setIsVerifying(true)
    setTimeout(() => {
      setIsVerifying(false)
      setVerifySuccess(true)
    }, 700)
  }

  const handleCopyHash = () => {
    navigator.clipboard?.writeText(selectedDoc.sha256)
    setCopiedHash(true)
    setTimeout(() => setCopiedHash(false), 2000)
  }

  return (
    <section className="py-20 lg:py-28 bg-[#F5F7F5] border-y border-slate-200 relative overflow-hidden">
      {/* Subtle background ambient grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#14532D_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-4 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#14532D]" />
            <span>INTERACTIVE PLATFORM SIMULATION</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight leading-tight">
            Experience Governed Document Management
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Simulate how SmartiDP EDMS ingests, extracts, verifies, and cryptographically signs controlled enterprise records across regulated life sciences, finance, and engineering.
          </p>

          {/* Quick Capability Tags */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-medium text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs">
              <ShieldCheck className="h-3.5 w-3.5 text-[#14532D]" />
              21 CFR Part 11 Validated
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs">
              <Lock className="h-3.5 w-3.5 text-[#14532D]" />
              Tamper-Evident SHA-256 Hashing
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs">
              <ScanText className="h-3.5 w-3.5 text-[#14532D]" />
              Sub-350ms Multimodal OCR
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs">
              <GitBranch className="h-3.5 w-3.5 text-[#14532D]" />
              Automated Revision Diffing
            </span>
          </div>
        </div>

        {/* 3 Executive Document Switcher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-8 max-w-6xl mx-auto">
          {SAMPLE_DOCS.map((doc) => {
            const isSelected = selectedDoc.id === doc.id
            return (
              <button
                key={doc.id}
                onClick={() => handleSelectDoc(doc)}
                className={`text-left p-5 rounded-2xl transition-all cursor-pointer border relative overflow-hidden group ${
                  isSelected
                    ? 'bg-white border-[#14532D] shadow-xl shadow-[#14532D]/10 ring-2 ring-[#14532D]/20 -translate-y-1'
                    : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Active Indicator Bar on Top */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1 transition-all ${
                    isSelected ? 'bg-[#14532D]' : 'bg-transparent group-hover:bg-slate-200'
                  }`} 
                />

                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold font-mono ${
                    isSelected 
                      ? 'bg-[#14532D] text-white' 
                      : 'bg-slate-100 text-slate-700'
                  }`}>
                    {doc.code}
                  </span>
                  
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                    doc.statusColor === 'emerald'
                      ? 'bg-[#E8F3EC] text-[#14532D]'
                      : doc.statusColor === 'blue'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'bg-purple-50 text-purple-700 border border-purple-200'
                  }`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                    {doc.status}
                  </span>
                </div>

                <div className="font-bold text-sm text-slate-900 group-hover:text-[#14532D] transition-colors leading-snug">
                  {doc.title}
                </div>

                <div className="text-xs text-slate-500 mt-1 font-medium">
                  {doc.category}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono truncate max-w-[180px]">
                    {doc.compliance}
                  </span>
                  {isSelected ? (
                    <span className="text-[#14532D] font-bold flex items-center gap-1 shrink-0">
                      <Check className="h-3.5 w-3.5" /> Active
                    </span>
                  ) : (
                    <span className="text-slate-400 group-hover:text-slate-600 transition-colors shrink-0">
                      Simulate →
                    </span>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* The Governed Workbench Console Window */}
        <div className="max-w-6xl mx-auto rounded-3xl border border-slate-300 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden">
          
          {/* Top Application Bar */}
          <div className="px-5 sm:px-6 py-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
            
            {/* Window Dots & Breadcrumb */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/90 inline-block" />
                <span className="h-3 w-3 rounded-full bg-amber-400/90 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/90 inline-block" />
              </div>
              <div className="h-4 w-px bg-slate-700 mx-1 hidden sm:block" />
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Lock className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-400 hidden md:inline">vault://smartidp.corp/</span>
                <span className="text-white font-bold">{selectedDoc.code}</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                  {selectedDoc.revision}
                </span>
              </div>
            </div>

            {/* Direct Link to Real Live Portal */}
            <div className="flex items-center gap-3">
              <a
                href="https://edms.smartidp.ai/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold transition-all border border-emerald-600/50 cursor-pointer shadow-xs"
              >
                <span>Open in Live Portal</span>
                <ExternalLink className="h-3.5 w-3.5 text-emerald-200" />
              </a>
            </div>
          </div>

          {/* Secondary Workbench Navigation Tabs */}
          <div className="px-5 sm:px-6 py-3 bg-[#F5F7F5] border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            
            {/* View Switcher Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab === 'preview'
                    ? 'bg-[#14532D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Document & AI Extraction</span>
              </button>

              <button
                onClick={() => setActiveTab('signature')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab === 'signature'
                    ? 'bg-[#14532D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <FileSignature className="h-3.5 w-3.5" />
                <span>21 CFR Part 11 Signature</span>
              </button>

              <button
                onClick={() => setActiveTab('audit')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab === 'audit'
                    ? 'bg-[#14532D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <History className="h-3.5 w-3.5" />
                <span>Immutable Audit Trail</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  activeTab === 'audit' ? 'bg-emerald-900 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {selectedDoc.auditLogs.length}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('diff')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeTab === 'diff'
                    ? 'bg-[#14532D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <GitBranch className="h-3.5 w-3.5" />
                <span>Version History & Diff</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  activeTab === 'diff' ? 'bg-emerald-900 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {selectedDoc.versions.length}
                </span>
              </button>
            </div>

            {/* Quick Hash Display with Copy Button */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
              <span className="hidden md:inline">SHA-256:</span>
              <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 font-bold">
                {selectedDoc.sha256.slice(0, 14)}...
              </span>
              <button
                onClick={handleCopyHash}
                title="Copy Full SHA-256 Digest"
                className="p-1 rounded-md bg-white border border-slate-200 text-slate-600 hover:text-[#14532D] hover:border-[#14532D] transition-colors cursor-pointer"
              >
                {copiedHash ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
          </div>

          {/* Loading Simulation Bar */}
          {isSimulatingSwitch && (
            <div className="bg-[#E8F3EC] border-b border-[#14532D]/20 px-6 py-2.5 text-xs text-[#14532D] font-bold flex items-center justify-center gap-2 animate-pulse">
              <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              <span>Ingesting controlled record {selectedDoc.code} & validating cryptographic ledger hash...</span>
            </div>
          )}

          {/* Workbench Body */}
          <div className="p-6 sm:p-8 bg-white min-h-[520px]">
            
            {/* VIEW 1: Document & AI Extraction (Split 2-Column Enterprise Workbench) */}
            {activeTab === 'preview' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Authentic Simulated Controlled Document Canvas */}
                <div className="lg:col-span-6 bg-[#F5F7F5]/80 rounded-2xl border border-slate-200 p-5 relative overflow-hidden">
                  
                  {/* Top Canvas Toolbar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 text-xs">
                    <div className="flex items-center gap-2 font-semibold text-slate-700">
                      <FileText className="h-4 w-4 text-[#14532D]" />
                      <span>Controlled Document Canvas</span>
                    </div>

                    <button
                      onClick={() => setShowBoundingBoxes(!showBoundingBoxes)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                        showBoundingBoxes
                          ? 'bg-[#E8F3EC] text-[#14532D] border-[#14532D]/30'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <ScanText className="h-3 w-3" />
                      <span>{showBoundingBoxes ? 'AI Highlights: ON' : 'AI Highlights: OFF'}</span>
                    </button>
                  </div>

                  {/* The Document Paper Sheet */}
                  <div className="bg-white rounded-xl border border-slate-300 p-5 shadow-sm relative overflow-hidden text-xs">
                    
                    {/* Semi-Transparent Controlled Document Diagonal Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.06] rotate-[-25deg]">
                      <span className="text-4xl sm:text-5xl font-extrabold font-mono uppercase tracking-widest text-[#14532D] text-center leading-none">
                        KENZ INNOVATIONS<br />CONTROLLED RECORD<br />COPY #042
                      </span>
                    </div>

                    {/* Official Document Header */}
                    <div className="pb-3 border-b-2 border-slate-900 flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                          {selectedDoc.orgName}
                        </div>
                        <div className="text-sm font-extrabold text-slate-900 mt-0.5">
                          {selectedDoc.title}
                        </div>
                      </div>
                      <div className="text-right shrink-0 font-mono text-[10px]">
                        <div className="font-bold text-slate-900">{selectedDoc.code}</div>
                        <div className="text-[#14532D] font-semibold">{selectedDoc.revision}</div>
                        <div className="text-slate-500">{selectedDoc.effectiveDate}</div>
                      </div>
                    </div>

                    {/* Document Body Clauses */}
                    <div className="py-4 space-y-4">
                      {selectedDoc.docClauses.map((clause, cIdx) => (
                        <div key={cIdx} className="space-y-1 relative">
                          <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wide">
                            {clause.num} {clause.title}
                          </div>
                          
                          <div className={`p-2 rounded-lg transition-all ${
                            showBoundingBoxes && clause.ocrMatch 
                              ? 'bg-[#E8F3EC]/70 border border-[#14532D]/30 shadow-2xs' 
                              : 'text-slate-600'
                          }`}>
                            <p className="text-[11px] leading-relaxed text-slate-700">
                              {clause.text}
                            </p>
                            
                            {showBoundingBoxes && clause.ocrMatch && (
                              <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-mono text-[#14532D] font-bold">
                                <ScanText className="h-3 w-3 shrink-0" />
                                <span>[Extracted: {clause.ocrMatch}]</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Official 21 CFR Part 11 Digital Signature Seal Block */}
                    <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-[#E8F3EC] to-emerald-50/60 border border-[#14532D]/30 text-xs">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-1.5 font-bold text-[#14532D] text-[11px]">
                          <BadgeCheck className="h-4 w-4 text-[#14532D]" />
                          <span>VALIDATED ELECTRONIC SIGNATURE (21 CFR PART 11)</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-emerald-800 bg-white px-1.5 py-0.5 rounded border border-[#14532D]/20">
                          SEALED
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px] text-slate-700">
                        <div>
                          Signer: <strong className="text-slate-900">{selectedDoc.signedBy}</strong>
                        </div>
                        <div>
                          Intent: <strong className="text-[#14532D]">{selectedDoc.meaning}</strong>
                        </div>
                        <div className="font-mono text-[10px] text-slate-500">
                          Time: {selectedDoc.signedTime}
                        </div>
                        <div className="font-mono text-[10px] text-slate-500 truncate">
                          Digest: {selectedDoc.sha256.slice(0, 18)}...
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footnote on canvas */}
                  <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>STATUS: RESTRICTED ARCHIVE</span>
                    <span>KENZ WATERMARK SERIAL #042</span>
                  </div>
                </div>

                {/* Right Column: AI Extraction & Governance Inspector */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* AI Multimodal Ingestion Metrics Card */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-[#14532D] to-emerald-900 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-emerald-300" />
                        <span className="font-bold tracking-wide">SMARTIDP MULTIMODAL OCR ENGINE</span>
                      </div>
                      <span className="text-[10px] bg-emerald-800/80 px-2 py-0.5 rounded-full font-mono text-emerald-200">
                        Zero Human Triage
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-center border-t border-emerald-800/60 pt-3">
                      <div>
                        <div className="text-lg sm:text-xl font-extrabold font-mono text-white">340ms</div>
                        <div className="text-[10px] text-emerald-200 font-medium">Ingestion Speed</div>
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-extrabold font-mono text-emerald-300">99.8%</div>
                        <div className="text-[10px] text-emerald-200 font-medium">Mean Confidence</div>
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-extrabold font-mono text-white">100% STP</div>
                        <div className="text-[10px] text-emerald-200 font-medium">Straight-Through</div>
                      </div>
                    </div>
                  </div>

                  {/* Extracted Key-Value Metadata Grid */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <ScanText className="h-3.5 w-3.5 text-[#14532D]" />
                        <span>Extracted Metadata & Classification</span>
                      </h4>
                      <span className="text-[11px] font-mono text-emerald-700 font-semibold">
                        {selectedDoc.fields.length} Fields Verified
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedDoc.fields.map((field, fIdx) => (
                        <div key={fIdx} className="p-3 rounded-xl bg-[#F5F7F5] border border-slate-200 hover:border-slate-300 transition-colors">
                          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                            <span className="font-medium text-[11px]">{field.label}</span>
                            <span className="font-mono text-[10px] font-bold text-[#14532D] bg-[#E8F3EC] px-1.5 py-0.2 rounded">
                              {field.conf}% conf
                            </span>
                          </div>
                          
                          <div className="text-xs font-bold text-slate-900 truncate" title={field.value}>
                            {field.value}
                          </div>

                          {/* Confidence Progress Meter */}
                          <div className="mt-2 w-full bg-slate-200 h-1 rounded-full overflow-hidden">
                            <div 
                              className="bg-[#14532D] h-full rounded-full transition-all duration-500" 
                              style={{ width: `${field.conf}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Governance & Compliance Enforcement Summary */}
                  <div className="p-4 rounded-2xl bg-[#F5F7F5] border border-slate-200 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#14532D] flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-[#14532D]" />
                      <span>Automated Governance Rules Enforced</span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" />
                        <span><strong>Single Effective Copy Policy:</strong> Obsolete versions withdrawn from enterprise searches.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" />
                        <span><strong>Watermarked Controlled Printing:</strong> Dynamic serialization copy-number mapped to user session.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" />
                        <span><strong>Zero Data Retention (ZDR):</strong> Customer training data strictly excluded from third-party foundation models.</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      onClick={handleVerifyHash}
                      disabled={isVerifying}
                      className="w-full sm:w-1/2 py-3 rounded-xl bg-[#E8F3EC] hover:bg-[#d5ebd9] text-[#14532D] text-xs font-bold border border-[#14532D]/30 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                    >
                      {isVerifying ? (
                        <>
                          <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                          <span>Checking SHA-256...</span>
                        </>
                      ) : verifySuccess ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-700" />
                          <span>Digest Validated 100%</span>
                        </>
                      ) : (
                        <>
                          <Fingerprint className="h-3.5 w-3.5" />
                          <span>Verify SHA-256 Digest</span>
                        </>
                      )}
                    </button>

                    <a
                      href="https://edms.smartidp.ai/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 py-3 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#14532D]/15"
                    >
                      <span>Inspect in Live Demonstration</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Hash verified notification banner */}
                  {verifySuccess && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 flex items-center gap-2 animate-fadeIn">
                      <BadgeCheck className="h-4 w-4 text-emerald-700 shrink-0" />
                      <div>
                        <strong>Cryptographic Verification Passed:</strong> Document SHA-256 matches the original ingest ledger hash. Zero tamper detected.
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* VIEW 2: 21 CFR Part 11 Signature Manifest */}
            {activeTab === 'signature' && (
              <div className="space-y-6 max-w-4xl mx-auto py-2">
                
                {/* Official Compliance Certificate Banner */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-[#14532D] to-slate-900 text-white shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/80 text-emerald-300 text-xs font-semibold border border-emerald-700">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        <span>VALIDATED LEGAL ELECTRONIC SIGNATURE</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold">
                        FDA 21 CFR Part 11 & EU Annex 11 Manifest
                      </h3>
                      <p className="text-xs text-emerald-200">
                        Cryptographically bound to document payload · Two-Component Authentication Challenge Verified
                      </p>
                    </div>

                    <div className="text-right sm:text-right shrink-0">
                      <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-900/60 border border-emerald-500/30 text-emerald-200 block">
                        CERT: {selectedDoc.certId}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Signer Identity & Legal Intent Manifest */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="p-5 rounded-2xl bg-[#F5F7F5] border border-slate-200 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Signatory Identity Credentials
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-500 block text-[11px]">Full Legal Signer Name:</span>
                        <strong className="text-slate-900 text-sm">{selectedDoc.signedBy}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">Organizational Title:</span>
                        <span className="text-slate-800 font-medium">{selectedDoc.signerRole}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">Authentication Protocol:</span>
                        <span className="font-mono text-emerald-800 font-semibold">{selectedDoc.authMethod}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F5F7F5] border border-slate-200 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Manifest Intent & Time Synchronization
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="text-slate-500 block text-[11px]">Regulatory Manifest Meaning:</span>
                        <strong className="text-[#14532D] text-sm">{selectedDoc.meaning}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">NIST Atomic Time Stamp:</span>
                        <span className="font-mono text-slate-900 font-bold">{selectedDoc.signedTime}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[11px]">Legal Enforceability:</span>
                        <span className="text-slate-700 font-medium">Full equivalence to handwritten wet ink per 21 CFR §11.100</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Cryptographic SHA-256 Digest Block */}
                <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-bold text-emerald-400 font-mono flex items-center gap-1.5">
                      <Lock className="h-3.5 w-3.5" />
                      <span>SHA-256 TAMPER-EVIDENT DOCUMENT HASH</span>
                    </span>
                    <button
                      onClick={handleCopyHash}
                      className="text-xs text-emerald-300 hover:text-white flex items-center gap-1 cursor-pointer font-mono"
                    >
                      {copiedHash ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 font-mono text-xs text-emerald-300 break-all border border-slate-800 leading-relaxed">
                    {selectedDoc.sha256}
                  </div>

                  <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Algorithm: RSA-4096 / SHA-256 with PKCS#7</span>
                    <span>WORM Storage Verification: PASS</span>
                  </div>
                </div>

                {/* Interactive Action */}
                <div className="text-center pt-2">
                  <button
                    onClick={onOpenDemoModal}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    <span>Request Technical Validation & 21 CFR Part 11 Accelerator Pack</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

              </div>
            )}

            {/* VIEW 3: Immutable Audit Trail */}
            {activeTab === 'audit' && (
              <div className="space-y-5 max-w-4xl mx-auto py-2">
                
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Append-Only Cryptographic Audit Ledger
                    </h3>
                    <p className="text-slate-500 text-xs">
                      Time-ordered, tamper-evident log records compliant with 21 CFR §11.10(e) & EU Annex 11 §9.
                    </p>
                  </div>
                  <span className="text-xs font-mono bg-[#E8F3EC] text-[#14532D] px-2.5 py-1 rounded-md font-bold border border-[#14532D]/20">
                    UTC Coordinated Standard
                  </span>
                </div>

                {/* Audit Event Timeline */}
                <div className="space-y-3">
                  {selectedDoc.auditLogs.map((log, lIdx) => (
                    <div 
                      key={lIdx} 
                      className="p-4 rounded-2xl bg-[#F5F7F5] border border-slate-200 hover:border-slate-300 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-white border border-slate-200 text-slate-700">
                            {log.event}
                          </span>
                          <span className="font-bold text-slate-900">{log.user}</span>
                        </div>
                        <div className="text-slate-500 text-[11px] flex items-center gap-2 font-mono">
                          <span>Terminal: {log.terminal}</span>
                        </div>
                      </div>

                      <div className="text-left md:text-right font-mono text-[11px] shrink-0">
                        <div className="font-bold text-[#14532D]">{log.time}</div>
                        <div className="text-slate-400 text-[10px] mt-0.5 flex items-center md:justify-end gap-1">
                          <span>{log.hash}</span>
                          <BadgeCheck className="h-3 w-3 text-emerald-600" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Integrity Guarantee Box */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
                  <Lock className="h-5 w-5 text-[#14532D] shrink-0" />
                  <p>
                    <strong>WORM Integrity Architecture:</strong> Every user action generates a cryptographic Merkle tree entry. Audit trail logs cannot be edited, reordered, or deleted by any administrative account.
                  </p>
                </div>

              </div>
            )}

            {/* VIEW 4: Version Control & Redline Diff */}
            {activeTab === 'diff' && (
              <div className="space-y-6 max-w-4xl mx-auto py-2">
                
                <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      Revision Control & Automated Redline Difference Engine
                    </h3>
                    <p className="text-slate-500 text-xs">
                      Enforcing strict major/minor revision gates with side-by-side delta visualization.
                    </p>
                  </div>
                  <span className="text-xs font-mono bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md font-bold">
                    Comparing {selectedDoc.versions[0]?.ver} vs {selectedDoc.versions[1]?.ver}
                  </span>
                </div>

                {/* Version History Matrix Table */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                  <table className="w-full text-left text-xs font-sans">
                    <thead className="bg-[#F5F7F5] text-slate-600 border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-semibold">Version</th>
                        <th className="py-3 px-4 font-semibold">Lifecycle Status</th>
                        <th className="py-3 px-4 font-semibold">Effective Date</th>
                        <th className="py-3 px-4 font-semibold">Author / Approver</th>
                        <th className="py-3 px-4 font-semibold hidden sm:table-cell">Change Summary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {selectedDoc.versions.map((ver, vIdx) => (
                        <tr key={vIdx} className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold font-mono text-[#14532D]">{ver.ver}</td>
                          <td className="py-3 px-4">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              ver.status.includes('Effective') || ver.status.includes('Authorized') || ver.status.includes('Locked')
                                ? 'bg-[#E8F3EC] text-[#14532D]'
                                : 'bg-slate-100 text-slate-500'
                            }`}>
                              {ver.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-mono text-slate-600">{ver.date}</td>
                          <td className="py-3 px-4 font-medium text-slate-700">{ver.user}</td>
                          <td className="py-3 px-4 text-slate-500 text-[11px] hidden sm:table-cell">{ver.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Redline Text Diff Comparison */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <GitBranch className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>Visual Redline Delta Highlights</span>
                  </h4>

                  <div className="space-y-3">
                    {selectedDoc.diffs.map((diff, dIdx) => (
                      <div key={dIdx} className="p-4 rounded-2xl bg-[#F5F7F5] border border-slate-200 space-y-2 text-xs">
                        <div className="font-bold text-slate-900 text-xs">
                          {diff.section}
                        </div>

                        {/* Deleted Text */}
                        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-900">
                          <div className="text-[10px] uppercase font-bold text-rose-600 font-mono mb-1">
                            [-] Superseded Wording ({selectedDoc.versions[1]?.ver || 'Prior Rev'})
                          </div>
                          <p className="line-through opacity-80 leading-relaxed font-mono text-[11px]">
                            {diff.oldText}
                          </p>
                        </div>

                        {/* Added/Effective Text */}
                        <div className="p-3 rounded-xl bg-[#E8F3EC] border border-[#14532D]/30 text-emerald-950">
                          <div className="text-[10px] uppercase font-bold text-[#14532D] font-mono mb-1">
                            [+] Effective Adopted Text ({selectedDoc.versions[0]?.ver || 'Current Rev'})
                          </div>
                          <p className="font-semibold leading-relaxed font-mono text-[11px]">
                            {diff.newText}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Bottom Console Ribbon */}
          <div className="px-6 py-4 bg-[#F5F7F5] border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-slate-600 text-center sm:text-left">
              Want to test SmartiDP EDMS with your organization's custom document templates or schemas?
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenDemoModal}
                className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-semibold border border-slate-300 transition-all cursor-pointer shadow-2xs"
              >
                Request Custom Trial
              </button>
              <a
                href="https://edms.smartidp.ai/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white font-semibold transition-all cursor-pointer shadow-xs inline-flex items-center gap-1.5"
              >
                <span>Launch Client Portal</span>
                <ExternalLink className="h-3.5 w-3.5 text-white/80" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
