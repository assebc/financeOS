import Link from "next/link";

import { LangSwitcher } from "@/components/lang-switcher";
import { getDictionary, getLocale } from "@/lib/i18n/dictionary";
import { getModules } from "@/lib/i18n/modules";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const dict = await getDictionary();
  const modules = getModules(dict);

  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-4">
          <Link
            href={`/${locale}`}
            className="text-sm font-semibold text-foreground"
          >
            Finance<span className="text-brand">OS</span>
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground-secondary">
            {modules.map((mod) => (
              <Link
                key={mod.href}
                href={`/${locale}${mod.href}`}
                className="transition-colors hover:text-foreground"
              >
                {mod.name}
              </Link>
            ))}
          </nav>
          <LangSwitcher className="ml-auto" />
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
        {children}
      </main>
    </div>
  );
}
