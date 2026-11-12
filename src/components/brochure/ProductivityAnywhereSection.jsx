import React, { useState } from 'react'
import {
  Laptop,
  Users,
  Smartphone,
  Share2,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileCheck2,
  Check,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Mail
} from 'lucide-react'

const PRODUCTIVITY_FEATURES = [
  {
    icon: Laptop,
    title: 'Microsoft 365 & Office',
    desc: 'Open, edit, save and check in from Word, Excel, PowerPoint and Outlook; file emails with one click.'
  },
  {
    icon: Users,
    title: 'Real-Time Collaboration',
    desc: 'Co-authoring, threaded comments, @mentions and review annotations — all captured with the record.'
  },
  {
    icon: Smartphone,
    title: 'Mobile & Offline',
    desc: 'Responsive web and mobile apps for search, viewing, approvals and e-signatures on the go.'
  },
  {
    icon: Share2,
    title: 'Secure External Sharing',
    desc: 'Share with partners, suppliers and regulators via expiring, watermarked, audit-tracked links.'
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Reports',
    desc: 'Role-based dashboards and scheduled reports for managers, QA and enterprise executives.'
  },
  {
    icon: Sparkles,
    title: 'AI Assistant',
    desc: 'Summarise documents, compare versions and ask questions across permitted content in natural language.'
  }
]

export default function ProductivityAnywhereSection({ onOpenDemoModal }) {
  const [tasks, setTasks] = useState([
    {
      id: 'CTR-2026-118',
      title: 'Supplier MSA',
      dept: 'Legal',
      due: 'due today',
      status: 'pending',
      action1: 'Approve',
      action2: 'Review'
    },
    {
      id: 'WI-PRD-0031',
      title: 'Line clearance',
      dept: 'Production',
      due: 'due tomorrow',
      status: 'pending',
      action1: 'Approve',
      action2: 'Review'
    },
    {
      id: 'POL-HR-007',
      title: 'Remote work',
      dept: 'HR',
      due: 'read & acknowledge',
      status: 'pending',
      action1: 'Sign',
      action2: 'Open'
    }
  ])

  const handleAction = (idx, actionName) => {
    setTasks(prev => prev.map((t, i) => i === idx ? { ...t, status: 'completed', completedAction: actionName } : t))
  }

  return (
    <section id="productivity-anywhere" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-2">
            Productivity & Mobility
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Work Where You Are — Desktop, Office, Mobile
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Bring governed document management into the tools people already use every day, and let decision-makers act from anywhere without compromising control.
          </p>
        </div>

        {/* Dual Interactive Modules: Compliance Dashboard & My Approvals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Executive Compliance Dashboard (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div>
                  <span className="text-xs font-bold font-mono text-[#14532D] uppercase tracking-wider">
                    Executive Compliance Dashboard
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    Real-Time Operational Visibility & Metrics
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F0FDF4] text-[#14532D] text-xs font-bold border border-[#14532D]/20">
                  Q1 Live
                </span>
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-2xl font-bold font-mono text-slate-900">412</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Docs released (Q1)</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-2xl font-bold font-mono text-[#14532D]">3.4 d</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Avg. approval time</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-2xl font-bold font-mono text-emerald-700">96%</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">On-time reviews</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-2xl font-bold font-mono text-amber-700">2</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Open audit items</div>
                </div>
              </div>

              {/* Department Cycle Times & Training Compliance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900 mb-3">
                    Approval Cycle Time by Department
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-600">QA</span>
                        <span className="font-mono font-bold text-slate-900">2.8 d</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#14532D] rounded-full" style={{ width: '65%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-600">Regulatory</span>
                        <span className="font-mono font-bold text-slate-900">3.1 d</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#14532D] rounded-full" style={{ width: '75%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-600">Finance</span>
                        <span className="font-mono font-bold text-slate-900">1.9 d</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 rounded-full" style={{ width: '45%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-600">HR</span>
                        <span className="font-mono font-bold text-slate-900">1.4 d</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '32%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900 mb-1">
                      Training Compliance Rate
                    </div>
                    <p className="text-[11px] text-slate-500 leading-tight mb-3">
                      Mandatory read-and-acknowledge completion across all active operational procedures.
                    </p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-extrabold font-mono text-[#14532D]">94%</span>
                      <span className="text-xs text-emerald-700 font-semibold flex items-center gap-0.5">
                        <TrendingUp className="h-3 w-3" /> +6% this quarter
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#14532D] rounded-full" style={{ width: '94%' }} />
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono pt-3 border-t border-slate-100 mt-3">
                    Target SLA: 90% in 14 days
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 mt-4 flex items-center justify-between text-xs text-slate-500">
              <span>Automated roll-up across all sites</span>
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="text-[#14532D] font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Export Audit Metrics</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: My Approvals Widget (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div>
                  <span className="text-xs font-bold font-mono text-[#14532D] uppercase tracking-wider">
                    My Approvals
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {tasks.filter(t => t.status === 'pending').length} tasks awaiting you
                  </h3>
                </div>
                <div className="h-8 w-8 rounded-xl bg-[#F0FDF4] text-[#14532D] font-mono font-bold text-xs flex items-center justify-center border border-[#14532D]/20">
                  {tasks.filter(t => t.status === 'pending').length}
                </div>
              </div>

              {/* Task Cards */}
              <div className="space-y-3">
                {tasks.map((task, idx) => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      task.status === 'completed'
                        ? 'bg-emerald-50/60 border-emerald-200/80 text-slate-500'
                        : 'bg-slate-50/70 border-slate-200 hover:border-[#14532D]/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-slate-900">{task.id}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200 font-medium">
                            {task.dept}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-slate-800 mt-0.5">{task.title}</div>
                      </div>
                      <span className="text-[10px] text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0">
                        {task.due}
                      </span>
                    </div>

                    {task.status === 'completed' ? (
                      <div className="text-[11px] text-[#14532D] font-bold flex items-center gap-1.5 pt-2 border-t border-emerald-200/60">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>Action Recorded ({task.completedAction}) · Audit log stamped</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 pt-2 border-t border-slate-200/80">
                        <button
                          type="button"
                          onClick={() => handleAction(idx, task.action1)}
                          className="px-3.5 py-1.5 rounded-lg bg-[#14532D] text-white text-xs font-bold hover:bg-[#064E3B] transition-colors shadow-2xs cursor-pointer"
                        >
                          {task.action1}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAction(idx, task.action2)}
                          className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          {task.action2}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 mt-6 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#14532D] shrink-0" />
              <span>Biometric & MFA authentication triggered upon execution.</span>
            </div>
          </div>

        </div>

        {/* 6 Productivity Capabilities Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              Work Anywhere Without Sacrificing Control
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Deep native integrations keeping enterprise users in flow across their favorite platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTIVITY_FEATURES.map((feat, i) => {
              const Icon = feat.icon
              return (
                <div key={i} className="p-6 rounded-2xl glass-card-green flex flex-col justify-between group">
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/20 shadow-2xs group-hover:bg-[#14532D] group-hover:text-white transition-colors mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#14532D] transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

