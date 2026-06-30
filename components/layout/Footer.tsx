import Link from "next/link";
import { NewsletterForm } from "../ui/NewsletterForm";

const footerNav = [
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Accueil" },
      { href: "/parcours", label: "Parcours" },
      { href: "/realisations", label: "Réalisations" },
      { href: "/vision", label: "Vision" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/medias", label: "Médias" },
      { href: "/actualites", label: "Actualités" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

const socialLinks = [
  { label: "X", href: "https://x.com", short: "X" },
  { label: "Facebook", href: "https://facebook.com", short: "FB" },
  { label: "LinkedIn", href: "https://linkedin.com", short: "LI" },
  { label: "YouTube", href: "https://youtube.com", short: "YT" },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-navy text-white">
      {/* Top accent */}
      <div className="h-[3px] w-full bg-gradient-to-r from-navy via-haitiBlue to-navy" />

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr,1fr,1fr]">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-12 items-center justify-center border border-white/30 bg-white/10 text-sm font-bold tracking-wider text-white">
                FWM
              </div>
              <div className="border-l border-white/20 pl-4">
                <p className="font-display text-lg font-semibold text-white">Fritz William Michel</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold mt-0.5">
                  Site Officiel
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Administrateur public, dirigeant et personnalité publique haïtienne. Un parcours associant administration publique, gestion financière et responsabilités exécutives au service du développement national.
            </p>
            <div className="mt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold mb-2">
                Newsletter
              </p>
              <NewsletterForm />
            </div>
            {/* Social links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center border border-white/20 text-xs font-bold text-slate-400 transition-all duration-200 hover:border-gold hover:text-gold"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold mb-6">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-col items-start gap-1">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Administrateur public · Haïti
            </p>
            <p className="text-xs text-slate-500">
              © 2026 Fritz William Michel — Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
