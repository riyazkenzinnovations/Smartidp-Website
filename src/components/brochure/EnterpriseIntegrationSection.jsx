import React, { useState } from 'react'
import {
  Layers,
  Webhook,
  Cpu,
  RefreshCw,
  Link2,
  Workflow,
  Archive,
  CheckCircle2,
  Server,
  Cloud,
  Database,
  ArrowRight,
  ShieldCheck,
  FileCode,
  Sparkles
} from 'lucide-react'

const INTEGRATION_ENABLERS = [
  {
    icon: FileCode,
    title: 'Open APIs',
    desc: 'Documented REST APIs (OpenAPI) covering all platform functions for programmatic ingestion, search, and lifecycle execution.'
  },
  {
    icon: Webhook,
    title: 'Events & Webhooks',
    desc: 'Real-time JSON payload event notifications to drive downstream business logic and event-driven architectures.'
  },
  {
    icon: Cpu,
    title: 'Connectors',
    desc: 'Pre-built and configurable connectors for common enterprise business suites and operational platforms.'
  },
  {
    icon: RefreshCw,
    title: 'Migration Toolkit',
    desc: 'Bulk, checksum-verified migration utilities for moving content from legacy ECM, OpenText, Documentum, and file shares.'
  }
]

const INTEGRATION_PATTERNS = [
  {
    icon: Link2,
    title: 'Link Documents to Records',
    desc: 'Attach governed documents to ERP, CRM or HR records and view them in context without leaving the business application.'
  },
  {
    icon: Workflow,
    title: 'Process-Triggered Automation',
    desc: 'Business events — a new supplier, a goods receipt, a new hire — automatically generate, request or route documents.'
  },
  {
    icon: Archive,
    title: 'Archive for Business Apps',
    desc: 'Offload attachments and outputs from operational systems into compliant, retention-managed storage.'
  }
]

const ECOSYSTEM_CONNECTORS = [
  {
    category: 'ERP',
    subtitle: 'Financials & Supply Chain',
    purpose: 'Invoices, POs, contracts, master data validation',
    platforms: ['SAP S/4HANA', 'Oracle NetSuite', 'Microsoft Dynamics 365', 'Workday Financials']
  },
  {
    category: 'CRM',
    subtitle: 'Customer Relationship Management',
    purpose: 'Customer files, proposals, onboarding documents',
    platforms: ['Salesforce', 'HubSpot', 'Dynamics 365 CRM', 'Zendesk']
  },
  {
    category: 'HCM / HR',
    subtitle: 'Human Capital Management',
    purpose: 'Employee files, policies, training records',
    platforms: ['Workday HCM', 'SAP SuccessFactors', 'BambooHR', 'ADP']
  },
  {
    category: 'QMS · LIMS · MES',
    subtitle: 'Regulated Quality & Lab Systems',
    purpose: 'CAPA, deviations, batch & lab records',
    platforms: ['TrackWise', 'Veeva Vault', 'MasterControl', 'LabWare']
  },
  {
    category: 'Microsoft 365',
    subtitle: 'Office & Productivity Suite',
    purpose: 'Word, Excel, PowerPoint, Outlook, Teams, SharePoint',
    platforms: ['M365 Task Pane', 'Outlook Mail Filing', 'Teams Sync', 'SharePoint Hub']
  },
  {
    category: 'Identity',
    subtitle: 'Directory & Zero-Trust IAM',
    purpose: 'Azure AD / Entra ID, Okta, LDAP, ADFS',
    platforms: ['SAML 2.0 SSO', 'OIDC Authentication', 'SCIM User Sync', 'MFA Protocols']
  },
  {
    category: 'BI & Analytics',
    subtitle: 'Data Warehousing & Dashboards',
    purpose: 'Power BI, data lakes, reporting tools',
    platforms: ['Power BI', 'Tableau', 'Snowflake', 'BigQuery']
  },
  {
    category: 'RPA & iPaaS',
    subtitle: 'Automation & Orchestration',
    purpose: 'Automation bots and integration platforms',
    platforms: ['UiPath', 'MuleSoft AnyPoint', 'Boomi', 'Zapier Enterprise']
  }
]

export default function EnterpriseIntegrationSection({ onOpenDemoModal }) {
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <section id="enterprise-integration" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-2">
            Enterprise Ecosystem Integration
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Connected to Your Enterprise Ecosystem
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            An API-first design lets SmartiDP EDMS act as the content backbone for your business applications — so documents follow the process, wherever it runs.
          </p>
        </div>

        {/* 4 Integration Enablers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INTEGRATION_ENABLERS.map((e, i) => {
            const Icon = e.icon
            return (
              <div key={i} className="p-6 rounded-2xl glass-card-green flex flex-col justify-between group">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-white text-[#14532D] flex items-center justify-center border border-[#14532D]/20 shadow-2xs group-hover:bg-[#14532D] group-hover:text-white transition-colors mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#14532D] transition-colors">
                    {e.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {e.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* 3 Common Integration Patterns */}
        <div className="mb-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-1">
              Architecture Blueprint
            </span>
            <h3 className="text-2xl font-semibold text-slate-900">
              Common Integration Patterns
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Embedded bi-directional data exchanges eliminating content silos across disparate systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INTEGRATION_PATTERNS.map((p, idx) => {
              const Icon = p.icon
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-white text-[#14532D] flex items-center justify-center border border-slate-200 shadow-2xs mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-2">{p.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* The 8 Enterprise Connector Categories Matrix */}
        <div className="mb-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#14532D] font-mono uppercase tracking-wider block mb-1">
              SmartiDP EDMS Integration Layer
            </span>
            <h3 className="text-2xl font-semibold text-slate-900">
              Enterprise Application Connectors
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              REST · Webhooks · Events · CMIS · SAML · OIDC · SCIM
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ECOSYSTEM_CONNECTORS.map((c, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#14532D]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#14532D] px-2 py-0.5 rounded bg-[#F0FDF4] border border-[#14532D]/15">
                      {c.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Connector</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{c.subtitle}</h4>
                  <p className="text-xs text-slate-600 leading-snug mb-3">{c.purpose}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {c.platforms.map((p, pIdx) => (
                    <span key={pIdx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-[11px] text-slate-400 italic">
            Product and company names are trademarks of their respective owners and are shown as examples of commonly integrated systems.
          </div>
        </div>

      </div>
    </section>
  )
}

