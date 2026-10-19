import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-3xl p-8 transition-all duration-500 hover:border-gold/25",
        className,
      )}
    >
      {children}
    </div>
  );
}
