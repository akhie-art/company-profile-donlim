import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-transparent px-3 py-0.5 font-mono text-xs font-medium whitespace-nowrap transition-colors duration-200 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [&>svg]:pointer-events-none [&>svg]:size-3.5!",
  {
    variants: {
      variant: {
        default: "bg-[#0547D4] text-white",
        brand: "border-[#0547D4]/20 bg-[#EFF6FF] text-[#0547D4]",
        amber: "border-[#B45309]/20 bg-[#FFF7ED] text-[#B45309]",
        "dark-amber":
          "border-[#FB9704]/35 bg-[#FB9704]/12 text-[#FB9704]",
        "dark-subtle":
          "border-white/15 bg-white/8 text-slate-200",
        secondary: "bg-slate-100 text-slate-700",
        destructive: "bg-destructive/10 text-destructive",
        outline: "border-slate-200 bg-white text-slate-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
