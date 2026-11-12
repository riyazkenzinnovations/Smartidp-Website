import React, { useState } from 'react'
import {
  GitBranch,
  FileSignature,
  Clock,
  ShieldAlert,
  Zap,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Layers,
  FileCheck2,
  Users
} from 'lucide-react'

const WORKFLOW_PILLARS = [
  {
    icon: GitBranch,
    title: 'Visual Designer',
    desc: 'Drag-and-drop modelling with serial, parallel and conditional routing — versioned and testable before release.'
  },
  {
    icon: FileSignature,
    title: 'Electronic Signatures',
    desc: '21 CFR Part 11 and eIDAS-aligned signing with re-authentication and signature meaning.'
  },
  {
    icon: Clock,
    title: 'SLAs & Escalation',
    desc: 'Due dates, reminders, delegation and automatic escalation keep work moving.'
  },
  {
    icon: ShieldAlert,
    title: 'Segregation of Duties',
    desc: 'Rules prevent authors approving their own work and enforce qualified approvers.'
  },
  {
    icon: Zap,
    title: 'Event-Driven Automation',
    desc: 'Trigger workflows from capture, metadata changes, dates or external system events.'
  },
  {
    icon: BarChart3,
    title: 'Process Analytics',
    desc: 'Track cycle times, bottlenecks and workload to continuously improve processes.'
  }
]

const READY_TEMPLATES = [
  { name: 'Document change control', category: 'GxP Quality' },
  { name: 'Periodic review', category: 'Compliance' },
  { name: 'Contract approval', category: 'Legal & Procurement' },
  { name: 'Invoice approval', category: 'Finance' },
  { name: 'Employee onboarding', category: 'HR & People' },
  { name: 'CAPA & deviation', category: 'GxP Quality' },
  { name: 'Policy attestation', category: 'Governance' },
  { name: 'Records disposition', category: 'ISO 15489' }
]

const BPMN_STEPS = [
  {
    role: 'Author',
    stage: 'Draft Change',
    badge: 'Step 1',
    desc: 'Author initiates change request, links target SOP, and drafts redline revision.',
    status: 'Complete'
  },
  {
    role: 'Author',
    stage: 'Assess Impact',
    badge: 'Step 2',
    desc: 'Regulatory, validation, and training impact matrix evaluated automatically.',
    status: 'Complete'
  },
  {
    role: 'Reviewers',
    stage: 'Parallel Review',
    badge: 'Step 3',
    desc: 'Multi-stakeholder concurrent review with check-in/out locks & inline comments.',
    status: 'In Progress'
  },
  {
    role: 'QA Approver',
    stage: 'Approve & E-Sign',
    badge: 'Step 4',
    desc: '21 CFR Part 11 re-authentication with cryptographically bound signature meaning.',
    status: 'Pending'
  },
  {
    role: 'System / Team',
    stage: 'Publish & Train Users',
    badge: 'Step 5',
    desc: 'Major version effective, obsolete revision archived, read-and-acknowledge assigned.',
    status: 'Scheduled'
  }
]

export default function WorkflowAutomationSection({ onOpenDemoModal }) {
  const [activeStep, setActiveStep] = useState(2)

  return (
    <section id="workflow-automation" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-2">
            Process Automation & BPMN 2.0
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Automate the Process, Not Just the Document
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            A visual, no-code workflow designer lets business owners model reviews, approvals and end-to-end processes — while the engine enforces sequence, segregation of duties and service levels.
          </p>
        </div>

        {/* BPMN 2.0 Change Process Flow Simulator */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
            <div>
              <span className="text-xs font-bold font-mono text-[#14532D] uppercase tracking-wider">
                Example: Controlled Document Change Process (BPMN 2.0)
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Regulated Lifecycle Routing with Segregation of Duties
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#F0FDF4] text-[#14532D] text-xs font-bold border border-[#14532D]/20">
                BPMN 2.0 Engine
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-semibold border border-slate-200">
                21 CFR Part 11 Aligned
              </span>
            </div>
          </div>

          {/* Stepper Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
            {BPMN_STEPS.map((s, idx) => {
              const isCurrent = idx === activeStep
              const isPast = idx < activeStep
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                    isCurrent
                      ? 'bg-[#14532D] text-white shadow-md border-transparent scale-102'
                      : isPast
                      ? 'bg-white text-slate-800 border-emerald-200/70 shadow-2xs hover:border-[#14532D]/40'
                      : 'bg-white/80 text-slate-600 border-slate-200 shadow-2xs hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        isCurrent
                          ? 'bg-white/20 text-white'
                          : isPast
                          ? 'bg-[#F0FDF4] text-[#14532D]'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {s.badge}
                    </span>
                    <span className={`text-[10px] font-medium ${isCurrent ? 'text-emerald-100' : 'text-slate-500'}`}>
                      {s.role}
                    </span>
                  </div>
                  <h4 className={`text-xs font-bold mb-1 ${isCurrent ? 'text-white' : 'text-slate-900'}`}>
                    {s.stage}
                  </h4>
                  <p className={`text-[11px] leading-tight ${isCurrent ? 'text-white/90' : 'text-slate-600'}`}>
                    {s.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Segregation of Duties & Decision Logic Note */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <ShieldAlert className="h-4 w-4 text-[#14532D] shrink-0" />
              <span className="text-slate-700">
                <strong>Active Rule Enforcement:</strong> Document author cannot approve their own change. Rework loops back to draft if review fails consensus threshold.
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] text-slate-500 font-mono">BPMN Status:</span>
              <span className="px-2 py-0.5 rounded bg-[#F0FDF4] text-[#14532D] font-bold font-mono text-[11px]">
                {BPMN_STEPS[activeStep].status}
              </span>
            </div>
          </div>
        </div>

        {/* 6 Core Capabilities Grid */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-semibold text-slate-900">
              Enterprise Workflow Capabilities
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Built-in governance mechanisms ensuring operational velocity without compliance exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFLOW_PILLARS.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={i} className="p-6 rounded-2xl glass-card-green flex flex-col justify-between group">
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/20 shadow-2xs group-hover:bg-[#14532D] group-hover:text-white transition-colors mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#14532D] transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Ready-to-Use Workflow Templates */}
        <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-1">
                Pre-Configured Catalogs
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Ready-to-Use Workflow Templates
              </h3>
            </div>
            <p className="text-xs text-slate-600 max-w-md">
              Deploy in hours with pre-built schema, validation rules, and approval hierarchies out of the box.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {READY_TEMPLATES.map((tmpl, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#14532D]/30 transition-all flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-slate-900">{tmpl.name}</div>
                  <div className="text-[10px] text-slate-500 font-medium">{tmpl.category}</div>
                </div>
                <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 ml-2" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

