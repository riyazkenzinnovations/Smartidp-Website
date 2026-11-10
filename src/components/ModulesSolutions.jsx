import React, { useState } from 'react'
import {
  Building2,
  Stethoscope,
  Briefcase,
  ShieldCheck,
  Truck,
  Landmark,
  Scale,
  FlaskConical,
  Receipt,
  Users,
  FileCode2,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const REGULATED_INDUSTRIES = [
  {
    id: 'pharma',
    name: 'Pharmaceuticals & Biotech',
    icon: FlaskConical,
    regulations: '21 CFR Part 11 · EU Annex 11 · GAMP 5 · ICH Q10 · ALCOA+',
    useCases: [
      'Standard Operating Procedures (SOPs) & Change Control',
      'Electronic Batch Records (EBR) & Deviation Logging',
      'Equipment Validation Protocols (IQ / OQ / PQ)',
      'Regulatory Submissions (eCTD) & CMC Dossiers',
      'Personnel GxP Training Records & Role Curricula'
    ],
    highlight: 'Pre-validated URS templates, risk assessment, and IQ/OQ/PQ execution evidence included.'
  },
  {
    id: 'meddev',
    name: 'Medical Devices',
    icon: Stethoscope,
    regulations: 'ISO 13485 · FDA QMSR · EU MDR / IVDR · ISO 14971',
    useCases: [
      'Design History Files (DHF) & Device Master Records (DMR)',
      'Technical Documentation & CE Mark Submission Packages',
      'ISO 14971 Risk Management Files & FMEA Matrix',
      'Corrective & Preventive Action (CAPA) Workflows',
      'Supplier Quality Agreements & Audit Certificates'
    ],
    highlight: 'Traceability matrix linking design inputs, outputs, verification tests, and change orders.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinical',
    icon: ShieldCheck,
    regulations: 'HIPAA · GDPR · ISO 27001 · National Health-Data Acts',
    useCases: [
      'Electronic Patient Records & Medical Charts',
      'Informed Consent Forms & Treatment Authorizations',
      'Clinical Governance Policies & Hospital Protocols',
      'Accreditation Evidence Packages (JCI / National Bodies)',
      'Physician Credentialing & License Expiry Tracking'
    ],
    highlight: 'Zero Data Retention (ZDR) mode and automated PII/PHI redaction safeguards sensitive health records.'
  },
  {
    id: 'bfsi',
    name: 'Banking & Financial Services',
    icon: Landmark,
    regulations: 'SOC 2 · ISO 27001 · GDPR · FINRA / AML Recordkeeping',
    useCases: [
      'Digital Customer Onboarding & KYC / AML Evidence Files',
      'Commercial & Mortgage Loan Documentation Packs',
      'Underwriting Policies, Risk Files & Regulatory Disclosures',
      'Board & Committee Papers with Restricted Executive Access',
      'Insurance Claim Adjuster Files & Settlement Records'
    ],
    highlight: 'WORM storage compatibility and unalterable hash-chained audit trails ensure institutional trust.'
  },
  {
    id: 'govt',
    name: 'Government & Public Sector',
    icon: Building2,
    regulations: 'ISO 15489 · ISO 16175 · NIST SP 800-53 · Data Sovereignty',
    useCases: [
      'Citizen Case Files, Applications & Permitting',
      'Official Inbound & Outbound Ministerial Correspondence',
      'Procurement Tender Documents & Supplier Contracts',
      'Public Records Archival & Declassification Schedules',
      'Freedom of Information (FOI / DSAR) Request Collation'
    ],
    highlight: 'On-premise air-gapped deployment option meets highest national security and sovereignty criteria.'
  },
  {
    id: 'mfg',
    name: 'Manufacturing & Energy',
    icon: Truck,
    regulations: 'ISO 9001 · ISO 14001 · ISO 45001 · IATF 16949',
    useCases: [
      'Revision-Controlled CAD Drawings & Engineering Specs',
      'Health, Safety & Environmental (HSE) Incident Reports',
      'Equipment Maintenance Logs & Calibration Certificates',
      'Standard Work Instructions (SWI) with Visual Overlays',
      'Quality Control Inspection Checklists on Plant Floor'
    ],
    highlight: 'Controlled shop-floor printing with watermarking and instant automatic recall of superseded revisions.'
  },
  {
    id: 'legal',
    name: 'Legal & Professional Services',
    icon: Scale,
    regulations: 'GDPR · Legal Hold · eIDAS / ESIGN Act · Confidentiality',
    useCases: [
      'Client Matter Files & Litigation Bundles',
      'Contract Lifecycle Management (CLM) & Negotiation Redlines',
      'Litigation Legal Holds Freezing Destruction Schedules',
      'Precedent Libraries & Knowledge Base Management',
      'Signed Engagements & Billing Retainers'
    ],
    highlight: 'Granular attribute-based access control (ABAC) restricts visibility strictly to designated matter teams.'
  },
  {
    id: 'cro',
    name: 'Laboratories & CROs',
    icon: FlaskConical,
    regulations: 'GLP · GCP · ISO/IEC 17025 · 21 CFR Part 11',
    useCases: [
      'Study Protocols & Electronic Lab Notebooks (ELN)',
      'Certificates of Analysis (CoA) & Out-of-Spec (OOS) Logs',
      'Analytical Method Validation Packages',
      'Trial Master Files (TMF) Aligned to DIA Reference Model',
      'Instrument Calibration & Reference Standard Records'
    ],
    highlight: 'ALCOA+ data integrity enforcement ensures results are attributable, legible, contemporaneous, and original.'
  }
]

const DEPARTMENTAL_SOLUTIONS = [
  {
    dept: 'Finance & Accounting',
    title: 'Accounts Payable & Invoice Automation',
    icon: Receipt,
    desc: 'Capture invoices from email, scans, or supplier portals. Extract line items, perform 2-way and 3-way PO reconciliation against ERP, and route for automated approval.',
    tags: ['PO Matching', 'ERP Sync', 'Zero Data Entry']
  },
  {
    dept: 'Legal & Procurement',
    title: 'Contract Lifecycle Management (CLM)',
    icon: Scale,
    desc: 'Centralize standard templates, track negotiation redlines, route for compliant electronic signature, monitor key milestones, and trigger proactive renewal alerts.',
    tags: ['Milestone Alerts', 'E-Signature', 'Obligation Tracking']
  },
  {
    dept: 'Human Resources',
    title: 'Digital Employee Personnel Files',
    icon: Users,
    desc: 'Secure digital personnel dossiers from hire to retire. Automate onboarding checklists, policy read-and-acknowledge attestations, and employment status retention rules.',
    tags: ['Read & Acknowledge', 'Onboarding Packs', 'Retention by Status']
  },
  {
    dept: 'Engineering & R&D',
    title: 'Drawings & Technical Specifications',
    icon: FileCode2,
    desc: 'Manage CAD files, product specifications, and Engineering Change Orders (ECO). Link revisions directly to bill of materials (BOM) and asset records.',
    tags: ['Revision Control', 'Change Orders (ECO)', 'Asset Linkage']
  }
]

export default function ModulesSolutions({ onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState('regulated')
  const [selectedIndustry, setSelectedIndustry] = useState(REGULATED_INDUSTRIES[0])

  return (
    <section id="solutions" className="py-24 bg-[#F5F7F5] border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-3">
            <Building2 className="h-3.5 w-3.5" />
            <span>Enterprise Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight">
            Purpose-Built for Regulated & High-Stakes Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Pre-configured solution templates accelerate deployment with industry-specific document types, approval workflows, metadata schemas, and retention policies.
          </p>

          {/* Toggle Tab */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <button
              onClick={() => setActiveTab('regulated')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'regulated'
                  ? 'bg-[#14532D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#14532D]'
              }`}
            >
              Regulated Industry Solutions (GxP & Compliance)
            </button>
            <button
              onClick={() => setActiveTab('departmental')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'departmental'
                  ? 'bg-[#14532D] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#14532D]'
              }`}
            >
              Cross-Industry Departmental Modules
            </button>
          </div>
        </div>

        {/* View 1: Regulated Industries */}
        {activeTab === 'regulated' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Nav: Industry Selector */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3 px-1">
                Select Your Industry Vertical
              </span>
              {REGULATED_INDUSTRIES.map((ind) => {
                const Icon = ind.icon
                const isSelected = selectedIndustry.id === ind.id
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? 'bg-[#E8F3EC] border-[#14532D]/30 shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-200/80 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${isSelected ? 'bg-[#14532D] text-white' : 'bg-slate-100 text-[#14532D]'}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className={`text-sm font-bold ${isSelected ? 'text-[#14532D]' : 'text-slate-800'}`}>
                          {ind.name}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate max-w-[240px]">
                          {ind.regulations}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className={`h-4 w-4 shrink-0 transition-transform ${isSelected ? 'text-[#14532D] translate-x-1' : 'text-slate-300'}`} />
                  </button>
                )
              })}
            </div>

            {/* Right Card: Selected Industry Deep-Dive */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#14532D]">Solution Template Pack</span>
                  <h3 className="text-2xl font-bold text-[#14532D] mt-0.5">{selectedIndustry.name}</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#E8F3EC] text-[#14532D] text-xs font-bold border border-[#14532D]/15">
                  Turnkey GxP Pack
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-[#F5F7F5] border border-slate-200/60 text-xs text-slate-700">
                <span className="font-semibold text-slate-900">Regulatory Frameworks Covered:</span>{' '}
                <span className="font-mono text-[#14532D] font-bold">{selectedIndustry.regulations}</span>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Document Types & Use Cases Included:
                </h4>
                <div className="space-y-2.5">
                  {selectedIndustry.useCases.map((uc, uIdx) => (
                    <div key={uIdx} className="p-3 rounded-xl bg-white border border-slate-200/70 flex items-center gap-3 text-xs text-slate-800">
                      <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0" />
                      <span className="font-medium">{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[#E8F3EC]/80 border border-[#14532D]/20 text-xs text-slate-700 leading-relaxed">
                <div className="font-bold text-[#14532D] mb-0.5">Validation Accelerator Included:</div>
                {selectedIndustry.highlight}
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Pre-configured numbering schemes, workflows & retention starter packs.
                </div>
                <button
                  onClick={onOpenDemoModal}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  Request Industry Solution Pack
                </button>
              </div>
            </div>
          </div>
        )}

        {/* View 2: Departmental Modules */}
        {activeTab === 'departmental' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEPARTMENTAL_SOLUTIONS.map((dept, dIdx) => {
              const Icon = dept.icon
              return (
                <div
                  key={dIdx}
                  className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#14532D]/30 transition-all shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-xl bg-[#E8F3EC] text-[#14532D] flex items-center justify-center">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {dept.dept}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#14532D] mb-2">{dept.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">{dept.desc}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {dept.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] px-2.5 py-1 rounded-lg bg-[#E8F3EC] text-[#14532D] font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Departmental Scale</span>
                      <button
                        onClick={onOpenDemoModal}
                        className="text-xs font-bold text-[#14532D] hover:text-[#064E3B] flex items-center gap-1 cursor-pointer"
                      >
                        <span>Schedule Process Review</span>
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

