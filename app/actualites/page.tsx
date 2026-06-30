import { NewsCard } from "@/components/actualites/NewsCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import prisma from "@/lib/prisma";

export const revalidate = 60; // Revalidate every minute

export default async function ActualitesPage() {
  const articles = await prisma.newsArticle.findMany({
    where: { published: true },
    orderBy: { date: "desc" },
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
            Actualités
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
            Communiqués, notes de réflexion, rencontres institutionnelles et prises de parole publiques.
          </p>
          <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
            <span>Accueil</span>
            <span>›</span>
            <span className="text-navy font-medium">Actualités</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Publications"
          title="Toutes les actualités"
          description="Retrouvez l'ensemble des communiqués, comptes rendus et notes institutionnelles publiés par Fritz William Michel."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article as any} />
          ))}
        </div>
      </div>
    </div>
  );
}
