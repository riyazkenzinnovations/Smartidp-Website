import React from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Clock
} from 'lucide-react'

export default function CtaBanner({
  onOpenDemoModal,
  badge = 'SmartiDP EDMS · Kenz Innovations',
  title = 'Ready to transform how your enterprise manages information?',
  description = 'Book a personalised demonstration tailored to your industry, processes and compliance requirements.',
  primaryBtnText = 'Request a demo →',
  secondaryBtnText = 'Contact Solutions Team',
  secondaryLink = '/contact'
}) {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-gradient-to-r from-[#0284C7] via-[#0D9488] to-[#10B981] text-white">
      {/* Ambient Lighting Depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.22) 0%, transparent 70%)'
        }}
      />
      
      {/* Decorative Floating Ambient Blurred Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container - Aligned to Page Margins */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Headline & Value Proposition (Brochure Page 20) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold shadow-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-200 animate-pulse" />
              <Sparkles className="h-3.5 w-3.5 text-white" />
              <span>{badge}</span>
            </div>

            {/* Headline - Word-for-Word from Brochure Page 20 */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.14] text-white drop-shadow-xs">
              {title}
            </h2>

            {/* Subtitle - Word-for-Word from Brochure Page 20 */}
            <p className="text-white/95 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-2xl">
              {description}
            </p>

            {/* Trust Chips - Core Pillars from Brochure Page 20 & 19 */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-medium text-white/95">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/15 backdrop-blur-md border border-white/20 shadow-xs">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-200 shrink-0" />
                <span>Controls mapped to 12+ global regulations & standards</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/15 backdrop-blur-md border border-white/20 shadow-xs">
                <Lock className="h-3.5 w-3.5 text-emerald-200 shrink-0" />
                <span>Deploy your way: SaaS, private cloud or on-premise</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/15 backdrop-blur-md border border-white/20 shadow-xs">
                <Clock className="h-3.5 w-3.5 text-emerald-200 shrink-0" />
                <span>GxP documentation rigour for validated environments</span>
              </div>
            </div>

          </div>

          {/* Right Column: Demo Booking Card (Brochure Page 20) */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/30 shadow-2xl space-y-5 text-left">
              
              <div>
                <span className="text-[11px] font-bold text-cyan-100 uppercase tracking-wider">
                  SmartiDP Enterprise Platform
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  See SmartiDP EDMS in action
                </h3>
                <p className="text-xs sm:text-sm text-white/85 mt-1 leading-relaxed">
                  Book a personalised demonstration tailored to your industry, processes and compliance requirements.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-1">
                <button
                  type="button"
                  onClick={onOpenDemoModal}
                  className="w-full px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-[#0F766E] hover:text-[#0D9488] font-bold text-sm sm:text-base shadow-xl shadow-teal-950/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
                >
                  <span>Request a Demo</span>
                  <ArrowRight className="h-4 w-4 text-[#0F766E] group-hover:text-[#0D9488] group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to={secondaryLink}
                  className="w-full px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-sm border border-white/30 hover:border-white/50 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <ShieldCheck className="h-4 w-4 text-cyan-200" />
                  <span>{secondaryBtnText}</span>
                </Link>
              </div>

              <div className="pt-2 text-center text-xs text-white/75">
                <span>Direct consultation with enterprise solution architects</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
