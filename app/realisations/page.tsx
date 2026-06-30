import { AchievementCard } from "@/components/realisations/AchievementCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import prisma from "@/lib/prisma";
import {
  contributionThemes,
  professionalExperience,
  verifiedReferencePoints,
} from "@/lib/mock-data";

export const revalidate = 60;

export default async function RealisationsPage() {
  const achievements = await prisma.achievement.findMany({
    orderBy: { createdAt: "desc" },
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
            Réalisations
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
            Contributions, responsabilités et repères d'expérience dans l'administration publique haïtienne et le secteur privé.
          </p>
          <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
            <span>Accueil</span>
            <span>›</span>
            <span className="text-navy font-medium">Réalisations</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* Contribution Themes */}
        <SectionTitle
          eyebrow="Axes de contribution"
          title="Domaines d'expertise et de responsabilité"
          description="Quatre axes structurants qui reflètent l'étendue et la cohérence du parcours professionnel."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contributionThemes.map((section) => (
            <div key={section.title} className="group border-y border-r border-l-[3px] border-slate-200 border-l-gold bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-strong hover:bg-gold/5">
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Axe</p>
                <h2 className="mt-3 font-display text-lg font-semibold text-navy">{section.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-steel">{section.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <SectionTitle
            eyebrow="Responsabilités clés"
            title="Fonctions et responsabilités documentées"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {achievements.map((achievement: any) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>

        {/* Reference Points + Experience */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="border border-slate-200 bg-white shadow-soft p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-haitiBlue">Points de référence</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-navy">
              Éléments établis par le CV officiel
            </h2>
            <div className="mt-6 space-y-3">
              {verifiedReferencePoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-l-2 border-haitiBlue/30 bg-slate-50 px-4 py-3 text-sm leading-7 text-steel"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-haitiBlue" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="border border-slate-200 bg-white shadow-soft p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-haitiBlue">Lecture institutionnelle</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-navy">
              Une trajectoire cohérente entre administration, budget et direction
            </h2>
            <p className="mt-4 text-sm leading-8 text-steel">
              Maîtrise des sujets administratifs et budgétaires, expérience de coordination publique, puis prise de responsabilités exécutives dans le secteur privé — une trajectoire qui reflète la continuité et la progression d'un haut fonctionnaire engagé.
            </p>
            <div className="mt-6 grid gap-3">
              {professionalExperience.slice(0, 4).map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-steel"
                >
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-haitiBlue" />
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
