import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight, BadgeCheck, Check, Copy, ExternalLink, FileSignature, FileText,
  Fingerprint, GitBranch, History, Lock, RefreshCw, ScanText, ShieldCheck, Sparkles
} from 'lucide-react'
import { SAMPLE_DOCS } from './data/smartidpSamples'

const TABS = [
  { id: 'preview', label: 'Document & Extraction', icon: FileText },
  { id: 'signature', label: '21 CFR Part 11 Signature', icon: FileSignature },
  { id: 'audit', label: 'Audit Trail', icon: History, count: d => d.auditLogs.length },
  { id: 'diff', label: 'Version & Diff', icon: GitBranch, count: d => d.versions.length },
]

const STATUS_STYLES = {
  teal: 'bg-teal-50 text-teal-800 ring-teal-200',
  emerald: 'bg-teal-50 text-teal-800 ring-teal-200',
  blue: 'bg-[#F0FDF4] text-[#14532D] ring-[#14532D]/20',
  purple: 'bg-violet-50 text-violet-800 ring-violet-200',
}

const VERIFY_STAGES = [
  'Reading controlled payload',
  'Computing SHA-256 digest',
  'Comparing to ledger anchor',
  'Digest matches ledger anchor',
]

const KEYFRAMES = `
@keyframes wbFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }
.wb-fade { animation: wbFade .35s ease-out both; }
@media (prefers-reduced-motion: reduce) { .wb-fade { animation: none; } }
`

// Heuristic: link an extracted field to the clause it was read from.
function clauseIndexForField(field, clauses) {
  const words = field.value.split(/[\s()·:,]+/).filter(w => w.length > 4)
  return clauses.findIndex(c => c.ocrMatch && words.some(w => c.ocrMatch.includes(w)))
}

// Word-level LCS diff. Returns [{ k: 'same' | 'del' | 'add', t }].
function wordDiff(oldText, newText) {
  const a = oldText.split(' ')
  const b = newText.split(' ')
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0))
  for (let i = a.length - 1; i >= 0; i--)
    for (let j = b.length - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1])

  const out = []
  let i = 0, j = 0
  while (i < a.length || j < b.length) {
    if (i < a.length && j < b.length && a[i] === b[j]) { out.push({ k: 'same', t: a[i] }); i++; j++ }
    else if (j >= b.length || (i < a.length && dp[i + 1][j] >= dp[i][j + 1])) { out.push({ k: 'del', t: a[i] }); i++ }
    else { out.push({ k: 'add', t: b[j] }); j++ }
  }
  return out
}

