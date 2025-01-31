import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "./cn";

const buttonVariants = cva(
  "flex items-center justify-center rounded-full transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-accent text-primary hover:opacity-90",
        outline: "border-accent border-2 text-accent hover:bg-purple-200",
      },
      size: {
        default: "h-12 px-6 py-2",
        icon: "h-10 w-10 p-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
