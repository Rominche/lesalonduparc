"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5500;

export function ServicesCarousel({ services }: { services: Service[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  const paused = hoverPaused || !inView;

  const goTo = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const count = services.length;
    const next = ((index % count) + count) % count;
    const slide = scroller.querySelectorAll<HTMLElement>("[data-slide]")[next];
    if (!slide) return;

    scroller.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });
  }, [services.length]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const viewObserver = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    viewObserver.observe(scroller);

    const slides = [...scroller.querySelectorAll<HTMLElement>("[data-slide]")];
    const syncActive = () => {
      let closest = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.offsetLeft - scroller.scrollLeft);
        if (distance < closestDistance) {
          closest = index;
          closestDistance = distance;
        }
      });
      if (closest !== activeRef.current) {
        activeRef.current = closest;
        setActive(closest);
      }
    };

    syncActive();
    scroller.addEventListener("scroll", syncActive, { passive: true });
    return () => {
      viewObserver.disconnect();
      scroller.removeEventListener("scroll", syncActive);
    };
  }, [services.length]);

  useEffect(() => {
    if (paused || reduceMotion || services.length < 2) return;
    const id = window.setInterval(() => {
      goTo(activeRef.current + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [active, goTo, paused, reduceMotion, services.length]);

  return (
    <div
      className="mt-10"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          <span className="font-medium text-foreground">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span className="mx-1.5 text-foreground/30">/</span>
          <span>{String(services.length).padStart(2, "0")}</span>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="rounded-full"
            aria-label="Prestation précédente"
            onClick={() => goTo(active - 1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-lg"
            className="rounded-full"
            aria-label="Prestation suivante"
            onClick={() => goTo(active + 1)}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        id="prestations-carousel"
        role="region"
        aria-roledescription="carrousel"
        aria-label="Prestations"
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service, index) => (
          <div
            key={service.slug}
            data-slide
            className={cn(
              "h-[22rem] w-[82vw] max-w-[22rem] shrink-0 snap-start sm:h-[26rem] sm:w-96 sm:max-w-none lg:h-[28rem] lg:w-[30rem]",
              index === active ? "opacity-100" : "opacity-80"
            )}
          >
            <ServiceCard service={service} className="h-full min-h-full w-full" />
          </div>
        ))}
      </div>

      <div className="mt-5 h-0.5 overflow-hidden rounded-full bg-secondary">
        <div
          key={active}
          className={cn(
            "h-full origin-left rounded-full bg-primary",
            reduceMotion ? "w-full" : "animate-services-progress"
          )}
          style={
            reduceMotion
              ? { width: `${((active + 1) / services.length) * 100}%` }
              : {
                  animationDuration: `${AUTOPLAY_MS}ms`,
                  animationPlayState: paused ? "paused" : "running",
                }
          }
        />
      </div>

      <div className="mt-5 flex gap-2.5 overflow-x-auto py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {services.map((service, index) => (
          <button
            key={service.slug}
            type="button"
            aria-label={`Aller à ${service.cardTitle}`}
            aria-current={index === active}
            aria-controls="prestations-carousel"
            onClick={() => goTo(index)}
            className={cn(
              "relative size-14 shrink-0 overflow-hidden rounded-xl ring-2 transition sm:size-16",
              index === active
                ? "ring-primary"
                : "ring-transparent opacity-65 hover:opacity-100"
            )}
          >
            <Image
              src={service.image}
              alt=""
              fill
              sizes="64px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
