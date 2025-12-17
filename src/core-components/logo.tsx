import type { ComponentProps } from "react";
import logo from "../assets/logo.svg";
import { twMerge } from "tailwind-merge";

export default function Logo({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={twMerge("py-3 px-5 bg-gray-600 rounded-br-xl", className)}
      {...props}
    >
      <img src={logo} alt="logo" />
    </div>
  );
}
