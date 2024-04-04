import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isEmptyString(info: unknown) {
  if (typeof info !== "string" || info.trim().length === 0) {
    return true;
  }

  return false;
}
