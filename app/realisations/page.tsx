import { PageHero } from "@/components/ui/PageHero";
import { AchievementCard } from "@/components/realisations/AchievementCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import prisma from "@/lib/prisma";
import {
  contributionThemes,
  professionalExperience,
  verifiedReferencePoints,
} from "@/lib/mock-data";

export const dynamic = "force-dynamic";
export const revalidate = 60;

const themeIcons = ["trending", "landmark", "messages", "briefcase"];

export default async function RealisationsPage() {
  const achievements = await prisma.achievement.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <PageHero title="Réalisations" accent="clés" description="Contributions, responsabilités et repères d'expérience dans l'administration publique haïtienne et le secteur privé." />

      {/* Axes de contribution */}
      <section className="section">
        <div className="page-shell">
          <SectionTitle
            eyebrow="Axes de contribution"
            title="Domaines d'expertise et de responsabilité"
            description="Quatre axes structurants qui reflètent l'étendue et la cohérence du parcours professionnel."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {contributionThemes.map((section, i) => (
              <Reveal key={section.title} delay={i * 90}>
                <div className="neu-card h-full px-8 py-11">
                  <Icon name={themeIcons[i] ?? "check"} className="h-10 w-10 text-accent" strokeWidth={1.2} />
                  <h2 className="mt-7 font-display text-xl font-semibold text-heading">{section.title}</h2>
                  <p className="mt-4 text-[15px] leading-7 text-body">{section.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Responsabilités documentées */}
      <section className="section">
        <div className="page-shell">
          <SectionTitle eyebrow="Responsabilités clés" title="Fonctions et responsabilités documentées" />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {achievements.map((achievement: any) => (
              <Reveal key={achievement.id}>
                <AchievementCard achievement={achievement} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Points de référence + lecture */}
      <section className="section border-b-0">
        <div className="page-shell grid gap-8 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <span className="label !text-xs">Points de référence</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-heading">Éléments établis par le CV officiel</h2>
              <ul className="mt-8 space-y-4">
                {verifiedReferencePoints.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[15px] leading-7 text-body">
                    <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card className="h-full">
              <span className="label !text-xs">Lecture institutionnelle</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-heading">
                Une trajectoire cohérente entre administration, budget et direction
              </h2>
              <p className="mt-6 text-[15px] leading-8 text-body">
                Maîtrise des sujets administratifs et budgétaires, expérience de coordination publique, puis prise de responsabilités exécutives dans le secteur privé — une trajectoire qui reflète la continuité et la progression d&apos;un haut fonctionnaire engagé.
              </p>
              <ul className="mt-8 space-y-4">
                {professionalExperience.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[15px] leading-7 text-body">
                    <Icon name="briefcase" className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
