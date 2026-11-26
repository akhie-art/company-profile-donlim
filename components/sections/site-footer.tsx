"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#020617] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center rounded-xl bg-white px-4 py-2.5 shadow-sm">
              <Image
                src="/image/donlim.svg"
                alt="PT Donlim Technology Indonesia"
                width={126}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-300">
              {t.footer.tagline}
            </p>
            <p className="mt-3 max-w-md font-mono text-xs leading-relaxed text-slate-400">
              {t.footer.groupNote}
            </p>
          </div>

          {/* Company Links (2 cols) */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">
              {t.footer.companyColTitle}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {t.nav.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="cursor-pointer text-slate-300 transition-colors duration-200 hover:text-[#FB9704]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Links (2 cols) */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">
              {t.footer.capabilitiesColTitle}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {t.footer.capabilitiesLinks.map((cap) => (
                <li key={cap}>
                  <a
                    href="#capabilities"
                    className="cursor-pointer transition-colors duration-200 hover:text-[#FB9704]"
                  >
                    {cap}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Column (3 cols) */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-sm font-semibold tracking-wide text-white uppercase">
              {t.footer.locationColTitle}
            </h2>
            <div className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
              <MapPin
                className="mt-1 size-4 shrink-0 text-[#FB9704]"
                aria-hidden="true"
              />
              <address className="not-italic">
                {t.contact.plantAddress.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-start justify-between gap-3 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>
            © 2026 {t.footer.copyright}
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            {t.footer.complianceNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
