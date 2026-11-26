"use client";

import {
  Award,
  CheckCircle2,
  Globe2,
  HardHat,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/components/language-provider";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/ui/motion-primitives";

export function QualityExportSection() {
  const { t } = useLanguage();

  return (
    <section
      id="quality"
      className="relative overflow-hidden bg-[#0F172A] py-20 text-white lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-industrial-grid opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[340px] w-[620px] -translate-x-1/2 rounded-full bg-[#0547D4]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-3xl">
          <Badge variant="dark-amber" className="mb-4">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            {t.quality.eyebrow}
          </Badge>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl leading-[1.18]">
            {t.quality.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            {t.quality.subtitle}
          </p>
        </Reveal>

        {/* 4-Stage QA/QC Stepper Pipeline */}
        <div className="mt-12">
          <p className="font-mono text-xs font-semibold tracking-[0.14em] text-[#FB9704] uppercase">
            {t.quality.pipelineTitle}
          </p>
          <StaggerGroup
            stagger={0.09}
            className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {t.quality.stages.map((stage) => (
              <StaggerItem key={stage.code} className="flex">
                <div className="flex flex-1 flex-col rounded-2xl border border-white/12 bg-white/[0.04] p-6 transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.06]">
                  <span className="inline-flex w-fit rounded-md border border-[#FB9704]/30 bg-[#FB9704]/10 px-2.5 py-1 font-mono text-xs font-semibold text-[#FB9704]">
                    {stage.code}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-white">
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {stage.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* Standards + Export Reach Split */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <Reveal className="rounded-2xl border border-white/12 bg-[#0B1222]/90 p-6 sm:p-8 lg:col-span-7">
            <div className="flex items-center gap-2.5">
              <Award className="size-5 text-[#FB9704]" aria-hidden="true" />
              <h3 className="font-heading text-xl font-semibold text-white">
                {t.quality.standardsTitle}
              </h3>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {t.quality.standards.map((std, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      className="size-4 shrink-0 text-[#FB9704]"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs font-semibold tracking-wider text-slate-200">
                      {std.code}
                    </span>
                  </div>
                  <p className="mt-2 font-heading text-sm font-semibold text-white">
                    {std.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    {std.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3.5 rounded-xl border border-[#FB9704]/25 bg-[#FB9704]/8 p-4">
              <HardHat
                className="mt-0.5 size-5 shrink-0 text-[#FB9704]"
                aria-hidden="true"
              />
              <div>
                <p className="font-heading text-sm font-semibold text-white">
                  {t.quality.hseTitle}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-200">
                  {t.quality.hseText}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-2xl border border-white/12 bg-[#0B1222]/90 p-6 sm:p-7">
              <div className="flex items-center gap-2.5">
                <Globe2 className="size-5 text-[#FB9704]" aria-hidden="true" />
                <h3 className="font-heading text-xl font-semibold text-white">
                  {t.quality.exportTitle}
                </h3>
              </div>
              <div className="mt-5 space-y-3.5">
                {t.quality.exportRegions.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-heading text-sm font-semibold text-white">
                        {item.region}
                      </span>
                      <Badge variant="dark-amber" className="h-5 text-[11px]">
                        {item.share}
                      </Badge>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/12 bg-[#0B1222]/90 p-6 sm:p-7">
              <h3 className="font-heading text-base font-semibold text-white">
                {t.quality.faqTitle}
              </h3>
              <Accordion className="mt-3">
                {t.quality.faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-white/12"
                  >
                    <AccordionTrigger className="cursor-pointer py-3 text-left font-heading text-sm font-medium text-slate-100 hover:text-[#FB9704] hover:no-underline **:data-[slot=accordion-trigger-icon]:text-slate-300">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs leading-relaxed text-slate-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
