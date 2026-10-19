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
  navy: "bg-white/10 text-white border border-white/15",
  blue: "bg-gold/10 text-goldLight border border-gold/25",
  red: "bg-rose-500/10 text-rose-300 border border-rose-400/25",
  gray: "bg-white/[0.04] text-white/60 border border-white/10",
  gold: "bg-amber-400/10 text-amber-200 border border-amber-300/25",
  success: "bg-emerald-400/10 text-emerald-300 border border-emerald-300/25",
};

export function Badge({ children, variant = "gray", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em]",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
