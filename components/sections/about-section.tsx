"use client";

import Image from "next/image";
import { Building2, Compass, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Editorial Column (6 cols) */}
          <div className="lg:col-span-6">
            <Badge variant="brand" className="mb-4">
              {t.about.eyebrow}
            </Badge>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#020617] sm:text-4xl leading-[1.18]">
              {t.about.title}
            </h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-[#0F172A]">
              {t.about.lead}
            </p>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            {/* Parent Company Credential Card */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#0F172A] text-[#FB9704]">
                  <Building2 className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-[11px] font-semibold tracking-[0.12em] text-[#B45309] uppercase">
                    {t.about.parentLabel}
                  </p>
                  <p className="mt-1 font-heading text-base font-semibold text-[#020617]">
                    {t.about.parentName}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {t.about.parentMeta}
                  </p>
                </div>
              </div>
            </div>

            {/* Vision & Mission Twin Cards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2.5 text-[#0547D4]">
                  <Compass className="size-5 shrink-0" aria-hidden="true" />
                  <h3 className="font-heading text-base font-semibold text-[#020617]">
                    {t.about.visionTitle}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                  {t.about.visionText}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2.5 text-[#B45309]">
                  <Target className="size-5 shrink-0" aria-hidden="true" />
                  <h3 className="font-heading text-base font-semibold text-[#020617]">
                    {t.about.missionTitle}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
                  {t.about.missionText}
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual & Milestones Column (6 cols) */}
          <div className="space-y-6 lg:col-span-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full bg-slate-100">
                <Image
                  src="/image/qa-lab.jpg"
                  alt={t.about.labImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 bg-white px-5 py-3.5">
                <span className="text-sm font-medium text-slate-700">
                  {t.about.labCaption}
                </span>
                <span className="font-mono text-xs font-semibold text-[#0547D4]">
                  QA/QC
                </span>
              </div>
            </div>

            {/* Structured Heritage Timeline */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <ol className="divide-y divide-slate-200">
                {t.about.milestones.map((item) => (
                  <li
                    key={item.year}
                    className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-12 sm:items-baseline"
                  >
                    <span className="font-mono text-sm font-semibold text-[#0547D4] sm:col-span-3 tabular-nums">
                      {item.year}
                    </span>
                    <div className="sm:col-span-9">
                      <h3 className="font-heading text-base font-semibold text-[#020617]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
