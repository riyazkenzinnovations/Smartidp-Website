// Source of Truth: SmartiDP-EDMS-Product-Brochure.pdf (Pages 1 - 20)
// Complete verbatim extraction without modification or AI-generated filler.

export const BROCHURE_META = {
  productName: 'SmartiDP EDMS',
  companyName: 'Kenz Innovations',
  category: 'Enterprise Document Management System',
  website: 'www.smartidp.ai',
  tagline: 'The intelligent platform for enterprise documents.',
  heroDescription:
    'Capture, manage, automate, secure and govern every document across your enterprise — on one AI-powered, compliance-ready platform built for regulated and non-regulated industries.',
  copyright:
    '© 2026 Kenz Innovations. All rights reserved. All other trademarks are the property of their respective owners. Product interfaces shown are illustrative. Compliance with regulations is a shared responsibility; this brochure is not legal advice.'
}

export const BUILT_TO_SUPPORT_STANDARDS = [
  '21 CFR Part 11',
  'EU GMP Annex 11',
  'ISO 9001',
  'ISO 13485',
  'ISO/IEC 27001',
  'GDPR',
  'HIPAA',
  'SOC 2',
  'ISO 15489',
  'eIDAS'
]

export const COVER_PILLARS = [
  {
    title: 'AI-powered capture',
    desc: 'Classify, extract and index automatically.'
  },
  {
    title: 'Process automation',
    desc: 'No-code workflows and e-signatures.'
  },
  {
    title: 'Security & compliance',
    desc: 'Built for Part 11, ISO, GDPR and more.'
  },
  {
    title: 'Open integration',
    desc: 'APIs and connectors for your enterprise stack.'
  }
]

export const COVER_INDUSTRIES = [
  'Life Sciences',
  'Medical Devices',
  'Healthcare',
  'Financial Services',
  'Government',
  'Manufacturing & Energy',
  'Legal'
]

export const EXECUTIVE_SUMMARY = {
  headline: "Information is your enterprise's most valuable asset. Govern it.",
  paragraph1:
    'Every strategic decision, regulatory submission, contract, product release and customer interaction depends on documents. Yet in most organisations, that content is scattered across file shares, inboxes, legacy systems and paper archives — slowing work, multiplying risk and hiding value.',
  paragraph2:
    'SmartiDP EDMS unifies the complete document lifecycle on one secure, intelligent platform. AI-driven capture turns unstructured content into structured, searchable information. Configurable workflows automate reviews, approvals and records management. Security and compliance controls are built into every layer — so your organisation can move faster and stay audit-ready.',
  closing:
    'One platform. Every document. Complete control — from the moment content is created to the day it is defensibly disposed of.',
  stats: [
    {
      value: '12+',
      label: 'Global regulations & standards supported by built-in controls'
    },
    {
      value: '360°',
      label: 'Document lifecycle coverage — capture to disposition'
    },
    {
      value: '3',
      label: 'Deployment models: SaaS, private cloud and on-premise'
    },
    {
      value: '100%',
      label: 'Of user and system actions captured in the audit trail'
    }
  ]
}

export const THE_CASE_FOR_CHANGE = {
  title: 'The Case for Change',
  subtitle: 'From document chaos to intelligent information flow',
  intro:
    'Disconnected repositories and manual processes create hidden costs that compound every day. Modern enterprises need a single, governed foundation for content — one that people actually want to use.',
  painPoints: [
    {
      title: 'Time lost searching',
      desc: 'Knowledge workers repeatedly hunt for the latest version across drives, email and chat — or recreate documents that already exist.'
    },
    {
      title: 'Compliance exposure',
      desc: 'Uncontrolled copies, missing audit trails and wet-ink signatures turn every inspection or audit into a high-stakes scramble.'
    },
    {
      title: 'Slow, manual processes',
      desc: 'Paper routing, email approvals and re-keying data from documents delay releases, payments and decisions.'
    },
    {
      title: 'Security blind spots',
      desc: 'Sensitive content sits in places IT cannot see, classify or protect — raising the risk of leaks and breaches.'
    },
    {
      title: 'Rising storage & legal risk',
      desc: 'Without retention rules, content is kept forever — increasing cost, discovery scope and privacy liability.'
    },
    {
      title: 'Legacy system sprawl',
      desc: 'Ageing, siloed ECM tools are expensive to maintain, hard to integrate and unable to support AI or cloud strategies.'
    }
  ],
  transformation: [
    {
      dimension: 'Access',
      before: 'Multiple drives, inboxes and paper archives',
      withSmartIDP: 'One governed repository with instant, permission-aware search'
    },
    {
      dimension: 'Data entry',
      before: 'Manual typing from scanned documents',
      withSmartIDP: 'AI-powered classification and data extraction'
    },
    {
      dimension: 'Approvals',
      before: 'Email chains, printouts and wet-ink signatures',
      withSmartIDP: 'Automated workflows with compliant electronic signatures'
    },
    {
      dimension: 'Compliance',
      before: 'Evidence assembled manually before audits',
      withSmartIDP: 'Continuous audit trails and on-demand inspection packages'
    },
    {
      dimension: 'Records',
      before: 'Kept indefinitely or deleted inconsistently',
      withSmartIDP: 'Policy-driven retention, legal hold and defensible disposition'
    },
    {
      dimension: 'Insight',
      before: 'No visibility into process performance',
      withSmartIDP: 'Real-time dashboards and KPIs across every workflow'
    }
  ]
}

