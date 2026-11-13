import React, { useState } from 'react'
import PageCtaBanner from '../components/PageCtaBanner'
import {
  TrendingUp,
  Clock,
  DollarSign,
  ShieldCheck,
  Sliders,
  Users,
  ArrowRight,
  Zap,
  BarChart3,
  CheckCircle2,
  ChevronRight
} from 'lucide-react'

const STAKEHOLDER_ROLES = [
  {
    role: 'Chief Information Officer',
    abbr: 'CIO',
    priority: 'Modernisation, cost control, risk',
    impact:
      'Retire legacy ECM, consolidate repositories and reduce infrastructure and licence sprawl.',
    bullets: [
      'Decommission legacy on-premises ECM platforms',
      'Reduce total infrastructure & licence footprint',
      'Centralise document repositories enterprise-wide',
      'Real-time cost dashboards for IT governance'
    ]
  },
  {
    role: 'Chief Technology Officer',
    abbr: 'CTO',
    priority: 'Scalable, secure, cloud-ready architecture',
    impact:
      'Cloud-native microservices, open APIs and flexible deployment models.',
    bullets: [
      'Cloud-native microservices with containerised deployment',
      'Open REST APIs, webhooks & event-driven integration',
      'SSO, OAuth 2.0 & SAML 2.0 identity federation',
      'Multi-region HA with 99.9% uptime SLA'
    ]
  },
  {
    role: 'Quality Director',
    abbr: 'QD',
    priority: 'Document control, training, CAPA',
    impact:
      'Controlled document lifecycle, training-on release and change-control linkage.',
    bullets: [
      'Controlled document lifecycle with state-gated transitions',
      'Auto-triggered training tasks on document release',
      'CAPA linkage to corrective document revisions',
      'Periodic review schedules with automated reminders'
    ]
  },
  {
    role: 'Compliance Officer',
    abbr: 'CO',
    priority: 'Evidence, accountability, policy enforcement',
    impact:
      'Immutable audit trails, e-signatures, retention policies and compliance dashboards.',
    bullets: [
      'Immutable, tamper-evident audit logs (21 CFR Part 11)',
      'Two-component e-signature with cryptographic binding',
      'Automated retention & disposition schedules',
      'Real-time compliance dashboards & exception reports'
    ]
  },
  {
    role: 'Regulatory Affairs',
    abbr: 'RA',
    priority: 'Submission readiness, version integrity',
    impact:
      'Version-locked document sets, PDF/A renditions and traceable approvals.',
    bullets: [
      'Version-locked, submission-ready document packages',
      'Automatic PDF/A-compliant archival renditions',
      'Full chain-of-custody for every document revision',
      'eTMF & regulatory binder management built in'
    ]
  },
  {
    role: 'Enterprise Architect',
    abbr: 'EA',
    priority: 'Integration, standards, interoperability',
    impact:
      'REST APIs, webhooks, event streams, SSO and standards-based connectors.',
    bullets: [
      'Published OpenAPI 3.0 specification for all endpoints',
      'Pre-built connectors: SAP, Salesforce, ServiceNow, O365',
      'Event-driven architecture with Kafka-compatible streams',
      'No-vendor lock-in: open standards throughout'
    ]
  },
  {
    role: 'Digital Transformation Leader',
    abbr: 'DTL',
    priority: 'Paperless operations, adoption, speed',
    impact:
      'Intuitive UX, mobile access and no-code process automation.',
    bullets: [
      'Responsive web & native mobile applications (iOS/Android)',
      'No-code BPMN workflow designer for citizen developers',
      'User adoption analytics and change-management toolkits',
      'Phased migration paths from paper to fully digital'
    ]
  }
]

const VALUE_PILLARS = [
  {
    icon: Clock,
    metric: '80%',
    label: 'Faster Approvals',
    desc: 'Parallel electronic workflows slash review & approval cycle times from days to hours.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: TrendingUp,
    metric: '95%',
    label: 'Less Manual Entry',
    desc: 'AI-powered capture and extraction eliminates repetitive data entry and human errors.',
    color: 'from-sky-500 to-blue-600'
  },
  {
    icon: DollarSign,
    metric: '60%',
    label: 'Lower Storage Costs',
    desc: 'Paper, printing, courier and physical storage costs cut dramatically.',
    color: 'from-violet-500 to-purple-600'
  },
  {
    icon: ShieldCheck,
    metric: '100%',
    label: 'Audit Ready',
    desc: 'Continuous inspection readiness with immutable trails — not just on audit day.',
    color: 'from-orange-500 to-amber-600'
  }
]

