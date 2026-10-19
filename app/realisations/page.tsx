import { PageHero } from "@/components/ui/PageHero";
import { AchievementCard } from "@/components/realisations/AchievementCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import prisma from "@/lib/prisma";
import { Reveal } from "@/components/ui/Reveal";
import { Spotlight } from "@/components/ui/Spotlight";
import {
  contributionThemes,
  professionalExperience,
  verifiedReferencePoints,
} from "@/lib/mock-data";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function RealisationsPage() {
  const achievements = await prisma.achievement.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="pb-32">
      <PageHero title="Réalisations" accent="clés" description="Contributions, responsabilités et repères d'expérience dans l'administration publique haïtienne et le secteur privé." />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">

        {/* Contribution Themes */}
        <SectionTitle
          eyebrow="Axes de contribution"
          title="Domaines d'expertise et de responsabilité"
          description="Quatre axes structurants qui reflètent l'étendue et la cohérence du parcours professionnel."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contributionThemes.map((section, i) => (
            <Reveal key={section.title} animation="blur" delay={i * 90}>
              <Spotlight className="h-full p-8">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Axe</p>
                  <span className="font-display text-4xl italic text-white/10 transition-colors duration-500 group-hover:text-gold/40">0{i + 1}</span>
                </div>
                <h2 className="mt-8 font-display text-3xl leading-tight text-white">{section.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{section.description}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-32">
          <SectionTitle
            eyebrow="Responsabilités clés"
            title="Fonctions et responsabilités documentées"
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {achievements.map((achievement: any) => (
              <Reveal key={achievement.id} animation="blur">
                <AchievementCard achievement={achievement} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Reference Points + Experience */}
        <div className="mt-32 grid gap-5 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="gold-border rounded-3xl bg-gradient-to-br from-gold/10 to-onyx p-8 sm:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Points de référence</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-white">
              Éléments établis par le CV officiel
            </h2>
            <div className="mt-6 space-y-3">
              {verifiedReferencePoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm leading-7 text-white/60"
                >
                  <span className="mt-0.5 text-xs text-gold">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-3xl p-8 sm:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Lecture institutionnelle</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-white">
              Une trajectoire cohérente entre administration, budget et direction
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/55">
              Maîtrise des sujets administratifs et budgétaires, expérience de coordination publique, puis prise de responsabilités exécutives dans le secteur privé — une trajectoire qui reflète la continuité et la progression d'un haut fonctionnaire engagé.
            </p>
            <div className="mt-6 grid gap-3">
              {professionalExperience.slice(0, 4).map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4 text-sm leading-7 text-white/60"
                >
                  <span className="mt-0.5 text-xs text-gold">✦</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
