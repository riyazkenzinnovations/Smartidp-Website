import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import KeyFeatures from './components/KeyFeatures'
import InteractiveWorkbench from './components/InteractiveWorkbench'
import ModulesSolutions from './components/ModulesSolutions'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import ComplianceDeepDive from './components/ComplianceDeepDive'
import WhyChooseUs from './components/WhyChooseUs'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'
import VideoModal from './components/VideoModal'

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-[#171717] font-sans selection:bg-[#14532D] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Hero Section */}
      <Hero 
        onOpenDemoModal={() => setDemoModalOpen(true)} 
        onOpenVideoModal={() => setVideoModalOpen(true)} 
      />

      {/* About Section - Case for Change */}
      <About onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Key Features - 8 Integrated Capability Domains */}
      <KeyFeatures onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Interactive Platform Simulation Workbench */}
      <InteractiveWorkbench onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Industry Modules & Solutions */}
      <ModulesSolutions onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Business Value & Measurable Benefits */}
      <Benefits onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* How It Works - Lifecycle & Capture Pipeline */}
      <HowItWorks onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Regulatory Deep-Dive & Compliance Matrix */}
      <ComplianceDeepDive onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Why Choose SmartiDP EDMS & Implementation Methodology */}
      <WhyChooseUs onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Professional Contact / Demonstration Enquiry */}
      <ContactSection />

      {/* Clean Footer */}
      <Footer onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Modals */}
      <DemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
      />
      <VideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
      />
    </div>
  )
}
