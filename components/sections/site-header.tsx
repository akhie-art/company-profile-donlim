"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight, Globe, Menu } from "lucide-react";
import { cn } from "cn";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/components/language-provider";

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

      <header className="fixed top-4 inset-x-4 z-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 rounded-2xl border border-slate-200/90 bg-white/90 px-4 shadow-sm backdrop-blur-md sm:px-6">
          {/* Official Donlim Logo */}
          <a
            href="#hero"
            className="flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0547D4]"
            aria-label="PT Donlim Technology Indonesia — Beranda"
          >
            <Image
              src="/image/donlim.svg"
              alt="PT Donlim Technology Indonesia"
              width={118}
              height={38}
              priority
              className="h-8 w-auto sm:h-9"
            />
            <span className="hidden border-l border-slate-200 pl-3 font-mono text-[11px] font-medium tracking-wider text-slate-600 uppercase xl:inline-block">
              Indonesia
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navigasi Utama"
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

          {/* Right Actions: Language Toggle + CTA + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              role="group"
              aria-label="Pilih bahasa"
              className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5"
            >
              <button
                type="button"
                onClick={() => setLocale("id")}
                aria-pressed={locale === "id"}
                className={cn(
                  "cursor-pointer rounded-md px-2.5 py-1 font-mono text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0547D4]",
                  locale === "id"
                    ? "bg-[#0F172A] text-white"
                    : "text-slate-600 hover:text-[#0F172A]"
                )}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
                className={cn(
                  "cursor-pointer rounded-md px-2.5 py-1 font-mono text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0547D4]",
                  locale === "en"
                    ? "bg-[#0F172A] text-white"
                    : "text-slate-600 hover:text-[#0F172A]"
                )}
              >
                EN
              </button>
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
                      aria-label="Buka menu navigasi"
                    />
                  }
                >
                  <Menu className="size-5" aria-hidden="true" />
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[340px]">
                  <SheetHeader className="border-b border-slate-200 pb-4">
                    <Image
                      src="/image/donlim.svg"
                      alt="PT Donlim Technology Indonesia"
                      width={110}
                      height={35}
                      className="h-8 w-auto"
                    />
                    <SheetTitle className="mt-2 text-left text-sm font-semibold text-[#0F172A]">
                      {t.nav.mobileTitle}
                    </SheetTitle>
                    <SheetDescription className="text-left text-xs text-slate-600">
                      {t.nav.mobileSubtitle}
                    </SheetDescription>
                  </SheetHeader>

                  <nav
                    aria-label="Navigasi Mobile"
                    className="flex flex-col gap-1 px-4 py-2"
                  >
                    {t.nav.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="cursor-pointer rounded-lg px-3 py-2.5 font-heading text-base font-medium text-slate-800 transition-colors duration-200 hover:bg-slate-100 hover:text-[#0547D4]"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-auto border-t border-slate-200 p-4 space-y-3">
                    <div className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-600">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Globe className="size-3.5 text-[#0547D4]" aria-hidden="true" />
                        JIPS Blok G-2, Demak
                      </span>
                      <span className="font-mono font-semibold text-[#0F172A]">
                        {locale.toUpperCase()}
                      </span>
                    </div>
                    <a
                      href="#contact"
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        buttonVariants({ variant: "default", size: "lg" }),
                        "w-full"
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
      </header>
    </>
  );
}
