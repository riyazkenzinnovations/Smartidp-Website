import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'

/**
 * Standardized Forest-Green CTA Banner (Image 2 style)
 * Replaces the legacy cyan gradient CTA banners across all pages.
 */
export default function PageCtaBanner({
  onOpenDemoModal,
  badge = 'PARTNER WITH KENZ INNOVATIONS',
  badgeIcon: BadgeIcon = ShieldCheck,
  title = 'See SmartiDP EDMS in action',
  description = 'Book a personalised demonstration tailored to your industry, processes and compliance requirements.',
  primaryBtnText = 'Request a Demo',
  secondaryBtnText = 'Contact Solutions Team',
  secondaryLink = '/contact'
}) {
  return (
    <section aria-labelledby="page-cta-heading" className="py-14 lg:py-20 bg-gradient-to-b from-sky-50/40 via-slate-50 to-white">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-r from-[#0284C7] via-[#0D9488] to-[#10B981] text-white text-center space-y-6 shadow-xl shadow-teal-950/20 relative overflow-hidden">
          
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold">
              <BadgeIcon className="h-4 w-4" />
              <span className="uppercase tracking-wider text-[11px] font-bold">{badge}</span>
            </div>
          )}

          <h2 id="page-cta-heading" className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            {title}
          </h2>

          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            {description}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[44px] rounded-full bg-white text-[#0F766E] font-bold text-sm shadow-md hover:bg-slate-50 hover:shadow-lg transition-all cursor-pointer group"
            >
              <span>{primaryBtnText}</span>
              <ArrowRight className="h-4 w-4 text-[#0F766E] group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to={secondaryLink}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 min-h-[44px] rounded-full bg-black/20 text-white font-semibold text-sm border border-white/30 hover:bg-black/30 transition-all"
            >
              {secondaryBtnText}
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

