import React, { useState } from 'react'
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
  Headphones
} from 'lucide-react'

const REGULATED_INDUSTRIES = [
  {
    id: 'pharma',
    name: 'Pharmaceuticals & Biotechnology',
    icon: FlaskConical,
    regulations: '21 CFR Part 11 · EU GMP Annex 11 · GAMP 5',
    highlight: 'Turnkey Validation Accelerator with pre-packaged IQ/OQ/PQ execution evidence.',
    useCases: [
      'Standard Operating Procedure (SOP) Change Control Lifecycles',
      'Electronic Batch Records (EBR) & Line Clearance Attestations',
      'Deviation, OOS Investigation & CAPA Incident Escalation',
      'Mandatory Read-and-Acknowledge Attestation Tracking'
    ]
  },
  {
    id: 'meddev',
    name: 'Medical Devices & Diagnostics',
    icon: Stethoscope,
    regulations: 'FDA QMSR · ISO 13485:2016 · EU MDR 2017/745',
    highlight: 'Complete Design History File (DHF) and Device Master Record (DMR) traceability.',
    useCases: [
      'Design History Files (DHF) & Verification Protocol Sign-Off',
      'Device Master Records (DMR) & Manufacturing Work Instructions',
      'ISO 14971 Risk Management Files & FMEA Matrix Traceability',
      'Post-Market Surveillance, Complaint Handling & MDR/Vigilance'
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinical Trials',
    icon: HeartPulse,
    regulations: 'ICH-GCP E6(R2) · HIPAA · FDA 21 CFR Part 312',
    highlight: 'eTMF electronic Trial Master File with automated DIA Reference Model classification.',
    useCases: [
      'Electronic Trial Master Files (eTMF) across Multi-Site Clinical Trials',
      'Informed Consent Form (ICF) Version Tracking & Patient Verification',
      'Investigator Site Files (ISF) & IRB/IEC Regulatory Correspondence',
      'HIPAA / GDPR Compliant Protected Health Information (PHI) Redaction'
    ]
  },
  {
    id: 'bfsi',
    name: 'Banking, Financial Services & Insurance',
    icon: Landmark,
    regulations: 'SEC Rule 17a-4 · FINRA · SOX §404 · ISO 9001',
    highlight: 'WORM non-rewritable, non-erasable electronic storage compliance with instant legal hold.',
    useCases: [
      'Know-Your-Customer (KYC) & Customer Due Diligence (CDD) Onboarding',
      'Credit Underwriting & Mortgage Dossier Multi-Party Approvals',
      'SEC 17a-4 Compliant Electronic Broker-Dealer Records Archival',
      'Insurance First-Notice-of-Loss (FNOL) & Claims Processing'
    ]
  },
  {
    id: 'public',
    name: 'Government & Public Sector',
    icon: Shield,
    regulations: 'DOD 5015.02 · ISO 15489 · FedRAMP Aligned',
    highlight: 'Rigorous records schedules, security classification tiers, and public transparency compliance.',
    useCases: [
      'Public Records Request (FOIA) Processing & Automated PII Redaction',
      'Citizen Service Application Digitization & Omnichannel Intake',
      'Legislative Council Policy Enactment & Controlled Promulgation',
      'Defense & Homeland Security Controlled Unclassified Information (CUI)'
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Process Engineering',
    icon: Factory,
    regulations: 'ISO 9001:2015 · IATF 16949 · OSHA §1910',
    highlight: 'Engineering Change Order (ECO) workflows with multi-site CAD and drawing redlining.',
    useCases: [
      'Engineering Change Orders (ECO) & Shop Floor Drawing Revisions',
      'Standard Operating Procedures & Safe Work Method Statements (SWMS)',
      'Supplier Quality Audits & Certificate of Analysis (CoA) Ingestion',
      'Equipment Preventive Maintenance & Calibration Certifications'
    ]
  },
  {
    id: 'legal',
    name: 'Legal & Professional Services',
    icon: Scale,
    regulations: 'ABA Model Rules · GDPR · ISO 27001 Security',
    highlight: 'Strict ethical walls, automated matter categorization, and redline diff comparison.',
    useCases: [
      'Matter File Organization & Electronic Discovery (eDiscovery) Readiness',
      'Contract Lifecycle Management (CLM) from Redlining to e-Signature',
      'Conflict-of-Interest Checks & Information Barrier Governance',
      'Client Billing Record Retention & Certified Document Disposition'
    ]
  },
  {
    id: 'cro',
    name: 'Laboratories & CROs',
    icon: FlaskConical,
    regulations: 'GLP · GCP · ISO/IEC 17025 · 21 CFR Part 11',
    highlight: 'Study protocols, lab notebooks, certificates of analysis, method validation, and Trial Master Files.',
    useCases: [
      'Study Protocols & Method Validation Dossiers',
      'Electronic Lab Notebooks (ELN) & Analytical Data',
      'Certificates of Analysis (CoA) Ingestion & Extraction',
      'Trial Master File (TMF) & GLP Archive Integrity'
    ]
  }
]

const DEPARTMENTAL_SOLUTIONS = [
  {
    id: 'finance',
    department: 'Finance',
    title: 'Accounts payable',
    icon: Receipt,
    benefit: 'Automated 3-Way ERP Matching',
    desc: 'Capture invoices from any channel, extract data, match to POs in ERP and route for approval — reducing manual entry and late-payment risk.',
    points: [
      'Omnichannel capture from email inboxes, scanned paper and EDI streams',
      'AI field and line-item extraction with confidence threshold gating',
      'Automated reconciliation against Purchase Orders and Goods Receipts in ERP',
      'Straight-through approval routing with configurable delegation'
    ]
  },
  {
    id: 'legal',
    department: 'Legal',
    title: 'Contract lifecycle',
    icon: Scale,
    benefit: 'Centralized Obligation Tracking',
    desc: 'Templates, negotiation, approval, e-signature, obligation tracking and renewal alerts in one governed repository.',
    points: [
      'Controlled contract template library with pre-approved fallback clauses',
      'Collaborative in-browser redlining and tracked revision histories',
      '21 CFR Part 11 and eIDAS compliant cryptographic digital signatures',
      'Automated milestone, expiration, and renewal notification alerts'
    ]
  },
  {
    id: 'hr',
    department: 'HR',
    title: 'Digital employee files',
    icon: Users,
    benefit: 'Policy Read-and-Acknowledge',
    desc: 'Onboarding packs, policies with read-and-acknowledge, confidential personnel files and retention by employment status.',
    points: [
      'Confidential personnel dossiers protected by role-based access gates',
      'Automated policy attestation campaigns upon new handbook releases',
      'Pre-configured onboarding packet intake and verification workflows',
      'Event-based retention schedules tied to employee separation dates'
    ]
  },
  {
    id: 'engineering',
    department: 'Engineering',
    title: 'Drawings & specs',
    icon: Cpu,
    benefit: 'Asset-Linked Revision Control',
    desc: 'Revision-controlled drawings, specifications and change orders linked to products and assets.',
    points: [
      'Major and minor revision management for technical CAD and PDF drawings',
      'Engineering Change Order (ECO) review and sign-off workflows',
      'Direct linkage between technical specifications and operational assets',
      'Side-by-side visual and text diff comparison between revisions'
    ]
  },
  {
    id: 'procurement',
    department: 'Procurement',
    title: 'Supplier management',
    icon: Building2,
    benefit: 'Certificate Expiry Alerts',
    desc: 'Supplier qualification documents, certificates with expiry alerts, agreements and audit reports.',
    points: [
      'Supplier qualification dossiers and vendor onboarding intake',
      'Automated expiry alerts for ISO certificates and compliance attestations',
      'Centralized repository for supplier quality agreements and audit reports',
      'Performance rating history and historical compliance audit tracking'
    ]
  },
  {
    id: 'customer-service',
    department: 'Customer service',
    title: 'Correspondence',
    icon: Headphones,
    benefit: 'Automated CRM Routing',
    desc: 'Inbound mail and email classified and routed to the right team, linked to customer records in CRM.',
    points: [
      'Automated scanning and classification of inbound mail and digital inquiries',
      'Metadata indexing and direct association with CRM customer profiles',
      'Rule-based routing to appropriate departmental resolution queues',
      'Full lifecycle tracking ensuring responsive SLA adherence'
    ]
  },
  {
    id: 'corporate',
    department: 'Corporate',
    title: 'Policies & governance',
    icon: ShieldCheck,
    benefit: 'Controlled Attestation Campaigns',
    desc: 'Board papers, policies and procedures with controlled publication and attestation campaigns.',
    points: [
      'Controlled publishing workflows with mandatory executive approvals',
      'Enterprise-wide attestation campaigns with real-time completion tracking',
      'Automatic withdrawal and superseding of obsolete corporate directives',
      'Confidential board paper collation and secure distribution'
    ]
  },
  {
    id: 'it',
    department: 'IT',
    title: 'Knowledge & ISMS evidence',
    icon: Layers,
    benefit: 'ISO 27001 Evidence Readiness',
    desc: 'Runbooks, architecture records and ISO 27001 evidence maintained with ownership and review cycles.',
    points: [
      'Technical runbooks and IT system architecture documentation governance',
      'ISO 27001, SOC 2, and security control audit evidence collection',
      'Scheduled periodic review cycles with designated document owners',
      'Version-locked change documentation with complete historical trails'
    ]
  },
  {
    id: 'records-office',
    department: 'Records office',
    title: 'Digitisation',
    icon: Archive,
    benefit: 'Back-File Scanning & PDF/A',
    desc: 'Back-file scanning projects converting paper archives into searchable, retention-managed digital records.',
    points: [
      'High-throughput bulk intake and automated indexing of legacy records',
      'Full-text OCR conversion producing searchable, preserved PDF/A files',
      'Application of ISO 15489 policy retention rules upon ingestion',
      'Defensible disposition workflows with cryptographic destruction records'
    ]
  }
]

export default function SolutionsPage({ onOpenDemoModal }) {
  const [filterMode, setFilterMode] = useState('all')

  return (
    <div className="bg-white">
      {/* 1. Page Hero & Filter Section */}
      <section className="py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-4 shadow-2xs">
              <Building2 className="h-3.5 w-3.5" />
              <span>ENTERPRISE SOLUTIONS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              Tailored for Regulated Sectors & Mission-Critical Operations
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              SmartiDP EDMS delivers pre-configured compliance packages, metadata taxonomies, and approval lifecycles built specifically for high-stakes industries.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-[#14532D] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-[#F0FDF4] border border-slate-200'
              }`}
            >
              All Solutions (12 Modules)
            </button>
            <button
              onClick={() => setFilterMode('regulated')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterMode === 'regulated'
                  ? 'bg-[#14532D] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-[#F0FDF4] border border-slate-200'
              }`}
            >
              Regulated Life Sciences & GxP (8 Industries)
            </button>
            <button
              onClick={() => setFilterMode('departmental')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filterMode === 'departmental'
                  ? 'bg-[#14532D] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-[#F0FDF4] border border-slate-200'
              }`}
            >
              Cross-Industry Departments (4 Modules)
            </button>
          </div>
        </div>
      </section>

      {/* 2. Regulated Industries Section */}
      {(filterMode === 'all' || filterMode === 'regulated') && (
        <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-left mb-10 pb-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  Regulated Life Sciences & GxP Industries
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Engineered with mandatory controls for FDA 21 CFR Part 11, EU Annex 11, ISO 13485, and HIPAA.
                </p>
              </div>
              <span className="text-xs font-bold font-mono text-[#14532D] bg-[#F0FDF4] px-3 py-1 rounded-full border border-[#14532D]/15 hidden sm:inline-block">
                8 Verticals
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {REGULATED_INDUSTRIES.map((ind) => {
                const Icon = ind.icon
                return (
                  <div
                    key={ind.id}
                    className="p-6 rounded-2xl glass-card-green flex flex-col justify-between group"
                  >
                    <div>
                      <div className="h-11 w-11 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center border border-[#14532D]/20 shadow-2xs mb-4 group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#14532D] transition-colors mb-1 leading-snug">
                        {ind.name}
                      </h3>

                      <div className="text-[10px] font-mono font-bold text-slate-500 mb-3 bg-slate-50 px-2 py-0.5 rounded border border-slate-200/50 inline-block">
                        {ind.regulations}
                      </div>

                      <ul className="space-y-1.5 text-[11px] text-slate-700 border-t border-slate-100 pt-3 mb-4">
                        {ind.useCases.slice(0, 3).map((uc, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D] shrink-0 mt-0.5" />
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-[10px] text-slate-600 italic mb-3 leading-snug">
                        "{ind.highlight}"
                      </p>
                      <button
                        onClick={onOpenDemoModal}
                        className="text-xs font-bold text-[#14532D] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Request Industry Spec</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. Cross-Industry Departmental Modules Section */}
      {(filterMode === 'all' || filterMode === 'departmental') && (
        <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
          <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="text-left mb-10 pb-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  Cross-Industry Use Cases
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Beyond regulated content, SmartiDP EDMS digitises and automates the document-heavy processes found in every organisation.
                </p>
              </div>
              <span className="text-xs font-bold font-mono text-[#14532D] bg-[#F0FDF4] px-3 py-1 rounded-full border border-[#14532D]/15 hidden sm:inline-block">
                9 Use Cases
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DEPARTMENTAL_SOLUTIONS.map((dept) => {
                const Icon = dept.icon
                return (
                  <div
                    key={dept.id}
                    className="p-8 rounded-3xl glass-card-green flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-12 w-12 rounded-2xl bg-white text-[#14532D] flex items-center justify-center border border-slate-200 shadow-2xs group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[#14532D] transition-colors">{dept.title}</h3>
                          <span className="text-xs text-[#14532D] font-semibold">{dept.benefit}</span>
                        </div>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-700 pt-2 mb-6">
                        {dept.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 font-mono">Turnkey Deployment</span>
                      <button
                        onClick={onOpenDemoModal}
                        className="text-xs font-bold text-[#14532D] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Schedule Departmental Demo</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. Bottom Custom Workflow CTA Section (Standardized Green Pill Banner) */}
      <PageCtaBanner
        onOpenDemoModal={onOpenDemoModal}
        badge="Tailored Enterprise Architecture"
        title="Need a Custom Regulatory Package or Workflow?"
        description="SmartiDP EDMS supports visual no-code configuration, custom metadata schemas, and multi-tier approval policies tailored to your compliance mandates."
        primaryBtnText="Request a Demo"
        secondaryBtnText="Contact Solutions Team"
        secondaryLink="/contact"
      />
    </div>
  )
}
