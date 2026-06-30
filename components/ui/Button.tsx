import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-navy text-white hover:bg-ink shadow-soft border border-white/10",
  secondary:
    "bg-white/90 text-navy hover:bg-white border border-white/40 shadow-soft",
  ghost:
    "bg-transparent text-navy hover:bg-white/70 border border-slate-200",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-200",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
