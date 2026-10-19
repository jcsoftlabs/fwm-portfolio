import { PageHero } from "@/components/ui/PageHero";
import { Timeline } from "@/components/parcours/Timeline";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import prisma from "@/lib/prisma";
import { Spotlight } from "@/components/ui/Spotlight";
import {
  languageHighlights,
  organizationHighlights,
  professionalExperience,
  seminarHighlights,
} from "@/lib/mock-data";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function ParcoursPage() {
  const timelineItems = await prisma.experience.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div className="pb-32">
      <PageHero title="Parcours" accent="public" description="Une chronologie détaillée des engagements, responsabilités et formations." />

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Biographie"
          title="Chronologie du parcours"
          description="Les repères ci-dessous présentent une chronologie du parcours académique, administratif et professionnel."
        />

        <section className="mt-20">
          <Timeline items={timelineItems as any} />
        </section>

        <section className="mt-32 grid gap-5 lg:grid-cols-2">
          <Card>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-1">Formation continue</p>
            <h2 className="font-display text-4xl leading-tight text-white mt-2">Séminaires et perfectionnement</h2>
            <div className="mt-6 space-y-3">
              {seminarHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm leading-7 text-white/60 transition-colors hover:border-gold/30"
                >
                  <span className="mt-0.5 text-xs text-gold">✦</span>
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-1">Compétences</p>
            <h2 className="font-display text-4xl leading-tight text-white mt-2">Profil professionnel</h2>
            <div className="mt-6">
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Expertise</h3>
              <ul className="space-y-2">
                {professionalExperience.map((exp) => (
                  <li key={exp} className="flex items-start gap-3 text-sm text-white/55">
                    <span className="mt-0.5 text-xs text-gold">✦</span>
                    {exp}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Langues</h3>
              <div className="flex flex-wrap gap-2">
                {languageHighlights.map((lang) => (
                  <span key={lang} className="rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-goldLight">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <section className="mt-32">
          <SectionTitle
            eyebrow="Gouvernance"
            title="Direction institutionnelle"
            description="Conseils d'administration et comités de direction."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {organizationHighlights.map((org) => (
              <Spotlight key={org} className="p-7">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-gold-metal text-sm text-night shadow-glow">◆</div>
                <p className="font-display text-2xl leading-snug text-white">{org}</p>
              </Spotlight>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
