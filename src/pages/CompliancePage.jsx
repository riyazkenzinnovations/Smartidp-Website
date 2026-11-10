import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileSignature,
  Database,
  FileSpreadsheet,
  Key,
  AlertCircle,
  ArrowRight,
  Search,
  Award,
  Sparkles
} from 'lucide-react'

const REGULATORY_CONTROLS = [
  {
    requirement: 'Secure, time-stamped audit trails',
    reference: 'FDA 21 CFR Part 11 §11.10(e) · EU Annex 11 §9',
    control: 'Append-only, SHA-256 hash-chained audit service records user, UTC time, action, previous/new values, and reason for change. No user or administrator can alter or delete entries.'
  },
  {
    requirement: 'Compliant electronic signatures',
    reference: 'Part 11 §11.50–11.200 · eIDAS Art. 25–26 · ESIGN',
    control: 'Two-component credential re-authentication, displayed signature meaning (Approval, Authorship, Review), cryptographic binding to exact signed version; optional PKI and Qualified Electronic Signatures.'
  },
  {
    requirement: 'Automated document control',
    reference: 'ISO 9001 §7.5 · ISO 13485 §4.2.4',
    control: 'Enforces formal review and approval before release, clear revision status numbering, automatic withdrawal of obsolete copies, and external document registration.'
  },
  {
    requirement: 'Granular access control & identity',
    reference: 'Part 11 §11.10(d,g) · ISO 27001 A.5.15 · HIPAA §164.312',
    control: 'SAML 2.0 / OIDC SSO with MFA, SCIM automated provisioning, RBAC/ABAC permissions down to document and field level, and automatic session timeouts.'
  },
  {
    requirement: 'System validation & GAMP 5',
    reference: 'Part 11 §11.10(a) · Annex 11 §4 · GAMP 5 Guidelines',
    control: 'Validation Accelerator provides pre-written User Requirements Specifications (URS), risk assessments, traceability matrices, and IQ/OQ execution evidence.'
  },
  {
    requirement: 'Records retention & defensible disposition',
    reference: 'ISO 15489 §8.6, §9.9 · GDPR Art. 5(1)(e)',
    control: 'Event-driven retention schedules, litigation legal holds freezing disposition, multi-tier authorization for destruction, and permanent certified certificates of disposition.'
  },
  {
    requirement: 'Data integrity (ALCOA+ principles)',
    reference: 'FDA, MHRA, and PIC/S Data Integrity Guidance',
    control: 'Guarantees attributable actions, server-generated timestamps, preserved originals, SHA-256 content hashes, and a complete unalterable history.'
  },
  {
    requirement: 'Data-subject privacy rights & DSAR',
    reference: 'GDPR Articles 15–20 · HIPAA Privacy Rule',
    control: 'Built-in DSAR workflow to locate, collate, redact, export, or erase personal data (PII/PHI) across all content and metadata while respecting active legal holds.'
  },
  {
    requirement: 'Security of processing & encryption',
    reference: 'GDPR Art. 32 · SOC 2 Trust Criteria CC6 · NIST SC-8/28',
    control: 'AES-256 encryption at rest, TLS 1.2+ in transit, automated key rotation with optional customer-managed keys (BYOK), and continuous penetration testing.'
  },
  {
    requirement: 'Backup, disaster recovery & continuity',
    reference: 'EU Annex 11 §7, §16 · ISO 27001 A.8.13',
    control: 'Encrypted, geo-redundant backups across multiple availability zones, quarterly tested restores, and contractual RPO / RTO disaster-recovery commitments.'
  }
]

