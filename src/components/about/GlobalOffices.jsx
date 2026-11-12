import React from 'react'
import { Building2, MapPin, Mail, Phone, ExternalLink } from 'lucide-react'
import { OFFICE_LOCATIONS } from '../../data/aboutContent'

export default function GlobalOffices() {
  return (
    <section aria-labelledby="offices-heading" className="py-14 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] text-[#14532D] text-xs font-semibold mb-3 border border-[#14532D]/15">
            <Building2 className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider text-[11px] font-bold">Global Presence</span>
          </div>
          <h2 id="offices-heading" className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Our Global Offices
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Headquartered in Austin, Texas with our primary Offshore Development Center (ODC) in Hyderabad, India.
          </p>
        </div>

        {/* 2 Equal Cards (Austin HQ first, Hyderabad ODC second) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFICE_LOCATIONS.map((office) => (
            <div
              key={office.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#14532D]/35 shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-[#14532D] bg-[#F0FDF4] px-3 py-1 rounded-md border border-[#14532D]/15 uppercase tracking-wider">
                    {office.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {office.locationName}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {office.companyName}
                  </h3>
                  <p className="text-xs text-[#14532D] font-semibold mt-0.5">
                    {office.subTitle}
                  </p>
                </div>

                <div className="text-sm text-slate-600 leading-relaxed space-y-0.5 pt-1">
                  {office.addressLines.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14532D] hover:underline"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Get directions</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Contact Details */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#14532D]" />
                  <a href={`mailto:${office.email}`} className="hover:text-[#14532D]">
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#14532D]" />
                  <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-[#14532D]">
                    {office.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
