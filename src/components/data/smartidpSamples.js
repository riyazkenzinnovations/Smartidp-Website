export const SAMPLE_DOCS = [
  {
    id: 'sop',
    code: 'SOP-QA-0142',
    revision: 'Rev 4.0',
    title: 'Deviation Handling & CAPA Protocol',
    category: 'Life Sciences / GxP',
    compliance: '21 CFR Part 11 · GAMP 5 · EU Annex 11',
    status: 'Effective',
    statusColor: 'emerald',
    orgName: 'KENZ BIOPHARMA LABS · QUALITY SYSTEM',
    docType: 'Standard Operating Procedure (SOP)',
    classification: 'Restricted GxP Controlled',
    effectiveDate: '2026-03-14',
    reviewCycle: '24 Months (Due 2028-03-14)',
    signedBy: 'Dr. Evelyn Vance, Ph.D.',
    signerRole: 'VP of Quality Assurance & Regulatory Affairs',
    authMethod: 'Two-Component (SAML 2.0 SSO + FIDO2 WebAuthn)',
    signedTime: '2026-03-14 09:42:15 UTC',
    meaning: 'Regulatory Approval & Commercial Release',
    sha256: '88fa2b109e44bc7190d7a2210c4391e6b8a1c90df0428d01f92e3a15b7c024d9',
    certId: 'KENZ-CERT-2026-GxP-8891',
    fields: [
      { label: 'Document Type', value: 'Standard Operating Procedure (SOP)', conf: 100, verified: true },
      { label: 'Classification', value: 'Internal Restricted (GxP)', conf: 100, verified: true },
      { label: 'Document Owner', value: 'Quality Assurance Dept.', conf: 99.8, verified: true },
      { label: 'Effective Date', value: '2026-03-14', conf: 100, verified: true },
      { label: 'Periodic Review Cycle', value: '24 Months (March 2028)', conf: 99.7, verified: true },
      { label: 'Assigned Training', value: 'Mandatory Read-and-Acknowledge (142 Users)', conf: 99.5, verified: true }
    ],
    docClauses: [
      {
        num: '1.0',
        title: 'PURPOSE & REGULATORY SCOPE',
        text: 'This Standard Operating Procedure governs the systematic identification, triage, root-cause investigation, and CAPA escalation of deviations arising during commercial pharmaceutical packaging, sterile fill-finish, and cold-chain distribution.',
        ocrMatch: null
      },
      {
        num: '2.0',
        title: 'INCIDENT CLASSIFICATION & TRIAGE',
        text: 'All non-conformances must be classified within 2 hours of detection into Minor (no product impact), Major (process parameter deviation within validation limits), or Critical (sterility breach or potency excursion requiring QA quarantine).',
        ocrMatch: 'Classification: Internal Restricted (GxP)'
      },
      {
        num: '3.0',
        title: 'MANDATORY PERIODIC REVIEW & GOVERNANCE',
        text: 'Per 21 CFR Part 11 and EU GMP Annex 11, this procedure remains effective for a strict 24-month horizon. Automated re-qualification workflows trigger at Day 660 with mandatory electronic read-and-acknowledge assigned to 142 certified operators.',
        ocrMatch: 'Periodic Review: 24 Months · Mandatory Read-and-Acknowledge'
      }
    ],
    versions: [
      { ver: 'v4.0', status: 'Effective', date: '2026-03-14', user: 'Dr. Evelyn Vance (QA Head)', notes: 'Updated 24h CAPA trigger per FDA warning letter guidance.' },
      { ver: 'v3.1', status: 'Superseded', date: '2024-03-10', user: 'Marcus Chen (QA Lead)', notes: 'Minor terminology harmonization with ISO 9001:2015.' },
      { ver: 'v3.0', status: 'Archived Baseline', date: '2022-03-01', user: 'Marcus Chen (QA Lead)', notes: 'Initial migration into SmartiDP cloud repository.' }
    ],
    diffs: [
      {
        section: 'Section 2.3 · Investigation Escalation Timelines',
        oldText: 'Investigations shall initiate within 48 business hours of initial triage notification.',
        newText: 'Investigations shall initiate within 24 calendar hours per FDA warning letter guidance 2026.'
      },
      {
        section: 'Section 4.1 · Batch Disposition Electronic Sign-Off',
        oldText: 'Manual wet signatures permitted on Annex-C when network outages exceed 6 hours.',
        newText: 'All batch disposition decisions strictly require two-component 21 CFR Part 11 digital signatures; manual waivers prohibited.'
      }
    ],
    auditLogs: [
      { time: '09:42:15.819 UTC', event: 'E-SIGNATURE APPLIED', user: 'Dr. Evelyn Vance (QA Head)', terminal: '10.240.14.92 · Secure Workstation', hash: 'sha256:88fa2b10...', prevHash: 'sha256:44b19e...' },
      { time: '09:15:02.104 UTC', event: 'PARALLEL WORKFLOW APPROVED', user: 'System (BPMN 2.0 Engine)', terminal: 'SmartIDP Workflow Cluster', hash: 'sha256:44b19e02...', prevHash: 'sha256:190d7a...' },
      { time: '08:02:40.450 UTC', event: 'REDLINE DELTA RESOLVED', user: 'James Doe (Lead Author)', terminal: '10.240.14.88 · Authoring Station', hash: 'sha256:190d7a22...', prevHash: 'sha256:32c841...' },
      { time: 'Yesterday 16:30 UTC', event: 'MULTIMODAL OCR INGEST', user: 'SmartIDP Neural Ingest Core', terminal: 'OCR Worker Instance #04', hash: 'sha256:32c841e0...', prevHash: 'GENESIS-BLOCK' }
    ]
  },
  {
    id: 'invoice',
    code: 'INV-55190',
    revision: 'PO-88213',
    title: 'Accounts Payable Commercial Invoice',
    category: 'Finance / AP Automation',
    compliance: 'ISO 9001 · 3-Way PO Reconciliation · GAAP',
    status: 'Ready for Payment',
    statusColor: 'blue',
    orgName: 'KENZ ENTERPRISE SYSTEMS · FINANCE OPERATIONS',
    docType: 'Commercial Tax Invoice',
    classification: 'Confidential Financial Record',
    effectiveDate: '2026-03-14',
    reviewCycle: '7 Years Retention Schedule',
    signedBy: 'Alistair Cooper, CPA',
    signerRole: 'Director of Corporate Financial Controllership',
    authMethod: 'Two-Component (Microsoft Entra ID + TOTP)',
    signedTime: '2026-03-14 11:20:04 UTC',
    meaning: 'ERP NetSuite Disbursement Authorization',
    sha256: '77b1029fe8011cb20194a552199bce8812a048dc0910e42718fb89190cde0142',
    certId: 'KENZ-FIN-2026-AP-5519',
    fields: [
      { label: 'Supplier Entity', value: 'BioMatrix Laboratory Supplies Ltd', conf: 99.4, verified: true },
      { label: 'Invoice Number', value: 'INV-55190 (Tax ID: US-991402)', conf: 100, verified: true },
      { label: 'Purchase Order Link', value: 'PO-88213 (Line Item 100% Match)', conf: 99.8, verified: true },
      { label: 'Net Subtotal', value: '$11,500.00 USD', conf: 100, verified: true },
      { label: 'Tax Amount (8.5%)', value: '$977.50 USD', conf: 99.2, verified: true },
      { label: 'Total Payable Amount', value: '$12,477.50 USD (Net 30)', conf: 100, verified: true }
    ],
    docClauses: [
      {
        num: 'ITEM 1',
        title: 'STERILE CONSUMABLES & LABWARE',
        text: 'Qty: 500 Units · Part #BM-901-T · Gamma-irradiated 50mL Centrifuge Tubes · Unit Price: $12.00 USD · Line Total: $6,000.00 USD. Verified against Receiving Slip GRN-2026-4410.',
        ocrMatch: 'Supplier: BioMatrix Supplies · Line Total: $6,000.00'
      },
      {
        num: 'ITEM 2',
        title: 'CALIBRATED MICROPIPETTE ARRAYS',
        text: 'Qty: 10 Units · Part #BM-PIPE-8 · 8-Channel Electronic Pipettor with NIST Calibration Certificate · Unit Price: $550.00 USD · Line Total: $5,500.00 USD.',
        ocrMatch: 'Purchase Order Link: PO-88213 · Line Total: $5,500.00'
      },
      {
        num: 'SUMMARY',
        title: 'TAX & PAYMENT RECONCILIATION',
        text: 'Subtotal: $11,500.00 USD · Applicable Sales Tax (8.5%): $977.50 USD · Grand Total: $12,477.50 USD · Payment Terms: Net 30 Days · Automated 3-way match matched PO, Invoice, and Goods Receipt.',
        ocrMatch: 'Total Payable Amount: $12,477.50 USD'
      }
    ],
    versions: [
      { ver: 'v1.1', status: 'Payment Authorized', date: '2026-03-14', user: 'Alistair Cooper (Finance)', notes: 'Approved 3-way ERP match with PO-88213.' },
      { ver: 'v1.0', status: 'Initial Ingestion', date: '2026-03-14', user: 'SmartIDP Ingestion AI', notes: 'Automated email inbox capture from billing@biomatrix.com.' }
    ],
    diffs: [
      {
        section: 'Line 2 Discrepancy Reconciliation',
        oldText: 'Tax rate parsed as 8.0% standard ($920.00 USD) - flagged for review.',
        newText: 'County surcharge applied (+0.5%) updated to exact 8.5% ($977.50 USD) matched against vendor master profile.'
      }
    ],
    auditLogs: [
      { time: '11:20:04.102 UTC', event: 'ERP PAYMENT RELEASED', user: 'Alistair Cooper (Finance)', terminal: 'NetSuite ERP Connector Gateway', hash: 'sha256:77b1029f...', prevHash: 'sha256:99f301...' },
      { time: '10:45:11.882 UTC', event: '3-WAY PO MATCH CONFIRMED', user: 'SmartIDP Match Engine', terminal: 'Automated Validation Station', hash: 'sha256:99f30140...', prevHash: 'sha256:55e819...' },
      { time: '10:42:00.320 UTC', event: 'OMNICHANNEL INGEST (EMAIL)', user: 'AP Inbound Ingestion Hub', terminal: 'Office 365 Exchange Listener', hash: 'sha256:55e81911...', prevHash: 'GENESIS-BLOCK' }
    ]
  },
  {
    id: 'dhf',
    code: 'DHF-MD-0914',
    revision: 'Rev 2.0',
    title: 'Design History File · CardioSmart Gen-3',
    category: 'Medical Devices / ISO 13485',
    compliance: 'ISO 13485:2016 · EU MDR 2017/745 · FDA QMSR 820',
    status: 'Locked for CE Submission',
    statusColor: 'purple',
    orgName: 'KENZ MEDTECH SYSTEMS · REGULATORY DOSSIER',
    docType: 'Medical Device Technical Dossier',
    classification: 'Class IIb Active Medical Device File',
    effectiveDate: '2026-03-14',
    reviewCycle: 'Permanent Device Lifecycle Record',
    signedBy: 'Madeline Vance, RAC',
    signerRole: 'Chief Regulatory Affairs & Quality Compliance Officer',
    authMethod: 'Two-Component (Okta Verify Push + Biometrics)',
    signedTime: '2026-03-14 14:15:30 UTC',
    meaning: 'Technical Documentation & CE Mark Sign-Off',
    sha256: '129ef402bb8a091e4a3199bc45120aef91209841bb02998a4421b0923e110492',
    certId: 'KENZ-MDR-2026-CE-0914',
    fields: [
      { label: 'Device Platform', value: 'CardioSmart Infusion System Gen-3', conf: 100, verified: true },
      { label: 'Risk Standard Compliance', value: 'ISO 14971:2019 Risk Management Aligned', conf: 99.8, verified: true },
      { label: 'Regulatory Classification', value: 'Class IIb Active Infusion Device', conf: 100, verified: true },
      { label: 'Traceability Matrix', value: '100% Verification Coverage (48/48 Req)', conf: 99.9, verified: true },
      { label: 'Engineering Change Ref', value: 'ECO-2026-0412 (Firmware Safety Kernel v2.4)', conf: 99.6, verified: true },
      { label: 'Notified Body Dossier', value: 'Technical File Section 4.2 Locked', conf: 100, verified: true }
    ],
    docClauses: [
      {
        num: 'SECTION 1',
        title: 'DEVICE DESCRIPTION & INTENDED CLINICAL USE',
        text: 'The CardioSmart Infusion System Gen-3 delivers controlled intravenous administration of critical cardiovascular therapies in ICU and emergency transport environments with dual redundant pressure sensors.',
        ocrMatch: 'Device: CardioSmart Infusion System Gen-3'
      },
      {
        num: 'SECTION 2',
        title: 'RISK MANAGEMENT & ALARM TRACEABILITY',
        text: 'In accordance with ISO 14971:2019 and IEC 60601-1-8, all single-fault occlusion scenarios trigger audible/visual alerts within 1.2 seconds, fail-safe clamping, and automated telemetry dispatch to nursing stations.',
        ocrMatch: 'Risk Standard: ISO 14971:2019 Aligned'
      },
      {
        num: 'SECTION 3',
        title: 'VERIFICATION MATRIX & REGULATORY LOCK',
        text: '48 of 48 design input requirements have verified protocols (Protocol DVP-880 through DVP-928) signed and locked under ECO-2026-0412. Uncontrolled modifications are cryptographically blocked.',
        ocrMatch: 'Traceability: 100% Verification Coverage (48/48 Req)'
      }
    ],
    versions: [
      { ver: 'v2.0', status: 'Locked (CE Ready)', date: '2026-03-14', user: 'Madeline Vance (Reg Affairs)', notes: 'Final submission freeze for TÜV SÜD Notified Body audit.' },
      { ver: 'v1.2', status: 'Superseded Draft', date: '2025-11-20', user: 'Thomas Becker (Lead Eng)', notes: 'Integrated human factors usability testing results per IEC 62366-1.' },
      { ver: 'v1.0', status: 'Archived Baseline', date: '2025-06-15', user: 'Thomas Becker (Lead Eng)', notes: 'Initial architecture definition baseline.' }
    ],
    diffs: [
      {
        section: 'Section 4.2 · Cybersecurity Kernel Update',
        oldText: 'Bluetooth Low Energy pairing allowed default PIN fallback during commissioning.',
        newText: 'Mandatory elliptic-curve cryptographic pairing (ECDSA P-256) enforced per FDA Postmarket Cybersecurity Guidance 2026.'
      }
    ],
    auditLogs: [
      { time: '14:15:30.902 UTC', event: 'DHF LOCKED FOR SUBMISSION', user: 'Madeline Vance (Reg Affairs)', terminal: '10.240.18.12 · Regulatory Station', hash: 'sha256:129ef402...', prevHash: 'sha256:443ac1...' },
      { time: '12:00:10.455 UTC', event: 'ISO 14971 RISK MATRIX SEALED', user: 'Dr. Rebecca Ramos (Safety Lead)', terminal: 'Risk Management Node #02', hash: 'sha256:443ac190...', prevHash: 'sha256:908fa1...' },
      { time: 'Yesterday 18:22 UTC', event: 'DESIGN VERIFICATION LINKED', user: 'Thomas Becker (Lead Eng)', terminal: '10.240.18.05 · Engineering Workstation', hash: 'sha256:908fa112...', prevHash: 'GENESIS-BLOCK' }
    ]
  }
]
