"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/parcours", label: "Parcours" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/vision", label: "Vision" },
  { href: "/medias", label: "Médias" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isAdminOrLogin = pathname?.startsWith("/admin") || pathname?.startsWith("/login");
  if (isAdminOrLogin) return null;

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <>
      <div className="grain" aria-hidden />

      {/* Barre de progression de lecture */}
      <div
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gold-metal"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6">
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-3 py-2.5 transition-all duration-500 sm:px-4",
            scrolled
              ? "border-white/10 bg-night/70 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
              : "border-transparent bg-transparent",
          )}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gold-metal bg-[length:200%_auto] text-[11px] font-extrabold tracking-widest text-night shadow-glow transition-all duration-500 group-hover:bg-right">
              FW
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg leading-none text-white">Fritz William Michel</p>
              <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-gold/80">
                Site Officiel
              </p>
            </div>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.03] p-1 lg:flex">
            {navItems.slice(0, 6).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300",
                  isActive(item.href)
                    ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                    : "text-white/55 hover:text-white",
                )}
              >
                {item.label}
                {isActive(item.href) ? (
                  <span className="absolute -bottom-px left-1/2 h-px w-6 -translate-x-1/2 bg-gold" />
                ) : null}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link href="/contact" className="btn-gold group !px-6 !py-3">
              Me contacter
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <MobileMenu items={navItems} />
        </div>
      </header>
    </>
  );
}