export default function BenefitsPage({ onOpenDemoModal }) {
  const [docVolume, setDocVolume] = useState(25000)
  const [activeRoleIndex, setActiveRoleIndex] = useState(0)

  const calculateSavings = (volume) => {
    const manualLaborCost = volume * 4.8
    const smartIdpCost = volume * 0.95 + 1200
    const monthlyNetSaved = Math.max(0, manualLaborCost - smartIdpCost)
    const hoursSaved = Math.round(volume * 0.35)
    return {
      monthlyDollars: Math.round(monthlyNetSaved),
      annualDollars: Math.round(monthlyNetSaved * 12),
      hoursSaved
    }
  }

  const savings = calculateSavings(docVolume)

  return (
    <div className="bg-white">

      {/* ── 1. HERO ── */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-[#0a2f1a] to-slate-900">
        {/* subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />

        <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Business Impact</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Quantified Value Across{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Every Enterprise
              </span>{' '}
              Dimension
            </h1>
            <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              SmartiDP EDMS accelerates cycle times, removes manual error, slashes regulatory
              compliance costs, and ensures continuous inspection readiness.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/40 hover:from-emerald-400 hover:to-teal-400 transition-all group cursor-pointer"
              >
                <span>See ROI Calculator</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/15 transition-all cursor-pointer"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. VALUE PILLARS ── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Measurable impact from day one
            </h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base">
              Real numbers from time-and-motion studies across regulated document environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PILLARS.map((p, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-7 flex flex-col"
              >
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center shadow-sm mb-5`}>
                  <p.icon className="h-6 w-6" />
                </div>

                <span className="text-4xl font-black text-slate-900 leading-none">{p.metric}</span>
                <h3 className="text-base font-bold text-slate-800 mt-2 mb-2">{p.label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed flex-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ROI CALCULATOR ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-emerald-700 text-xs font-bold border border-emerald-200 mb-3 shadow-sm uppercase tracking-wider">
              <Sliders className="h-3.5 w-3.5" />
              <span>Interactive ROI Model</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Calculate Your Enterprise Cost Savings
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Based on empirical time-and-motion studies across regulated document processing.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

                {/* Left – Slider */}
                <div className="p-8 sm:p-10 space-y-7">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        Monthly Processed Documents
                      </label>
                      <span className="text-sm font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                        {docVolume.toLocaleString()} / mo
                      </span>
                    </div>

                    <input
                      type="range"
                      min="5000"
                      max="150000"
                      step="5000"
                      value={docVolume}
                      onChange={(e) => setDocVolume(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer h-2"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
                      <span>5,000</span>
                      <span>75,000</span>
                      <span>150,000+</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-5 border-t border-slate-100">
                    <div className="flex justify-between items-center py-2.5 px-4 rounded-xl bg-red-50 border border-red-100">
                      <span className="text-xs font-semibold text-red-700">Manual Handling Baseline</span>
                      <span className="text-xs font-mono font-bold text-red-700">~$4.80 / doc</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 px-4 rounded-xl bg-emerald-50 border border-emerald-100">
                      <span className="text-xs font-semibold text-emerald-700">SmartiDP AI Automation</span>
                      <span className="text-xs font-mono font-bold text-emerald-700">~$0.95 / doc</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-800">
                      <span className="text-xs font-bold text-white">Net Efficiency Delta</span>
                      <span className="text-xs font-mono font-bold text-emerald-400">$3.85 saved / doc</span>
                    </div>
                  </div>
                </div>

                {/* Right – Output */}
                <div className="p-8 sm:p-10 bg-slate-50 flex flex-col justify-between gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 flex flex-col">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Annual Savings</span>
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono leading-none">
                        ${savings.annualDollars.toLocaleString()}
                      </span>
                      <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
                        Projected direct administrative & routing expenditure saved per year.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 flex flex-col">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Hours Freed Annually</span>
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono leading-none">
                        {(savings.hoursSaved * 12).toLocaleString()}
                        <span className="text-lg font-bold text-slate-500 ml-1">hrs</span>
                      </span>
                      <p className="text-[11px] text-slate-500 mt-3 leading-relaxed">
                        High-value knowledge hours redirected from admin filing to core innovation.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-white">
                    <div className="flex items-start gap-3">
                      <BarChart3 className="h-5 w-5 mt-0.5 shrink-0 text-emerald-200" />
                      <p className="text-xs leading-relaxed text-white/90">
                        Full business-case modelling: labour savings, cycle-time reduction, storage consolidation & compliance risk avoidance.
                      </p>
                    </div>
                    <button
                      onClick={onOpenDemoModal}
                      className="whitespace-nowrap text-xs font-bold text-white border border-white/40 rounded-full px-4 py-2 hover:bg-white/15 transition cursor-pointer shrink-0"
                    >
                      Request ROI Model →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. STAKEHOLDER VALUE MATRIX ── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Tailored Value for Every Stakeholder
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              Select a role to see how SmartiDP EDMS delivers strategic outcomes for that mandate.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Role tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {STAKEHOLDER_ROLES.map((stk, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveRoleIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    idx === activeRoleIndex
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {stk.role.split(' ').slice(0, 2).join(' ')}
                </button>
              ))}
            </div>

            {/* Detail card */}
            <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

                {/* Left label */}
                <div className="lg:col-span-2 bg-slate-900 p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-flex h-14 w-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 items-center justify-center mb-4">
                      <Users className="h-7 w-7 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {STAKEHOLDER_ROLES[activeRoleIndex].role}
                    </h3>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-3 py-1">
                      <Zap className="h-3 w-3" />
                      <span>{STAKEHOLDER_ROLES[activeRoleIndex].priority}</span>
                    </div>
                    <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                      {STAKEHOLDER_ROLES[activeRoleIndex].impact}
                    </p>
                  </div>
                  <button
                    onClick={onOpenDemoModal}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition cursor-pointer group"
                  >
                    <span>Book a role-specific demo</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Right bullets */}
                <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
                    Key Capabilities Delivered
                  </p>
                  <ul className="space-y-4">
                    {STAKEHOLDER_ROLES[activeRoleIndex].bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        </div>
                        <span className="text-sm text-slate-700 leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA BANNER ── */}
      <PageCtaBanner
        onOpenDemoModal={onOpenDemoModal}
        badge="Quantified Value Modelling"
        title="Ready to Build Your Organization's Custom Business Case?"
        description="Our enterprise consultants will partner with your finance and operations teams to model hard-dollar ROI and payback timelines."
        primaryBtnText="Request a Demo"
        secondaryBtnText="Contact Solutions Team"
        secondaryLink="/contact"
      />
    </div>
  )
}
