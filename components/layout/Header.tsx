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
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-[0_2px_20px_-4px_rgba(2,6,23,0.08)]">
      {/* Institutional accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-navy via-haitiBlue to-navy" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-4 group">
          {/* Rectangular monogram — corporate/institutional */}
          <div className="flex h-10 w-12 items-center justify-center border border-navy bg-navy text-sm font-bold tracking-wider text-white transition-colors duration-200 group-hover:bg-haitiBlue">
            FWM
          </div>
          <div className="border-l border-slate-300 pl-4">
            <p className="font-display text-base font-semibold text-navy leading-tight">Fritz William Michel</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold mt-0.5">
              Administrateur public · Haïti
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-[0.12em] text-steel transition-colors duration-200 hover:text-navy relative after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-haitiBlue after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-navy bg-navy px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-200 hover:bg-haitiBlue"
          >
            Contact
          </Link>
        </div>

        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
