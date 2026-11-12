import React, { useState } from 'react'
import {
  Laptop,
  Smartphone,
  Mail,
  Share2,
  FileText,
  Server,
  Cloud,
  Lock,
  Database,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  ExternalLink,
  Workflow,
  Cpu
} from 'lucide-react'

const PRODUCTIVITY_CHANNELS = [
  {
    title: 'Microsoft Office 365 & Outlook Add-ins',
    icon: Laptop,
    badge: 'Seamless Desktop Flow',
    desc: 'Work directly within Word, Excel, and PowerPoint. Check documents in and out, view metadata properties in the task pane, compare revisions, and file incoming emails and attachments directly from Outlook with automatic metadata tagging.',
    features: [
      'Native Word, Excel, PowerPoint task-pane panel',
      'One-click check-in, check-out, and version locking',
      'File inbound Outlook emails & attachments directly to folders',
      'Automatic metadata extraction from sender and subject lines'
    ]
  },
  {
    title: 'Native Mobile Apps (iOS & Android)',
    icon: Smartphone,
    badge: 'Executive Approvals on the Go',
    desc: 'Keep critical business processes moving from anywhere. Review controlled documents, execute Part 11 / eIDAS compliant electronic signatures, and capture paper documents in the field using your smartphone camera with automated edge detection and perspective correction.',
    features: [
      'Biometric authentication (FaceID & Fingerprint)',
      'High-resolution document scanning with auto-edge detection',
      'One-tap review, approval, and cryptographic e-signature',
      'Offline access to designated favorite and critical SOPs'
    ]
  },
  {
    title: 'Secure Partner & Auditor Portal',
    icon: Share2,
    badge: 'Controlled External Collaboration',
    desc: 'Safely collaborate with external auditors, suppliers, clinical CROs, and legal counsel without creating unmanaged email attachments or granting excessive internal network access.',
    features: [
      'Role-restricted guest review queues and external upload boxes',
      'Dynamic watermarking with viewer identity and timestamp',
      'Time-limited access links with download restrictions',
      'Complete audit trail logging of all external interactions'
    ]
  }
]

const INTEGRATION_CATEGORIES = [
  {
    category: 'ERP & Core Financials',
    connectors: ['SAP S/4HANA', 'Oracle NetSuite', 'Microsoft Dynamics 365', 'Workday Financials'],
    description: 'Two-way and three-way purchase order reconciliation, GL posting, and master vendor data verification.'
  },
  {
    category: 'CRM & Enterprise Service',
    connectors: ['Salesforce', 'ServiceNow', 'Zendesk Support', 'Microsoft Power Platform'],
    description: 'Link customer service correspondence, insurance claims, and citizen permits directly to CRM records.'
  },
  {
    category: 'Identity & Access Management',
    connectors: ['Microsoft Entra ID (Azure AD)', 'Okta SSO', 'Ping Identity', 'SCIM 2.0 Provisioning'],
    description: 'Zero-trust enterprise authentication with SAML 2.0 / OIDC single sign-on, MFA, and automated user lifecycle.'
  },
  {
    category: 'Cloud Storage & Archival',
    connectors: ['Amazon S3 / Glacier', 'Microsoft Azure Blob', 'Google Cloud Storage', 'WORM Compliant Vaults'],
    description: 'Tiered storage automation moving inactive records to cost-efficient, tamper-evident archival storage.'
  }
]

