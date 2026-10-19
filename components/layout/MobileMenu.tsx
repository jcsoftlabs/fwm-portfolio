"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

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
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="neu-icon !h-12 !w-12"
      >
        <Icon name="menu" />
      </button>

      {/* Tiroir latéral — rendu dans <body> pour échapper au backdrop-filter du header */}
      {mounted &&
        createPortal(
          <div className={cn("fixed inset-0 z-[60] transition-all duration-300", open ? "visible" : "invisible")}>
            <div
              onClick={() => setOpen(false)}
              className={cn("absolute inset-0 bg-black/40 transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
            />
            <aside
              className={cn(
                "absolute inset-y-0 left-0 flex w-[82%] max-w-sm flex-col bg-paper p-6 shadow-2xl transition-transform duration-500",
                open ? "translate-x-0" : "-translate-x-full",
              )}
            >
              <div className="flex items-center justify-between border-b border-line pb-6">
                <span className="font-display text-sm font-bold uppercase tracking-wide text-heading">
                  Fritz W. Michel
                </span>
                <button
                  type="button"
                  aria-label="Fermer le menu"
                  onClick={() => setOpen(false)}
                  className="neu-icon !h-11 !w-11 text-xl"
                >
                  ×
                </button>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-body">
                Administrateur public, dirigeant et personnalité publique haïtienne.
              </p>
              <nav className="mt-8 flex flex-col">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "border-b border-line py-4 text-sm font-medium uppercase tracking-wide transition-colors",
                      pathname === item.href ? "text-accent" : "text-heading hover:text-accent",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </aside>
          </div>,
          document.body,
        )}
    </div>
  );
}
