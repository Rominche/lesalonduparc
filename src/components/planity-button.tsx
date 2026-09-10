import { Button } from "@/components/ui/button";
import { salons } from "@/content/site";
import { cn } from "@/lib/utils";

type SalonId = (typeof salons)[number]["id"];

export function PlanityButton({
  salon,
  className,
  size = "lg",
  variant = "default",
}: {
  salon: SalonId;
  className?: string;
  size?: "default" | "lg" | "sm";
  variant?: "default" | "outline" | "secondary";
}) {
  const place = salons.find((item) => item.id === salon)!;
  const label =
    salon === "grenoble"
      ? "Prendre rendez-vous à Grenoble"
      : "Prendre rendez-vous à Uriage";

  return (
    <Button
      nativeButton={false}
      render={<a href={place.planity} target="_blank" rel="noopener noreferrer" />}
      variant={variant}
      size={size}
      className={cn("h-11 px-5 text-sm sm:text-base", className)}
    >
      {label}
    </Button>
  );
}
