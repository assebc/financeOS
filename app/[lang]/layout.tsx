import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { lang } from "next/root-params";

import { getDictionary } from "@/lib/i18n/dictionary";
import { locales } from "@/lib/i18n/locales";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    title: dict.META_TITLE,
    description: dict.META_DESCRIPTION,
  };
}

export default async function RootLayout(props: LayoutProps<"/[lang]">) {
  return (
    <html
      lang={await lang()}
      className={`${geistSans.variable} ${geistMono.variable} h-full snap-y snap-mandatory antialiased`}
    >
      <body className="min-h-full flex flex-col">{props.children}</body>
    </html>
  );
}
