"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/content/site";
import { PlanityButton } from "@/components/planity-button";
import { cn } from "@/lib/utils";

const sectionIds = nav
  .map((item) => item.href.split("#")[1])
  .filter((id): id is string => Boolean(id));

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const lockedId = useRef<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      lockedId.current = null;
      setActiveId(null);
      return;
    }

    const readingId = () => {
      const header = document.querySelector("header");
      const offset = (header?.getBoundingClientRect().height ?? 64) + 24;
      const atBottom =
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4;

      if (atBottom) return sectionIds.at(-1) ?? null;

      let current: string | null = null;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= offset) current = id;
      }
      return current;
    };

    const update = () => {
      const current = readingId();
      if (lockedId.current && current !== lockedId.current) {
        setActiveId(lockedId.current);
        return;
      }
      lockedId.current = null;
      setActiveId(current);
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const onScrollEnd = () => {
      lockedId.current = null;
      update();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };
  }, [pathname]);

  function activateSection(id: string | undefined) {
    if (!id) return;
    lockedId.current = id;
    setActiveId(id);
  }

  function openSection(event: MouseEvent<HTMLAnchorElement>, id: string | undefined) {
    if (!id || pathname !== "/") return;
    const section = document.getElementById(id);
    if (!section) return;
    event.preventDefault();
    activateSection(id);
    document.body.style.overflow = "";
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, "", `#${id}`);
    }
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background">
        <div className="mx-auto flex h-[var(--header-height)] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={`${site.name} et Atelier 228`}
              width={196}
              height={96}
              className="h-10 w-auto sm:h-12"
              priority
            />
            <span className="hidden min-w-0 flex-col leading-tight md:flex">
              <span className="font-heading text-sm text-foreground">
                {site.name}
              </span>
              <span className="text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                {site.tagline}
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-5 lg:flex"
            aria-label="Navigation principale"
          >
            {nav.map((item) => {
              const id = item.href.split("#")[1];
              const active = id === activeId;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "location" : undefined}
                  onClick={(event) => openSection(event, id)}
                  className={cn(
                    "relative inline-block text-[13px] tracking-wide transition-colors",
                    active
                      ? "font-medium text-primary"
                      : "text-foreground/80 hover:text-primary",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-primary transition-all",
                      active ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              nativeButton={false}
              render={<Link href="/#reservation" />}
              className="hidden h-10 px-4 sm:inline-flex"
            >
              Réserver
            </Button>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {open
        ? createPortal(
            <div
              id="menu-mobile"
              role="dialog"
              aria-modal="true"
              aria-labelledby="menu-mobile-title"
              className="fixed inset-0 z-[9999] flex flex-col bg-background"
            >
              <div className="flex items-center justify-between border-b px-4 py-4">
                <h2 id="menu-mobile-title" className="font-heading text-xl">
                  Menu
                </h2>
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-border"
                  aria-label="Fermer le menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav
                className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4"
                aria-label="Navigation mobile"
              >
                {nav.map((item) => {
                  const id = item.href.split("#")[1];
                  const active = id === activeId;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "location" : undefined}
                      onClick={(event) => {
                        openSection(event, id);
                        setOpen(false);
                      }}
                      className={cn(
                        "rounded-lg border-l-4 px-3 py-3 text-lg transition-colors",
                        active
                          ? "border-primary bg-primary/10 font-medium text-primary"
                          : "border-transparent text-foreground hover:bg-secondary",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="flex flex-col gap-2 border-t p-4">
                <PlanityButton salon="grenoble" className="w-full" />
                <PlanityButton salon="uriage" variant="outline" className="w-full" />
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