export const PLATFORM_OVERVIEW = {
  title: 'Platform Overview',
  subtitle: 'One platform for the complete enterprise information lifecycle',
  intro:
    'SmartiDP EDMS brings eight integrated capability domains together on a shared, secure foundation — so content flows seamlessly from capture to archive without switching tools.',
  pillars: [
    {
      title: 'Unified',
      desc: 'One repository, one security model, one audit trail — across departments, sites and countries.'
    },
    {
      title: 'Intelligent',
      desc: 'AI extracts meaning from content, automates classification and powers natural-language discovery.'
    },
    {
      title: 'Configurable',
      desc: 'Adapt document types, metadata, workflows and rules through configuration — no custom code.'
    }
  ],
  sharedServices: [
    'Identity & access',
    'Audit trail',
    'Metadata & taxonomy',
    'AI services',
    'Notifications',
    'Integration APIs',
    'Encryption',
    'Analytics'
  ],
  capabilityDomains: [
    {
      id: 'capture',
      name: 'Capture',
      desc: 'Scan, ingest, OCR, AI classification'
    },
    {
      id: 'manage',
      name: 'Manage',
      desc: 'Versioning, metadata, check-in/out'
    },
    {
      id: 'automate',
      name: 'Automate',
      desc: 'BPMN workflows, e-signatures'
    },
    {
      id: 'collaborate',
      name: 'Collaborate',
      desc: 'Co-authoring, comments, sharing'
    },
    {
      id: 'discover',
      name: 'Discover',
      desc: 'Full-text, semantic & metadata search'
    },
    {
      id: 'govern',
      name: 'Govern',
      desc: 'Retention, legal hold, disposition'
    },
    {
      id: 'secure',
      name: 'Secure',
      desc: 'Zero-trust access, encryption, DLP'
    },
    {
      id: 'analyse',
      name: 'Analyse',
      desc: 'Dashboards, KPIs, audit reporting'
    }
  ]
}

export const BUSINESS_VALUE = {
  title: 'Business Value',
  subtitle: 'Measurable outcomes across the enterprise',
  intro:
    'SmartiDP EDMS delivers value on four fronts at once: productivity, risk reduction, cost optimisation and better decisions. Typical improvement areas identified in business-case workshops include:',
  stakeholderRoles: [
    {
      role: 'Chief Information Officer',
      priorities: 'Modernisation, cost control, risk',
      howItHelps: 'Retire legacy ECM, consolidate repositories and reduce infrastructure and licence sprawl.'
    },
    {
      role: 'Chief Technology Officer',
      priorities: 'Scalable, secure, cloud-ready architecture',
      howItHelps: 'Cloud-native microservices, open APIs and flexible deployment models.'
    },
    {
      role: 'Quality Director',
      priorities: 'Document control, training, CAPA',
      howItHelps: 'Controlled document lifecycle, training-on-release and change-control linkage.'
    },
    {
      role: 'Compliance Officer',
      priorities: 'Evidence, accountability, policy enforcement',
      howItHelps: 'Immutable audit trails, e-signatures, retention policies and compliance dashboards.'
    },
    {
      role: 'Regulatory Affairs',
      priorities: 'Submission readiness, version integrity',
      howItHelps: 'Version-locked document sets, PDF/A renditions and traceable approvals.'
    },
    {
      role: 'Enterprise Architect',
      priorities: 'Integration, standards, interoperability',
      howItHelps: 'REST APIs, webhooks, event streams, SSO and standards-based connectors.'
    },
    {
      role: 'Digital Transformation Leader',
      priorities: 'Paperless operations, adoption, speed',
      howItHelps: 'Intuitive UX, mobile access and no-code process automation.'
    }
  ],
  outcomes: [
    {
      title: 'Faster',
      desc: 'Document review & approval cycles through parallel electronic workflows',
      metrics: ['Document review & approval cycles through parallel electronic workflows']
    },
    {
      title: 'Less',
      desc: 'Manual data entry via AI-powered capture and extraction',
      metrics: ['Manual data entry via AI-powered capture and extraction']
    },
    {
      title: 'Lower',
      desc: 'Paper, printing, courier and physical storage costs',
      metrics: ['Paper, printing, courier and physical storage costs']
    },
    {
      title: 'Ready',
      desc: 'For audits and inspections at any time, not just on audit day',
      metrics: ['For audits and inspections at any time, not just on audit day']
    }
  ],
  businessCaseNote:
    'Our consultants build a quantified, organisation-specific ROI model with you — covering labour savings, cycle-time reduction, storage and licence consolidation, and compliance risk avoidance.'
}

