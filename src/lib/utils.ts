import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Proxy Wikipedia/Wikimedia image URLs through wsrv.nl (adds CORS headers).
 * Other URLs are returned unchanged.
 */
export function proxyImageUrl(url: string): string {
  if (!url) return url;
  if (url.includes('wikimedia.org') || url.includes('wikipedia.org')) {
    // wsrv.nl needs the raw URL — do NOT double-encode it
    return `https://wsrv.nl/?url=${url}&output=jpg&q=85`;
  }
  return url;
}

