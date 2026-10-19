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
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-night">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]" />

      {/* Bandeau email géant */}
      <div className="relative border-b border-white/[0.07]">
        <div className="page-shell py-20">
          <span className="eyebrow">Vous avez une vision ? Faisons-la vivre</span>
          <div className="mt-8 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <a
              href="mailto:contact@fritzwilliammichel.ht"
              className="group font-display text-4xl leading-none text-white transition-colors sm:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-r from-white to-white bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-2 transition-all duration-700 group-hover:bg-[length:100%_1px] group-hover:text-goldLight">
                contact@fritzwilliammichel.ht
              </span>
            </a>
            <Link href="/contact" className="btn-gold shrink-0">
              Envoyer un message →
            </Link>
          </div>
        </div>
      </div>

      {/* Grille principale */}
      <div className="page-shell relative py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr,1fr,1fr,1.6fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-metal text-[11px] font-extrabold tracking-widest text-night shadow-glow">
                FW
              </div>
              <div>
                <p className="font-display text-lg text-white">Fritz William Michel</p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-gold/80">
                  Administrateur Public · Haïti
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
              Administrateur public, dirigeant et personnalité publique haïtienne. Un parcours associant rigueur institutionnelle et développement national.
            </p>
            <div className="mt-8 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-bold text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-goldLight hover:shadow-glow"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{col.title}</p>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/50 transition-colors duration-200 hover:text-white"
                    >
                      <span className="h-px w-0 bg-gold transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="glass rounded-3xl p-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Newsletter</p>
            <p className="text-sm leading-relaxed text-white/50">
              Recevez les actualités et communiqués officiels directement dans votre boîte mail.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Nom géant en contour */}
        <p
          aria-hidden
          className="text-outline pointer-events-none mt-16 select-none whitespace-nowrap text-center font-display text-[15vw] leading-none lg:text-[11rem]"
        >
          Fritz W. Michel
        </p>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-white/30">© 2026 Fritz William Michel — Tous droits réservés</p>
          <p className="flex items-center gap-2 text-xs text-white/30">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-gold" />
            Haïti · Site Officiel
          </p>
        </div>
      </div>
    </footer>
  );
}
