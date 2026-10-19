import Image from "next/image";
import { profile } from "@/lib/mock-data";
import { Icon } from "@/components/ui/Icon";
import { Typewriter } from "@/components/ui/Typewriter";

const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "X / Twitter", href: "https://x.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];

const expertise = [
  { label: "Finances publiques", icon: "landmark" },
  { label: "Gestion budgétaire", icon: "trending" },
  { label: "Direction d'entreprise", icon: "briefcase" },
];

export function Hero() {
  return (
    <section className="section !pt-16 lg:!pt-24">
      <div className="page-shell grid items-center gap-16 lg:grid-cols-[1.1fr,0.9fr]">
        {/* Texte */}
        <div className="order-2 lg:order-1">
          <span className="reveal-up label-muted !text-xs !tracking-[0.25em]">Bienvenue sur mon site officiel</span>

          <h1 className="reveal-up mt-6 font-display text-[2.6rem] font-bold leading-[1.15] text-heading [animation-delay:100ms] sm:text-6xl">
            Bonjour, je suis <span className="text-accent">Fritz William Michel</span>
            <br />
            <Typewriter
              className="text-[2rem] sm:text-5xl"
              words={["Administrateur Public.", "Ex-Directeur de Cabinet.", "Chef d'Entreprise."]}
            />
          </h1>

          <p className="reveal-up mt-8 max-w-xl text-base leading-[1.9] text-body [animation-delay:200ms]">
            Ex-Directeur de Cabinet du Ministre de l&apos;Économie et des Finances d&apos;Haïti et PDG de trois entreprises. Un parcours ancré dans la rigueur institutionnelle et le service public.
          </p>

          <div className="reveal-up mt-16 grid gap-10 [animation-delay:300ms] sm:grid-cols-2">
            <div>
              <span className="label-muted !text-xs">Me retrouver sur</span>
              <div className="mt-5 flex gap-4">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="neu-icon">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <span className="label-muted !text-xs">Domaines clés</span>
              <div className="mt-5 flex gap-4">
                {expertise.map((e) => (
                  <span key={e.label} title={e.label} aria-label={e.label} className="neu-icon text-accent">
                    <Icon name={e.icon} className="h-5 w-5" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Portrait dans une carte en relief */}
        <div className="reveal-fade order-1 mx-auto w-full max-w-md lg:order-2">
          <div className="neu p-4 sm:p-5">
            {/* Photo source carrée : cadre carré pour ne rien rogner (bras et épaules visibles) */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-[#e6e6e6]">
              <Image
                src="/id.jpeg"
                alt={`Portrait de ${profile.name}`}
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
