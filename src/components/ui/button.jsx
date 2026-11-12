import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cyan-500/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#00ADA3] via-[#01A0CA] to-[#0092F2] text-white shadow-md shadow-cyan-500/20 hover:opacity-95 hover:shadow-lg hover:shadow-cyan-500/30",
        destructive:
          "bg-rose-500 text-white shadow-xs hover:bg-rose-600",
        outline:
          "border border-slate-200 bg-white text-slate-800 shadow-2xs hover:bg-slate-50 hover:text-[#01A0CA] hover:border-cyan-300",
        secondary:
          "bg-sky-50 text-[#01A0CA] border border-sky-100 shadow-2xs hover:bg-sky-100",
        ghost:
          "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        link:
          "text-[#01A0CA] underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-r from-[#00ADA3] via-[#01A0CA] to-[#0092F2] text-white shadow-md shadow-cyan-500/25 hover:opacity-95 hover:shadow-lg hover:shadow-cyan-500/35",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-12 rounded-xl px-7 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

