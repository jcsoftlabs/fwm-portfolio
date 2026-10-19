import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { ResumeColumn } from "@/components/home/ResumeColumn";
import { NewsCard } from "@/components/actualites/NewsCard";
import { VisionCard } from "@/components/vision/VisionCard";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { CountUp } from "@/components/ui/CountUp";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icon } from "@/components/ui/Icon";
import {
  contactInfo,
  educationHighlights,
  latestNews,
  professionalExperience,
  visionAxes,
} from "@/lib/mock-data";

const stats = [
  { value: 20, suffix: "+", label: "Ans d'expérience" },
  { value: 15, suffix: "", label: "Années au MEF" },
  { value: 3, suffix: "", label: "Entreprises dirigées" },
];

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* CE QUE JE FAIS */}
      <section className="section">
        <div className="page-shell">
          <Reveal>
            <SectionTitle eyebrow="Engagements" title="Ce que je défends" />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visionAxes.map((axis, i) => (
              <Reveal key={axis.id} delay={(i % 3) * 100}>
                <VisionCard axis={axis} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES */}
      <section className="section">
        <div className="page-shell grid gap-8 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="neu flex flex-col items-center px-6 py-12 text-center">
                <CountUp to={s.value} suffix={s.suffix} className="font-display text-6xl font-extrabold text-accent" />
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-heading">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PARCOURS (CV) */}
      <section className="section">
        <div className="page-shell">
          <Reveal>
            <SectionTitle eyebrow="Plus de 20 ans d'expérience" title="Mon parcours" align="center" />
          </Reveal>
          <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-10">
            <Reveal>
              <ResumeColumn eyebrow="2000 - 2010" title="Formation" entries={educationHighlights} />
            </Reveal>
            <Reveal delay={100}>
              <ResumeColumn eyebrow="2004 - aujourd'hui" title="Expérience" entries={professionalExperience.slice(0, 4)} />
            </Reveal>
          </div>
          <div className="mt-14 text-center">
            <Link href="/parcours" className="neu-btn !text-accent">
              Voir le parcours complet
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ACTUALITÉS */}
      <section className="section">
        <div className="page-shell">
          <Reveal>
            <SectionTitle eyebrow="Communiqués et prises de parole" title="Actualités" align="center" />
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((article, i) => (
              <Reveal key={article.id} delay={i * 100}>
                <NewsCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section border-b-0">
        <div className="page-shell">
          <Reveal>
            <SectionTitle eyebrow="Contact" title="Prenons contact" align="center" />
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr,1.2fr]">
            <Reveal>
              <div className="neu h-full p-7">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-[#e6e6e6]">
                  <Image src="/id.jpeg" alt="Fritz William Michel" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-center" />
                </div>
                <h3 className="mt-7 font-display text-2xl font-bold text-heading">Fritz William Michel</h3>
                <p className="mt-1 text-sm text-muted">Administrateur public · Chef d&apos;entreprise</p>
                <p className="mt-5 text-[15px] leading-7 text-body">
                  Pour toute demande officielle, médiatique ou institutionnelle. Réponse sous 48h ouvrées.
                </p>
                <div className="mt-6 space-y-2 text-[15px] text-body">
                  <p>
                    Email : <a href={`mailto:${contactInfo.generalEmail}`} className="text-heading hover:text-accent">{contactInfo.generalEmail}</a>
                  </p>
                  <p>Bureau : <span className="text-heading">{contactInfo.office}</span></p>
                </div>
                <span className="label-muted mt-8 !text-xs">Me retrouver sur</span>
                <div className="mt-4 flex gap-4">
                  {[
                    { icon: "facebook", href: "https://facebook.com", label: "Facebook" },
                    { icon: "twitter", href: "https://x.com", label: "X / Twitter" },
                    { icon: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="neu-icon">
                      <Icon name={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="neu h-full p-7 sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
