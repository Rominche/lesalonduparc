"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { nav, site } from "@/content/site";
import { PlanityButton } from "@/components/planity-button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6">
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

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Navigation principale">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] tracking-wide text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              nativeButton={false}
              render={<Link href="/#reservation" />}
              className="hidden h-10 px-4 sm:inline-flex"
            >
              Réserver
            </Button>

            <Button
              type="button"
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      {open && (
        <div className="lg:hidden">
          <button
            type="button"
            className="fixed inset-0 z-50 bg-foreground/40"
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-mobile-title"
            className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-background shadow-xl"
          >
            <div className="flex items-center justify-between border-b px-4 py-4">
              <h2 id="menu-mobile-title" className="font-heading text-xl">
                Menu
              </h2>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
              >
                <X />
              </Button>
            </div>
            <nav className="flex flex-col gap-1 px-4 py-2" aria-label="Navigation mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base text-foreground hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 p-4">
              <PlanityButton salon="grenoble" className="w-full" />
              <PlanityButton salon="uriage" variant="outline" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
