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
  primary: "neu-btn !text-accent",
  secondary: "neu-btn",
  ghost: "btn-accent",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
