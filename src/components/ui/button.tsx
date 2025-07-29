import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-focus-glow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0",
  {
    variants: {
      variant: {
        // HIGH-CONTRAST PRIMARY ACTION - WCAG AA Compliant
        default: "bg-action-primary text-action-primary-foreground hover:bg-action-primary-hover active:bg-action-primary-active border-2 border-action-primary hover:border-action-primary-hover shadow-action-primary/25 hover:shadow-action-primary-hover/35",
        // SECONDARY ACTION - Still high contrast
        secondary: "bg-action-secondary text-action-secondary-foreground hover:bg-action-secondary-hover border-2 border-action-secondary hover:border-action-secondary-hover shadow-action-secondary/25 hover:shadow-action-secondary-hover/35",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-2 border-destructive",
        outline:
          "border-2 border-action-primary bg-transparent text-action-primary hover:bg-action-primary hover:text-action-primary-foreground font-bold shadow-md hover:shadow-lg",
        ghost: "text-action-primary hover:bg-action-primary/10 hover:text-action-primary font-bold",
        link: "text-action-primary underline-offset-4 hover:underline font-bold",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 rounded-md px-4 text-sm",
        lg: "h-14 rounded-xl px-8 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
