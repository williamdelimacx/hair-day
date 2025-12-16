import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";

// eslint-disable-next-line react-refresh/only-export-components
export const buttonIconVariants = cva(
  "inline-flex items-center justify-center cursor-pointer group size-4"
);

interface ButtonIconProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

// eslint-disable-next-line react-refresh/only-export-components
export const buttonIconIconVariants = cva(
  "size-full fill-yellow group-hover:fill-yellow-dark transition-colors"
);

export default function ButtonIcon({
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({
        className,
      })}
      {...props}
    >
      <Icon className={buttonIconIconVariants()} svg={icon} />
    </button>
  );
}
