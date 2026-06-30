import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";

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
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center bg-ink text-xs font-bold tracking-widest text-white transition-colors duration-200 group-hover:bg-gold rounded-sm">
            FW
          </div>
          <div>
            <p className="font-display text-sm font-bold text-ink leading-tight tracking-tight">Fritz William Michel</p>
            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-steel mt-0.5">
              Site Officiel
            </p>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-steel transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-gold rounded-sm"
          >
            Me contacter
          </Link>
        </div>

        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
