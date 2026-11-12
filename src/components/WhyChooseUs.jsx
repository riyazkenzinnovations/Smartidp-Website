import React from 'react'
import {
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Smartphone,
  Sliders,
  Share2,
  Server,
  ArrowRight,
  Sparkles,
  Lock,
  Layers,
  Award,
  Globe,
  Clock
} from 'lucide-react'

const WHY_POINTS = [
  {
    title: 'AI at the Core',
    desc: 'Intelligent document processing and spatial layout comprehension are natively built into the platform architecture — not bolted on as a fragile third-party add-on.',
    icon: Cpu
  },
  {
    title: 'Compliance-Ready Out of the Box',
    desc: 'Controls mapped to 12+ global standards: 21 CFR Part 11, EU Annex 11, ISO 9001/13485/27001, GDPR, HIPAA, and SOC 2 Type II with turnkey validation accelerators.',
    icon: ShieldCheck
  },
  {
    title: 'Built for High User Adoption',
    desc: 'Intuitive modern interface across web, native Microsoft Office 365 & Outlook add-ins, and mobile iOS/Android apps that knowledge workers actually love using.',
    icon: Smartphone
  },
  {
    title: '100% Configurable Without Custom Code',
    desc: 'Adapt document types, numbering rules, metadata taxonomies, and BPMN 2.0 approval processes through visual point-and-click configuration.',
    icon: Sliders
  },
  {
    title: 'Open & Standards-Based Integration',
    desc: 'API-first platform featuring REST / OpenAPI endpoints, webhooks, SCIM user provisioning, SAML 2.0 / OIDC single sign-on, and CMIS standard connectors.',
    icon: Share2
  },
  {
    title: 'Deploy Your Way (SaaS, Private, or On-Prem)',
    desc: 'Choose fully-managed multi-tenant SaaS with regional data residency, a dedicated single-tenant private cloud, or air-gapped on-premise Kubernetes hosting.',
    icon: Server
  }
]

const IMPLEMENTATION_STEPS = [
  { step: '1', name: 'Discover', desc: 'Process workshops, requirement specs, success KPIs and quantified business case.' },
  { step: '2', name: 'Design', desc: 'Information architecture, taxonomy metadata, security model, and approval workflows.' },
  { step: '3', name: 'Configure', desc: 'Iterative sprint configuration and integration with fortnightly user demos.' },
  { step: '4', name: 'Validate', desc: 'Risk-based testing, IQ/OQ/PQ execution support, and formal user acceptance.' },
  { step: '5', name: 'Migrate', desc: 'Verified migration of legacy ECM content, file shares, and metadata attributes.' },
  { step: '6', name: 'Go Live', desc: 'Role-based training academy, change management, and dedicated hyper-care.' },
  { step: '7', name: 'Optimise', desc: 'KPI reviews, user adoption analytics, and continuous roadmap alignment.' }
]

export default function WhyChooseUs({ onOpenDemoModal }) {
  return (
    <section id="why-choose" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-3">
            <Award className="h-3.5 w-3.5" />
            <span>The Enterprise Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
            Why Choose SmartiDP EDMS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Enterprise software should accelerate your business, not hold it back. SmartiDP EDMS by Kenz Innovations delivers unmatched compliance rigour combined with modern agility.
          </p>
        </div>

        {/* 6 Key Enterprise Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {WHY_POINTS.map((pt, idx) => {
            const Icon = pt.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl glass-card-green flex flex-col justify-between group"
              >
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#14532D] transition-colors mb-3">{pt.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{pt.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#14532D]">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Documented in Product Architecture</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Implementation Methodology (Brochure Page 19) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#14532D]">
              Implementation & Customer Success
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-[#14532D] transition-colors mt-1">
              A Proven Path From Kick-Off to Lasting Value
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our implementation methodology combines agile delivery with the documentation rigour regulated organisations require — reducing risk and accelerating time to value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-8">
            {IMPLEMENTATION_STEPS.map((s, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono font-bold text-[#14532D] mb-1">STAGE 0{s.step}</div>
                  <div className="text-xs font-bold text-slate-900 mb-1">{s.name}</div>
                  <p className="text-[10px] text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Implementation Highlights Box */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 border-t border-slate-100 text-center text-xs">
            <div className="p-3 rounded-xl bg-[#F0FDF4] text-slate-800">
              <span className="font-semibold text-[#14532D] text-base block font-mono">Weeks, Not Months</span>
              To launch an initial process using solution templates
            </div>
            <div className="p-3 rounded-xl bg-[#F0FDF4] text-slate-800">
              <span className="font-semibold text-[#14532D] text-base block font-mono">Agile Sprints</span>
              Visible progress, demos, and user feedback every two weeks
            </div>
            <div className="p-3 rounded-xl bg-[#F0FDF4] text-slate-800">
              <span className="font-semibold text-[#14532D] text-base block font-mono">GxP Validation Pack</span>
              Pre-written URS, risk assessment, and test scripts
            </div>
            <div className="p-3 rounded-xl bg-[#F0FDF4] text-slate-800">
              <span className="font-semibold text-[#14532D] text-base block font-mono">24/7 Platform Monitoring</span>
              Contractual availability commitments & support SLAs
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

