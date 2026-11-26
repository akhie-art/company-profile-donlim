"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "cn";
import { useLanguage } from "@/components/language-provider";

const AUTOPLAY_INTERVAL_MS = 6000;

export function HeroSection() {
  const { t } = useLanguage();
  const slides = t.hero.slides;
  const totalSlides = slides.length;

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const touchStartX = React.useRef<number | null>(null);

  const goNext = React.useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goPrev = React.useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Respect prefers-reduced-motion & pause on hover/manual pause
  React.useEffect(() => {
    if (isPaused || isHovering || totalSlides <= 1) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const timer = window.setInterval(goNext, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, isHovering, totalSlides, goNext]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 48) {
      if (delta < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
  };

  const currentSlide = slides[activeIndex] ?? slides[0];

  return (
    <section
      id="hero"
      aria-roledescription="carousel"
      aria-label={t.hero.carouselLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative h-[88svh] min-h-[580px] max-h-[920px] w-full overflow-hidden bg-[#0F172A] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#FB9704]"
    >
      {/* Full-Bleed Crossfade Slides */}
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${totalSlides}`}
            aria-hidden={!isActive}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              isActive ? "z-10 opacity-100" : "z-0 opacity-0 pointer-events-none"
            )}
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Editorial Dark Gradient Scrim: guarantees high-contrast tagline & clear floating navbar */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#020617]/85 via-[#020617]/30 to-[#020617]/40"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#020617]/65 via-[#020617]/20 to-transparent"
            />
          </div>
        );
      })}

      {/* Tagline-Only Overlay + Minimal Carousel Controls */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pt-28 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        {/* Tagline Only */}
        <div aria-live="polite" className="max-w-4xl">
          <div
            aria-hidden="true"
            className="mb-5 h-1 w-14 rounded-full bg-[#FB9704]"
          />
          <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            {currentSlide.tagline}{" "}
            <span className="text-[#FB9704]">{currentSlide.taglineAccent}</span>
          </h1>
        </div>

        {/* Bottom Minimal Navigation Bar: Progress Indicators + Prev/Next/Pause */}
        <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/15 pt-5">
          {/* Slide Progress Indicators */}
          <div
            role="tablist"
            aria-label={t.hero.carouselLabel}
            className="flex items-center gap-2.5"
          >
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${t.hero.goToSlidePrefix} ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "group flex cursor-pointer items-center py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB9704] focus-visible:rounded-sm"
                  )}
                >
                  <span
                    className={cn(
                      "block h-1 rounded-full transition-all duration-300",
                      isActive
                        ? "w-12 bg-[#FB9704]"
                        : "w-6 bg-white/40 group-hover:bg-white/75"
                    )}
                  />
                </button>
              );
            })}
            <span className="ml-2 font-mono text-xs font-medium tracking-wider text-slate-200 tabular-nums">
              0{activeIndex + 1} / 0{totalSlides}
            </span>
          </div>

          {/* Prev / Play-Pause / Next Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? t.hero.playLabel : t.hero.pauseLabel}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-[#020617]/40 text-white backdrop-blur-md transition-colors duration-200 hover:border-white/50 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB9704]"
            >
              {isPaused ? (
                <Play className="size-4" aria-hidden="true" />
              ) : (
                <Pause className="size-4" aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={goPrev}
              aria-label={t.hero.prevLabel}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-[#020617]/40 text-white backdrop-blur-md transition-colors duration-200 hover:border-white/50 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB9704]"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label={t.hero.nextLabel}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-[#020617]/40 text-white backdrop-blur-md transition-colors duration-200 hover:border-white/50 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB9704]"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
