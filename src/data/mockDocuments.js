export const DOCUMENT_SAMPLES = [
  {
    id: 'inv-1092',
    name: 'Commercial Invoice (TechCorp)',
    category: 'Invoicing & AP',
    type: 'Multi-page PDF / 300 DPI',
    confidence: 99.8,
    processingTime: '340ms',
    fileSize: '1.2 MB',
    fields: [
      { id: 'f-1', label: 'Vendor Name', value: 'TechCorp Logistics LLC', confidence: 99.9, bbox: { top: 12, left: 8, width: 45, height: 6 } },
      { id: 'f-2', label: 'Invoice Number', value: 'INV-2026-88412', confidence: 100, bbox: { top: 12, left: 65, width: 28, height: 6 } },
      { id: 'f-3', label: 'Issue Date', value: '2026-10-18', confidence: 99.6, bbox: { top: 20, left: 65, width: 28, height: 5 } },
      { id: 'f-4', label: 'Due Date', value: '2026-11-18', confidence: 99.7, bbox: { top: 26, left: 65, width: 28, height: 5 } },
      { id: 'f-5', label: 'PO Reference', value: 'PO-99104-X', confidence: 98.9, bbox: { top: 32, left: 8, width: 35, height: 5 } },
      { id: 'f-6', label: 'Tax ID / VAT', value: 'US-94-2819034', confidence: 99.4, bbox: { top: 38, left: 8, width: 35, height: 5 } },
      { id: 'f-7', label: 'Subtotal', value: '$14,250.00', confidence: 99.8, bbox: { top: 78, left: 60, width: 32, height: 5 } },
      { id: 'f-8', label: 'Tax Amount (8.5%)', value: '$1,211.25', confidence: 99.5, bbox: { top: 84, left: 60, width: 32, height: 5 } },
      { id: 'f-9', label: 'Total Due', value: '$15,461.25', confidence: 100, bbox: { top: 90, left: 60, width: 32, height: 6 } }
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
    fileSize: '2.4 MB',
    fields: [
      { id: 'f-1', label: 'Patient Name', value: 'Eleanor Vance', confidence: 99.8, bbox: { top: 14, left: 8, width: 40, height: 6 } },
      { id: 'f-2', label: 'Insured ID', value: 'MED-9948201', confidence: 99.7, bbox: { top: 14, left: 55, width: 35, height: 6 } },
      { id: 'f-3', label: 'Diagnosis Code (ICD-10)', value: 'M54.5 (Low Back Pain)', confidence: 98.9, bbox: { top: 28, left: 8, width: 42, height: 6 } },
      { id: 'f-4', label: 'Procedure Code (CPT)', value: '99214 (Office Visit Lvl 4)', confidence: 99.4, bbox: { top: 48, left: 8, width: 42, height: 6 } },
      { id: 'f-5', label: 'Billing Provider NPI', value: '1487290112', confidence: 99.9, bbox: { top: 68, left: 8, width: 35, height: 6 } },
      { id: 'f-6', label: 'Charge Amount', value: '$345.00', confidence: 99.5, bbox: { top: 86, left: 60, width: 30, height: 6 } }
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
    fileSize: '3.1 MB',
    fields: [
      { id: 'f-1', label: 'Carrier / Vessel', value: 'MAERSK MC-KINNEY / V.2401', confidence: 99.1, bbox: { top: 10, left: 10, width: 50, height: 6 } },
      { id: 'f-2', label: 'Port of Loading', value: 'Singapore (SGSIN)', confidence: 99.5, bbox: { top: 22, left: 10, width: 38, height: 5 } },
      { id: 'f-3', label: 'Port of Discharge', value: 'Rotterdam (NLRTM)', confidence: 99.2, bbox: { top: 22, left: 52, width: 38, height: 5 } },
      { id: 'f-4', label: 'Container No.', value: 'MSKU-820194-2 (40HC)', confidence: 98.8, bbox: { top: 38, left: 10, width: 45, height: 5 } },
      { id: 'f-5', label: 'Gross Weight', value: '24,850 KG', confidence: 98.5, bbox: { top: 52, left: 10, width: 35, height: 5 } },
      { id: 'f-6', label: 'Customs HS Code', value: '8471.50 (Compute Modules)', confidence: 98.9, bbox: { top: 64, left: 10, width: 45, height: 5 } }
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
