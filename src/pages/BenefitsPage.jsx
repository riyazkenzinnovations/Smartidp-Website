import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
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
  Sparkles,
  Award
} from 'lucide-react'

const STAKEHOLDER_ROLES = [
  {
    role: 'Chief Information Officer (CIO)',
    priority: 'Modernisation, Cost Control & Sprawl Elimination',
    impact: 'Retire legacy ECM tools, consolidate departmental silos into a single platform, and drastically cut licensing and infrastructure spend.'
  },
  {
    role: 'Chief Technology Officer (CTO)',
    priority: 'Scalable, Secure, Cloud-Native Architecture',
    impact: 'Containerised microservices on Kubernetes, open REST APIs, webhooks, and your choice of SaaS, dedicated private cloud, or on-premise hosting.'
  },
  {
    role: 'Quality Director',
    priority: 'Document Control, Training & CAPA Integration',
    impact: 'Ensure full lifecycle control of SOPs, automated read-and-acknowledge training upon release, and seamless change-control linkage.'
  },
  {
    role: 'Compliance & Risk Officer',
    priority: 'Data Integrity, Accountability & Audit Evidence',
    impact: 'Immutable append-only audit trails, two-component e-signatures, ISO 15489 retention schedules, and continuous inspection readiness.'
  },
  {
    role: 'Regulatory Affairs Director',
    priority: 'Submission Readiness & Version Integrity',
    impact: 'Version-locked document dossiers, automated PDF/A archival renditions, and traceable approvals ready for FDA, EMA, or notified bodies.'
  },
  {
    role: 'Enterprise Architect',
    priority: 'Standards, Interoperability & Integration',
    impact: 'REST / OpenAPI specifications, OAuth 2.0 / SAML 2.0 SSO, SCIM provisioning, CMIS connectors, and BPMN 2.0 workflow interoperability.'
  },
  {
    role: 'Digital Transformation Leader',
    priority: 'Paperless Operations, Speed & High Adoption',
    impact: 'Consumer-grade user experience, Microsoft Office 365 / Outlook add-ins, native mobile capture, and no-code visual configuration.'
  }
]

