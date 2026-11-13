import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Sparkles, Play } from 'lucide-react'
import { WHY_SMARTIDP_EDMS, BROCHURE_META } from '../../data/brochureData'

export default function AboutCta({ onOpenDemoModal }) {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 150)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="about-cta-heading"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}
    >
      <div className="relative w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* ── MAIN CTA BANNER CARD ──────────────────────────── */}
        <div
          className="relative overflow-hidden rounded-3xl transition-all duration-700 ease-out"
          style={{
            background: 'linear-gradient(135deg, #064E3B 0%, #14532D 35%, #166534 65%, #15803D 100%)',
            boxShadow: '0 24px 80px -16px rgba(20,83,45,0.42)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0) scale(1)' : 'translateY(32px) scale(0.98)',
          }}
        >
          {/* Subtle architectural grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.055] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '52px 52px',
            }}
          />

          {/* Radial ambient glow from top */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)',
            }}
          />

          {/* Animated decorative floating orbs inside the banner */}
          <div
            className="abt-orb1 absolute -right-28 -top-28 rounded-full pointer-events-none"
            style={{
              width: 340,
              height: 340,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          />
          <div
            className="abt-orb2 absolute -right-10 -bottom-10 rounded-full pointer-events-none"
            style={{
              width: 240,
              height: 240,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          />
          <div
            className="abt-orb3 absolute -left-16 -bottom-16 rounded-full pointer-events-none"
            style={{
              width: 280,
              height: 280,
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          />

          {/* Top illuminated shimmer line */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35) 50%, transparent)',
            }}
          />

          {/* ── CONTENT CONTAINER ─────────────────────── */}
          <div className="relative z-10 p-10 sm:p-16 lg:p-20 text-center max-w-3xl mx-auto">

            {/* Top Partner Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 shadow-sm">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.22)',
                }}
              >
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-100">
                  Partner With {BROCHURE_META.companyName}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* Main Action Headline */}
            <h2
              id="about-cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6"
            >
              {WHY_SMARTIDP_EDMS?.cta?.title || 'See SmartiDP EDMS in action'}
            </h2>

            {/* Subline Copy */}
            <p className="text-emerald-100/85 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto font-normal">
              {WHY_SMARTIDP_EDMS?.cta?.desc ||
                'Book a personalised demonstration tailored to your industry, processes and compliance requirements.'}
            </p>

            {/* Primary & Secondary Action Buttons with Shimmer & Slide */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary: Request Demo with Shimmering Light Sweep */}
              <button
                type="button"
                onClick={onOpenDemoModal}
                className="abt-btn-shimmer group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[52px] rounded-full font-bold text-sm transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1 hover:shadow-2xl"
                style={{
                  background: '#FFFFFF',
                  color: '#14532D',
                }}
              >
                <Play className="h-4 w-4 fill-current text-[#14532D]" />
                <span>Request a Demo</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              {/* Secondary: Contact Solutions Team with Translucent Hover Glow */}
              <Link
                to="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 min-h-[52px] rounded-full font-semibold text-sm transition-all duration-300 backdrop-blur-md hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.28)',
                  color: 'rgba(255,255,255,0.95)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.22)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'
                }}
              >
                <span>Contact Solutions Team</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>

            {/* Bottom Compliance Trust Indicator */}
            <div className="mt-10 flex items-center justify-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-emerald-300/60" />
              <span className="text-xs text-emerald-100/60 font-medium">
                Tailored to your industry, processes and compliance requirements
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
