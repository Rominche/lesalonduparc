import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <p className="text-xs tracking-[0.22em] text-primary uppercase">404</p>
      <h1 className="mt-2 font-heading text-4xl">Page introuvable</h1>
      <p className="mt-3 text-muted-foreground">
        Cette page n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/80"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
