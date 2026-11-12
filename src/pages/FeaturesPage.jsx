import React, { useState } from 'react'
import InteractiveWorkbench from '../components/InteractiveWorkbench'
import RequestDemoButton from '../components/RequestDemoButton'
import PageCtaBanner from '../components/PageCtaBanner'
import {
  ScanText,
  FileCheck2,
  GitBranch,
  FileSignature,
  FileSpreadsheet,
  Search,
  Lock,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Sliders
} from 'lucide-react'

const CAPABILITY_DOMAINS = [
  {
    id: 'capture',
    title: 'Intelligent Capture & OCR',
    badge: 'Neural Ingestion',
    icon: ScanText,
    summary: 'Omnichannel content ingestion from network scanners, email, mobile, and APIs. Multi-modal AI enhances, classifies, and extracts structured data with confidence scores.',
    specs: [
      { name: 'Multi-Modal Layout Analysis', desc: 'Identifies headers, tables, key-value pairs, barcodes, and stamps.' },
      { name: 'Pre-Processing Cleanup', desc: 'Automated de-skew, contrast normalization, and speckle removal.' },
      { name: 'Multilingual OCR & ICR', desc: 'Recognizes machine-printed text and hand-printed handwriting across 50+ languages.' },
      { name: 'Validation Station', desc: 'Human-in-the-loop review station for fields falling below confidence thresholds.' }
    ]
  },
  {
    id: 'versioning',
    title: 'Document & Version Control',
    badge: 'Single Source of Truth',
    icon: FileCheck2,
    summary: 'Enforce strict revision governance. Users always see the current effective version while obsolete copies are automatically archived.',
    specs: [
      { name: 'Major & Minor Versioning', desc: 'Strict draft (0.x) vs. effective (1.0, 2.0) status transitions.' },
      { name: 'Check-In / Check-Out Locks', desc: 'Prevents concurrent conflicting edits with mandatory revision notes.' },
      { name: 'Redline Comparison', desc: 'Side-by-side text and visual diff highlight added, deleted, or altered clauses.' },
      { name: 'Multisite Master Documents', desc: 'Linked multilingual and plant-specific variants inherit parent change orders.' }
    ]
  },
  {
    id: 'workflow',
    title: 'Visual Workflow Automation',
    badge: 'BPMN 2.0 Engine',
    icon: GitBranch,
    summary: 'A visual, no-code workflow designer lets business owners model complex reviews, approvals, and escalations with strict segregation of duties.',
    specs: [
      { name: 'Drag-and-Drop Designer', desc: 'Serial, parallel, consensus, and conditional approval branches.' },
      { name: 'Segregation of Duties', desc: 'Enforces policy preventing document authors from approving their own releases.' },
      { name: 'SLA Tracking & Reminders', desc: 'Automated email alerts, escalation pathways, and dynamic out-of-office delegation.' },
      { name: 'GxP Templates Included', desc: 'Pre-built workflows for SOP change control, deviation reports, and CAPA.' }
    ]
  },
  {
    id: 'signatures',
    title: 'Electronic Signatures',
    badge: '21 CFR Part 11 & eIDAS',
    icon: FileSignature,
    summary: 'Fully compliant digital and electronic signatures. Cryptographically binds signer identity, date/time in UTC, and legal manifestation of intent to the document.',
    specs: [
      { name: 'Two-Component Authentication', desc: 'Re-entry of password or biometric credential prior to executing signature.' },
      { name: 'Declared Signature Meanings', desc: 'Review, Authorship, Approval, Technical Verification, or Release.' },
      { name: 'Cryptographic SHA-256 Binding', desc: 'Tamper-evident seal invalidates signature if document bytes are altered.' },
      { name: 'eIDAS & ESIGN Support', desc: 'Advanced and Qualified Electronic Signatures (QES) compatible with PKI.' }
    ]
  },
  {
    id: 'distribution',
    title: 'Controlled Distribution & Printing',
    badge: 'Leak Prevention',
    icon: Lock,
    summary: 'Eliminate uncontrolled copies and paper leaks. Dynamic on-demand watermarking embeds user identity, copy numbers, and timestamp upon view or print.',
    specs: [
      { name: 'Dynamic Watermarking', desc: 'Overlays user name, IP address, purpose, and date across every page.' },
      { name: 'Controlled Copy Numbering', desc: 'Each physical print generates a unique serialized copy tracked in audit log.' },
      { name: 'Expiration & Recall', desc: 'Mark documents superseded to automatically revoke read links across portals.' },
      { name: 'Print Quotas & Permissions', desc: 'Restrict printing capability to certified document controllers only.' }
    ]
  },
  {
    id: 'retention',
    title: 'Records Management & Retention',
    badge: 'ISO 15489 Standard',
    icon: FileSpreadsheet,
    summary: 'Automate content lifecycles from active creation to permanent archival or certified destruction in compliance with ISO 15489 and GDPR principles.',
    specs: [
      { name: 'Policy-Driven Retention', desc: 'Event-triggered and time-based schedules (e.g. 10 years post-batch release).' },
      { name: 'Legal & Litigation Holds', desc: 'One-click litigation freeze overrides standard disposal schedules.' },
      { name: 'Defensible Disposition', desc: 'Two-tier sign-off for destruction with permanent tamper-proof certificates.' },
      { name: 'PDF/A Archival Renditions', desc: 'Automated background conversion to ISO-standard PDF/A for long-term survival.' }
    ]
  },
  {
    id: 'search',
    title: 'Enterprise & Semantic Search',
    badge: 'Sub-Second Discovery',
    icon: Search,
    summary: 'Instantaneous discovery across millions of documents. Search by metadata, full text, or natural-language semantic meaning with security trimming.',
    specs: [
      { name: 'Security-Trimmed Indexing', desc: 'Users only see search results for documents their permissions grant.' },
      { name: 'Universal In-Browser Viewer', desc: 'High-speed streaming viewer for 100+ formats without local app install.' },
      { name: 'Parametric & Faceted Filters', desc: 'Drill down by document type, author, site, effective date, and metadata tags.' },
      { name: 'Natural Language Queries', desc: 'Semantic understanding matches intent, synonyms, and conceptual context.' }
    ]
  },
  {
    id: 'security',
    title: 'Zero-Trust Security & Audit Trail',
    badge: 'ALCOA+ Forensic Integrity',
    icon: ShieldCheck,
    summary: 'Defense-in-depth protection. Append-only, tamper-evident audit trails guarantee complete forensic accountability for every view, edit, or approval.',
    specs: [
      { name: 'Append-Only Hash-Chained Logs', desc: 'Every user action cryptographically chained and timestamped in UTC.' },
      { name: 'Enterprise SSO & SCIM', desc: 'SAML 2.0 / OIDC integrations with automated user provisioning and de-provisioning.' },
      { name: 'Dual-Layer Encryption', desc: 'AES-256 at rest, TLS 1.3 in flight, with optional Customer-Managed Keys (BYOK).' },
      { name: 'Fine-Grained Permissions (RBAC/ABAC)', desc: 'Control permissions down to document metadata fields and lifecycle states.' }
    ]
  }
]

