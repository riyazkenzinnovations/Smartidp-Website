import React, { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  FileCheck2,
  Lock,
  ArrowRight,
  FileText,
  History,
  FileSignature,
  FolderOpen,
  Share2,
  Star,
  Wrench,
  Cpu,
  Activity,
  ScanText
} from 'lucide-react'

import RequestDemoButton from '../components/RequestDemoButton'
import dashboard1Img from '../assets/Dashboard_1.png'
import dashboard2Img from '../assets/Dashboard_2.png'
import dashboard3Img from '../assets/Dashboard_3.png'
import myTasksImg from '../assets/My_Tasks.png'
import centralRepoImg from '../assets/Central_repository.png'
import allDocsImg from '../assets/All_Documents.png'
import sharedByMe1Img from '../assets/Shared_by_me_1.png'
import sharedByMe2Img from '../assets/Shared_by_me_2.png'
import sharedByMe3Img from '../assets/Shared_by_me_3.png'
import sharedByMe4Img from '../assets/Shared_by_me_4.png'
import favourites1Img from '../assets/Favourites_1.png'
import favourites2Img from '../assets/Favourites_2.png'
import pdfToolkitImg from '../assets/PDF_Toolkit.png'
import signature1Img from '../assets/Signature_1.png'
import processDocsImg from '../assets/Process_Documents.png'
import workflowMonitorImg from '../assets/Workflow_monitor.png'
import docCaptureImg from '../assets/Document_capoture.png'
import auditTrailImg from '../assets/Audit_trail.png'

import workspace1Img from '../assets/My_Workspace_1.png'
import workspace2Img from '../assets/My_Workspace_2.png'
import workspace3Img from '../assets/My_Workspace_3.png'
import workspace4Img from '../assets/My_Workspace_4.png'
import workspace5Img from '../assets/My_Workspace_5.png'
import workspace6Img from '../assets/My_Workspace_6.png'
import workspace7Img from '../assets/My_Workspace_7.png'

// Top Level Dashboards
const DASHBOARD_SCREENS = [
  {
    id: 'dashboard-1',
    num: '01',
    title: 'Executive Overview & Key Metrics',
    shortTitle: 'Overview & KPIs',
    badge: 'Operational Console',
    desc: 'Real-time document counts, storage utilization, pending approvals, queue status, and quick access to repository assets.',
    image: dashboard1Img,
    highlights: [
      { label: 'Corpus Volume', value: '136 Documents' },
      { label: 'Storage Used', value: '24.2 MB' },
      { label: 'Approval Rate', value: '100% Approved' },
      { label: 'Active Users', value: '7 Accounts (30d)' }
    ]
  },
  {
    id: 'dashboard-2',
    num: '02',
    title: 'Analytics & Lifecycle Status',
    shortTitle: 'Lifecycle & Analytics',
    badge: 'Operational Intelligence',
    desc: 'Live 30-day document ingestion curves, daily system audit events, lifecycle status breakdown, and document classification mix.',
    image: dashboard2Img,
    highlights: [
      { label: 'Monthly Ingestion', value: '+136 Documents' },
      { label: 'System Audits', value: '1,660 Events/Week' },
      { label: 'Primary Category', value: 'Standard Operating Procedures' },
      { label: 'Sensitivity Mix', value: 'Internal, Public & Confidential' }
    ]
  },
  {
    id: 'dashboard-3',
    num: '03',
    title: 'Repository Coverage & Security Signals',
    shortTitle: 'Governance & Signals',
    badge: 'Security & Compliance',
    desc: 'Publication funnel throughput, departmental repository coverage, corpus health indicators, and proactive security anomaly alerts.',
    image: dashboard3Img,
    highlights: [
      { label: 'Approval Funnel', value: '100% Previous to Live' },
      { label: 'Corpus Health', value: '57% Categorised · 53% Filed' },
      { label: 'Top Contributor', value: '134 Managed Records' },
      { label: 'Anomaly Engine', value: 'Exfiltration & Off-Hour Alerts' }
    ]
  }
]

