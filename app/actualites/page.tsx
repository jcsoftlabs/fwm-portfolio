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
    <div>
      <PageHero title="Actualités" accent="récentes" description="Communiqués, notes de réflexion, rencontres institutionnelles et prises de parole publiques." />

      <section className="section border-b-0">
        <div className="page-shell">
          <SectionTitle
            eyebrow="Publications"
            title="Toutes les actualités"
            description="Retrouvez l'ensemble des communiqués, comptes rendus et notes institutionnelles publiés par Fritz William Michel."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article: any, i: number) => (
              <Reveal key={article.id} delay={(i % 3) * 100}>
                <NewsCard article={article as any} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
