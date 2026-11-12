import React, { useEffect, useRef, useState } from 'react'
import whiteBgAnimation from '../assets/SmartIDP_WhiteBG_Animation.mp4'
import { Sparkles, ArrowRight } from 'lucide-react'
import { BROCHURE_META, EXECUTIVE_SUMMARY } from '../data/brochureData'
import RequestDemoButton from './RequestDemoButton'

export default function Hero({ onOpenDemoModal, onOpenVideoModal }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches)
      if (videoRef.current) {
        if (event.matches) {
          videoRef.current.pause()
        } else {
          videoRef.current.play().catch(() => {})
        }
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      if (prefersReducedMotion) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(() => {})
      }
    }
  }, [prefersReducedMotion])

  return (
    <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/60 via-white to-white border-b border-slate-200/70">
      {/* Background soft ambient green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1720px] h-[500px] pointer-events-none overflow-hidden opacity-50">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-r from-emerald-100/40 via-green-100/30 to-teal-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Main 2-Column Split: Copy on Left, Transparent Video Animation on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clear Hierarchy */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* 1. Single Top Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-emerald-900/15 text-[#14532D] text-xs font-semibold shadow-2xs">
                <Sparkles className="h-3.5 w-3.5 text-[#14532D]" />
                <span className="tracking-wider uppercase text-[11px] font-bold">
                  {BROCHURE_META.companyName} · {BROCHURE_META.productName}
                </span>
              </div>
            </div>

            {/* 2. Headline with Forest Green Second Line */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.14]">
              The intelligent platform for{' '}
              <span className="block text-[#14532D]">
                enterprise documents.
              </span>
            </h1>

            {/* 3. Verbatim Paragraph from Brochure Cover Page */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              {BROCHURE_META.heroDescription}
            </p>

            {/* 4. Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <RequestDemoButton
                onClick={onOpenDemoModal}
                size="lg"
              />
            </div>

          </div>

          {/* Right Column: Transparent Video Animation */}
          <div className="lg:col-span-6 w-full mt-2 lg:mt-0 flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-xl flex items-center justify-center">
              <video 
                ref={videoRef}
                src={whiteBgAnimation} 
                autoPlay={!prefersReducedMotion}
                loop 
                muted 
                playsInline
                aria-label="SmartiDP Intelligent Document Processing Animation"
                className="w-full h-auto max-h-[320px] sm:max-h-[420px] lg:max-h-[480px] object-contain mix-blend-multiply pointer-events-none select-none"
                style={{
                  filter: 'contrast(1.05) brightness(1.02)',
                  WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 45%, transparent 80%)',
                  maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 45%, transparent 80%)',
                }}
              />
            </div>
          </div>

        </div>

        {/* Divided Row: 4 Verbatim Stats from Brochure Page 2 (Executive Summary) */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {EXECUTIVE_SUMMARY.stats.map((stat, i) => (
              <div
                key={i}
                className={`text-left ${
                  i === 0
                    ? 'lg:pr-8'
                    : i === 3
                    ? 'lg:pl-8 lg:border-l border-slate-200/80'
                    : 'lg:px-8 lg:border-l border-slate-200/80'
                }`}
              >
                <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14532D]">
                  {stat.value}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
