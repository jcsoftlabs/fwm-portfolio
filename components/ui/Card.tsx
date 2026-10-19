import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <div className={cn("neu p-8 sm:p-10", className)}>{children}</div>;
}
