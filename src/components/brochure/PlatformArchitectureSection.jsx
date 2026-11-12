import React, { useState } from 'react'
import {
  Layers,
  Server,
  Cloud,
  Lock,
  Database,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Sparkles,
  ArrowRight,
  Code2,
  FileCheck2,
  Eye,
  Key
} from 'lucide-react'

const ARCHITECTURE_LAYERS = [
  {
    layer: 'Experience Tier',
    badge: 'Front-End Presentation',
    components: ['Responsive Web Application (React)', 'Native iOS & Android Mobile Apps', 'Microsoft Office & Outlook Add-ins', 'Auditor & Partner Guest Portal', 'Contextual AI Assistant Panel']
  },
  {
    layer: 'API Gateway & Ingestion',
    badge: 'Edge Ingress & Routing',
    components: ['REST / OpenAPI 3.0 Endpoints', 'OAuth 2.0 / OIDC Identity Tokens', 'Intelligent Rate Limiting & Throttling', 'Real-Time Webhooks & Event Bus (Kafka)', 'Reverse Proxy & TLS Offloading']
  },
  {
    layer: 'Application Microservices',
    badge: 'Business Domain Logic',
    components: ['Document Versioning & Checkout Service', 'BPMN 2.0 Visual Workflow Engine', 'Capture & Multi-Modal Ingestion Service', 'Elastic Search & Semantic Indexer', 'ISO 15489 Records & Retention Service', '21 CFR Part 11 Electronic Signature Service', 'Enterprise Notifications & SLA Escalation', 'Regulatory Audit & Operational Reporting']
  },
  {
    layer: 'SmartIDP Neural Intelligence',
    badge: 'Machine Learning Engine',
    components: ['Multi-Lingual OCR & ICR Recognition', 'Zero-Shot & Few-Shot Document Classifier', 'Entity, Key-Value & Tabular Extraction', 'Vector Embedding Semantic Search Models', 'Automated Executive Document Summarizer']
  },
  {
    layer: 'Data & Distributed Storage',
    badge: 'Persistence & Integrity',
    components: ['Relational Metadata Database (PostgreSQL)', 'Distributed Object Storage (S3 / Azure Blob / GCS)', 'Sharded Full-Text Search Cluster', 'Append-Only Cryptographic Audit Log Store', 'Tiered Archival & WORM Storage Vaults']
  },
  {
    layer: 'Infrastructure Tier',
    badge: 'Hosting & Orchestration',
    components: ['Kubernetes (K8s) Container Orchestration', 'Multi-Zone High-Availability Clustering', 'Public Cloud (AWS, Azure, Google Cloud)', 'Dedicated Private VPC Cloud Deployments', 'Air-Gapped On-Premise Enterprise Servers', 'Automated Infrastructure-as-Code (Terraform)']
  }
]

const CROSS_CUTTING_SERVICES = [
  'Identity & access (SAML/SCIM)',
  'Encryption & key management (BYOK)',
  'Immutable hash-chained audit trail',
  'Observability & distributed tracing',
  'Configuration & change control',
  'Automated backup & disaster recovery'
]

const DEPLOYMENT_MODELS = [
  {
    title: 'Multi-Tenant Cloud SaaS',
    icon: Cloud,
    badge: 'Fastest Time-to-Value',
    desc: 'Fully managed, continuously updated cloud solution with regional data residency guarantees, automated high availability, and 99.9% uptime SLA.',
    points: ['Automatic zero-downtime updates', 'Multi-region data residency', 'Pay-as-you-grow licensing model', 'Continuous vulnerability patching']
  },
  {
    title: 'Dedicated Private Cloud',
    icon: Lock,
    badge: 'Single-Tenant Isolation',
    desc: 'Dedicated single-tenant instance deployed directly into your preferred cloud VPC (AWS, Azure, or GCP) with customer-managed encryption keys (BYOK).',
    points: ['Isolated VPC and dedicated database', 'Customer-managed encryption keys', 'Custom maintenance & upgrade windows', 'Dedicated high-speed interconnect']
  },
  {
    title: 'On-Premise / Air-Gapped',
    icon: Server,
    badge: 'Total Sovereignty',
    desc: 'Containerised microservices on Kubernetes deployed within your enterprise data centre for defense, intelligence, or strict on-site data sovereignty.',
    points: ['Zero outbound internet dependencies', 'Compatible with existing SAN storage', 'Air-gapped operation capability', 'Complete on-site compliance control']
  }
]

const OPEN_STANDARDS = [
  'REST / OpenAPI', 'OAuth 2.0 / OIDC', 'SAML 2.0', 'SCIM 2.0', 'CMIS', 'BPMN 2.0', 'PDF/A (ISO 19005)', 'Containers / Kubernetes'
]

export default function PlatformArchitectureSection({ onOpenDemoModal }) {
  return (
    <section id="platform-architecture" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-2">
            Cloud-Native Platform Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Cloud-Native Architecture, Enterprise-Grade by Design
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            A modular, service-oriented architecture separates concerns into independently scalable layers, with security, audit and observability applied consistently across all of them.
          </p>
        </div>

        {/* 6-Layer Architecture Stack Diagram */}
        <div className="mb-16 p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
            <div>
              <span className="text-xs font-bold font-mono text-[#14532D] uppercase tracking-wider">
                Full-Stack Architecture Diagram
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                Six Decoupled Layers with Horizontal Elasticity
              </h3>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-white text-[#14532D] text-xs font-bold border border-[#14532D]/20 shadow-2xs">
              Microservices Architecture
            </span>
          </div>

          <div className="space-y-4">
            {ARCHITECTURE_LAYERS.map((layer, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#14532D]/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="h-7 w-7 rounded-lg bg-[#F0FDF4] text-[#14532D] font-mono font-bold text-xs flex items-center justify-center border border-[#14532D]/20">
                      0{idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900">{layer.layer}</h4>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                    {layer.badge}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pl-0 sm:pl-10">
                  {layer.components.map((comp, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/70 text-slate-700 font-medium"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Cross-Cutting Foundation Bar */}
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#064E3B] via-[#14532D] to-[#0F766E] text-white">
            <div className="text-xs font-mono font-bold text-emerald-200 uppercase tracking-wider mb-2">
              Cross-Cutting Platform Services (Applied Uniformly to All Layers)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-[11px] text-white/95">
              {CROSS_CUTTING_SERVICES.map((srv, sIdx) => (
                <div key={sIdx} className="flex items-center gap-1.5 p-2 rounded-lg bg-white/10">
                  <CheckCircle2 className="h-3 w-3 text-emerald-300 shrink-0" />
                  <span className="truncate">{srv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Flexible Deployment Models */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-1">
              Hosting Flexibility
            </span>
            <h3 className="text-2xl font-semibold text-slate-900">
              Three Flexible Deployment Models
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Choose the delivery model that aligns with your compliance classification and data sovereignty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DEPLOYMENT_MODELS.map((m, idx) => {
              const Icon = m.icon
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl glass-card-green flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center border border-[#14532D]/20 shadow-2xs">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-bold text-[#14532D] bg-white px-2.5 py-0.5 rounded-full border border-[#14532D]/20">
                        {m.badge}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 mb-2">{m.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">{m.desc}</p>

                    <div className="space-y-2 pt-3 border-t border-slate-200">
                      {m.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Open Standards Pill Matrix */}
        <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center">
          <span className="text-xs font-bold text-slate-500 font-mono uppercase tracking-wider block mb-3">
            Open Standards & Interoperability
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {OPEN_STANDARDS.map((std, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-mono font-semibold shadow-2xs"
              >
                {std}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

