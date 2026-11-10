import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DemoModal from './components/DemoModal'
import VideoModal from './components/VideoModal'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FeaturesPage from './pages/FeaturesPage'
import SolutionsPage from './pages/SolutionsPage'
import HowItWorksPage from './pages/HowItWorksPage'
import BenefitsPage from './pages/BenefitsPage'
import CompliancePage from './pages/CompliancePage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#171717] font-sans selection:bg-[#14532D] selection:text-white">
        {/* Persistent Top Navigation */}
        <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* Multi-Page Routed Content */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenDemoModal={() => setDemoModalOpen(true)} 
                  onOpenVideoModal={() => setVideoModalOpen(true)} 
                />
              } 
            />
            <Route 
              path="/about" 
              element={<AboutPage onOpenDemoModal={() => setDemoModalOpen(true)} />} 
            />
            <Route 
              path="/features" 
              element={<FeaturesPage onOpenDemoModal={() => setDemoModalOpen(true)} />} 
            />
            <Route 
              path="/solutions" 
              element={<SolutionsPage onOpenDemoModal={() => setDemoModalOpen(true)} />} 
            />
            <Route 
              path="/how-it-works" 
              element={<HowItWorksPage onOpenDemoModal={() => setDemoModalOpen(true)} />} 
            />
            <Route 
              path="/benefits" 
              element={<BenefitsPage onOpenDemoModal={() => setDemoModalOpen(true)} />} 
            />
            <Route 
              path="/compliance" 
              element={<CompliancePage onOpenDemoModal={() => setDemoModalOpen(true)} />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
            <Route 
              path="*" 
              element={<Navigate to="/" replace />} 
            />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* Global Modals */}
        <DemoModal 
          isOpen={demoModalOpen} 
          onClose={() => setDemoModalOpen(false)} 
        />
        <VideoModal 
          isOpen={videoModalOpen} 
          onClose={() => setVideoModalOpen(false)} 
        />
      </div>
    </BrowserRouter>
  )
}
