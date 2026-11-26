"use client";

import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Layers,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/ui/motion-primitives";
import type { SolutionItem } from "@/lib/company-data";

const solutionIcons: Record<
  SolutionItem["icon"],
  React.ComponentType<{ className?: string }>
> = {
  layers: Layers,
  globe: Globe2,
  shieldCheck: ShieldCheck,
  trendingUp: TrendingUp,
};

interface SolutionsSectionProps {
  onSelectInquiryTopic: (topic: string) => void;
}

export function SolutionsSection({
  onSelectInquiryTopic,
}: SolutionsSectionProps) {
  const { t } = useLanguage();

  const handleSelectSolution = (topic: string) => {
    onSelectInquiryTopic(topic);
    const contactEl = document.getElementById("contact");
    contactEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="solutions"
      className="relative border-t border-slate-200 bg-white py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-swiss-grid opacity-55"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Badge variant="amber" className="mb-4">
              {t.solutions.eyebrow}
            </Badge>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#020617] sm:text-4xl leading-[1.18]">
              {t.solutions.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 lg:text-lg">
            {t.solutions.subtitle}
          </p>
        </Reveal>

        {/* 2x2 Structured Enterprise Solutions Grid */}
        <StaggerGroup stagger={0.09} className="mt-12 grid gap-6 lg:grid-cols-2">
          {t.solutions.items.map((solution) => {
            const Icon = solutionIcons[solution.icon];
            return (
              <StaggerItem key={solution.id} className="flex">
                <article className="group flex flex-1 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-200 hover:border-[#0547D4]/45 hover:shadow-md">
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0547D4] transition-colors duration-200 group-hover:bg-[#0547D4] group-hover:text-white">
                          <Icon className="size-5" aria-hidden="true" />
                        </div>
                        <span className="font-mono text-xs font-semibold tracking-wider text-slate-500">
                          {solution.code}
                        </span>
                      </div>
                      <Badge variant="outline">{solution.audience}</Badge>
                    </div>

                    <h3 className="mt-5 font-heading text-xl font-semibold text-[#020617] sm:text-2xl">
                      {solution.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {solution.description}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="font-mono text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                        {t.solutions.outcomesHeading}
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {solution.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2.5 text-sm font-medium text-slate-800"
                          >
                            <CheckCircle2
                              className="mt-0.5 size-4 shrink-0 text-[#0547D4]"
                              aria-hidden="true"
                            />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 bg-[#F8FAFC] px-6 py-4 sm:px-8">
                    <div>
                      <p className="font-mono text-[10px] font-medium tracking-wider text-slate-500 uppercase">
                        {solution.highlightLabel}
                      </p>
                      <p className="font-heading text-sm font-semibold text-[#0F172A]">
                        {solution.highlightValue}
                      </p>
                    </div>

                    <Button
                      type="button"
                      variant="ghost"
                      size="default"
                      onClick={() => handleSelectSolution(solution.inquiryTopic)}
                      className="text-[#0547D4] hover:bg-[#EFF6FF] hover:text-[#0438AA]"
                    >
                      <span>{solution.ctaLabel}</span>
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Button>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Bottom Enterprise Consultation Banner */}
        <Reveal delay={0.08} className="mt-10">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#0F172A] px-6 py-8 text-white shadow-sm sm:px-8 lg:flex-row lg:items-center lg:px-10">
            <div className="max-w-2xl">
              <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl">
                {t.solutions.bannerTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                {t.solutions.bannerSubtitle}
              </p>
            </div>
            <Button
              type="button"
              variant="accent"
              size="xl"
              onClick={() => handleSelectSolution("b2b-oem")}
              className="shrink-0"
            >
              <span>{t.solutions.bannerCta}</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
