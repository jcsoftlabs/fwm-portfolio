"use client";

import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "../ui/NewsletterForm";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";

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
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "X / Twitter", href: "https://x.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
];

export function Footer() {
  const pathname = usePathname();
  const isAdminOrLogin = pathname?.startsWith("/admin") || pathname?.startsWith("/login");

  if (isAdminOrLogin) return null;

  return (
    <footer className="border-t border-line bg-paper">
      <div className="page-shell py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr,1fr,1fr,1.6fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full border-[3px] border-white shadow-neu">
                <Image src="/id.jpeg" alt="Fritz William Michel" fill sizes="48px" className="object-cover object-top" />
              </span>
              <span className="font-display text-sm font-bold uppercase tracking-wide text-heading">Fritz W. Michel</span>
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-7 text-body">
              Administrateur public, dirigeant et personnalité publique haïtienne. Un parcours associant rigueur institutionnelle et développement national.
            </p>
            <div className="mt-8 flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-icon !h-12 !w-12"
                >
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <p className="label-muted !text-xs">{col.title}</p>
              <ul className="mt-6 space-y-4">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[15px] text-body hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="label-muted !text-xs">Newsletter</p>
            <p className="mt-6 text-[15px] leading-7 text-body">
              Recevez les actualités et communiqués officiels directement dans votre boîte mail.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="page-shell flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted sm:flex-row">
          <p>© 2026 Fritz William Michel — Tous droits réservés</p>
          <p>Haïti · Site Officiel</p>
        </div>
      </div>
    </footer>
  );
}
