import React from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Sparkles,
  Building2,
  CheckCircle2,
  FileWarning,
  ArrowRight,
  Layers,
  Award,
  Users,
  Target,
  Compass,
  Cpu,
  MapPin,
  Mail,
  Phone,
  Globe
} from 'lucide-react'

const TRANSFORMATION_ITEMS = [
  {
    dimension: 'Document Access',
    before: 'Fragmented across file drives, email inboxes, physical binders & legacy repositories.',
    withSmartIDP: 'One unified, governed repository with instant, permission-trimmed semantic search.'
  },
  {
    dimension: 'Data Entry & Ingestion',
    before: 'Hours spent manually re-keying data from scans, PDFs, and paper forms with high error rates.',
    withSmartIDP: 'AI-driven OCR, layout analysis, automated classification, and structured data extraction.'
  },
  {
    dimension: 'Reviews & Approvals',
    before: 'Unruly email threads, printed copies, wet-ink signatures, and delayed approval cycles.',
    withSmartIDP: 'Parallel BPMN 2.0 electronic workflows with 21 CFR Part 11 & eIDAS digital signatures.'
  },
  {
    dimension: 'Regulatory Compliance',
    before: 'Scrambling for days to assemble paper evidence and history binders before inspections.',
    withSmartIDP: 'Continuous immutable audit trails, revision tracking, and one-click inspection packages.'
  },
  {
    dimension: 'Records Retention',
    before: 'Content kept indefinitely or deleted ad-hoc, creating severe legal discovery exposure.',
    withSmartIDP: 'Automated ISO 15489 policy-driven retention schedules, legal holds, and certified disposition.'
  },
  {
    dimension: 'Operational Visibility',
    before: 'Zero real-time visibility into bottlenecks, cycle times, or document distribution status.',
    withSmartIDP: 'Executive dashboards, SLA tracking, and audit-ready analytics across all departments.'
  }
]

const IMPLEMENTATION_STEPS = [
  { step: '01', name: 'Discover', desc: 'Process workshops, requirement specs, success KPIs and quantified business case.' },
  { step: '02', name: 'Design', desc: 'Information architecture, taxonomy metadata, security model, and approval workflows.' },
  { step: '03', name: 'Configure', desc: 'Iterative sprint configuration and integration with fortnightly user demos.' },
  { step: '04', name: 'Validate', desc: 'Risk-based testing, IQ/OQ/PQ execution support, and formal user acceptance.' },
  { step: '05', name: 'Migrate', desc: 'Verified migration of legacy ECM content, file shares, and metadata attributes.' },
  { step: '06', name: 'Go Live', desc: 'Role-based training academy, change management, and dedicated hyper-care.' },
  { step: '07', name: 'Optimise', desc: 'KPI reviews, user adoption analytics, and continuous roadmap alignment.' }
]

