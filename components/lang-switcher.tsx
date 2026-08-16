"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales } from "@/lib/i18n/locales";

export function LangSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const activeLocale = segments[1];
  const restOfPath = segments.slice(2).join("/");

  return (
    <div
      className={`flex gap-2 text-xs font-medium uppercase text-foreground-muted ${className ?? ""}`}
    >
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}${restOfPath ? `/${restOfPath}` : ""}`}
          aria-current={locale === activeLocale ? "true" : undefined}
          className={
            locale === activeLocale
              ? "text-foreground"
              : "transition-colors hover:text-foreground-secondary"
          }
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
