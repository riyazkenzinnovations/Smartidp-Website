import React, { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  FolderTree,
  Tag,
  ScanText,
  Receipt,
  Network,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Database,
  Layers,
  Link2,
  Building2,
  GitFork,
  HardDrive,
  Users2,
  Lock,
  Server,
  Workflow,
  KeyRound,
  Share2,
  CalendarClock,
  FolderLock,
  Bot,
  Mail,
  MailCheck,
  Radio,
  FileCheck,
  Wrench,
  Activity
} from 'lucide-react'

import RequestDemoButton from '../components/RequestDemoButton'
import docCategoriesImg from '../assets/Document_Categories.png'
import classificationImg from '../assets/Classification.png'
import docCaptureTypesImg from '../assets/Document-Capure-Types.png'
import businessTransactionsImg from '../assets/Business_Transactions.png'
import erpIntegrationImg from '../assets/ERP_Intehration.png'
import companyRepo1Img from '../assets/Companies-Repositories1.png'
import companyRepo2Img from '../assets/Companies-Repositories2.png'
import repoHierarchy1Img from '../assets/Repository_Hierarchy_1.png'
import repoHierarchy2Img from '../assets/Repository_Hierarchy_2.png'
import workflowsImg from '../assets/Workflows.png'
import securityRolesImg from '../assets/Security Roles.png'
import usersImg from '../assets/Users.png'
import repoAccessImg from '../assets/Repository Access.png'
import sharingOutsideImg from '../assets/Sharing Outside.png'
import retentionSchedulesImg from '../assets/Retention Schedules.png'
import aiAssistant1Img from '../assets/Ai_Assistant.png'
import aiAssistant2Img from '../assets/Ai_Assistant2.png'
import email1Img from '../assets/Email.png'
import email2Img from '../assets/Email2.png'
import emailTemplatesImg from '../assets/Email-Templates.png'
import signInSessionsImg from '../assets/Sign_in_sessions.png'
import docVerificationImg from '../assets/Document_Verification.png'
import pdfToolkit1Img from '../assets/Pdf_toolkit1.png'
import systemStatusImg from '../assets/System_status.png'

// Content Model Showcase Screens
const CONTENT_MODEL_SCREENS = [
  {
    id: 'cm-1',
    num: '01',
    title: 'Standardized Document Categories & Governance Taxonomies',
    shortTitle: 'Document Categories',
    badge: 'Enterprise Taxonomy',
    desc: 'Establish multi-tiered document categories across departments, enforcing statutory retention schedules, automated folder hierarchies, and mandatory compliance metadata.',
    image: docCategoriesImg,
    highlights: [
      { label: 'Category Depth', value: 'Multi-Level Hierarchical Taxonomies' },
      { label: 'Retention Rules', value: 'Statutory Lifespan Auto-Enforced' },
      { label: 'Schema Binding', value: 'Granular Custom Metadata Fields' },
      { label: 'Access Control', value: 'Inherited Departmental Permissions' }
    ]
  },
  {
    id: 'cm-2',
    num: '02',
    title: 'Intelligent AI Classification & Visual Topology Recognition',
    shortTitle: 'Classification',
    badge: 'Neural Recognition',
    desc: 'Identify and classify inbound documents automatically using visual layout heuristics, structural patterns, and full-text semantic analysis with confidence thresholds.',
    image: classificationImg,
    highlights: [
      { label: 'Classification Engine', value: 'Layout & Semantic Vector ML' },
      { label: 'Confidence Score', value: 'Real-Time Precision Thresholds' },
      { label: 'Exception Gate', value: 'Human-in-the-Loop Verification' },
      { label: 'Auto-Routing', value: 'Direct Filing to Target Dossiers' }
    ]
  },
  {
    id: 'cm-3',
    num: '03',
    title: 'Document Capture Types & Multi-Channel Ingestion Profiles',
    shortTitle: 'Capture Types',
    badge: 'Ingestion Profiles',
    desc: 'Configure ingestion pipelines across scanner hardware, network copiers, email inboxes, and cloud storage with automatic page separation and barcode recognition.',
    image: docCaptureTypesImg,
    highlights: [
      { label: 'Source Connectors', value: 'TWAIN, ISIS, Email & Cloud' },
      { label: 'Batch Splitting', value: 'Barcode & Blank Sheet Separators' },
      { label: 'Image Clean-Up', value: 'AI Deskew, Despeckle & Binarize' },
      { label: 'Archival Format', value: 'ISO-Compliant PDF/A Generation' }
    ]
  },
  {
    id: 'cm-4',
    num: '04',
    title: 'Contextual Business Transactions & Operational Binding',
    shortTitle: 'Business Transactions',
    badge: 'Transactional Context',
    desc: 'Bind documents to business transactions — connecting purchase orders, invoices, delivery notes, and contracts into indexed dossiers with full audit lineage.',
    image: businessTransactionsImg,
    highlights: [
      { label: 'Record Binding', value: 'PO, Invoice, Contract & ASN Links' },
      { label: '3-Way Matching', value: 'Automated Line-Item Reconciliation' },
      { label: 'Timeline Ledger', value: 'Event Chronology & State Tracking' },
      { label: 'Audit Linkage', value: 'Cryptographic Transaction Ledger' }
    ]
  },
  {
    id: 'cm-5',
    num: '05',
    title: 'Bi-Directional ERP Integration & Master Data Synchronization',
    shortTitle: 'ERP Integration',
    badge: 'Enterprise Connectors',
    desc: 'Synchronize document metadata with enterprise systems including SAP S/4HANA, Microsoft Dynamics 365, and Oracle NetSuite with real-time bi-directional verification.',
    image: erpIntegrationImg,
    highlights: [
      { label: 'ERP Connectors', value: 'SAP, MS Dynamics, Oracle & REST' },
      { label: 'Master Data Sync', value: 'Vendors, GL Accounts & Centers' },
      { label: 'Automated Posting', value: 'Touchless Ledger Entry Creation' },
      { label: 'Reconciliation', value: 'Bi-Directional Data Verification' }
    ]
  }
]

