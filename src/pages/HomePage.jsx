import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import InteractiveWorkbench from '../components/InteractiveWorkbench'
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  ScanText,
  FileCheck2,
  GitBranch,
  FileSignature,
  FileSpreadsheet,
  Search,
  Lock,
  Building2,
  FlaskConical,
  Stethoscope,
  TrendingUp,
  Clock,
  DollarSign
} from 'lucide-react'

export default function HomePage({ onOpenDemoModal, onOpenVideoModal }) {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero 
        onOpenDemoModal={onOpenDemoModal} 
        onOpenVideoModal={onOpenVideoModal} 
      />

      {/* 2. Executive Value Proposition Banner */}
      <section className="py-16 bg-[#F5F7F5] border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F3EC] text-[#14532D] text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>The Case for Change</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#14532D] tracking-tight leading-tight">
                From Document Chaos to Governed Information Flow
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Information is your enterprise's most valuable asset. SmartiDP EDMS by Kenz Innovations replaces scattered file shares, unmanaged email approvals, and manual data re-keying with a single unified, intelligent, and compliance-ready repository.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#14532D] hover:text-[#064E3B] group"
                >
                  <span>Explore the Operational Transformation</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all">
                <div className="h-10 w-10 rounded-xl bg-[#E8F3EC] text-[#14532D] flex items-center justify-center font-bold mb-3">
                  01
                </div>
                <h3 className="text-base font-bold text-[#14532D] mb-1">Unified Repository</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consolidate departmental silos into one governed storage backbone with granular RBAC permissions.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all">
                <div className="h-10 w-10 rounded-xl bg-[#E8F3EC] text-[#14532D] flex items-center justify-center font-bold mb-3">
                  02
                </div>
                <h3 className="text-base font-bold text-[#14532D] mb-1">AI-Powered Capture</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deep neural OCR, layout analysis, automated classification, and structured extraction in under 340ms.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all">
                <div className="h-10 w-10 rounded-xl bg-[#E8F3EC] text-[#14532D] flex items-center justify-center font-bold mb-3">
                  03
                </div>
                <h3 className="text-base font-bold text-[#14532D] mb-1">BPMN 2.0 Workflows</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Visual parallel reviews, strict segregation of duties, and two-component 21 CFR Part 11 e-signatures.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-sm transition-all">
                <div className="h-10 w-10 rounded-xl bg-[#E8F3EC] text-[#14532D] flex items-center justify-center font-bold mb-3">
                  04
                </div>
                <h3 className="text-base font-bold text-[#14532D] mb-1">Continuous Audit-Ready</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cryptographic SHA-256 hash-chained audit trails guarantee complete ALCOA+ data integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capability Domains Overview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F3EC] text-[#14532D] text-xs font-semibold mb-3">
                <Layers className="h-3.5 w-3.5" />
                <span>Integrated Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] tracking-tight">
                Eight Foundational Capability Domains
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-xl">
                Built natively into one cohesive architecture from ingestion to permanent disposition.
              </p>
            </div>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white text-xs font-semibold shadow-sm transition-all self-start md:self-auto"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ScanText,
                title: 'Intelligent Capture',
                desc: 'Multi-modal OCR, noise cleaning, classification, and validation stations.'
              },
              {
                icon: FileCheck2,
                title: 'Version Control',
                desc: 'Major/minor versioning, check-in/out locks, and side-by-side redline diffs.'
              },
              {
                icon: GitBranch,
                title: 'Workflow Automation',
                desc: 'Visual no-code BPMN 2.0 designer with SLA escalations and reminders.'
              },
              {
                icon: FileSignature,
                title: 'Electronic Signatures',
                desc: 'Compliant with FDA 21 CFR Part 11, EU Annex 11, and eIDAS standards.'
              },
              {
                icon: Lock,
                title: 'Controlled Distribution',
                desc: 'Dynamic watermarks with user identity, copy serialization, and print quotas.'
              },
              {
                icon: FileSpreadsheet,
                title: 'Records Retention',
                desc: 'ISO 15489 policy-driven retention schedules and certified defensible destruction.'
              },
              {
                icon: Search,
                title: 'Semantic Search',
                desc: 'Full-text OCR search, natural language queries, and metadata filters.'
              },
              {
                icon: ShieldCheck,
                title: 'Zero-Trust Security',
                desc: 'Append-only SHA-256 audit logging, AES-256 encryption, and SAML 2.0 SSO.'
              }
            ].map((f, i) => {
              const Icon = f.icon
              return (
                <div key={i} className="p-6 rounded-2xl glass-card-green hover:shadow-md transition-all">
                  <div className="h-10 w-10 rounded-xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/15 shadow-xs mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#14532D] mb-2">{f.title}</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Interactive Platform Workbench Simulator */}
      <InteractiveWorkbench onOpenDemoModal={onOpenDemoModal} />

      {/* 5. Industry Solutions Preview */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F3EC] text-[#14532D] text-xs font-semibold mb-3">
                <Building2 className="h-3.5 w-3.5" />
                <span>Sector Solutions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14532D] tracking-tight">
                Engineered for High-Stakes Industries
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-xl">
                Pre-configured regulatory packages and departmental workflows tailored for compliance.
              </p>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white text-xs font-semibold shadow-sm transition-all self-start md:self-auto"
            >
              <span>View All 8 Industry Modules</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#F5F7F5] border border-slate-200 hover:border-[#14532D]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="h-11 w-11 rounded-xl bg-white text-[#14532D] border border-slate-200 flex items-center justify-center mb-4">
                  <FlaskConical className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#14532D] mb-1">Pharmaceuticals & Biotech</h3>
                <span className="text-[10px] font-bold text-slate-500 font-mono block mb-3">
                  21 CFR PART 11 · EU ANNEX 11 · GAMP 5
                </span>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Turnkey SOP lifecycle, electronic batch records (EBR), deviation tracking, and GxP role training curricula.
                </p>
              </div>
              <Link to="/solutions" className="text-xs font-bold text-[#14532D] hover:underline flex items-center gap-1">
                <span>View Life Sciences Spec</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="p-7 rounded-3xl bg-[#F5F7F5] border border-slate-200 hover:border-[#14532D]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="h-11 w-11 rounded-xl bg-white text-[#14532D] border border-slate-200 flex items-center justify-center mb-4">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#14532D] mb-1">Medical Devices</h3>
                <span className="text-[10px] font-bold text-slate-500 font-mono block mb-3">
                  ISO 13485 · FDA QMSR · EU MDR
                </span>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Design History Files (DHF), Device Master Records (DMR), ISO 14971 risk management, and CAPA workflows.
                </p>
              </div>
              <Link to="/solutions" className="text-xs font-bold text-[#14532D] hover:underline flex items-center gap-1">
                <span>View Medical Device Spec</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="p-7 rounded-3xl bg-[#F5F7F5] border border-slate-200 hover:border-[#14532D]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="h-11 w-11 rounded-xl bg-white text-[#14532D] border border-slate-200 flex items-center justify-center mb-4">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#14532D] mb-1">Banking & BFSI</h3>
                <span className="text-[10px] font-bold text-slate-500 font-mono block mb-3">
                  SOX · ISO 27001 · PCI-DSS · AML
                </span>
                <p className="text-xs text-slate-700 leading-relaxed mb-4">
                  Automated customer onboarding dossiers, KYC document extraction, loan underwriting, and immutable audit logs.
                </p>
              </div>
              <Link to="/solutions" className="text-xs font-bold text-[#14532D] hover:underline flex items-center gap-1">
                <span>View Financial Services Spec</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. High-Impact CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-[#14532D] to-[#064E3B] text-white">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold backdrop-blur-md border border-white/20">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Schedule an Architecture & Compliance Walkthrough</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold max-w-3xl mx-auto tracking-tight leading-tight">
            Ready to Experience SmartiDP EDMS Live on Your Enterprise Content?
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discover how automated document capture, 21 CFR Part 11 electronic signatures, and immutable audit trails protect your enterprise and eliminate manual overhead.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#14532D] hover:bg-[#E8F3EC] font-bold text-sm shadow-xl transition-all cursor-pointer"
            >
              Request a Personalised Demo
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 text-white font-semibold text-sm border border-emerald-700/50 transition-all text-center"
            >
              Contact Solutions Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