const ARCHITECTURE_TIERS = [
  {
    tier: 'Experience Tier',
    desc: 'Responsive Web Application · iOS & Android Native · Microsoft 365 & Outlook Add-ins · Partner & Auditor Portal'
  },
  {
    tier: 'API Gateway & Ingestion',
    desc: 'REST / OpenAPI 3.0 · OAuth 2.0 / OIDC · Event Streams & Webhooks · Rate Limiting & Edge WAF Protection'
  },
  {
    tier: 'Application Microservices',
    desc: 'Document Versioning Service · BPMN 2.0 Workflow Engine · E-Signature Service · ISO 15489 Records Service'
  },
  {
    tier: 'SmartIDP Intelligence Engine',
    desc: 'Multilingual OCR / ICR · Spatial Layout Models · Table Reconstruction · Entity Normalization · Semantic Search'
  },
  {
    tier: 'Data & Storage Tier',
    desc: 'Relational Metadata DB · Object Storage · Search Index · Append-Only Immutable Audit Log Store (WORM)'
  },
  {
    tier: 'Cloud & On-Premises Infrastructure',
    desc: 'Kubernetes Container Orchestration · Multi-Zone HA Failover · Geo-Redundant Backups · Infrastructure-as-Code'
  }
]

export default function ProductivityIntegrations({ onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState('productivity') // 'productivity' | 'integrations' | 'architecture'

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-3">
            <Layers className="h-3.5 w-3.5" />
            <span>Connected Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
            Productivity Anywhere & Open Integration
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            SmartiDP EDMS fits naturally into your existing desktop tools, mobile devices, and enterprise technology stack without friction.
          </p>

          {/* Sub-nav toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-slate-50 border border-slate-200">
            <button
              onClick={() => setActiveTab('productivity')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'productivity' ? 'bg-[#14532D] text-white shadow-xs' : 'text-slate-600 hover:text-[#14532D]'
              }`}
            >
              Desktop & Mobile Productivity (Office 365 / Mobile)
            </button>
            <button
              onClick={() => setActiveTab('integrations')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'integrations' ? 'bg-[#14532D] text-white shadow-xs' : 'text-slate-600 hover:text-[#14532D]'
              }`}
            >
              Enterprise Connectors (ERP / CRM / Cloud)
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'architecture' ? 'bg-[#14532D] text-white shadow-xs' : 'text-slate-600 hover:text-[#14532D]'
              }`}
            >
              Platform Architecture Tiers
            </button>
          </div>
        </div>

        {/* View 1: Desktop & Mobile Productivity (Brochure Page 10) */}
        {activeTab === 'productivity' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTIVITY_CHANNELS.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl glass-card-green flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-white border border-[#14532D]/20 text-[#14532D] flex items-center justify-center shadow-xs">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white text-[#14532D] border border-[#14532D]/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#14532D] transition-colors mb-3">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">{item.desc}</p>

                    <div className="space-y-2 border-t border-emerald-900/10 pt-4">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-emerald-900/10">
                    <button
                      onClick={onOpenDemoModal}
                      className="text-xs font-bold text-[#14532D] hover:text-[#166534] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Client Add-in</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* View 2: Enterprise Connectors (Brochure Page 11) */}
        {activeTab === 'integrations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INTEGRATION_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl glass-card-green flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#14532D] transition-colors mb-2">{cat.category}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">{cat.description}</p>

                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {cat.connectors.map((conn, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs"
                      >
                        {conn}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">Standards: REST · CMIS · Webhooks</span>
                  <button
                    onClick={onOpenDemoModal}
                    className="font-bold text-[#14532D] hover:underline cursor-pointer"
                  >
                    API Documentation →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View 3: Platform Architecture Tiers (Brochure Page 12) */}
        {activeTab === 'architecture' && (
          <div className="max-w-4xl mx-auto space-y-4">
            {ARCHITECTURE_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-card-green flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#14532D]/20"
              >
                <div className="flex items-center gap-4">
                  <span className="h-8 w-8 rounded-xl bg-white text-[#14532D] font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-[#14532D]/20">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#14532D]">{tier.tier}</h4>
                    <p className="text-xs text-slate-700 mt-0.5">{tier.desc}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#14532D] bg-white px-2.5 py-1 rounded-full border border-[#14532D]/20 shrink-0">
                  Containerised Microservice
                </span>
              </div>
            ))}

            <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-600">
              <strong className="text-slate-900">High-Availability Design:</strong> Multi-zone redundancy, geo-redundant backups, horizontal pod autoscaling on Kubernetes, and zero-downtime rolling upgrades.
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

