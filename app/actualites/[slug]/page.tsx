import { notFound } from "next/navigation";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { formatLongDate } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

type NewsArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const article = await prisma.newsArticle.findUnique({
    where: { slug }
  });

  if (!article) {
    notFound();
  }

  return (
    <article>
      {/* En-tête de l'article */}
      <header className="border-b border-line py-20 lg:py-24">
        <div className="reveal-up mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <Link href="/actualites" className="neu-btn !px-5 !py-3">
            <Icon name="arrow-left" className="h-4 w-4" />
            Toutes les actualités
          </Link>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-[13px]">
            <span className="font-medium uppercase tracking-wide text-accent">{article.category}</span>
            <span className="text-muted">{formatLongDate(article.date.toISOString())}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-heading md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-[1.9] text-body">{article.excerpt}</p>
        </div>
      </header>

      {/* Contenu */}
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="neu space-y-7 p-8 text-[17px] leading-9 text-body sm:p-12">
          {(article.content as string[]).map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
          <Link href="/actualites" className="neu-btn">
            <Icon name="arrow-left" className="h-4 w-4" />
            Retour
          </Link>
          <Link href="/contact" className="neu-btn !text-accent">
            Contact presse
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
