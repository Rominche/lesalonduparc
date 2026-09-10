import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-4xl">Mentions légales</h1>
      <div className="mt-8 space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-heading text-2xl text-foreground">Éditeur</h2>
          <p className="mt-2">
            {site.name} — {site.tagline}.
          </p>
          <p>3 Rue Léon Jouhaux, 38100 Grenoble</p>
          <p className="mt-2">Atelier 228 — 228 Av. des Thermes, 38410 Saint-Martin-d&apos;Uriage</p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-foreground">Hébergement</h2>
          <p className="mt-2">
            Site vitrine statique. L’hébergement dépend de la plateforme de mise
            en ligne choisie.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-foreground">Réservation</h2>
          <p className="mt-2">
            Les rendez-vous sont gérés par Planity. Aucune donnée de réservation
            n’est collectée sur ce site.
          </p>
        </section>
        <section>
          <h2 className="font-heading text-2xl text-foreground">Photos</h2>
          <p className="mt-2">
            Les visuels appartiennent à {site.name} / Atelier 228. Toute
            reproduction non autorisée est interdite.
          </p>
        </section>
      </div>
    </article>
  );
}
