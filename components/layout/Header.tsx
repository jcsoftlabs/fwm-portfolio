"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isAdminOrLogin = pathname?.startsWith("/admin") || pathname?.startsWith("/login");
  if (isAdminOrLogin) return null;

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled ? "border-transparent bg-paper/90 shadow-neu backdrop-blur-md" : "border-line bg-paper",
      )}
    >
      <div className="page-shell flex items-center justify-between py-4">
        {/* Logo : portrait rond + nom */}
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-full border-[3px] border-white shadow-neu">
            <Image src="/id.jpeg" alt="Fritz William Michel" fill sizes="200px" className="origin-[68%_0%] scale-[1.8] object-cover" />
          </span>
          <span className="font-display text-sm font-bold uppercase tracking-wide text-heading">
            Fritz W. Michel
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative py-2 text-[13px] font-medium uppercase tracking-wide transition-colors",
                isActive(item.href) ? "text-accent" : "text-heading hover:text-accent",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300",
                  isActive(item.href) ? "w-full" : "w-0",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="neu-btn hidden !px-6 !py-3.5 !text-accent lg:inline-flex">
            Me contacter
          </Link>
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
