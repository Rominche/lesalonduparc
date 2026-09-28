import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { salons, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Image
            src="/images/logo.png"
            alt=""
            width={196}
            height={96}
            className="mb-4 h-12 w-auto brightness-0 invert"
          />
          <p className="font-heading text-2xl">{site.name}</p>
          <p className="mt-1 text-sm text-background/70">{site.slogan}</p>
        </div>

        {salons.map((salon) => (
          <div key={salon.id} className="space-y-3">
            <p className="font-heading text-xl">
              {salon.name}
              <span className="mt-1 block text-sm font-sans text-background/70">
                {salon.city}
              </span>
            </p>
            <a
              href={salon.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm text-background/80 hover:text-background"
            >
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>
                {salon.address}
                <br />
                {salon.postal}
              </span>
            </a>
            <div className="flex gap-3">
              <a
                href={salon.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Facebook ${salon.name}`}
                className="rounded-full border border-background/20 p-2 hover:bg-background/10"
              >
                <FacebookIcon />
              </a>
              <a
                href={salon.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${salon.name}`}
                className="rounded-full border border-background/20 p-2 hover:bg-background/10"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-background/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {site.name} · Atelier 228</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/mentions-legales" className="hover:text-background">
              Mentions légales
            </Link>
            <Link href="/politique-cookies" className="hover:text-background">
              Politique de cookies
            </Link>
            <Link href="#cookies" className="hover:text-background">
              Gérer mes cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
