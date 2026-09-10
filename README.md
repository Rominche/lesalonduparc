# Le Salon du Parc · Atelier 228

Site vitrine de **Le Salon du Parc** (Grenoble) et de **l’Atelier 228** (Uriage-les-Bains) : coiffure, esthétique et bien-être.

Le site WordPress a été repris en **Next.js** (React) : un front simple, rapide, adapté au grand écran et au téléphone. Les rendez-vous restent gérés par [Planity](https://www.planity.com/).

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:43147](http://localhost:43147).

## Contenu

- Accueil : présentation, prestations, salons, marques, fidélité, réservation
- Une page par prestation (`/prestations/...`)
- Mentions légales

Les textes et photos viennent du site actuel. Pour remplacer une image, déposer le fichier dans `public/images/` (mêmes noms, ou mettre à jour les chemins dans `src/content/`).

## Déployer

Le projet se construit avec `npm run build`. Il peut être hébergé sur Vercel, Netlify, ou tout hébergeur Node / export statique compatible Next.js.
