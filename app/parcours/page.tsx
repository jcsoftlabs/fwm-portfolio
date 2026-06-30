import { Timeline } from "@/components/parcours/Timeline";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import prisma from "@/lib/prisma";
import {
  languageHighlights,
  organizationHighlights,
  professionalExperience,
  seminarHighlights,
} from "@/lib/mock-data";

export const revalidate = 60;

export default async function ParcoursPage() {
  const timelineItems = await prisma.experience.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div className="pb-16">
      {/* Sub-page Hero Banner */}
      <div className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Site Officiel</p>
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight text-navy sm:text-5xl">
            Parcours
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
            Une chronologie détaillée des engagements, responsabilités et formations.
          </p>
          <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
            <span>Accueil</span>
            <span>›</span>
            <span className="text-navy font-medium">Parcours</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Biographie"
          title="Chronologie du parcours"
          description="Les repères ci-dessous présentent une chronologie du parcours académique, administratif et professionnel."
        />

        <section className="mt-14">
          <Timeline items={timelineItems as any} />
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <Card className="bg-white">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold mb-1">Formation continue</p>
            <h2 className="font-display text-2xl font-semibold text-navy mt-2">Séminaires et perfectionnement</h2>
            <div className="mt-6 space-y-3">
              {seminarHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-l-[3px] border-gold/30 bg-slate-50 px-4 py-3 text-sm leading-7 text-steel"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 bg-gold" />
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-white">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold mb-1">Compétences</p>
            <h2 className="font-display text-2xl font-semibold text-navy mt-2">Profil professionnel</h2>
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-3">Expertise</h3>
              <ul className="space-y-2">
                {professionalExperience.map((exp) => (
                  <li key={exp} className="flex items-start gap-3 text-sm text-steel">
                    <span className="mt-1.5 h-[1px] w-3 bg-gold" />
                    {exp}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-3">Langues</h3>
              <div className="flex flex-wrap gap-2">
                {languageHighlights.map((lang) => (
                  <span key={lang} className="bg-slate-100 text-steel border border-slate-200 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <section className="mt-16 border-t border-slate-200 pt-16">
          <SectionTitle
            eyebrow="Gouvernance"
            title="Direction institutionnelle"
            description="Conseils d'administration et comités de direction."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {organizationHighlights.map((org) => (
              <div key={org} className="border border-slate-200 bg-white px-5 py-4 shadow-sm hover:border-gold/30 transition-colors">
                <div className="h-1 w-6 bg-gold mb-3" />
                <p className="text-sm font-semibold text-navy">{org}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
