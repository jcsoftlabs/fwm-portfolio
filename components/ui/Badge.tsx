import { cn } from "@/lib/utils";

type BadgeVariant =
  | "navy"
  | "blue"
  | "red"
  | "gray"
  | "gold"
  | "success";

type BadgeProps = {
  children: string;
  variant?: BadgeVariant;
  className?: string;
};

const styles: Record<BadgeVariant, string> = {
  navy: "bg-heading text-white",
  blue: "bg-accent/10 text-accent",
  red: "bg-rose-50 text-rose-700",
  gray: "bg-white text-muted",
  gold: "bg-amber-50 text-amber-800",
  success: "bg-emerald-50 text-emerald-700",
};

export function Badge({ children, variant = "gray", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] shadow-neu",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
