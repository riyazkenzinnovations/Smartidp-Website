import React, { useState } from 'react'
import {
  Search,
  CheckCircle2,
  FileText,
  Clock,
  History,
  ShieldCheck,
  Star,
  Folder,
  CheckSquare,
  GitPullRequest,
  BookOpen,
  BarChart2,
  Settings,
  Eye,
  Globe,
  Inbox,
  Sparkles,
  ArrowRight
} from 'lucide-react'

const UX_PILLARS = [
  {
    icon: Search,
    title: 'Find in Seconds',
    desc: 'Type-ahead, faceted filters and AI-assisted semantic search across both full text and structured metadata.'
  },
  {
    icon: Eye,
    title: 'View Anything',
    desc: 'High-speed in-browser streaming viewer for 100+ file formats with inline redactions and review annotations.'
  },
  {
    icon: Inbox,
    title: 'Task-Centric Inbox',
    desc: 'All pending reviews, document sign-offs, and mandatory training attestations consolidated in one priority view.'
  },
  {
    icon: Globe,
    title: 'Accessible & Global',
    desc: 'WCAG 2.1 AA compliant interface with multilingual UI localisation and regional timezone handling.'
  }
]

export default function UserExperienceSection() {
  const [activeTab, setActiveTab] = useState('properties') // 'properties' | 'versions' | 'audit'

  return (
    <section id="user-experience" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-2">
            Intuitive User Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Designed for People, Loved by Power Users
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Adoption makes or breaks any EDMS. SmartiDP EDMS offers a clean, modern interface that feels familiar from day one — with the depth that document controllers and administrators need.
          </p>
        </div>

        {/* Browser Frame Simulation (Brochure Page 09 UI Mockup) */}
        <div className="mb-14 rounded-3xl bg-white border border-slate-300 shadow-2xl overflow-hidden">
          {/* Browser Address Bar */}
          <div className="px-5 py-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-400 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-400 inline-block" />
            </div>
            <div className="px-4 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-600 flex items-center gap-2 w-full max-w-lg justify-center shadow-2xs">
              <ShieldCheck className="h-3.5 w-3.5 text-[#14532D]" />
              <span>edms.yourcompany.com/documents/SOP-QA-0142</span>
            </div>
            <div className="text-[11px] font-mono text-slate-500 hidden sm:block">
              SmartiDP EDMS v4.2
            </div>
          </div>

          {/* Application Window Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
            
            {/* Left Navigation Sidebar (2 cols) */}
            <div className="lg:col-span-2 bg-slate-50/80 border-r border-slate-200 p-4 flex flex-col justify-between text-xs">
              <div className="space-y-4">
                <div className="flex items-center gap-2 px-2 py-1 font-bold text-slate-900">
                  <span className="h-2 w-2 rounded-full bg-[#14532D]" />
                  <span>SmartiDP EDMS</span>
                </div>

                <nav className="space-y-1">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-200/60 cursor-pointer">
                    <BarChart2 className="h-4 w-4" />
                    <span>Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#14532D] text-white font-semibold shadow-xs cursor-pointer">
                    <FileText className="h-4 w-4 text-white" />
                    <span>Documents</span>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-200/60 cursor-pointer">
                    <div className="flex items-center gap-2.5">
                      <CheckSquare className="h-4 w-4" />
                      <span>My tasks</span>
                    </div>
                    <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-[#14532D] text-[10px] font-bold">5</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-200/60 cursor-pointer">
                    <GitPullRequest className="h-4 w-4" />
                    <span>Workflows</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-200/60 cursor-pointer">
                    <Folder className="h-4 w-4" />
                    <span>Records</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-200/60 cursor-pointer">
                    <BookOpen className="h-4 w-4" />
                    <span>Training</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-200/60 cursor-pointer">
                    <BarChart2 className="h-4 w-4" />
                    <span>Reports</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-200/60 cursor-pointer">
                    <Settings className="h-4 w-4" />
                    <span>Admin</span>
                  </div>
                </nav>

                <div className="pt-3 border-t border-slate-200">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                    Favourites
                  </div>
                  <div className="space-y-1 text-slate-600">
                    <div className="flex items-center gap-2 px-2 py-1 hover:text-[#14532D] cursor-pointer truncate">
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500 shrink-0" />
                      <span className="truncate">Quality Manual</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 hover:text-[#14532D] cursor-pointer truncate">
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500 shrink-0" />
                      <span className="truncate">Supplier contracts</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 hover:text-[#14532D] cursor-pointer truncate">
                      <Star className="h-3 w-3 text-amber-500 fill-amber-500 shrink-0" />
                      <span className="truncate">HR policies</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Role:</span> QA Manager
              </div>
            </div>

            {/* Center Main Document Viewing Area (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-r border-slate-200">
              <div>
                {/* Search & Actions Bar */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-6 border-b border-slate-200 mb-6">
                  <div className="relative flex-1">
                    <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      readOnly
                      value='Search "deviation handling" across content and metadata…'
                      className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 font-medium focus:outline-hidden"
                    />
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-xl bg-[#14532D] text-white text-xs font-bold hover:bg-[#064E3B] transition-colors shadow-xs shrink-0 cursor-pointer"
                  >
                    Start workflow
                  </button>
                </div>

                {/* Document Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      SOP-QA-0142 · Deviation Handling
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Standard Operating Procedure · Quality Assurance System
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#14532D] font-bold text-xs font-mono shrink-0 border border-emerald-200">
                    Effective v4.0
                  </span>
                </div>

                {/* E-Signature Banner */}
                <div className="p-3.5 rounded-xl bg-[#F0FDF4] border border-[#14532D]/20 text-[#14532D] text-xs font-medium flex items-center gap-2 mb-6 shadow-2xs">
                  <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0" />
                  <span>
                    ✓ Approved by Example Approver · QA Head · 2026-03-14 09:42 UTC · <strong>Meaning: Approval</strong>
                  </span>
                </div>

                {/* Document Body Content Mockup */}
                <div className="space-y-4 text-xs text-slate-700 leading-relaxed font-sans bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">1.0 Purpose</h4>
                    <p className="text-slate-600">
                      This Standard Operating Procedure governs the systematic identification, triage, root-cause investigation, and CAPA escalation of deviations arising during commercial pharmaceutical packaging, sterile fill-finish, and cold-chain distribution.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">2.0 Scope</h4>
                    <p className="text-slate-600">
                      All non-conformances must be classified within 2 hours of detection into Minor (no product impact), Major (process parameter deviation within validation limits), or Critical (sterility breach or potency excursion requiring QA quarantine).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">3.0 Responsibilities</h4>
                    <p className="text-slate-600">
                      Per 21 CFR Part 11 and EU GMP Annex 11, automated re-qualification workflows trigger at Day 660 with mandatory electronic read-and-acknowledge assigned to 142 certified operators.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>SHA-256: 8bfa2b109e44bc...</span>
                <span>Watermark: Controlled Copy #419</span>
              </div>
            </div>

            {/* Right Properties & Audit Sidebar (3 cols) */}
            <div className="lg:col-span-3 bg-white p-5 flex flex-col justify-between text-xs">
              <div>
                {/* Tabs */}
                <div className="flex border-b border-slate-200 mb-4 pb-1">
                  <button
                    onClick={() => setActiveTab('properties')}
                    className={`flex-1 py-1 text-center font-bold text-xs transition-colors cursor-pointer ${
                      activeTab === 'properties' ? 'text-[#14532D] border-b-2 border-[#14532D]' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Properties
                  </button>
                  <button
                    onClick={() => setActiveTab('versions')}
                    className={`flex-1 py-1 text-center font-bold text-xs transition-colors cursor-pointer ${
                      activeTab === 'versions' ? 'text-[#14532D] border-b-2 border-[#14532D]' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Versions
                  </button>
                  <button
                    onClick={() => setActiveTab('audit')}
                    className={`flex-1 py-1 text-center font-bold text-xs transition-colors cursor-pointer ${
                      activeTab === 'audit' ? 'text-[#14532D] border-b-2 border-[#14532D]' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Audit Trail
                  </button>
                </div>

                {/* Tab 1: Properties */}
                {activeTab === 'properties' && (
                  <div className="space-y-3">
                    <div className="py-1 border-b border-slate-100">
                      <span className="text-[10px] text-slate-500 font-medium block">Type</span>
                      <span className="font-semibold text-slate-800">Standard Operating Procedure</span>
                    </div>
                    <div className="py-1 border-b border-slate-100">
                      <span className="text-[10px] text-slate-500 font-medium block">Owner</span>
                      <span className="font-semibold text-slate-800">Quality Assurance</span>
                    </div>
                    <div className="py-1 border-b border-slate-100">
                      <span className="text-[10px] text-slate-500 font-medium block">Site</span>
                      <span className="font-semibold text-slate-800">All sites</span>
                    </div>
                    <div className="py-1 border-b border-slate-100">
                      <span className="text-[10px] text-slate-500 font-medium block">Next review</span>
                      <span className="font-semibold text-slate-800 font-mono">2028-03-14</span>
                    </div>
                    <div className="py-1 border-b border-slate-100">
                      <span className="text-[10px] text-slate-500 font-medium block">Classification</span>
                      <span className="font-semibold text-slate-800">Internal Restricted</span>
                    </div>
                  </div>
                )}

                {/* Tab 2: Version History */}
                {activeTab === 'versions' && (
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
                      <div className="flex items-center justify-between font-bold text-slate-900">
                        <span>v4.0</span>
                        <span className="text-[10px] text-[#14532D] font-mono">Current</span>
                      </div>
                      <span className="text-[10px] text-emerald-700 block mt-0.5">Effective · Signed</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-600">
                      <div className="flex items-center justify-between font-semibold">
                        <span>v3.1</span>
                        <span className="text-[10px] text-slate-400 font-mono">Archived</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-0.5">Superseded</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-600">
                      <div className="flex items-center justify-between font-semibold">
                        <span>v3.0</span>
                        <span className="text-[10px] text-slate-400 font-mono">Archived</span>
                      </div>
                      <span className="text-[10px] text-slate-500 block mt-0.5">Superseded</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Audit Trail */}
                {activeTab === 'audit' && (
                  <div className="space-y-2.5 font-mono text-[11px]">
                    <div className="pl-3 border-l-2 border-[#14532D]">
                      <div className="text-[#14532D] font-bold">09:42 · Approved</div>
                      <div className="text-slate-500 text-[10px]">e-signature applied</div>
                    </div>
                    <div className="pl-3 border-l-2 border-slate-300">
                      <div className="text-slate-800 font-semibold">09:15 · Review completed</div>
                      <div className="text-slate-500 text-[10px]">3/3 stakeholders</div>
                    </div>
                    <div className="pl-3 border-l-2 border-slate-300">
                      <div className="text-slate-800 font-semibold">08:02 · Comment resolved</div>
                      <div className="text-slate-500 text-[10px]">Sec 2.0 triage clause</div>
                    </div>
                    <div className="pl-3 border-l-2 border-slate-300">
                      <div className="text-slate-800 font-semibold">Yesterday · Submitted</div>
                      <div className="text-slate-500 text-[10px]">Author initiated change</div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 text-[10px] text-slate-500 italic">
                Illustrative product interface. Sample data shown.
              </div>
            </div>

          </div>
        </div>

        {/* 4 Core UX Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {UX_PILLARS.map((p, i) => {
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

        {/* Highlight Quote Banner */}
        <div className="p-6 rounded-2xl bg-white border border-[#14532D]/20 text-center shadow-xs">
          <p className="text-sm sm:text-base font-medium text-slate-800 italic">
            "Role-based home pages give every user exactly what they need — and nothing they don't."
          </p>
        </div>

      </div>
    </section>
  )
}