export default function CompliancePage({ onOpenDemoModal }) {
  const [filterQuery, setFilterQuery] = useState('')

  const filteredControls = REGULATORY_CONTROLS.filter(
    (item) =>
      item.requirement.toLowerCase().includes(filterQuery.toLowerCase()) ||
      item.reference.toLowerCase().includes(filterQuery.toLowerCase()) ||
      item.control.toLowerCase().includes(filterQuery.toLowerCase())
  )

  return (
    <div className="py-12 bg-white">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link to="/" className="hover:text-[#14532D]">Home</Link>
          <span>/</span>
          <span className="text-[#14532D] font-semibold">Regulatory Compliance & Trust</span>
        </nav>

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-4">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>GLOBAL STANDARDS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight leading-tight">
            Engineered for 12+ Global Regulatory Frameworks
          </h1>
          <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            SmartiDP EDMS provides pre-validated, technical compliance controls mapping directly to FDA, EMA, ISO, GDPR, and HIPAA mandates.
          </p>
        </div>

        {/* Certified Framework Badges */}
        <div className="p-8 rounded-3xl bg-[#F5F7F5] border border-slate-200 mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">
            Supported Regulatory Certifications & Standards
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              'FDA 21 CFR Part 11',
              'EU GMP Annex 11',
              'ISO 9001:2015',
              'ISO 13485:2016',
              'ISO/IEC 27001',
              'GDPR & HIPAA',
              'SOC 2 Type II',
              'ISO 15489 Records',
              'ALCOA+ Data Integrity',
              'eIDAS & ESIGN',
              'GAMP 5 Guidelines',
              'ICH Q10 Quality System'
            ].map((reg, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-white border border-[#14532D]/20 text-[#14532D] text-xs font-bold shadow-2xs"
              >
                {reg}
              </span>
            ))}
          </div>
        </div>

        {/* Searchable Regulatory Control Matrix */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14532D]">
                Regulatory Requirement vs. Technical Control Matrix
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                From brochure Page 18: Specific platform features addressing strict statutory mandates
              </p>
            </div>

            {/* Filter Search */}
            <div className="relative w-full sm:w-72">
              <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter by regulation or control..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#F5F7F5] border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#14532D] focus:bg-white"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#E8F3EC] text-[#14532D] font-bold uppercase tracking-wider text-[11px] border-b border-[#14532D]/15">
                <tr>
                  <th className="py-3.5 px-5 w-1/4">Regulatory Requirement</th>
                  <th className="py-3.5 px-5 w-1/4">Statutory Reference</th>
                  <th className="py-3.5 px-5 w-1/2">SmartiDP EDMS Platform Control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {filteredControls.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F5F7F5]/80 transition-colors">
                    <td className="py-4 px-5 font-bold text-slate-900 align-top">
                      {row.requirement}
                    </td>
                    <td className="py-4 px-5 font-mono text-[11px] text-[#14532D] font-semibold align-top">
                      {row.reference}
                    </td>
                    <td className="py-4 px-5 text-slate-700 leading-relaxed align-top">
                      {row.control}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Validation Accelerator Pack */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F5F7F5] border border-slate-200 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#14532D] text-xs font-semibold border border-slate-200">
                <Award className="h-3.5 w-3.5" />
                <span>GxP Acceleration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14532D]">
                SmartiDP GxP Validation Accelerator Pack
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                Computer Software Assurance (CSA) and GAMP 5 validation can take months. SmartiDP EDMS includes pre-written, audit-ready validation documentation that reduces qualification effort by over 70%.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#14532D]" />
                  <span>Pre-written User Requirements Specification (URS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#14532D]" />
                  <span>Functional & Design Specification (FS/DS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#14532D]" />
                  <span>GAMP 5 Risk Assessment & FMEA Matrix</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#14532D]" />
                  <span>Executable IQ / OQ / PQ Protocol Templates</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-4xl font-extrabold text-[#14532D] font-mono block">70%</span>
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mt-1">
                Reduction in Validation Timeline
              </span>
              <p className="text-[11px] text-slate-500 mt-2 mb-4 leading-relaxed">
                Ready to adapt to your organization's Computer System Validation (CSV) standard operating procedures.
              </p>
              <button
                onClick={onOpenDemoModal}
                className="w-full py-2.5 rounded-xl bg-[#14532D] text-white text-xs font-bold hover:bg-[#064E3B] transition-colors cursor-pointer"
              >
                Request Validation Sample
              </button>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer from Brochure Page 20 */}
        <div className="p-5 rounded-2xl bg-[#E8F3EC]/50 border border-[#14532D]/20 text-xs text-slate-700 leading-relaxed mb-20">
          <p>
            <strong>Regulatory Disclaimer:</strong> Compliance with regulations is a shared responsibility; the SmartiDP EDMS platform provides technical controls, validation packages, and immutable audit trails, while customer organizations maintain standard operating procedures, role training, configuration governance, and performance qualification.
          </p>
        </div>

      </div>
    </div>
  )
}
