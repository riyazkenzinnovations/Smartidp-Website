import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Building2,
  Stethoscope,
  FlaskConical,
  ShieldCheck,
  Landmark,
  Scale,
  Truck,
  Briefcase,
  Receipt,
  Users,
  FileCode2,
  FileText,
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
    name: 'Banking, Financial Services & Insurance (BFSI)',
    icon: Landmark,
    regulations: 'SOX · ISO 27001 · PCI-DSS · AML / KYC Regulations',
    useCases: [
      'Customer Onboarding & KYC / AML Document Extraction',
      'Commercial Lending & Mortgage Loan File Dossiers',
      'Policy Lifecycle, Underwriting & Insurance Claims',
      'Board Resolutions, Governance & Committee Minutes',
      'Regulatory Inquiries, Audits & Defensible Submissions'
    ],
    highlight: 'Automated tabular extraction processes bank statements and tax schedules in seconds.'
  },
  {
    id: 'gov',
    name: 'Government & Public Sector',
    icon: Building2,
    regulations: 'National Archives Acts · ISO 15489 · FOIA · Data Protection',
    useCases: [
      'Citizen Records, Permits & Licensing Dossiers',
      'Inter-Agency Correspondence & Ministerial Briefings',
      'Public Procurement Tender Documents & Award Dossiers',
      'Official Gazettes, Ordinances & Legislative Records',
      'Permanent Archival Management & Access Classification'
    ],
    highlight: 'Role-based security trimming ensures sensitive government records remain classified.'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Energy',
    icon: Truck,
    regulations: 'ISO 9001 · ISO 14001 · ISO 45001 · OSHA Standards',
    useCases: [
      'Plant Operating Manuals & Work Instructions',
      'Material Safety Data Sheets (MSDS / SDS)',
      'Engineering Change Orders (ECO) & CAD Drawings',
      'Equipment Maintenance Logs & Calibration Certificates',
      'Environmental, Health & Safety (EHS) Incident Reports'
    ],
    highlight: 'Version-locked shop-floor distribution prevents operators from following obsolete specs.'
  },
  {
    id: 'legal',
    name: 'Legal & Professional Services',
    icon: Scale,
    regulations: 'Legal Professional Privilege · Bar Standards · SRA · GDPR',
    useCases: [
      'Matter Management & Client Case Files',
      'Contract Drafting, Redlining & Clause Libraries',
      'Litigation Hold Execution & e-Discovery Preservation',
      'Compliance Due Diligence & M&A Data Rooms',
      'Trust & Estate Documentation & Power of Attorney'
    ],
    highlight: 'Full-text semantic search indexes millions of discovery pages with OCR precision.'
  },
  {
    id: 'cros',
    name: 'Clinical Research Organizations (CROs)',
    icon: Briefcase,
    regulations: 'ICH-GCP E6(R2) · FDA 21 CFR Part 312/812 · EU CTR 536/2014',
    useCases: [
      'Trial Master Files (eTMF / DIA Reference Model)',
      'Investigator Site Files (ISF) & Regulatory Binders',
      'Clinical Study Protocols, Amendments & ICFs',
      'Institutional Review Board (IRB) / Ethics Submissions',
      'Blinded vs. Unblinded Access Segregation Controls'
    ],
    highlight: 'Multi-sponsor partition architecture keeps proprietary trial dossiers completely isolated.'
  }
]

const DEPARTMENTAL_SOLUTIONS = [
  {
    id: 'finance-ap',
    title: 'Finance & Accounts Payable (AP)',
    icon: Receipt,
    benefit: 'Eliminate 85% of manual invoice data entry with automated 3-way PO matching',
    points: [
      'Automated multi-page invoice capture from email inboxes and supplier portals',
      'Multi-modal extraction of invoice number, PO number, line items, and VAT breakdown',
      'Automatic 3-way matching against ERP purchase orders and goods receipt notes',
      'ERP bi-directional synchronization with SAP, Oracle NetSuite, and Microsoft Dynamics'
    ]
  },
  {
    id: 'clm',
    title: 'Contract Lifecycle Management (CLM)',
    icon: FileText,
    benefit: 'Shorten contract review cycles from 18 days to 48 hours with version redlines',
    points: [
      'Standardized clause libraries and approved pre-vetted contract templates',
      'Visual redline comparison highlighting altered liabilities, indemnities, or terms',
      'Automated milestone alerts for renewal notice dates, rate expirations, and SLAs',
      'Two-component legally binding electronic signatures compatible with eIDAS and ESIGN'
    ]
  },
  {
    id: 'hr',
    title: 'Human Resources Employee Records',
    icon: Users,
    benefit: 'Centralize employee files while enforcing strict GDPR & privacy access controls',
    points: [
      'Complete digital employee file dossiers from recruitment through exit',
      'Automated expiration tracking for professional licenses, visas, and training certifications',
      'Granular field-level privacy permissions separating medical notes from payroll data',
      'Policy-driven retention schedules that automatically flag records due for disposition'
    ]
  },
  {
    id: 'engineering',
    title: 'Engineering & Technical Drawings',
    icon: FileCode2,
    benefit: 'Prevent costly manufacturing errors caused by using out-of-date drawings',
    points: [
      'Native metadata support for large-format drawings, schematics, and AutoCAD files',
      'Strict Engineering Change Order (ECO) workflows with multi-discipline engineering sign-off',
      'Automated PDF/A rendering of complex drawings for shop-floor tablets and workstations',
      'Controlled distribution watermarking showing active release number and plant location'
    ]
  }
]

