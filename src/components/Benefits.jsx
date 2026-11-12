import React, { useState, useMemo } from 'react'
import {
  TrendingUp,
  Clock,
  DollarSign,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  Users,
  Building2,
  ArrowRight,
  Sliders,
  Sparkles
} from 'lucide-react'

const STAKEHOLDER_ROLES = [
  {
    role: 'Chief Information Officer',
    priority: 'Modernisation, cost control, risk',
    impact: 'Retire legacy ECM, consolidate repositories and reduce infrastructure and licence sprawl.'
  },
  {
    role: 'Chief Technology Officer',
    priority: 'Scalable, secure, cloud-ready architecture',
    impact: 'Cloud-native microservices, open APIs and flexible deployment models.'
  },
  {
    role: 'Quality Director',
    priority: 'Document control, training, CAPA',
    impact: 'Controlled document lifecycle, training-on release and change-control linkage.'
  },
  {
    role: 'Compliance Officer',
    priority: 'Evidence, accountability, policy enforcement',
    impact: 'Immutable audit trails, e-signatures, retention policies and compliance dashboards.'
  },
  {
    role: 'Regulatory Affairs',
    priority: 'Submission readiness, version integrity',
    impact: 'Version-locked document sets, PDF/A renditions and traceable approvals.'
  },
  {
    role: 'Enterprise Architect',
    priority: 'Integration, standards, interoperability',
    impact: 'REST APIs, webhooks, event streams, SSO and standards-based connectors.'
  },
  {
    role: 'Digital Transformation Leader',
    priority: 'Paperless operations, adoption, speed',
    impact: 'Intuitive UX, mobile access and no-code process automation.'
  }
]

export default function Benefits({ onOpenDemoModal }) {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0)
  const [docVolume, setDocVolume] = useState(30000)

  // Quantified business case model from brochure
  const savings = useMemo(() => {
    // Average manual processing, routing, printing, archiving, and error resolution: ~$4.80/doc
    // SmartiDP EDMS automated cost: ~$0.15/doc
    const manualLaborCost = docVolume * 4.80
    const smartIdpCost = docVolume * 0.15 + 1200
    const monthlyNetSaved = Math.max(0, manualLaborCost - smartIdpCost)
    const annualNetSaved = monthlyNetSaved * 12
    const reviewHoursSaved = Math.round((docVolume * 7.5) / 60) // ~7.5 minutes saved per document review & routing
    return {
      monthlySaved: Math.round(monthlyNetSaved),
      annualSaved: Math.round(annualNetSaved),
      reviewHoursSaved: reviewHoursSaved.toLocaleString()
    }
  }, [docVolume])

  return (
    <section id="benefits" className="py-24 bg-white border-b border-slate-200">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-3">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Business Value</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
            Measurable Outcomes Across the Enterprise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            SmartiDP EDMS delivers tangible value on four fronts simultaneously: rapid productivity gains, eliminated compliance exposure, reduced operational costs, and higher-quality decision-making.
          </p>
        </div>

        {/* 4 Pillars of Value (Brochure Page 5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl glass-card-green">
            <div className="text-3xl font-semibold text-[#14532D] font-mono">Faster</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1 mb-2">
              Review & Approval Cycles
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Document review & approval cycles through parallel electronic workflows.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card-green">
            <div className="text-3xl font-semibold text-[#14532D] font-mono">Less</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1 mb-2">
              Manual Data Entry
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Manual data entry via AI-powered capture and extraction.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card-green">
            <div className="text-3xl font-semibold text-[#14532D] font-mono">Lower</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1 mb-2">
              Storage & Paper Costs
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Paper, printing, courier and physical storage costs.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-card-green">
            <div className="text-3xl font-semibold text-[#14532D] font-mono">Ready</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mt-1 mb-2">
              Always Audit-Ready
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              For audits and inspections at any time, not just on audit day.
            </p>
          </div>
        </div>

        {/* Stakeholder Value Matrix & ROI Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Stakeholder Matrix (Brochure Page 5 Table) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#14532D] transition-colors">Value for Every Stakeholder</h3>
                <p className="text-xs text-slate-600 mt-0.5">Explore how SmartiDP EDMS answers key executive priorities</p>
              </div>
              <Users className="h-5 w-5 text-[#14532D]" />
            </div>

            <div className="space-y-3">
              {STAKEHOLDER_ROLES.map((role, idx) => {
                const isActive = activeRoleIndex === idx
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveRoleIndex(idx)}
                    className={`p-4 rounded-xl transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-white border-[#14532D]/40 shadow-xs'
                        : 'bg-white/60 hover:bg-white border-slate-200/60'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-bold text-sm ${isActive ? 'text-[#14532D]' : 'text-slate-800'}`}>
                        {role.role}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${isActive ? 'bg-[#F0FDF4] text-[#14532D]' : 'bg-slate-100 text-slate-600'}`}>
                        {role.priority}
                      </span>
                    </div>
                    {isActive && (
                      <p className="text-xs text-slate-700 mt-2.5 pt-2 border-t border-slate-100 leading-relaxed">
                        {role.impact}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Quantified Business Case ROI Calculator */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-8 shadow-md space-y-6">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-[#14532D]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#14532D]">
                Quantified ROI Calculator
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#14532D] transition-colors">
              Calculate Your Organization's Annual Savings
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              Based on empirical client benchmarks: manual review, routing, printing, archiving, and error recovery averages <strong>$4.80 per document</strong>.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-slate-800">Monthly Document Volume:</span>
                <span className="text-base font-bold text-[#14532D] font-mono">
                  {docVolume.toLocaleString()} docs / mo
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="2500"
                value={docVolume}
                onChange={(e) => setDocVolume(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#14532D]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>5k</span>
                <span>50k</span>
                <span>150k</span>
                <span>250k</span>
              </div>
            </div>

            {/* Calculated Results Box */}
            <div className="p-5 rounded-2xl glass-card-green space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
                  Estimated Net Annual Savings
                </span>
                <div className="text-3xl sm:text-4xl font-semibold text-[#14532D] font-mono mt-0.5">
                  ${savings.annualSaved.toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-emerald-900/10 text-xs">
                <div>
                  <div className="text-slate-600 text-[11px]">Monthly Saved:</div>
                  <div className="text-base font-bold text-slate-900 font-mono mt-0.5">
                    ${savings.monthlySaved.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-slate-600 text-[11px]">Hours Saved / Mo:</div>
                  <div className="text-base font-bold text-[#14532D] font-mono mt-0.5">
                    {savings.reviewHoursSaved} hrs
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenDemoModal}
              className="w-full py-3.5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white font-bold text-sm shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Request Organisation-Specific ROI Model</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

