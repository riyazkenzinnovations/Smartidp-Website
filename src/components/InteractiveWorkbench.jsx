import React, { useState } from 'react'
import {
  FileText,
  ScanText,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Eye,
  Table,
  Code2,
  Check,
  RefreshCw,
  Lock,
  FileSignature,
  History,
  AlertTriangle
} from 'lucide-react'

const SAMPLE_DOCS = [
  {
    id: 'sop',
    title: 'SOP-QA-0142 · Deviation Handling',
    category: 'Life Sciences / Quality',
    status: 'Effective v4.0',
    compliance: '21 CFR Part 11 · GAMP 5',
    signedBy: 'Dr. Evelyn Vance (QA Head)',
    signedTime: '2026-03-14 09:42 UTC',
    meaning: 'Regulatory Approval & Release',
    fields: [
      { label: 'Document Type', value: 'Standard Operating Procedure (SOP)', conf: 100 },
      { label: 'Classification', value: 'Internal Restricted (GxP)', conf: 100 },
      { label: 'Document Owner', value: 'Quality Assurance Dept.', conf: 99.8 },
      { label: 'Effective Date', value: '2026-03-14', conf: 100 },
      { label: 'Periodic Review Due', value: '2028-03-14 (24 months)', conf: 99.7 },
      { label: 'Assigned Training', value: 'Mandatory Read-and-Acknowledge (142 users)', conf: 99.5 }
    ],
    versions: [
      { ver: 'v4.0', status: 'Effective', date: '2026-03-14', user: 'E. Vance (QA Head)' },
      { ver: 'v3.1', status: 'Superseded (Withdrawn)', date: '2024-03-10', user: 'M. Chen (QA Lead)' },
      { ver: 'v3.0', status: 'Superseded (Archived)', date: '2022-03-01', user: 'M. Chen (QA Lead)' }
    ],
    auditLogs: [
      { time: '09:42:15 UTC', action: 'Approved with e-signature (meaning: Approval)', user: 'E. Vance (QA Head)', hash: 'sha256:88fa2b...' },
      { time: '09:15:02 UTC', action: 'Parallel review completed (3/3 reviewers)', user: 'System (Workflow Engine)', hash: 'sha256:44b19e...' },
      { time: '08:02:40 UTC', action: 'Redline revision comment #4 marked resolved', user: 'J. Doe (Author)', hash: 'sha256:190d7a...' },
      { time: 'Yesterday', action: 'Draft change submitted for technical review', user: 'J. Doe (Author)', hash: 'sha256:32c841...' }
    ]
  },
  {
    id: 'invoice',
    title: 'Commercial Invoice #55190',
    category: 'Finance / Accounts Payable',
    status: 'Ready for Payment',
    compliance: 'ISO 9001 · 3-Way PO Match',
    signedBy: 'A. Cooper (Finance Approver)',
    signedTime: '2026-03-14 11:20 UTC',
    meaning: 'Payment Authorization',
    fields: [
      { label: 'Supplier Name', value: 'Example Supplies Ltd', conf: 97.4 },
      { label: 'Invoice Number', value: 'INV-55190', conf: 99.1 },
      { label: 'PO Reference', value: 'PO-88213 (82% conf - Flagged for Review)', conf: 82.0 },
      { label: 'Net Subtotal', value: '$11,500.00', conf: 99.5 },
      { label: 'Tax Amount (8.5%)', value: '$980.00', conf: 98.8 },
      { label: 'Total Due', value: '$12,480.00', conf: 99.2 }
    ],
    versions: [
      { ver: 'v1.0', status: 'Effective Record', date: '2026-03-14', user: 'SmartIDP Ingestion AI' }
    ],
    auditLogs: [
      { time: '11:20:00 UTC', action: 'Payment approved in ERP NetSuite', user: 'A. Cooper (Finance)', hash: 'sha256:77b102...' },
      { time: '10:45:11 UTC', action: 'Human-in-the-loop review station approved PO match', user: 'K. Patel (AP Specialist)', hash: 'sha256:99f301...' },
      { time: '10:42:00 UTC', action: 'OCR extraction & automated cross-validation completed', user: 'SmartIDP Ingest', hash: 'sha256:55e819...' }
    ]
  },
  {
    id: 'dhf',
    title: 'DHF-MD-0914 · Design History File',
    category: 'Medical Devices / ISO 13485',
    status: 'Locked for CE Mark',
    compliance: 'ISO 13485 · EU MDR · FDA QMSR',
    signedBy: 'M. Vance (Chief Regulatory Officer)',
    signedTime: '2026-03-14 14:15 UTC',
    meaning: 'Technical Documentation Sign-Off',
    fields: [
      { label: 'Device Family', value: 'CardioSmart Infusion System Gen-3', conf: 100 },
      { label: 'Risk File Standard', value: 'ISO 14971:2019 Matrix Aligned', conf: 99.8 },
      { label: 'Classification', value: 'Class IIb Active Medical Device', conf: 100 },
      { label: 'Traceability Matrix', value: '100% Verification Coverage (48/48 Req)', conf: 99.9 },
      { label: 'Change Control Ref', value: 'ECO-2026-0412 (Firmware v2.4)', conf: 99.4 },
      { label: 'Notified Body Dossier', value: 'Technical File Section 4.2 Approved', conf: 100 }
    ],
    versions: [
      { ver: 'v2.0', status: 'Locked (Effective)', date: '2026-03-14', user: 'M. Vance (Reg Affairs)' },
      { ver: 'v1.2', status: 'Superseded Draft', date: '2025-11-20', user: 'T. Becker (Lead Eng)' },
      { ver: 'v1.0', status: 'Archived Baseline', date: '2025-06-15', user: 'T. Becker (Lead Eng)' }
    ],
    auditLogs: [
      { time: '14:15:30 UTC', action: 'DHF locked & signed for submission (meaning: Technical Approval)', user: 'M. Vance (Reg Affairs)', hash: 'sha256:129ef4...' },
      { time: '12:00:10 UTC', action: 'FMEA Risk analysis updated with clinical feedback', user: 'R. Ramos (Safety Officer)', hash: 'sha256:443ac1...' },
      { time: 'Yesterday', action: 'Design verification report #88 attached to requirement matrix', user: 'T. Becker (Lead Eng)', hash: 'sha256:908fa1...' }
    ]
  }
]

