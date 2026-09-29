import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { GoogleRating } from "@/components/google-rating";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { BrandsCarousel } from "@/components/brands-carousel";
import { PlanityButton } from "@/components/planity-button";
import { ServicesCarousel } from "@/components/services-carousel";
import { homeServices } from "@/content/services";
import { brands, loyalty, salons, site } from "@/content/site";

export default function HomePage() {
  const grid = homeServices();

  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden">
        <Image
          src="/images/salons/photo-1.jpg"
          alt="Chevelure ondulée réalisée au salon"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-foreground/80 via-foreground/45 to-foreground/20" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 py-16 sm:px-6 sm:py-24">
          <p className="mb-3 text-xs tracking-[0.28em] text-accent uppercase">
            {site.tagline} · Grenoble & Uriage
          </p>
          <h1 className="max-w-2xl font-heading text-4xl leading-tight text-background sm:text-6xl">
            {site.heroTitle}
          </h1>
          <p className="mt-4 max-w-lg text-base text-background/85 sm:text-lg">
            {site.slogan}. Deux salons, une même exigence : des prestations sur
            mesure, dans une ambiance conviviale et apaisante.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PlanityButton salon="grenoble" />
            <PlanityButton salon="uriage" variant="secondary" />
          </div>
        </div>
      </section>

      <section id="presentation" className="bg-secondary/50 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/images/salons/photo-2.jpg"
              alt="Balayage blond réalisé au salon"
              width={800}
              height={1000}
              className="h-full max-h-[420px] w-full rounded-2xl object-cover"
            />
            <Image
              src="/images/salons/interieur.jpg"
              alt="Intérieur du salon"
              width={800}
              height={1000}
              className="mt-8 h-full max-h-[420px] w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.22em] text-primary uppercase">
              Présentation
            </p>
            <h2 className="mt-2 font-heading text-4xl sm:text-5xl">
              Deux adresses, un même savoir-faire
            </h2>
            <p className="mt-5 text-muted-foreground">{site.description}</p>
            <p className="mt-4 text-muted-foreground">
              Coupes, couleurs, soins et esthétique : chaque geste est pensé pour
              vous, selon votre morphologie, votre rythme et l’état de vos cheveux.
            </p>
          </div>
        </div>
      </section>

      <section id="prestations" className="bg-foreground py-16 text-background sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 min-[1800px]:max-w-7xl">
          <p className="text-xs tracking-[0.22em] text-primary uppercase">
            Coiffure & esthétique
          </p>
          <h2 className="mt-2 font-heading text-4xl sm:text-5xl">Nos prestations</h2>
          <p className="mt-4 max-w-2xl text-background/70">
            {site.description}
          </p>
          <ServicesCarousel services={grid} />
        </div>
      </section>

      <section id="nos-salons" className="bg-secondary/50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-4xl sm:text-5xl">Nos salons</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {salons.map((salon) => (
              <article
                key={salon.id}
                className="overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/10"
              >
                <div className="relative h-56 sm:h-64">
                  <Image
                    src={salon.image}
                    alt={salon.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-xs tracking-[0.18em] text-primary uppercase">
                        {salon.tagline}
                      </p>
                      <h3 className="font-heading text-3xl">
                        {salon.name} — {salon.city}
                      </h3>
                    </div>
                    <GoogleRating
                      name={salon.name}
                      rating={salon.rating}
                      reviews={salon.reviews}
                      href={salon.maps}
                    />
                  </div>
                  <p className="text-muted-foreground">{salon.description}</p>
                  <a
                    href={salon.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm hover:text-primary"
                  >
                    <MapPin className="mt-0.5 size-4 shrink-0" />
                    {salon.address}, {salon.postal}
                  </a>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    {salon.hours.map((row) => (
                      <li key={row.day} className="flex justify-between gap-3">
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <Clock className="size-3.5" />
                          {row.day}
                        </span>
                        <span>{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <PlanityButton salon={salon.id} />
                    <a
                      href={salon.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border p-2 hover:bg-secondary"
                      aria-label={`Facebook ${salon.name}`}
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href={salon.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border p-2 hover:bg-secondary"
                      aria-label={`Instagram ${salon.name}`}
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="marques" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-4xl sm:text-5xl">
            Nos marques partenaires
          </h2>
          <BrandsCarousel brands={brands} />
        </div>
      </section>

      <section id="fidelite" className="bg-secondary/50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-4xl sm:text-5xl">
            Nos programmes fidélité
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {loyalty.map((program) => (
              <article
                key={program.salon}
                className="flex flex-col rounded-2xl bg-card p-6 ring-1 ring-foreground/10 sm:p-8"
              >
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-xs tracking-[0.18em] text-primary uppercase">
                      {program.salon}
                    </p>
                    <p className="mt-3 font-heading text-5xl leading-none tracking-tight">
                      {program.highlight}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {program.highlightLabel}
                    </p>
                  </div>
                  <div className="relative size-24 shrink-0 sm:size-28">
                    <Image
                      src={program.image}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="mt-6 font-heading text-2xl">{program.title}</h3>
                {"badge" in program && program.badge ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {program.badge}
                  </p>
                ) : null}
                <p className="mt-3 text-muted-foreground">{program.intro}</p>
                <ul className="mt-6 space-y-2 border-t border-foreground/10 pt-5 text-sm lg:mt-auto">
                  {program.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reservation" className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-4xl sm:text-5xl">
            Envie de prendre soin de vous ?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Réservez votre moment beauté à Uriage ou à Grenoble, directement en
            ligne. Notre équipe est là pour vous accueillir, vous conseiller, et
            vous offrir un instant rien qu’à vous.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PlanityButton salon="grenoble" />
            <PlanityButton salon="uriage" variant="outline" />
          </div>
        </div>
      </section>
    </>
  );
}
