"use client";

import * as React from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Coffee,
  Flame,
  Globe2,
  LayoutGrid,
  Utensils,
  Zap,
} from "lucide-react";
import { cn } from "cn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useLanguage } from "@/components/language-provider";
import type {
  ProductCatalogItem,
  ProductFilterCategory,
} from "@/lib/company-data";

const categoryIcons: Record<
  ProductFilterCategory["icon"],
  React.ComponentType<{ className?: string }>
> = {
  grid: LayoutGrid,
  coffee: Coffee,
  flame: Flame,
  zap: Zap,
  utensils: Utensils,
};

interface ProductsTabsSectionProps {
  onSelectInquiryTopic: (topic: string) => void;
}

export function ProductsTabsSection({
  onSelectInquiryTopic,
}: ProductsTabsSectionProps) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [selectedProductId, setSelectedProductId] = React.useState<string | null>(
    null
  );

  const filteredItems = React.useMemo(() => {
    if (activeCategory === "all") return t.products.items;
    return t.products.items.filter(
      (item) => item.categoryId === activeCategory
    );
  }, [activeCategory, t.products.items]);

  const selectedProduct: ProductCatalogItem | null = React.useMemo(() => {
    if (!selectedProductId) return null;
    return (
      t.products.items.find((item) => item.id === selectedProductId) ?? null
    );
  }, [selectedProductId, t.products.items]);

  const handleRequestSpec = () => {
    setSelectedProductId(null);
    onSelectInquiryTopic("b2b-oem");
    const contactEl = document.getElementById("contact");
    contactEl?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="products"
      className="border-b border-slate-200 bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Editorial Header (Wavin /id/c style) */}
        <div className="mx-auto max-w-2xl text-left md:text-center">
          <Badge variant="brand" className="mb-4">
            {t.products.eyebrow}
          </Badge>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#020617] sm:text-4xl lg:text-[2.65rem] leading-[1.14]">
            {t.products.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            {t.products.subtitle}
          </p>
        </div>

        {/* Horizontal Centered Square Icon Category Filter Tiles (Wavin /id/c signature) */}
        <div className="mt-10 md:mt-14">
          <div
            role="tablist"
            aria-label={t.products.title}
            className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible md:pb-0"
          >
            {t.products.categories.map((category) => {
              const Icon = categoryIcons[category.icon];
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex h-[116px] w-[156px] shrink-0 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border p-3 text-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0547D4] md:h-[138px] md:w-[178px]",
                    isActive
                      ? "border-[#0547D4] bg-[#EFF6FF] text-[#0547D4] ring-1 ring-[#0547D4]"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#0547D4] hover:text-[#020617]"
                  )}
                >
                  <Icon
                    className={cn(
                      "size-8 shrink-0 stroke-[1.6]",
                      isActive ? "text-[#0547D4]" : "text-[#0547D4]"
                    )}
                    aria-hidden="true"
                  />
                  <span className="font-heading text-sm font-medium leading-tight">
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hairline Divider + 4-Column Product Card Grid (Wavin /id/c exact card anatomy) */}
        <div className="mt-10 border-t border-slate-200 pt-8 md:mt-12 md:pt-12">
          <div className="mb-6 flex items-center justify-between">
            <p className="font-mono text-xs font-medium text-slate-500 uppercase tracking-wider">
              <span className="font-semibold text-[#0F172A] tabular-nums">
                {filteredItems.length}
              </span>{" "}
              {t.products.showingLabel}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {filteredItems.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProductId(product.id)}
                  className="flex flex-1 cursor-pointer flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0547D4]"
                >
                  {/* Card Content: horizontal compact on mobile (96x96 thumb), vertical square card on md+ */}
                  <div className="flex flex-1 gap-4 p-4 md:flex-col md:gap-5">
                    <div className="relative h-[96px] w-[96px] shrink-0 overflow-hidden rounded-[8px] border border-slate-950/10 bg-[#F1F5F9] md:aspect-square md:h-auto md:w-full md:rounded-[12px]">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(max-width: 768px) 96px, (max-width: 1024px) 45vw, 24vw"
                        className={cn(
                          "object-cover transition-opacity duration-200 group-hover:opacity-95",
                          product.imagePosition ?? "object-center"
                        )}
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-center md:justify-start md:px-1">
                      <span className="text-xs font-medium text-slate-500">
                        {product.subcategory}
                      </span>
                      <h3 className="mt-1.5 font-heading text-base font-semibold leading-snug text-[#020617] transition-colors duration-200 group-hover:text-[#0547D4] md:text-lg">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Signature Wavin Tinted Bottom Action Bar */}
                  <div className="flex w-full items-center justify-between rounded-b-[16px] bg-[#EFF6FF] px-5 py-3.5 text-sm font-semibold text-[#0547D4] transition-colors duration-200 group-hover:bg-[#DBEAFE]">
                    <span>{t.products.viewProductLabel}</span>
                    <ArrowRight
                      className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Product Specification Quick-View Sheet */}
      <Sheet
        open={Boolean(selectedProduct)}
        onOpenChange={(open) => {
          if (!open) setSelectedProductId(null);
        }}
      >
        <SheetContent
          side="right"
          className="w-full overflow-y-auto p-0 sm:max-w-lg"
        >
          {selectedProduct && (
            <div className="flex min-h-full flex-col">
              <SheetHeader className="border-b border-slate-200 px-6 py-5">
                <span className="font-mono text-xs font-semibold tracking-wider text-[#0547D4]">
                  {selectedProduct.code}
                </span>
                <SheetTitle className="mt-1 text-left font-heading text-xl font-semibold text-[#020617]">
                  {selectedProduct.name}
                </SheetTitle>
                <SheetDescription className="text-left text-sm text-slate-600">
                  {selectedProduct.subcategory} · PT Donlim Technology Indonesia
                </SheetDescription>
              </SheetHeader>

              <div className="flex-1 space-y-6 p-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 bg-[#F1F5F9]">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 480px"
                    className={cn(
                      "object-cover",
                      selectedProduct.imagePosition ?? "object-center"
                    )}
                  />
                </div>

                <p className="text-sm leading-relaxed text-slate-700">
                  {selectedProduct.summary}
                </p>

                {/* Production Scope */}
                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    {t.products.modelsHeading}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selectedProduct.models.map((model) => (
                      <li
                        key={model}
                        className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-800"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-[#0547D4]"
                          aria-hidden="true"
                        />
                        <span>{model}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Specs Grid */}
                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    {t.products.specsHeading}
                  </h4>
                  <dl className="mt-3 grid grid-cols-2 gap-3">
                    {selectedProduct.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="rounded-xl border border-slate-200 bg-white px-3.5 py-3"
                      >
                        <dt className="font-mono text-[10px] font-medium text-slate-500 uppercase">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 font-heading text-xs font-semibold text-[#0F172A]">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Export Markets */}
                <div>
                  <p className="flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wider text-slate-500 uppercase">
                    <Globe2
                      className="size-3.5 text-[#0547D4]"
                      aria-hidden="true"
                    />
                    {t.products.marketsHeading}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {selectedProduct.exportMarkets.map((market) => (
                      <Badge key={market} variant="secondary">
                        {market}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 p-6">
                <Button
                  type="button"
                  variant="default"
                  size="lg"
                  onClick={handleRequestSpec}
                  className="w-full"
                >
                  {t.products.ctaLabel}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}