export default function InteractiveWorkbench({ onOpenDemoModal }) {
  const [selectedDoc, setSelectedDoc] = useState(SAMPLE_DOCS[0])
  const [activeView, setActiveView] = useState('doc') // 'doc' | 'audit' | 'versions'
  const [isSimulating, setIsSimulating] = useState(false)

  const handleSimulate = (doc) => {
    setIsSimulating(true)
    setSelectedDoc(doc)
    setTimeout(() => {
      setIsSimulating(false)
    }, 500)
  }

  return (
    <section className="py-24 bg-[#F5F7F5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E8F3EC] border border-[#14532D]/20 text-[#14532D] text-xs font-semibold mb-3">
            <Eye className="h-3.5 w-3.5" />
            <span>Interactive Platform Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#14532D] tracking-tight">
            Experience Governed Document Management
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Test how SmartiDP EDMS presents controlled documents, electronic signatures, and tamper-evident audit trails.
          </p>

          {/* Doc Switcher Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {SAMPLE_DOCS.map((doc) => {
              const isSelected = selectedDoc.id === doc.id
              return (
                <button
                  key={doc.id}
                  onClick={() => handleSimulate(doc)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#14532D] text-white border-[#14532D] shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-300'
                  }`}
                >
                  <FileText className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-[#14532D]'}`} />
                  <span>{doc.title}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-emerald-800 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {doc.category}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Workbench Frame */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-slate-300/80 bg-white shadow-xl overflow-hidden">
          {/* Top Bar */}
          <div className="px-6 py-4 bg-[#F5F7F5] border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-600" />
              <div>
                <span className="text-sm font-bold text-slate-900 block">{selectedDoc.title}</span>
                <span className="text-xs text-slate-500">{selectedDoc.compliance}</span>
              </div>
            </div>

            {/* View switcher */}
            <div className="flex items-center p-1 rounded-xl bg-white border border-slate-200 text-xs">
              <button
                onClick={() => setActiveView('doc')}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeView === 'doc' ? 'bg-[#14532D] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Document & Properties
              </button>
              <button
                onClick={() => setActiveView('audit')}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeView === 'audit' ? 'bg-[#14532D] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Immutable Audit Trail
              </button>
              <button
                onClick={() => setActiveView('versions')}
                className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  activeView === 'versions' ? 'bg-[#14532D] text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Version History
              </button>
            </div>
          </div>

          {/* Simulation Scanning Banner */}
          {isSimulating && (
            <div className="bg-[#E8F3EC] border-b border-[#14532D]/20 px-6 py-2.5 text-xs text-[#14532D] font-bold flex items-center justify-center gap-2 animate-pulse">
              <RefreshCw className="h-3.5 w-3.5 animate-spin" />
              <span>Verifying cryptographic signatures and retrieving permission-trimmed metadata...</span>
            </div>
          )}

          {/* Inner Content */}
          <div className="p-8">
            {activeView === 'doc' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="p-4 rounded-2xl bg-[#E8F3EC]/80 border border-[#14532D]/20 text-xs text-slate-800">
                    <div className="flex items-center gap-2 font-bold text-[#14532D] text-sm mb-1">
                      <FileSignature className="h-4 w-4" />
                      <span>Certified Electronic Signature (21 CFR Part 11)</span>
                    </div>
                    <div className="space-y-0.5 text-slate-700">
                      <div>Signed By: <strong className="text-slate-900">{selectedDoc.signedBy}</strong></div>
                      <div>Timestamp: <span className="font-mono">{selectedDoc.signedTime}</span></div>
                      <div>Regulatory Meaning: <strong className="text-emerald-900">{selectedDoc.meaning}</strong></div>
                      <div className="text-[11px] text-slate-500 font-mono mt-1">
                        SHA-256 Hash: 88fa2b109e44bc7190d7a2210c4391e... (Tamper Evident)
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Extracted Metadata & Classification
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedDoc.fields.map((f, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-[#F5F7F5] border border-slate-200">
                          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                            <span>{f.label}</span>
                            <span className={`font-mono text-[10px] font-bold ${f.conf < 90 ? 'text-amber-700' : 'text-[#14532D]'}`}>
                              {f.conf}% conf
                            </span>
                          </div>
                          <div className="text-xs font-bold text-slate-900 truncate">
                            {f.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F5F7F5] rounded-2xl border border-slate-200 p-6 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#14532D]">
                    Governance Summary
                  </div>
                  <div className="space-y-3 text-xs text-slate-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" />
                      <span>Single effective copy displayed. Obsolete revisions archived.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" />
                      <span>Watermarked controlled printing with copy-number serialization.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" />
                      <span>Automated 24-month periodic review trigger mapped to calendar.</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <button
                      onClick={onOpenDemoModal}
                      className="w-full py-2.5 rounded-xl bg-[#14532D] hover:bg-[#064E3B] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                    >
                      Inspect in Live Demonstration
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeView === 'audit' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-[#14532D]">Append-Only Hash-Chained Audit Trail</span>
                  <span className="font-mono text-[11px] text-slate-500">UTC Coordinated Standard</span>
                </div>
                <div className="space-y-3">
                  {selectedDoc.auditLogs.map((log, lIdx) => (
                    <div key={lIdx} className="p-4 rounded-xl bg-[#F5F7F5] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="font-bold text-slate-900">{log.action}</div>
                        <div className="text-slate-500 text-[11px] mt-0.5">Executed by: <strong className="text-slate-700">{log.user}</strong></div>
                      </div>
                      <div className="text-right sm:text-right font-mono text-[11px]">
                        <span className="text-[#14532D] font-bold block">{log.time}</span>
                        <span className="text-slate-400 text-[10px]">{log.hash}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeView === 'versions' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                  <span className="font-bold text-[#14532D]">Complete Version History</span>
                  <span className="text-xs text-slate-500">Major/Minor Revision Governance</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans">
                    <thead className="bg-[#F5F7F5] text-slate-600 border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-4 font-semibold">Version</th>
                        <th className="py-2.5 px-4 font-semibold">Lifecycle Status</th>
                        <th className="py-2.5 px-4 font-semibold">Effective Date</th>
                        <th className="py-2.5 px-4 font-semibold">Author / Approver</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {selectedDoc.versions.map((v, vIdx) => (
                        <tr key={vIdx} className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold font-mono text-[#14532D]">{v.ver}</td>
                          <td className="py-3 px-4">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${v.status.includes('Effective') ? 'bg-[#E8F3EC] text-[#14532D]' : 'bg-slate-100 text-slate-500'}`}>
                              {v.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-mono text-slate-600">{v.date}</td>
                          <td className="py-3 px-4 text-slate-700">{v.user}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