export const CAPABILITY_INTELLIGENT_CAPTURE = {
  title: 'Intelligent Capture',
  subtitle: 'AI turns unstructured content into structured information',
  intro:
    'Built on SmartIDP intelligent document processing, the platform ingests content from any channel, understands what it is, extracts the data that matters and routes it — automatically, with human validation where it counts.',
  pipelineSteps: [
    {
      step: '1',
      name: 'Ingest',
      desc: 'Scanners, email, upload, mobile, APIs, watched folders'
    },
    {
      step: '2',
      name: 'Enhance & OCR',
      desc: 'De-skew, clean-up, multilingual OCR and handwriting recognition'
    },
    {
      step: '3',
      name: 'Classify',
      desc: 'AI identifies document type and splits multi-document batches'
    },
    {
      step: '4',
      name: 'Extract',
      desc: 'Key fields, tables and entities captured with confidence scores'
    },
    {
      step: '5',
      name: 'Validate',
      desc: 'Business rules, lookups and human-in-the-loop review'
    },
    {
      step: '6',
      name: 'File & route',
      desc: 'Auto-indexed, secured and launched into workflow'
    }
  ],
  features: [
    'Omnichannel ingestion from MFP scanners, shared mailboxes, mobile capture and system APIs.',
    'AI document classification trained on your document types — invoices, contracts, CVs, certificates, batch records and more.',
    'Field, table and entity extraction with configurable confidence thresholds.',
    'Multilingual OCR, including right-to-left scripts and handwriting (ICR).',
    'Validation rules against master data in ERP, CRM or HR systems.',
    'Continuous learning from user corrections to improve accuracy over time.',
    'Searchable PDF/A output for long-term preservation.'
  ],
  documentTypes: [
    'Invoices & receipts',
    'Purchase orders',
    'Contracts & agreements',
    'Identity documents',
    'CVs & HR forms',
    'Certificates of analysis',
    'Batch records',
    'Delivery notes',
    'Bank statements',
    'Insurance claims',
    'Correspondence',
    'Engineering forms',
    '+ custom models trained on your documents'
  ],
  highlights: [
    {
      title: 'Touchless',
      desc: 'High-confidence documents filed automatically without manual handling'
    },
    {
      title: 'Human-in-loop',
      desc: 'Exceptions routed to reviewers with source highlighting'
    },
    {
      title: 'Traceable',
      desc: 'Every extraction and correction recorded in the audit trail'
    }
  ]
}

export const CAPABILITY_DOCUMENT_RECORDS_MGMT = {
  title: 'Document & Records Management',
  subtitle: 'Control every version. Trust every record.',
  intro:
    "A single source of truth for controlled documents and official records — with the governance needed to prove integrity throughout a document's entire life.",
  features: [
    {
      title: 'Version control',
      desc: 'Major/minor versioning, check-in/check-out, redline comparison and automatic superseding of obsolete versions.'
    },
    {
      title: 'Metadata & taxonomy',
      desc: 'Configurable document types, mandatory fields, controlled vocabularies and hierarchical file plans.'
    },
    {
      title: 'Enterprise search',
      desc: 'Full-text, metadata and AI-assisted semantic search with permission-trimmed results and saved queries.'
    },
    {
      title: 'Controlled distribution',
      desc: 'Read-and-acknowledge, controlled printing with watermarks and copy tracking, secure external sharing.'
    },
    {
      title: 'Records management',
      desc: 'Record declaration, retention schedules, legal hold and certified disposition aligned with ISO 15489.'
    },
    {
      title: 'Multi-site & multilingual',
      desc: 'Site-specific variants, translations linked to masters and multilingual user interface.'
    }
  ],
  lifecycleStages: [
    { step: '1', name: 'Create', desc: 'Templates, auto-numbering' },
    { step: '2', name: 'Review', desc: 'Parallel reviewers' },
    { step: '3', name: 'Approve', desc: 'E-signature' },
    { step: '4', name: 'Publish', desc: 'Training auto-assigned' },
    { step: '5', name: 'Periodic review', desc: 'Risk-based schedule, revision loop via change control' },
    { step: '6', name: 'Archive', desc: 'PDF/A, legal hold' },
    { step: '7', name: 'Dispose', desc: 'Certificate' }
  ],
  principles: [
    {
      title: 'Single source of truth',
      desc: 'Users always see the current effective version; superseded versions are withdrawn but retained for history and audit.'
    },
    {
      title: 'Defensible disposition',
      desc: 'Multi-level approval before destruction, with a permanent certificate proving what was disposed of and why.'
    }
  ]
}

export const CAPABILITY_WORKFLOW_AUTOMATION = {
  title: 'Workflow & Process Automation',
  subtitle: 'Automate the process, not just the document',
  intro:
    'A visual, no-code workflow designer lets business owners model reviews, approvals and end-to-end processes — while the engine enforces sequence, segregation of duties and service levels.',
  capabilities: [
    {
      title: 'Visual design',
      desc: 'Drag-and-drop BPMN 2.0 process modeller with no code required.'
    },
    {
      title: 'Dynamic routing',
      desc: 'Sequential, parallel and conditional paths based on metadata, value or risk.'
    },
    {
      title: 'Electronic signatures',
      desc: 'Built-in Part 11 and eIDAS compliant signatures with meaning and re-auth.'
    },
    {
      title: 'Escalation & SLAs',
      desc: 'Timers, reminders, auto-reassignment and out-of-office delegation.'
    },
    {
      title: 'External participants',
      desc: 'Secure, time-limited portal access for guest reviewers and signers.'
    },
    {
      title: 'Integration triggers',
      desc: 'Call webhooks, run scripts and update external systems on workflow events.'
    },
    {
      title: 'Real-time tracking',
      desc: 'Visual status showing current stage, blockers and complete execution history.'
    }
  ],
  highlights: [
    {
      title: 'No code',
      desc: 'Business teams build and adapt workflows without IT backlogs'
    },
    {
      title: 'Compliant',
      desc: '21 CFR Part 11 and eIDAS compliant electronic signatures built in'
    },
    {
      title: 'SLA-driven',
      desc: 'Automatic reminders, escalations and out-of-office delegation'
    }
  ]
}

