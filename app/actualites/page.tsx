import { PageHero } from "@/components/ui/PageHero";
import { NewsCard } from "@/components/actualites/NewsCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import prisma from "@/lib/prisma";
import { Reveal } from "@/components/ui/Reveal";

export const dynamic = "force-dynamic";
export const revalidate = 60; // Revalidate every minute

export default async function ActualitesPage() {
  const articles = await prisma.newsArticle.findMany({
    where: { published: true },
    orderBy: { date: "desc" },
  });

  return (
    <div className="pb-32">
      <PageHero title="Actualités" accent="récentes" description="Communiqués, notes de réflexion, rencontres institutionnelles et prises de parole publiques." />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Publications"
          title="Toutes les actualités"
          description="Retrouvez l'ensemble des communiqués, comptes rendus et notes institutionnelles publiés par Fritz William Michel."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article: any, i: number) => (
            <Reveal key={article.id} animation="blur" delay={(i % 3) * 100}>
              <NewsCard article={article as any} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
