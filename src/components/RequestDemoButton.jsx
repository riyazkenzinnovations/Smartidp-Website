import React from 'react'
import { ArrowRight } from 'lucide-react'

/**
 * Standardized "Request a Demo →" Primary Action Button
 * Matches the official SmartIDP Forest Green Pill design.
 * Supports both link navigation (via `href`) and button clicks (via `onClick`).
 */
export default function RequestDemoButton({
  onClick,
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  className = '',
  size = 'md', // 'sm' | 'md' | 'lg'
  children,
  fullWidth = false,
  type = 'button'
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5'
  }[size] || 'px-6 py-2.5 text-sm gap-2'

  const combinedClasses = `group relative inline-flex items-center justify-center font-bold text-white rounded-full bg-[#14532D] hover:bg-[#166534] active:bg-[#0F3F22] shadow-md shadow-emerald-950/20 hover:shadow-lg hover:shadow-emerald-950/30 transition-all cursor-pointer whitespace-nowrap focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#14532D] focus-visible:ring-offset-2 ${sizeClasses} ${fullWidth ? 'w-full' : ''} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={combinedClasses}
      >
        <span>{children || 'Request a Demo'}</span>
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
    >
      <span>{children || 'Request a Demo'}</span>
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  )
}
