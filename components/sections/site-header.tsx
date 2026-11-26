"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronRight,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { cn } from "cn";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/components/language-provider";
import { INDUSTRIAL_EASE } from "@/components/ui/motion-primitives";

export function SiteHeader() {
  const { locale, setLocale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-[#0547D4] focus:px-4 focus:py-2.5 focus:font-heading focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        {t.skipToContent}
      </a>

      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: INDUSTRIAL_EASE }}
        className="fixed top-4 inset-x-4 z-50"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 rounded-2xl border border-slate-200/90 bg-white/90 px-4 shadow-sm backdrop-blur-md sm:px-6">
          {/* Official Donlim Logo */}
          <a
            href="#hero"
            className="flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0547D4]"
            aria-label="PT Donlim Technology Indonesia"
          >
            <Image
              src="/image/donlim.svg"
              alt="PT Donlim Technology Indonesia"
              width={118}
              height={38}
              priority
              className="h-8 w-auto shrink-0 object-contain sm:h-9"
            />
            <span className="hidden border-l border-slate-200 pl-3 font-mono text-[11px] font-medium tracking-wider text-slate-600 uppercase xl:inline-block">
              {locale === "zh" ? "印尼制造基地" : "Indonesia"}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label={t.nav.mobileSubtitle}
            className="hidden items-center gap-1 lg:flex"
          >
            {t.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-[#0547D4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0547D4]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions: Animated Language Toggle (ID / 中文) + CTA + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              role="group"
              aria-label={t.nav.languageLabel}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5"
            >
              {(["id", "zh"] as const).map((code) => {
                const isActive = locale === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLocale(code)}
                    aria-pressed={isActive}
                    className={cn(
                      "relative cursor-pointer rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0547D4]",
                      code === "id" ? "font-mono" : "",
                      isActive
                        ? "text-white"
                        : "text-slate-600 hover:text-[#0F172A]"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="lang-switcher-pill"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                        className="absolute inset-0 rounded-md bg-[#0F172A]"
                      />
                    )}
                    <span className="relative z-10">
                      {code === "id" ? "ID" : "中文"}
                    </span>
                  </button>
                );
              })}
            </div>

            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "hidden sm:inline-flex"
              )}
            >
              {t.nav.cta}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>

            {/* Mobile Drawer */}
            <div className="lg:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label={t.nav.openMenuLabel}
                    />
                  }
                >
                  <Menu className="size-5" aria-hidden="true" />
                </SheetTrigger>
                <SheetContent
                  side="right"
                  showCloseButton={false}
                  className="flex w-[86vw] max-w-[340px] flex-col gap-0 bg-white p-0"
                >
                  {/* Clean Brand + Close Top Bar (zero overlap, locked aspect ratio) */}
                  <SheetHeader className="border-b border-slate-200 bg-[#F8FAFC] px-5 pt-5 pb-4">
                    <div className="flex items-center justify-between gap-3">
                      <a
                        href="#hero"
                        onClick={() => setMobileOpen(false)}
                        className="inline-flex shrink-0 items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0547D4]"
                      >
                        <Image
                          src="/image/donlim.svg"
                          alt="PT Donlim Technology Indonesia"
                          width={100}
                          height={32}
                          className="h-7 w-auto shrink-0 object-contain"
                        />
                      </a>
                      <SheetClose
                        render={
                          <Button
                            variant="outline"
                            size="icon-sm"
                            aria-label={locale === "zh" ? "关闭菜单" : "Tutup menu"}
                            className="shrink-0 rounded-lg border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-[#0F172A]"
                          />
                        }
                      >
                        <X className="size-4" aria-hidden="true" />
                      </SheetClose>
                    </div>
                    <div className="pt-3 text-left">
                      <SheetTitle className="font-heading text-sm font-semibold text-[#020617]">
                        {t.nav.mobileTitle}
                      </SheetTitle>
                      <SheetDescription className="mt-0.5 text-xs text-slate-500">
                        {t.nav.mobileSubtitle}
                      </SheetDescription>
                    </div>
                  </SheetHeader>

                  {/* Structured Numbered Navigation Links */}
                  <nav
                    aria-label={t.nav.mobileSubtitle}
                    className="flex-1 overflow-y-auto px-3 py-4"
                  >
                    <ul className="space-y-1">
                      {t.nav.items.map((item, idx) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="group flex min-h-[48px] cursor-pointer items-center justify-between rounded-xl px-3.5 py-2.5 text-slate-800 transition-colors duration-200 hover:bg-[#EFF6FF] hover:text-[#0547D4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0547D4]"
                          >
                            <span className="flex items-center gap-3">
                              <span className="font-mono text-[11px] font-medium text-slate-400 transition-colors group-hover:text-[#0547D4]">
                                0{idx + 1}
                              </span>
                              <span className="font-heading text-[15px] font-medium">
                                {item.label}
                              </span>
                            </span>
                            <ChevronRight
                              className="size-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#0547D4]"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  {/* Bottom Utility & Primary CTA Footer */}
                  <div className="mt-auto space-y-3 border-t border-slate-200 bg-[#F8FAFC] p-5">
                    <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5">
                      <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-700">
                        <MapPin
                          className="size-3.5 shrink-0 text-[#0547D4]"
                          aria-hidden="true"
                        />
                        <span>JIPS Blok G-2, Demak</span>
                      </span>
                      <div
                        role="group"
                        aria-label={t.nav.languageLabel}
                        className="inline-flex shrink-0 items-center rounded-md border border-slate-200 bg-slate-50 p-0.5"
                      >
                        {(["id", "zh"] as const).map((code) => {
                          const isActive = locale === code;
                          return (
                            <button
                              key={code}
                              type="button"
                              onClick={() => setLocale(code)}
                              aria-pressed={isActive}
                              className={cn(
                                "cursor-pointer rounded px-2 py-0.5 text-[11px] font-semibold transition-colors",
                                code === "id" ? "font-mono" : "",
                                isActive
                                  ? "bg-[#0F172A] text-white"
                                  : "text-slate-600 hover:text-[#0F172A]"
                              )}
                            >
                              {code === "id" ? "ID" : "中文"}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <a
                      href="#contact"
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        buttonVariants({ variant: "default", size: "lg" }),
                        "h-11 w-full rounded-xl"
                      )}
                    >
                      {t.nav.cta}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
