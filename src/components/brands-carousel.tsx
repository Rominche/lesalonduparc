"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Brand } from "@/content/site";

const AUTOPLAY_MS = 2200;
const RESUME_AFTER_ARROWS_MS = 8000;
const COPIES = 3;

export function BrandsCarousel({ brands }: { brands: Brand[] }) {
  const count = brands.length;
  const slides = Array.from({ length: COPIES }, (_, copy) =>
    brands.map((brand) => ({ brand, copy }))
  ).flat();

  const scrollerRef = useRef<HTMLDivElement>(null);
  const rawIndexRef = useRef(count);
  const jumpingRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const [articlePaused, setArticlePaused] = useState(false);
  const [arrowPaused, setArrowPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  const paused = articlePaused || arrowPaused || !inView;

  const scrollToRaw = useCallback((raw: number, behavior: ScrollBehavior) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const nodes = scroller.querySelectorAll<HTMLElement>("[data-slide]");
    const slide = nodes[raw];
    if (!slide) return;
    rawIndexRef.current = raw;
    scroller.scrollTo({ left: slide.offsetLeft, behavior });
  }, []);

  const goToRaw = useCallback(
    (raw: number) => {
      scrollToRaw(raw, reduceMotion ? "auto" : "smooth");
    },
    [reduceMotion, scrollToRaw]
  );

  const pauseAfterArrows = useCallback(() => {
    setArrowPaused(true);
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      setArrowPaused(false);
      resumeTimerRef.current = null;
    }, RESUME_AFTER_ARROWS_MS);
  }, []);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || count < 1) return;
    const nodes = scroller.querySelectorAll<HTMLElement>("[data-slide]");
    const start = nodes[count];
    if (!start) return;
    scroller.scrollLeft = start.offsetLeft;
    rawIndexRef.current = count;
  }, [count]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

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
        const distance = Math.abs(slide.offsetLeft - scroller.scrollLeft);
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
      scroller.scrollLeft = target.offsetLeft;
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
    if (paused || reduceMotion || count < 2) return;
    const id = window.setInterval(() => {
      goToRaw(rawIndexRef.current + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [active, count, goToRaw, paused, reduceMotion]);

  return (
    <div className="relative mt-10">
      <div
        ref={scrollerRef}
        id="marques-carousel"
        role="region"
        aria-roledescription="carrousel"
        aria-label="Marques partenaires"
        className="mx-11 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-12 [&::-webkit-scrollbar]:hidden"
      >
        {slides.map(({ brand, copy }) => (
          <article
            key={`${copy}-${brand.name}`}
            data-slide
            onMouseEnter={() => setArticlePaused(true)}
            onMouseLeave={() => setArticlePaused(false)}
            onTouchStart={() => setArticlePaused(true)}
            onTouchEnd={() => setArticlePaused(false)}
            onTouchCancel={() => setArticlePaused(false)}
            className="flex w-[85vw] max-w-[19rem] shrink-0 snap-start flex-col rounded-2xl bg-card p-5 text-card-foreground ring-1 ring-foreground/10 sm:w-72 sm:max-w-none lg:w-80"
          >
            <div className="relative mb-4 h-20">
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                sizes="200px"
                className="object-contain"
              />
            </div>
            <h3 className="font-heading text-lg text-foreground">{brand.name}</h3>
            <p className="mt-2 font-sans text-sm text-muted-foreground">
              {brand.text}
            </p>
          </article>
        ))}
      </div>
      <Button
        type="button"
        variant="outline"
        size="icon-lg"
        className="absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full bg-background shadow-sm"
        aria-label="Marque précédente"
        aria-controls="marques-carousel"
        onClick={() => {
          pauseAfterArrows();
          goToRaw(rawIndexRef.current - 1);
        }}
      >
        <ChevronLeft />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon-lg"
        className="absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full bg-background shadow-sm"
        aria-label="Marque suivante"
        aria-controls="marques-carousel"
        onClick={() => {
          pauseAfterArrows();
          goToRaw(rawIndexRef.current + 1);
        }}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
