import { Hero } from "@/components/home/Hero";
import { NewsCard } from "@/components/actualites/NewsCard";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { Spotlight } from "@/components/ui/Spotlight";
import { CountUp } from "@/components/ui/CountUp";
import { Marquee } from "@/components/ui/Marquee";
import {
  latestNews,
  professionalExperience,
  visionAxes,
  journeyHighlights,
} from "@/lib/mock-data";
import Link from "next/link";

const marqueeItems = [
  "Service public",
  "Rigueur budgétaire",
  "Gouvernance",
  "Leadership",
  "Transparence",
  "Développement national",
  "Continuité institutionnelle",
];

function SectionHeader({ eyebrow, title, accent, href }: { eyebrow: string; title: string; accent: string; href: string }) {
  return (
    <Reveal animation="blur">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl">
            {title} <span className="text-gold-metal italic">{accent}</span>
          </h2>
        </div>
        <Link href={href} className="btn-ghost group shrink-0">
          Tout voir
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </Reveal>
  );
}

export default function HomePage() {
  return (
    <div>
      <Hero />

      <Marquee items={marqueeItems} />

      {/* À PROPOS — bento */}
      <section className="page-shell py-32">
        <div className="grid gap-5 lg:grid-cols-12">
          <Reveal animation="blur" className="lg:col-span-7">
            <Spotlight className="h-full p-10 lg:p-12">
              <span className="eyebrow">À Propos</span>
              <h2 className="mt-8 font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl">
                Un parcours public
                <br />
                <span className="text-gold-metal italic">ancré dans la rigueur.</span>
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
                Administrateur public, dirigeant et personnalité publique haïtienne, Fritz William Michel a exercé des responsabilités de premier plan au sein du Ministère de l&apos;Économie et des Finances, tout en dirigeant plusieurs entreprises privées.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {journeyHighlights.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm leading-relaxed text-white/60"
                  >
                    <span className="mt-1 text-gold">✦</span>
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/parcours" className="btn-ghost group mt-10">
                Voir le parcours complet
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </Spotlight>
          </Reveal>

          <div className="grid gap-5 lg:col-span-5">
            <Reveal animation="blur" delay={100}>
              <div className="gold-border relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-gold/20 via-onyx to-onyx p-10">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/30 blur-[90px]" />
                <p className="relative text-[10px] font-bold uppercase tracking-[0.3em] text-goldLight">
                  Impact institutionnel
                </p>
                <div className="relative">
                  <CountUp to={15} className="text-gold-metal font-display text-[9rem] leading-none" />
                  <p className="mt-2 max-w-xs text-sm text-white/60">
                    Années au Ministère de l&apos;Économie et des Finances d&apos;Haïti
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-5">
              <Reveal animation="blur" delay={200}>
                <Spotlight className="h-full p-7">
                  <CountUp to={3} className="font-display text-6xl text-white" />
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Entreprises dirigées</p>
                </Spotlight>
              </Reveal>
              <Reveal animation="blur" delay={300}>
                <Spotlight className="h-full p-7">
                  <CountUp to={20} suffix="+" className="font-display text-6xl text-white" />
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Ans d&apos;expérience</p>
                </Spotlight>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* EXPÉRIENCE — liste interactive */}
      <section className="page-shell pb-32">
        <SectionHeader eyebrow="Expérience" title="Responsabilités" accent="clés" href="/parcours" />

        <div className="border-t border-white/[0.08]">
          {professionalExperience.slice(0, 5).map((item, i) => (
            <Reveal key={item} delay={i * 70}>
              <Link
                href="/parcours"
                className="group relative flex items-center justify-between gap-6 overflow-hidden border-b border-white/[0.08] py-8"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-gold/[0.12] to-transparent transition-transform duration-700 ease-out group-hover:scale-x-100" />
                <div className="relative flex items-center gap-6 sm:gap-10">
                  <span className="font-display text-4xl italic text-white/15 transition-colors duration-500 group-hover:text-gold sm:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-white/60 transition-all duration-500 group-hover:translate-x-2 group-hover:text-white sm:text-xl">
                    {item}
                  </p>
                </div>
                <span className="relative hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-500 group-hover:-rotate-45 group-hover:border-gold group-hover:bg-gold group-hover:text-night sm:flex">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA — bordure conique animée */}
      <section className="page-shell pb-32">
        <Reveal animation="blur">
          <div className="relative overflow-hidden rounded-[2.5rem] p-px">
            <div className="absolute inset-[-100%] animate-spin-slow [background:conic-gradient(from_0deg,transparent_0deg,#f1d58a_40deg,transparent_100deg,transparent_180deg,#c9a24b_220deg,transparent_280deg)]" />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-onyx px-8 py-20 sm:px-16">
              <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
              <div className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-gold/25 blur-[120px]" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr,auto] lg:items-center">
                <div>
                  <span className="eyebrow">
                    <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
                    Disponible pour échanges
                  </span>
                  <h2 className="mt-8 font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-7xl">
                    Une initiative à discuter ?
                    <br />
                    <span className="text-gold-metal italic">Parlons-en.</span>
                  </h2>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <Link href="/contact" className="btn-gold group">
                    Démarrer la conversation
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                  <Link href="/vision" className="btn-ghost">
                    Voir la vision
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* VISION */}
      <section className="page-shell pb-32">
        <SectionHeader eyebrow="Vision" title="Axes" accent="prioritaires" href="/vision" />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visionAxes.slice(0, 3).map((axis, i) => (
            <Reveal key={axis.id} animation="blur" delay={i * 100}>
              <Spotlight className="flex h-full min-h-[320px] flex-col justify-between p-9">
                <div className="flex items-center justify-between">
                  <span className="font-display text-6xl italic text-white/10 transition-colors duration-500 group-hover:text-gold/40">
                    0{i + 1}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-500 group-hover:-rotate-45 group-hover:border-gold group-hover:text-gold">
                    →
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-3xl leading-tight text-white">{axis.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">{axis.description}</p>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ACTUALITÉS */}
      <section className="page-shell pb-32">
        <SectionHeader eyebrow="Actualités" title="Dernières" accent="publications" href="/actualites" />
        <div className="grid gap-5 lg:grid-cols-3">
          {latestNews.map((article, i) => (
            <Reveal key={article.id} animation="blur" delay={i * 100}>
              <NewsCard article={article} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="page-shell pb-32">
        <Reveal animation="blur">
          <div className="grid gap-12 lg:grid-cols-[1fr,1.4fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow">Contact</span>
              <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl">
                Vous avez une <span className="text-gold-metal italic">question ?</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/50">
                Pour toute demande officielle, médiatique ou institutionnelle, utilisez ce formulaire.
              </p>
              <div className="mt-10 space-y-4">
                {["Réponse sous 48h ouvrées", "Demandes médias & presse bienvenues", "Confidentialité garantie"].map((t) => (
                  <div key={t} className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-xs text-goldLight">
                      ✓
                    </span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass gold-border rounded-[2rem] p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
