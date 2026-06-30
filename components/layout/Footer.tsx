"use client";

import Link from "next/link";
import { NewsletterForm } from "../ui/NewsletterForm";
import { usePathname } from "next/navigation";

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
  { label: "X / Twitter", href: "https://x.com", short: "X" },
  { label: "Facebook", href: "https://facebook.com", short: "FB" },
  { label: "LinkedIn", href: "https://linkedin.com", short: "LI" },
  { label: "YouTube", href: "https://youtube.com", short: "YT" },
];

export function Footer() {
  const pathname = usePathname();
  const isAdminOrLogin = pathname?.startsWith("/admin") || pathname?.startsWith("/login");

  if (isAdminOrLogin) return null;

  return (
    <footer className="mt-0 bg-ink text-white">

      {/* Big CTA email band — like the reference */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4">
                Vous avez une vision ? Faisons-la vivre !
              </p>
              <a
                href="mailto:contact@fritzwilliammichel.ht"
                className="font-display text-3xl font-bold text-white transition-colors duration-300 hover:text-gold sm:text-4xl lg:text-5xl"
              >
                contact@fritzwilliammichel.ht
              </a>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-200 hover:bg-gold hover:border-gold hover:text-white rounded-sm"
            >
              Envoyer un message →
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr,1fr,1fr,1.5fr]">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center bg-gold text-xs font-bold tracking-widest text-white rounded-sm">
                FW
              </div>
              <div>
                <p className="font-display text-sm font-bold text-white">Fritz William Michel</p>
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-gold/80 mt-0.5">
                  Administrateur Public · Haïti
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Administrateur public, dirigeant et personnalité publique haïtienne. Un parcours associant rigueur institutionnelle et développement national.
            </p>
            {/* Social links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-xs font-bold text-white/40 transition-all duration-200 hover:border-gold hover:text-gold rounded-sm"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((col) => (
            <div key={col.title}>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold mb-6">
                {col.title}
              </p>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold mb-6">
              Newsletter
            </p>
            <p className="text-sm text-white/50 mb-4 leading-relaxed">
              Recevez les actualités et communiqués officiels directement dans votre boîte mail.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/30">
            © 2026 Fritz William Michel — Tous droits réservés
          </p>
          <p className="text-xs text-white/30">
            Haïti · Site Officiel
          </p>
        </div>
      </div>
    </footer>
  );
}
