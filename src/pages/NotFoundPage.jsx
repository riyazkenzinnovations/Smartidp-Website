import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home, FileQuestion, ArrowRight } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F8FAFC] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-8">
        
        {/* Visual Badge */}
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-[#F0FDF4] border border-[#14532D]/20 text-[#14532D] shadow-sm mx-auto">
          <FileQuestion className="h-10 w-10 text-[#14532D]" />
        </div>

        {/* Header */}
        <div className="space-y-3">
          <span className="text-xs font-bold font-mono text-[#14532D] uppercase tracking-wider block">
            404 Error · Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Looking for a Governed Record?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            The page or document address you requested may have been archived, moved, or is temporarily unavailable.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#14532D] hover:bg-[#166534] text-white font-bold text-sm shadow-md shadow-emerald-950/20 hover:shadow-lg transition-all"
          >
            <Home className="h-4 w-4" />
            <span>Return to Home Page</span>
          </Link>
          <Link
            to="/how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all shadow-2xs hover:shadow-sm"
          >
            <span>Explore How It Works</span>
            <ArrowRight className="h-4 w-4 text-[#14532D]" />
          </Link>
        </div>

        {/* Quick Directory Links */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Popular Destinations
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-600">
            <Link to="/features" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:text-[#14532D] hover:border-[#14532D]/30 transition-all">
              Platform Features
            </Link>
            <Link to="/solutions" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:text-[#14532D] hover:border-[#14532D]/30 transition-all">
              Regulated Industries
            </Link>
            <Link to="/compliance" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:text-[#14532D] hover:border-[#14532D]/30 transition-all">
              21 CFR Part 11 & GxP
            </Link>
            <Link to="/benefits" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:text-[#14532D] hover:border-[#14532D]/30 transition-all">
              Business ROI
            </Link>
            <Link to="/contact" className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:text-[#14532D] hover:border-[#14532D]/30 transition-all">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