// Organization Architecture Screens (4 Screens)
const ORGANIZATION_SCREENS = [
  {
    id: 'org-1',
    num: '01',
    title: 'Multi-Tenant Corporate Entities & Repository Scoping',
    shortTitle: 'Corporate Entities',
    badge: 'Tenant Isolation',
    desc: 'Establish legal business entities, regional subsidiaries, and dedicated repository boundaries with isolated data stores, statutory retention rules, and localized administrative authority.',
    image: companyRepo1Img,
    highlights: [
      { label: 'Entity Isolation', value: 'Complete Multi-Company Siloing' },
      { label: 'Repository Binding', value: 'Dedicated Storage Partitions' },
      { label: 'Admin Delegation', value: 'Subsidiary-Level Scope Control' },
      { label: 'Compliance Policy', value: 'Jurisdiction-Specific Enforcements' }
    ]
  },
  {
    id: 'org-2',
    num: '02',
    title: 'Storage Partition Quotas & Enterprise Data Residency',
    shortTitle: 'Storage Partitions',
    badge: 'Storage Quotas & S3',
    desc: 'Allocate high-performance storage partitions across AWS S3, Azure Blob, and on-premises SAN/NAS with real-time capacity monitoring, automated tiering, and AES-256 at-rest encryption.',
    image: companyRepo2Img,
    highlights: [
      { label: 'Storage Engine', value: 'Hybrid S3, Azure Blob & NAS' },
      { label: 'Capacity Monitoring', value: 'Live Quota & Overflow Alerts' },
      { label: 'Data Residency', value: 'Sovereign Geographic Pinning' },
      { label: 'Encryption Standard', value: 'FIPS 140-2 AES-256 at Rest' }
    ]
  },
  {
    id: 'org-3',
    num: '03',
    title: 'Enterprise Repository Tree & Departmental Cabinets',
    shortTitle: 'Master Repository Tree',
    badge: 'Hierarchy Tree',
    desc: 'Structure enterprise repositories into intuitive parent-child folder hierarchies, departmental cabinets, and project dossiers. Streamline document discovery across Finance, Legal, HR, and Operations.',
    image: repoHierarchy1Img,
    highlights: [
      { label: 'Tree Architecture', value: 'Multi-Tiered Nested Cabinets' },
      { label: 'Department Scopes', value: 'Finance, HR, Legal & Ops Workspaces' },
      { label: 'Folder Taxonomies', value: 'Inherited Category Rules' },
      { label: 'Instant Indexing', value: 'Sub-Millisecond Node Traversal' }
    ]
  },
  {
    id: 'org-4',
    num: '04',
    title: 'Inherited Permissions & Dynamic Access Cascading',
    shortTitle: 'Permission Cascading',
    badge: 'ACL & Inheritance',
    desc: 'Govern access down the folder tree with automated permission cascading, inherited read/write rights, and granular overrides for sensitive contracts and executive records.',
    image: repoHierarchy2Img,
    highlights: [
      { label: 'Permission Flow', value: 'Automated Cascading Inheritance' },
      { label: 'Security Overrides', value: 'Node-Level Exception Lockdown' },
      { label: 'Role Mapping', value: 'SSO, SAML & Active Directory Sync' },
      { label: 'Audit Trail', value: 'Immutable Access Event Journal' }
    ]
  }
]

