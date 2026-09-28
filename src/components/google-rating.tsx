import { Star } from "lucide-react";
import { GoogleIcon } from "@/components/social-icons";

export function GoogleRating({
  name,
  rating,
  reviews,
  href,
}: {
  name: string;
  rating: string;
  reviews: number;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
      aria-label={`Avis Google ${name} : ${rating} sur 5, ${reviews} avis`}
    >
      <GoogleIcon className="size-4" />
      <Star className="size-4 fill-accent text-accent" />
      {rating} · {reviews} avis Google
    </a>
  );
}
