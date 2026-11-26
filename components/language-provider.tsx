"use client";

import * as React from "react";
import { companyContent, type Locale, type CompanyContent } from "@/lib/company-data";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: CompanyContent;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = React.useState<Locale>("id");

  React.useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "id";
  }, [locale]);

  const toggleLocale = React.useCallback(() => {
    setLocale((prev) => (prev === "id" ? "zh" : "id"));
  }, []);

  const value = React.useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: companyContent[locale],
    }),
    [locale, toggleLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