export default function FeaturesPage({ onOpenDemoModal }) {
  const [selectedDomainId, setSelectedDomainId] = useState('capture')
  const activeDomain = CAPABILITY_DOMAINS.find(d => d.id === selectedDomainId) || CAPABILITY_DOMAINS[0]
  const ActiveIcon = activeDomain.icon

  return (
    <div className="bg-white">
      {/* 1. Page Hero Section */}
      <section className="py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-4 shadow-2xs">
              <Layers className="h-3.5 w-3.5 text-[#14532D]" />
              <span>ENTERPRISE ARCHITECTURE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              Eight Integrated Capability Domains
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              SmartiDP EDMS brings together every foundational capability needed to capture, govern, automate, and protect enterprise records throughout their complete lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Capability Explorer Section */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="text-2xl font-semibold text-slate-900">
                Interactive Capability Explorer
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Select any domain below to inspect its architecture, compliance capabilities, and technical controls.
              </p>
            </div>

            {/* Domain Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
              {CAPABILITY_DOMAINS.map((domain) => {
                const Icon = domain.icon
                const isSelected = domain.id === selectedDomainId
                return (
                  <button
                    key={domain.id}
                    onClick={() => setSelectedDomainId(domain.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#14532D] text-white shadow-sm'
                        : 'bg-slate-50 text-slate-700 hover:bg-[#F0FDF4] hover:text-[#14532D] border border-slate-200'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{domain.title}</span>
                  </button>
                )
              })}
            </div>

            {/* Active Domain Detail Card */}
            <div className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/20 shadow-2xs">
                    <ActiveIcon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white text-[#14532D] border border-[#14532D]/20">
                      {activeDomain.badge}
                    </span>
                    <h3 className="text-2xl font-semibold text-slate-900 mt-1">{activeDomain.title}</h3>
                  </div>
                </div>
                <RequestDemoButton
                  onClick={onOpenDemoModal}
                  size="sm"
                />
              </div>

              <p className="text-sm text-slate-700 my-6 leading-relaxed">
                {activeDomain.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {activeDomain.specs.map((spec, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="h-4 w-4 text-[#14532D]" />
                      <h4 className="text-xs font-bold text-slate-900">{spec.name}</h4>
                    </div>
                    <p className="text-[11px] text-slate-600 pl-6 leading-relaxed">{spec.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Full Capability Specifications Grid Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-semibold text-slate-900">
              Full Capability Specifications
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Documented technical features across all eight functional modules
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITY_DOMAINS.map((domain) => {
              const Icon = domain.icon
              return (
                <div
                  key={domain.id}
                  className="p-6 rounded-2xl glass-card-green flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded-xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/20 shadow-2xs group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold text-[#14532D] bg-white px-2 py-0.5 rounded border border-[#14532D]/20">
                        {domain.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#14532D] transition-colors mb-2">{domain.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{domain.summary}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <button
                      onClick={() => setSelectedDomainId(domain.id)}
                      className="text-xs font-bold text-[#14532D] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Specifications</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Platform Workbench Simulator */}
      <InteractiveWorkbench onOpenDemoModal={onOpenDemoModal} />

      {/* 5. Bottom CTA Banner Section (Standardized Green Pill Banner) */}
      <PageCtaBanner
        onOpenDemoModal={onOpenDemoModal}
        badge="Enterprise Platform Demonstration"
        title="Ready to See SmartiDP EDMS in Action?"
        description="Our solution architects can demo any of these 8 capability domains using your organization's sample document types."
        primaryBtnText="Request a Demo"
        secondaryBtnText="Contact Solutions Team"
        secondaryLink="/contact"
      />
    </div>
  )
}
