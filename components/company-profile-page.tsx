"use client";

import * as React from "react";
import { LanguageProvider } from "@/components/language-provider";
import { SiteHeader } from "@/components/sections/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { MetricsStrip } from "@/components/sections/metrics-strip";
import { AboutSection } from "@/components/sections/about-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { CapabilitiesBento } from "@/components/sections/capabilities-bento";
import { ProductsTabsSection } from "@/components/sections/products-tabs-section";
import { QualityExportSection } from "@/components/sections/quality-export-section";
import { GatewayPathsSection } from "@/components/sections/gateway-paths-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/sections/site-footer";

export function CompanyProfilePage() {
  const [selectedTopic, setSelectedTopic] = React.useState("b2b-oem");

  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main-content" className="flex-1">
          <HeroSection />
          <MetricsStrip />
          <AboutSection />
          <SolutionsSection onSelectInquiryTopic={setSelectedTopic} />
          <CapabilitiesBento />
          <ProductsTabsSection onSelectInquiryTopic={setSelectedTopic} />
          <QualityExportSection />
          <GatewayPathsSection onSelectInquiryTopic={setSelectedTopic} />
          <ContactSection
            selectedTopic={selectedTopic}
            onTopicChange={setSelectedTopic}
          />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
