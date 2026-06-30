import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
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
    <div className="pb-16">
      {/* Article Hero Banner */}
      <div className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-block bg-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold border border-gold/20">
              {article.category}
            </span>
            <span className="text-sm text-slate-500">{formatLongDate(article.date.toISOString())}</span>
          </div>
          <h1 className="font-display text-3xl font-bold leading-tight text-navy md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-steel">
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="border border-slate-200 bg-white p-8 md:p-12 shadow-soft">
          <div className="space-y-6 text-base leading-8 text-steel">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