export const USER_EXPERIENCE = {
  title: 'User Experience',
  subtitle: 'Designed for people, loved by power users',
  intro:
    'Adoption makes or breaks any EDMS. SmartiDP EDMS offers a clean, modern interface that feels familiar from day one — with the depth that document controllers and administrators need.',
  features: [
    {
      title: 'Find in seconds',
      desc: 'Type-ahead, filters and AI-assisted semantic search.'
    },
    {
      title: 'View anything',
      desc: 'In-browser viewer for 100+ formats with annotations.'
    },
    {
      title: 'Task-centric inbox',
      desc: 'All reviews, approvals and training in one place.'
    },
    {
      title: 'Accessible & global',
      desc: 'WCAG 2.1 AA design and multilingual UI.'
    }
  ],
  roleBasedNote:
    'Role-based home pages give every user exactly what they need — and nothing they don’t.'
}

export const PRODUCTIVITY_ANYWHERE = {
  title: 'Productivity Anywhere',
  subtitle: 'Work where you are — desktop, Office, mobile',
  intro:
    'Bring governed document management into the tools people already use every day, and let decision-makers act from anywhere without compromising control.',
  features: [
    {
      title: 'Microsoft 365 & Office',
      desc: 'Open, edit, save and check in from Word, Excel, PowerPoint and Outlook; file emails with one click.'
    },
    {
      title: 'Real-time collaboration',
      desc: 'Co-authoring, threaded comments, @mentions and review annotations — all captured with the record.'
    },
    {
      title: 'Mobile & offline',
      desc: 'Responsive web and mobile apps for search, viewing, approvals and e-signatures on the go.'
    },
    {
      title: 'Secure external sharing',
      desc: 'Share with partners, suppliers and regulators via expiring, watermarked, audit-tracked links.'
    },
    {
      title: 'Dashboards & reports',
      desc: 'Role-based dashboards and scheduled reports for managers, QA and executives.'
    },
    {
      title: 'AI assistant',
      desc: 'Summarise documents, compare versions and ask questions across permitted content in natural language.'
    }
  ]
}

export const INTEGRATION = {
  title: 'Integration',
  subtitle: 'Connected to your enterprise ecosystem',
  intro:
    'An API-first design lets SmartiDP EDMS act as the content backbone for your business applications — so documents follow the process, wherever it runs.',
  pillars: [
    {
      title: 'Open APIs',
      desc: 'Documented REST APIs (OpenAPI) covering all platform functions.'
    },
    {
      title: 'Events & webhooks',
      desc: 'Real-time notifications to drive downstream processes.'
    },
    {
      title: 'Connectors',
      desc: 'Pre-built and configurable connectors for common systems.'
    },
    {
      title: 'Migration toolkit',
      desc: 'Bulk, checksum-verified migration from legacy ECM and file shares.'
    }
  ],
  patterns: [
    {
      title: 'Link documents to records',
      desc: 'Attach governed documents to ERP, CRM or HR records and view them in context without leaving the business application.'
    },
    {
      title: 'Process-triggered automation',
      desc: 'Business events — a new supplier, a goods receipt, a new hire — automatically generate, request or route documents.'
    },
    {
      title: 'Archive for business apps',
      desc: 'Offload attachments and outputs from operational systems into compliant, retention-managed storage.'
    }
  ],
  systems: [
    { name: 'ERP', desc: 'Invoices, POs, contracts, master data validation' },
    { name: 'CRM', desc: 'Customer files, proposals, onboarding documents' },
    { name: 'HCM / HR', desc: 'Employee files, policies, training records' },
    { name: 'QMS · LIMS · MES', desc: 'CAPA, deviations, batch & lab records' },
    { name: 'Microsoft 365', desc: 'Office, Outlook, Teams, SharePoint' },
    { name: 'Identity', desc: 'Azure AD / Entra ID, Okta, LDAP, ADFS' },
    { name: 'BI & Analytics', desc: 'Power BI, data lakes, reporting tools' },
    { name: 'RPA & iPaaS', desc: 'Automation bots and integration platforms' }
  ]
}

