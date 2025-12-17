import { cva, type VariantProps } from "class-variance-authority";
import Text from "./text";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react-refresh/only-export-components
export const buttonVariants = cva(
  `
    flex items-center justify-center cursor-pointer w-full select-none
    transition-colors py-4.5 px-6 bg-yellow border-2 border-transparent 
    rounded-lg hover:border-yellow-light
  `,
  {
    variants: {
      disabled: {
        true: "opacity-30 pointer-events-none",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<"button">,
    Omit<VariantProps<typeof buttonVariants>, "disabled"> {}

export default function Button({
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        buttonVariants({
          className,
          disabled,
        })
      )}
      type="button"
      {...props}
    >
      <Text variant="title-sm" className="text-gray-900 uppercase">
        {children}
      </Text>
    </button>
  );
}
