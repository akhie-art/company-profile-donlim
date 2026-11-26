"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { cn } from "cn";
import { useLanguage } from "@/components/language-provider";
import { INDUSTRIAL_EASE } from "@/components/ui/motion-primitives";

const AUTOPLAY_INTERVAL_MS = 6000;

export function HeroSection() {
  const { t, locale } = useLanguage();
  const slides = t.hero.slides;
  const totalSlides = slides.length;
  const prefersReducedMotion = useReducedMotion();

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

  const isAutoplayActive =
    !isPaused && !isHovering && !prefersReducedMotion && totalSlides > 1;

  React.useEffect(() => {
    if (!isAutoplayActive) return;
    const timer = window.setInterval(goNext, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [isAutoplayActive, goNext, activeIndex]);

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
      {/* Full-Bleed Animated Slides with Subtle Architectural Zoom Drift */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={currentSlide.id}
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeIndex + 1} / ${totalSlides}`}
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 0.75, ease: INDUSTRIAL_EASE },
            scale: { duration: 6.5, ease: "easeOut" },
          }}
          className="absolute inset-0 z-10"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#020617]/85 via-[#020617]/30 to-[#020617]/40"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#020617]/65 via-[#020617]/20 to-transparent"
          />
        </motion.div>
      </AnimatePresence>

      {/* Preload adjacent images invisibly so slide crossfade is instantaneous */}
      <div className="sr-only" aria-hidden="true">
        {slides.map(
          (slide, idx) =>
            idx !== activeIndex && (
              <Image
                key={slide.id}
                src={slide.image}
                alt=""
                width={16}
                height={9}
              />
            )
        )}
      </div>

      {/* Tagline-Only Overlay + Minimal Carousel Controls */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pt-28 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-16">
        <div aria-live="polite" className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${locale}-${currentSlide.id}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: INDUSTRIAL_EASE }}
            >
              <motion.div
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: INDUSTRIAL_EASE }}
                className="mb-5 h-1 w-14 origin-left rounded-full bg-[#FB9704]"
              />
              <h1 className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
                {currentSlide.tagline}{" "}
                <span className="text-[#FB9704]">
                  {currentSlide.taglineAccent}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Minimal Navigation Bar: Live Progress Indicators + Controls */}
        <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/15 pt-5">
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
                  className="group flex cursor-pointer items-center py-2 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB9704]"
                >
                  <span
                    className={cn(
                      "relative block h-1 overflow-hidden rounded-full transition-all duration-300",
                      isActive
                        ? "w-14 bg-white/30"
                        : "w-6 bg-white/40 group-hover:bg-white/75"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        key={`${activeIndex}-${isAutoplayActive}`}
                        initial={{ scaleX: isAutoplayActive ? 0 : 1 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: isAutoplayActive
                            ? AUTOPLAY_INTERVAL_MS / 1000
                            : 0.3,
                          ease: "linear",
                        }}
                        className="absolute inset-0 origin-left rounded-full bg-[#FB9704]"
                      />
                    )}
                  </span>
                </button>
              );
            })}
            <span className="ml-2 font-mono text-xs font-medium tracking-wider text-slate-200 tabular-nums">
              0{activeIndex + 1} / 0{totalSlides}
            </span>
          </div>

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
