import type { Metadata } from "next";
import Link from "next/link";
import { analytics } from "@/content/analytics";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de cookies",
};

export default function PolitiqueCookiesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-4xl">Politique de cookies</h1>
      <div className="mt-8 space-y-6 text-muted-foreground">
        <section>
          <h2 className="font-heading text-2xl text-foreground">Qu&apos;est-ce qu&apos;un cookie ?</h2>
          <p className="mt-2">
            Un cookie est un petit fichier texte déposé sur votre appareil lors de
            la visite d&apos;un site. Il permet notamment de mémoriser vos préférences
            ou de mesurer l&apos;audience du site.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-foreground">Gestion du consentement</h2>
          <p className="mt-2">
            Lors de votre première visite, une bannière vous permet d&apos;accepter,
            de refuser ou de personnaliser les cookies non essentiels. Vous pouvez
            modifier votre choix à tout moment en cliquant sur{" "}
            <Link href="#cookies" className="text-foreground underline">
              Gérer mes cookies
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-foreground">Cookies utilisés</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium text-foreground">Cookies strictement nécessaires</h3>
              <p className="mt-1">
                Indispensables au fonctionnement du site (mémorisation de vos choix
                de consentement via Tarteaucitron). Ils ne nécessitent pas votre
                accord préalable.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">Mesure d&apos;audience et marketing</h3>
              <p className="mt-1">
                Déposés uniquement si vous les acceptez. Ils nous permettent
                d&apos;analyser la fréquentation du site et de mesurer l&apos;efficacité
                de nos campagnes publicitaires via Google Tag Manager ({analytics.gtmId}),
                Google Analytics ({analytics.ga4Id}) et Google Ads ({analytics.googleAdsId}).
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-foreground">Durée de conservation</h2>
          <p className="mt-2">
            Votre choix de consentement est conservé 13 mois maximum. Les cookies
            déposés par Google sont soumis aux durées définies par Google.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-foreground">En savoir plus</h2>
          <p className="mt-2">
            Pour toute question relative à vos données, consultez nos{" "}
            <Link href="/mentions-legales" className="text-foreground underline">
              mentions légales
            </Link>
            . {site.name} ne collecte aucune donnée de réservation sur ce site
            (gestion via Planity).
          </p>
        </section>
      </div>
    </article>
  );
}
