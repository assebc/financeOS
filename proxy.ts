import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, hasLocale, locales } from "@/lib/i18n/locales";

// Note: this file is named `proxy.ts`, not `middleware.ts` — Next.js 16
// renamed the convention. See node_modules/next/dist/docs/.../proxy.md.

function pickLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]!.trim().toLowerCase());

  for (const tag of preferred) {
    const base = tag.split("-")[0]!;
    if (hasLocale(base)) return base;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return;

  const locale = pickLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Skip static assets and API routes — only redirect actual pages.
    "/((?!_next|api|favicon.ico).*)",
  ],
};
