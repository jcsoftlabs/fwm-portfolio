"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  items: NavItem[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white backdrop-blur transition-colors hover:border-gold"
      >
        <span className="space-y-1.5">
          <span className={cn("block h-px w-5 bg-current transition duration-300", open && "translate-y-[3.5px] rotate-45")} />
          <span className={cn("block h-px w-5 bg-current transition duration-300", open && "-translate-y-[3.5px] -rotate-45")} />
        </span>
      </button>

      {/* Plein écran — rendu dans <body> pour échapper au backdrop-filter de la navbar */}
      {mounted && createPortal(
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-center bg-night/95 px-8 backdrop-blur-2xl transition-all duration-500",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-gold/20 blur-[100px]" />
        <nav className="relative flex flex-col gap-2">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-baseline gap-4 py-2 font-display text-5xl transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                pathname === item.href ? "text-gold-metal italic" : "text-white/80 hover:text-white",
              )}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
            >
              <span className="font-sans text-xs text-gold/70">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>,
      document.body,
      )}
    </div>
  );
}
