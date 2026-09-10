import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlanityButton } from "@/components/planity-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getService, services } from "@/content/services";
import { salons } from "@/content/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} — Le Salon du Parc`,
    description: service.excerpt,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const grenobleOnly =
    service.locations.length === 1 && service.locations[0] === "grenoble";
  const available = salons.filter((salon) =>
    service.locations.includes(salon.id)
  );

  return (
    <article>
      <header className="relative isolate min-h-[46vh] overflow-hidden">
        <Image
          src={service.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/50 to-foreground/20" />
        <div className="relative mx-auto flex min-h-[46vh] max-w-3xl flex-col justify-end px-4 py-12 sm:px-6">
          <Link
            href="/#prestations"
            className="mb-4 text-sm text-background/80 hover:text-background"
          >
            ← Toutes les prestations
          </Link>
          {grenobleOnly && (
            <p className="text-xs tracking-[0.2em] text-accent uppercase">
              Disponible à Grenoble
            </p>
          )}
          <h1 className="font-heading text-4xl text-background sm:text-5xl">
            {service.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 sm:py-16">
        {service.intro.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}

        {service.highlights && (
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.highlights.map((item) => (
              <li
                key={item}
                className="rounded-xl bg-secondary/60 px-4 py-3 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {service.sections?.map((section, index) => (
          <section key={section.title ?? index} className="space-y-4">
            {section.title && (
              <h2 className="font-heading text-3xl">{section.title}</h2>
            )}
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="space-y-2">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.steps && (
              <div className="grid gap-4 sm:grid-cols-2">
                {section.steps.map((step) => (
                  <div
                    key={step.title}
                    className="rounded-xl bg-card p-4 ring-1 ring-foreground/10"
                  >
                    <h3 className="font-heading text-xl">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {service.faqs && service.faqs.length > 0 && (
          <section>
            <h2 className="mb-4 font-heading text-3xl">Questions fréquentes</h2>
            <Accordion className="rounded-xl bg-card px-4 ring-1 ring-foreground/10">
              {service.faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger className="py-4 text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        <section className="rounded-2xl bg-secondary/60 p-6 sm:p-8">
          <h2 className="font-heading text-2xl">Réserver cette prestation</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {grenobleOnly
              ? "Cette prestation est proposée au Salon du Parc, à Grenoble."
              : "Disponible à Grenoble et à Uriage."}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            {available.map((salon) => (
              <PlanityButton
                key={salon.id}
                salon={salon.id}
                variant={salon.id === "grenoble" ? "default" : "outline"}
              />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
