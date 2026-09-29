"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5500;
const COPIES = 3;

function scrollLeftFor(scroller: HTMLElement, slide: HTMLElement) {
  const scrollerRect = scroller.getBoundingClientRect();
  const slideRect = slide.getBoundingClientRect();
  return (
    scroller.scrollLeft +
    slideRect.left +
    slideRect.width / 2 -
    (scrollerRect.left + scrollerRect.width / 2)
  );
}

function distanceTo(scroller: HTMLElement, slide: HTMLElement) {
  const scrollerRect = scroller.getBoundingClientRect();
  const slideRect = slide.getBoundingClientRect();
  return Math.abs(
    slideRect.left +
      slideRect.width / 2 -
      (scrollerRect.left + scrollerRect.width / 2)
  );
}

export function ServicesCarousel({ services }: { services: Service[] }) {
  const count = services.length;
  const slides = Array.from({ length: COPIES }, (_, copy) =>
    services.map((service) => ({ service, copy }))
  ).flat();

  const scrollerRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const rawIndexRef = useRef(count);
  const thumbRawRef = useRef(count);
  const thumbUserScrollRef = useRef(false);
  const thumbProgrammaticRef = useRef(false);
  const jumpingRef = useRef(false);
  const thumbJumpingRef = useRef(false);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  const paused = hoverPaused || !inView;
  activeRef.current = active;

  const scrollToRaw = useCallback((raw: number, behavior: ScrollBehavior) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const nodes = scroller.querySelectorAll<HTMLElement>("[data-slide]");
    const slide = nodes[raw];
    if (!slide) return;
    rawIndexRef.current = raw;
    scroller.scrollTo({ left: scrollLeftFor(scroller, slide), behavior });
  }, []);

  const goToRaw = useCallback(
    (raw: number) => {
      scrollToRaw(raw, reduceMotion ? "auto" : "smooth");
    },
    [reduceMotion, scrollToRaw]
  );

  const goTo = useCallback(
    (index: number) => {
      const logical = ((index % count) + count) % count;
      goToRaw(logical + count);
    },
    [count, goToRaw]
  );

  const centerThumb = useCallback((raw: number, behavior: ScrollBehavior) => {
    const scroller = thumbsRef.current;
    if (!scroller) return;
    const thumb = scroller.querySelectorAll<HTMLElement>("[data-thumb]")[raw];
    if (!thumb) return;
    const scrollerRect = scroller.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    const delta =
      thumbRect.left +
      thumbRect.width / 2 -
      (scrollerRect.left + scrollerRect.width / 2);
    thumbRawRef.current = raw;
    thumbProgrammaticRef.current = true;
    scroller.scrollTo({ left: scroller.scrollLeft + delta, behavior });
  }, []);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || count < 1) return;
    const nodes = scroller.querySelectorAll<HTMLElement>("[data-slide]");
    const start = nodes[count];
    if (!start) return;
    scroller.scrollLeft = scrollLeftFor(scroller, start);
    rawIndexRef.current = count;
    centerThumb(count, "auto");
  }, [centerThumb, count]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || count < 1) return;

    const viewObserver = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    viewObserver.observe(scroller);

    const nodes = [...scroller.querySelectorAll<HTMLElement>("[data-slide]")];
    const syncActive = () => {
      if (jumpingRef.current) return;

      let closest = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      nodes.forEach((slide, index) => {
        const distance = distanceTo(scroller, slide);
        if (distance < closestDistance) {
          closest = index;
          closestDistance = distance;
        }
      });

      rawIndexRef.current = closest;
      const logical = ((closest % count) + count) % count;
      setActive(logical);

      const inOuterCopy = closest < count || closest >= count * 2;
      if (!inOuterCopy || closestDistance > 24) return;

      const middle = logical + count;
      const target = nodes[middle];
      if (!target || middle === closest) return;

      jumpingRef.current = true;
      const snap = scroller.style.scrollSnapType;
      scroller.style.scrollSnapType = "none";
      scroller.scrollLeft = scrollLeftFor(scroller, target);
      scroller.style.scrollSnapType = snap;
      rawIndexRef.current = middle;
      jumpingRef.current = false;
    };

    syncActive();
    scroller.addEventListener("scroll", syncActive, { passive: true });
    return () => {
      viewObserver.disconnect();
      scroller.removeEventListener("scroll", syncActive);
    };
  }, [count]);

  useEffect(() => {
    const scroller = thumbsRef.current;
    if (!scroller || count < 1) return;

    const settle = () => {
      if (thumbJumpingRef.current) return;
      const nodes = [...scroller.querySelectorAll<HTMLElement>("[data-thumb]")];
      const center =
        scroller.getBoundingClientRect().left + scroller.clientWidth / 2;
      let closest = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      nodes.forEach((thumb, index) => {
        const rect = thumb.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - center);
        if (distance < closestDistance) {
          closest = index;
          closestDistance = distance;
        }
      });

      const inOuterCopy = closest < count || closest >= count * 2;
      if (inOuterCopy && closestDistance <= 8) {
        const middle = (closest % count) + count;
        const target = nodes[middle];
        if (target && middle !== closest) {
          thumbJumpingRef.current = true;
          const snap = scroller.style.scrollSnapType;
          scroller.style.scrollSnapType = "none";
          const scrollerRect = scroller.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          scroller.scrollLeft +=
            targetRect.left +
            targetRect.width / 2 -
            (scrollerRect.left + scroller.clientWidth / 2);
          scroller.style.scrollSnapType = snap;
          thumbRawRef.current = middle;
          thumbJumpingRef.current = false;
          closest = middle;
        }
      }

      if (thumbProgrammaticRef.current) {
        if (closestDistance > 8) return;
        thumbProgrammaticRef.current = false;
        thumbUserScrollRef.current = false;
        thumbRawRef.current = closest;
        return;
      }

      if (!thumbUserScrollRef.current || closestDistance > 8) return;
      thumbUserScrollRef.current = false;
      thumbRawRef.current = closest;
      const logical = closest % count;
      if (logical !== activeRef.current) goTo(logical);
    };

    scroller.addEventListener("scroll", settle, { passive: true });
    return () => scroller.removeEventListener("scroll", settle);
  }, [count, goTo]);

  useEffect(() => {
    if (count < 1) return;
    let delta = active - ((thumbRawRef.current % count) + count) % count;
    if (delta > count / 2) delta -= count;
    if (delta < -count / 2) delta += count;
    if (delta === 0) return;
    let nextRaw = thumbRawRef.current + delta;
    const max = count * COPIES;
    if (nextRaw < 0) nextRaw += count;
    if (nextRaw >= max) nextRaw -= count;
    centerThumb(nextRaw, reduceMotion ? "auto" : "smooth");
  }, [active, centerThumb, count, reduceMotion]);

  useEffect(() => {
    if (paused || reduceMotion || count < 2) return;
    const id = window.setInterval(() => {
      goToRaw(rawIndexRef.current + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [active, count, goToRaw, paused, reduceMotion]);

  return (
    <div
      className="mt-10"
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
    >
      <p className="mb-5 text-sm text-background/70" aria-live="polite">
        <span className="font-medium text-background">
          {String(active + 1).padStart(2, "0")}
        </span>
        <span className="mx-1.5 text-background/30">/</span>
        <span>{String(count).padStart(2, "0")}</span>
      </p>

      <div className="relative">
        <div
          ref={scrollerRef}
          id="prestations-carousel"
          role="region"
          aria-roledescription="carrousel"
          aria-label="Prestations"
          className="mx-11 flex snap-x snap-mandatory items-center gap-8 overflow-x-auto py-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-12 sm:gap-10 [&::-webkit-scrollbar]:hidden"
        >
          {slides.map(({ service, copy }, index) => {
            const logical = index % count;
            const selected = logical === active;
            return (
              <div
                key={`${copy}-${service.slug}`}
                data-slide
                className={cn(
                  "relative h-[22rem] w-[78%] max-w-[22rem] shrink-0 snap-center transition-transform duration-500 sm:h-[26rem] sm:w-96 sm:max-w-none lg:h-[28rem] lg:w-[30rem]",
                  selected ? "z-10 scale-[1.07]" : "scale-100"
                )}
              >
                <ServiceCard service={service} className="h-full min-h-full w-full" />
                <div
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-0 rounded-2xl bg-white transition-opacity duration-500",
                    selected ? "opacity-0" : "opacity-20"
                  )}
                />
              </div>
            );
          })}
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-background text-foreground shadow-sm"
          aria-label="Prestation précédente"
          aria-controls="prestations-carousel"
          onClick={() => goToRaw(rawIndexRef.current - 1)}
        >
          <ChevronLeft />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon-lg"
          className="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full bg-background text-foreground shadow-sm"
          aria-label="Prestation suivante"
          aria-controls="prestations-carousel"
          onClick={() => goToRaw(rawIndexRef.current + 1)}
        >
          <ChevronRight />
        </Button>
      </div>

      <div className="mx-11 mt-5 h-0.5 overflow-hidden rounded-full bg-background/20 sm:mx-12">
        <div
          key={active}
          className={cn(
            "h-full origin-left rounded-full bg-primary",
            reduceMotion ? "w-full" : "animate-services-progress"
          )}
          style={
            reduceMotion
              ? { width: `${((active + 1) / count) * 100}%` }
              : {
                  animationDuration: `${AUTOPLAY_MS}ms`,
                  animationPlayState: paused ? "paused" : "running",
                }
          }
        />
      </div>

      <div className="relative mt-5">
        <div
          ref={thumbsRef}
          onPointerDown={() => {
            thumbUserScrollRef.current = true;
          }}
          onWheel={() => {
            thumbUserScrollRef.current = true;
          }}
          className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map(({ service, copy }, index) => {
            const logical = index % count;
            return (
              <button
                key={`${copy}-${service.slug}`}
                type="button"
                data-thumb
                aria-label={`Aller à ${service.cardTitle}`}
                aria-current={index === active + count ? true : undefined}
                aria-controls="prestations-carousel"
                onClick={() => goTo(logical)}
                className={cn(
                  "relative size-14 shrink-0 snap-center overflow-hidden rounded-xl sm:size-16",
                  logical === active ? "opacity-100" : "opacity-60 hover:opacity-100"
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
            );
          })}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 z-10 size-14 -translate-x-1/2 -translate-y-1/2 rounded-xl ring-2 ring-primary sm:size-16"
        />
      </div>
    </div>
  );
}
