import { cva, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";
import Icon from "./icon";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react-refresh/only-export-components
export const textInputVariantsContainer = cva(
  "has-[:focus]:border-yellow-dark transition-colors p-3 rounded-xl border border-gray-500 flex items-center justify-center gap-2"
);

// eslint-disable-next-line react-refresh/only-export-components
export const textInputVariantsIcon = cva("size-5 fill-yellow");

// eslint-disable-next-line react-refresh/only-export-components
export const textInputVariants = cva(
  "w-full outline-none text-gray-200 placeholder:text-gray-400"
);

interface TextInputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof textInputVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function TextInput({
  className,
  icon,
  ...props
}: TextInputProps) {
  return (
    <label className={twMerge(textInputVariantsContainer({ className }))}>
      <Icon svg={icon} className={textInputVariantsIcon()} />
      <input
        type="text"
        className={twMerge(
          textVariants({
            variant: "text-md",
            className: textInputVariants(),
          })
        )}
        {...props}
      />
    </label>
  );
}