// My Workspace Lifecycle Journey (7 Comprehensive Screenshots)
const WORKSPACE_SCREENS = [
  {
    id: 'ws-1',
    num: '01',
    title: 'AI Document Intelligence & Ingestion',
    shortTitle: 'AI Assistant',
    badge: 'Neural Ingestion',
    desc: 'Ask questions, summarize key clauses, and execute quick actions including Online Editing, Check-In/Out locks, and multi-channel sharing directly from the workspace.',
    image: workspace1Img,
    highlights: [
      { label: 'AI Interaction', value: 'Natural Language "Ask Document"' },
      { label: 'Action Gate', value: 'Check-In / Out Concurrent Protection' },
      { label: 'Quick Enveloping', value: '1-Click Draft & Out for Signature' },
      { label: 'Status Tracking', value: 'Draft / Out For Signature Live State' }
    ]
  },
  {
    id: 'ws-2',
    num: '02',
    title: 'High-Fidelity Document Viewer & Semantic Links',
    shortTitle: 'Document Viewer',
    badge: 'In-Browser Discovery',
    desc: 'Render high-resolution PDF attestations and standard operating procedures with automatic semantic discovery of related documents across the compliance register.',
    image: workspace2Img,
    highlights: [
      { label: 'Viewer Engine', value: 'Universal In-Browser Rendition' },
      { label: 'Related Content', value: 'Semantic Vector Proximity Matches' },
      { label: 'Standard Mapping', value: 'Modern Slavery & ILO Conventions' },
      { label: 'Verification Seal', value: 'Official Compliance Audit Clearance' }
    ]
  },
  {
    id: 'ws-3',
    num: '03',
    title: 'Parametric Metadata & Governance Schema',
    shortTitle: 'Metadata & Properties',
    badge: 'Regulatory Governance',
    desc: 'Inspect granular document properties, department ownership, retention lifespan schedules, SOP identifiers, and GxP validation relevance flags.',
    image: workspace3Img,
    highlights: [
      { label: 'Controlled Schema', value: 'SOP Numbering (SOP-QA-0412)' },
      { label: 'Retention Rule', value: '10-Year Enforced (Nov 13, 2036)' },
      { label: 'Validation Flag', value: 'GxP Relevant: Enforced Strict Audit' },
      { label: 'Review Cadence', value: '24-Month Statutory Review Cycle' }
    ]
  },
  {
    id: 'ws-4',
    num: '04',
    title: 'Strict Version Control & Cryptographic Checksums',
    shortTitle: 'Versioning & Checksums',
    badge: 'Revision Integrity',
    desc: 'Maintain an immutable historical lineage of every major and minor version change with individual SHA-256 file checksums and author attribution.',
    image: workspace4Img,
    highlights: [
      { label: 'Version Lifecycle', value: 'Draft (0.1) to Effective (1.0)' },
      { label: 'Digest Binding', value: 'SHA-256 Checksum Verification' },
      { label: 'Change Traceability', value: 'Mandatory Change Summary Notes' },
      { label: 'Author Identity', value: 'Signed Attribution per Iteration' }
    ]
  },
  {
    id: 'ws-5',
    num: '05',
    title: 'Forensic Audit Trail & Chain of Custody',
    shortTitle: 'Immutable Audit Trail',
    badge: '21 CFR Part 11 Compliant',
    desc: 'Tamper-proof append-only ledger capturing every view, download, edit, and access event with UTC timestamps, client IP addresses, and cryptographic sequence IDs.',
    image: workspace5Img,
    highlights: [
      { label: 'Audit Security', value: 'Hash-Chained; Entries Cannot Be Altered' },
      { label: 'Capture Scope', value: '100% Views, Downloads, Opens & Edits' },
      { label: 'Forensic Telemetry', value: 'UTC Timestamp, IP & Sequence Number' },
      { label: 'Regulatory Ready', value: 'Pre-mapped to Part 11 & EU Annex 11' }
    ]
  },
  {
    id: 'ws-6',
    num: '06',
    title: 'New Envelope Preparation & Multi-File Packaging',
    shortTitle: 'Envelope Packaging',
    badge: 'E-Sign Orchestration',
    desc: 'Package multiple PDFs, Word documents, Excel workbooks, and PowerPoint decks into single unified envelopes with recipient designation and field placement.',
    image: workspace6Img,
    highlights: [
      { label: 'Multi-Format Ingest', value: 'Auto-converts Office Files to PDF' },
      { label: 'Batch Bundling', value: 'Vendor SLAs, Security Scorecards & Risk' },
      { label: 'Subject & Note', value: 'Configurable Recipient Instructions' },
      { label: 'Field Placement', value: 'Visual Signature & Initials Mapping' }
    ]
  },
  {
    id: 'ws-7',
    num: '07',
    title: 'Digital Signature Studio & Routing Order',
    shortTitle: 'Signatures Studio',
    badge: 'Legal Manifestation',
    desc: 'Drag-and-drop signing fields, define sequential routing rules or parallel sign-offs, and set automated expiration SLAs before dispatching envelopes.',
    image: workspace7Img,
    highlights: [
      { label: 'Routing Order', value: 'Enforce Sequential or Parallel Signing' },
      { label: 'Expiration SLA', value: 'Configurable Deadline (e.g. 30 Days)' },
      { label: 'Recipient Gates', value: 'Two-Component Authentication Binding' },
      { label: 'Dispatch Seal', value: 'Cryptographic SHA-256 Intent Signature' }
    ]
  }
]

