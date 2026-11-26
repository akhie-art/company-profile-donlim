"use client";

import { Factory, Globe2, MapPin, Users } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import type { MetricItem } from "@/lib/company-data";

const metricIconMap: Record<MetricItem["icon"], React.ComponentType<{ className?: string }>> = {
  users: Users,
  factory: Factory,
  globe: Globe2,
  mapPin: MapPin,
};

export function MetricsStrip() {
  const { t } = useLanguage();

  return (
    <section
      id="metrics"
      aria-label="Fakta dan Skala Operasional PT Donlim Technology Indonesia"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {t.metrics.map((metric, idx) => {
            const Icon = metricIconMap[metric.icon];
            return (
              <div
                key={metric.label}
                className={`flex flex-col gap-3 py-8 sm:px-6 lg:py-10 ${
                  idx % 2 === 1 ? "sm:border-l sm:border-slate-200" : ""
                } ${idx >= 2 ? "sm:border-t sm:border-slate-200 lg:border-t-0" : ""} ${
                  idx === 0 ? "lg:pl-0" : ""
                } ${idx === t.metrics.length - 1 ? "lg:pr-0" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#0547D4]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-medium text-slate-500">
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold tracking-tight text-[#020617] tabular-nums lg:text-4xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 font-heading text-sm font-semibold text-[#0F172A]">
                    {metric.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {metric.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
