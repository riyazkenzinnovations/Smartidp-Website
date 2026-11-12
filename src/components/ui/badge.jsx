import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-cyan-500/40",
  {
    variants: {
      variant: {
        default:
          "border-sky-200 bg-sky-50 text-[#01A0CA] shadow-2xs hover:bg-sky-100",
        secondary:
          "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100",
        outline:
          "border-slate-300 text-slate-700 hover:border-cyan-300 hover:text-[#01A0CA]",
        gradient:
          "border-transparent bg-gradient-to-r from-[#00ADA3] to-[#01A0CA] text-white shadow-2xs",
        destructive:
          "border-rose-200 bg-rose-50 text-rose-700",
        teal:
          "border-teal-200 bg-teal-50 text-[#00ADA3]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

