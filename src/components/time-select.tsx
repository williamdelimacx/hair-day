import { cva, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";

// eslint-disable-next-line react-refresh/only-export-components
export const timeSelectVariants = cva(
  "w-fit py-2 px-5 rounded-lg border hover:bg-gray-500 border-gray-500 bg-gray-600 transition-colors",
  {
    variants: {
      disabled: {
        true: "bg-transparent text-gray-500 pointer-events-none border-gray-700 hover:bg-transparent",
        false: "cursor-pointer",
      },
      selected: {
        true: "text-yellow border-yellow pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
      selected: false,
    },
  }
);

interface TimeSelectProps
  extends React.ComponentProps<"button">,
    Omit<VariantProps<typeof timeSelectVariants>, "disabled"> {
  children?: React.ReactNode;
}

export default function TimeSelect({
  children,
  disabled,
  selected,
}: TimeSelectProps) {
  return (
    <button
      className={timeSelectVariants({
        className: textVariants({
          className: "text-gray-200",
          variant: "text-md",
        }),
        disabled,
        selected,
      })}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
