import React from 'react'
import { Building2, Sparkles, Target, Compass, CheckCircle2 } from 'lucide-react'
import { HERO_FACTS, MISSION_VISION } from '../../data/aboutContent'
import { BROCHURE_META, EXECUTIVE_SUMMARY, PLATFORM_OVERVIEW } from '../../data/brochureData'

export default function AboutHero() {
  return (
    <section aria-labelledby="about-hero-heading" className="py-12 lg:py-18 bg-gradient-to-b from-slate-50/70 via-white to-white border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12 lg:space-y-16">
        
        {/* Main 2-Column Split matching Navbar width */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (7 cols): Hero Title & Executive Summary Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#14532D]/15 text-[#14532D] text-xs font-semibold shadow-2xs">
              <Building2 className="h-3.5 w-3.5 text-[#14532D]" />
              <span className="tracking-wider uppercase text-[11px] font-bold">
                About {BROCHURE_META.companyName} · {BROCHURE_META.productName}
              </span>
            </div>

            <h1 id="about-hero-heading" className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.14]">
              {EXECUTIVE_SUMMARY.headline}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {EXECUTIVE_SUMMARY.paragraph1}
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {EXECUTIVE_SUMMARY.paragraph2}
            </p>

            <div className="pt-2 text-sm font-semibold text-[#14532D] flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#14532D]" />
              <span>{EXECUTIVE_SUMMARY.closing}</span>
            </div>
          </div>

          {/* Right Column (5 cols): 3 Core Platform Pillars (Page 4 of brochure) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card-green p-6 sm:p-8 rounded-3xl border border-[#14532D]/15 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#14532D]/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14532D] flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-[#14532D]" />
                  <span>Platform Foundation</span>
                </span>
                <span className="text-xs text-[#14532D] font-mono font-semibold">Enterprise Architecture</span>
              </div>

              {PLATFORM_OVERVIEW.pillars.map((pillar, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#14532D] shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mission and Vision: One 2-column block spanning full width with thin divider */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 gap-8 md:gap-0">
            {/* Mission */}
            <div className="md:pr-10 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14532D]">
                <Target className="h-4 w-4 text-[#14532D]" />
                <span>{MISSION_VISION.mission.title}</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {MISSION_VISION.mission.text}
              </p>
            </div>

            {/* Vision */}
            <div className="pt-8 md:pt-0 md:pl-10 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#14532D]">
                <Compass className="h-4 w-4 text-[#14532D]" />
                <span>{MISSION_VISION.vision.title}</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {MISSION_VISION.vision.text}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
