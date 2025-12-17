import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react-refresh/only-export-components
export const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "title-lg": "font-sans text-[2rem]/6 font-bold",
      "title-md": "font-sans text-base/6 font-bold",
      "title-sm": "font-sans text-sm/5 font-bold",
      "text-md": "font-sans text-base/6 font-normal",
      "text-sm": "font-sans text-sm/5 font-normal",
    },
  },
  defaultVariants: {
    variant: "text-md",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: twMerge(textVariants({ variant, className })),
      ...props,
    },
    children
  );
}