export default function AboutPage({ onOpenDemoModal }) {
  return (
    <div className="py-12 bg-white">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
          <Link to="/" className="hover:text-[#14532D]">Home</Link>
          <span>/</span>
          <span className="text-[#14532D] font-semibold">About SmartiDP EDMS</span>
        </nav>

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-4">
            <Building2 className="h-3.5 w-3.5" />
            <span>KENZ INNOVATIONS · EDMS DIVISION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight leading-tight">
            Empowering Enterprises Through Governed Document Intelligence
          </h1>
          <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            SmartiDP EDMS was engineered from the ground up to solve the enterprise information crisis — transforming chaotic, fragmented document silos into a unified, compliant, and automated system of record.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl glass-card-green">
            <div className="h-12 w-12 rounded-2xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/15 shadow-xs mb-5">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#14532D] mb-3">Our Mission</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              To eliminate friction, error, and compliance exposure in enterprise document management by fusing cutting-edge artificial intelligence with rigorous, tamper-evident regulatory controls.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-card-green">
            <div className="h-12 w-12 rounded-2xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/15 shadow-xs mb-5">
              <Compass className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#14532D] mb-3">Our Vision</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              A business world where every critical decision, product release, and clinical submission is accelerated by trusted, automated, and continuously audit-ready information flow.
            </p>
          </div>
        </div>

        {/* The Narrative: The Case for Change */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F5F7F5] border border-slate-200 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#14532D] text-xs font-semibold border border-slate-200">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>The Case for Change</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14532D]">
                Govern Every Document. Empower Every Stakeholder.
              </h2>
              <p>
                Every strategic decision, regulatory submission, commercial contract, product release, and customer interaction depends directly on documents. Yet in most organisations, that content is scattered across disparate network drives, legacy silos, personal inboxes, and paper archives — multiplying risk and hiding business value.
              </p>
              <p>
                <strong>SmartiDP EDMS</strong> by Kenz Innovations brings eight integrated capability domains together on a single, shared enterprise foundation. AI-driven capture turns unstructured content into structured, searchable records. Configurable workflows automate reviews, approvals, and records governance. Security and compliance controls are built directly into every layer — so your organisation moves faster while remaining continuously audit-ready.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-2xl font-extrabold text-[#14532D] font-mono">Unified</div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  One repository, one security model, one immutable audit trail across sites.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-2xl font-extrabold text-[#14532D] font-mono">Intelligent</div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Multi-modal AI extracts meaning, auto-indexes metadata, and flags risks.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-2xl font-extrabold text-[#14532D] font-mono">Configurable</div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  No-code workflows, custom taxonomies, and business rules without code.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-2xl font-extrabold text-[#14532D] font-mono">Compliant</div>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Pre-mapped controls for Part 11, Annex 11, ISO 9001/13485 & HIPAA.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Transformation Detailed Matrix */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#14532D]">
              The Operational Transformation
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Brochure documented comparison: Traditional manual document practices vs. SmartiDP EDMS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRANSFORMATION_ITEMS.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#14532D]/30 transition-all shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14532D] mb-3 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span>{item.dimension}</span>
                    <span className="text-[10px] text-slate-400 font-mono">0{index + 1}</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-600">
                      <div className="font-semibold text-slate-800 mb-1 flex items-center gap-1.5">
                        <FileWarning className="h-3.5 w-3.5 text-amber-600" />
                        <span>Before:</span>
                      </div>
                      {item.before}
                    </div>

                    <div className="p-3 rounded-xl bg-[#E8F3EC] border border-[#14532D]/15 text-slate-800">
                      <div className="font-semibold text-[#14532D] mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#14532D]" />
                        <span>With SmartiDP EDMS:</span>
                      </div>
                      {item.withSmartIDP}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7-Step Implementation Methodology from Brochure Page 19 */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#F5F7F5] border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F3EC] text-[#14532D] text-xs font-semibold mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>Proven Delivery Framework</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#14532D]">
              7-Step Implementation Methodology
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Structured rollout model designed to accelerate time-to-value while de-risking regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {IMPLEMENTATION_STEPS.map((s, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs text-left">
                <span className="text-xs font-mono font-bold text-[#14532D] bg-[#E8F3EC] px-2 py-0.5 rounded">
                  {s.step}
                </span>
                <h3 className="font-bold text-slate-900 text-sm mt-3 mb-1">{s.name}</h3>
                <p className="text-[11px] text-slate-600 leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence & Office Locations */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F3EC] text-[#14532D] text-xs font-semibold mb-3">
              <Building2 className="h-3.5 w-3.5" />
              <span>GLOBAL PRESENCE</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#14532D]">
              Our Global Offices
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Headquartered in Austin, Texas with our primary Offshore Development Center (ODC) in Hyderabad, India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Austin HQ */}
            <div className="p-8 rounded-3xl bg-[#F5F7F5] border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-[#14532D] bg-[#E8F3EC] px-3 py-1 rounded-md">
                  GLOBAL HEADQUARTERS
                </span>
                <span className="text-xs text-slate-500 font-mono">Austin, Texas, USA</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">SmartIDP Group Inc.</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                5900 Balcones Drive STE 13688<br />
                Austin, TX 78731, USA
              </p>
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <a href="mailto:info@smartidp.ai" className="text-[#14532D] font-bold hover:underline flex items-center gap-1.5">
                  <Mail className="h-4 w-4" />
                  <span>info@smartidp.ai</span>
                </a>
                <a href="tel:+918065904278" className="text-slate-700 font-semibold hover:text-[#14532D] flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-[#14532D]" />
                  <span>+91 8065904278</span>
                </a>
              </div>
            </div>

            {/* Hyderabad ODC */}
            <div className="p-8 rounded-3xl bg-[#F5F7F5] border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-[#14532D] bg-[#E8F3EC] px-3 py-1 rounded-md">
                  OFFSHORE DEVELOPMENT CENTER (ODC)
                </span>
                <span className="text-xs text-slate-500 font-mono">Hyderabad, India</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">SmartIDP India Operations</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                3rd Floor, Shriya Building, Mothi Nagar, Dwarakapuri,<br />
                Punjagutta, Hyderabad, Telangana 500082, India
              </p>
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-slate-500">Core R&D, Product Engineering & 24/7 GxP Support</span>
                <a href="tel:+918065904278" className="text-[#14532D] font-bold hover:underline flex items-center gap-1.5">
                  <Phone className="h-4 w-4" />
                  <span>+91 8065904278</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#14532D] text-white text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold">
            Ready to Partner with Kenz Innovations?
          </h2>
          <p className="text-emerald-100 text-sm max-w-xl mx-auto leading-relaxed">
            Our solution architects will review your information architecture, compliance obligations, and system integrations.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemoModal}
              className="px-8 py-3.5 rounded-xl bg-white text-[#14532D] font-bold text-sm shadow-md hover:bg-[#E8F3EC] transition-all cursor-pointer"
            >
              Request a Demonstration
            </button>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl bg-emerald-900 text-white font-semibold text-sm border border-emerald-700/60 hover:bg-emerald-950 transition-all"
            >
              Contact Our Enterprise Team
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
