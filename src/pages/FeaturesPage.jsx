import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InteractiveWorkbench from '../components/InteractiveWorkbench'
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
    title: 'Enterprise Semantic Search',
    badge: 'Neural Discovery',
    icon: Search,
    summary: 'Locate information in seconds across millions of pages. Natural language search queries both text and metadata with strict security trimming.',
    specs: [
      { name: 'Full-Text Deep OCR', desc: 'Indexes scanned images, CAD metadata, PDF renditions, and Office files.' },
      { name: 'Faceted Filters', desc: 'Filter by document type, author, approval date, plant site, and revision.' },
      { name: 'Permission-Trimmed Results', desc: 'Users only see documents they are explicitly authorized to view.' },
      { name: 'Saved Queries & Alerts', desc: 'Subscribe to search alerts when new relevant SOPs or contracts are published.' }
    ]
  },
  {
    id: 'security',
    title: 'Zero-Trust Security & Audit Trail',
    badge: 'Cryptographic Proof',
    icon: ShieldCheck,
    summary: 'Enterprise-grade protection with append-only immutable audit logging, AES-256 encryption at rest, TLS 1.2+ in transit, and role-based access control.',
    specs: [
      { name: 'Hash-Chained Audit Trail', desc: 'Every action logged with UTC timestamp, user ID, IP, and SHA-256 hash.' },
      { name: 'SAML 2.0 / OIDC SSO', desc: 'Seamless integration with Microsoft Entra ID, Okta, Ping, and Active Directory.' },
      { name: 'SCIM User Provisioning', desc: 'Automated user onboarding, role synchronization, and instant de-provisioning.' },
      { name: 'Zero Data Retention (ZDR)', desc: 'Optional AI mode ensuring sensitive document data is never cached or stored.' }
    ]
  }
]

export default function FeaturesPage({ onOpenDemoModal }) {
  const [selectedDomainId, setSelectedDomainId] = useState('capture')
  const activeDomain = CAPABILITY_DOMAINS.find(d => d.id === selectedDomainId) || CAPABILITY_DOMAINS[0]
  const ActiveIcon = activeDomain.icon

  return (
    <>
      <div className="py-12 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link to="/" className="hover:text-[#14532D]">Home</Link>
          <span>/</span>
          <span className="text-[#14532D] font-semibold">Features & Capabilities</span>
        </nav>

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-4">
            <Layers className="h-3.5 w-3.5" />
            <span>ENTERPRISE ARCHITECTURE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight leading-tight">
            Eight Integrated Capability Domains
          </h1>
          <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            SmartiDP EDMS brings together every foundational capability needed to capture, govern, automate, and protect enterprise records throughout their complete lifecycle.
          </p>
        </div>

        {/* Interactive Capability Explorer */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#F5F7F5] border border-slate-200 mb-20 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-[#14532D]">
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
                      ? 'bg-[#14532D] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-[#E8F3EC] hover:text-[#14532D] border border-slate-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{domain.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Domain Detail Card */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-[#E8F3EC] text-[#14532D] flex items-center justify-center border border-[#14532D]/20">
                  <ActiveIcon className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#E8F3EC] text-[#14532D] border border-[#14532D]/15">
                    {activeDomain.badge}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#14532D] mt-1">{activeDomain.title}</h3>
                </div>
              </div>
              <button
                onClick={onOpenDemoModal}
                className="px-5 py-2.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white text-xs font-bold shadow-sm transition-all cursor-pointer self-start sm:self-auto"
              >
                Request Live Demonstration
              </button>
            </div>

            <p className="text-sm text-slate-700 my-6 leading-relaxed">
              {activeDomain.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {activeDomain.specs.map((spec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F5F7F5] border border-slate-200/80">
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

        {/* 8 Capability Cards Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#14532D]">
              Full Capability Specifications
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Brochure documented technical features across all eight functional modules
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITY_DOMAINS.map((domain) => {
              const Icon = domain.icon
              return (
                <div
                  key={domain.id}
                  className="p-6 rounded-2xl glass-card-green flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-10 w-10 rounded-xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/15 shadow-2xs">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-bold text-[#14532D] bg-white px-2 py-0.5 rounded border border-[#14532D]/15">
                        {domain.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#14532D] mb-2">{domain.title}</h3>
                    <p className="text-xs text-slate-700 leading-relaxed mb-4">{domain.summary}</p>
                  </div>

                  <div className="pt-3 border-t border-[#14532D]/10">
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

      </div>
    </div>

    {/* Platform Workbench Simulator */}
    <InteractiveWorkbench onOpenDemoModal={onOpenDemoModal} />

    <div className="py-16 bg-white">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Bottom CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#14532D] text-white text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Ready to See SmartiDP EDMS in Action?
          </h2>
          <p className="text-emerald-100 text-sm max-w-xl mx-auto leading-relaxed">
            Our solution architects can demo any of these 8 capability domains using your organization's sample document types.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenDemoModal}
              className="px-8 py-3.5 rounded-xl bg-white text-[#14532D] font-bold text-sm shadow-md hover:bg-[#E8F3EC] transition-all cursor-pointer"
            >
              Request a Technical Deep-Dive
            </button>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
