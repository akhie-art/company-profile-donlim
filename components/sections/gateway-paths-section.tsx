"use client";

import { ArrowRight, Briefcase, Check, Handshake, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import type { GatewayPath } from "@/lib/company-data";

const pathIcons: Record<
  GatewayPath["icon"],
  React.ComponentType<{ className?: string }>
> = {
  handshake: Handshake,
  truck: Truck,
  briefcase: Briefcase,
};

interface GatewayPathsSectionProps {
  onSelectInquiryTopic: (topic: string) => void;
}

export function GatewayPathsSection({
  onSelectInquiryTopic,
}: GatewayPathsSectionProps) {
  const { t } = useLanguage();

  const handleChoosePath = (topic: string) => {
    onSelectInquiryTopic(topic);
    const contactEl = document.getElementById("contact");
    contactEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="gateway"
      className="border-b border-slate-200 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="brand" className="mb-4">
            {t.gateway.eyebrow}
          </Badge>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#020617] sm:text-4xl leading-[1.18]">
            {t.gateway.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {t.gateway.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.gateway.paths.map((path, idx) => {
            const Icon = pathIcons[path.icon];
            const isPrimaryPath = idx === 0;
            return (
              <article
                key={path.id}
                className={`flex flex-col rounded-2xl border p-7 transition-colors duration-200 ${
                  isPrimaryPath
                    ? "border-[#0547D4]/30 bg-[#F8FAFC] shadow-sm hover:border-[#0547D4]/60"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl ${
                      isPrimaryPath
                        ? "bg-[#0547D4] text-white"
                        : "bg-[#EFF6FF] text-[#0547D4]"
                    }`}
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <Badge variant={isPrimaryPath ? "brand" : "outline"}>
                    {path.badge}
                  </Badge>
                </div>

                <h3 className="mt-6 font-heading text-xl font-semibold text-[#020617]">
                  {path.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {path.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-slate-200 pt-5">
                  {path.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-[#0547D4]"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  <Button
                    type="button"
                    variant={isPrimaryPath ? "default" : "outline"}
                    size="lg"
                    className="w-full justify-between"
                    onClick={() => handleChoosePath(path.inquiryTopic)}
                  >
                    <span>{path.ctaLabel}</span>
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