export const PLATFORM_ARCHITECTURE = {
  title: 'Platform Architecture',
  subtitle: 'Cloud-native architecture, enterprise-grade by design',
  intro:
    'A modular, service-oriented architecture separates concerns into independently scalable layers, with security, audit and observability applied consistently across all of them.',
  layers: [
    {
      layer: 'Experience',
      items: ['Responsive web app', 'iOS / Android', 'Office & Outlook add-ins', 'Partner portal', 'AI assistant']
    },
    {
      layer: 'API Gateway',
      items: ['REST / OpenAPI', 'OAuth 2.0', 'Rate limiting', 'Webhooks', 'Event bus']
    },
    {
      layer: 'Application Services',
      items: ['Document service', 'Workflow engine', 'Capture & AI', 'Search', 'Records & retention', 'E-signature', 'Notification', 'Reporting']
    },
    {
      layer: 'Intelligence',
      items: ['OCR / ICR', 'Classification', 'Extraction', 'Semantic search', 'Summarisation']
    },
    {
      layer: 'Data & Storage',
      items: ['Relational metadata DB', 'Object storage', 'Search index', 'Immutable audit store', 'Tiered / WORM storage']
    },
    {
      layer: 'Infrastructure',
      items: ['Kubernetes', 'Public cloud', 'Private cloud', 'On-premise', 'Multi-zone HA', 'Infrastructure-as-code']
    }
  ],
  crossCutting: [
    'Identity & access',
    'Encryption & key management',
    'Audit trail',
    'Observability & monitoring',
    'Configuration & change control',
    'Backup & disaster recovery'
  ],
  deploymentModels: [
    {
      model: 'SaaS',
      desc: 'Fully managed, continuously updated, fastest time to value. Regional data residency options.'
    },
    {
      model: 'Private cloud',
      desc: 'Dedicated single-tenant environment in your preferred cloud region and account.'
    },
    {
      model: 'On-premise',
      desc: 'Deployed in your data centre for maximum control, sovereignty or air-gapped needs.'
    }
  ],
  openStandards: [
    'REST / OpenAPI',
    'OAuth 2.0 / OIDC',
    'SAML 2.0',
    'SCIM',
    'CMIS',
    'BPMN 2.0',
    'PDF/A',
    'Containers / Kubernetes'
  ]
}

export const SCALABILITY_AND_PERFORMANCE = {
  title: 'Scalability, Performance & Availability',
  subtitle: 'From one department to a global enterprise',
  intro:
    'The platform scales horizontally with demand — more users, more documents, more sites — without re-architecture, while high-availability design keeps critical content accessible around the clock.',
  performanceEngineering: [
    'Asynchronous processing for capture, rendition and indexing.',
    'Distributed caching and CDN delivery of previews.',
    'Streaming upload/download for very large files.',
    'Continuous load and performance testing in every release.'
  ],
  builtForVolume: [
    'Designed for very large repositories across many sites.',
    'Tiered storage moves inactive content to lower-cost tiers.',
    'Bulk import and batch operations for migrations.',
    'Real-time observability with proactive alerting.'
  ],
  geographicCapabilities: [
    {
      title: 'Multi-region',
      desc: 'Deploy close to your users, with data kept in the regions you choose.'
    },
    {
      title: 'Multi-site',
      desc: 'Shared global standards with local site variants and administration.'
    },
    {
      title: 'Zero-downtime updates',
      desc: 'Rolling deployments keep the platform available during upgrades.'
    }
  ],
  metrics: [
    { title: 'Elastic', desc: 'Horizontal auto-scaling of each service independently' },
    { title: 'HA', desc: 'Multi-zone redundancy with automated failover' },
    { title: 'DR', desc: 'Geo-redundant backups with defined RPO / RTO' },
    { title: 'SLA', desc: 'Contractual availability commitments for SaaS' }
  ]
}

export const SECURITY = {
  title: 'Security',
  subtitle: 'Zero-trust security, defence in depth',
  intro:
    'Every request is authenticated, authorised and logged. Multiple concentric layers of protection safeguard your content — from the network edge to the individual document.',
  layers: [
    { layer: 'Network & edge', desc: 'WAF · DDoS · segmentation' },
    { layer: 'Identity & access', desc: 'SSO · MFA · RBAC/ABAC' },
    { layer: 'Application', desc: 'Secure SDLC · pen-tested' },
    { layer: 'Data protection', desc: 'AES-256 · TLS 1.2+ · DLP' }
  ],
  capabilities: [
    {
      title: 'Identity & access',
      desc: 'SAML 2.0 / OIDC SSO, MFA, SCIM provisioning, role- and attribute-based permissions to document level.'
    },
    {
      title: 'Encryption',
      desc: 'AES-256 at rest, TLS 1.2+ in transit, managed keys with rotation and optional customer-managed keys.'
    },
    {
      title: 'Data loss prevention',
      desc: 'Classification-driven watermarks, download/print restrictions and expiring share links.'
    },
    {
      title: 'Threat detection',
      desc: 'Anomaly alerts, malware scanning on upload and SIEM log streaming.'
    },
    {
      title: 'Integrity',
      desc: 'SHA-256 content hashing and tamper-evident, hash-chained audit trails.'
    },
    {
      title: 'Secure engineering',
      desc: 'Code review, SAST/DAST, dependency scanning and independent penetration testing.'
    },
    {
      title: 'Privacy by design',
      desc: 'PII detection, redaction, purpose-bound retention, data-subject request workflows and regional data residency.'
    },
    {
      title: 'Privileged access control',
      desc: 'Just-in-time admin elevation; administrators cannot silently alter content or audit logs.'
    },
    {
      title: 'Resilience',
      desc: 'Immutable, encrypted backups with regular restore testing and documented recovery plans.'
    }
  ],
  operations: [
    { title: '24/7', desc: 'Security monitoring and alerting for SaaS environments' },
    { title: 'Least', desc: 'Privilege by default for users, services and administrators' },
    { title: 'Tested', desc: 'Independent penetration testing and vulnerability management' },
    { title: 'Logged', desc: 'Security events streamed to your SIEM in real time' }
  ]
}

