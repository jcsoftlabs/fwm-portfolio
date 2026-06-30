import { Hero } from "@/components/home/Hero";
import { NewsCard } from "@/components/actualites/NewsCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import {
  latestNews,
  professionalExperience,
  visionAxes,
  journeyHighlights,
} from "@/lib/mock-data";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <div className="page-shell py-8 lg:py-10">
        <Reveal animation="fade">
          <Hero />
        </Reveal>
      </div>

      {/* ABOUT ME — asymmetric layout like reference */}
      <section className="page-shell mt-24">
        <Reveal>
          <div className="grid gap-16 lg:grid-cols-[1fr,1fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4">À Propos</p>
              <h2 className="font-display text-4xl font-bold text-ink leading-tight">
                Un parcours public<br />ancré dans la rigueur.
              </h2>
              <p className="mt-6 text-base leading-8 text-steel">
                Administrateur public, dirigeant et personnalité publique haïtienne, Fritz William Michel a exercé des responsabilités de premier plan au sein du Ministère de l'Économie et des Finances, tout en dirigeant plusieurs entreprises privées.
              </p>
              <div className="mt-8 space-y-3">
                {journeyHighlights.slice(0, 4).map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-steel py-3 border-b border-slate-100"
                  >
                    <span className="mt-2 h-1 w-4 shrink-0 bg-gold" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/parcours" variant="ghost" className="border border-ink text-ink hover:bg-ink hover:text-white px-6 py-3 transition-colors">
                  Voir le parcours complet →
                </Button>
              </div>
            </div>

            {/* Right — big stat + grid highlights */}
            <div className="space-y-6">
              {/* Big featured stat */}
              <div className="bg-[#F8F8F8] p-10 flex flex-col justify-between min-h-[200px]">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-steel">Impact institutionnel</p>
                <div>
                  <p className="font-display text-8xl font-bold text-ink leading-none">15</p>
                  <p className="mt-2 text-sm text-steel">Années au Ministère de l'Économie et des Finances d'Haïti</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-ink p-6 text-white">
                  <p className="font-display text-5xl font-bold">3</p>
                  <p className="mt-2 text-xs text-white/60 uppercase tracking-widest">Entreprises dirigées</p>
                </div>
                <div className="border border-slate-200 p-6">
                  <p className="font-display text-5xl font-bold text-ink">20+</p>
                  <p className="mt-2 text-xs text-steel uppercase tracking-widest">Ans d'expérience</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* EXPERIENCE LIST — like "Explore My Design Journey" in reference */}
      <section className="page-shell mt-24">
        <Reveal>
          <div className="flex items-end justify-between mb-10 border-b border-slate-200 pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">Expérience</p>
              <h2 className="font-display text-4xl font-bold text-ink">
                Responsabilités clés
              </h2>
            </div>
            <Link href="/parcours" className="text-xs font-bold uppercase tracking-widest text-steel hover:text-ink transition-colors hidden sm:block">
              Tout voir →
            </Link>
          </div>
        </Reveal>

        <div className="divide-y divide-slate-100">
          {professionalExperience.slice(0, 5).map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <div className="flex items-center justify-between py-5 group hover:bg-[#F8F8F8] px-2 transition-colors">
                <div className="flex items-center gap-6">
                  <span className="font-display text-2xl font-bold text-slate-200 w-10 shrink-0 group-hover:text-gold transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-steel leading-relaxed">{item}</p>
                </div>
                <span className="text-xs text-slate-400 shrink-0 ml-6 group-hover:text-ink transition-colors hidden sm:block">
                  Voir →
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DARK CTA BANNER — exactly like reference */}
      <section className="mt-24 bg-ink">
        <div className="page-shell py-20">
          <Reveal animation="fade">
            <div className="grid gap-8 lg:grid-cols-[1fr,auto] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4">
                  Disponible pour échanges
                </p>
                <h2 className="font-display text-4xl font-bold text-white lg:text-5xl">
                  Une initiative à discuter ?<br />
                  <span className="text-white/50">Obtenez une consultation gratuite.</span>
                </h2>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-goldLight transition-colors whitespace-nowrap"
                >
                  Démarrer la conversation →
                </Link>
                <Link
                  href="/vision"
                  className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white hover:border-white transition-colors whitespace-nowrap"
                >
                  Voir la vision
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION AXES — "Latest Works" style grid */}
      <section className="page-shell mt-24">
        <Reveal>
          <div className="flex items-end justify-between mb-10 border-b border-slate-200 pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">Vision</p>
              <h2 className="font-display text-4xl font-bold text-ink">
                Axes prioritaires
              </h2>
            </div>
            <Link href="/vision" className="text-xs font-bold uppercase tracking-widest text-steel hover:text-ink transition-colors hidden sm:block">
              Tout voir →
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visionAxes.slice(0, 3).map((axis, i) => (
            <Reveal key={axis.id} delay={i * 80}>
              <div className="group relative overflow-hidden bg-[#F8F8F8] p-8 transition-all duration-300 hover:bg-ink cursor-default min-h-[220px] flex flex-col justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                  0{i + 1}
                </p>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink group-hover:text-white transition-colors duration-300 mt-4">
                    {axis.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel group-hover:text-white/60 transition-colors duration-300">
                    {axis.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEWS — "Design Insights & Trends" style */}
      <section className="page-shell mt-24">
        <Reveal>
          <div className="flex items-end justify-between mb-10 border-b border-slate-200 pb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">Actualités</p>
              <h2 className="font-display text-4xl font-bold text-ink">
                Dernières publications
              </h2>
            </div>
            <Link href="/actualites" className="text-xs font-bold uppercase tracking-widest text-steel hover:text-ink transition-colors hidden sm:block">
              Tout voir →
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {latestNews.map((article, i) => (
            <Reveal key={article.id} delay={i * 100}>
              <NewsCard article={article} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="page-shell mt-24 pb-20">
        <Reveal>
          <div className="grid gap-16 lg:grid-cols-[1fr,1.5fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-4">Contact</p>
              <h2 className="font-display text-4xl font-bold text-ink">
                Vous avez une question ?
              </h2>
              <p className="mt-4 text-base text-steel leading-relaxed">
                Pour toute demande officielle, médiatique ou institutionnelle, utilisez ce formulaire.
              </p>
              <div className="mt-8 space-y-4 text-sm text-steel">
                <div className="flex items-center gap-3">
                  <div className="h-px w-4 bg-gold" />
                  <span>Réponse sous 48h ouvrées</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-4 bg-gold" />
                  <span>Demandes médias & presse bienvenues</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-px w-4 bg-gold" />
                  <span>Confidentialité garantie</span>
                </div>
              </div>
            </div>
            <div className="border border-slate-200 bg-white p-8 shadow-soft">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