// Shared by Me Governance & Collaboration Suite (4 Comprehensive Screenshots)
const SHARED_BY_ME_SCREENS = [
  {
    id: 'shared-1',
    num: '01',
    title: 'Outgoing Shared Assets & Live Distribution Register',
    shortTitle: 'Active Shares',
    badge: 'Distribution Control',
    desc: 'Centralized registry of every document, folder, and package shared with internal colleagues and external stakeholders with real-time delivery status.',
    image: sharedByMe1Img,
    highlights: [
      { label: 'Asset Scope', value: 'Individual Files & Bulk Folders' },
      { label: 'Recipient Matrix', value: 'Internal Users & External Guests' },
      { label: 'Link State', value: 'Active Governed Tokenized URLs' },
      { label: 'Access Summary', value: 'Real-Time Engagement Counters' }
    ]
  },
  {
    id: 'shared-2',
    num: '02',
    title: 'Granular Sharing Permissions & Security Policies',
    shortTitle: 'Permission Rules',
    badge: 'Access Governance',
    desc: 'Fine-tune document privileges with view-only watermarking, download restrictions, password challenges, and strict corporate domain whitelisting.',
    image: sharedByMe2Img,
    highlights: [
      { label: 'Permission Modes', value: 'Can View, Can Comment, Can Edit' },
      { label: 'Exfiltration Shield', value: 'Dynamic Watermark & Print Lock' },
      { label: 'Password Gate', value: 'Two-Factor Passcode Protection' },
      { label: 'Domain Fence', value: 'Restricted to Verified Domains' }
    ]
  },
  {
    id: 'shared-3',
    num: '03',
    title: 'Recipient Engagement Telemetry & Access Tracking',
    shortTitle: 'Access Telemetry',
    badge: 'Live Audit Log',
    desc: 'Monitor recipient interaction in real time—viewing timestamps, verified recipient emails, client IP addresses, geolocations, and download activity.',
    image: sharedByMe3Img,
    highlights: [
      { label: 'Open Telemetry', value: 'Timestamped First & Last Opens' },
      { label: 'Download Log', value: 'Cryptographic Event Record' },
      { label: 'Identity Verification', value: 'SSO & OTP Confirmed Identities' },
      { label: 'Geo & IP Trace', value: 'Forensic Client Attribution' }
    ]
  },
  {
    id: 'shared-4',
    num: '04',
    title: 'Automated Expiration SLAs & Instant Revocation',
    shortTitle: 'Link Revocation & SLAs',
    badge: 'Lifecycle Expiration',
    desc: 'Enforce statutory link expirations, schedule automatic deactivation, or execute one-click emergency link revocations with immediate session termination.',
    image: sharedByMe4Img,
    highlights: [
      { label: 'Link Expiry SLA', value: 'Time-Bound Automatic Expiration' },
      { label: 'Kill Switch', value: '1-Click Instant Share Revocation' },
      { label: 'Session Purge', value: 'Terminates Active External Sessions' },
      { label: 'Compliance Audit', value: 'Immutable Append-Only Revocation Log' }
    ]
  }
]

// Favourites & Quick Access Workspace (2 Comprehensive Screenshots)
const FAVOURITES_SCREENS = [
  {
    id: 'fav-1',
    num: '01',
    title: 'Pinned Documents & High-Frequency Assets',
    shortTitle: 'Starred Documents',
    badge: 'Zero-Click Access',
    desc: 'Instant bookmarking for essential regulatory records, critical SOPs, and frequently consulted governance materials with one-click opening.',
    image: favourites1Img,
    highlights: [
      { label: 'Access Latency', value: 'Instant Zero-Click Retrieval' },
      { label: 'Asset Types', value: 'SOPs, Policies, Contracts & Audits' },
      { label: 'Live Badges', value: 'Effective / In-Review Status' },
      { label: 'User Customization', value: 'Personal Priority Pinning' }
    ]
  },
  {
    id: 'fav-2',
    num: '02',
    title: 'Bookmarked Folders & Priority Collections',
    shortTitle: 'Favorite Collections',
    badge: 'Organized Shortcuts',
    desc: 'Curate dynamic personal collections and pinned department directories for streamlined daily operations and multi-document workflows.',
    image: favourites2Img,
    highlights: [
      { label: 'Collection Scope', value: 'Departmental & Shared Folders' },
      { label: 'Hierarchy Preservation', value: 'Direct Deep-Tree Navigation' },
      { label: 'Fast Sync', value: 'Auto-Updated with Repository Changes' },
      { label: 'Productivity Lift', value: 'Reduces Search Overhead by 80%' }
    ]
  }
]