export const COMPLIANCE_FRAMEWORK = {
  title: 'Compliance Framework',
  subtitle: 'One control set, many regulations',
  intro:
    'Rather than building separate solutions for each regulation, SmartiDP EDMS implements a common set of compliance controls that map to the requirements of major global frameworks.',
  categories: [
    {
      name: 'Life sciences (GxP)',
      frameworks: ['FDA 21 CFR Part 11', 'EU GMP Annex 11', 'GAMP 5', 'ALCOA+']
    },
    {
      name: 'Quality management',
      frameworks: ['ISO 9001:2015', 'ISO 13485:2016', 'FDA QMSR']
    },
    {
      name: 'Information security',
      frameworks: ['ISO/IEC 27001:2022', 'SOC 2', 'NIST SP 800-53']
    },
    {
      name: 'Data privacy',
      frameworks: ['GDPR', 'HIPAA', 'CCPA/CPRA', 'PDPL']
    },
    {
      name: 'Records management',
      frameworks: ['ISO 15489-1', 'ISO 19005 PDF/A', 'ISO 16175']
    },
    {
      name: 'Electronic signatures',
      frameworks: ['eIDAS', 'ESIGN Act', 'UETA']
    }
  ],
  matrix: [
    {
      framework: '21 CFR Part 11 / Annex 11',
      auditTrail: 'Core requirement supported',
      eSignature: 'Core requirement supported',
      accessControl: 'Core requirement supported',
      encryption: 'Supporting control',
      versioning: 'Core requirement supported',
      workflow: 'Core requirement supported',
      retention: 'Core requirement supported',
      validation: 'Core requirement supported'
    },
    {
      framework: 'ISO 9001 / ISO 13485',
      auditTrail: 'Supporting control',
      eSignature: 'Supporting control',
      accessControl: 'Core requirement supported',
      encryption: 'Supporting control',
      versioning: 'Core requirement supported',
      workflow: 'Core requirement supported',
      retention: 'Core requirement supported',
      validation: 'Core requirement supported'
    },
    {
      framework: 'ISO 27001 / SOC 2 / NIST',
      auditTrail: 'Core requirement supported',
      eSignature: 'Supporting control',
      accessControl: 'Core requirement supported',
      encryption: 'Core requirement supported',
      versioning: 'Supporting control',
      workflow: 'Supporting control',
      retention: 'Supporting control',
      validation: 'Supporting control'
    },
    {
      framework: 'GDPR / HIPAA',
      auditTrail: 'Core requirement supported',
      eSignature: 'Supporting control',
      accessControl: 'Core requirement supported',
      encryption: 'Core requirement supported',
      versioning: 'Supporting control',
      workflow: 'Supporting control',
      retention: 'Core requirement supported',
      validation: 'Supporting control'
    },
    {
      framework: 'ISO 15489',
      auditTrail: 'Core requirement supported',
      eSignature: 'Supporting control',
      accessControl: 'Supporting control',
      encryption: 'Supporting control',
      versioning: 'Core requirement supported',
      workflow: 'Supporting control',
      retention: 'Core requirement supported',
      validation: 'Supporting control'
    },
    {
      framework: 'eIDAS / ESIGN / UETA',
      auditTrail: 'Core requirement supported',
      eSignature: 'Core requirement supported',
      accessControl: 'Core requirement supported',
      encryption: 'Supporting control',
      versioning: 'Supporting control',
      workflow: 'Supporting control',
      retention: 'Supporting control',
      validation: 'Supporting control'
    }
  ]
}

