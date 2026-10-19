"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

// Carte dont le halo doré suit le curseur (variables CSS --mx / --my).
export function Spotlight({ children, className }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={handleMove} className={cn("spotlight group", className)}>
      {children}
    </div>
  );
}
