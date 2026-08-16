// Plain, Next-API-free module — safe to import from proxy.ts as well as
// Server Components, unlike dictionary.ts (which pulls in next/root-params).

export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