export const REGULATORY_DEEP_DIVE = {
  title: 'Regulatory Deep-Dive',
  subtitle: 'Key requirements, built-in controls',
  intro: 'Highlights of how core regulatory requirements are implemented in the platform.',
  items: [
    {
      requirement: 'Secure, time-stamped audit trails',
      reference: 'Part 11 §11.10(e) · Annex 11 §9',
      control:
        'Append-only, hash-chained audit service records user, UTC time, action, old/new values and reason for change. No user can edit or delete entries.'
    },
    {
      requirement: 'Electronic signatures',
      reference: 'Part 11 §11.50–11.200 · eIDAS Art. 25–26',
      control:
        'Two-component re-authentication, displayed signature meaning, cryptographic binding to the exact signed version; optional PKI and qualified signatures.'
    },
    {
      requirement: 'System validation',
      reference: 'Part 11 §11.10(a) · Annex 11 §4 · GAMP 5',
      control:
        'Validation accelerator: URS templates, risk assessment, traceability matrix, IQ/OQ evidence and release impact notes.'
    },
    {
      requirement: 'Access control',
      reference: 'Part 11 §11.10(d,g) · ISO 27001 A.5.15 · HIPAA §164.312(a)',
      control:
        'SSO + MFA, RBAC/ABAC, server-side authorisation of every action, automatic session timeout.'
    },
    {
      requirement: 'Document control',
      reference: 'ISO 9001 §7.5 · ISO 13485 §4.2.4',
      control:
        'Review and approval before release, revision status, obsolete-version withdrawal, external document register.'
    },
    {
      requirement: 'Records retention & disposition',
      reference: 'ISO 15489 §8.6, §9.9 · GDPR Art. 5(1)(e)',
      control:
        'Retention schedules, legal hold, multi-level disposition approval and destruction certificates.'
    },
    {
      requirement: 'Data integrity (ALCOA+)',
      reference: 'FDA, MHRA, PIC/S guidance',
      control:
        'Attributable actions, server timestamps, preserved originals, hash verification, complete version history.'
    },
    {
      requirement: 'Data-subject rights',
      reference: 'GDPR Art. 15–20',
      control:
        'DSAR workflow to find, collate, redact, export or erase personal data — respecting legal holds.'
    },
    {
      requirement: 'Security of processing',
      reference: 'GDPR Art. 32 · SOC 2 CC6 · NIST SC-8/28',
      control:
        'Encryption in transit and at rest, monitoring, resilience and regular independent testing.'
    },
    {
      requirement: 'Backup & continuity',
      reference: 'Annex 11 §7, §16 · ISO 27001 A.8.13',
      control:
        'Encrypted, geo-redundant backups, tested restores and documented disaster-recovery plans.'
    }
  ],
  sharedResponsibility:
    'Shared responsibility: the platform provides technical controls and validation evidence; customers maintain procedures, training, configuration governance and performance qualification.'
}

export const REGULATED_INDUSTRIES = {
  title: 'Regulated Industries',
  subtitle: 'Purpose-built for industries where compliance is critical',
  intro:
    'Pre-configured solution templates accelerate deployment with industry-specific document types, workflows, metadata and retention rules.',
  sectors: [
    {
      id: 'pharma',
      name: 'Pharmaceuticals & Biotech',
      useCases: 'SOPs, batch records, validation documents, regulatory submissions, CMC, training records.',
      standards: '21 CFR Part 11 · EU Annex 11 · GAMP 5 · ICH Q10 · ALCOA+'
    },
    {
      id: 'meddev',
      name: 'Medical Devices',
      useCases: 'Design history files, technical documentation, device master records, risk files, CAPA.',
      standards: 'ISO 13485 · FDA QMSR · EU MDR / IVDR · ISO 14971'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      useCases: 'Patient records, consent forms, clinical policies, accreditation evidence, HR credentials.',
      standards: 'HIPAA · GDPR · ISO 27001 · national health-data laws'
    },
    {
      id: 'finance',
      name: 'Banking, Financial Services & Insurance',
      useCases: 'KYC/onboarding, loan files, policies, claims, board papers, regulatory reporting.',
      standards: 'SOC 2 · ISO 27001 · GDPR · record-keeping & AML regulations'
    },
    {
      id: 'government',
      name: 'Government & Public Sector',
      useCases: 'Case files, correspondence, permits, procurement, public records and archives.',
      standards: 'ISO 15489 · ISO 16175 · NIST SP 800-53 · data sovereignty'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing, Energy & Utilities',
      useCases: 'Engineering drawings, work instructions, HSE documents, asset and maintenance records.',
      standards: 'ISO 9001 · ISO 14001 · ISO 45001 · IATF 16949'
    },
    {
      id: 'legal',
      name: 'Legal & Professional Services',
      useCases: 'Matter files, contracts, e-discovery, client correspondence, precedent libraries.',
      standards: 'GDPR · legal hold · eIDAS / ESIGN · confidentiality controls'
    },
    {
      id: 'cro',
      name: 'Laboratories & CROs',
      useCases: 'Study protocols, lab notebooks, certificates of analysis, method validation, TMF.',
      standards: 'GLP · GCP · ISO/IEC 17025 · 21 CFR Part 11'
    }
  ],
  templateFeatures: [
    {
      title: 'Document types',
      desc: 'Pre-defined types, metadata and numbering schemes.'
    },
    {
      title: 'Workflows',
      desc: 'Industry-standard review, approval and change processes.'
    },
    {
      title: 'Retention rules',
      desc: 'Starter retention schedules aligned with common requirements.'
    },
    {
      title: 'Compliance pack',
      desc: 'Control mappings and validation documentation.'
    }
  ]
}

