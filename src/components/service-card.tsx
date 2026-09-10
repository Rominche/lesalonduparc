import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  const grenobleOnly =
    service.locations.length === 1 && service.locations[0] === "grenoble";

  return (
    <Link
      href={`/prestations/${service.slug}`}
      className={cn(
        "group relative isolate block min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[320px]",
        className
      )}
    >
      <Image
        src={service.image}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-foreground/85 via-foreground/35 to-foreground/10" />
      <div className="absolute inset-x-0 bottom-0 space-y-2 p-5 text-background">
        {grenobleOnly && (
          <p className="text-[11px] tracking-[0.16em] text-accent uppercase">
            Grenoble
          </p>
        )}
        <h3 className="font-heading text-2xl leading-tight">{service.cardTitle}</h3>
        <p className="line-clamp-3 text-sm text-background/85">{service.excerpt}</p>
        <span className="inline-block text-sm text-accent underline-offset-4 group-hover:underline">
          Découvrir
        </span>
      </div>
      <span className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-full bg-background/15 text-background opacity-0 ring-1 ring-background/30 transition group-hover:opacity-100">
        <MapPin className="size-3.5 hidden" />
        <span className="text-lg leading-none">→</span>
      </span>
    </Link>
  );
}