export default function FeaturesPage({ onOpenDemoModal }) {
  const [currentDashboardIndex, setCurrentDashboardIndex] = useState(0)
  const [currentWorkspaceIndex, setCurrentWorkspaceIndex] = useState(0)
  const [currentSharedIndex, setCurrentSharedIndex] = useState(0)
  const [currentFavouritesIndex, setCurrentFavouritesIndex] = useState(0)

  const activeDashboard = DASHBOARD_SCREENS[currentDashboardIndex]
  const activeWorkspace = WORKSPACE_SCREENS[currentWorkspaceIndex]
  const activeShared = SHARED_BY_ME_SCREENS[currentSharedIndex]
  const activeFavourites = FAVOURITES_SCREENS[currentFavouritesIndex]

  const handleDashboardPrev = () => {
    setCurrentDashboardIndex((prev) => (prev === 0 ? DASHBOARD_SCREENS.length - 1 : prev - 1))
  }

  const handleDashboardNext = () => {
    setCurrentDashboardIndex((prev) => (prev === DASHBOARD_SCREENS.length - 1 ? 0 : prev + 1))
  }

  const handleWorkspacePrev = () => {
    setCurrentWorkspaceIndex((prev) => (prev === 0 ? WORKSPACE_SCREENS.length - 1 : prev - 1))
  }

  const handleWorkspaceNext = () => {
    setCurrentWorkspaceIndex((prev) => (prev === WORKSPACE_SCREENS.length - 1 ? 0 : prev + 1))
  }

  const handleSharedPrev = () => {
    setCurrentSharedIndex((prev) => (prev === 0 ? SHARED_BY_ME_SCREENS.length - 1 : prev - 1))
  }

  const handleSharedNext = () => {
    setCurrentSharedIndex((prev) => (prev === SHARED_BY_ME_SCREENS.length - 1 ? 0 : prev + 1))
  }

  const handleFavouritesPrev = () => {
    setCurrentFavouritesIndex((prev) => (prev === 0 ? FAVOURITES_SCREENS.length - 1 : prev - 1))
  }

  const handleFavouritesNext = () => {
    setCurrentFavouritesIndex((prev) => (prev === FAVOURITES_SCREENS.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HEADER & INTRO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-8 sm:pt-16 sm:pb-10 overflow-hidden bg-gradient-to-b from-[#F0FDF4]/60 via-white to-white border-b border-slate-200/80">
        
        {/* Ambient emerald blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 pointer-events-none overflow-hidden opacity-60">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-emerald-200/40 via-teal-100/30 to-sky-100/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          
          {/* Eyebrow badge with live ping */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#14532D]/20 shadow-2xs backdrop-blur-md mb-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#14532D]">
              Platform Interface · Live System Screenshots
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
            SmartiDP EDMS{' '}
            <span className="text-[#14532D]">
              Dashboard
            </span>
          </h1>

          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Unified document management across all companies at a glance — real-time operational telemetry, approval queues, and compliance monitoring.
          </p>

          {/* Interactive Tab Switcher */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-fit mx-auto">
            {DASHBOARD_SCREENS.map((screen, idx) => {
              const isActive = currentDashboardIndex === idx
              return (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => setCurrentDashboardIndex(idx)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#14532D] text-white shadow-md shadow-emerald-950/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <span>{screen.shortTitle}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {screen.num}
                  </span>
                </button>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. DASHBOARD IMAGE VIEWER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-12 bg-slate-50/50">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="relative max-w-6xl mx-auto">
            
            {/* Ambient radial glow behind frame */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />

            {/* Main Image Container */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5">
              
              <img
                key={activeDashboard.id}
                src={activeDashboard.image}
                alt={activeDashboard.title}
                className="w-full h-auto block select-none transition-opacity duration-300"
                loading="eager"
              />

              {/* Prev / Next Floating Navigation Controls */}
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <button
                  type="button"
                  onClick={handleDashboardPrev}
                  className="pointer-events-auto h-11 w-11 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  title="Previous Dashboard"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <button
                  type="button"
                  onClick={handleDashboardNext}
                  className="pointer-events-auto h-11 w-11 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  title="Next Dashboard"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

            </div>

            {/* Active Dashboard Details & Highlights Card */}
            <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-white bg-[#14532D] px-2.5 py-0.5 rounded">
                      SCREEN {activeDashboard.num}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {activeDashboard.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Showing {currentDashboardIndex + 1} of {DASHBOARD_SCREENS.length}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {activeDashboard.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl font-normal leading-relaxed">
                    {activeDashboard.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleDashboardPrev}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleDashboardNext}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#14532D] hover:bg-[#166534] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 4 Feature Telemetry Chips for this Screen */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {activeDashboard.highlights.map((h, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {h.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 mt-1 truncate" title={h.value}>
                      {h.value}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. DEDICATED SECTION: WORKFLOW TASKS & APPROVALS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              {/* Left Column: Context & Capabilities */}
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#14532D] text-white text-xs font-bold tracking-wide mb-4 shadow-sm">
                    <FileCheck2 className="h-3.5 w-3.5 text-emerald-200" />
                    <span>My Tasks & Approvals</span>
                    <span className="bg-white/20 text-white text-[11px] font-mono font-bold px-1.5 py-0.5 rounded">
                      04
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Seamless Task Orchestration &{' '}
                    <span className="text-[#14532D]">
                      Real-Time Approvals
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Eliminate bottlenecks with a unified task inbox. Track every electronic signature request, multi-stage approval, and lifecycle milestone in real time with cryptographic proof.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">21 CFR Part 11 Digital Signatures</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Instant alerts when copies are ready for compliant signing and automated counter-signing.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Multi-Party Workflow Progression</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Notifies stakeholders as soon as prior reviewers sign off, keeping processes on track.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Defensible Publication Milestones</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Immediate notifications when documents go live in compliance repositories or contracts finalize.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Schedule Workflow Demo
                  </RequestDemoButton>
                </div>
              </div>

              {/* Right Column: Expanded High-Res Screenshot Matching Full Section Height */}
              <div className="w-full lg:flex-1 flex items-stretch relative min-h-[440px] lg:min-h-[540px]">
                {/* Ambient glow */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full h-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group flex flex-col">
                  <img
                    src={myTasksImg}
                    alt="SmartiDP EDMS My Tasks & Approvals Center"
                    className="w-full h-full object-cover object-left-top block select-none transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. DEDICATED SECTION: MY WORKSPACE (DOCUMENT LIFECYCLE SUITE)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Ambient radial glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-br from-emerald-100/40 via-teal-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest shadow-2xs mb-4">
              <FileText className="h-3.5 w-3.5 text-[#14532D]" />
              <span>Document Lifecycle & Governance Suite</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              Full Document Lifecycle &{' '}
              <span className="text-[#14532D]">
                Governance Journey
              </span>
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              From initial AI question-answering and in-browser viewing to rigorous version trees, tamper-proof audit trails, and multi-party digital signatures.
            </p>

            {/* Interactive 7-Tab Switcher */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-fit mx-auto">
              {WORKSPACE_SCREENS.map((screen, idx) => {
                const isActive = currentWorkspaceIndex === idx
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setCurrentWorkspaceIndex(idx)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#14532D] text-white shadow-md shadow-emerald-950/20'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                  >
                    <span>{screen.shortTitle}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {screen.num}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Screenshot Showcase Container */}
          <div className="relative max-w-6xl mx-auto">
            
            {/* Ambient glow behind screenshot */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />

            {/* Image Card Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
              <img
                key={activeWorkspace.id}
                src={activeWorkspace.image}
                alt={activeWorkspace.title}
                className="w-full h-auto block select-none transition-opacity duration-300"
                loading="lazy"
              />

              {/* Prev / Next Floating Navigation Controls */}
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <button
                  type="button"
                  onClick={handleWorkspacePrev}
                  className="pointer-events-auto h-11 w-11 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  title="Previous Screen"
                  aria-label="Previous screen"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <button
                  type="button"
                  onClick={handleWorkspaceNext}
                  className="pointer-events-auto h-11 w-11 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  title="Next Screen"
                  aria-label="Next screen"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Active Screen Details & Highlights Card */}
            <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-white bg-[#14532D] px-2.5 py-0.5 rounded">
                      SCREEN {activeWorkspace.num}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {activeWorkspace.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Showing {currentWorkspaceIndex + 1} of {WORKSPACE_SCREENS.length}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {activeWorkspace.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl font-normal leading-relaxed">
                    {activeWorkspace.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleWorkspacePrev}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleWorkspaceNext}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#14532D] hover:bg-[#166534] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 4 Feature Telemetry Chips for this Screen */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {activeWorkspace.highlights.map((h, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {h.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 mt-1 truncate" title={h.value}>
                      {h.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action Row */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 font-medium">
                  Need custom retention schedules or validated 21 CFR Part 11 compliant audit archives?
                </p>
                <RequestDemoButton
                  onClick={onOpenDemoModal}
                  size="sm"
                >
                  Schedule Governance Demo
                </RequestDemoButton>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. DEDICATED SECTION: CENTRAL REPOSITORY (MASTER CONTROLLED REPOSITORY)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              {/* Left Column: Context & Capabilities */}
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4">
                    <Layers className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>Central Repository</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Master Controlled Repository &{' '}
                    <span className="text-[#14532D]">
                      Enterprise Knowledge
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Your single source of truth for all published, effective, and historical organizational assets. Governed by multi-tiered taxonomies, granular role-based access, and lifecycle retention schedules.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Multi-Tiered Hierarchical Taxonomies</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Organize millions of documents into structured departmental cabinets, dossiers, and controlled folders.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Effective Document Assurance</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Guarantees employees access only current effective versions, automatically archiving superseded drafts.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Cross-Company Governed Sharing</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Securely access shared records from partner entities with explicit sharing badges and permission trimming.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Explore Central Repository
                  </RequestDemoButton>
                </div>
              </div>

              {/* Right Column: Expanded High-Res Screenshot Matching Section Height */}
              <div className="w-full lg:flex-1 flex items-center relative">
                {/* Ambient glow */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={centralRepoImg}
                    alt="SmartiDP EDMS Central Repository & Published Master Documents"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. DEDICATED SECTION: ALL DOCUMENTS (UNIVERSAL EXPLORER & WORKING AREA)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              {/* Left Column: Context & Capabilities */}
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
                    <FolderOpen className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>All Documents</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Universal Working Area &{' '}
                    <span className="text-[#14532D]">
                      Document Explorer
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    The active working hub across your organization — managing every document throughout its lifecycle, including drafts, documents currently in review, and historical revisions.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Complete Working Area Visibility</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Track drafts, in-review change orders, SOPs, and public contracts with live lifecycle status badges.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Sub-10ms Full-Text & Metadata Search</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Instant discovery across document titles, custom metadata schemas, and deep OCR text passages.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Fast Ingestion & Document Creation</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Integrated "+ New Document" and "Add Document" pipeline for rapid drag-and-drop or batch ingestion.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Explore Document Management
                  </RequestDemoButton>
                </div>
              </div>

              {/* Right Column: Expanded High-Res Screenshot Matching Section Height */}
              <div className="w-full lg:flex-1 flex items-center relative">
                {/* Ambient glow */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={allDocsImg}
                    alt="SmartiDP EDMS All Documents Explorer & Working Area"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. DEDICATED SECTION: SHARED BY ME (COLLABORATION & ACCESS GOVERNANCE)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Ambient radial glow */}
        <div className="absolute top-0 left-1/3 w-[650px] h-[420px] bg-gradient-to-br from-emerald-100/40 via-teal-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest shadow-2xs mb-4">
              <Share2 className="h-3.5 w-3.5 text-[#14532D]" />
              <span>Shared by Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              Governed Collaboration &{' '}
              <span className="text-[#14532D]">
                Controlled Sharing
              </span>
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Manage active shares, assign precise permissions, monitor real-time recipient access, and enforce cryptographic security with instant revocation.
            </p>

            {/* Interactive 4-Tab Switcher */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-fit mx-auto">
              {SHARED_BY_ME_SCREENS.map((screen, idx) => {
                const isActive = currentSharedIndex === idx
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setCurrentSharedIndex(idx)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#14532D] text-white shadow-md shadow-emerald-950/20'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                  >
                    <span>{screen.shortTitle}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {screen.num}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Screenshot Showcase Container */}
          <div className="relative max-w-6xl mx-auto">
            
            {/* Ambient glow behind screenshot */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />

            {/* Image Card Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
              <img
                key={activeShared.id}
                src={activeShared.image}
                alt={activeShared.title}
                className="w-full h-auto block select-none transition-opacity duration-300"
                loading="lazy"
              />

              {/* Prev / Next Floating Navigation Controls */}
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <button
                  type="button"
                  onClick={handleSharedPrev}
                  className="pointer-events-auto h-11 w-11 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  title="Previous Screen"
                  aria-label="Previous screen"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <button
                  type="button"
                  onClick={handleSharedNext}
                  className="pointer-events-auto h-11 w-11 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  title="Next Screen"
                  aria-label="Next screen"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Active Screen Details & Highlights Card */}
            <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-white bg-[#14532D] px-2.5 py-0.5 rounded">
                      SCREEN {activeShared.num}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {activeShared.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Showing {currentSharedIndex + 1} of {SHARED_BY_ME_SCREENS.length}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {activeShared.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl font-normal leading-relaxed">
                    {activeShared.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSharedPrev}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleSharedNext}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#14532D] hover:bg-[#166534] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 4 Feature Telemetry Chips for this Screen */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {activeShared.highlights.map((h, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {h.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 mt-1 truncate" title={h.value}>
                      {h.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action Row */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 font-medium">
                  Looking for customized sharing policies, domain restrictions, or automated retention?
                </p>
                <RequestDemoButton
                  onClick={onOpenDemoModal}
                  size="sm"
                >
                  Schedule Collaboration Demo
                </RequestDemoButton>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. DEDICATED SECTION: FAVOURITES & BOOKMARKS (HIGH-FREQUENCY ASSETS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Ambient radial glow */}
        <div className="absolute top-0 right-1/3 w-[650px] h-[420px] bg-gradient-to-br from-amber-100/30 via-emerald-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest shadow-2xs mb-4">
              <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              <span>Favourites & Bookmarks</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              Instant Access to{' '}
              <span className="text-[#14532D]">
                High-Frequency Assets
              </span>
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Eliminate search overhead by bookmarking critical regulatory files, operational SOPs, active contracts, and priority folders for one-click access.
            </p>

            {/* Interactive 2-Tab Switcher */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-fit mx-auto">
              {FAVOURITES_SCREENS.map((screen, idx) => {
                const isActive = currentFavouritesIndex === idx
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setCurrentFavouritesIndex(idx)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#14532D] text-white shadow-md shadow-emerald-950/20'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                  >
                    <span>{screen.shortTitle}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {screen.num}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Screenshot Showcase Container */}
          <div className="relative max-w-6xl mx-auto">
            
            {/* Ambient glow behind screenshot */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />

            {/* Image Card Frame */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
              <img
                key={activeFavourites.id}
                src={activeFavourites.image}
                alt={activeFavourites.title}
                className="w-full h-auto block select-none transition-opacity duration-300"
                loading="lazy"
              />

              {/* Prev / Next Floating Navigation Controls */}
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <button
                  type="button"
                  onClick={handleFavouritesPrev}
                  className="pointer-events-auto h-11 w-11 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  title="Previous Screen"
                  aria-label="Previous screen"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <button
                  type="button"
                  onClick={handleFavouritesNext}
                  className="pointer-events-auto h-11 w-11 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  title="Next Screen"
                  aria-label="Next screen"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Active Screen Details & Highlights Card */}
            <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-md">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-white bg-[#14532D] px-2.5 py-0.5 rounded">
                      SCREEN {activeFavourites.num}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {activeFavourites.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Showing {currentFavouritesIndex + 1} of {FAVOURITES_SCREENS.length}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {activeFavourites.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl font-normal leading-relaxed">
                    {activeFavourites.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleFavouritesPrev}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleFavouritesNext}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#14532D] hover:bg-[#166534] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 4 Feature Telemetry Chips for this Screen */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {activeFavourites.highlights.map((h, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {h.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 mt-1 truncate" title={h.value}>
                      {h.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action Row */}
              <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500 font-medium">
                  Organize team-wide pinned libraries, critical compliance bookmarks, and rapid access hubs.
                </p>
                <RequestDemoButton
                  onClick={onOpenDemoModal}
                  size="sm"
                >
                  Schedule EDMS Demo
                </RequestDemoButton>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. DEDICATED SECTION: PDF TOOLKIT (ADVANCED UTILITY SUITE)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              {/* Left Column: Context & Capabilities */}
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4">
                    <Wrench className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>PDF Toolkit & Utility Suite</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Advanced PDF Transformation &{' '}
                    <span className="text-[#14532D]">
                      Utility Suite
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Powerful built-in PDF manipulation tools designed for enterprise compliance — merge dossiers, split high-volume packages, redact sensitive PII, stamp security watermarks, and convert records to immutable PDF/A archival standards.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Batch Merge & Dossier Assembly</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Combine multi-format files, regulatory reports, and attachments into a unified, indexed PDF package with automated table of contents.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Irreversible Cryptographic Redaction</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Permanently sanitize confidential PII, financial figures, and sensitive trade secrets prior to external publication.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">PDF/A Long-Term Archival Standards</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Convert active documents to ISO-compliant PDF/A-1b and PDF/A-2b specifications for 20+ year statutory retention.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Explore PDF Toolkit
                  </RequestDemoButton>
                </div>
              </div>

              {/* Right Column: Expanded High-Res Screenshot Matching Section Height */}
              <div className="w-full lg:flex-1 flex items-center relative">
                {/* Ambient glow */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={pdfToolkitImg}
                    alt="SmartiDP EDMS PDF Toolkit & Utility Suite"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. DEDICATED SECTION: DIGITAL SIGNATURES & E-SIGN ORCHESTRATION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              {/* Left Column: Context & Capabilities */}
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
                    <FileSignature className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>Digital Signatures & e-Sign</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Compliant e-Signatures &{' '}
                    <span className="text-[#14532D]">
                      Workflow Envelopes
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Accelerate agreement turnarounds with legally binding, regulation-ready digital signatures. Dispatch multi-document envelopes, define sequential or parallel signing hierarchies, and generate cryptographic audit certificates.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">21 CFR Part 11 & eIDAS Enforced</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Dual-component authentication, signature manifestation reasoning, and tamper-evident SHA-256 digital seals.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Multi-Party Envelope Routing</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Dispatch complex agreement packets to internal executives and external partners with automated sequential handoffs.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Forensic Certificate of Completion</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Append-only audit summaries detailing signee identity, IP geolocation, timestamp, and signature validity certificates.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Schedule e-Signature Demo
                  </RequestDemoButton>
                </div>
              </div>

              {/* Right Column: Expanded High-Res Screenshot Matching Section Height */}
              <div className="w-full lg:flex-1 flex items-center relative">
                {/* Ambient glow */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={signature1Img}
                    alt="SmartiDP EDMS Digital Signatures & e-Sign Envelopes"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. DEDICATED SECTION: PROCESS DOCUMENTS & AI INGESTION PIPELINE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              {/* Left Column: Context & Capabilities */}
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4">
                    <Cpu className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>Process Documents & AI Ingestion</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Automated Intake, OCR &{' '}
                    <span className="text-[#14532D]">
                      Intelligent Extraction
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Transform raw paper scans, batch PDFs, and multi-format files into structured, indexed, and compliant corporate records with multi-engine OCR, automated schema mapping, and human-in-the-loop exception handling.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Omnichannel Ingestion Pipelines</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Ingest documents via watched network folders, scanner APIs, email drops, and bulk drag-and-drop queues.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Sub-Second Multi-Engine OCR</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Extract textual fields, tables, barcodes, and parametric key-value pairs with confidence scoring and semantic validation.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Zero-Touch Auto-Classification & Filing</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Automatically routes classified records into appropriate departmental dossiers, applying metadata taxonomies without manual sorting.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Explore Document Processing
                  </RequestDemoButton>
                </div>
              </div>

              {/* Right Column: Expanded High-Res Screenshot Matching Section Height */}
              <div className="w-full lg:flex-1 flex items-center relative">
                {/* Ambient glow */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={processDocsImg}
                    alt="SmartiDP EDMS Process Documents & AI Ingestion Pipeline"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          12. DEDICATED SECTION: WORKFLOW MONITOR & PROCESS OBSERVABILITY
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              {/* Left Column: Context & Capabilities */}
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
                    <Activity className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>Workflow Monitor & Observability</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Real-Time Execution Tracking &{' '}
                    <span className="text-[#14532D]">
                      Process Observability
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Gain full operational transparency across your entire process landscape. Monitor active document routing, track SLA countdown timers, diagnose pipeline delays, and prevent governance bottlenecks in real time.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Live State & In-Flight Tracking</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Real-time status indicators on all executing approval flows, signature envelopes, and automated ingest jobs.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Predictive SLA & Bottleneck Detection</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Automated warnings before statutory review deadlines elapse, identifying stalled approvals and re-routing tasks.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">End-to-End Execution Lineage</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Comprehensive step-by-step audit logs capturing node transitions, reviewer actions, and timestamped process milestones.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Explore Workflow Monitor
                  </RequestDemoButton>
                </div>
              </div>

              {/* Right Column: Expanded High-Res Screenshot Matching Section Height */}
              <div className="w-full lg:flex-1 flex items-center relative">
                {/* Ambient glow */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={workflowMonitorImg}
                    alt="SmartiDP EDMS Workflow Monitor & Process Observability"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          13. DEDICATED SECTION: DOCUMENT CAPTURE & MULTI-SOURCE INTAKE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              {/* Left Column: Context & Capabilities */}
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4">
                    <ScanText className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>Document Capture & Intake</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    High-Speed Capture &{' '}
                    <span className="text-[#14532D]">
                      Batch Digitization
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Empower production scanning and digital intake from scanners, multi-function printers, mobile uploads, and watch folders with automated deskewing, barcode separator sheets, and image clean-up.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">TWAIN & ISIS Hardware Integration</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Direct hardware-accelerated scanning with automatic duplex detection and blank page removal.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Automated Batch Splitting & Barcoding</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Split high-volume scan runs using patch codes, 1D/2D barcodes, and fixed-page separators.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Adaptive Image Enhancement</h4>
                        <p className="text-xs text-slate-600 mt-0.5">AI deskew, despeckle, binarization, and border crop algorithms ensuring pristine OCR readiness.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Explore Document Capture
                  </RequestDemoButton>
                </div>
              </div>

              {/* Right Column: Expanded High-Res Screenshot Matching Section Height */}
              <div className="w-full lg:flex-1 flex items-center relative">
                {/* Ambient glow */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={docCaptureImg}
                    alt="SmartiDP EDMS Document Capture & Multi-Source Intake"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          14. DEDICATED SECTION: IMMUTABLE AUDIT TRAIL & COMPLIANCE LEDGER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              {/* Left Column: Context & Capabilities */}
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
                    <History className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>Forensic Audit Trail & Ledger</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Tamper-Proof Audit Trail &{' '}
                    <span className="text-[#14532D]">
                      Chain of Custody
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Meet the world’s most stringent regulatory mandates including 21 CFR Part 11, EU Annex 11, and HIPAA. SmartiDP EDMS records an immutable, time-stamped, append-only history of every file interaction across your enterprise.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">100% Granular Interaction Logging</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Tracks every document view, download, checkout, print attempt, permission change, and digital signature event.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Cryptographic Integrity & Sequence Ordering</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Hash-chained audit entries with sequential numbering ensure historical logs can never be altered or purged.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Forensic Attribution & Instant Export</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Inspect UTC timestamps, authorized user identities, client IP addresses, and export audit manifests in one click for regulators.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Explore Compliance Audit
                  </RequestDemoButton>
                </div>
              </div>

              {/* Right Column: Expanded High-Res Screenshot Matching Section Height */}
              <div className="w-full lg:flex-1 flex items-center relative">
                {/* Ambient glow */}
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={auditTrailImg}
                    alt="SmartiDP EDMS Forensic Audit Trail & Chain of Custody"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
