import { notFound } from "next/navigation";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { formatLongDate } from "@/lib/utils";

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
    <article className="pb-32">
      {/* En-tête de l'article */}
      <header className="relative overflow-hidden border-b border-white/[0.07] pb-20 pt-40 sm:pt-44">
        <div className="pointer-events-none absolute inset-0">
          <div className="bg-grid absolute inset-0" />
          <div className="absolute -top-40 left-1/3 h-[460px] w-[460px] animate-aurora rounded-full bg-gold/20 blur-[120px]" />
        </div>
        <div className="reveal-blur relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/actualites" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-goldLight">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Toutes les actualités
          </Link>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <span className="eyebrow">{article.category}</span>
            <span className="text-sm text-white/40">{formatLongDate(article.date.toISOString())}</span>
          </div>
          <h1 className="mt-8 font-display text-5xl leading-[1.02] tracking-tight text-white md:text-7xl">
            {article.title}
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-white/55">{article.excerpt}</p>
        </div>
      </header>

      {/* Contenu */}
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-8 text-lg leading-9 text-white/65 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-goldLight">
          {(article.content as string[]).map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-20 flex items-center justify-between border-t border-white/[0.08] pt-10">
          <Link href="/actualites" className="btn-ghost">← Retour</Link>
          <Link href="/contact" className="btn-gold">Contact presse →</Link>
        </div>
      </div>
    </article>
  );
}