export default function InteractiveWorkbench({ onOpenDemoModal }) {
  const [docIndex, setDocIndex] = useState(0)
  const doc = SAMPLE_DOCS[docIndex]
  const [tab, setTab] = useState('preview')
  const [activeField, setActiveField] = useState(null)
  const [highlights, setHighlights] = useState(true)
  const [verify, setVerify] = useState({ status: 'idle', stage: 0 })
  const [copied, setCopied] = useState(null)
  const [barsReady, setBarsReady] = useState(false)
  const [switching, setSwitching] = useState(false)
  const tabRefs = useRef([])

  const clauseLinks = useMemo(
    () => doc.fields.map(f => clauseIndexForField(f, doc.docClauses)),
    [doc]
  )

  const meanConf = useMemo(
    () => (doc.fields.reduce((s, f) => s + f.conf, 0) / doc.fields.length).toFixed(1),
    [doc]
  )

  // Reset per-document state and animate confidence bars in.
  useEffect(() => {
    setBarsReady(false)
    setVerify({ status: 'idle', stage: 0 })
    setActiveField(null)
    setSwitching(true)
    const t1 = setTimeout(() => setBarsReady(true), 80)
    const t2 = setTimeout(() => setSwitching(false), 450)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [docIndex])

  // Staged hash verification.
  useEffect(() => {
    if (verify.status !== 'running') return
    if (verify.stage >= VERIFY_STAGES.length - 1) {
      setVerify(v => ({ ...v, status: 'done' }))
      return
    }
    const t = setTimeout(() => setVerify(v => ({ ...v, stage: v.stage + 1 })), 550)
    return () => clearTimeout(t)
  }, [verify])

  const copy = (key) => {
    navigator.clipboard?.writeText(doc.sha256).catch(() => {})
    setCopied(key)
    setTimeout(() => setCopied(c => (c === key ? null : c)), 1800)
  }

  const onTabKey = (e, idx) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]
    if (!step) return
    e.preventDefault()
    const next = (idx + step + TABS.length) % TABS.length
    setTab(TABS[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-20 lg:py-28">
      <style>{KEYFRAMES}</style>

      {/* Quiet engineering-paper grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#0f172a_1px,transparent_1px),linear-gradient(90deg,#0f172a_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <div className="relative mx-auto w-full max-w-[1720px] px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Header: left-aligned editorial */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-[#14532D]">
              Interactive platform simulation
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Governed document management, end to end.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              See how SmartiDP EDMS ingests, extracts, verifies and signs controlled records across life sciences, finance and engineering.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <div className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 font-mono text-xs sm:text-sm text-slate-700">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-600" />
              </span>
              {SAMPLE_DOCS.length} sample records · ledger intact
            </div>
          </div>
        </div>

        {/* Document selector: ledger rows */}
        <div role="radiogroup" aria-label="Sample records" className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-3">
          {SAMPLE_DOCS.map((d, i) => {
            const selected = i === docIndex
            return (
              <button
                key={d.id}
                role="radio"
                aria-checked={selected}
                onClick={() => setDocIndex(i)}
                className={`group relative rounded-xl border p-4.5 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14532D] cursor-pointer ${
                  selected
                    ? 'border-slate-900 bg-white shadow-lg shadow-slate-900/5'
                    : 'border-slate-200 bg-white hover:border-slate-400'
                }`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-[3px] rounded-t-xl transition-colors ${
                    selected ? 'bg-[#14532D]' : 'bg-transparent group-hover:bg-slate-200'
                  }`}
                />
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm font-bold text-slate-800">{d.code}</span>
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${STATUS_STYLES[d.statusColor] || STATUS_STYLES.blue}`}>
                    {d.status}
                  </span>
                </div>
                <div className="mt-2 text-base font-semibold leading-snug text-slate-900">{d.title}</div>
                <div className="mt-1 text-xs sm:text-sm text-slate-600">{d.category}</div>
              </button>
            )
          })}
        </div>

        {/* Console */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-2xl shadow-slate-900/10">

          {/* Record titlebar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3.5">
            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm text-slate-700">
              <span className="font-bold text-slate-900">{doc.code}</span>
              <span className="text-slate-300">|</span>
              <span className="font-semibold text-[#14532D]">{doc.revision}</span>
              <span className="hidden text-slate-300 sm:inline">|</span>
              <span className="hidden sm:inline">{doc.effectiveDate}</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-slate-700">
              <span className="hidden md:inline font-semibold">SHA-256</span>
              <span className="rounded border border-slate-200 bg-white px-2.5 py-1 font-bold text-slate-800">
                {doc.sha256.slice(0, 14)}…
              </span>
              <button
                onClick={() => copy('header')}
                aria-label="Copy full SHA-256 digest"
                className="rounded border border-slate-200 bg-white p-1.5 text-slate-600 transition-colors hover:border-[#14532D] hover:text-[#14532D] cursor-pointer"
              >
                {copied === 'header' ? <Check className="h-4 w-4 text-teal-600" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Tab bar: sticky, scrollable on mobile */}
          <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
            <div role="tablist" aria-label="Workbench views" className="flex gap-2 overflow-x-auto p-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {TABS.map((t, idx) => {
                const Icon = t.icon
                const selected = tab === t.id
                return (
                  <button
                    key={t.id}
                    ref={el => (tabRefs.current[idx] = el)}
                    id={`tab-${t.id}`}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`panel-${t.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setTab(t.id)}
                    onKeyDown={e => onTabKey(e, idx)}
                    className={`flex shrink-0 items-center gap-2 rounded-lg px-4.5 py-3 text-sm sm:text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#14532D] cursor-pointer ${
                      selected ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                    <span className="whitespace-nowrap">{t.label}</span>
                    {t.count && (
                      <span className={`rounded px-2 py-0.5 font-mono text-xs sm:text-sm font-bold ${selected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
                        {t.count(doc)}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {switching && (
            <div role="status" className="flex items-center justify-center gap-2 border-b border-emerald-200 bg-[#F0FDF4] px-6 py-2 font-mono text-xs font-semibold text-[#14532D]">
              <RefreshCw className="h-3.5 w-3.5 motion-safe:animate-spin" />
              Ingesting {doc.code} and validating ledger hash…
            </div>
          )}

          <div className="min-h-[560px] p-5 sm:p-8">
            {tab === 'preview' && (
              <div id="panel-preview" role="tabpanel" aria-labelledby="tab-preview" key={`p-${doc.id}`} className="wb-fade grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <DocumentCanvas
                    doc={doc}
                    activeField={activeField}
                    highlights={highlights}
                    setHighlights={setHighlights}
                    clauseLinks={clauseLinks}
                  />
                </div>
                <div className="space-y-6 lg:col-span-5">
                  <div className="grid grid-cols-3 divide-x divide-slate-700 overflow-hidden rounded-xl bg-slate-900 text-white">
                    <Readout value="340ms" label="Ingestion" />
                    <Readout value={`${meanConf}%`} label="Mean confidence" accent />
                    <Readout value="100%" label="Straight-through" />
                  </div>

                  <div>
                    <div className="mb-3.5 flex items-center justify-between">
                      <h4 className="flex items-center gap-2 text-sm sm:text-base font-bold uppercase tracking-wider text-slate-900">
                        <ScanText className="h-4 w-4 text-[#14532D]" /> Extracted fields
                      </h4>
                      <span className="font-mono text-xs sm:text-sm font-bold text-teal-700">{doc.fields.length} verified</span>
                    </div>
                    <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200">
                      {doc.fields.map((f, i) => {
                        const linked = clauseLinks[i] >= 0
                        const isActive = activeField === i
                        return (
                          <li key={f.label}>
                            <button
                              onMouseEnter={() => setActiveField(i)}
                              onMouseLeave={() => setActiveField(null)}
                              onFocus={() => setActiveField(i)}
                              onBlur={() => setActiveField(null)}
                              className={`w-full px-4 py-3.5 text-left transition-colors focus:outline-none cursor-pointer ${isActive ? 'bg-[#F0FDF4]' : 'hover:bg-slate-50'}`}
                            >
                              <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                                <span className="font-medium text-slate-600">{f.label}</span>
                                <span className="font-mono font-bold text-[#14532D] text-xs sm:text-sm">{f.conf}%</span>
                              </div>
                              <div className="mt-1.5 truncate text-sm sm:text-base font-bold text-slate-900" title={f.value}>{f.value}</div>
                              <div className="mt-2.5 flex items-center gap-3">
                                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                                  <div
                                    className="h-full rounded-full bg-[#14532D] transition-[width] duration-700 ease-out motion-reduce:transition-none"
                                    style={{ width: barsReady ? `${f.conf}%` : '0%' }}
                                  />
                                </div>
                                {linked && <span className="font-mono text-xs font-semibold text-slate-500">→ §{clauseLinks[i] + 1}</span>}
                              </div>
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#14532D]">
                      <ShieldCheck className="h-4.5 w-4.5" /> Governance controls
                    </div>
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                      <li><strong className="text-slate-900">Single effective copy:</strong> obsolete versions are withdrawn from enterprise search.</li>
                      <li><strong className="text-slate-900">Controlled printing:</strong> watermark carries a copy number mapped to the user session.</li>
                      <li><strong className="text-slate-900">Training data:</strong> customer data is excluded from third-party foundation models.</li>
                    </ul>
                  </div>

                  <VerifyPanel verify={verify} setVerify={setVerify} />
                </div>
              </div>
            )}

            {tab === 'signature' && (
              <div id="panel-signature" role="tabpanel" aria-labelledby="tab-signature" key={`s-${doc.id}`} className="wb-fade mx-auto max-w-4xl space-y-6">
                <div className="rounded-2xl bg-slate-900 p-6 sm:p-8 text-white">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/40 px-3.5 py-1 text-xs sm:text-sm font-semibold text-teal-300">
                        <BadgeCheck className="h-4 w-4" /> Electronic signature record
                      </div>
                      <h3 className="mt-3 text-2xl font-bold sm:text-3xl">Signature manifest</h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300">Bound to the document payload · two-component authentication</p>
                    </div>
                    <span className="self-start rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-1.5 font-mono text-xs sm:text-sm font-bold text-teal-200 sm:self-auto">
                      CERT {doc.certId}
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <ManifestCard title="Signatory">
                    <Row k="Name" v={doc.signedBy} strong />
                    <Row k="Title" v={doc.signerRole} />
                    <Row k="Authentication" v={doc.authMethod} mono />
                  </ManifestCard>
                  <ManifestCard title="Intent & time">
                    <Row k="Meaning" v={doc.meaning} strong accent />
                    <Row k="Timestamp (UTC)" v={doc.signedTime} mono />
                    <Row k="Regulatory basis" v="Designed to support 21 CFR §11.100 requirements" />
                  </ManifestCard>
                </div>

                <div className="rounded-2xl bg-slate-900 p-6 sm:p-7 text-white">
                  <div className="mb-3.5 flex items-center justify-between">
                    <span className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-teal-300">
                      <Lock className="h-4 w-4" /> SHA-256 DOCUMENT DIGEST
                    </span>
                    <button onClick={() => copy('sig')} className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-teal-300 hover:text-white cursor-pointer">
                      {copied === 'sig' ? <Check className="h-4 w-4 text-teal-400" /> : <Copy className="h-4 w-4" />}
                      {copied === 'sig' ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="break-all rounded-lg border border-slate-800 bg-slate-950 p-4 font-mono text-xs sm:text-sm leading-relaxed text-teal-200">
                    {doc.sha256}
                  </div>
                  <div className="mt-3.5 flex flex-wrap justify-between gap-2 font-mono text-xs sm:text-sm text-slate-300">
                    <span>Algorithm: SHA-256 · PKCS#7</span>
                    <span>WORM storage check: pass</span>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={onOpenDemoModal}
                    className="inline-flex items-center gap-2 rounded-full bg-[#14532D] hover:bg-[#166534] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>Request technical validation pack</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {tab === 'audit' && (
              <div id="panel-audit" role="tabpanel" aria-labelledby="tab-audit" key={`a-${doc.id}`} className="wb-fade mx-auto max-w-4xl">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Append-only hash chain</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">Each entry records the hash of the entry before it.</p>
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-slate-500">UTC · newest first</span>
                </div>

                <ol className="relative">
                  {doc.auditLogs.map((log, i) => {
                    const last = i === doc.auditLogs.length - 1
                    return (
                      <li key={i} className="relative pb-6 pl-10 last:pb-0">
                        {!last && <span aria-hidden className="absolute left-[11px] top-6 bottom-0 w-px bg-slate-300" />}
                        <span aria-hidden className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-teal-500 bg-white">
                          <span className="h-2 w-2 rounded-full bg-teal-600" />
                        </span>
                        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <span className="inline-block rounded bg-slate-100 px-2.5 py-1 font-mono text-xs sm:text-sm font-bold text-slate-800">{log.event}</span>
                              <div className="mt-2 text-base font-bold text-slate-900">{log.user}</div>
                              <div className="mt-1 font-mono text-xs sm:text-sm text-slate-500">{log.terminal}</div>
                            </div>
                            <div className="font-mono text-xs sm:text-sm sm:text-right">
                              <div className="font-bold text-[#14532D] text-sm sm:text-base">{log.time}</div>
                            </div>
                          </div>
                          <div className="mt-3.5 grid gap-1 border-t border-slate-100 pt-3 font-mono text-xs sm:text-sm text-slate-600 sm:grid-cols-2">
                            <span>hash: <span className="text-slate-900 font-semibold">{log.hash}</span></span>
                            <span>prev: {log.prevHash}</span>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ol>
              </div>
            )}

            {tab === 'diff' && (
              <div id="panel-diff" role="tabpanel" aria-labelledby="tab-diff" key={`d-${doc.id}`} className="wb-fade mx-auto max-w-4xl space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Revision history</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Major and minor revisions pass through approval gates.</p>
                </div>

                {/* Table on sm+, cards on mobile */}
                <div className="hidden overflow-hidden rounded-xl border border-slate-200 sm:block">
                  <table className="w-full text-left text-sm sm:text-base">
                    <thead className="bg-slate-50 text-xs sm:text-sm font-bold text-slate-700">
                      <tr>
                        <th className="px-5 py-3.5 font-bold uppercase tracking-wider">Version</th>
                        <th className="px-5 py-3.5 font-bold uppercase tracking-wider">Status</th>
                        <th className="px-5 py-3.5 font-bold uppercase tracking-wider">Date</th>
                        <th className="px-5 py-3.5 font-bold uppercase tracking-wider">Author / approver</th>
                        <th className="px-5 py-3.5 font-bold uppercase tracking-wider">Change summary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {doc.versions.map((v, i) => (
                        <tr key={i} className="align-top hover:bg-slate-50/60 transition-colors">
                          <td className="px-5 py-3.5 font-mono font-bold text-[#14532D]">{v.ver}</td>
                          <td className="px-5 py-3.5"><VersionBadge status={v.status} /></td>
                          <td className="px-5 py-3.5 font-mono text-xs sm:text-sm text-slate-600">{v.date}</td>
                          <td className="px-5 py-3.5 text-slate-800 font-medium">{v.user}</td>
                          <td className="px-5 py-3.5 text-slate-600">{v.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <ul className="space-y-3 sm:hidden">
                  {doc.versions.map((v, i) => (
                    <li key={i} className="rounded-xl border border-slate-200 p-4.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-[#14532D] text-base">{v.ver}</span>
                        <VersionBadge status={v.status} />
                      </div>
                      <div className="mt-2 font-mono text-xs text-slate-500">{v.date}</div>
                      <div className="mt-1 text-base font-semibold text-slate-900">{v.user}</div>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.notes}</p>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">Word-level redline</h4>
                  {doc.diffs.map((d, i) => (
                    <div key={i} className="overflow-hidden rounded-xl border border-slate-200">
                      <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm sm:text-base font-bold text-slate-900">{d.section}</div>
                      <p className="p-5 text-base sm:text-lg leading-relaxed text-slate-800">
                        {wordDiff(d.oldText, d.newText).map((seg, j) => (
                          <span
                            key={j}
                            className={
                              seg.k === 'del'
                                ? 'rounded-sm bg-rose-100 text-rose-800 line-through decoration-rose-400 px-1 py-0.5'
                                : seg.k === 'add'
                                ? 'rounded-sm bg-teal-100 text-teal-900 font-medium px-1 py-0.5'
                                : ''
                            }
                          >
                            {seg.t}{' '}
                          </span>
                        ))}
                      </p>
                      <div className="flex gap-4 border-t border-slate-100 px-5 py-2.5 font-mono text-xs sm:text-sm text-slate-600 font-semibold">
                        <span className="text-rose-700">− superseded</span>
                        <span className="text-teal-800">+ effective</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer CTAs: one primary, one secondary */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 bg-slate-50 px-6 py-5 sm:flex-row">
            <p className="text-center text-sm sm:text-base font-medium text-slate-700 sm:text-left">
              Want to test SmartiDP EDMS with your own templates and schemas?
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                onClick={onOpenDemoModal}
                className="rounded-full bg-[#14532D] hover:bg-[#166534] px-7 py-3 text-sm sm:text-base font-bold text-white shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all cursor-pointer flex items-center gap-2 group"
              >
                <span>Request a Demo</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://edms.smartidp.ai/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm sm:text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#14532D] transition-all"
              >
                Open sandbox <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Readout({ value, label, accent }) {
  return (
    <div className="px-3 py-4 text-center">
      <div className={`font-mono text-2xl font-bold tabular-nums sm:text-3xl ${accent ? 'text-teal-300' : 'text-white'}`}>{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-slate-400 font-semibold">{label}</div>
    </div>
  )
}

function ManifestCard({ title, children }) {
  return (
    <div className="space-y-3.5 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">{title}</div>
      <div className="space-y-3.5">{children}</div>
    </div>
  )
}

function Row({ k, v, strong, mono, accent }) {
  return (
    <div>
      <div className="mb-1 text-xs sm:text-sm text-slate-500 font-medium">{k}</div>
      <div className={`${strong ? 'font-bold' : 'font-medium'} ${mono ? 'font-mono text-xs sm:text-sm' : 'text-sm sm:text-base'} ${accent ? 'text-[#14532D]' : 'text-slate-900'}`}>{v}</div>
    </div>
  )
}

function VersionBadge({ status }) {
  const good = /Effective|Authorized|Locked/.test(status)
  return (
    <span className={`inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-xs sm:text-sm font-semibold ${good ? 'bg-teal-50 text-teal-800 ring-1 ring-inset ring-teal-200' : 'bg-slate-100 text-slate-600'}`}>
      {status}
    </span>
  )
}

function VerifyPanel({ verify, setVerify }) {
  const running = verify.status === 'running'
  const done = verify.status === 'done'
  return (
    <div className="rounded-xl border border-slate-200 p-4 sm:p-5">
      <button
        onClick={() => setVerify({ status: 'running', stage: 0 })}
        disabled={running}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white py-3 text-sm sm:text-base font-bold text-slate-800 transition-colors hover:bg-slate-50 hover:border-[#14532D] disabled:opacity-60 cursor-pointer"
      >
        {running ? <RefreshCw className="h-4 w-4 motion-safe:animate-spin" /> : done ? <Check className="h-4 w-4 text-teal-700" /> : <Fingerprint className="h-4 w-4 text-[#14532D]" />}
        {running ? 'Verifying…' : done ? 'Hash verification passed' : 'Verify SHA-256 digest'}
      </button>

      {verify.status !== 'idle' && (
        <ol className="mt-4 space-y-2.5 font-mono text-xs sm:text-sm" aria-live="polite">
          {VERIFY_STAGES.map((s, i) => {
            const complete = done || i < verify.stage
            const current = running && i === verify.stage
            return (
              <li key={s} className={`flex items-center gap-2.5 ${complete || current ? 'text-slate-900 font-medium' : 'text-slate-400'}`}>
                <span className={`flex h-4.5 w-4.5 items-center justify-center rounded-full ${complete ? 'bg-teal-600 text-white' : current ? 'border-2 border-[#14532D]' : 'border border-slate-300'}`}>
                  {complete && <Check className="h-3 w-3" />}
                </span>
                {s}
              </li>
            )
          })}
          {done && (
            <li className="pt-2">
              <button onClick={() => setVerify({ status: 'idle', stage: 0 })} className="text-xs sm:text-sm text-slate-500 font-semibold underline underline-offset-2 hover:text-slate-900 cursor-pointer">
                Reset verification
              </button>
            </li>
          )}
        </ol>
      )}
    </div>
  )
}

function DocumentCanvas({ doc, activeField, highlights, setHighlights, clauseLinks }) {
  const linkedClauses = new Set(activeField !== null ? [clauseLinks[activeField]] : [])

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-800">
          <FileText className="h-4.5 w-4.5 text-[#14532D]" /> Controlled document
        </div>
        <button
          onClick={() => setHighlights(h => !h)}
          aria-pressed={highlights}
          className={`flex items-center gap-1.5 rounded-lg border px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
            highlights ? 'border-[#14532D]/40 bg-[#F0FDF4] text-[#14532D]' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
          }`}
        >
          <ScanText className="h-3.5 w-3.5" /> Extraction highlights {highlights ? 'on' : 'off'}
        </button>
      </div>

      <div className="relative max-h-[640px] overflow-y-auto rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        {/* Watermark */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
          <span className="rotate-[-25deg] text-center font-mono text-2xl font-semibold uppercase leading-relaxed tracking-[0.25em] text-slate-900/[0.05] sm:text-3xl">
            SmartiDP EDMS<br />Controlled Record<br />Copy #042
          </span>
        </div>

        <div className="relative">
          <header className="flex items-start justify-between gap-4 border-b-2 border-slate-900 pb-4">
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-slate-600">{doc.orgName}</div>
              <h3 className="mt-1 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">{doc.title}</h3>
            </div>
            <div className="shrink-0 text-right font-mono text-xs sm:text-sm">
              <div className="font-bold text-slate-900">{doc.code}</div>
              <div className="font-semibold text-[#14532D]">{doc.revision}</div>
              <div className="text-slate-600">{doc.effectiveDate}</div>
            </div>
          </header>

          <div className="space-y-6 py-6">
            {doc.docClauses.map((c, i) => {
              const hot = linkedClauses.has(i)
              const marked = highlights && c.ocrMatch
              return (
                <section key={i} className="space-y-2">
                  <h4 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                    {c.num} · {c.title}
                  </h4>
                  <p
                    className={`rounded-lg px-4 py-3 text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                      hot
                        ? 'bg-[#F0FDF4] text-slate-900 ring-2 ring-[#14532D]'
                        : marked
                        ? 'border-l-3 border-[#14532D]/70 bg-[#F0FDF4]/50 text-slate-800'
                        : 'text-slate-700'
                    }`}
                  >
                    {c.text}
                  </p>
                  {marked && (
                    <div className="flex items-center gap-1.5 px-4 font-mono text-xs sm:text-sm font-semibold text-[#14532D]">
                      <ScanText className="h-3.5 w-3.5 shrink-0" />
                      <span>Extracted: {c.ocrMatch}</span>
                    </div>
                  )}
                </section>
              )
            })}
          </div>

          {/* Seal block */}
          <div className="mt-5 flex items-center gap-4 rounded-xl border border-slate-300 p-4 sm:p-5">
            <div aria-hidden className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-teal-700 text-teal-700">
              <BadgeCheck className="h-8 w-8" />
            </div>
            <div className="min-w-0 flex-1 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-teal-800">Electronic signature · sealed</div>
              <div><span className="text-slate-500 font-medium">Signer:</span> <strong className="text-slate-900 font-bold">{doc.signedBy}</strong></div>
              <div><span className="text-slate-500 font-medium">Intent:</span> <strong className="text-[#14532D] font-bold">{doc.meaning}</strong></div>
              <div className="truncate font-mono text-xs text-slate-500">{doc.signedTime} · {doc.sha256.slice(0, 18)}…</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}