// Source of truth: SmartiDP-EDMS-Product-Brochure.pdf

export const HERO_FACTS = [
  {
    label: 'Global Presence',
    value: 'Austin HQ & Hyderabad ODC',
    detail: 'Executive headquarters with dedicated Offshore Development Center'
  },
  {
    label: 'Built-in Controls',
    value: '12+ Global Frameworks',
    detail: 'Mapped to 21 CFR Part 11, GAMP 5, ISO, GDPR & HIPAA'
  },
  {
    label: 'Structured Delivery',
    value: '7-Phase GxP Methodology',
    detail: 'Agile execution model with comprehensive validation documentation'
  }
]

export const MISSION_VISION = {
  mission: {
    title: 'Our Mission',
    text: 'To eliminate enterprise document chaos through governed operational velocity, enabling regulated and enterprise organizations to accelerate critical workflows while remaining continuously audit-ready.'
  },
  vision: {
    title: 'Our Vision',
    text: 'A business world where every strategic decision, product release, and regulatory submission is empowered by trusted, automated, and continuously audit-ready information flow.'
  }
}

export const CASE_FOR_CHANGE_PILLARS = [
  {
    id: 'unified',
    title: 'Unified',
    desc: 'One repository, one security model, one audit trail — across departments, sites and countries.'
  },
  {
    id: 'intelligent',
    title: 'Intelligent',
    desc: 'AI extracts meaning from content, automates classification and powers natural-language discovery.'
  },
  {
    id: 'configurable',
    title: 'Configurable',
    desc: 'Adapt document types, metadata, workflows and rules through configuration — no custom code.'
  },
  {
    id: 'compliance-ready',
    title: 'Compliance-Ready',
    desc: 'Controls pre-mapped to 12+ global regulations and standards including Part 11, ISO, and GDPR.'
  }
]

// From PDF Page 3: "The transformation"
export const TRANSFORMATION_ITEMS = [
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

// From PDF Page 19: "Implementation & Customer Success"
export const IMPLEMENTATION_STEPS = [
  {
    step: '01',
    name: 'Discover',
    desc: 'Process workshops, requirements, success KPIs and business case.'
  },
  {
    step: '02',
    name: 'Design',
    desc: 'Information architecture, metadata, security model and workflows.'
  },
  {
    step: '03',
    name: 'Configure',
    desc: 'Iterative configuration and integration with fortnightly demos.'
  },
  {
    step: '04',
    name: 'Validate',
    desc: 'Risk-based testing, IQ/OQ/PQ support and user acceptance.'
  },
  {
    step: '05',
    name: 'Migrate',
    desc: 'Verified migration of legacy content and metadata.'
  },
  {
    step: '06',
    name: 'Go live',
    desc: 'Training, change management and hyper-care support.'
  },
  {
    step: '07',
    name: 'Optimise',
    desc: 'KPI reviews, adoption analytics and roadmap planning.'
  }
]

// Office Locations
// Note: Legal entity is Kenz Innovations (proprietor of SmartiDP EDMS per PDF pages 1 & 20)
export const OFFICE_LOCATIONS = [
  {
    id: 'nepean',
    isHeadquarters: true,
    badge: 'GLOBAL HEADQUARTERS',
    locationName: 'Nepean, Ontario, Canada',
    companyName: 'SmartIDP Group Inc.',
    subTitle: 'Corporate & Global Operations Headquarters',
    addressLines: [
      '65 Aura Avenue',
      'Nepean, Ontario K2J 6R9, Canada'
    ],
    email: 'info@smartidp.ai',
    phone: '+91 8065904278',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=65+Aura+Avenue+Nepean+ON+Canada'
  },
  {
    id: 'austin',
    isHeadquarters: false,
    badge: 'USA OPERATIONS HUB',
    locationName: 'Austin, Texas, USA',
    companyName: 'SmartIDP Group Inc.',
    subTitle: 'US Enterprise & Commercial Operations',
    addressLines: [
      '5900 Balcones Drive STE 13688',
      'Austin, TX 78731, USA'
    ],
    email: 'info@smartidp.ai',
    phone: '+91 8065904278',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=5900+Balcones+Drive+STE+13688+Austin+TX+78731'
  },
  {
    id: 'hyderabad',
    isHeadquarters: false,
    badge: 'OFFSHORE DEVELOPMENT CENTER (ODC)',
    locationName: 'Hyderabad, India',
    companyName: 'Kenz Innovations',
    subTitle: 'Core R&D, Product Engineering & Delivery Operations',
    addressLines: [
      '3rd Floor, Shriya Building, Mothi Nagar, Dwarakapuri',
      'Punjagutta, Hyderabad, Telangana 500082, India'
    ],
    email: 'info@smartidp.ai',
    phone: '+91 8065904278',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shriya+Building+Mothi+Nagar+Dwarakapuri+Punjagutta+Hyderabad'
  }
]