export default function SolutionsPage({ onOpenDemoModal }) {
  const [filterMode, setFilterMode] = useState('all')

  return (
    <div className="py-12 bg-white">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link to="/" className="hover:text-[#14532D]">Home</Link>
          <span>/</span>
          <span className="text-[#14532D] font-semibold">Solutions & Industries</span>
        </nav>

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-4">
            <Building2 className="h-3.5 w-3.5" />
            <span>ENTERPRISE SOLUTIONS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight leading-tight">
            Tailored for Regulated Sectors & Mission-Critical Operations
          </h1>
          <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            SmartiDP EDMS delivers pre-configured compliance packages, metadata taxonomies, and approval lifecycles built specifically for high-stakes industries.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filterMode === 'all'
                ? 'bg-[#14532D] text-white shadow-sm'
                : 'bg-[#F5F7F5] text-slate-700 hover:bg-[#E8F3EC] border border-slate-200'
            }`}
          >
            All Solutions (12 Modules)
          </button>
          <button
            onClick={() => setFilterMode('regulated')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filterMode === 'regulated'
                ? 'bg-[#14532D] text-white shadow-sm'
                : 'bg-[#F5F7F5] text-slate-700 hover:bg-[#E8F3EC] border border-slate-200'
            }`}
          >
            Regulated Life Sciences & GxP (8 Industries)
          </button>
          <button
            onClick={() => setFilterMode('departmental')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              filterMode === 'departmental'
                ? 'bg-[#14532D] text-white shadow-sm'
                : 'bg-[#F5F7F5] text-slate-700 hover:bg-[#E8F3EC] border border-slate-200'
            }`}
          >
            Cross-Industry Departments (4 Modules)
          </button>
        </div>

        {/* Regulated Industries Section */}
        {(filterMode === 'all' || filterMode === 'regulated') && (
          <div className="mb-20">
            <div className="text-left mb-8 pb-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-[#14532D]">
                  Regulated Life Sciences & GxP Industries
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Engineered with mandatory controls for FDA 21 CFR Part 11, EU Annex 11, ISO 13485, and HIPAA.
                </p>
              </div>
              <span className="text-xs font-bold font-mono text-[#14532D] bg-[#E8F3EC] px-3 py-1 rounded-full hidden sm:inline-block">
                8 Verticals
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {REGULATED_INDUSTRIES.map((ind) => {
                const Icon = ind.icon
                return (
                  <div
                    key={ind.id}
                    className="p-6 rounded-2xl glass-card-green flex flex-col justify-between hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="h-11 w-11 rounded-xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/15 shadow-2xs mb-4">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="text-base font-bold text-[#14532D] mb-1 leading-snug">
                        {ind.name}
                      </h3>

                      <div className="text-[10px] font-mono font-bold text-slate-500 mb-3 bg-white/70 px-2 py-0.5 rounded border border-slate-200/50 inline-block">
                        {ind.regulations}
                      </div>

                      <ul className="space-y-1.5 text-[11px] text-slate-700 border-t border-[#14532D]/10 pt-3 mb-4">
                        {ind.useCases.slice(0, 3).map((uc, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D] shrink-0 mt-0.5" />
                            <span>{uc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[#14532D]/10">
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
        )}

        {/* Cross-Industry Departmental Modules */}
        {(filterMode === 'all' || filterMode === 'departmental') && (
          <div className="mb-20">
            <div className="text-left mb-8 pb-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-[#14532D]">
                  Cross-Industry Departmental Modules
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Ready-to-deploy automated workflows that eliminate document bottlenecks in every business unit.
                </p>
              </div>
              <span className="text-xs font-bold font-mono text-[#14532D] bg-[#E8F3EC] px-3 py-1 rounded-full hidden sm:inline-block">
                4 Modules
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DEPARTMENTAL_SOLUTIONS.map((dept) => {
                const Icon = dept.icon
                return (
                  <div
                    key={dept.id}
                    className="p-8 rounded-3xl bg-[#F5F7F5] border border-slate-200 hover:border-[#14532D]/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-12 w-12 rounded-2xl bg-white text-[#14532D] flex items-center justify-center border border-slate-200 shadow-2xs">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-[#14532D]">{dept.title}</h3>
                          <span className="text-xs text-emerald-800 font-semibold">{dept.benefit}</span>
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
        )}

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#14532D] text-white text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Need a Custom Regulatory Package or Workflow?
          </h2>
          <p className="text-emerald-100 text-sm max-w-xl mx-auto leading-relaxed">
            SmartiDP EDMS supports visual no-code configuration, custom metadata schemas, and multi-tier approval policies.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenDemoModal}
              className="px-8 py-3.5 rounded-xl bg-white text-[#14532D] font-bold text-sm shadow-md hover:bg-[#E8F3EC] transition-all cursor-pointer"
            >
              Consult with a Solutions Engineer
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
