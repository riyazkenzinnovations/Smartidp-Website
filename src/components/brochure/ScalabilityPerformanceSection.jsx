import React from 'react'
import {
  TrendingUp,
  ShieldCheck,
  Server,
  Cloud,
  Layers,
  CheckCircle2,
  Cpu,
  RefreshCw,
  HardDrive,
  Globe,
  Gauge,
  ArrowRight
} from 'lucide-react'

const TENETS = [
  {
    badge: 'Elastic',
    title: 'Horizontal Auto-Scaling',
    desc: 'Each microservice scales out independently based on CPU, memory, and queue depth without downtime.'
  },
  {
    badge: 'HA',
    title: 'Multi-Zone Redundancy',
    desc: 'Active-active multi-availability-zone clustering with automated sub-second traffic failover.'
  },
  {
    badge: 'DR',
    title: 'Disaster Recovery',
    desc: 'Geo-redundant encrypted backups with guaranteed RPO (< 15 min) and aggressive RTO (< 1 hour).'
  },
  {
    badge: 'SLA',
    title: 'Contractual Availability',
    desc: 'Backed by enterprise contractual SLAs up to 99.99% uptime for business-critical deployments.'
  }
]

const PERFORMANCE_POINTS = [
  {
    title: 'Multi-Region Data Residency',
    desc: 'Deploy close to regional users with cryptographic guarantees that sensitive data never crosses sovereign borders.'
  },
  {
    title: 'Multi-Site Governance',
    desc: 'Shared global regulatory taxonomies combined with local site variants, departmental roles, and regional timezones.'
  },
  {
    title: 'Zero-Downtime Rolling Updates',
    desc: 'Blue-green and canary rolling deployments ensure the platform remains 100% operational during software updates.'
  },
  {
    title: 'Asynchronous Background Workers',
    desc: 'Decoupled worker queues for heavy OCR, rendition conversion, and deep vector indexing keep UI interactions sub-second.'
  },
  {
    title: 'Distributed Caching & CDN Previews',
    desc: 'Edge delivery of rendered document previews provides instant page-turning for users anywhere in the world.'
  },
  {
    title: 'Streaming Upload & Download',
    desc: 'High-throughput chunked streaming pipelines handle gigabyte-sized batch records and CAD packages reliably.'
  },
  {
    title: 'Tiered Storage Cost Optimization',
    desc: 'Automated lifecycle policies seamlessly transition inactive historical records to low-cost archival vaults.'
  },
  {
    title: 'Real-Time Observability & SIEM',
    desc: 'Proactive metrics, distributed telemetry, and streaming audit events integrated with your enterprise SIEM.'
  }
]

export default function ScalabilityPerformanceSection() {
  return (
    <section id="scalability-performance" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-2">
            Scalability, Performance & Availability
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            From One Department to a Global Enterprise
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            The platform scales horizontally with demand — more users, more documents, more sites — without re-architecture, while high-availability design keeps critical content accessible around the clock.
          </p>
        </div>

        {/* 4 Core Tenets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {TENETS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#14532D]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-extrabold text-[#14532D] px-2.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/20 inline-block mb-3">
                  {t.badge}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{t.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* High-Availability Architecture Topology Diagram */}
        <div className="mb-16 p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Resilience Blueprint
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Global Edge to Multi-Zone Storage Topology
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold font-mono border border-emerald-500/30">
              Active-Active Redundancy
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            {/* Step 1: Users & Edge */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="font-mono text-emerald-400 font-bold mb-1">01 / EDGE INGRESS</div>
              <h4 className="text-sm font-bold text-white mb-2">CDN & Global WAF</h4>
              <p className="text-slate-300 text-[11px] leading-tight">
                Global edge nodes deliver fast previews, terminate TLS 1.3, and block DDoS attacks before traffic reaches core systems.
              </p>
            </div>

            {/* Step 2: Load Balancing */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="font-mono text-emerald-400 font-bold mb-1">02 / ROUTING</div>
              <h4 className="text-sm font-bold text-white mb-2">Smart Load Balancers</h4>
              <p className="text-slate-300 text-[11px] leading-tight">
                Continuous health checks distribute ingress traffic dynamically across healthy regional microservice clusters.
              </p>
            </div>

            {/* Step 3: Auto-Scaling Pool */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="font-mono text-emerald-400 font-bold mb-1">03 / COMPUTE POOL</div>
              <h4 className="text-sm font-bold text-white mb-2">Auto-Scaling Pods</h4>
              <p className="text-slate-300 text-[11px] leading-tight">
                Independent pools for Web/API, Workflow, Capture AI, Search, and Document Conversion expand on demand.
              </p>
            </div>

            {/* Step 4: Multi-Zone Storage */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
              <div className="font-mono text-emerald-400 font-bold mb-1">04 / PERSISTENCE</div>
              <h4 className="text-sm font-bold text-white mb-2">Zone A · B · C Clustering</h4>
              <p className="text-slate-300 text-[11px] leading-tight">
                Synchronously replicated PostgreSQL metadata, sharded vector search clusters, and geo-redundant WORM object storage.
              </p>
            </div>
          </div>
        </div>

        {/* Performance Engineering Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              Engineered for Enterprise Volume
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Rigorous optimization for organizations handling millions of documents across distributed worldwide campuses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PERFORMANCE_POINTS.map((pt, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#14532D]/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0" />
                  <h4 className="text-xs font-bold text-slate-900">{pt.title}</h4>
                </div>
                <p className="text-[11px] text-slate-600 pl-6 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

