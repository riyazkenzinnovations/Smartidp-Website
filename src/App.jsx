import React, { useState, useMemo } from 'react'
import initialLogo from './assets/initial.png'
import {
  FileText,
  ScanText,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  Lock,
  ChevronRight,
  Copy,
  Check,
  Sparkles,
  BarChart3,
  ExternalLink,
  Code2,
  Table,
  Eye,
  Sliders,
  DollarSign,
  HelpCircle,
  Menu,
  X,
  UploadCloud,
  FileCheck2,
  Building2,
  RefreshCw
} from 'lucide-react'

// Sample document templates for interactive demo
const DOCUMENT_SAMPLES = [
  {
    id: 'inv-1092',
    name: 'Commercial Invoice (TechCorp)',
    category: 'Invoicing & AP',
    type: 'Multi-page PDF / High Res',
    confidence: 99.8,
    processingTime: '340ms',
    fields: [
      { label: 'Vendor Name', value: 'TechCorp Logistics LLC', confidence: 99.9, verified: true },
      { label: 'Invoice Number', value: 'INV-2026-88412', confidence: 100, verified: true },
      { label: 'Issue Date', value: '2026-10-18', confidence: 99.6, verified: true },
      { label: 'Due Date', value: '2026-11-18', confidence: 99.7, verified: true },
      { label: 'PO Reference', value: 'PO-99104-X', confidence: 98.9, verified: true },
      { label: 'Tax ID / VAT', value: 'US-94-2819034', confidence: 99.4, verified: true },
      { label: 'Subtotal', value: '$14,250.00', confidence: 99.8, verified: true },
      { label: 'Tax Amount (8.5%)', value: '$1,211.25', confidence: 99.5, verified: true },
      { label: 'Total Due', value: '$15,461.25', confidence: 100, verified: true }
    ],
    lineItems: [
      { desc: 'Enterprise Server Rack Mounting unit 42U', qty: 2, unitPrice: '$2,450.00', total: '$4,900.00' },
      { desc: 'Optical Fiber Transceiver SFP28 25Gbps (Pack of 10)', qty: 5, unitPrice: '$650.00', total: '$3,250.00' },
      { desc: 'Managed Layer-3 Aggregation Switch 48-Port', qty: 1, unitPrice: '$6,100.00', total: '$6,100.00' }
    ],
    jsonOutput: {
      document_id: "doc_9918af_2026",
      document_type: "invoice",
      schema_version: "2.4.0",
      metadata: {
        vendor: "TechCorp Logistics LLC",
        tax_id: "US-94-2819034",
        invoice_number: "INV-2026-88412",
        currency: "USD",
        dates: { issue: "2026-10-18", due: "2026-11-18" },
        financials: { subtotal: 14250.00, tax: 1211.25, total: 15461.25 },
        validation_status: "PASSED_WITH_ZERO_DISCREPANCIES"
      },
      line_items: [
        { item: "Enterprise Server Rack 42U", quantity: 2, unit_price: 2450.00, line_total: 4900.00 },
        { item: "Optical Fiber Transceiver SFP28", quantity: 5, unit_price: 650.00, line_total: 3250.00 },
        { item: "Layer-3 Aggregation Switch", quantity: 1, unit_price: 6100.00, line_total: 6100.00 }
      ],
      audit: {
        ocr_engine: "SmartIDP-Vision-V4",
        confidence_score: 0.998,
        latency_ms: 340
      }
    }
  },
  {
    id: 'med-claim',
    name: 'CMS-1500 Health Insurance Claim',
    category: 'Healthcare & Claims',
    type: 'Scanned Raster Form',
    confidence: 99.2,
    processingTime: '410ms',
    fields: [
      { label: 'Patient Name', value: 'Eleanor Vance', confidence: 99.8, verified: true },
      { label: 'Insured ID', value: 'MED-9948201', confidence: 99.7, verified: true },
      { label: 'Diagnosis Code (ICD-10)', value: 'M54.5 (Low Back Pain)', confidence: 98.9, verified: true },
      { label: 'Procedure Code (CPT)', value: '99214 (Office Visit Lvl 4)', confidence: 99.4, verified: true },
      { label: 'Billing Provider NPI', value: '1487290112', confidence: 99.9, verified: true },
      { label: 'Charge Amount', value: '$345.00', confidence: 99.5, verified: true }
    ],
    lineItems: [
      { desc: 'Comprehensive Musculoskeletal Exam (99214)', qty: 1, unitPrice: '$210.00', total: '$210.00' },
      { desc: 'Lumbar Spine Bilateral 2-View Radiography (72040)', qty: 1, unitPrice: '$135.00', total: '$135.00' }
    ],
    jsonOutput: {
      document_id: "claim_cms_8812",
      document_type: "healthcare_claim_cms1500",
      hipaa_compliant: true,
      patient: { name: "Eleanor Vance", member_id: "MED-9948201" },
      billing_npi: "1487290112",
      diagnoses: ["M54.5"],
      procedures: ["99214", "72040"],
      total_charge: 345.00,
      confidence: 0.992
    }
  },
  {
    id: 'bol-shipping',
    name: 'International Bill of Lading (Ocean Freight)',
    category: 'Logistics & Trade',
    type: 'Multi-lingual Scanned PDF',
    confidence: 98.7,
    processingTime: '480ms',
    fields: [
      { label: 'Carrier / Vessel', value: 'MAERSK MC-KINNEY / V.2401', confidence: 99.1, verified: true },
      { label: 'Port of Loading', value: 'Singapore (SGSIN)', confidence: 99.5, verified: true },
      { label: 'Port of Discharge', value: 'Rotterdam (NLRTM)', confidence: 99.2, verified: true },
      { label: 'Container No.', value: 'MSKU-820194-2 (40ft High Cube)', confidence: 98.8, verified: true },
      { label: 'Gross Weight', value: '24,850 KG', confidence: 98.5, verified: true },
      { label: 'Customs HS Code', value: '8471.50 (Data Processing Units)', confidence: 98.9, verified: true }
    ],
    lineItems: [
      { desc: 'Industrial Edge AI Compute Modules - Model E9', qty: 450, unitPrice: '$42.00', total: '$18,900.00' },
      { desc: 'Thermal Dissipation Alloy Enclosures', qty: 450, unitPrice: '$13.20', total: '$5,940.00' }
    ],
    jsonOutput: {
      document_id: "bol_sea_maersk_90",
      document_type: "bill_of_lading",
      carrier: "MAERSK",
      vessel_voyage: "MAERSK MC-KINNEY / V.2401",
      route: { origin: "SGSIN", destination: "NLRTM" },
      equipment: { container: "MSKU-820194-2", size: "40HC" },
      manifest_weight_kg: 24850,
      hs_code: "8471.50",
      confidence: 0.987
    }
  }
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDoc, setActiveDoc] = useState(DOCUMENT_SAMPLES[0])
  const [demoViewMode, setDemoViewMode] = useState('visual') // 'visual' | 'table' | 'json'
  const [copiedJson, setCopiedJson] = useState(false)
  const [isSimulatingScan, setIsSimulatingScan] = useState(false)
  const [monthlyDocs, setMonthlyDocs] = useState(35000)
  const [billingCycle, setBillingCycle] = useState('annual')
  const [openFaq, setOpenFaq] = useState(0)
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [submittedLead, setSubmittedLead] = useState(false)

  // Trigger scan animation when switching sample document
  const handleSelectDoc = (doc) => {
    setIsSimulatingScan(true)
    setActiveDoc(doc)
    setTimeout(() => {
      setIsSimulatingScan(false)
    }, 600)
  }

  // Copy JSON handler
  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(activeDoc.jsonOutput, null, 2))
    setCopiedJson(true)
    setTimeout(() => setCopiedJson(false), 2000)
  }

  // Dynamic ROI calculation
  const calculatedSavings = useMemo(() => {
    const manualCost = monthlyDocs * 4.50
    const smartIdpCost = monthlyDocs * 0.08 + 899
    const monthlySaved = Math.max(0, manualCost - smartIdpCost)
    const annualSaved = monthlySaved * 12
    const hoursSavedMonthly = Math.round((monthlyDocs * 6.5) / 60)
    return {
      monthlySaved: Math.round(monthlySaved),
      annualSaved: Math.round(annualSaved),
      hoursSavedMonthly: hoursSavedMonthly.toLocaleString()
    }
  }, [monthlyDocs])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-600 selection:text-white">
      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent blur-3xl opacity-80" />
        <div className="absolute top-[800px] -left-48 w-[600px] h-[500px] bg-blue-600/10 blur-[128px]" />
        <div className="absolute top-[1600px] -right-48 w-[600px] h-[500px] bg-purple-600/10 blur-[128px]" />
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-700/80 p-1 flex items-center justify-center shadow-lg shadow-indigo-500/20 overflow-hidden">
              <img src={initialLogo} alt="SmartIDP Logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-200">
                Smart<span className="text-indigo-400">IDP</span>
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold -mt-1">
                Intelligent Document AI
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Platform</a>
            <a href="#interactive-demo" className="hover:text-white transition-colors flex items-center gap-1.5">
              Live Demo
              <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30">Interactive</span>
            </a>
            <a href="#pipeline" className="hover:text-white transition-colors">How It Works</a>
            <a href="#calculator" className="hover:text-white transition-colors">ROI Calculator</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => setDemoModalOpen(true)}
              className="text-sm font-medium px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all"
            >
              Sign In
            </button>
            <button 
              onClick={() => setDemoModalOpen(true)}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 border border-indigo-400/20 cursor-pointer"
            >
              <span>Book a Demo</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-5 space-y-4">
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-medium"
            >
              Platform
            </a>
            <a 
              href="#interactive-demo" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-medium"
            >
              Live Demo
            </a>
            <a 
              href="#pipeline" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-medium"
            >
              How It Works
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-medium"
            >
              ROI Calculator
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-white font-medium"
            >
              Pricing
            </a>
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <button 
                onClick={() => { setMobileMenuOpen(false); setDemoModalOpen(true); }}
                className="w-full text-center py-2.5 text-slate-300 hover:bg-slate-800 rounded-lg text-sm font-medium"
              >
                Sign In
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); setDemoModalOpen(true); }}
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium"
              >
                Book a Demo
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-20 md:pt-24 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/40 text-indigo-300 text-xs font-medium mb-8 backdrop-blur shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
          <span>Next-Gen Vision-Language Models & Human-In-The-Loop AI</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Turn Any Unstructured Document into <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300">Clean, Validated Data</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          SmartIDP automates document ingestion, multi-modal layout extraction, complex table reconstruction, and 
          ERP synchronization in under 450ms with 99.8% precision.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#interactive-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all border border-indigo-400/30"
          >
            <Eye className="h-5 w-5" />
            <span>Try Live Document Demo</span>
          </a>
          <button
            onClick={() => setDemoModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-base border border-slate-700/70 transition-all shadow-md cursor-pointer"
          >
            <Building2 className="h-5 w-5 text-slate-400" />
            <span>Request Enterprise Pilot</span>
          </button>
        </div>

        {/* Hero Proof Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur">
            <div className="text-3xl sm:text-4xl font-extrabold text-white">99.8%</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Extraction Accuracy</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur">
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-400">&lt; 400ms</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Average Latency</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur">
            <div className="text-3xl sm:text-4xl font-extrabold text-white">85%+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Processing Cost Reduction</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">SOC 2 / HIPAA</div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Certified Compliance</div>
          </div>
        </div>

        {/* Enterprise Logos Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            Trusted by modern leaders in FinTech, Logistics, Insurance, and Global Supply Chains
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="font-bold text-lg text-slate-300 tracking-wider">NOVOPAY</span>
            <span className="font-bold text-lg text-slate-300 tracking-wider">MEDICAREX</span>
            <span className="font-bold text-lg text-slate-300 tracking-wider">APEX LOGISTICS</span>
            <span className="font-bold text-lg text-slate-300 tracking-wider">CLEARCAPITAL</span>
            <span className="font-bold text-lg text-slate-300 tracking-wider">SYNTHETIX</span>
          </div>
        </div>
      </section>

      {/* Interactive IDP Demo Section */}
      <section id="interactive-demo" className="relative z-10 py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/40 text-cyan-300 text-xs font-semibold mb-3">
              <Zap className="h-3.5 w-3.5" />
              <span>Interactive Playground</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Test SmartIDP Extraction in Real Time
            </h2>
            <p className="mt-3 text-slate-300 text-base">
              Select one of our benchmark document types to see multi-modal OCR, key-value normalization, confidence bounding, and instant structured JSON export.
            </p>
          </div>

          {/* Document Sample Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {DOCUMENT_SAMPLES.map((doc) => {
              const isSelected = activeDoc.id === doc.id
              return (
                <button
                  key={doc.id}
                  onClick={() => handleSelectDoc(doc)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2.5 border cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-400/40 shadow-lg shadow-indigo-600/30'
                      : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-700/80'
                  }`}
                >
                  <FileText className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-indigo-400'}`} />
                  <span>{doc.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSelected ? 'bg-indigo-800 text-indigo-100' : 'bg-slate-700 text-slate-300'}`}>
                    {doc.category}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Demo Interactive Workbench Container */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden">
            {/* Workbench Top Bar */}
            <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-semibold text-white">{activeDoc.name}</span>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400 border-l border-slate-800 pl-4">
                  <span>Format: <strong className="text-slate-300">{activeDoc.type}</strong></span>
                  <span>Latency: <strong className="text-indigo-400">{activeDoc.processingTime}</strong></span>
                  <span>Overall Confidence: <strong className="text-emerald-400">{activeDoc.confidence}%</strong></span>
                </div>
              </div>

              {/* View Switcher & Action */}
              <div className="flex items-center gap-2">
                <div className="flex items-center p-1 rounded-lg bg-slate-800/90 border border-slate-700/80 text-xs">
                  <button
                    onClick={() => setDemoViewMode('visual')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      demoViewMode === 'visual' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>Visual Extraction</span>
                  </button>
                  <button
                    onClick={() => setDemoViewMode('table')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      demoViewMode === 'table' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Table className="h-3.5 w-3.5" />
                    <span>Line Items</span>
                  </button>
                  <button
                    onClick={() => setDemoViewMode('json')}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                      demoViewMode === 'json' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Code2 className="h-3.5 w-3.5" />
                    <span>JSON Payload</span>
                  </button>
                </div>

                <button
                  onClick={handleCopyJson}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Copy Extracted JSON"
                >
                  {copiedJson ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy JSON</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Simulated Scanning Indicator Banner */}
            {isSimulatingScan && (
              <div className="bg-indigo-600/20 border-b border-indigo-500/30 px-6 py-2.5 flex items-center justify-center gap-2 text-indigo-300 text-xs font-medium animate-pulse">
                <RefreshCw className="h-3.5 w-3.5 animate-spin text-indigo-400" />
                <span>Running neural layout segmentation and entity recognition...</span>
              </div>
            )}

            {/* Workbench Body */}
            <div className="p-6">
              {demoViewMode === 'visual' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Document Preview Canvas Simulation */}
                  <div className="lg:col-span-5 bg-slate-900/90 rounded-xl border border-slate-800 p-5 relative overflow-hidden">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs text-slate-400">
                      <span className="font-medium text-slate-300">Document Scan View</span>
                      <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">300 DPI • Cleaned</span>
                    </div>

                    <div className="bg-slate-950 rounded-lg p-5 border border-slate-800/90 space-y-4 font-mono text-xs">
                      {/* Simulated Document Header */}
                      <div className="border-b border-slate-800 pb-3 flex justify-between items-start">
                        <div>
                          <div className="text-indigo-400 font-bold text-sm">{activeDoc.fields[0].value}</div>
                          <div className="text-slate-400 text-[10px] mt-0.5">Automated Extraction Anchor #1</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-bold">{activeDoc.fields[1].value}</div>
                          <div className="text-emerald-400 text-[10px]">Confidence: {activeDoc.fields[1].confidence}%</div>
                        </div>
                      </div>

                      {/* Simulated Bounding Boxes */}
                      <div className="p-3 bg-indigo-950/30 border border-indigo-500/40 rounded-lg relative">
                        <span className="absolute -top-2 left-3 bg-indigo-600 text-white text-[9px] px-1.5 py-0.2 rounded font-sans font-semibold">
                          OCR Entity: Invoice Details
                        </span>
                        <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                          <div>Date: <span className="text-white">{activeDoc.fields[2].value}</span></div>
                          <div>Due: <span className="text-white">{activeDoc.fields[3]?.value || 'N/A'}</span></div>
                        </div>
                      </div>

                      {/* Simulated Table Box */}
                      <div className="p-3 bg-slate-900 border border-dashed border-cyan-500/40 rounded-lg relative">
                        <span className="absolute -top-2 left-3 bg-cyan-700 text-white text-[9px] px-1.5 py-0.2 rounded font-sans font-semibold">
                          Multi-row Table Detection
                        </span>
                        <div className="text-[11px] text-slate-400 pt-1">
                          {activeDoc.lineItems?.length || 2} items recognized with 99%+ bounding accuracy
                        </div>
                      </div>

                      {/* Simulated Total Box */}
                      <div className="p-3 bg-emerald-950/20 border border-emerald-500/40 rounded-lg flex justify-between items-center">
                        <span className="text-slate-300 font-sans text-xs">Extracted Net Payable:</span>
                        <span className="text-emerald-400 font-bold text-sm font-mono">
                          {activeDoc.fields.find(f => f.label.includes('Total') || f.label.includes('Charge'))?.value || '$15,461.25'}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        <span>Zero schema errors</span>
                      </span>
                      <span className="text-slate-400">Rule engine: <strong>14 passes</strong></span>
                    </div>
                  </div>

                  {/* Right Column: Extracted Entities List */}
                  <div className="lg:col-span-7 space-y-3">
                    <div className="flex items-center justify-between pb-2">
                      <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                        <ScanText className="h-4 w-4 text-indigo-400" />
                        <span>Parsed Entities & Key-Value Pairs</span>
                      </h3>
                      <span className="text-xs text-slate-400">
                        {activeDoc.fields.length} normalized fields
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeDoc.fields.map((field, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all"
                        >
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-slate-400 font-medium">{field.label}</span>
                            <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                              <Check className="h-3 w-3" />
                              {field.confidence}%
                            </span>
                          </div>
                          <div className="text-sm font-semibold text-white tracking-wide truncate">
                            {field.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-900/50 text-indigo-300">
                          <Cpu className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Automated Cross-Validation</div>
                          <div className="text-[11px] text-slate-400">
                            Math check verified (Subtotal + Tax = Total Due) • ERP Vendor matched
                          </div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                        Ready to Export
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {demoViewMode === 'table' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-white">Extracted Tabular Items</h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Deep-learning table structure recognition extracts complex multi-line tables with column alignment.
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-indigo-300 border border-slate-700">
                      {activeDoc.lineItems?.length || 0} line items detected
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-800">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                        <tr>
                          <th className="py-3 px-4 font-semibold font-sans">#</th>
                          <th className="py-3 px-4 font-semibold font-sans">Item / Description</th>
                          <th className="py-3 px-4 font-semibold font-sans text-center">Qty</th>
                          <th className="py-3 px-4 font-semibold font-sans text-right">Unit Price</th>
                          <th className="py-3 px-4 font-semibold font-sans text-right">Extracted Total</th>
                          <th className="py-3 px-4 font-semibold font-sans text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 bg-slate-950/60">
                        {activeDoc.lineItems?.map((item, index) => (
                          <tr key={index} className="hover:bg-slate-900/60 transition-colors">
                            <td className="py-3 px-4 text-slate-400">{index + 1}</td>
                            <td className="py-3 px-4 text-white font-medium font-sans">{item.desc}</td>
                            <td className="py-3 px-4 text-center text-slate-300">{item.qty}</td>
                            <td className="py-3 px-4 text-right text-slate-300">{item.unitPrice}</td>
                            <td className="py-3 px-4 text-right text-emerald-400 font-semibold">{item.total}</td>
                            <td className="py-3 px-4 text-center">
                              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                                <Check className="h-2.5 w-2.5" /> 100% Match
                              </span>
                            </td>
                          </tr>
                        )) || (
                          <tr>
                            <td colSpan={6} className="text-center py-8 text-slate-400">
                              No tabular data in this sample.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {demoViewMode === 'json' && (
                <div>
                  <div className="flex items-center justify-between pb-3">
                    <span className="text-xs text-slate-400 font-mono">JSON Payload • Ready for REST API / Webhook</span>
                    <button
                      onClick={handleCopyJson}
                      className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                    >
                      {copiedJson ? 'Copied to clipboard' : 'Copy formatted JSON'}
                    </button>
                  </div>
                  <pre className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-200 overflow-x-auto max-h-96 leading-relaxed">
                    {JSON.stringify(activeDoc.jsonOutput, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Capabilities */}
      <section id="features" className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/70 border border-violet-800/40 text-violet-300 text-xs font-semibold mb-3">
            <Cpu className="h-3.5 w-3.5" />
            <span>Enterprise Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Complex, Messy Documents
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Traditional OCR relies on rigid coordinates and breaks when templates change. 
            SmartIDP utilizes multi-modal spatial models that understand documents like a human expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group">
            <div className="h-12 w-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30 group-hover:scale-110 transition-transform">
              <ScanText className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">Multi-Modal Vision LLMs</h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Understands rotated text, low-contrast scans, handwritten notes, watermarks, and multi-column layouts without requiring pre-configured bounding templates.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400" />
                Zero-template configuration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400" />
                Multi-lingual parsing (100+ languages)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400" />
                Pixel-level confidence attribution
              </li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group">
            <div className="h-12 w-12 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center border border-violet-500/30 group-hover:scale-110 transition-transform">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">Complex Table Reconstruction</h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Flawlessly extracts multi-page tables, nested sub-totals, borderless matrices, and irregular line items into standardized structured tables.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-violet-400" />
                Cross-page continuation stitching
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-violet-400" />
                Automatic currency & tax normalization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-violet-400" />
                Direct export to SQL, CSV, or JSON
              </li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group">
            <div className="h-12 w-12 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">Human-in-the-Loop (HITL)</h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Set automated confidence thresholds. High-confidence docs bypass review entirely; edge cases route to a streamlined human verification cockpit.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                Customizable SLA approval queues
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                One-click correction with active learning
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                Auditor trails & compliance logs
              </li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group">
            <div className="h-12 w-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:scale-110 transition-transform">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">ERP & Master Data Validation</h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Verify extracted vendor names against SAP, Oracle, NetSuite, or Salesforce master records in real-time before syncing.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Fuzzy string matching & entity resolution
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                2-way and 3-way PO reconciliation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Automated duplicate invoice alerts
              </li>
            </ul>
          </div>

          {/* Feature 5 */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group">
            <div className="h-12 w-12 rounded-xl bg-amber-600/20 text-amber-400 flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">Sub-Second REST & Webhook APIs</h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Stream documents via async or sync endpoints. Get webhook callbacks the instant processing completes, with full observability and tracing.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                Python, Node.js, and Go SDKs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                99.99% uptime enterprise SLA
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-amber-400" />
                OpenAPI 3.1 specification & Postman collection
              </li>
            </ul>
          </div>

          {/* Feature 6 */}
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all hover:shadow-xl hover:shadow-indigo-500/10 group">
            <div className="h-12 w-12 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center border border-rose-500/30 group-hover:scale-110 transition-transform">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">Air-Gapped & VPC Deployment</h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Deploy in our SOC-2 compliant US/EU multi-tenant cloud or bring SmartIDP into your own AWS, Azure, GCP, or bare-metal Kubernetes cluster.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-rose-400" />
                Zero data retention (ZDR) guarantee
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-rose-400" />
                HIPAA, GDPR, CCPA certified
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-rose-400" />
                Helm chart & Terraform blueprints
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* End-to-End Pipeline Visualization */}
      <section id="pipeline" className="relative z-10 py-24 bg-slate-900/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/40 text-indigo-300 text-xs font-semibold mb-3">
              <Layers className="h-3.5 w-3.5" />
              <span>System Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              The 5-Stage Autonomous Extraction Pipeline
            </h2>
            <p className="mt-3 text-slate-300 text-base">
              From raw email attachments or SFTP uploads to validated database records in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative">
              <div className="text-xs font-mono text-indigo-400 font-bold mb-2">STAGE 01</div>
              <div className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-indigo-400 mb-4">
                <UploadCloud className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Ingestion</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Receive from S3 buckets, email inboxes, REST APIs, scanners, or SFTP feeds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative">
              <div className="text-xs font-mono text-indigo-400 font-bold mb-2">STAGE 02</div>
              <div className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-indigo-400 mb-4">
                <ScanText className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Pre-Processing</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Auto-orientation, deskew, noise reduction, and smart page classification.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-indigo-500/50 shadow-lg shadow-indigo-500/10 relative">
              <div className="text-xs font-mono text-indigo-400 font-bold mb-2">STAGE 03</div>
              <div className="h-10 w-10 rounded-xl bg-indigo-600/30 border border-indigo-500 flex items-center justify-center text-indigo-300 mb-4">
                <Cpu className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Neural Extraction</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                LayoutLM & Vision LLMs extract entities, key-values, and tabular hierarchies.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative">
              <div className="text-xs font-mono text-indigo-400 font-bold mb-2">STAGE 04</div>
              <div className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-indigo-400 mb-4">
                <FileCheck2 className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Validation & HITL</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Business rule execution, math verification, and low-confidence human review.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 relative">
              <div className="text-xs font-mono text-indigo-400 font-bold mb-2">STAGE 05</div>
              <div className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-indigo-400 mb-4">
                <Database className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">ERP Sync</h4>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Direct export to SAP, NetSuite, Salesforce, Snowflake, or custom webhooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Savings Calculator */}
      <section id="calculator" className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Slider Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/40 text-emerald-300 text-xs font-semibold">
                <DollarSign className="h-3.5 w-3.5" />
                <span>Quantifiable Business Impact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Calculate Your Cost & Time Savings
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Manual data entry costs an average of $4.50 per document in labor, error remediation, and delays. 
                See how much your organization saves annually with SmartIDP automation.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Monthly Document Volume:</span>
                  <span className="text-xl font-extrabold text-indigo-400 font-mono">
                    {monthlyDocs.toLocaleString()} documents
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="200000"
                  step="1000"
                  value={monthlyDocs}
                  onChange={(e) => setMonthlyDocs(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>2,000 / mo</span>
                  <span>50,000 / mo</span>
                  <span>100,000 / mo</span>
                  <span>200,000 / mo</span>
                </div>
              </div>
            </div>

            {/* Right Results Card */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl border border-indigo-500/30 p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Estimated Annual Savings
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono mt-1">
                  ${calculatedSavings.annualSaved.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Based on $0.08 per automated doc vs $4.50 manual cost
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400">Monthly Saved</div>
                  <div className="text-xl font-bold text-white font-mono mt-0.5">
                    ${calculatedSavings.monthlySaved.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Hours Saved / Mo</div>
                  <div className="text-xl font-bold text-indigo-400 font-mono mt-0.5">
                    {calculatedSavings.hoursSavedMonthly} hrs
                  </div>
                </div>
              </div>

              <button
                onClick={() => setDemoModalOpen(true)}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom ROI Report</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/40 text-indigo-300 text-xs font-semibold mb-3">
              <Sliders className="h-3.5 w-3.5" />
              <span>Transparent Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Scale From 1,000 to Millions of Documents
            </h2>
            <p className="mt-3 text-slate-300 text-base">
              Predictable tiered plans with zero hidden setup charges.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-slate-800/90 border border-slate-700/80">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  billingCycle === 'monthly' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'annual' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] px-1.5 py-0.2 rounded font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1: Starter */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <h3 className="text-lg font-bold text-white">Starter</h3>
                <p className="text-xs text-slate-400 mt-1">For growing teams automating initial AP and invoice workflows.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    {billingCycle === 'annual' ? '$199' : '$249'}
                  </span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <div className="text-xs text-indigo-400 font-medium mt-1">Up to 2,500 pages/mo included</div>

                <div className="mt-8 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>Invoices, Receipts & Standard Bills</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>Multi-modal Vision OCR & Key-Values</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>REST API & Webhooks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>Standard Community Support</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setDemoModalOpen(true)}
                className="mt-8 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors cursor-pointer"
              >
                Start Free Trial
              </button>
            </div>

            {/* Plan 2: Growth (Featured) */}
            <div className="rounded-2xl bg-slate-950 border-2 border-indigo-500 p-8 flex flex-col justify-between shadow-xl shadow-indigo-500/10 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                Most Popular
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Growth</h3>
                <p className="text-xs text-slate-400 mt-1">For mid-market companies requiring table extraction and HITL review.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono">
                    {billingCycle === 'annual' ? '$719' : '$899'}
                  </span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <div className="text-xs text-indigo-400 font-medium mt-1">Up to 20,000 pages/mo included</div>

                <div className="mt-8 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>Everything in Starter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>Complex Nested Table Recognition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>Human-in-the-Loop Verification Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>ERP Matching (QuickBooks, NetSuite)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>Priority 4-hour SLA Support</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setDemoModalOpen(true)}
                className="mt-8 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
              >
                Start Growth Trial
              </button>
            </div>

            {/* Plan 3: Enterprise */}
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <h3 className="text-lg font-bold text-white">Enterprise & Custom</h3>
                <p className="text-xs text-slate-400 mt-1">For high-volume operations, bank-grade compliance & on-prem hosting.</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white font-mono">Custom</span>
                </div>
                <div className="text-xs text-indigo-400 font-medium mt-1">Unlimited scale • Custom volume discounts</div>

                <div className="mt-8 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>VPC or Air-Gapped Kubernetes Deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>Fine-Tuned Proprietary Domain Models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>Dedicated Technical Account Manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>SOC 2 Type II, HIPAA & GDPR BAA Agreements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>99.99% Uptime SLA Guarantee</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setDemoModalOpen(true)}
                className="mt-8 w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors cursor-pointer"
              >
                Contact Enterprise Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="relative z-10 py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold mb-3">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "How is SmartIDP different from traditional OCR like Tesseract or AWS Textract?",
              a: "Traditional OCR extracts raw character coordinates, requiring brittle, manually maintained coordinate templates that break whenever a vendor adjusts margins. SmartIDP uses multi-modal visual LLMs that understand document semantics—like reading an invoice intuitively—allowing zero-template extraction even for documents never seen before."
            },
            {
              q: "How does SmartIDP handle low-quality, skewed, or handwritten scans?",
              a: "Our multi-stage pre-processing pipeline automatically deskews, corrects contrast, de-noises artifacts, and applies neural handwriting recognition trained on millions of real-world administrative and medical records."
            },
            {
              q: "Can SmartIDP be deployed within our private cloud or on-premise VPC?",
              a: "Yes. In addition to our SOC 2 Type II multi-tenant cloud, we provide official Helm charts and containerized images for deployment inside your private AWS VPC, Microsoft Azure, Google Cloud Platform, or air-gapped bare-metal Kubernetes cluster."
            },
            {
              q: "Is patient and sensitive financial data protected?",
              a: "Absolutely. SmartIDP supports Zero Data Retention (ZDR) mode where document files and extracted payloads are purged from memory immediately after delivery. We are fully SOC 2 Type II, HIPAA, and GDPR compliant."
            },
            {
              q: "How fast is document extraction?",
              a: "Standard single-page invoices process in 300ms to 450ms. Complex 20-page trade documents process asynchronously via streaming webhooks in less than 4 seconds."
            }
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl bg-slate-900/60 border border-slate-800 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors cursor-pointer"
              >
                <span className="text-sm font-semibold text-white">{item.q}</span>
                <ChevronRight className={`h-4 w-4 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-90' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="relative z-10 py-20 bg-gradient-to-t from-indigo-950/60 via-slate-950 to-slate-950 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Automate Your Document Operations?
          </h2>
          <p className="mt-4 text-slate-300 text-base max-w-2xl mx-auto">
            Join forward-thinking engineering and operations teams. Cut manual processing time by 85% starting today.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition-all cursor-pointer"
            >
              Request Custom Enterprise Demo
            </button>
            <a
              href="#interactive-demo"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-all"
            >
              Test Live Sandbox
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-950 border-t border-slate-800/80 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-700/80 p-0.5 flex items-center justify-center overflow-hidden">
              <img src={initialLogo} alt="SmartIDP Logo" className="h-full w-full object-contain" />
            </div>
            <span className="font-bold text-white text-sm">SmartIDP Platform</span>
            <span className="text-slate-400">© 2026 SmartIDP Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Security Whitepaper</a>
            <a href="#" className="hover:text-white transition-colors">API Docs</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
          </div>
        </div>
      </footer>

      {/* Book a Demo Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => { setDemoModalOpen(false); setSubmittedLead(false); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {submittedLead ? (
              <div className="text-center py-8 space-y-4">
                <div className="h-14 w-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Demo Request Received</h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  Our solutions engineering team will reach out within 2 business hours with sandbox credentials and an architectural walkthrough.
                </p>
                <button
                  onClick={() => { setDemoModalOpen(false); setSubmittedLead(false); }}
                  className="mt-4 px-6 py-2 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-indigo-400" />
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Enterprise Sandbox</span>
                </div>
                <h3 className="text-xl font-bold text-white">Request a Personalized SmartIDP Demo</h3>
                <p className="text-xs text-slate-400 mt-1 mb-6">
                  See how SmartIDP processes your specific custom documents with our solutions engineers.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmittedLead(true)
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">First Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Company</label>
                      <input
                        type="text"
                        required
                        placeholder="Acme Logistics"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Primary Document Type</label>
                    <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-indigo-500">
                      <option>Invoices & Accounts Payable</option>
                      <option>Bills of Lading & Ocean Freight</option>
                      <option>Healthcare Claims (CMS-1500 / UB-04)</option>
                      <option>Tax Forms (W-2, 1099, 1040)</option>
                      <option>Bank Statements & Loan Applications</option>
                      <option>Other Custom Forms</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition-all cursor-pointer"
                  >
                    Confirm Demo Booking
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