export default function BenefitsPage({ onOpenDemoModal }) {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0)
  const [docVolume, setDocVolume] = useState(30000)

  // Quantified business case model from brochure
  const savings = useMemo(() => {
    const costPerDocManual = 4.80
    const costPerDocSmart = 0.95
    const netSavingsPerDoc = costPerDocManual - costPerDocSmart
    const annualDollars = Math.round(docVolume * netSavingsPerDoc)
    const hoursSaved = Math.round(docVolume * 0.42)
    const auditPrepReduction = 75

    return {
      annualDollars,
      hoursSaved,
      auditPrepReduction
    }
  }, [docVolume])

  return (
    <div className="py-12 bg-white">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link to="/" className="hover:text-[#14532D]">Home</Link>
          <span>/</span>
          <span className="text-[#14532D] font-semibold">Measurable Benefits & ROI</span>
        </nav>

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-4">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>BUSINESS IMPACT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight leading-tight">
            Quantified Value Across Every Enterprise Dimension
          </h1>
          <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            SmartiDP EDMS accelerates cycle times, removes manual error, slashes regulatory compliance costs, and ensures continuous inspection readiness.
          </p>
        </div>

        {/* The 4 Value Pillars from Brochure Page 17 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="p-7 rounded-3xl glass-card-green">
            <div className="h-12 w-12 rounded-2xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/15 shadow-xs mb-5">
              <Clock className="h-6 w-6" />
            </div>
            <span className="text-3xl font-extrabold text-[#14532D] font-mono block">Faster</span>
            <h2 className="text-base font-bold text-slate-900 mt-1 mb-2">Cycle Times</h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              Cut review and approval cycles from weeks to hours with automated parallel workflows, mobile approvals, and proactive reminders.
            </p>
          </div>

          <div className="p-7 rounded-3xl glass-card-green">
            <div className="h-12 w-12 rounded-2xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/15 shadow-xs mb-5">
              <TrendingUp className="h-6 w-6" />
            </div>
            <span className="text-3xl font-extrabold text-[#14532D] font-mono block">Less</span>
            <h2 className="text-base font-bold text-slate-900 mt-1 mb-2">Manual Effort</h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              Eliminate up to 85% of manual data entry with AI-powered extraction, automated routing, and instant 3-way matching.
            </p>
          </div>

          <div className="p-7 rounded-3xl glass-card-green">
            <div className="h-12 w-12 rounded-2xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/15 shadow-xs mb-5">
              <DollarSign className="h-6 w-6" />
            </div>
            <span className="text-3xl font-extrabold text-[#14532D] font-mono block">Lower</span>
            <h2 className="text-base font-bold text-slate-900 mt-1 mb-2">Cost & Risk</h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              Avoid costly non-compliance penalties, 483 audit observations, and unbudgeted physical storage with automated ISO retention.
            </p>
          </div>

          <div className="p-7 rounded-3xl glass-card-green">
            <div className="h-12 w-12 rounded-2xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/15 shadow-xs mb-5">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <span className="text-3xl font-extrabold text-[#14532D] font-mono block">Ready</span>
            <h2 className="text-base font-bold text-slate-900 mt-1 mb-2">Always Audit-Ready</h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              Produce complete, tamper-evident audit trails and inspection packages in minutes rather than assembling paper for weeks.
            </p>
          </div>
        </div>

        {/* Quantified ROI Interactive Calculator */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F5F7F5] border border-slate-200 mb-20 shadow-xs">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#14532D] text-xs font-semibold border border-slate-200 mb-3">
              <Sliders className="h-3.5 w-3.5" />
              <span>Interactive ROI Model</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#14532D]">
              Calculate Your Enterprise Cost Savings
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Based on empirical brochure time-and-motion studies across regulated document processing.
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
                  <span className="text-base font-mono font-bold text-[#14532D] bg-[#E8F3EC] px-3 py-1 rounded-lg">
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
                <span className="text-3xl sm:text-4xl font-extrabold text-[#14532D] font-mono mt-1 block">
                  ${(savings.annualDollars * 12).toLocaleString()}
                </span>
                <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                  Projected direct annual administrative and routing expenditure saved.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#14532D]/20 shadow-sm text-left">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Knowledge Hours Saved
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#14532D] font-mono mt-1 block">
                  {(savings.hoursSaved * 12).toLocaleString()} hrs
                </span>
                <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
                  High-value hours redirected from administrative filing to core innovation.
                </p>
              </div>

              <div className="sm:col-span-2 p-5 rounded-2xl bg-[#E8F3EC] border border-[#14532D]/20 flex items-center justify-between text-xs text-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#14532D]" />
                  <span>Audit Package Preparation Time Reduced by <strong>75%</strong></span>
                </div>
                <button
                  onClick={onOpenDemoModal}
                  className="font-bold text-[#14532D] hover:underline cursor-pointer"
                >
                  Request Full Model
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Stakeholder Value Matrix */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-[#14532D]">
              Tailored Value for Every Stakeholder
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
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
                    : 'bg-[#F5F7F5] text-slate-700 hover:bg-[#E8F3EC] border border-slate-200'
                }`}
              >
                {stk.role.split('(')[0].trim()}
              </button>
            ))}
          </div>

          <div className="p-8 rounded-3xl glass-card-green max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-6 w-6 text-[#14532D]" />
              <h3 className="text-xl font-bold text-[#14532D]">
                {STAKEHOLDER_ROLES[activeRoleIndex].role}
              </h3>
            </div>
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
              Core Strategic Priority: {STAKEHOLDER_ROLES[activeRoleIndex].priority}
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {STAKEHOLDER_ROLES[activeRoleIndex].impact}
            </p>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#14532D] text-white text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Ready to Build Your Organization's Custom Business Case?
          </h2>
          <p className="text-emerald-100 text-sm max-w-xl mx-auto leading-relaxed">
            Our enterprise consultants will partner with your finance and operations teams to model hard-dollar ROI and payback timelines.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenDemoModal}
              className="px-8 py-3.5 rounded-xl bg-white text-[#14532D] font-bold text-sm shadow-md hover:bg-[#E8F3EC] transition-all cursor-pointer"
            >
              Request Custom ROI Calculation
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
