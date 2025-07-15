import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This check can be removed, it is just for tutorial purposes
export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function isEmpty(str?: string) {
  return str === null || str === undefined || str.trim() === "";
}
export const getInitials = (name?: string) => {
  if (isEmpty(name)) return "";

  const names = name!.split(" ");
  return names!.map((n) => n[0]).join("");
};
