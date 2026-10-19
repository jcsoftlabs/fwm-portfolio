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
  primary: "btn-gold",
  secondary: "btn-ghost",
  ghost: "btn-ghost border-transparent bg-transparent",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(variants[variant], "group", className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
