import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Pass-through — all image URLs should be CORS-friendly (Unsplash etc.) */
export function proxyImageUrl(url: string): string {
  return url ?? '';
}


