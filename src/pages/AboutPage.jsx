import React from 'react'
import AboutHero from '../components/about/AboutHero'
import CaseForChange from '../components/about/CaseForChange'
import TransformationTable from '../components/about/TransformationTable'
import ImplementationSteps from '../components/about/ImplementationSteps'
import AboutCta from '../components/about/AboutCta'

export default function AboutPage({ onOpenDemoModal }) {
  return (
    <div className="bg-white">
      {/* 1. Page Hero with 3 Facts & Mission/Vision */}
      <AboutHero />

      {/* 2. The Case for Change & 4 Core Pillars */}
      <CaseForChange />

      {/* 3. Operational Transformation Matrix Table */}
      <TransformationTable />

      {/* 4. 7-Step Implementation Methodology Timeline */}
      <ImplementationSteps />

      {/* 5. Executive Demonstration & Contact Call to Action */}
      <AboutCta onOpenDemoModal={onOpenDemoModal} />
    </div>
  )
}
