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
  navy: "bg-navy text-white",
  blue: "bg-gold/10 text-gold border border-gold/20",
  red: "bg-red-50 text-red-700 border border-red-200",
  gray: "bg-slate-50 text-slate-600 border border-slate-200",
  gold: "bg-amber-50 text-amber-800 border border-amber-200",
  success: "bg-emerald-50 text-emerald-800 border border-emerald-200",
};

export function Badge({ children, variant = "gray", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-none px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em]",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