export const CROSS_INDUSTRY_USE_CASES = {
  title: 'Cross-Industry Use Cases',
  subtitle: 'Value in every department, in every industry',
  intro:
    'Beyond regulated content, SmartiDP EDMS digitises and automates the document-heavy processes found in every organisation.',
  useCases: [
    {
      department: 'Finance',
      name: 'Accounts payable',
      desc: 'Capture invoices from any channel, extract data, match to POs in ERP and route for approval — reducing manual entry and late-payment risk.'
    },
    {
      department: 'Legal',
      name: 'Contract lifecycle',
      desc: 'Templates, negotiation, approval, e-signature, obligation tracking and renewal alerts in one governed repository.'
    },
    {
      department: 'HR',
      name: 'Digital employee files',
      desc: 'Onboarding packs, policies with read-and-acknowledge, confidential personnel files and retention by employment status.'
    },
    {
      department: 'Engineering',
      name: 'Drawings & specs',
      desc: 'Revision-controlled drawings, specifications and change orders linked to products and assets.'
    },
    {
      department: 'Procurement',
      name: 'Supplier management',
      desc: 'Supplier qualification documents, certificates with expiry alerts, agreements and audit reports.'
    },
    {
      department: 'Customer service',
      name: 'Correspondence',
      desc: 'Inbound mail and email classified and routed to the right team, linked to customer records in CRM.'
    },
    {
      department: 'Corporate',
      name: 'Policies & governance',
      desc: 'Board papers, policies and procedures with controlled publication and attestation campaigns.'
    },
    {
      department: 'IT',
      name: 'Knowledge & ISMS evidence',
      desc: 'Runbooks, architecture records and ISO 27001 evidence maintained with ownership and review cycles.'
    },
    {
      department: 'Records office',
      name: 'Digitisation',
      desc: 'Back-file scanning projects converting paper archives into searchable, retention-managed digital records.'
    }
  ],
  scaleModel: {
    title: 'Start small, scale fast',
    desc: 'Many customers begin with a single high-impact process — such as accounts payable or SOP management — then expand across the enterprise on the same platform, reusing security, metadata and integrations.',
    phases: ['Pilot', 'Department', 'Enterprise']
  }
}

export const IMPLEMENTATION_AND_SUCCESS = {
  title: 'Implementation & Customer Success',
  subtitle: 'A proven path from kick-off to value',
  intro:
    'Our implementation methodology combines agile delivery with the documentation rigour regulated organisations require — reducing risk and accelerating time to value.',
  expectations: [
    {
      title: 'Validation accelerator',
      desc: 'Pre-written URS, risk assessment, traceability matrix and test scripts reduce validation effort for GxP customers.'
    },
    {
      title: 'Change management & training',
      desc: 'Role-based training, train-the-trainer programmes, e-learning content and adoption campaigns.'
    },
    {
      title: 'Support & success',
      desc: 'Tiered support plans, named customer success managers and regular health checks.'
    }
  ],
  servicesPortfolio: [
    {
      service: 'Advisory',
      desc: 'Information governance strategy, process redesign and roadmap planning.'
    },
    {
      service: 'Migration',
      desc: 'Legacy ECM, file share and paper archive migration with verification reports.'
    },
    {
      service: 'Managed services',
      desc: 'Ongoing administration, configuration changes and validated-state maintenance.'
    },
    {
      service: 'Training academy',
      desc: 'Administrator, power-user and end-user curricula with certification.'
    }
  ],
  methodologySteps: [
    {
      step: '1',
      name: 'Discover',
      desc: 'Process workshops, requirements, success KPIs and business case.'
    },
    {
      step: '2',
      name: 'Design',
      desc: 'Information architecture, metadata, security model and workflows.'
    },
    {
      step: '3',
      name: 'Configure',
      desc: 'Iterative configuration and integration with fortnightly demos.'
    },
    {
      step: '4',
      name: 'Validate',
      desc: 'Risk-based testing, IQ/OQ/PQ support and user acceptance.'
    },
    {
      step: '5',
      name: 'Migrate',
      desc: 'Verified migration of legacy content and metadata.'
    },
    {
      step: '6',
      name: 'Go live',
      desc: 'Training, change management and hyper-care support.'
    },
    {
      step: '7',
      name: 'Optimise',
      desc: 'KPI reviews, adoption analytics and roadmap planning.'
    }
  ],
  metrics: [
    { value: 'Weeks', label: 'to launch an initial process using solution templates' },
    { value: 'Agile', label: 'delivery with visible progress every sprint' },
    { value: 'GxP', label: 'documentation rigour for validated environments' },
    { value: '24/7', label: 'platform monitoring for SaaS deployments' }
  ],
  commitment:
    'Success is not go-live — it is lasting adoption and measurable business outcomes. Every engagement is measured against the KPIs agreed in the Discover phase.'
}
IMPLEMENTATION_AND_SUCCESS.methodology = IMPLEMENTATION_AND_SUCCESS.methodologySteps

export const WHY_SMARTIDP_EDMS = {
  title: 'Why SmartiDP EDMS',
  subtitle: 'Ready to transform how your enterprise manages information?',
  pillars: [
    {
      title: 'AI at the core',
      desc: 'Intelligent document processing built in — not bolted on.'
    },
    {
      title: 'Compliance-ready',
      desc: 'Controls mapped to 12+ global regulations and standards.'
    },
    {
      title: 'Built for adoption',
      desc: 'Modern UX across web, Office and mobile.'
    },
    {
      title: 'Configurable',
      desc: 'No-code workflows, metadata and rules.'
    },
    {
      title: 'Open & integrated',
      desc: 'API-first platform for your enterprise stack.'
    },
    {
      title: 'Deploy your way',
      desc: 'SaaS, private cloud or on-premise.'
    }
  ],
  cta: {
    title: 'See SmartiDP EDMS in action',
    desc: 'Book a personalised demonstration tailored to your industry, processes and compliance requirements.',
    headline: 'See SmartiDP EDMS in action',
    subline:
      'Book a personalised demonstration tailored to your industry, processes and compliance requirements.',
    buttonText: 'Request a demo →',
    website: 'www.smartidp.ai'
  }
}

