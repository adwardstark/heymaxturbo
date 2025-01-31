import { cva  } from "class-variance-authority"
import type {VariantProps} from "class-variance-authority";
import React from "react";

const buttonStyles = cva("flex items-center justify-center rounded-full transition-colors", {
  variants: {
    variant: {
      primary: "bg-foreground text-white hover:bg-accent",
      secondary: "bg-purple-100 text-purple-900 hover:bg-purple-200",
    },
    size: {
      default: "h-12 px-6 py-2",
      large: "h-14 px-8 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
})

export interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: React.ReactNode
  onPress?: () => void
  href?: string
}

// Web Button
export function Button({ variant, size, children, href, ...props }: ButtonProps) {
  const className = buttonStyles({ variant, size })

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
