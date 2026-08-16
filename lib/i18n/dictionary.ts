import { notFound } from "next/navigation";
import { lang } from "next/root-params";

import { hasLocale, type Locale } from "./locales";
import en from "./translation.en.json";
import pt from "./translation.pt.json";

// Both files must carry the exact same keys — `Dictionary` is derived from
// `en`, so any component reading `dict.SOME_KEY` is checked against it.
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, pt };

/**
 * The active locale for the current request, read from the `[lang]` root
 * segment via next/root-params (no prop-drilling through every page).
 * 404s if proxy.ts ever lets an unsupported locale through.
 */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!hasLocale(value)) notFound();
  return value;
}

export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()];
}
