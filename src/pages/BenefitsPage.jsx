import React, { useState } from 'react'
import PageCtaBanner from '../components/PageCtaBanner'
import {
  TrendingUp,
  Clock,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  Users,
  FileSpreadsheet,
  ArrowRight,
  Sparkles,
  Award,
  Lock,
  Layers
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

export default function BenefitsPage({ onOpenDemoModal }) {
  const [docVolume, setDocVolume] = useState(25000)
  const [activeRoleIndex, setActiveRoleIndex] = useState(0)

  const calculateSavings = (volume) => {
    // Assumptions based on brochure page 17 time-and-motion studies:
    // Manual handling cost: ~$4.80/doc (including search, routing, manual review, filing)
    const manualLaborCost = volume * 4.80
    // SmartiDP EDMS automated cost: ~$0.95/doc
    const smartIdpCost = volume * 0.95 + 1200
    const monthlyNetSaved = Math.max(0, manualLaborCost - smartIdpCost)
    const hoursSaved = Math.round(volume * 0.35) // ~21 mins saved per document
    return {
      monthlyDollars: Math.round(monthlyNetSaved),
      annualDollars: Math.round(monthlyNetSaved * 12),
      hoursSaved
    }
  }

  const savings = calculateSavings(docVolume)

  return (
    <div className="bg-white">
      {/* 1. Page Hero Section */}
      <section className="py-14 lg:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold mb-4 shadow-2xs">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>BUSINESS IMPACT</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
              Quantified Value Across Every Enterprise Dimension
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              SmartiDP EDMS accelerates cycle times, removes manual error, slashes regulatory compliance costs, and ensures continuous inspection readiness.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The 4 Value Pillars Section */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#14532D]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center border border-[#14532D]/20 shadow-xs mb-5">
                  <Clock className="h-6 w-6" />
                </div>
                <span className="text-3xl font-semibold text-[#14532D] font-mono block">Faster</span>
                <h2 className="text-base font-semibold text-slate-900 mt-1 mb-2">Review & Approval Cycles</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Document review & approval cycles through parallel electronic workflows.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#14532D]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center border border-[#14532D]/20 shadow-xs mb-5">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <span className="text-3xl font-semibold text-[#14532D] font-mono block">Less</span>
                <h2 className="text-base font-semibold text-slate-900 mt-1 mb-2">Manual Data Entry</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Manual data entry via AI-powered capture and extraction.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#14532D]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center border border-[#14532D]/20 shadow-xs mb-5">
                  <DollarSign className="h-6 w-6" />
                </div>
                <span className="text-3xl font-semibold text-[#14532D] font-mono block">Lower</span>
                <h2 className="text-base font-semibold text-slate-900 mt-1 mb-2">Storage & Paper Costs</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Paper, printing, courier and physical storage costs.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-[#14532D]/30 transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center border border-[#14532D]/20 shadow-xs mb-5">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="text-3xl font-semibold text-[#14532D] font-mono block">Ready</span>
                <h2 className="text-base font-semibold text-slate-900 mt-1 mb-2">Continuous Audit Readiness</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For audits and inspections at any time, not just on audit day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quantified ROI Interactive Calculator Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-sm">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#14532D] text-xs font-semibold border border-slate-200 mb-3 shadow-2xs">
                <Sliders className="h-3.5 w-3.5" />
                <span>Interactive ROI Model</span>
              </div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Calculate Your Enterprise Cost Savings
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Based on empirical time-and-motion studies across regulated document processing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
              {/* Slider Control */}
              <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xs space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Monthly Processed Documents
                    </label>
                    <span className="text-base font-mono font-bold text-[#14532D] bg-[#F0FDF4] px-3 py-1 rounded-lg border border-emerald-200">
                      {docVolume.toLocaleString()} docs / month
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="150000"
                    step="5000"
                    value={docVolume}
                    onChange={(e) => setDocVolume(Number(e.target.value))}
                    className="w-full accent-[#14532D] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>5,000 / mo</span>
                    <span>75,000 / mo</span>
                    <span>150,000+ / mo</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Manual Handling Baseline:</span>
                    <span className="font-mono font-medium text-slate-800">~$4.80 per document</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SmartiDP AI Automation:</span>
                    <span className="font-mono font-medium text-[#14532D]">~$0.95 per document</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-900 pt-2 border-t border-slate-100">
                    <span>Net Efficiency Delta:</span>
                    <span className="font-mono text-[#14532D]">$3.85 saved per doc</span>
                  </div>
                </div>
              </div>

              {/* Calculated Output Cards */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-[#14532D]/20 shadow-sm text-left">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Annual Cost Savings
                  </span>
                  <span className="text-3xl sm:text-4xl font-semibold text-[#14532D] font-mono mt-1 block">
                    ${(savings.annualDollars).toLocaleString()}
                  </span>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    Projected direct annual administrative and routing expenditure saved.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#14532D]/20 shadow-sm text-left">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Knowledge Hours Saved
                  </span>
                  <span className="text-3xl sm:text-4xl font-semibold text-[#14532D] font-mono mt-1 block">
                    {(savings.hoursSaved * 12).toLocaleString()} hrs
                  </span>
                  <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                    High-value hours redirected from administrative filing to core innovation.
                  </p>
                </div>

                <div className="sm:col-span-2 p-5 rounded-2xl bg-[#F0FDF4] border border-[#14532D]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-[#14532D] shrink-0" />
                    <span>Business case modelling: labour savings, cycle-time reduction, storage consolidation and compliance risk avoidance.</span>
                  </div>
                  <button
                    onClick={onOpenDemoModal}
                    className="font-bold text-[#14532D] hover:underline cursor-pointer whitespace-nowrap"
                  >
                    Request ROI Model
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Stakeholder Value Matrix Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-semibold text-slate-900">
              Tailored Value for Every Stakeholder
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Click a role below to review how SmartiDP EDMS delivers strategic outcomes for that mandate.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {STAKEHOLDER_ROLES.map((stk, idx) => (
              <button
                key={idx}
                onClick={() => setActiveRoleIndex(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  idx === activeRoleIndex
                    ? 'bg-[#14532D] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-[#F0FDF4] border border-slate-200'
                }`}
              >
                {stk.role.split('(')[0].trim()}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 max-w-4xl mx-auto shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-6 w-6 text-[#14532D]" />
              <h3 className="text-xl font-semibold text-slate-900">
                {STAKEHOLDER_ROLES[activeRoleIndex].role}
              </h3>
            </div>
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
              Core Strategic Priority: {STAKEHOLDER_ROLES[activeRoleIndex].priority}
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {STAKEHOLDER_ROLES[activeRoleIndex].impact}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bottom Custom ROI CTA Section (Standardized Green Pill Banner) */}
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