// Access & Governance Screens (6 Screens)
const ACCESS_GOVERNANCE_SCREENS = [
  {
    id: 'gov-1',
    num: '01',
    title: 'Multi-Stage Approval Pipelines & Automated Lifecycle Workflows',
    shortTitle: 'Workflows',
    badge: 'Workflow Orchestration',
    desc: 'Design and automate multi-participant document review pipelines, sequential and parallel approval routing, automated escalations, and 21 CFR Part 11 compliant audit progression.',
    image: workflowsImg,
    highlights: [
      { label: 'Routing Engine', value: 'Sequential, Parallel & Dynamic' },
      { label: 'SLA Escalation', value: 'Automated Timeout & Delegation' },
      { label: 'Audit Trail', value: 'Cryptographic Milestone Provenance' },
      { label: 'Compliance Lock', value: '21 CFR Part 11 Sign-Off Gates' }
    ]
  },
  {
    id: 'gov-2',
    num: '02',
    title: 'Granular Role-Based Access Control & Permission Profiles',
    shortTitle: 'Security Roles',
    badge: 'Role-Based Access (RBAC)',
    desc: 'Define multi-tiered security roles with explicit read, edit, delete, export, e-sign, and administrative permissions tailored to departmental compliance needs.',
    image: securityRolesImg,
    highlights: [
      { label: 'Permission Matrix', value: 'Granular CRUD & Action Rights' },
      { label: 'Role Scoping', value: 'Global, Company & Departmental' },
      { label: 'Privilege Guard', value: 'Least-Privilege Policy Enforcement' },
      { label: 'Role Inheritance', value: 'Hierarchical Permission Stacking' }
    ]
  },
  {
    id: 'gov-3',
    num: '03',
    title: 'Centralized User Identity Management & SSO Federation',
    shortTitle: 'Users',
    badge: 'Identity & Directory',
    desc: 'Manage enterprise user profiles, departmental assignments, and authentication policies with pre-built Active Directory, Azure AD/Entra ID, Okta, and SAML 2.0 / SCIM integrations.',
    image: usersImg,
    highlights: [
      { label: 'Directory Sync', value: 'Azure AD, Okta & SAML 2.0' },
      { label: 'Provisioning', value: 'Automated SCIM User Life-Cycle' },
      { label: 'MFA Security', value: 'FIDO2 & Hardware Token Support' },
      { label: 'Session Control', value: 'Zero-Trust Adaptive Timeout' }
    ]
  },
  {
    id: 'gov-4',
    num: '04',
    title: 'Strict Repository Boundaries & Scoped Access Governance',
    shortTitle: 'Repository Access',
    badge: 'Repository Boundaries',
    desc: 'Control which user groups, departments, and subsidiaries have access to specific document repositories, enforcing confidential barriers and preventing data leakage.',
    image: repoAccessImg,
    highlights: [
      { label: 'Boundary Scoping', value: 'Repository & Cabinet Siloing' },
      { label: 'Access Gates', value: 'Multi-Tenant Partition Isolation' },
      { label: 'Inheritance Rules', value: 'Folder-Level Cascading Control' },
      { label: 'Access Auditing', value: 'Real-Time Repository Event Logs' }
    ]
  },
  {
    id: 'gov-5',
    num: '05',
    title: 'Controlled External Sharing & Secure Recipient Portals',
    shortTitle: 'Sharing Outside',
    badge: 'External Guardrails',
    desc: 'Share confidential documents securely with external clients, auditors, and vendors via password-protected, watermarked, time-expiring links with immediate revocation controls.',
    image: sharingOutsideImg,
    highlights: [
      { label: 'External Links', value: 'Password & OTP-Protected Access' },
      { label: 'Expiring Access', value: 'Automated Time & Click Expirations' },
      { label: 'Watermarking', value: 'Dynamic Recipient IP/Email Stamps' },
      { label: 'Instant Kill', value: 'One-Click Global Access Revocation' }
    ]
  },
  {
    id: 'gov-6',
    num: '06',
    title: 'Statutory Retention Schedules & Automated Disposition',
    shortTitle: 'Retention Schedules',
    badge: 'Lifecycle & Retention',
    desc: 'Establish legal retention lifecycles across document categories. Automate mandatory archiving, legal holds, regulatory dispositions, and permanent cryptographic shredding.',
    image: retentionSchedulesImg,
    highlights: [
      { label: 'Retention Rules', value: 'Statutory 5, 7, 10 & 30-Yr Lifespans' },
      { label: 'Legal Holds', value: 'Immutable Litigation Freeze Locks' },
      { label: 'Disposition Gate', value: 'Certified Deletion Verification' },
      { label: 'Audit Certificate', value: 'Tamper-Evident Destruction Proof' }
    ]
  }
]

