import React from 'react'
import {
  ShieldCheck,
  Lock,
  Key,
  Eye,
  FileCheck2,
  AlertTriangle,
  Server,
  Cloud,
  CheckCircle2,
  Layers,
  ArrowRight,
  Shield,
  Activity,
  FileText
} from 'lucide-react'

const DEFENSE_LAYERS = [
  {
    ring: 'Outer Ring: Network & Edge',
    tech: 'WAF · DDoS Mitigation · VPC Network Segmentation',
    desc: 'Shields endpoints from distributed denial-of-service, automated credential stuffing, and malicious scraping before requests touch application servers.'
  },
  {
    ring: 'Second Ring: Identity & Access',
    tech: 'Enterprise SSO · MFA · RBAC / ABAC Permissions',
    desc: 'Enforces SAML 2.0 / OIDC single sign-on, compulsory multi-factor challenges, and granular attribute-based permissions down to specific document metadata fields.'
  },
  {
    ring: 'Third Ring: Application Security',
    tech: 'Secure SDLC · SAST/DAST · Penetration Tested',
    desc: 'Rigorous secure code lifecycle, automated continuous dependency scanning, and annual independent third-party penetration audits.'
  },
  {
    ring: 'Core Ring: Data Protection',
    tech: 'AES-256 · TLS 1.3 · Dynamic DLP · BYOK Support',
    desc: 'Uncompromising encryption for data in transit and at rest, classification-aware watermarks, download lockouts, and customer-managed encryption keys.'
  }
]

const SECURITY_CAPABILITIES = [
  {
    icon: Lock,
    title: 'Identity & Access Management',
    desc: 'SAML 2.0 / OIDC SSO, MFA, automated SCIM provisioning, and role- and attribute-based permissions to the document level.'
  },
  {
    icon: Key,
    title: 'Dual-Layer Encryption',
    desc: 'AES-256 at rest, TLS 1.2+ / 1.3 in transit, managed keys with automated rotation and optional customer-managed keys (BYOK).'
  },
  {
    icon: Eye,
    title: 'Data Loss Prevention (DLP)',
    desc: 'Classification-driven dynamic watermarks, download and print restrictions, and expiring, audit-tracked sharing links.'
  },
  {
    icon: AlertTriangle,
    title: 'Threat Detection & Anomaly Alerts',
    desc: 'Automated malware scanning on every upload, behavioral anomaly alerts, and real-time SIEM log streaming.'
  },
  {
    icon: FileCheck2,
    title: 'Cryptographic Content Integrity',
    desc: 'SHA-256 content hashing and tamper-evident, append-only hash-chained audit trails satisfying ALCOA+ standards.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Engineering & Testing',
    desc: 'Formal code review, automated SAST/DAST pipelines, dependency vulnerability scanning, and independent pen testing.'
  }
]

const GOVERNANCE_PILLARS = [
  {
    title: 'Privacy by Design',
    desc: 'Automated PII detection, reversible redaction, purpose-bound retention, data-subject access workflows, and regional data residency.'
  },
  {
    title: 'Privileged Access Control',
    desc: 'Just-in-time admin elevation with dual authorization; administrators cannot silently read sensitive content or alter audit logs.'
  },
  {
    title: 'Forensic Resilience',
    desc: 'Immutable, encrypted backups with scheduled non-disruptive restore validation and documented disaster recovery runbooks.'
  }
]

const SEC_OPS = [
  { badge: '24/7', title: 'Security Monitoring', desc: 'Round-the-clock SOC monitoring, anomaly triage, and automated threat isolation.' },
  { badge: 'Least Privilege', title: 'Zero Implicit Trust', desc: 'Minimal permission boundaries enforced across all users, services, and system daemons.' },
  { badge: 'Tested', title: 'Third-Party Audits', desc: 'Regular independent penetration testing and automated vulnerability management.' },
  { badge: 'Logged', title: 'SIEM Streaming', desc: 'Every authentication and file touch streamed in real time to your corporate SIEM.' }
]

export default function ZeroTrustSecuritySection({ onOpenDemoModal }) {
  return (
    <section id="zero-trust-security" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-2">
            Zero-Trust Security & Defence in Depth
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Zero-Trust Security, Defence in Depth
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Every request is authenticated, authorised and logged. Multiple concentric layers of protection safeguard your content — from the network edge to the individual document.
          </p>
        </div>

        {/* 4 Concentric Defense Rings Diagram */}
        <div className="mb-16 p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-1">
              Concentric Rings of Defense
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Four Interlocking Security Perimeters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DEFENSE_LAYERS.map((layer, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#14532D]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#14532D] block mb-1">
                    LAYER 0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{layer.ring}</h4>
                  <div className="text-[10px] font-mono text-emerald-800 bg-[#F0FDF4] px-2 py-0.5 rounded inline-block mb-3 border border-[#14532D]/15">
                    {layer.tech}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Core Capabilities Grid */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              Enterprise Security Controls
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Engineered to meet the stringent technical criteria of life sciences, healthcare, banking, and defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon
              return (
                <div key={i} className="p-6 rounded-2xl glass-card-green flex flex-col justify-between group">
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/20 shadow-2xs group-hover:bg-[#14532D] group-hover:text-white transition-colors mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#14532D] transition-colors">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Governance & Privacy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {GOVERNANCE_PILLARS.map((gov, gIdx) => (
            <div key={gIdx} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#14532D]" />
                <span>{gov.title}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {gov.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Security Operations Tenets Bar */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Security Operations & SOC Guarantees
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Always-On Protection and Accountability
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold font-mono border border-emerald-500/30">
              SOC 2 Type II · ISO 27001
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SEC_OPS.map((op, oIdx) => (
              <div key={oIdx} className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700">
                <span className="font-mono text-xs font-extrabold text-emerald-400 block mb-1">
                  {op.badge}
                </span>
                <div className="text-sm font-bold text-white mb-1">{op.title}</div>
                <div className="text-slate-300 text-[11px] leading-tight">{op.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

