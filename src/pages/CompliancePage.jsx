import React, { useState } from 'react'
import PageCtaBanner from '../components/PageCtaBanner'
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
  Award
} from 'lucide-react'

const STATUTORY_CONTROLS = [
  {
    requirement: 'Secure, time-stamped audit trails',
    reference: 'Part 11 §11.10(e) · Annex 11 §9',
    control: 'Append-only, hash-chained audit service records user, UTC time, action, old/new values and reason for change. No user can edit or delete entries.'
  },
  {
    requirement: 'Electronic signatures',
    reference: 'Part 11 §11.50–11.200 · eIDAS Art. 25–26',
    control: 'Two-component re-authentication, displayed signature meaning, cryptographic binding to the exact signed version; optional PKI and qualified signatures.'
  },
  {
    requirement: 'System validation',
    reference: 'Part 11 §11.10(a) · Annex 11 §4 · GAMP 5',
    control: 'Validation accelerator: URS templates, risk assessment, traceability matrix, IQ/OQ evidence and release impact notes.'
  },
  {
    requirement: 'Access control',
    reference: 'Part 11 §11.10(d,g) · ISO 27001 A.5.15 · HIPAA §164.312(a)',
    control: 'SSO + MFA, RBAC/ABAC, server-side authorisation of every action, automatic session timeout.'
  },
  {
    requirement: 'Document control',
    reference: 'ISO 9001 §7.5 · ISO 13485 §4.2.4',
    control: 'Review and approval before release, revision status, obsolete-version withdrawal, external document register.'
  },
  {
    requirement: 'Records retention & disposition',
    reference: 'ISO 15489 §8.6, §9.9 · GDPR Art. 5(1)(e)',
    control: 'Retention schedules, legal hold, multi-level disposition approval and destruction certificates.'
  },
  {
    requirement: 'Data integrity (ALCOA+)',
    reference: 'FDA, MHRA, PIC/S guidance',
    control: 'Attributable actions, server timestamps, preserved originals, hash verification, complete version history.'
  },
  {
    requirement: 'Data-subject rights',
    reference: 'GDPR Art. 15–20',
    control: 'DSAR workflow to find, collate, redact, export or erase personal data — respecting legal holds.'
  },
  {
    requirement: 'Security of processing',
    reference: 'GDPR Art. 32 · SOC 2 CC6 · NIST SC-8/28',
    control: 'Encryption in transit and at rest, monitoring, resilience and regular independent testing.'
  },
  {
    requirement: 'Backup & continuity',
    reference: 'Annex 11 §7, §16 · ISO 27001 A.8.13',
    control: 'Encrypted, geo-redundant backups, tested restores and documented disaster-recovery plans.'
  }
]

export default function CompliancePage({ onOpenDemoModal }) {
  const [filterQuery, setFilterQuery] = useState('')

  const filteredControls = STATUTORY_CONTROLS.filter(c =>
    c.requirement.toLowerCase().includes(filterQuery.toLowerCase()) ||
    c.reference.toLowerCase().includes(filterQuery.toLowerCase()) ||
    c.control.toLowerCase().includes(filterQuery.toLowerCase())
  )

  return (
    <div className="bg-white">
      {/* 1. Page Hero & Supported Standards Section */}
      <section className="py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-4 shadow-2xs">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>GLOBAL STANDARDS</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              Engineered for 12+ Global Regulatory Frameworks
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              SmartiDP EDMS provides pre-validated, technical compliance controls mapping directly to FDA, EMA, ISO, GDPR, and HIPAA mandates.
            </p>
          </div>

          {/* Certified Framework Badges */}
          <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 text-center shadow-xs">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">
              Supported Regulatory Certifications & Standards
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
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
                  className="px-4 py-2 rounded-xl bg-white border border-[#14532D]/20 text-[#14532D] text-xs sm:text-sm font-semibold shadow-2xs"
                >
                  {reg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Searchable Regulatory Control Matrix Section */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Regulatory Requirement vs. Technical Control Matrix
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-2 leading-relaxed">
                Specific platform features addressing strict statutory mandates
              </p>
            </div>

            {/* Filter Search */}
            <div className="relative w-full sm:w-80">
              <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter by regulation or control..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#14532D]"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-[#F0FDF4] text-[#14532D] font-bold uppercase tracking-wider text-xs sm:text-sm border-b border-[#14532D]/20">
                <tr>
                  <th className="py-4 px-6 w-1/4">Regulatory Requirement</th>
                  <th className="py-4 px-6 w-1/4">Statutory Reference</th>
                  <th className="py-4 px-6 w-1/2">SmartiDP EDMS Platform Control</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {filteredControls.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-5 px-6 font-bold text-slate-900 align-top text-sm sm:text-base">
                      {row.requirement}
                    </td>
                    <td className="py-5 px-6 font-mono text-xs sm:text-sm text-[#14532D] font-semibold align-top">
                      {row.reference}
                    </td>
                    <td className="py-5 px-6 text-slate-700 leading-relaxed align-top text-sm sm:text-base">
                      {row.control}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Validation Accelerator Pack Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#14532D] text-xs font-semibold border border-slate-200 shadow-2xs">
                  <Award className="h-3.5 w-3.5" />
                  <span>GxP Acceleration</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                  SmartiDP GxP Validation Accelerator Pack
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Pre-configured industry templates, standard taxonomy libraries and migration tooling reduce time-to-value by up to 50% for regulated deployments.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 pt-2">
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
                <span className="text-4xl font-semibold text-[#14532D] font-mono block">50%</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider block mt-1">
                  Faster Time-to-Value
                </span>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 mb-4 leading-relaxed">
                  Pre-configured accelerators reduce deployment time-to-value by up to 50% across validated environments.
                </p>
                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-2.5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-emerald-950/20 hover:shadow-lg cursor-pointer"
                >
                  Request Validation Sample
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Regulatory Disclaimer */}
      <section className="py-10 bg-slate-50 border-t border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-sm text-slate-700 leading-relaxed shadow-xs">
            <p>
              <strong className="text-slate-900">Regulatory Disclaimer:</strong> Compliance with regulations is a shared responsibility; the SmartiDP EDMS platform provides technical controls, validation packages, and immutable audit trails, while customer organizations maintain standard operating procedures, role training, configuration governance, and performance qualification.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Standardized Green CTA Banner */}
      <PageCtaBanner
        onOpenDemoModal={onOpenDemoModal}
        badge="GxP & Regulatory Framework"
        title="Ensure Continuous Inspection Readiness"
        description="Schedule a technical compliance session with our regulatory affairs specialists to review validation accelerators and CSV documentation."
        primaryBtnText="Request a Demo"
        secondaryBtnText="Contact Solutions Team"
        secondaryLink="/contact"
      />
    </div>
  )
}
