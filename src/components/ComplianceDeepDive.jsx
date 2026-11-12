import React, { useState } from 'react'
import { ShieldCheck, CheckCircle2, Lock, FileSignature, Database, FileSpreadsheet, Key, AlertCircle, ArrowRight } from 'lucide-react'

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

export default function ComplianceDeepDive({ onOpenDemoModal }) {
  const [filterQuery, setFilterQuery] = useState('')

  const filteredControls = REGULATORY_CONTROLS.filter(
    (item) =>
      item.requirement.toLowerCase().includes(filterQuery.toLowerCase()) ||
      item.reference.toLowerCase().includes(filterQuery.toLowerCase()) ||
      item.control.toLowerCase().includes(filterQuery.toLowerCase())
  )

  return (
    <section id="compliance" className="py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Regulatory Deep-Dive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
            Key Regulatory Requirements, Built-In Controls
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            SmartiDP EDMS is engineered so compliance is an inherent property of the software architecture — not an afterthought or manual procedure.
          </p>
        </div>

        {/* Regulatory Matrix Table */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden mb-12">
          <div className="p-6 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#14532D] transition-colors">Compliance Requirements to Technical Control Mapping</h3>
              <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">Clause-by-clause implementation highlights from the SmartiDP EDMS Compliance Framework</p>
            </div>

            <div className="w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search regulations (e.g. Part 11, ISO, GDPR)..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                className="w-full sm:w-80 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#14532D]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-[#F0FDF4] text-[#14532D] border-b border-[#14532D]/20 font-bold uppercase tracking-wider text-xs sm:text-sm">
                <tr>
                  <th className="py-4 px-6 w-1/4">Regulatory Requirement</th>
                  <th className="py-4 px-6 w-1/4">Standards Reference</th>
                  <th className="py-4 px-6 w-1/2">Platform Technical Control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {filteredControls.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#F0FDF4]/50 transition-colors">
                    <td className="py-5 px-6 font-bold text-slate-900 align-top text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#14532D] shrink-0" />
                        <span>{item.requirement}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 align-top">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-[#14532D] bg-[#F0FDF4] px-2.5 py-1 rounded border border-[#14532D]/15 inline-block">
                        {item.reference}
                      </span>
                    </td>
                    <td className="py-5 px-6 leading-relaxed text-slate-700 align-top text-sm sm:text-base">
                      {item.control}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Shared Responsibility Disclaimer Box from Brochure Page 16 */}
        <div className="p-6 rounded-2xl glass-card-green flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-700">
          <div className="space-y-1">
            <div className="font-bold text-[#14532D] flex items-center gap-1.5 text-base">
              <ShieldCheck className="h-4 w-4" />
              <span>Compliance Shared Responsibility Model:</span>
            </div>
            <p>
              SmartiDP EDMS provides technical controls, validation packages, and immutable audit trails. Customers maintain standard operating procedures, role qualifications, configuration governance, and performance qualification (PQ).
            </p>
          </div>
          <button
            onClick={onOpenDemoModal}
            className="shrink-0 px-6 py-2.5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white font-bold text-sm transition-all shadow-md shadow-emerald-950/20 hover:shadow-lg cursor-pointer inline-flex items-center gap-2 group"
          >
            <span>Request Full Compliance Pack</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

