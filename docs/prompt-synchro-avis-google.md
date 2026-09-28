# Prompt — synchro automatique des avis Google

Copier le bloc ci-dessous dans un nouveau chat agent (avec le projet ouvert).

---

```
Tu travailles sur le site Next.js « Le Salon du Parc » (dossier lesalonduparc/).

## Objectif
Mettre en place la synchronisation automatique des notes et du nombre d’avis Google pour les deux salons, affichés dans la rubrique « Nos salons » de la page d’accueil.

Aujourd’hui les notes sont en dur dans src/content/site.ts et le composant src/components/google-rating.tsx les affiche avec un lien vers la fiche Google. Il faut les récupérer via l’API officielle Google Places, pas en scrapeant Maps.

## Salons (source déjà en place)

1. Atelier 228 — Uriage
   - id: "uriage"
   - Fiche Google (CID) : https://www.google.com/maps?cid=4765438589662577662
   - Fallback actuel : 4,3 · 125 avis
   - Feature id Maps : 0x478a607d30ba09f7:0x42223d261fc6c3fe
   - kgmid : /g/11gc7_wwwq

2. Le Salon du Parc — Grenoble
   - id: "grenoble"
   - Fiche Google (CID) : https://www.google.com/maps?cid=2286116851865828390
   - Fallback actuel : 4,5 · 130 avis
   - Feature id Maps : 0x478af4f019ba93f3:0x1fb9eb2a167f3c26
   - kgmid : /g/1w4f6_cc

Les CID ne suffisent pas à l’API Places : résoudre et stocker le Place ID (ChIJ…) de chaque salon (Places API Text Search / Place Details, ou Places API New). Une fois trouvés, les ajouter dans le contenu (ex. googlePlaceId) à côté des CID / URLs maps existants.

## Contraintes techniques
- Next.js 16 (App Router, src/app/), React 19, TypeScript. Lire AGENTS.md / node_modules/next/dist/docs/ si besoin.
- Utiliser Places API (New) de préférence : GET https://places.googleapis.com/v1/places/{placeId} avec le header X-Goog-FieldMask limité à rating,userRatingCount,googleMapsUri (et éventuellement displayName pour contrôler qu’on a le bon lieu).
- Clé API uniquement côté serveur : variable d’environnement GOOGLE_PLACES_API_KEY (jamais NEXT_PUBLIC_*). Documenter dans .env.example, jamais committer .env.
- Restreindre la clé (Places API only, éventuellement IP / referrer selon l’hébergement).
- Cache ISR / revalidate ~24 h (ou fetch Next.js avec next: { revalidate: 86400 }) pour limiter le coût et rester dans des délais acceptables vis-à-vis des conditions Google. En cas d’échec API / clé absente, garder le fallback de site.ts.
- Affichage : conserver GoogleRating (logo Google + étoile + « X,X · N avis Google ») et le lien vers la fiche Maps. Formater la note en français (virgule). Ne pas inventer ni arrondir autrement que Google.
- Attribution Google : le mot « Google » (déjà dans le composant) et le lien vers la fiche doivent rester. Ne pas afficher de textes d’avis extraits sans respecter les règles Places (hors scope : on synchronise note + nombre d’avis, pas un carrousel d’avis).
- Interdit : scraper Google Maps, SerpAPI/Outscraper ou tout proxy non officiel, modifier la note, mélanger Planity et Google.

## Implémentation attendue
1. Trouver et enregistrer les Place IDs des deux salons.
2. Petit module serveur (ex. src/lib/google-places.ts) : fetch des notes, typage, fallback, cache.
3. La page d’accueil (server component src/app/page.tsx) fusionne salons + notes live avant de passer à GoogleRating.
4. .env.example + 2–3 lignes dans le README (clé, API à activer, coût Place Details).
5. Vérifier en local : les deux cartes « Nos salons » affichent une note Google, le lien ouvre la bonne fiche, et sans clé le fallback s’affiche sans casser la page.

Réponds en français. Ne committe pas sauf si je le demande.
```
