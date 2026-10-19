import { PageHero } from "@/components/ui/PageHero";
import { Timeline } from "@/components/parcours/Timeline";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import prisma from "@/lib/prisma";
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
    <div>
      <PageHero title="Parcours" accent="public" description="Une chronologie détaillée des engagements, responsabilités et formations." />

      <section className="section">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Biographie"
            title="Chronologie du parcours"
            description="Les repères ci-dessous présentent une chronologie du parcours académique, administratif et professionnel."
          />
          <div className="mt-16">
            <Timeline items={timelineItems as any} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page-shell grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <span className="label !text-xs">Formation continue</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-heading">Séminaires et perfectionnement</h2>
              <ul className="mt-8 space-y-5">
                {seminarHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[15px] leading-7 text-body">
                    <Icon name="graduation" className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card className="h-full">
              <span className="label !text-xs">Compétences</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-heading">Profil professionnel</h2>
              <p className="label-muted mt-8 !text-xs">Expertise</p>
              <ul className="mt-5 space-y-4">
                {professionalExperience.map((exp) => (
                  <li key={exp} className="flex items-start gap-4 text-[15px] leading-7 text-body">
                    <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    {exp}
                  </li>
                ))}
              </ul>
              <p className="label-muted mt-10 !text-xs">Langues</p>
              <div className="mt-5 flex flex-wrap gap-4">
                {languageHighlights.map((lang) => (
                  <span key={lang} className="neu-btn !cursor-default !normal-case !tracking-normal">
                    {lang}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="section border-b-0">
        <div className="page-shell">
          <SectionTitle
            eyebrow="Gouvernance"
            title="Direction institutionnelle"
            description="Conseils d'administration et comités de direction."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {organizationHighlights.map((org, i) => (
              <Reveal key={org} delay={i * 100}>
                <div className="neu-card flex h-full items-start gap-6 p-9">
                  <span className="neu-icon shrink-0 text-accent">
                    <Icon name="award" />
                  </span>
                  <p className="font-display text-lg font-semibold leading-snug text-heading">{org}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
