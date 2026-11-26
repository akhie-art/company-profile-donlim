"use client";

import Image from "next/image";
import {
  Check,
  Cog,
  Cpu,
  PackageCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/ui/motion-primitives";
import type { CapabilityItem } from "@/lib/company-data";

const capabilityIcons: Record<
  CapabilityItem["icon"],
  React.ComponentType<{ className?: string }>
> = {
  cpu: Cpu,
  cog: Cog,
  shieldCheck: ShieldCheck,
  packageCheck: PackageCheck,
  wrench: Wrench,
};

export function CapabilitiesBento() {
  const { t } = useLanguage();
  const [featuredItem, ...secondaryItems] = t.capabilities.items;

  return (
    <section
      id="capabilities"
      className="border-y border-slate-200 bg-[#F8FAFC] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-3xl">
          <Badge variant="brand" className="mb-4">
            {t.capabilities.eyebrow}
          </Badge>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#020617] sm:text-4xl leading-[1.18]">
            {t.capabilities.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {t.capabilities.subtitle}
          </p>
        </Reveal>

        {/* Asymmetric 12-Col Bento Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Featured Large Capability Card */}
          {featuredItem && (
            <Reveal className="flex lg:col-span-6 lg:row-span-2">
              <article className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300 hover:shadow-md">
                {featuredItem.image && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-200 bg-slate-100">
                    <Image
                      src={featuredItem.image}
                      alt={featuredItem.imageAlt ?? featuredItem.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="default" className="shadow-sm">
                        {featuredItem.code}
                      </Badge>
                    </div>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0547D4]">
                      <Cpu className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-[#020617] sm:text-2xl">
                      {featuredItem.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-slate-700">
                    {featuredItem.description}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-slate-200 pt-5">
                    {featuredItem.highlights.map((hl) => (
                      <li
                        key={hl}
                        className="flex items-start gap-2.5 text-sm font-medium text-slate-800"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#0547D4]">
                          <Check className="size-3" aria-hidden="true" />
                        </span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          )}

          {/* 4 Modular Capability Cards */}
          <StaggerGroup
            stagger={0.08}
            className="grid gap-6 sm:grid-cols-2 lg:col-span-6"
          >
            {secondaryItems.map((item) => {
              const Icon = capabilityIcons[item.icon];
              return (
                <StaggerItem key={item.id} className="flex">
                  <article className="flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-slate-300 hover:shadow-md">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0547D4]">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-medium text-slate-500">
                        {item.code}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-lg font-semibold text-[#020617]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>

                    <ul className="mt-auto space-y-2 border-t border-slate-100 pt-4 text-xs font-medium text-slate-700">
                      {item.highlights.map((hl) => (
                        <li key={hl} className="flex items-start gap-2">
                          <Check
                            className="mt-0.5 size-3.5 shrink-0 text-[#0547D4]"
                            aria-hidden="true"
                          />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