// System Operations, AI & Core Utilities Screens (9 Screens)
const SYSTEM_OPERATIONS_SCREENS = [
  {
    id: 'sys-1',
    num: '01',
    title: 'Generative AI Assistant & Natural Language Repository Queries',
    shortTitle: 'AI Assistant',
    badge: 'Generative Intelligence',
    desc: 'Query enterprise repositories using conversational natural language. The AI assistant synthesizes multi-document answers, surfaces citations, and extracts key insights directly from your corpus.',
    image: aiAssistant1Img,
    highlights: [
      { label: 'Query Engine', value: 'RAG & Semantic Vector Search' },
      { label: 'Citation Proof', value: 'Page-Level Source Deep-Links' },
      { label: 'Language Model', value: 'Secure Private LLM Grounding' },
      { label: 'Audit Provenance', value: 'Complete Chat History Log' }
    ]
  },
  {
    id: 'sys-2',
    num: '02',
    title: 'Contextual AI Copilot Analysis & Automated Summaries',
    shortTitle: 'AI Copilot Analysis',
    badge: 'Automated Summarization',
    desc: 'Generate executive summaries, cross-reference contract terms, analyze discrepancies between versions, and extract structured tabular entities without manual scanning.',
    image: aiAssistant2Img,
    highlights: [
      { label: 'Analysis Speed', value: 'Instant Multi-Page Summarization' },
      { label: 'Entity Parsing', value: 'Dates, Currencies & Line Items' },
      { label: 'Dossier Comparison', value: 'Cross-Document Semantic Diff' },
      { label: 'Confidentiality', value: 'Zero Data Retention (Zero-Leak)' }
    ]
  },
  {
    id: 'sys-3',
    num: '03',
    title: 'Multi-Channel Email Ingestion & Automated Attachment Filing',
    shortTitle: 'Email Ingestion',
    badge: 'Mailbox Automation',
    desc: 'Connect shared mailboxes and monitored inbox accounts. Inbound emails and attachments are automatically extracted, OCR processed, classified, and filed to target client dossiers.',
    image: email1Img,
    highlights: [
      { label: 'Inbox Protocols', value: 'IMAP, POP3, Exchange & Graph' },
      { label: 'Attachment Splitting', value: 'Auto-Extract PDF, Word & Images' },
      { label: 'Thread Capture', value: 'Preserves RFC-822 Email Body' },
      { label: 'Dossier Routing', value: 'Keyword & Sender Auto-Filing' }
    ]
  },
  {
    id: 'sys-4',
    num: '04',
    title: 'Enterprise Mailbox Connectors & Exchange Synchronization',
    shortTitle: 'Mailbox Connectors',
    badge: 'Exchange & Office 365',
    desc: 'Maintain synchronized connectivity with Microsoft 365, Exchange Server, and Google Workspace. Streamline high-volume transactional email pipelines with rate-limit resiliency.',
    image: email2Img,
    highlights: [
      { label: 'Service Provider', value: 'Microsoft 365 & Google Workspace' },
      { label: 'Sync Mechanism', value: 'Real-Time Webhooks & Delta Sync' },
      { label: 'Failure Recovery', value: 'Dead-Letter Queue & Auto-Retry' },
      { label: 'Encryption', value: 'TLS 1.3 & OAuth 2.0 Auth' }
    ]
  },
  {
    id: 'sys-5',
    num: '05',
    title: 'System Notification Templates & Transactional Alerts',
    shortTitle: 'Email Templates',
    badge: 'Notification Engine',
    desc: 'Standardize enterprise email notifications for workflow approvals, signature requests, compliance expirations, and access shares with customizable HTML templates.',
    image: emailTemplatesImg,
    highlights: [
      { label: 'Template Engine', value: 'Dynamic Jinja/Handlebars Tokens' },
      { label: 'Branding Controls', value: 'Custom Logos, Fonts & Themes' },
      { label: 'Trigger Events', value: 'Workflow, E-Sign & Security Alerts' },
      { label: 'Delivery Status', value: 'Real-Time SMTP Bounce Tracking' }
    ]
  },
  {
    id: 'sys-6',
    num: '06',
    title: 'Active Sign-In Sessions & Real-Time Security Tracking',
    shortTitle: 'Sign-In Sessions',
    badge: 'Authentication Telemetry',
    desc: 'Monitor active user authentication sessions across web, desktop, and mobile clients with IP geolocation, device fingerprinting, concurrent login policies, and instant session revocation.',
    image: signInSessionsImg,
    highlights: [
      { label: 'Session Tracking', value: 'Real-Time Active Token Registry' },
      { label: 'Geo-Intelligence', value: 'IP Address & Country Mapping' },
      { label: 'Kill Switch', value: 'Immediate Global Session Termination' },
      { label: 'Security Policy', value: 'Single Active Session Enforcement' }
    ]
  },
  {
    id: 'sys-7',
    num: '07',
    title: 'Intelligent Document Verification & Quality Assurance Gates',
    shortTitle: 'Document Verification',
    badge: 'Quality & Integrity',
    desc: 'Verify incoming batches with automated barcode recognition, OCR confidence scoring, completeness validation, signature presence checks, and human-in-the-loop exception queues.',
    image: docVerificationImg,
    highlights: [
      { label: 'Confidence Score', value: 'Per-Field OCR Quality Metrics' },
      { label: 'Signature Gate', value: 'AI Ink & Stamp Detection' },
      { label: 'Barcode Engine', value: '1D, 2D QR & DataMatrix Decode' },
      { label: 'Exception Routing', value: 'Operator Correction Interface' }
    ]
  },
  {
    id: 'sys-8',
    num: '08',
    title: 'Comprehensive PDF Utilities & Archival Document Suite',
    shortTitle: 'PDF Toolkit',
    badge: 'Document Manipulation',
    desc: 'Manipulate documents with enterprise PDF tools: merge multiple files, extract pages, apply dynamic redactions, add Bates numbering, insert digital watermarks, and convert to ISO PDF/A-1b.',
    image: pdfToolkit1Img,
    highlights: [
      { label: 'PDF Operations', value: 'Merge, Split, Rotate & Reorder' },
      { label: 'Compliance Archival', value: 'ISO 19005 PDF/A-1b & PDF/A-2b' },
      { label: 'Legal Stamping', value: 'Custom Bates Numbering & Header' },
      { label: 'Permanent Redact', value: 'Sanitized Byte-Level Removal' }
    ]
  },
  {
    id: 'sys-9',
    num: '09',
    title: 'Real-Time System Health, Node Telemetry & Infrastructure Status',
    shortTitle: 'System Status',
    badge: 'Infrastructure Telemetry',
    desc: 'Gain continuous visibility into system health, CPU/memory consumption, OCR worker queues, database connection pools, storage latency, and service availability with automated health checks.',
    image: systemStatusImg,
    highlights: [
      { label: 'Cluster Metrics', value: 'CPU, RAM, Disk & Worker Health' },
      { label: 'Queue Throughput', value: 'Ingestion & OCR Rate Counters' },
      { label: 'Storage Latency', value: 'Sub-Millisecond I/O Telemetry' },
      { label: 'Uptime SLA', value: '99.99% Availability Monitoring' }
    ]
  }
]

