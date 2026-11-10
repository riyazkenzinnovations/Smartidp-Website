import React, { useState } from 'react'
import {
  ScanText,
  FileCheck2,
  GitBranch,
  FileSignature,
  FileSpreadsheet,
  Search,
  Lock,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  Eye,
  FileBadge,
  Sparkles,
  Cpu
} from 'lucide-react'

const CAPABILITY_DOMAINS = [
  {
    id: 'capture',
    title: 'Intelligent Capture & OCR',
    badge: 'SmartIDP Neural Core',
    icon: ScanText,
    summary: 'Ingest content from scanners, email, mobile, and APIs. Multi-modal AI enhances, classifies, and extracts structured data with confidence scores.',
    highlights: [
      'Omnichannel ingestion (MFP scanners, watched folders, APIs)',
      'Automated de-skew, noise clean-up, and multilingual OCR',
      'AI document classification & multi-document batch splitting',
      'Human-in-the-loop validation station for low-confidence fields'
    ]
  },
  {
    id: 'versioning',
    title: 'Document & Version Control',
    badge: 'Single Source of Truth',
    icon: FileCheck2,
    summary: 'Enforce strict revision governance. Users always see the current effective version while obsolete copies are automatically archived.',
    highlights: [
      'Major and minor versioning with mandatory check-in/out locks',
      'Side-by-side redline diff comparison across revisions',
      'Pre-configured numbering schemes and metadata taxonomy',
      'Multi-site variants and linked multilingual master documents'
    ]
  },
  {
    id: 'workflow',
    title: 'Visual Workflow Automation',
    badge: 'BPMN 2.0 Engine',
    icon: GitBranch,
    summary: 'A visual, no-code workflow designer lets business owners model complex reviews, approvals, and escalations with strict segregation of duties.',
    highlights: [
      'Drag-and-drop modeling with serial, parallel, and conditional routing',
      'Segregation of duties preventing authors from approving own work',
      'Due dates, automated reminders, delegation, and SLA escalations',
      'Pre-built templates for SOP change control, CAPA, and contracts'
    ]
  },
  {
    id: 'signatures',
    title: 'Electronic Signatures',
    badge: '21 CFR Part 11 & eIDAS',
    icon: FileSignature,
    summary: 'Legally binding digital signatures complying with FDA 21 CFR Part 11, EU Annex 11, eIDAS, ESIGN Act, and UETA regulations.',
    highlights: [
      'Two-component credential re-authentication at moment of signing',
      'Explicitly displayed signature meaning (Approval, Review, Authorship)',
      'Cryptographic SHA-256 binding to the exact signed version',
      'Optional PKI infrastructure and Qualified Electronic Signatures (QES)'
    ]
  },
  {
    id: 'distribution',
    title: 'Controlled Distribution & Watermarking',
    badge: 'Information Governance',
    icon: FileBadge,
    summary: 'Ensure employees read and understand critical procedures with tracked read-and-acknowledge attestations and copy-controlled printing.',
    highlights: [
      'Automated training and attestation campaigns upon SOP publication',
      'Dynamic watermarks displaying user name, timestamp, and status',
      'Controlled printing with unique copy numbering and recall logs',
      'Expiring, password-protected external links with download restrictions'
    ]
  },
  {
    id: 'records',
    title: 'Records Management & Retention',
    badge: 'ISO 15489 Aligned',
    icon: FileSpreadsheet,
    summary: 'Policy-driven retention schedules, litigation legal holds, and certified defensible destruction with permanent audit certificates.',
    highlights: [
      'Formal record declaration with immediate immutability lock',
      'Event-triggered and time-based retention schedule automation',
      'Legal hold freezing disposition across active investigations',
      'Multi-tier disposition approval and certified destruction reports'
    ]
  },
  {
    id: 'search',
    title: 'Enterprise & Semantic Search',
    badge: 'AI-Assisted Discovery',
    icon: Search,
    summary: 'Instantaneous discovery across millions of documents. Search by metadata, full text, or natural-language semantic meaning with security trimming.',
    highlights: [
      'Permission-trimmed search results respecting user role access',
      'In-browser universal viewer for 100+ formats with annotations',
      'Faceted filtering by document type, date, site, and author',
      'Saved search queries and automated alerts for new matching files'
    ]
  },
  {
    id: 'security',
    title: 'Zero-Trust Security & Audit Trail',
    badge: 'ALCOA+ Data Integrity',
    icon: Lock,
    summary: 'Concentric defense-in-depth protection. Append-only, tamper-evident audit trails guarantee complete accountability for every single action.',
    highlights: [
      'Append-only, hash-chained audit service recording user & UTC time',
      'Zero-trust access with SAML 2.0 / OIDC SSO, MFA, and SCIM',
      'AES-256 encryption at rest, TLS 1.2+ in transit, customer-managed keys',
      'Data Loss Prevention (DLP) and automated PII redaction'
    ]
  }
]

export default function KeyFeatures({ onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState(CAPABILITY_DOMAINS[0].id)

  return (
    <section id="features" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-3">
            <Cpu className="h-3.5 w-3.5" />
            <span>Platform Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight">
            Eight Integrated Capability Domains
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            SmartiDP EDMS brings capture, lifecycle control, process automation, and compliance governance together on a shared, enterprise-grade architecture.
          </p>
        </div>

        {/* 8 Features Grid in Glassmorphic Faded Green Cards */}
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
                    <div className="h-11 w-11 rounded-xl bg-white border border-[#14532D]/15 text-[#14532D] flex items-center justify-center shadow-xs group-hover:bg-[#14532D] group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white text-[#14532D] border border-[#14532D]/15">
                      {domain.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#14532D] mb-2 leading-snug">
                    {domain.title}
                  </h3>

                  <p className="text-xs text-slate-700 leading-relaxed mb-4">
                    {domain.summary}
                  </p>

                  <ul className="space-y-1.5 text-[11px] text-slate-600 border-t border-[#14532D]/10 pt-3">
                    {domain.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-[#14532D]/10 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono">Module Active</span>
                  <button
                    onClick={onOpenDemoModal}
                    className="text-xs font-semibold text-[#14532D] hover:text-[#064E3B] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

