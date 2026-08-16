"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";

import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";
import type { getModules } from "@/lib/i18n/modules";

type Modules = ReturnType<typeof getModules>;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Home({
  locale,
  dict,
  modules,
}: {
  locale: Locale;
  dict: Dictionary;
  modules: Modules;
}) {
  return (
    <div className="flex flex-col">
      {/* Hero — animates in once on load */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative flex h-dvh w-full snap-start snap-always flex-col items-center justify-center gap-6 px-6 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-semibold text-foreground sm:text-6xl"
        >
          Finance<span className="text-brand">OS</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="max-w-xl text-lg text-foreground-secondary"
        >
          {dict.HERO_TAGLINE}
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link
            href={`/${locale}/dashboard`}
            className="rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {dict.HERO_CTA}
          </Link>
        </motion.div>

        <motion.div
          variants={fadeUp}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 text-foreground-muted"
          aria-hidden
        >
          ↓
        </motion.div>
      </motion.section>

      {/* One section per MVP module — reveals as it scrolls into view */}
      {modules.map((mod) => (
        <motion.section
          key={mod.href}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
          className="flex h-dvh w-full snap-start snap-always flex-col items-center justify-center gap-4 border-t border-border px-6 text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-semibold text-foreground"
          >
            {mod.name}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-md text-foreground-secondary"
          >
            {mod.description}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              href={`/${locale}${mod.href}`}
              className="text-sm font-medium text-brand hover:underline"
            >
              {dict.EXPLORE_CTA} &rarr;
            </Link>
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
}