export default function ContentModelPage({ onOpenDemoModal }) {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0)
  const [currentOrgIndex, setCurrentOrgIndex] = useState(0)
  const [currentGovIndex, setCurrentGovIndex] = useState(0)
  const [currentSysIndex, setCurrentSysIndex] = useState(0)

  const activeScreen = CONTENT_MODEL_SCREENS[currentScreenIndex]
  const activeOrg = ORGANIZATION_SCREENS[currentOrgIndex]
  const activeGov = ACCESS_GOVERNANCE_SCREENS[currentGovIndex]
  const activeSys = SYSTEM_OPERATIONS_SCREENS[currentSysIndex]

  const handlePrev = () => {
    setCurrentScreenIndex((prev) => (prev === 0 ? CONTENT_MODEL_SCREENS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentScreenIndex((prev) => (prev === CONTENT_MODEL_SCREENS.length - 1 ? 0 : prev + 1))
  }

  const handlePrevOrg = () => {
    setCurrentOrgIndex((prev) => (prev === 0 ? ORGANIZATION_SCREENS.length - 1 : prev - 1))
  }

  const handleNextOrg = () => {
    setCurrentOrgIndex((prev) => (prev === ORGANIZATION_SCREENS.length - 1 ? 0 : prev + 1))
  }

  const handlePrevGov = () => {
    setCurrentGovIndex((prev) => (prev === 0 ? ACCESS_GOVERNANCE_SCREENS.length - 1 : prev - 1))
  }

  const handleNextGov = () => {
    setCurrentGovIndex((prev) => (prev === ACCESS_GOVERNANCE_SCREENS.length - 1 ? 0 : prev + 1))
  }

  const handlePrevSys = () => {
    setCurrentSysIndex((prev) => (prev === 0 ? SYSTEM_OPERATIONS_SCREENS.length - 1 : prev - 1))
  }

  const handleNextSys = () => {
    setCurrentSysIndex((prev) => (prev === SYSTEM_OPERATIONS_SCREENS.length - 1 ? 0 : prev + 1))
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
              Content Model Architecture · System Taxonomies
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
            SmartiDP EDMS{' '}
            <span className="text-[#14532D]">
              Content Model
            </span>
          </h1>

          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Configure standardized categories, intelligent classification rules, multi-source capture profiles, transactional binding, and bi-directional ERP integration.
          </p>

          {/* Interactive 5-Tab Switcher */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-fit mx-auto">
            {CONTENT_MODEL_SCREENS.map((screen, idx) => {
              const isActive = currentScreenIndex === idx
              return (
                <button
                  key={screen.id}
                  type="button"
                  onClick={() => setCurrentScreenIndex(idx)}
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
          2. INTERACTIVE SCREEN VIEWER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-12 bg-slate-50/50">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="relative max-w-6xl mx-auto">
            
            {/* Ambient radial glow behind frame */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />

            {/* Main Image Container */}
            <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5">
              
              <img
                key={activeScreen.id}
                src={activeScreen.image}
                alt={activeScreen.title}
                className="w-full h-auto block select-none transition-opacity duration-300"
                loading="eager"
              />

              {/* Prev / Next Floating Navigation Controls */}
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <button
                  type="button"
                  onClick={handlePrev}
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
                  onClick={handleNext}
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
                      SCREEN {activeScreen.num}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {activeScreen.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Showing {currentScreenIndex + 1} of {CONTENT_MODEL_SCREENS.length}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {activeScreen.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl font-normal leading-relaxed">
                    {activeScreen.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#14532D] hover:bg-[#166534] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 4 Feature Telemetry Chips for this Screen */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {activeScreen.highlights.map((h, i) => (
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
          DEDICATED SECTIONS 1-5 (COMMENTED OUT AS REQUESTED)
          Sections: Document Categories, Classification, Capture Types,
                    Business Transactions, ERP Integration
      ─────────────────────────────────────────────────────────────
      //  ─────────────────────────────────────────────────────────────
          3. DEDICATED SECTION 1: DOCUMENT CATEGORIES
      ───────────────────────────────────────────────────────────── 
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              //  Left Column 
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4">
                    <FolderTree className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>Document Categories</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Standardized Enterprise Taxonomy &{' '}
                    <span className="text-[#14532D]">
                      Category Governance
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Organize your corpus with multi-tiered classification hierarchies. Each document category enforces custom metadata schemas, department ownership, and statutory retention lifespans.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Multi-Tiered Hierarchical Taxonomies</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Define structured folders, dossiers, and sub-categories tailored to Legal, HR, Finance, and QA operations.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Statutory Retention Schedules</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Assign automated retention lifespans (e.g., 7-year finance, 10-year GxP SOPs) with disposition locks.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Mandatory Metadata Schema Binding</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Guarantee that all uploaded records carry required attributes such as Vendor ID, Contract Number, and Expiration Date.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Explore Document Categories
                  </RequestDemoButton>
                </div>
              </div>

              //  Right Column: Screenshot 
              <div className="w-full lg:flex-1 flex items-center relative">
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={docCategoriesImg}
                    alt="SmartiDP EDMS Document Categories & Governance Taxonomies"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      //  ─────────────────────────────────────────────────────────────
          4. DEDICATED SECTION 2: CLASSIFICATION
      ───────────────────────────────────────────────────────────── 
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              //  Left Column 
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
                    <Tag className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>Classification Engine</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Intelligent Classification &{' '}
                    <span className="text-[#14532D]">
                      Visual Topology AI
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Automatically recognize document types without manual inspection. SmartiDP combines visual layout heuristics, structural topology, and semantic NLP to classify documents with confidence scoring.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Layout & Visual Topology ML</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Classifies forms, tax filings, bills of lading, and certificates based on visual geometry and layout markers.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Confidence Scoring & Exception Gate</h4>
                        <p className="text-xs text-slate-600 mt-0.5">High-confidence matches are auto-processed; edge cases route to human-in-the-loop validation.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Zero-Touch Automated Filing</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Classified documents are automatically routed to designated departmental dossiers without manual sorting.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Explore Classification
                  </RequestDemoButton>
                </div>
              </div>

              //  Right Column: Screenshot 
              <div className="w-full lg:flex-1 flex items-center relative">
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={classificationImg}
                    alt="SmartiDP EDMS AI Classification & Visual Topology Recognition"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      //  ─────────────────────────────────────────────────────────────
          5. DEDICATED SECTION 3: DOCUMENT CAPTURE TYPES
      ───────────────────────────────────────────────────────────── 
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              //  Left Column 
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4">
                    <ScanText className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>Capture Profiles</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Document Capture Types &{' '}
                    <span className="text-[#14532D]">
                      Ingestion Profiles
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Configure specialized capture profiles for distinct document sources. Tailor resolution, color depth, barcode separator rules, and OCR engines to match input formats.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Multi-Channel Ingestion Gateways</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Support TWAIN production scanners, network folder polling, email inbox listeners, and REST API ingest.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Automated Page Separation</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Automatically splits scan batches using 1D/2D barcodes, blank pages, and fixed-page counts.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">ISO-Standard PDF/A Conversion</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Transforms ingested files into standardized, searchable PDF/A files suitable for 20+ year legal preservation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Explore Capture Types
                  </RequestDemoButton>
                </div>
              </div>

              //  Right Column: Screenshot 
              <div className="w-full lg:flex-1 flex items-center relative">
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={docCaptureTypesImg}
                    alt="SmartiDP EDMS Document Capture Types & Multi-Channel Ingestion Profiles"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      //  ─────────────────────────────────────────────────────────────
          6. DEDICATED SECTION 4: BUSINESS TRANSACTIONS
      ───────────────────────────────────────────────────────────── 
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              //  Left Column 
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
                    <Receipt className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>Business Transactions</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Contextual Business Transactions &{' '}
                    <span className="text-[#14532D]">
                      Dossier Binding
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Bridge unstructured files with structured business records. Group related invoices, purchase orders, contracts, and shipping notes into holistic transaction dossiers.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">3-Way Transaction Reconciliation</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Cross-verify line items, tax IDs, and payment terms across POs, receiving vouchers, and invoices.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Event Chronology Ledger</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Track every transaction touchpoint from initial RFP dispatch to final payment attestation.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Cross-Department Traceability</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Instant searchability across transaction IDs, vendor codes, customer references, and currency amounts.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Explore Business Transactions
                  </RequestDemoButton>
                </div>
              </div>

              //  Right Column: Screenshot 
              <div className="w-full lg:flex-1 flex items-center relative">
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={businessTransactionsImg}
                    alt="SmartiDP EDMS Contextual Business Transactions & Operational Binding"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      //  ─────────────────────────────────────────────────────────────
          7. DEDICATED SECTION 5: ERP INTEGRATION
      ───────────────────────────────────────────────────────────── 
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 xl:gap-14">
              
              //  Left Column 
              <div className="w-full lg:w-[440px] xl:w-[480px] shrink-0 flex flex-col justify-between py-1 text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4">
                    <Network className="h-3.5 w-3.5 text-[#14532D]" />
                    <span>ERP Integration</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.18]">
                    Bi-Directional ERP Connectors &{' '}
                    <span className="text-[#14532D]">
                      Master Data Sync
                    </span>
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed font-normal mt-3">
                    Synchronize extracted document data directly with your core ERP and CRM systems. Eliminate double-keying with pre-built connectors for SAP S/4HANA, Microsoft Dynamics 365, and Oracle.
                  </p>

                  <div className="space-y-4 pt-5">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Pre-Built Certified Connectors</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Plug-and-play integrations for SAP S/4HANA, Business Central, Oracle NetSuite, and Salesforce.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Real-Time Master Data Mirroring</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Validate extracted vendors, purchase order statuses, and tax codes live against ERP database tables.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-lg bg-[#F0FDF4] text-[#14532D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Automated Direct Posting</h4>
                        <p className="text-xs text-slate-600 mt-0.5">Approved invoices, work orders, and credit notes post automatically to ERP ledgers with document deep-links.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <RequestDemoButton
                    onClick={onOpenDemoModal}
                    size="md"
                  >
                    Explore ERP Integration
                  </RequestDemoButton>
                </div>
              </div>

              //  Right Column: Screenshot 
              <div className="w-full lg:flex-1 flex items-center relative">
                <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-blue-500/15 rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />
                
                <div className="w-full relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden ring-1 ring-slate-900/5 group">
                  <img
                    src={erpIntegrationImg}
                    alt="SmartiDP EDMS Bi-Directional ERP Connectors & Master Data Sync"
                    className="w-full h-auto block select-none transition-transform duration-500 group-hover:scale-[1.008]"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      */}


      {/* ─────────────────────────────────────────────────────────────
          ORGANIZATION ARCHITECTURE GROUP BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-gradient-to-r from-slate-900 via-[#14532D] to-slate-900 text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_50%)]" />
        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
            <Building2 className="h-3.5 w-3.5" />
            <span>Organization Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            Enterprise Structure & Repository Hierarchy
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            Configure multi-tenant company entities, segregated storage volumes, and hierarchical cabinet structures with cascading access control.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. DEDICATED SECTION 6: ORGANIZATION (COMPANIES, REPOSITORIES & HIERARCHY)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Ambient radial glow */}
        <div className="absolute top-0 left-1/3 w-[650px] h-[420px] bg-gradient-to-br from-emerald-100/40 via-teal-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Header & Tabs */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
              <Building2 className="h-3.5 w-3.5 text-[#14532D]" />
              <span>Companies & Repositories</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              Multi-Tenant Company Profiles &{' '}
              <span className="text-[#14532D]">
                Enterprise Repositories
              </span>
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Manage legal business entities, corporate subsidiaries, high-performance repository partitions, departmental folder hierarchies, and cascading security.
            </p>

            {/* Interactive 4-Tab Switcher (01, 02, 03, 04) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-fit mx-auto">
              {ORGANIZATION_SCREENS.map((screen, idx) => {
                const isActive = currentOrgIndex === idx
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setCurrentOrgIndex(idx)}
                    className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
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
                key={activeOrg.id}
                src={activeOrg.image}
                alt={activeOrg.title}
                className="w-full h-auto block select-none transition-opacity duration-300"
                loading="lazy"
              />

              {/* Prev / Next Floating Navigation Controls */}
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <button
                  type="button"
                  onClick={handlePrevOrg}
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
                  onClick={handleNextOrg}
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
                      SCREEN {activeOrg.num}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {activeOrg.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Showing {currentOrgIndex + 1} of {ORGANIZATION_SCREENS.length}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {activeOrg.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl font-normal leading-relaxed">
                    {activeOrg.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevOrg}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextOrg}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#14532D] hover:bg-[#166534] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 4 Feature Telemetry Chips */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {activeOrg.highlights.map((h, i) => (
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

            {/* 4 Capability Grid Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <Building2 className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Corporate Multi-Tenancy</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Silo subsidiaries completely with isolated data stores, statutory rules, and localized authority.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <HardDrive className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Hybrid Storage & Quotas</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Distribute storage volumes across AWS S3, Azure Blob, and SAN/NAS with live quota alerts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <FolderTree className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Master Repository Tree</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Construct departmental cabinets across Finance, Legal, HR, and Ops with instant folder indexing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <Lock className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Cascading Permissions</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Permissions automatically cascade downward with granular overrides for confidential dossiers.
                </p>
              </div>
            </div>

            {/* Request Demo Button CTA */}
            <div className="mt-8 text-center">
              <RequestDemoButton
                onClick={onOpenDemoModal}
                size="md"
              >
                Schedule Organization & Repository Demo
              </RequestDemoButton>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ACCESS & GOVERNANCE GROUP BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-gradient-to-r from-slate-900 via-[#14532D] to-slate-900 text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_50%)]" />
        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Access & Governance Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            Defensible Compliance, Security & Lifecycle Governance
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            Enforce granular role-based access controls, automated multi-stage approval workflows, user identity management, external sharing guardrails, and statutory retention schedules.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. DEDICATED SECTION 7: ACCESS & GOVERNANCE SHOWCASE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Ambient radial glow */}
        <div className="absolute top-0 right-1/3 w-[650px] h-[420px] bg-gradient-to-bl from-emerald-100/40 via-teal-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Header & Tabs */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FDF4] border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
              <ShieldCheck className="h-3.5 w-3.5 text-[#14532D]" />
              <span>Access & Governance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              Enterprise Access Control, Workflows &{' '}
              <span className="text-[#14532D]">
                Compliance Governance
              </span>
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Manage automated review pipelines, granular RBAC permissions, enterprise user directories, scoped repository boundaries, secure external shares, and legal retention lifespans.
            </p>

            {/* Interactive 6-Tab Switcher (01 to 06) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-fit mx-auto">
              {ACCESS_GOVERNANCE_SCREENS.map((screen, idx) => {
                const isActive = currentGovIndex === idx
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setCurrentGovIndex(idx)}
                    className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
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
                key={activeGov.id}
                src={activeGov.image}
                alt={activeGov.title}
                className="w-full h-auto block select-none transition-opacity duration-300"
                loading="lazy"
              />

              {/* Prev / Next Floating Navigation Controls */}
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <button
                  type="button"
                  onClick={handlePrevGov}
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
                  onClick={handleNextGov}
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
                      SCREEN {activeGov.num}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {activeGov.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Showing {currentGovIndex + 1} of {ACCESS_GOVERNANCE_SCREENS.length}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {activeGov.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl font-normal leading-relaxed">
                    {activeGov.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevGov}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextGov}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#14532D] hover:bg-[#166534] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 4 Feature Telemetry Chips */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {activeGov.highlights.map((h, i) => (
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

            {/* 6 Capability Grid Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <Workflow className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Automated Approval Pipelines</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Configure sequential, parallel, and dynamic routing with automated escalations and digital signatures.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <KeyRound className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Granular RBAC Security</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Enforce least-privilege security roles with granular CRUD, export, e-sign, and administrative rights.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <Users2 className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Enterprise Identity & SSO</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Synchronize enterprise users via Azure AD, Okta, and SAML 2.0 with automated SCIM provisioning.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <FolderLock className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Strict Repository Boundaries</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Isolate sensitive repositories across business units and departments with strict boundary enforcement.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <Share2 className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Governed External Sharing</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Share files via password-protected, expiring links with dynamic watermarks and immediate kill switches.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <CalendarClock className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Statutory Retention Schedules</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Enforce legal retention lifecycles, immutable litigation holds, and certified cryptographic shredding.
                </p>
              </div>
            </div>

            {/* Request Demo Button CTA */}
            <div className="mt-8 text-center">
              <RequestDemoButton
                onClick={onOpenDemoModal}
                size="md"
              >
                Schedule Access & Governance Demo
              </RequestDemoButton>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SYSTEM OPERATIONS & AI INTELLIGENCE GROUP BANNER
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-gradient-to-r from-slate-900 via-[#14532D] to-slate-900 text-white relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_50%)]" />
        <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            <span>System Operations & AI Intelligence</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            Cognitive AI, Automated Ingestion & Infrastructure Operations
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            Empower enterprise teams with conversational AI assistants, automated email intake pipelines, active session security, document verification gates, and full-stack system telemetry.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. DEDICATED SECTION 8: SYSTEM OPERATIONS, AI & UTILITIES SHOWCASE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
        
        {/* Ambient radial glow */}
        <div className="absolute top-0 left-1/3 w-[650px] h-[420px] bg-gradient-to-br from-emerald-100/40 via-teal-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Header & Tabs */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#14532D]/20 text-[#14532D] text-xs font-bold uppercase tracking-widest mb-4 shadow-2xs">
              <Bot className="h-3.5 w-3.5 text-[#14532D]" />
              <span>Operations, AI & Utilities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
              Cognitive AI Copilot, Communication &{' '}
              <span className="text-[#14532D]">
                System Telemetry
              </span>
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Interact with conversational AI assistants, manage multi-channel email pipelines, monitor active login sessions, verify batch quality, manipulate PDFs, and monitor node cluster health in real time.
            </p>

            {/* Interactive 9-Tab Switcher (01 to 09) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-fit mx-auto">
              {SYSTEM_OPERATIONS_SCREENS.map((screen, idx) => {
                const isActive = currentSysIndex === idx
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setCurrentSysIndex(idx)}
                    className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
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
                key={activeSys.id}
                src={activeSys.image}
                alt={activeSys.title}
                className="w-full h-auto block select-none transition-opacity duration-300"
                loading="lazy"
              />

              {/* Prev / Next Floating Navigation Controls */}
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <button
                  type="button"
                  onClick={handlePrevSys}
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
                  onClick={handleNextSys}
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
                      SCREEN {activeSys.num}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {activeSys.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Showing {currentSysIndex + 1} of {SYSTEM_OPERATIONS_SCREENS.length}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {activeSys.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl font-normal leading-relaxed">
                    {activeSys.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevSys}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextSys}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#14532D] hover:bg-[#166534] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* 4 Feature Telemetry Chips */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {activeSys.highlights.map((h, i) => (
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

            {/* 6 Capability Grid Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <Bot className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Conversational AI Assistant</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  RAG-powered conversational search across enterprise repositories with zero-retention private LLMs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <Mail className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Automated Email Intake</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Auto-extract attachments, parse email threads, and route incoming communications directly into dossiers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <MailCheck className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Template Notification Alerts</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Standardized HTML email templates for workflow steps, e-signatures, document expiries, and alerts.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <Radio className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Active Session Telemetry</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Track live authentication sessions with IP geolocation, device fingerprinting, and global kill switches.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <FileCheck className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Intelligent Document QA</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Automate barcode recognition, signature detection, OCR confidence scoring, and operator exception gates.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-[#14532D]/30 transition-colors">
                <div className="h-10 w-10 rounded-xl bg-[#F0FDF4] text-[#14532D] flex items-center justify-center mb-3">
                  <Activity className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1.5">Node Health & Telemetry</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Continuous infrastructure health monitoring with CPU/RAM metrics, queue throughput, and latency tracking.
                </p>
              </div>
            </div>

            {/* Request Demo Button CTA */}
            <div className="mt-8 text-center">
              <RequestDemoButton
                onClick={onOpenDemoModal}
                size="md"
              >
                Schedule System Operations & AI Demo
              </RequestDemoButton>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
