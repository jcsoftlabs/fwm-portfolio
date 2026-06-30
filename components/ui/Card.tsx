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
        "surface-panel rounded-xl p-6 shadow-soft transition-all duration-300 hover:shadow-strong",
        className,
      )}
    >
      {children}
    </div>
  );
}
