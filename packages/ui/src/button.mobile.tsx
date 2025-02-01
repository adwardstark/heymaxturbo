import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { Pressable } from "react-native";
import { cn } from "./cn";

const buttonVariants = cva(
  "flex items-center justify-center rounded-full transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-accent text-primary hover:opacity-90",
        outline:
          "border-accent border-2 text-accent hover:bg-accent hover:text-primary",
      },
      size: {
        default: "h-12 px-6 py-2",
        icon: "h-12 w-20 p-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

// Mobile button props
type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

// Mobile button component
const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <Pressable
      className={cn(
        props.disabled && "opacity-50",
        buttonVariants({ variant, size, className })
      )}
      ref={ref}
      role="button"
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
export type { ButtonProps };
