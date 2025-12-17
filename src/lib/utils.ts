import { twMerge } from "tailwind-merge";

export function cn(...classes: (string | undefined | null | boolean)[]) {
  return twMerge(classes.filter(Boolean).join(" "));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CVAFunction = (props?: any) => string;

export function withTwMerge<T extends CVAFunction>(cvaFn: T): T {
  return ((props?: Parameters<T>[0]) => {
    return twMerge(cvaFn(props));
  }) as T;
}
