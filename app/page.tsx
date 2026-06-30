import { Hero } from "@/components/home/Hero";
import { HighlightCards } from "@/components/home/HighlightCards";
import { NewsCard } from "@/components/actualites/NewsCard";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import {
  educationHighlights,
  latestNews,
  professionalExperience,
  profile,
  visionAxes,
  journeyHighlights,
} from "@/lib/mock-data";

const keyFigures = [
  { value: "20+", label: "Années d'expérience", sub: "Administration publique & secteur privé" },
  { value: "3", label: "Postes de PDG", sub: "Direction exécutive depuis 2018" },
  { value: "15", label: "Années au MEF", sub: "Ministère de l'Économie et des Finances" },
  { value: "2", label: "Universités", sub: "INAGHEI, IHECE & Illinois State University" },
];

export default function HomePage() {
  return (
    <div className="page-shell py-8 lg:py-10">
      <Reveal animation="fade">
        <Hero />
      </Reveal>

      {/* Key Figures Section */}
      <section className="mt-16">
        <Reveal>
          <div className="grid grid-cols-2 gap-px bg-slate-200 border border-slate-200 lg:grid-cols-4">
            {keyFigures.map((fig) => (
              <div key={fig.label} className="bg-white px-6 py-8 text-center">
                <p className="font-display text-4xl font-bold text-navy">{fig.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-haitiBlue">{fig.label}</p>
                <p className="mt-1 text-xs text-steel">{fig.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mt-20">
        <Reveal>
          <SectionTitle
            eyebrow="Résumé"
            title="Un parcours institutionnel structuré par des repères solides"
            description={profile.shortBio}
          />
        </Reveal>
        <div className="mt-10">
          <Reveal delay={150}>
            <HighlightCards />
          </Reveal>
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
        <Reveal>
          <Card className="bg-white h-full">
            <SectionTitle
              eyebrow="À propos"
              title="Un parcours public et professionnel ancré dans la rigueur"
              description="Un administrateur public, dirigeant et personnalité publique haïtienne dont le parcours associe administration publique, gestion financière et coordination institutionnelle."
            />
            <div className="mt-8 space-y-3">
              {journeyHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-l-2 border-haitiBlue/30 bg-slate-50 px-4 py-3 text-sm text-steel"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-haitiBlue" />
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={150}>
          <Card className="bg-white h-full">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-haitiBlue">
              Formation académique
            </p>
            <div className="mt-6 space-y-3">
              {educationHighlights.map((item) => (
                <div
                  key={item}
                  className="border border-slate-200 bg-white px-4 py-4 text-sm leading-7 text-steel"
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </section>

      <section className="mt-20">
        <Reveal animation="fade">
          <div className="border-l-4 border-navy bg-navy px-8 py-12 text-white lg:px-12">
            <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
                  Ligne éditoriale
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold text-white">
                  Une parole publique présentée avec retenue et hauteur institutionnelle.
                </h2>
              </div>
              <p className="text-base leading-8 text-slate-300 md:text-lg">
                L'architecture de contenu et les espaces visuels ont été conçus pour accueillir un site officiel, sans posture agressive ni logique de campagne directe. L'ensemble intègre biographies, médias officiels, prises de parole sourcées et documents institutionnels de référence.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-20">
        <Reveal>
          <SectionTitle
            eyebrow="Vision"
            title="Axes de vision"
            description="Une vision structurée autour de la responsabilité, de la continuité institutionnelle et du service public."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visionAxes.slice(0, 3).map((axis, i) => (
            <Reveal key={axis.id} delay={i * 100}>
              <div className="group h-full border-y border-r border-l-[3px] border-slate-200 border-l-gold bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong hover:bg-gold/5">
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">
                    {axis.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{axis.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div className="mt-8">
            <Button href="/vision" variant="ghost">
              Explorer la vision complète →
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="mt-20">
        <Reveal>
          <SectionTitle
            eyebrow="Expérience"
            title="Responsabilités administratives, financières et exécutives"
            description="Une sélection de fonctions illustrant un parcours continu entre service public, gestion financière et direction exécutive."
          />
        </Reveal>
        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {professionalExperience.slice(0, 6).map((item, i) => (
            <Reveal key={item} delay={i * 50}>
              <div
                className="flex h-full items-start gap-4 border border-slate-200 bg-white px-5 py-5 text-sm leading-7 text-steel shadow-soft transition-shadow duration-200 hover:shadow-strong"
              >
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-haitiBlue" />
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20 pb-6">
        <Reveal>
          <SectionTitle
            eyebrow="Actualités"
            title="Dernières actualités"
            description="Communiqués, notes de réflexion et rencontres institutionnelles."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {latestNews.map((article, i) => (
            <Reveal key={article.id} delay={i * 100}>
              <NewsCard article={article} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <Reveal>
          <SectionTitle
            eyebrow="Contact"
            title="Envoyer un message"
            description="Pour toute demande officielle, médiatique ou institutionnelle."
          />
        </Reveal>
        <div className="mt-10 mx-auto max-w-2xl border border-slate-200 bg-white p-8 shadow-soft">
          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
